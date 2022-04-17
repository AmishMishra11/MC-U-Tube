import { Route, Routes } from "react-router-dom";
import "./App.css";

import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

import {
  Explore,
  Footer,
  History,
  Home,
  Liked,
  Navigation,
  Playlist,
  WatchLater,
} from "./Components";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact={true} path="/" element={<Landing />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="liked" element={<Liked />} />
          <Route path="playlist" element={<Playlist />} />
          <Route path="watchlater" element={<WatchLater />} />
          <Route path="history" element={<History />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
