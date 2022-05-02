import axios from "axios";

export const loadCurrentVideo = async (id, setCurrVideo) => {
  try {
    const res = await axios({
      method: "GET",
      url: `/api/video/${id}`,
    });
    setCurrVideo(res.data.video);
  } catch (e) {
    console.log(e);
  }
};
