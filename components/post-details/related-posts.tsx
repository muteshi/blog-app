import Image from "next/image";
import Link from "next/link";
import { PostInterface } from "../../models/posts.model";
import { formatDate, truncateString } from "../../utils";
import Loader from "../ui/Loader";
interface RelatedPostsProps {
  posts: PostInterface[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts }) => {
  let relatedPosts: any = <Loader />;

  if (Object.keys(posts).length != 0) {
    relatedPosts = posts.map((item) => (
      <div className="col" key={item.slug}>
        <div className="card text-center h-100">
          <Link href={`/posts/${item.slug}`}>
            <a>
              <Image
                src={item.image.replace("http://", "https://")}
                className="card-img-top"
                alt={item.title}
                width={250}
                height={150}
                layout="responsive"
              />
            </a>
          </Link>
          <div className="card-body">
            <Link href={`/posts/${item.slug}`}>
              <a>
                <h6 className="card-title">{truncateString(item.title, 5)}</h6>
              </a>
            </Link>
            <p className="card-text">{truncateString(item.content, 20)}</p>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <section className="wow animate__fadeIn bg-light-gray">
      <div className="container">
        <div className="row">
          <div className="COL-12 col-lg-10 mx-auto text-center margin-65px-bottom sm-margin-40px-bottom">
            <div className="position-relative overflow-hidden w-100">
              <span className="text-small text-outside-line-full alt-font font-weight-600 text-uppercase text-extra-dark-gray">
                Related Posts
              </span>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* <!-- start post item --> */}
          {relatedPosts}
          {/* <!-- end post item --> */}
        </div>
      </div>
    </section>
  );
};
export default RelatedPosts;
