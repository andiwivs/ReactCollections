const Range = (start, end) => {
  if (end < start) return [];
  return [...Array(1 + end - start)].map((_, i) => start + i);
};

export default Range;
