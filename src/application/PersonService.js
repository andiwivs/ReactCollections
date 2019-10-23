import peopleData from "../datafake/people-data";
import Person from "./Person";

export default class PersonService {
  static GetAllPeople = () => {
    return peopleData.items.map(item => {
      return new Person(item.id, item.name);
    });
  };
}
