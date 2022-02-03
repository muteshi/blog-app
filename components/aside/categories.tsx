import Link from "next/link";
import { CategoryInterface } from "../../models/posts.model";
import Loader from "../ui/Loader";

interface CategoriesProps {
  cats: CategoryInterface[];
  handleClick: (cat: string) => void;
}
const Categories: React.FC<CategoriesProps> = ({ cats, handleClick }) => {
  let categoryItem: any = <Loader />;

  if (Object.values(cats).length != 0) {
    categoryItem = cats.map((item) =>
      item.featured ? (
        <li key={item.id}>
          <Link href="#">
            <a onClick={() => handleClick(item.name)}>{item.name}</a>
          </Link>
          <span>{item.post_count}</span>
        </li>
      ) : (
        ""
      )
    );
  }

  return (
    <div className="margin-45px-bottom sm-margin-25px-bottom">
      <div className="text-extra-dark-gray margin-20px-bottom alt-font text-uppercase font-weight-600 text-small aside-title">
        <span>Categories</span>
      </div>
      <ul className="list-style-6 margin-50px-bottom text-small">
        {categoryItem}
      </ul>
    </div>
  );
};

export default Categories;
