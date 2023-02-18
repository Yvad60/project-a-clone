import Link from "next/link";
import CenterContent from "../wrappers/CenterContent";

export default function HeaderBanner() {
  return (
    <div className="bg-blackRedGradient text-white py-3">
      <CenterContent>
        <p>
          Project A leads the seed funding round for
          <span className="font-bold"> Growblocks</span>. More
          <Link href="">here</Link>.
        </p>
      </CenterContent>
    </div>
  );
}
