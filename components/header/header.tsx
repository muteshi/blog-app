import { NextPage } from "next";
import Head from "next/head";
import { PostInterface } from "../../models/posts.model";
import { BASE_URL } from "../../config.json";

interface HeaderProps {
  post: PostInterface;
}

const Header: NextPage<HeaderProps> = ({ post }) => {
  return (
    <Head>
      <meta name="description" key="title" content={post.description} />
      <meta property="og:title" content={post.title} />
      <meta
        property="og:url"
        content={`https://www.muteshi.com/posts/${post.slug}`}
      />
      <meta property="og:description" content={post.description} />
      <meta property="og:image" content={BASE_URL + post.image} />

      <title>{`Muteshi Paul: ${post.title}`}</title>
    </Head>
  );
};

export default Header;
