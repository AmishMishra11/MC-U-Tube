import axios from "axios";
import { toast } from "react-toastify";
export const addPlaylistVideo = async (id, video, dispatchVideo) => {
  const newToken = localStorage.getItem("token");
  try {
    const res = await axios({
      method: "POST",
      url: `/api/user/playlists/${id}`,
      data: { video: video },
      headers: {
        authorization: newToken,
      },
    });

    if (res.status === 201) {
      dispatchVideo({
        type: "UPDATE_PLAYLIST_ARRAY",
        payload: res.data.playlist,
      });
      toast.success("Video added to Playlist");
    }
  } catch (e) {
    console.log("error occured: ", e);
    toast.error("Failed to add video to Playlist");
  }
};
