import PageWrapper from "@/components/shared/PageWrapper";
import SectionWrapper from "@/components/shared/SectionWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <SectionWrapper>Hero Section</SectionWrapper>
      <SectionWrapper>Products</SectionWrapper>
      <SectionWrapper>Services</SectionWrapper>
      <SectionWrapper>Call to Action</SectionWrapper>
    </PageWrapper>
  );
}
