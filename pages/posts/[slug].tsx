import { NextPage } from "next";
import Post from "../../components/post-details/post";
import { DataInterface, PostInterface } from "../../models/posts.model";
import { getBlogPosts, getPost } from "../../services/post-service";
import Loader from "../../components/ui/Loader";

interface PostDetailsProps {
  post: PostInterface;
  posts: PostInterface[];
}

const PostDetailsPage: NextPage<PostDetailsProps> = ({ post, posts }) => {
  let postDetails;

  if (!post || !posts) {
    postDetails = <Loader />;
  } else {
    postDetails = <Post post={post} posts={posts} />;
  }

  return postDetails;
};

export async function getStaticProps(context: any) {
  try {
    const slug = context.params.slug;
    const { data: postData } = await getPost(slug);
    const { data: posts }: DataInterface = await getBlogPosts(1);
    return {
      props: {
        post: postData,
        posts: posts.results,
      },
      revalidate: 10,
    };
  } catch (error) {
    return { notFound: true };
  }
}

export async function getStaticPaths() {
  const { data: posts }: DataInterface = await getBlogPosts(1);
  const slugs = posts.results.map((p) => ({ params: { slug: p.slug } }));
  return {
    paths: slugs,
    fallback: true,
  };
}

export default PostDetailsPage;
