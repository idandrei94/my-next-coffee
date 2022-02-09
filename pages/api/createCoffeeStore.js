const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_KEY
);

const table = base('coffee-stores');

console.log({ table });

const createCoffeeStore = async (req, res) => {
  if (req.method == 'POST') {
    //find a record

    try {
      const findCoffeeStoreRecords = await table
        .select({
          filterByFormula: `id="0"`,
        })
        .firstPage();

      console.log({ findCoffeeStoreRecords });

      if (findCoffeeStoreRecords.length !== 0) {
        const records = findCoffeeStoreRecords.map((record) => {
          return {
            ...record.fields,
          };
        });
        res.json(records);
      } else {
        //create a record
        const createRecords = await table.create([
          {
            fields: {
              id: '0',
              name: 'My Favourite Café',
              address: 'My Address',
              neighbourhood: 'My Neighbourhood',
              distance: 700,
              voting: 7,
              imgUrl:
                'https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80',
            },
          },
        ]);
        const records = createRecords.map((record) => {
          return {
            ...record.fields,
          };
        });
        res.json(records);
      }
    } catch (err) {
      console.error('Error finding coffee shop', err);
      res.status(500);
      res.json({ message: 'Error finding café', err });
    }
  }
};

export default createCoffeeStore;
