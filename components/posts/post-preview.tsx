import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { getName, PostInterface } from "../../models/posts.model";
import { getDateDetails, truncateString } from "../../utils";

interface PostPreviewProps {
  post: PostInterface;
  handleClick: (cat: string) => void;
}

const PostPreview: React.FC<PostPreviewProps> = ({ post, handleClick }) => {
  const fullPostPath = `/posts/${post.slug}`;

  return (
    //  <!-- start post item -->
    <div className="blog-post-content d-flex align-items-center flex-wrap margin-60px-bottom padding-60px-bottom border-bottom border-color-extra-light-gray md-margin-30px-bottom md-padding-30px-bottom text-center text-md-start md-no-border">
      <div className="col-12 col-lg-5 blog-image p-0 md-margin-30px-bottom sm-margin-20px-bottom margin-45px-right md-no-margin-right">
        <Link href={fullPostPath}>
          <a>
            <Image
              src={post.image.replace("http://", "https://")}
              layout="responsive"
              alt={post.title}
              width={335}
              height={230}
              priority
            />
          </a>
        </Link>
      </div>
      <div className="col-12 col-lg-6 blog-text p-0">
        <div className="content margin-20px-bottom md-no-padding-left ">
          <Link href={fullPostPath}>
            <a className="text-extra-dark-gray margin-5px-bottom alt-font text-extra-large font-weight-600 d-inline-block">
              {post.title}
            </a>
          </Link>
          <div className="text-medium-gray text-extra-small margin-15px-bottom text-uppercase alt-font">
            <span>
              By{" "}
              <Link href="#">
                <a className="text-medium-gray">Muteshi Paul</a>
              </Link>
            </span>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <span>{getDateDetails(post.date_posted)}</span>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link href="#">
              <a
                className="text-medium-gray"
                onClick={() => handleClick(getName(post.tags[0]))}
              >
                {post.tags[0]}
              </a>
            </Link>
          </div>
          <p className="m-0 w-95 lg-w-100">
            <ReactMarkdown>
              {truncateString(post.content, 35) + "..."}
            </ReactMarkdown>
          </p>
        </div>
        <Link href={fullPostPath}>
          <a className="btn btn-very-small btn-dark-gray text-uppercase">
            Continue Reading
          </a>
        </Link>
      </div>
    </div>
    //    end post item
  );
};

export default PostPreview;
