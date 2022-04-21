import axios from "axios";

export const loadVideos = async (dispatchVideo) => {
  try {
    dispatchVideo({ type: "LOAD_VIDEOS" });
    const { data } = await axios.get("/api/videos");

    dispatchVideo({
      type: "LOAD_VIDEOS_SUCCESS",
      payload: data.videos,
    });
  } catch (e) {
    dispatchVideo({ type: "LOAD_FAIL" });
    console.log(e);
  }
};
