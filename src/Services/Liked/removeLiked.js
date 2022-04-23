import axios from "axios";
export const removeliked = async (id, dispatchVideo) => {
  const newToken = localStorage.getItem("token");

  console.log("remove");
  try {
    const res = await axios({
      method: "DELETE",
      url: `/api/user/likes/${id}`,

      headers: {
        authorization: newToken,
      },
    });
    if (res.status === 200) {
      dispatchVideo({
        type: "UPDATE_LIKED",
        payload: res.data.likes,
      });
    }
  } catch (e) {
    console.log("error occured: ", e);
  }
};
