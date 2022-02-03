import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <div className="col-auto ps-0">
      <Image
        src="/images/logo.png"
        className="logo-dark default"
        alt="Muteshi"
        width={175}
        height={69}
      />
    </div>
  );
};

export default Logo;
