import CenterContent from "../wrappers/CenterContent";
import HeaderBanner from "./HeaderBanner";
import PulsedLink from "./PulsedLink";

export default function Navbar() {
  return (
    <header className="text-white">
      <HeaderBanner />
      <CenterContent>
        <div className="flex justify-between mt-12">
          <div>
            <p className="px-3 py-2 border-2 border-current font-semibold">
              Project A
            </p>
          </div>
          <nav className="flex gap-[56px]">
            <PulsedLink href="">Portfolio</PulsedLink>
            <PulsedLink href="">Portfolio</PulsedLink>
            <PulsedLink href="">Portfolio</PulsedLink>
            <PulsedLink href="">Portfolio</PulsedLink>
          </nav>
        </div>
      </CenterContent>
    </header>
  );
}
