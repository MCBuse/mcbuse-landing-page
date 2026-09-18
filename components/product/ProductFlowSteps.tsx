import { LedgerGrid, LedgerRow } from "@/components/ui/LedgerGrid";
import { Button } from "@/components/ui/Button";
import { productCopy } from "@/content/copy/product";

export function ProductFlowSteps() {
  return (
    <div>
      <LedgerGrid>
        {productCopy.flowSteps.map((step, i) => (
          <LedgerRow
            key={step.title}
            index={String(i + 1).padStart(2, "0")}
            title={step.title}
            description={step.description}
          />
        ))}
      </LedgerGrid>
      <div className="mt-8">
        <Button href={productCopy.flowCta.href} variant="secondary">
          {productCopy.flowCta.label}
        </Button>
      </div>
    </div>
  );
}
