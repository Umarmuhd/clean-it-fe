// return the user data from the session storage
export const getUser = () => {
  const userStr = sessionStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

// return the token from the session storage
export const getToken = () => {
  const token =
    sessionStorage.getItem("VAuthToken") ||
    sessionStorage.getItem("UAuthToken");
  return token || null;
};

//return userType from session storage
export const getRole = () => {
  const key = Object.keys(sessionStorage);
  return key[0];
};

// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem("VAuthToken");
  sessionStorage.removeItem("UAuthToken");
};

// set the token and user from the session storage
export const setUserSession = (token, Role) => {
  sessionStorage.setItem(`${Role}AuthToken`, token);
  // sessionStorage.setItem("user", JSON.stringify(user));
};
