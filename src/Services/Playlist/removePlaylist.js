import axios from "axios";
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
    }
  } catch (e) {
    console.log("error occured: ", e);
  }
};
