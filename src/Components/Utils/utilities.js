const axios = require("axios");

export async function getChat(language, current) {
  const response = await axios.get(
    `/chat/${language}/${current}`
  );
  return await response;
}

export async function enterChat(language) {
  const response = await axios.get(`/chat/${language}`);
  return await response;
}

export async function sendMessage(account, token, message) {
  const response = await axios.put(
    `/chat`,
    {
      account,
      token,
      message
    }
  );
  return await response;
}