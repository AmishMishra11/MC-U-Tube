import axios from "axios";
import { toast } from "react-toastify";

export const addLiked = async (video, dispatchVideo) => {
  const newToken = localStorage.getItem("token");
  try {
    const res = await axios({
      method: "POST",
      url: "/api/user/likes",
      data: { video: video },
      headers: {
        authorization: newToken,
      },
    });
    if (res.status === 201) {
      dispatchVideo({
        type: "UPDATE_LIKED",
        payload: res.data.likes,
      });
      toast.success("Video liked");
    }
  } catch (e) {
    console.log("error occured: ", e);
    toast.error("Failed to add video to likes");
  }
};
