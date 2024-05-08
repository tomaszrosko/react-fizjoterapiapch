import './App.scss';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from './components/NotFound/notFound'
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
          <Route index element={<Home/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
