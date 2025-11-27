import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Award = NonNullable<(typeof RESUME_DATA)["awards"]>[number];

interface AwardItemProps {
  award: Award;
}

/**
 * Individual award card component
 */
function AwardItem({ award }: AwardItemProps) {
  const { title, date, awarder, summary, url } = award;

  const awardId = `award-${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-x-2 text-base">
          <div className="flex-1">
            <h3 className="font-semibold leading-none" id={awardId}>
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  aria-label={`${title} award (opens in new tab)`}
                >
                  {title}
                </a>
              ) : (
                <span>{title}</span>
              )}
            </h3>
            <div className="mt-1 text-sm text-gray-500">{awarder}</div>
          </div>
          <div
            className="text-sm tabular-nums text-gray-500"
            title={`Date: ${date}`}
          >
            {date}
          </div>
        </div>
      </CardHeader>
      {summary && (
        <CardContent
          className="mt-2 text-foreground/80 print:text-[12px]"
          aria-labelledby={awardId}
        >
          {summary}
        </CardContent>
      )}
    </Card>
  );
}

interface AwardsListProps {
  awards: readonly Award[];
}

/**
 * Main awards section component
 * Renders a list of awards and honors
 */
export function Awards({ awards }: AwardsListProps) {
  if (!awards || awards.length === 0) return null;

  return (
    <Section>
      <h2 className="text-xl font-bold" id="awards-section">
        Awards
      </h2>
      <div className="space-y-4" role="feed" aria-labelledby="awards-section">
        {awards.map((item) => (
          <article key={item.title}>
            <AwardItem award={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
