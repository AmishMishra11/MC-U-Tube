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
    case "UPDATE_WATCHLATER":
      return { ...stateVideo, watchlater: actionVideo.payload };
    case "UPDATE_LIKED":
      return { ...stateVideo, liked: actionVideo.payload };
    case "UPDATE_PLAYLIST":
      return { ...stateVideo, playlist: actionVideo.payload };

    case "UPDATE_PLAYLIST_ARRAY":
      return {
        ...stateVideo,
        playlist: stateVideo.playlist.map((item) =>
          item._id === actionVideo.payload._id
            ? { ...item, videos: actionVideo.payload.videos }
            : item
        ),
      };

    case "MODAL-DISPLAY":
      return { ...stateVideo, showModal: actionVideo.payload };
    default:
      return stateVideo;
  }
};
