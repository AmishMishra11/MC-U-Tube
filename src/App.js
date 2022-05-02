import { Route, Routes } from "react-router-dom";
import "./App.css";

import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

import { RequiresAuth } from "./Components/RequiresAuth/RequiresAuth";

import {
  Explore,
  Footer,
  History,
  Home,
  Liked,
  Navigation,
  Playlist,
  Video,
  WatchLater,
} from "./Components";

import { useEffect } from "react";
import { loadVideos } from "./Services/Videos/loadVideos";
import { useVideo } from "./Context/VideoContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { dispatchVideo } = useVideo();

  useEffect(() => {
    loadVideos(dispatchVideo);
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact={true} path="/" element={<Landing />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="video/:videoId" element={<Video />} />

          <Route element={<RequiresAuth />}>
            <Route path="liked" element={<Liked />} />
            <Route path="playlist" element={<Playlist />} />
            <Route path="watchlater" element={<WatchLater />} />
            <Route path="history" element={<History />} />
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    </div>
  );
}

export default App;
