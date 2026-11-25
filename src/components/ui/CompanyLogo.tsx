import { useState } from "react";
import { companies } from "../../data/companies";
import type { CompanyId } from "../../data/companies";
interface CompanyLogoProps {
  companyId: CompanyId;
  subtle?: boolean;
}
export function CompanyLogo({ companyId, subtle = false }: CompanyLogoProps) {
  const company = companies[companyId];
  const [failedSource, setFailedSource] = useState<string | null>(null);
  if (subtle && failedSource === company.logo) return null;
  return (
    <span className={`company-logo${subtle ? " company-logo--subtle" : ""}`} aria-hidden="true">
      {failedSource === company.logo ? (
        <span>{company.name.split(" ").map(word => word[0]).join("").slice(0, 2)}</span>
      ) : (
        <img src={company.logo} alt="" width={44} height={44} loading="lazy" decoding="async" onError={() => setFailedSource(company.logo)} />
      )}
    </span>
  );
}
