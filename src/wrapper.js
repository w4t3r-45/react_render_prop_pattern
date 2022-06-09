import { useState, useEffect } from "react";

export const Wrapper = ({ render }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(0);
  }, []);

  return render({ counter: counter, setCounter: setCounter });
};
