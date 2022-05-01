import axios from "axios";
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
    }
  } catch (e) {
    console.log("error occured: ", e);
  }
};
