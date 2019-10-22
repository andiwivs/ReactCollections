import peopleData from "../datafake/people-data";
import Person from "./Person";

export default class PersonService {
  static GetAllPeople = () => {
    return peopleData.items.map(function(item) {
      return new Person(item.id, item.name);
    });
  };
}
