import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "ae5a113c-99b1-45b3-80f7-c9ea2c1ccaea",
  },
});

export const userApi = {
  getUsers(pageSize = 10, currentPage = 1) {
    return axiosInstance
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then((response) => response.data);
  },
  follow(userId) {
    return axiosInstance
      .post(`follow/${userId}`)
      .then((response) => response.data);
  },
  unfollow(userId) {
    return axiosInstance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
};

export const profileApi = {
  getUserProfile(userId) {
    return axiosInstance
      .get(`profile/${userId}`)
      .then((response) => response.data);
  },
};
