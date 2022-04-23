import { createContext, useContext, useReducer, useEffect } from "react";

import { VideoReducer } from "../Reducers/VideoReducer";
import { loadHistory } from "../Services/History/loadHistory";
import { loadWatchlater } from "../Services/Watchlater/loadWatchlater";

const VideoContext = createContext(null);

const useVideo = () => useContext(VideoContext);

const VideoContextProvider = ({ children }) => {
  useEffect(() => {
    loadHistory();
    loadWatchlater();
  }, []);

  const [stateVideo, dispatchVideo] = useReducer(VideoReducer, {
    loading: true,
    video: [],
    history: [],
    watchlater: [],
  });

  return (
    <VideoContext.Provider value={{ stateVideo, dispatchVideo }}>
      {children}
    </VideoContext.Provider>
  );
};

export { useVideo, VideoContextProvider };
