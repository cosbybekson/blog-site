class UserStorage {
  // Save user information to local storage
  saveUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  // Get user information from local storage
  getUser() {
    const userString = localStorage.getItem("user");
    const user = userString ? JSON.parse(userString) : null;
    return user ? user.username : "";
  }

  // Clear user information from local storage (on logout, for example)
  clearUser() {
    localStorage.removeItem("user");
  }
}

export default new UserStorage();
