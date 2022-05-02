import axios from "axios";
export const removePlaylistVideo = async (
  playlistID,
  videoID,
  dispatchVideo
) => {
  const newToken = localStorage.getItem("token");

  try {
    const res = await axios({
      method: "DELETE",
      url: `/api/user/playlists/${playlistID}/${videoID}`,

      headers: {
        authorization: newToken,
      },
    });
    if (res.status === 200) {
      dispatchVideo({
        type: "UPDATE_PLAYLIST_ARRAY",
        payload: res.data.playlist,
      });
    }
  } catch (e) {
    console.log("error occured: ", e);
  }
};
