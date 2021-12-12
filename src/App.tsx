import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./components/auth/Login";
import CreateNews from "./components/news/CreateNews";
import News from "./components/news/News";

function App() {

  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/create-news" element={<CreateNews />} />
          <Route path="/news" element={<News />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
