import axios from "axios";

const KEY = "AIzaSyASmhcKcC5VYEZJuhUGdjMts6VmAQrTGRE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    type: "video",
    key: KEY,
  },
});
