export function saveToken(authToken) {
  localStorage.setItem("user.auth.token", authToken);
}

export function getToken() {
  return localStorage.getItem("user.auth.token");
}
