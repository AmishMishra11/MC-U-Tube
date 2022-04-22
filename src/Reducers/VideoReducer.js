export const VideoReducer = (stateVideo, actionVideo) => {
  switch (actionVideo.type) {
    case "LOAD_VIDEOS":
      return { ...stateVideo, loading: true };
    case "LOAD_VIDEOS_SUCCESS":
      return {
        ...stateVideo,
        loading: false,
        video: actionVideo.payload,
      };
    case "LOAD_FAIL":
      return { ...stateVideo, loading: false, video: null };

    case "UPDATE_HISTORY":
      return { ...stateVideo, history: actionVideo.payload };

    default:
      return stateVideo;
  }
};
