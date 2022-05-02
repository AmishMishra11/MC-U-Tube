import axios from "axios";
export const loadPlaylistVideo = async (id, dispatchVideo) => {
  const newToken = localStorage.getItem("token");
  try {
    const res = await axios({
      method: "GET",
      url: `/api/user/playlists/${id}`,
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
