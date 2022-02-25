import { ArticleCommentsCount } from "../../services/Disqus";

interface CommentsCountProps {
  slug: string;
  title: string;
  url: string;
}

const CommentsCount: React.FC<CommentsCountProps> = ({ slug, url, title }) => {
  return (
    <div className="col-12 col-lg-4 col-md-6 text-center text-md-end">
      <div className="social-icon-style-6">
        <ul className="extra-small-icon m-0">
          <li>
            <ArticleCommentsCount title={title} url={url} slug={slug} />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default CommentsCount;
