import React from "react";
import PropTypes from "prop-types";
import Range from "../../application/Utils";
import PageLink from "./PageLink";

const PagingFooter = ({
  pageIndex,
  pageSize,
  totalCount,
  onPageIndexChanged
}) => {
  const pageCount =
    Math.trunc(totalCount / pageSize) + (totalCount % pageSize ? 1 : 0);

  const createPageLinkDto = index => {
    return {
      pageIndex: index,
      disabled: index === pageIndex,
      isCurrent: index === pageIndex,
      caption: index.toString()
    };
  };

  const createPageElipsesDto = index => {
    return {
      pageIndex: index,
      disabled: true,
      isCurrent: false,
      caption: "..."
    };
  };

  const maxBuffer = 3;

  // build unconstrained list of page links
  let pageDtos = [...Range(1, pageCount).map(i => createPageLinkDto(i))];
  let preCurrent = pageDtos.slice(0, pageIndex - 1);
  let current = pageDtos[pageIndex - 1];
  let postCurrent = pageDtos.slice(pageIndex);

  // restrict how many links appear to the left of the current page link
  if (preCurrent.length > maxBuffer) {
    let buffer = maxBuffer - 1 - (pageCount - pageIndex);

    preCurrent = [
      preCurrent[0],
      createPageElipsesDto(1),
      ...preCurrent.slice(preCurrent.length - buffer)
    ];

    if (buffer === 0) {
      preCurrent.push(pageDtos[pageIndex - 2]);
    }
  }

  // restrict how many links appear to the right of the current page link
  if (postCurrent.length > maxBuffer) {
    let buffer = maxBuffer - pageIndex;

    postCurrent = [
      ...postCurrent.slice(0, buffer),
      createPageElipsesDto(postCurrent.length),
      postCurrent[postCurrent.length - 1]
    ];

    if (buffer === 0) {
      postCurrent.splice(0, 0, pageDtos[pageIndex]);
    }
  }

  // reconstruct
  pageDtos = [...preCurrent, current, ...postCurrent];

  // always prepend previous
  pageDtos.splice(0, 0, {
    pageIndex: pageIndex - 1,
    disabled: pageIndex === 1,
    isCurrent: false,
    caption: "Previous"
  });

  // always append next
  pageDtos.push({
    pageIndex: pageIndex + 1,
    disabled: pageIndex === pageCount,
    isCurrent: false,
    caption: "Next"
  });

  const handleNavigatToPage = targetPageIndex => {
    onPageIndexChanged(targetPageIndex);
  };

  return (
    <div>
      {pageDtos.map((linkDto, i) => (
        <PageLink key={i} {...linkDto} onNavigate={handleNavigatToPage} />
      ))}
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
