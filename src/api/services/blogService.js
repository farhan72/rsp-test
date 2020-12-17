import Axios from "axios";

const getBlogs = () => Axios.get("./json/blogs.json");

const getPopularArticle = () => Axios.get("./json/article-popular.json");

const getBestArticles = () => Axios.get("./json/best-articles.json");

const getPostData = () => Axios.get("./json/post-list.json");

const getTrainingMaterials = () => Axios.get("./json/trainings-material.json");

export {
  getBlogs,
  getPopularArticle,
  getBestArticles,
  getPostData,
  getTrainingMaterials,
};
