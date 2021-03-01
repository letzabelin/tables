export default (arr, page, count) => {
  return arr.splice(page * count - count, count);
};
