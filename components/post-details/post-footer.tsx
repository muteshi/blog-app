import { PostInterface, TagInterface } from "../../models/posts.model";
import Author from "./author";
import CommentsCount from "./comments-count";
import RelatedPosts from "./related-posts";
import Tags from "./tags";

interface PostFooterProps {
  post: PostInterface;
  posts: PostInterface[];
}

const PostFooter: React.FC<PostFooterProps> = ({ post, posts }) => {
  return (
    <>
      <section className="wow animate__fadeIn pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 d-flex flex-wrap mx-auto">
              <Tags tags={post} />
              <CommentsCount
                slug={post.slug}
                title={post.title}
                url={`https://blog.muteshi.com/${post.slug}`}
              />
            </div>
          </div>
          <Author />
        </div>
      </section>
      <RelatedPosts posts={posts} />
    </>
  );
};
export default PostFooter;
