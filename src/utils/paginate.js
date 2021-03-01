const paginate = (arr, page, count) => {
  return arr.splice(page * count - count, count);
};

export default paginate;
