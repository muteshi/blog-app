import { PostInterface } from "../../models/posts.model";
import ReactMarkdown from "react-markdown";

interface PostContentProps {
  post: PostInterface;
}
const PostContent: React.FC<PostContentProps> = ({ post }) => {
  return (
    <section className="wow animate__fadeIn">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9 d-flex flex-wrap last-paragraph-no-margin">
            <ReactMarkdown>
              {post.content.replace(/<[^>]*>?/gm, "")}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostContent;
