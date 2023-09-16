import React from "react";
import Header from "./Header";
import Produtos from "./Produtos";
import Home from "./Home";

let Pagina;
const { pathname } = window.location;

if (pathname === "/produtos") {
  Pagina = Produtos;
} else {
  Pagina = Home;
}

function App() {
  return (
    <>
      <Header />
      <Pagina />
    </>
  );
}

export default App;
