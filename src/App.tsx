import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { makeServer } from "./mock";

import ListingPage from "./pages/ListingPage";
import TripDetailsPage from "./pages/TripDetailsPage";

makeServer();

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#f6f6f7",
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<ListingPage />} />
          <Route path="/trip/:id" element={<TripDetailsPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
