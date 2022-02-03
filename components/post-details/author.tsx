import Image from "next/image";
import Link from "next/link";

const Author: React.FC = () => {
  return (
    <div className="row">
      <div className="col-12 col-lg-10 mx-auto margin-70px-top md-margin-50px-top wow animate__fadeInUp">
        <div className="d-block d-md-flex w-100 align-items-center align-items-md-start border border-color-extra-light-gray padding-50px-all md-padding-30px-all sm-padding-20px-all">
          <div className="w-150px text-center sm-margin-15px-bottom sm-w-100">
            <Image
              src="https://app.muteshi.com/static/media/uploads/post/eaeba0b3-7fde-4488-8637-724732bdfbaf.jpg"
              width={200}
              height={200}
              className="rounded-circle w-100px"
              alt="Muteshi"
            />
          </div>
          <div className="w-100 padding-40px-left last-paragraph-no-margin sm-no-padding-left text-center text-md-start">
            <a
              href="#"
              className="text-extra-dark-gray text-uppercase alt-font font-weight-600 margin-10px-bottom d-inline-block text-small"
            >
              Muteshi Paul
            </a>
            <p>
              Muteshi is a full stack web developer who apart from writing about
              technology, also enjoys writing just about anything
            </p>
            <Link href="/posts">
              <a className="btn btn-very-small btn-black margin-20px-top">
                See all posts
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Author;
