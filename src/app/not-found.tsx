import PageWrapper from "@/components/shared/PageWrapper";
import SectionWrapper from "@/components/shared/SectionWrapper";

export default function NotFound() {
  return (
    <PageWrapper>
      <SectionWrapper>
        <h2 className="text-red-500 font-bold">404</h2>
        <p className="">Page you are looking for does not exist</p>
      </SectionWrapper>
    </PageWrapper>
  );
}
