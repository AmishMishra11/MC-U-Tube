import axios from "axios";
export const addWatchlater = async (video, dispatchVideo) => {
  const newToken = localStorage.getItem("token");
  try {
    const res = await axios({
      method: "POST",
      url: "/api/user/watchlater",
      data: { video: video },
      headers: {
        authorization: newToken,
      },
    });
    if (res.status === 201) {
      dispatchVideo({
        type: "UPDATE_WATCHLATER",
        payload: res.data.watchlater,
      });
    }
  } catch (e) {
    console.log("error occured: ", e);
  }
};
