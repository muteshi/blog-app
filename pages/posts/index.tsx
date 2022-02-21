import type { NextPage } from "next";
import Head from "next/head";

import PageTitle from "../../components/header/page-title";
import PostsGrid from "../../components/posts/posts-grid";
import {
  CategoryInterface,
  DataInterface,
  PhotoInterface,
  PostInterface,
} from "../../models/posts.model";
import {
  getBlogPosts,
  getCategories,
  getLatestPosts,
  getPhoto,
} from "../../services/post-service";

interface AllPostsProps {
  cats: CategoryInterface[];
  posts: PostInterface[];
  latestPosts: PostInterface[];
  photo: PhotoInterface[];
}

const AllPosts: NextPage<AllPostsProps> = ({
  posts,
  photo,
  latestPosts,
  cats,
}) => {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="Technology and Space musings from Muteshi Paul"
        />
        <meta property="og:url" content="https://blog.muteshi.com" />
        <meta
          property="og:description"
          content="Technology expert and Full-stack web
    developer"
        />
        <meta
          property="og:image"
          content="https://app.muteshi.com/static/media/uploads/post/b4597011-386f-4455-89d7-949a2642a641.png"
        />
        <title>Muteshi Paul - Technology & Space latest posts</title>
      </Head>
      <PageTitle photo={photo} />
      <PostsGrid posts={posts} latestPosts={latestPosts} cats={cats} />
    </>
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

export default AllPosts;
