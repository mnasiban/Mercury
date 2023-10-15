import axios from "axios";

export async function getPosts() {
  try {
    const res = await axios.get("https://reqres.in/api/posts?page=1");
    return res;
  } catch (error) {
    throw error;
  }
}
