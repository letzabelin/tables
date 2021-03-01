import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

import { actions } from '../slices';

const Pagination = () => {
  const { currentPage, quantity } = useSelector((state) => state.pages);
  const { length } = useSelector((state) => state.main.data);

  const {
    pagesActions: { paginate, changeQuantity },
  } = actions;
  const dispatch = useDispatch();

  const handlePrevPage = (evt) => {
    const action = { nextPage: -1 };
    dispatch(paginate(action));
  };

  const handleNextPage = (evt) => {
    const action = { nextPage: 1 };
    dispatch(paginate(action));
  };

  const handleQuantity = (evt) => {
    const action = { newQuantity: Number(evt.target.value) };
    dispatch(changeQuantity(action));
  };

  const lessThenMin = currentPage <= 1;
  const moreThenMax = currentPage >= length / quantity;

  return (
    <>
      <Button disabled={lessThenMin} onClick={handlePrevPage} variant="primary">
        Previous page
      </Button>
      {'  '}
      <Button variant="success">{currentPage}</Button>
      {'  '}
      <Button disabled={moreThenMax} onClick={handleNextPage} variant="primary">
        Next page
      </Button>
      {'  '}
      <select style={{ fontSize: '16px' }} class="btn btn-primary btn-lg" value={quantity} onChange={handleQuantity}>
        {[5, 10, 20, 30].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </>
  );
};

export default Pagination;
