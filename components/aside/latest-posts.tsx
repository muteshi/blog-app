import Image from "next/image";
import Link from "next/link";
import { PostInterface } from "../../models/posts.model";
import { formatDate } from "../../utils";
import Loader from "../ui/Loader";

interface LatestPostsProps {
  posts: PostInterface[];
}

const LatestPosts: React.FC<LatestPostsProps> = ({ posts }) => {
  let latestPosts: any = <Loader />;
  if (Object.values(posts).length != 0) {
    latestPosts = posts.map((post) => {
      const fullPostPath = `/posts/${post.slug}`;
      return (
        <li className="media d-flex" key={post.slug}>
          <figure className="flex-shrink-0">
            <Link href={fullPostPath}>
              <a>
                <Image
                  src={post.image.replace("http://", "https://")}
                  alt={post.title}
                  width={150}
                  height={100}
                />
              </a>
            </Link>
          </figure>
          <div className="media-body flex-grow-1 text-small">
            <Link href={fullPostPath}>
              <a className="text-extra-dark-gray">
                <span className="d-block margin-5px-bottom">{post.title}</span>
              </a>
            </Link>
            <span className="d-block text-medium-gray text-small">
              {formatDate(post.date_posted)}
            </span>
          </div>
        </li>
      );
    });
  }

  return (
    <div className="margin-45px-bottom sm-margin-25px-bottom">
      <div className="text-extra-dark-gray margin-25px-bottom alt-font text-uppercase font-weight-600 text-small aside-title">
        <span>Latest posts</span>
      </div>
      <ul className="latest-post position-relative">{latestPosts}</ul>
    </div>
  );
};
export default LatestPosts;
