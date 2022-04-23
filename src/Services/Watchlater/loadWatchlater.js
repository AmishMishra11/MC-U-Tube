import axios from "axios";
export const loadWatchlater = async (dispatchVideo) => {
  const newToken = localStorage.getItem("token");
  try {
    const res = await axios({
      method: "GET",
      url: "/api/user/watchlater",
      headers: {
        authorization: newToken,
      },
    });

    if (res.status === 200) {
      dispatchVideo({ type: "UPDATE_WATCHLATER", payload: res.data.wishlist });
    }
  } catch (e) {
    console.log("error occured: ", e);
  }
};
