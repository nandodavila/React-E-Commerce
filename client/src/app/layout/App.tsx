import { Container, CssBaseline } from "@mui/material";
import { useEffect, useState } from "react"
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/products"
import Header from "./Header";

function App() {
  
  
  return (
    <>
      <CssBaseline/>
      <Header/>
      <Container>
        <Catalog/>
      </Container>
      
    </>
  );
}

export default App;
