import React, { useState } from "react";
import PersonService from "../application/PersonService";
import ConditionalView from "./ConditionalView";
import PagingHeader from "./Paging/PagingHeader";
import PagingFooter from "./Paging/PagingFooter";
import "./App.css";

const App = () => {
  const people = PersonService.GetAllPeople();

  let hasPeople = Boolean(people && people.length);

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

const PeopleEmpty = () => {
  return (
    <div>
      <em>No people were found</em>
    </div>
  );
};

const PeopleView = ({ people }) => {
  const [pageSize, setPageSize] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);

  const pageSizeChangedHandler = newPageSize => {
    setPageSize(newPageSize);
    setPageIndex(1);
  };

  const pageIndexChangedHandler = pageIndex => {
    setPageIndex(pageIndex);
  };

  return (
    <div>
      <PagingHeader
        pageIndex={pageIndex}
        pageSize={pageSize}
        totalCount={people.length}
        onPageSizeChanged={pageSizeChangedHandler}
      />
      {people.map(person => (
        <PersonView key={person.id} {...person} />
      ))}
      <PagingFooter
        pageIndex={pageIndex}
        pageSize={pageSize}
        totalCount={people.length}
        onPageIndexChanged={pageIndexChangedHandler}
      />
    </div>
  );
};

const PersonView = props => {
  return <div className="person-container">{props.name}</div>;
};

export default App;
