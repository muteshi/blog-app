import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <div className="col-auto ps-0 mb-2 mt-2 ">
      <Image
        src="/images/logo.png"
        className="logo-dark default"
        alt="Muteshi Paul"
        width={175}
        height={33}
      />
    </div>
  );
};

export default Logo;
