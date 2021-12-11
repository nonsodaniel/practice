import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/layouts/Header";
import News from "./components/news/News";
import NewsHero from "./components/news/NewsHero";

function App() {

  return (
    <div className="App">
      {/* <Header /> */}
      <NewsHero />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<News />} />
          {/* <Route path="/news" element={<Experiences />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
