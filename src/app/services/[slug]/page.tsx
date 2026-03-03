import PageWrapper from "@/components/shared/PageWrapper";
import SectionWrapper from "@/components/shared/SectionWrapper";

export default async function SingleService({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <PageWrapper>
      <SectionWrapper>SingleService:{slug}</SectionWrapper>
    </PageWrapper>
  );
}
