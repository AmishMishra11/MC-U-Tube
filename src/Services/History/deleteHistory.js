import axios from "axios";
export const deleteHistory = async (dispatchVideo) => {
  const newToken = localStorage.getItem("token");

  try {
    const res = await axios({
      method: "DELETE",
      url: "/api/user/history/all",

      headers: {
        authorization: newToken,
      },
    });
    if (res.status === 200) {
      dispatchVideo({ type: "UPDATE_HISTORY", payload: res.data.history });
    }
  } catch (e) {
    console.log("error occured: ", e);
  }
};
