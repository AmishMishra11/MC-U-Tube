import axios from "axios";
export const loadLiked = async (dispatchVideo) => {
  const newToken = localStorage.getItem("token");
  try {
    const res = await axios({
      method: "GET",
      url: "/api/user/likes",
      headers: {
        authorization: newToken,
      },
    });
    if (res.status === 200) {
      dispatchVideo({ type: "UPDATE_LIKED", payload: res.data.likes });
    }
  } catch (e) {
    console.log("error occured: ", e);
  }
};
