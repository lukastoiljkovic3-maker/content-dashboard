import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  change?: string;
  positive?: boolean;
  icon: LucideIcon;
  iconColor?: string;
  index?: number;
}

export default function StatCard({
  label,
  value,
  change,
  positive = true,
  icon: Icon,
  iconColor = "var(--accent-primary)",
  index = 0,
}: StatCardProps) {
  return (
    <div
      style={{
        background: "var(--bg-surface)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-lg)",
        padding: "20px",
        opacity: 0,
        animation: `fadeUp 0.35s ease ${index * 0.05 + 0.05}s forwards`,
        transition: "border-color 0.15s ease, transform 0.15s ease",
      }}
      className="hover:border-[var(--border-default)] hover:-translate-y-px cursor-default"
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <p style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>
          {label}
        </p>
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: "var(--radius-sm)",
            background: `${iconColor}15`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon size={15} style={{ color: iconColor }} />
        </div>
      </div>
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "26px",
          fontWeight: 700,
          color: "var(--text-primary)",
          marginTop: "10px",
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        {value}
      </p>
      {change && (
        <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "8px" }}>
          {positive ? (
            <TrendingUp size={12} style={{ color: "var(--status-success)" }} />
          ) : (
            <TrendingDown size={12} style={{ color: "var(--status-error)" }} />
          )}
          <span
            style={{
              fontSize: "12px",
              color: positive ? "var(--status-success)" : "var(--status-error)",
              fontWeight: 500,
            }}
          >
            {change}
          </span>
          <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>vs last month</span>
        </div>
      )}
    </div>
  );
}
