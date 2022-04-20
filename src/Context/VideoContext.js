import { createContext, useContext, useReducer } from "react";

import { VideoReducer } from "../Reducers/VideoReducer";

const VideoContext = createContext(null);

const useVideo = () => useContext(VideoContext);

const VideoContextProvider = ({ children }) => {
  const [stateVideo, dispatchVideo] = useReducer(VideoReducer, {
    loading: true,
    video: [],
  });

  return (
    <VideoContext.Provider value={{ stateVideo, dispatchVideo }}>
      {children}
    </VideoContext.Provider>
  );
};

export { useVideo, VideoContextProvider };
