import { NextPage } from "next";
import { ArticleComments } from "../../services/Disqus";

interface CommentsProps {
  slug: string;
  title: string;
  url: string;
}

const Comments: NextPage<CommentsProps> = ({ slug, title, url }) => {
  return (
    <section className="wow animate__fadeIn bg-light-gray" id="comments">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto text-center margin-80px-bottom sm-margin-40px-bottom">
            <div className="position-relative overflow-hidden w-100">
              <span className="text-small text-outside-line-full alt-font font-weight-600 text-uppercase text-extra-dark-gray">
                Write A Comment
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-10 d-flex flex-wrap mx-auto text-center"></div>
          <ArticleComments slug={slug} title={title} url={url} />
        </div>
      </div>
    </section>
  );
};

export default Comments;
