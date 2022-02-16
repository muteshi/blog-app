import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer-strip-dark bg-extra-dark-gray padding-10px-tb sm-padding-10px-tb">
      <div className="container">
        <div className="row align-items-center">
          {/* <!-- start copyright --> */}
          <div className="col-md-6 text-center text-small alt-font sm-margin-5px-bottom footer">
            &copy; {new Date().getFullYear()} Copyright Muteshi Paul All rights
            reserved
          </div>
          {/* <!-- end copyright --> */}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
