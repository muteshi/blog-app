import { NextPage } from "next";

const Comments: NextPage = () => {
  return (
    <section className="wow animate__fadeIn bg-light-gray" id="comments">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto text-center margin-80px-bottom sm-margin-40px-bottom">
            <div className="position-relative overflow-hidden w-100">
              <span className="text-small text-outside-line-full alt-font font-weight-600 text-uppercase text-extra-dark-gray">
                Write A Comment
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-10 d-flex flex-wrap mx-auto text-center"></div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
