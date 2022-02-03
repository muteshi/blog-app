import { PostInterface } from "../../models/posts.model";

interface PostContentProps {
  post: PostInterface;
}
const PostContent: React.FC<PostContentProps> = ({ post }) => {
  return (
    <section className="wow animate__fadeIn">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9 d-flex flex-wrap last-paragraph-no-margin">
            <article
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="text-large line-height-30 text-medium-gray sm-line-height-26"
            ></article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostContent;
