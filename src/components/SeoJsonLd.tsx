interface JsonLdProps {
  readonly data: unknown;
}

export default function SeoJsonLd({ data }: JsonLdProps): JSX.Element {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}


