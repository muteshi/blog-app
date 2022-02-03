import Link from "next/link";
import { PostInterface } from "../../models/posts.model";
import Loader from "../ui/Loader";

interface Tagsprops {
  tags: PostInterface;
}

const Tags: React.FC<Tagsprops> = ({ tags }) => {
  let tagSection: any = <Loader />;
  if (Object.keys(tags.tags).length != 0) {
    tagSection = tags.tags.map((tag) => (
      <Link href="#" key={tag.id}>
        <a>{tag.name}</a>
      </Link>
    ));
  }

  return (
    <div className="col-12 col-lg-8 col-md-6 text-center text-md-start sm-margin-10px-bottom">
      <div className="tag-cloud">{tagSection}</div>
    </div>
  );
};

export default Tags;
