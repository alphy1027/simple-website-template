import PageWrapper from "@/components/shared/PageWrapper";
import SectionWrapper from "@/components/shared/SectionWrapper";

export default async function SingleProduct({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <PageWrapper>
      <SectionWrapper>SingleProduct:{slug}</SectionWrapper>
    </PageWrapper>
  );
}
