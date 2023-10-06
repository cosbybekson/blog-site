import axios from "axios";
import constants from "@/utils/constants";
import sessionManager from "@/utils/session_manager";

export default async function makeRequest(
  endpoint = "",
  options = {},
  headers = {}
) {
  const url = `${constants.BASE_URL}${endpoint}`;
  const AUTH_TOKEN = sessionManager.getToken();

  const config = {
    ...options,
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
      ...headers,
    },
    url,
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
