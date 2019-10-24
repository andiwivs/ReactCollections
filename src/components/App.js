import React, { useState } from "react";
import PersonService from "../application/PersonService";
import ConditionalView from "./ConditionalView";
import PeopleEmpty from "./People/PeopleEmpty";
import PeopleView from "./People/PeopleView";
import "./App.css";

const usePeopleState = () => {
  const [pageSize, setPageSize] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);
  let people = [];

  const pageSizeChangedHandler = newPageSize => {
    setPageSize(newPageSize);
    setPageIndex(1);
    refreshPeoplePage();
  };

  const pageIndexChangedHandler = pageIndex => {
    setPageIndex(pageIndex);
    refreshPeoplePage();
  };

  //////////////// START OF FAKE API CALL /////////////////
  const allPeople = PersonService.GetAllPeople();
  const totalCount = allPeople.length;
  ///////////////// END OF FAKE API CALL //////////////////

  const refreshPeoplePage = () => {
    people = allPeople.slice(pageSize * (pageIndex - 1), pageSize * pageIndex);
  };

  refreshPeoplePage();

  return {
    people,
    totalCount,
    pageSize,
    pageIndex,
    pageSizeChangedHandler,
    pageIndexChangedHandler
  };
};

const App = () => {
  const {
    people,
    totalCount,
    pageSize,
    pageIndex,
    pageSizeChangedHandler,
    pageIndexChangedHandler
  } = usePeopleState();

  let hasPeople = Boolean(people && people.length);

  return (
    <div>
      <h1>Collections</h1>

      <ConditionalView isVisible={!hasPeople}>
        <PeopleEmpty />
      </ConditionalView>

      <ConditionalView isVisible={hasPeople}>
        <PeopleView
          people={people}
          totalCount={totalCount}
          pageSize={pageSize}
          pageIndex={pageIndex}
          onPageSizeChanged={pageSizeChangedHandler}
          onPageIndexChanged={pageIndexChangedHandler}
        />
      </ConditionalView>
    </div>
  );
};

export default App;
