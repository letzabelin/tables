import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';

import { asc, desc } from '../features/filter/filterSlice.js';

export default () => {
  const data = useSelector((state) => state.data);

  return (
    <Table hover striped>
      <thead>
        <tr>
          <th style={{ cursor: 'pointer' }} onClick={() => console.log('First Name')}>
            First Name
          </th>
          <th style={{ cursor: 'pointer' }} onClick={() => console.log('Last Name')}>
            Last Name
          </th>
          <th style={{ cursor: 'pointer' }} onClick={() => console.log('Age')}>
            Age
          </th>
          <th style={{ cursor: 'pointer' }} onClick={() => console.log('Job')}>
            Job
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ firstName, lastName, age, job, uuid }) => {
          return (
            <tr key={uuid}>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{age}</td>
              <td>{job}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
