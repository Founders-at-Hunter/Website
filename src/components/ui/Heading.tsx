import React from "react";

export default function Heading({
  title,
  subtitle,
  titleCN,
  subtitleCN,
  headerCN,
}: {
  title: string;
  subtitle: string;
  titleCN?: string;
  subtitleCN?: string;
  headerCN?: string;
}) {
  return (
    <header className={headerCN ?? ""}>
      <h3 className={`font-semibold text-xl ${titleCN ?? ""}`}>{title}</h3>
      <p className={`text-sm text-black/60 ${subtitleCN ?? ""}`}>{subtitle}</p>
    </header>
  );
}
