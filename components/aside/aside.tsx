import { PostInterface, CategoryInterface } from "../../models/posts.model";
import Categories from "./categories";
import LatestPosts from "./latest-posts";
import SearchBar from "../search/search-aside";

interface AsideProps {
  posts: PostInterface[];
  categories: CategoryInterface[];
  handleCategoryClick: (cat: string) => void;
}

const Aside: React.FC<AsideProps> = ({
  posts,
  categories,
  handleCategoryClick,
}) => {
  return (
    <aside className="d-none d-lg-block col-12 col-xl-3 col-lg-4 col-md-7">
      <SearchBar />
      <LatestPosts posts={posts} />
      <Categories cats={categories} handleClick={handleCategoryClick} />
    </aside>
  );
};
export default Aside;
