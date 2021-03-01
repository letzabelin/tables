import faker from 'faker';

const makeRange = (length) => Array(length).fill(0);

const makePerson = () => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  age: faker.random.number({ min: 21, max: 50 }),
  job: faker.name.jobTitle(),
  uuid: faker.random.uuid(),
});

const makeData = (length) => makeRange(length).map(() => makePerson());

export default makeData;
