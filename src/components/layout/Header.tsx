import dynamic from "next/dynamic";
import SectionWrapper from "../shared/SectionWrapper";
import Navbar from "./nav/Navbar";
const MobileNav = dynamic(() => import("./nav/MobileNav"));

export default function Header() {
  return (
    <header className="">
      <SectionWrapper className="flex items-center justify-between">
        <small className="font-bold text-lg">LOGO</small>

        <div className="hidden md:block">
          <Navbar />
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </SectionWrapper>
    </header>
  );
}
