import axios from "axios";
import { toast } from "react-toastify";
export const removeHistory = async (id, dispatchVideo) => {
  const newToken = localStorage.getItem("token");

  try {
    const res = await axios({
      method: "DELETE",
      url: `/api/user/history/${id}`,

      headers: {
        authorization: newToken,
      },
    });
    if (res.status === 200) {
      dispatchVideo({ type: "UPDATE_HISTORY", payload: res.data.history });
      toast.success("Video removed from history");
    }
  } catch (e) {
    console.log("error occured: ", e);
    toast.error("Failed to remove video");
  }
};
