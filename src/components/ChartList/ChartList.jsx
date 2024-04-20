import { useState } from "react";
import { Container } from "./Styles.jsx";
import List from "./List.jsx";
import Nav from "./Nav.jsx";

function ChartList() {
  const [petState, setPetState] = useState(null);
  return (
    <>
      <Container>
        <Nav setPetState={setPetState} />
        <List petState={petState} />
      </Container>
    </>
  );
}

export default ChartList;
