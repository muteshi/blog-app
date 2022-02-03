import type { NextPage } from "next";

import {
  CategoryInterface,
  DataInterface,
  PhotoInterface,
  PostInterface,
} from "../models/posts.model";
import {
  getBlogPosts,
  getCategories,
  getLatestPosts,
  getPhoto,
} from "../services/post-service";
import AllPosts from "./posts";

interface HomePageProps {
  cats: CategoryInterface[];
  posts: PostInterface[];
  latestPosts: PostInterface[];
  photo: PhotoInterface[];
}

const HomePage: NextPage<HomePageProps> = ({
  posts,
  photo,
  latestPosts,
  cats,
}) => {
  return (
    <AllPosts
      posts={posts}
      latestPosts={latestPosts}
      cats={cats}
      photo={photo}
    />
  );
};

export async function getStaticProps(context: any) {
  const { data: posts }: DataInterface = await getBlogPosts(1);
  const { data: latestPosts }: DataInterface = await getLatestPosts();
  const { data: cats } = await getCategories();
  const { data: photo } = await getPhoto();
  return {
    props: {
      cats,
      posts: posts.results,
      latestPosts: latestPosts.results,
      photo,
    },
    revalidate: 60,
  };
}

export default HomePage;
