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

          <Route
            path="liked"
            element={
              <RequiresAuth>
                <Liked />
              </RequiresAuth>
            }
          />
          <Route
            path="playlist"
            element={
              <RequiresAuth>
                <Playlist />
              </RequiresAuth>
            }
          />
          <Route
            path="watchlater"
            element={
              <RequiresAuth>
                <WatchLater />
              </RequiresAuth>
            }
          />
          <Route
            path="history"
            element={
              <RequiresAuth>
                <History />
              </RequiresAuth>
            }
          />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
