import "./styles.css";
import { Wrapper } from "./wrapper";
import { Child1 } from "./child1";

export default function App() {
  return (
    <div className="App">
      <Wrapper
        render={({ counter, setCounter }) => {
          return (
            <>
              <Child1 counter={counter} setCounter={setCounter} />
              <Child1 counter={counter} setCounter={setCounter} />
            </>
          );
        }}
      />
    </div>
  );
}
