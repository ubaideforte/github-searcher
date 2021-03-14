import axios from "axios";

export const getUsersApi = async (name, type) => {
  try {
    const res = await axios({
      url: `https://api.github.com/search/users?q=${type}:${name}`,
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getAllRepositories = async (repoName) => {
  try {
    const res = await axios({
      url: `https://api.github.com/search/repositories?q=${repoName}`,
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getUserRepositories = async (userName) => {
  try {
    const res = await axios({
      url: `https://api.github.com/users/${userName}/repos`,
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
