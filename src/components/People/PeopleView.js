import React from "react";
import PropTypes from "prop-types";
import PagingHeader from "../Paging/PagingHeader";
import PagingFooter from "../Paging/PagingFooter";
import PersonView from "./PersonView";

const PeopleView = ({
  people,
  pageSize,
  pageIndex,
  totalCount,
  onPageSizeChanged,
  onPageIndexChanged
}) => {
  return (
    <div>
      <PagingHeader
        pageIndex={pageIndex}
        pageSize={pageSize}
        totalCount={totalCount}
        onPageSizeChanged={onPageSizeChanged}
      />
      {people.map(person => (
        <PersonView key={person.id} {...person} />
      ))}
      <PagingFooter
        pageIndex={pageIndex}
        pageSize={pageSize}
        totalCount={totalCount}
        onPageIndexChanged={onPageIndexChanged}
      />
    </div>
  );
};

PeopleView.propTypes = {
  pageIndex: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  onPageIndexChanged: PropTypes.func.isRequired,
  onPageSizeChanged: PropTypes.func.isRequired
};

export default PeopleView;
