import './App.scss';
import FooterBottom from './components/Footer/FooterBottom'
import {Route, Routes} from "react-router-dom";
import Layout from './components/Layout/Layout'
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import NotFound from './components/NotFound/notFound'
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          {/*<Route path='/allEntries' element={<AllEntries/>}/>*/}
          <Route path='/contact' element={<Contact/>}/>
          {/*<Route path='/entry/:id' element={<ArticleDetail/>}/>*/}
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
      <FooterBottom/>
    </>
  )
}

export default App
