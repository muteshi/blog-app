import { NextPage } from "next";
import Link from "next/link";
import { PostInterface } from "../../models/posts.model";
interface SearchResultsProps {
  results: PostInterface[];
}

const SearchResults: NextPage<SearchResultsProps> = ({ results }) => {
  let searchData;
  let newResults = results.filter(
    (item) => item.category[0].toLowerCase() === "blogs"
  );

  if (Object.values(newResults).length === 0) {
    searchData = <p>No post found with given search term</p>;
  } else {
    searchData = newResults.map((item) => (
      <Link href={`/posts/${item.slug}`} key={item.slug}>
        <a>
          <li className="list-group-item">{item.title}</li>
        </a>
      </Link>
    ));
  }

  return (
    //  <!-- start list style 02 section -->

    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-7 text-center margin-30px-bottom sm-margin-20px-bottom">
          <span className="text-small text-outside-line-full alt-font font-weight-600 text-uppercase">
            Search results
          </span>
        </div>
      </div>
      <div className="row justify-content-center">
        <ul className="list-group list-group-flush">{searchData}</ul>
      </div>
    </div>

    // <!-- end list style 02 section -->
  );
};

export default SearchResults;
