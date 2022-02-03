import Link from "next/link";

interface paginationProps {
  pages: number;
  prevPage: string;
  nextPage: string;
  handlePageClick: (page: number) => void;
  prevNextPageClick: (page: number) => void;
  pageNum: number;
  postCount: number;
}
const Pagination: React.FC<paginationProps> = ({
  pages,
  nextPage,
  prevPage,
  handlePageClick,
  prevNextPageClick,
  pageNum,
  postCount,
}) => {
  if (postCount <= 10) return null;
  let paginationArray = Array.from(Array(Math.ceil(pages)).keys());

  let pagination = paginationArray.map((item) => (
    <li className={pageNum === item + 1 ? "active" : ""} key={item}>
      <Link href="#">
        <a onClick={() => handlePageClick(item + 1)}>{item + 1}</a>
      </Link>
    </li>
  ));
  return (
    // start slider pagination
    <div className="col-12 text-center margin-100px-top md-margin-50px-top position-relative wow animate__fadeInUp">
      <div className="pagination text-small text-uppercase text-extra-dark-gray">
        <ul className="mx-auto">
          <li>
            <Link href="#">
              <a
                className={!prevPage ? "disabled" : ""}
                onClick={() => prevNextPageClick(pageNum)}
              >
                <i className="fas fa-long-arrow-alt-left margin-5px-right d-none d-md-inline-block"></i>{" "}
                Prev
              </a>
            </Link>
          </li>
          {pagination}
          <li>
            <Link href="#">
              <a
                className={!nextPage ? "disabled" : ""}
                onClick={() => prevNextPageClick(pageNum)}
              >
                Next
                <i className="fas fa-long-arrow-alt-right margin-5px-left d-none d-md-inline-block"></i>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    //   end slider pagination -
  );
};

export default Pagination;
