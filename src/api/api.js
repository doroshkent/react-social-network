import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "a28a56e1-ba51-4753-a062-ef2932404ace",
  },
});

export const userApi = {
  getUsers(pageSize = 10, currentPage = 1) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then((response) => response.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },
  unfollow(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
};

export const profileApi = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  getUserStatus(userId) {
    return instance
      .get(`profile/status/${userId}`)
      .then((response) => response.data);
  },
  updateUserStatus(status) {
    return instance
      .put("profile/status", { status })
      .then((response) => response.data);
  },
};

export const authApi = {
  me() {
    return instance.get("auth/me").then((response) => response.data);
  },
  login(email, password, rememberMe = false) {
    return instance
      .post("auth/login", { email, password, rememberMe })
      .then((response) => response.data);
  },
  logout() {
    return instance.delete("auth/login");
  },
};
