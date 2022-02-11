import { table, getMinifiedRecords } from '../../lib/airtable';

const createCoffeeStore = async (req, res) => {
  if (req.method == 'POST') {
    //find a record

    const { id, name, neighbourhood, address, distance, voting, imgUrl } =
      req.body;

    try {
      if (id) {
        const findCoffeeStoreRecords = await table
          .select({
            filterByFormula: `id="${id}"`,
          })
          .firstPage();

        if (findCoffeeStoreRecords.length !== 0) {
          const records = getMinifiedRecords(findCoffeeStoreRecords);

          res.json(records);
        } else {
          //create a record

          if (name) {
            const createRecords = await table.create([
              {
                fields: {
                  id,
                  name,
                  address,
                  neighbourhood,
                  distance,
                  voting,
                  imgUrl,
                },
              },
            ]);
            const records = getMinifiedRecords(createRecords);
            res.json(records);
          } else {
            res.status(400);
            res.json({ message: 'ID is missing' });
          }
        }
      } else {
        res.status(400);
        res.json({ message: 'ID or name is missing' });
      }
    } catch (err) {
      res.status(500);
      res.json({ message: 'Error creating or finding café', err });
    }
  }
};

export default createCoffeeStore;
