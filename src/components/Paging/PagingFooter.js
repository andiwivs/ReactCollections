import React from "react";
import PropTypes from "prop-types";
import PageLinkPrevious from "./PageLinkPrevious";
import PageLinkNext from "./PageLinkNext";

const PagingFooter = ({
  pageIndex,
  pageSize,
  totalCount,
  onPageIndexChanged
}) => {
  const handleNavigatToPage = targetPageIndex => {
    onPageIndexChanged(targetPageIndex);
  };

  const pageCount =
    Math.trunc(totalCount / pageSize) + (totalCount % pageSize ? 1 : 0);

  // let pages = [];
  // for (var i = 1; i <= pageCount; i++) {
  //   pages.push(i);
  // }

  return (
    <div>
      <div>({pageCount} pages)</div>
      <PageLinkPrevious
        currentPageIndex={pageIndex}
        onNavigate={handleNavigatToPage}
      />
      <PageLinkNext
        currentPageIndex={pageIndex}
        totalPageCount={pageCount}
        onNavigate={handleNavigatToPage}
      />
      {/* {pages.map(i => <PageLink pageIndex={i} currentPage={pageIndex} />)} */}
      {/* <select value={pageIndex} onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select> */}
    </div>
  );
};

PagingFooter.propTypes = {
  pageIndex: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  onPageIndexChanged: PropTypes.func.isRequired
};

export default PagingFooter;
