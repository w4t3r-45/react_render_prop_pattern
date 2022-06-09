export const Child1 = ({ counter, setCounter }) => {
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>setCounter</button>
      <p>{counter}</p>
    </div>
  );
};
