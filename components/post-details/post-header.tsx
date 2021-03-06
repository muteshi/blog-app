import Link from "next/link";
import useSWR from "swr";
import { PostInterface } from "../../models/posts.model";
import { formatDate } from "../../utils";
import Header from "../header/header";

interface PostHeaderProps {
  post: PostInterface;
  handleClick: (cat: string) => void;
}
const PostHeader: React.FC<PostHeaderProps> = ({ post, handleClick }) => {
  const { data } = useSWR(
    `/api/page-views?slug=/posts/${encodeURIComponent(post.slug)}`,
    async (url) => {
      const res = await fetch(url);
      return res.json();
    },
    { revalidateOnFocus: false }
  );

  const views = data?.pageViews || 0;

  return (
    <>
      <Header post={post} />
      <section className="wow animate__fadeIn bg-light-gray padding-35px-tb page-title-small top-space article-margin-top">
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-xl-8 col-md-6 d-flex flex-column justify-content-center text-center text-md-start">
              {/* start page title */}
              <h1 className="alt-font text-extra-dark-gray font-weight-600 mb-0 text-uppercase">
                <Link href="/">
                  <a>
                    <i
                      className="fa fa-arrow-left ml-5"
                      aria-hidden="true"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </a>
                </Link>
                <span style={{ paddingLeft: "10px" }}></span>
                {post.title}
              </h1>{" "}
              {/* end page title */}
            </div>
            <div className="col-xl-4 col-md-6 alt-font breadcrumb justify-content-center justify-content-md-end text-small sm-margin-10px-top">
              {/* breadcrumb --> */}
              <ul className="text-center text-md-start text-uppercase">
                <li>
                  <a href="#" className="text-dark-gray">
                    {formatDate(post.date_posted)}
                  </a>
                </li>
                <li>
                  <span className="text-dark-gray">by muteshi.com</span>
                </li>
                <li className="text-dark-gray">
                  <span className="badge bg-info text-dark">{views} views</span>
                </li>
              </ul>
              {/* <!-- end breadcrumb --> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PostHeader;
