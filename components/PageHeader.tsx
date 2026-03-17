import { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  icon: LucideIcon;
  iconColor?: string;
  title: string;
  subtitle: string;
  actions?: React.ReactNode;
}

export default function PageHeader({
  icon: Icon,
  iconColor = "var(--accent-primary)",
  title,
  subtitle,
  actions,
}: PageHeaderProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "32px",
        paddingBottom: "24px",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: "var(--radius-md)",
            background: `${iconColor}18`,
            border: `1px solid ${iconColor}30`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon size={20} style={{ color: iconColor }} />
        </div>
        <div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "18px",
              fontWeight: 700,
              color: "var(--text-primary)",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
            }}
          >
            {title}
          </h1>
          <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "2px" }}>{subtitle}</p>
        </div>
      </div>
      {actions && <div style={{ display: "flex", gap: "8px" }}>{actions}</div>}
    </div>
  );
}
