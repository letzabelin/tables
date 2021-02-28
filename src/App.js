import makeData from './utils/makeData';

function App() {
  return (
    <>
      <div>Hello tables world</div>
      <code>{JSON.stringify(makeData(10), null, ' ')}</code>
    </>
  );
}

export default App;
