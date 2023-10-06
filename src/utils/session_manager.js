class SessionManager {
  saveToken(authToken) {
    localStorage.setItem("user.auth.token", authToken);
  }

  getToken() {
    return localStorage.getItem("user.auth.token");
  }

  isAuthenticated() {
    const authToken = this.getToken();
    return authToken !== null && authToken !== undefined;
  }

  // Optionally, you can add a method to clear the token on logout
  clearToken() {
    localStorage.removeItem("user.auth.token");
  }
}

export default new SessionManager();

