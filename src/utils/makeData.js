import faker from 'faker';

const makeRange = (length) => Array(length).fill(0);

const makePerson = () => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: faker.random.number({ min: 21, max: 50 }),
    job: faker.name.jobTitle(),
    uuid: faker.random.uuid(),
  };
};

export default function makeData(length) {
  return makeRange(length).map(() => makePerson());
}
