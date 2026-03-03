import { siteConfig } from "@/config/site";
import SectionWrapper from "../shared/SectionWrapper";
import Navbar from "./nav/Navbar";
import { H5 } from "../ui/Typography";
import Clock from "../shared/Clock";

export default function Footer() {
  let currentTime = setTimeout(() => {
    new Date();
  }, 5000);
  return (
    <footer className="py-4">
      <SectionWrapper className="flex flex-col gap-4 items-center">
        <small className="font-bold text-lg">LOGO</small>
        <H5 className="text-green-500">{siteConfig.name}</H5>
        <Navbar />
        <Clock />
      </SectionWrapper>
    </footer>
  );
}
