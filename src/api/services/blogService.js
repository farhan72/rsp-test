import Axios from "axios";

const getBlogs = () => Axios.get("./json/blogs.json");

const getPopularArticle = () => Axios.get("./json/article-popular.json");

export { getBlogs, getPopularArticle };
