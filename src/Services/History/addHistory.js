import axios from "axios";
export const addHistory = async (video, dispatchVideo) => {
  const newToken = localStorage.getItem("token");
  try {
    const res = await axios({
      method: "POST",
      url: "/api/user/history",
      data: { video: video },
      headers: {
        authorization: newToken,
      },
    });
    if (res.status === 201) {
      dispatchVideo({ type: "UPDATE_HISTORY", payload: res.data.history });
    }
  } catch (e) {
    console.log("error occured: ", e);
  }
};
