import React from "react";
import NameCard from "./Components/nameCard";
import Container from "./Components/Container";
import CommandMenu from "./Components/CommandMenu";
import TestCommandMenu from "./Components/testCommandMenu";
import Time from "./Components/Time";
import Localiter from "./Components/Localiter";

const App = () => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          minWidth: "100%",
          justifyContent: "space-between"
        }}
      >
        <NameCard />
        {/* <CommandMenu /> */}
        <TestCommandMenu />
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Time />
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Localiter />
      </div>
    </Container>
  );
};

export default App;
