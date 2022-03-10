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
  const modifiedPosts = posts.sort(function (a, b) {
    return (
      new Date(a.date_posted).getTime() - new Date(b.date_posted).getTime()
    );
  });

  return (
    <AllPosts
      posts={modifiedPosts}
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
  };
}

export default HomePage;
