import { apiUrl } from "../config.json";
import http from "./httpService";

const apiEndpoint = apiUrl + "/blog/";

function postUrl(slug: string) {
  return `${apiEndpoint}${slug}`;
}

export const getBlogPosts = (pageNum: number) => {
  return http.get(apiEndpoint + `posts/?cats=blog&page=${pageNum}`);
};

export const getLatestPosts = () => {
  return http.get(apiEndpoint + `posts/?cats=blog`);
};

export const getCategories = () => {
  return http.get(apiEndpoint + "tags/");
};

export const getPostsFromCategory = (categoryName: string) => {
  return http.get(apiEndpoint + `posts/?tags=${categoryName}`);
};

export const getPost = (postSlug: string) => {
  return http.get(postUrl("posts/" + postSlug + "/"));
};

export const getRelatedPosts = (tagName: string) => {
  return http.get(apiEndpoint + `posts/?cats=blog&tags=${tagName}`);
};

export const getPhoto = () => {
  return http.get(apiEndpoint + `photos/`);
};

export const getSearchResults = (query: string) => {
  return http.get(apiEndpoint + `posts/?search=${query.toLocaleUpperCase()}`);
};
