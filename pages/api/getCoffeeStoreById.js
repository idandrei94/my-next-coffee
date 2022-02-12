import {
  table,
  getMinifiedRecords,
  findRecordByFilter,
} from '../../lib/airtable';

const getCoffeeStoreById = async (req, res) => {
  const { id } = req.query;

  try {
    if (id) {
      const records = findRecordByFilter(id);

      if (records.length !== 0) {
        res.json(records);
      } else {
        res.json({ message: `ID could not be found` });
      }
    } else {
      res.status(400);
      res.json({ message: 'Id is missing' });
    }
  } catch (error) {
    res.status(500);
    res.json({ message: 'Something went wrong: ', error });
  }

  return <div>Enter</div>;
};

export default getCoffeeStoreById;
