import React from "react";

interface StanddownExampleProps {
  title?: string;
  description?: string;
}

export default function StanddownExample({
  title = "Standdown POC",
  description = "A Next.js component library published to GitHub Packages",
}: StanddownExampleProps) {
  return (
    <div
      style={{
        padding: "1.5rem",
        border: "1px solid #e5e7eb",
        borderRadius: "0.5rem",
        fontFamily: "sans-serif",
      }}
    >
      <h2 style={{ margin: "0 0 0.5rem 0", fontSize: "1.25rem" }}>{title}</h2>
      <p style={{ margin: 0, color: "#6b7280" }}>{description}</p>
    </div>
  );
}
