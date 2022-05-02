import axios from "axios";
import { toast } from "react-toastify";

export const removeWatchlater = async (id, dispatchVideo) => {
  const newToken = localStorage.getItem("token");

  try {
    const res = await axios({
      method: "DELETE",
      url: `/api/user/watchlater/${id}`,

      headers: {
        authorization: newToken,
      },
    });

    if (res.status === 200) {
      dispatchVideo({
        type: "UPDATE_WATCHLATER",
        payload: res.data.watchlater,
      });
      toast.success("Removed from watchlater");
    }
  } catch (e) {
    console.log("error occured: ", e);
    toast.error("Failed to remove video from watchlater");
  }
};
