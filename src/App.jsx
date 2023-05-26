import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screen/Home";
import TestApi from "./screen/TestApi";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />} >
            <Route path="/" element={<Home />} />
            <Route path="/test-api" element={<TestApi />} />
          </Route>
        </Routes>
      </BrowserRouter>      
    </Provider>
  )
}

export default App
