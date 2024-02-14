import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App" >
       <ChakraProvider>
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        {/* <Route index element={<Home />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}

        </Route>
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
    </div>
  );
}

export default App;
