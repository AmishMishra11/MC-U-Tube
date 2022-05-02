import axios from "axios";
import { toast } from "react-toastify";
export const removePlaylist = async (id, dispatchVideo) => {
  const newToken = localStorage.getItem("token");

  try {
    const res = await axios({
      method: "DELETE",
      url: `/api/user/playlists/${id}`,
      headers: {
        authorization: newToken,
      },
    });
    if (res.status === 200) {
      dispatchVideo({
        type: "UPDATE_PLAYLIST",
        payload: res.data.playlists,
      });
      toast.success("Playlist Deleted");
    }
  } catch (e) {
    console.log("error occured: ", e);
    toast.error("Failed to delete playlist");
  }
};
