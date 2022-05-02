import axios from "axios";
import { toast } from "react-toastify";
export const addPlaylist = async (title, dispatchVideo) => {
  const newToken = localStorage.getItem("token");
  try {
    const res = await axios({
      method: "POST",
      url: "/api/user/playlists",
      data: {
        playlist: { title: title, description: "" },
      },
      headers: {
        authorization: newToken,
      },
    });

    if (res.status === 201) {
      dispatchVideo({
        type: "UPDATE_PLAYLIST",
        payload: res.data.playlists,
      });
      toast.success("Playlist Created");
    }
  } catch (e) {
    console.log("error occured: ", e);
    toast.error("Failed to create playlist");
  }
};
