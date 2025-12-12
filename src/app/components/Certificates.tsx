import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Certificate = NonNullable<(typeof RESUME_DATA)["certificates"]>[number];

interface CertificateItemProps {
  certificate: Certificate;
}

/**
 * Individual certificate card component
 */
function CertificateItem({ certificate }: CertificateItemProps) {
  const { name, date, issuer, url } = certificate;

  const certificateId = `certificate-${name.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-x-2 text-base">
          <div className="flex-1">
            <h3 className="font-semibold leading-none" id={certificateId}>
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  aria-label={`${name} certificate (opens in new tab)`}
                >
                  {name}
                </a>
              ) : (
                <span>{name}</span>
              )}
            </h3>
            <div className="mt-1 text-sm text-muted-foreground">{issuer}</div>
          </div>
          <div
            className="text-sm tabular-nums text-muted-foreground"
            title={`Date: ${date}`}
          >
            {date}
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

interface CertificatesListProps {
  certificates: readonly Certificate[];
}

/**
 * Main certificates section component
 * Renders a list of certificates
 */
export function Certificates({ certificates }: CertificatesListProps) {
  if (!certificates || certificates.length === 0) return null;

  return (
    <Section>
      <h2 className="text-xl font-bold" id="certificates-section">
        Certificates
      </h2>
      <div
        className="space-y-4"
        role="feed"
        aria-labelledby="certificates-section"
      >
        {certificates.map((item) => (
          <article key={item.name}>
            <CertificateItem certificate={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
