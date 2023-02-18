import HeroGridBg from "../ui/HeroGridBg";
import Navbar from "../ui/Navbar";
import CenterContent from "../wrappers/CenterContent";

export default function Hero() {
  return (
    <section className="w-full overflow-hidden">
      <Navbar />
      <CenterContent>
        <div className="text-white mt-[128px]">
          <p className="text-[56px] leading-[72px] max-w-[808px] -tracking-[0.86px]">
            Investing capital and operational expertise in founders who are
            reshaping their industries
          </p>
          <p className="mt-[46px] text-2xl leading-9 -tracking-[-0.64px]">
            Project A. The Operational VC.
          </p>
        </div>
      </CenterContent>
      <HeroGridBg />
    </section>
  );
}
