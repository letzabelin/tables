import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { Table as RBTable } from 'react-bootstrap';

import { actions } from '../../slices';
import paginate from '../../utils/paginate.js';

const Table = () => {
  const data = useSelector((state) => state.main.data);
  const order = useSelector((state) => state.filters.order);
  const { currentPage, quantity } = useSelector((state) => state.pages);
  const dispatch = useDispatch();

  const {
    filtersActions: { asc, desc, base },
  } = actions;

  const arrows = {
    asc: <span>&#9650;</span>,
    desc: <span>&#9660;</span>,
    base: <span>&#9658;</span>,
  };

  const changeOrder = () => {
    const handleOrder = {
      asc: () => {
        dispatch(base());
      },
      desc: () => {
        dispatch(asc());
      },
      base: () => {
        dispatch(desc());
      },
    };

    handleOrder[order]();
    return;
  };

  const displayData = (arr) => {
    const data = [...arr];
    const splicedArr = paginate(data, currentPage, quantity);
    const descendingArr = _.sortBy(splicedArr, ({ firstName }) => firstName);
    const ascendingArr = [...descendingArr].reverse();

    const mappings = {
      asc: ascendingArr,
      desc: descendingArr,
      base: splicedArr,
    };

    return mappings[order].map(({ firstName, lastName, age, job, uuid }) => (
      <tr key={uuid}>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{age}</td>
        <td>{job}</td>
      </tr>
    ));
  };

  return (
    <RBTable hover striped>
      <thead>
        <tr>
          <th style={{ cursor: 'pointer' }} onClick={changeOrder}>
            First Name {arrows[order]}
          </th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Job</th>
        </tr>
      </thead>
      <tbody>{displayData(data)}</tbody>
    </RBTable>
  );
};

export default Table;
