import React from "react";
import PropTypes from "prop-types";
import PageLinkPrevious from "./PageLinkPrevious";
import PageLinkNext from "./PageLinkNext";
import PageLinkCurrent from "./PageLinkCurrent";
import PageLink from "./PageLink";

const PagingFooter = ({
  pageIndex,
  pageSize,
  totalCount,
  onPageIndexChanged
}) => {
  const range = (start, end) => {
    if (end < start) return [];
    return [...Array(1 + end - start)].map((_, i) => start + i);
  };

  const pageCount =
    Math.trunc(totalCount / pageSize) + (totalCount % pageSize ? 1 : 0);

  const preCurrentPages = range(1, pageIndex - 1);
  const postCurrentPages = range(pageIndex + 1, pageCount);

  const handleNavigatToPage = targetPageIndex => {
    onPageIndexChanged(targetPageIndex);
  };

  return (
    <div>
      <PageLinkPrevious
        currentPageIndex={pageIndex}
        onNavigate={handleNavigatToPage}
      />
      {preCurrentPages.map(i => (
        <PageLink key={i} pageIndex={i} onNavigate={handleNavigatToPage} />
      ))}
      <PageLinkCurrent currentPageIndex={pageIndex} />
      {postCurrentPages.map(i => (
        <PageLink key={i} pageIndex={i} onNavigate={handleNavigatToPage} />
      ))}
      <PageLinkNext
        currentPageIndex={pageIndex}
        totalPageCount={pageCount}
        onNavigate={handleNavigatToPage}
      />
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
