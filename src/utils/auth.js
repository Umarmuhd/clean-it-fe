export const authMiddleWare = (history) => {
  const VauthToken = sessionStorage.getItem("VAuthToken");
  const UAuthToken = sessionStorage.getItem("UAuthToken");
  if (VauthToken || UAuthToken === null) {
    history.push("/login");
  }
};
