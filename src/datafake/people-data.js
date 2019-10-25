import Range from "../application/Utils";

const peopleData = {
  items: Range(1, 200).map(i => {
    return { id: i, name: `Fake ${i}` };
  })
};

export default peopleData;
