import { createContext, useContext, useReducer, useEffect } from "react";

import { VideoReducer } from "../Reducers/VideoReducer";
import { loadHistory } from "../Services/History/loadHistory";

const VideoContext = createContext(null);

const useVideo = () => useContext(VideoContext);

const VideoContextProvider = ({ children }) => {
  useEffect(() => {
    loadHistory();
  }, []);

  const [stateVideo, dispatchVideo] = useReducer(VideoReducer, {
    loading: true,
    video: [],
    history: [],
  });

  return (
    <VideoContext.Provider value={{ stateVideo, dispatchVideo }}>
      {children}
    </VideoContext.Provider>
  );
};

export { useVideo, VideoContextProvider };
