import PageWrapper from "@/components/shared/PageWrapper";
import ProductSection from "./sections/ProductSection";
import SectionWrapper from "@/components/shared/SectionWrapper";
import AppImage from "@/components/ui/AppImage";

export default function Products() {
  return (
    <PageWrapper>
      <ProductSection />
      <SectionWrapper>
        Product Image
        <div className="h-100 w-96 relative">
          <AppImage src="/images/watch.web" alt="product image" />
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
