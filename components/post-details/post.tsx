import { useEffect, useState } from "react";
import {
  DataInterface,
  getName,
  PostInterface,
} from "../../models/posts.model";
import { ArticleComments } from "../../services/Disqus";
import {
  getRelatedPosts,
  getPostsFromCategory,
} from "../../services/post-service";
import Comments from "./comments";
import MainPhoto from "./main-image";
import PostContent from "./post-content";
import PostFooter from "./post-footer";
import PostHeader from "./post-header";

interface PostProps {
  posts: PostInterface[];
  post: PostInterface;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [blogPosts, setBlogPosts] = useState<PostInterface[]>([]);
  const [relatedPosts, setRelatedPosts] = useState<PostInterface[]>([]);
  const [postCount, setPostCount] = useState<number>(0);
  const [nextPage, setNextPage] = useState<string>("");
  const [prevPage, setPrevPage] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);

  useEffect(() => {
    const getPostData = async () => {
      const { data: posts }: DataInterface = await getRelatedPosts(
        getName(post.tags[0])
      );
      setRelatedPosts(posts.results);
    };
    getPostData();
  }, []);

  const handleCategoryClick = async (cat: string) => {
    const { data: posts } = await getPostsFromCategory(cat);
    setBlogPosts(posts.results);
    setPostCount(posts.count);
    setNextPage(posts.next);
    setPrevPage(posts.previous);
    setPageNumber(1);
  };

  return (
    <>
      <PostHeader post={post} handleClick={handleCategoryClick} />
      <MainPhoto post={post} />
      <PostContent post={post} />
      <PostFooter post={post} posts={relatedPosts} />
      <Comments
        slug={post.slug}
        title={post.title}
        url={`https://blog.muteshi.com/${post.slug}`}
      />
    </>
  );
};

export default Post;
