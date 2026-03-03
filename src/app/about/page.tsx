import PageWrapper from "@/components/shared/PageWrapper";
import PageHeading from "@/components/shared/PageHeading";
import TeamSection from "./sections/TeamSection";

export default function About() {
  return (
    <PageWrapper>
      <PageHeading>About Page</PageHeading>
      <TeamSection />
    </PageWrapper>
  );
}
