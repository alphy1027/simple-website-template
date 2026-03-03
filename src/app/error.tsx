"use client";
import PageWrapper from "@/components/shared/PageWrapper";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <PageWrapper>
      <SectionWrapper>
        <h2 className="text-red-500 font-bold">Error</h2>
        <p className="">Something has gone wrong, please try again!</p>
        <p className="">{error.message}</p>
        <Button onClick={() => reset()}>Try again</Button>
      </SectionWrapper>
    </PageWrapper>
  );
}
