import { useState } from "react";
import Calculator from "./Component/Calculator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Calculator />
    </>
  );
}

export default App;
