import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

import { actions } from '../../slices';

const Pagination = () => {
  const { currentPage, quantity } = useSelector((state) => state.pages);
  const { length } = useSelector((state) => state.main.data);
  const dispatch = useDispatch();

  const lessThenMin = currentPage <= 1;
  const moreThenMax = currentPage >= length / quantity;

  const {
    pagesActions: { paginate, changeQuantity },
  } = actions;

  const navigatePage = (value) => () => {
    const action = { nextPage: value };
    dispatch(paginate(action));
  };

  const handleQuantity = (evt) => {
    const action = { newQuantity: Number(evt.target.value) };
    dispatch(changeQuantity(action));
  };

  return (
    <>
      <Button disabled={lessThenMin} onClick={navigatePage(-1)} variant="primary">
        Previous page
      </Button>
      {'  '}
      <Button variant="success">{currentPage}</Button>
      {'  '}
      <Button disabled={moreThenMax} onClick={navigatePage(1)} variant="primary">
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
