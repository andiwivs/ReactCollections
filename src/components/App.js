import React from "react";
import PropTypes from "prop-types";
import PersonService from "../application/PersonService";
import "./App.css";

const App = () => {
  const people = PersonService.GetAllPeople();

  let hasPeople = people && people.length;

  return (
    <div>
      <h1>Collections</h1>

      <ConditionalView isVisible={!hasPeople}>
        <PeopleEmpty />
      </ConditionalView>

      <ConditionalView isVisible={hasPeople}>
        <PeopleView people={people} />
      </ConditionalView>
    </div>
  );
};

const ConditionalView = props => {
  return (
    <div style={{ display: props.isVisible ? "inherit" : "none" }}>
      {props.isVisible ? props.children : null}
    </div>
  );
};

ConditionalView.propTypes = {
  isVisible: PropTypes.bool.isRequired
};

const PeopleEmpty = () => {
  return (
    <div>
      <em>No people were found</em>
    </div>
  );
};

const PeopleView = props => {
  return (
    <div>
      {props.people.map(person => (
        <PersonView key={person.id} {...person} />
      ))}
    </div>
  );
};

const PersonView = props => {
  return <div className="person-container">{props.name}</div>;
};

export default App;
