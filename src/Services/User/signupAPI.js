import axios from "axios";
export const signupUser = async (
  tempFirstName,
  tempLastName,
  tempEmail,
  tempPassword,
  dispatchAuth,
  navigate,
  location
) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/auth/signup",
      data: {
        firstName: tempFirstName,
        lastName: tempLastName,
        email: tempEmail,
        password: tempPassword,
      },
    });
    if (res.status === 201) {
      dispatchAuth({
        type: "GET_USER_DETAILS",
        payload: res.data.createdUser,
      });
      localStorage.setItem("token", res.data.encodedToken);
      localStorage.setItem("first", res.data.createdUser.firstName);

      const whereTo = location?.state?.from?.pathname;
      navigate(whereTo || "../explore", { replace: true });
    }
  } catch (e) {
    console.log("error occured:  ", tempEmail, tempPassword, e);
  }
};
