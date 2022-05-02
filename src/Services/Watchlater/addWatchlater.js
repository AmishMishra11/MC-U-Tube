import axios from "axios";
import { toast } from "react-toastify";

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
      toast.success("Added to Watchlater");
    }
  } catch (e) {
    console.log("error occured: ", e);
    toast.error("Failed to add video to watchlater");
  }
};
