import axios from "axios";
export const loadPlaylist = async (dispatchVideo) => {
  const newToken = localStorage.getItem("token");
  try {
    const res = await axios({
      method: "GET",
      url: "/api/user/playlists",
      headers: {
        authorization: newToken,
      },
    });

    if (res.status === 200) {
      dispatchVideo({ type: "UPDATE_PLAYLIST", payload: res.data.playlists });
    }
  } catch (e) {
    console.log("error occured: ", e);
  }
};
