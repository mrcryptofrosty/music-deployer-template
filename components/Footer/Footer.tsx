import Image from "next/image";

const Footer = () => (
  <footer className="py-8 mt-10 border-t border-black">
    <div>
      <a
        className="flex justify-center items-center text-xl"
        href="https://frosty.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/frosty.png"
          height={18}
          width={100}
          alt="Frosty 💪"
        />
      </a>
    </div>
  </footer>
);

export default Footer;
