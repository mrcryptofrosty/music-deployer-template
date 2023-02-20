import Button from "../Button";
import Image from "next/image";

const LaunchPage = (props: any) => {
  const { onClick } = props;

  return (
    <div
      style={{ backgroundImage: "url('/images/bg.png')" }}
      className="bg-cover bg-right-bottom flex flex-col"
    >
      <Image className="object-contain object-right-bottom pl-16" src="/images/landing-bg.png" fill alt="bg" />
      <div className="min-h-screen grid md:grid-cols-2 grid-cols-1 relative">
        <div className="flex items-center justify-center">
          <div className="space-y-4">
            <h3>Application NFTs</h3>
            <h1 className="pb-4">
              Frosty Full Audio<br></br> Player
            </h1>
            <Button text="Create yours" onClick={onClick} />
          </div>
        </div>
        <div className="flex items-center justify-center relative">
          <iframe
            className="w-[350px] h-[350px] rounded-lg z-10"
            src="https://fleek.ipfs.io/ipfs/bafybeib4y7cv7qwtpxub77zpogpgjc6k6bu3vax2t34hjkvspgpdkta4ja?playlist-url=https://nftstorage.link/ipfs/bafkreieklxj3vzyv3bac7zyxqvq32altzw55hz5bktl7cydfojxxyikbc4"
          />
        </div>
      </div>
    </div>
  );
};

export default LaunchPage;
