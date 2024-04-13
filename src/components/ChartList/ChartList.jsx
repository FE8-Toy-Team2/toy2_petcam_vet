import { useState } from "react";

import { Container } from "./Styles.jsx";
import fadb from "./test/db.js";
import List from "./List.jsx";
import Nav from "./Nav.jsx";

function ChartList() {
  const [petState, setPetState] = useState("");

  return (
    <>
      <Container>
        <Nav petState={petState} setPetState={setPetState} />
        <div>{fadb.length} 마리 등록 됨</div>
        <List petState={petState} />
      </Container>
    </>
  );
}

export default ChartList;
