import { LucideIcon } from "lucide-react";

interface PlaceholderCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor?: string;
  action?: React.ReactNode;
}

export default function PlaceholderCard({
  icon: Icon,
  title,
  description,
  accentColor = "var(--accent-primary)",
  action,
}: PlaceholderCardProps) {
  return (
    <div
      style={{
        background: "var(--bg-surface)",
        border: "1px dashed var(--border-default)",
        borderRadius: "var(--radius-lg)",
        padding: "40px 32px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: "var(--radius-md)",
          background: `${accentColor}12`,
          border: `1px solid ${accentColor}25`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={24} style={{ color: accentColor }} />
      </div>
      <div>
        <p style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "4px" }}>
          {title}
        </p>
        <p style={{ fontSize: "13px", color: "var(--text-muted)", maxWidth: "260px", lineHeight: 1.6 }}>
          {description}
        </p>
      </div>
      {action && <div style={{ marginTop: "4px" }}>{action}</div>}
    </div>
  );
}
