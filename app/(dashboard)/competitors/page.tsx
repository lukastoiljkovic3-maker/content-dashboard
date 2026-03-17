import PageHeader from "@/components/PageHeader";
import StatCard from "@/components/StatCard";
import PlaceholderCard from "@/components/PlaceholderCard";
import {
  Crosshair,
  PlusCircle,
  TrendingUp,
  Users,
  Heart,
  ArrowUp,
  ArrowDown,
  Minus,
  AlertCircle,
  Bell,
} from "lucide-react";

const competitors = [
  {
    name: "BrandAlpha",
    handle: "@brandalpha",
    followers: "118K",
    growth: "+2.3%",
    positive: true,
    engagement: "5.1%",
    postsMonth: 22,
    threat: "high",
    color: "#f5564a",
  },
  {
    name: "CreativeHub",
    handle: "@creativehub",
    followers: "84K",
    growth: "+1.1%",
    positive: true,
    engagement: "4.8%",
    postsMonth: 18,
    threat: "medium",
    color: "#f5a623",
  },
  {
    name: "StyleCo",
    handle: "@styleco",
    followers: "61K",
    growth: "-0.4%",
    positive: false,
    engagement: "3.2%",
    postsMonth: 12,
    threat: "low",
    color: "#00d4aa",
  },
  {
    name: "NovaBrand",
    handle: "@novabrand",
    followers: "39K",
    growth: "+4.7%",
    positive: true,
    engagement: "6.9%",
    postsMonth: 30,
    threat: "medium",
    color: "#f5a623",
  },
];

const alerts = [
  { competitor: "BrandAlpha", message: "Posted a reel that gained 14K views in 2 hours", time: "3h ago", type: "viral" },
  { competitor: "NovaBrand", message: "Follower count spiked +800 in 24 hours", time: "1d ago", type: "growth" },
  { competitor: "CreativeHub", message: "Launched a new product campaign hashtag", time: "2d ago", type: "campaign" },
];

const threatColors: Record<string, string> = {
  high: "#f5564a",
  medium: "#f5a623",
  low: "#00d4aa",
};

export default function CompetitorsPage() {
  return (
    <div className="animate-fade-up">
      <PageHeader
        icon={Crosshair}
        iconColor="#f5a623"
        title="Competitor Tracker"
        subtitle="Monitor competitor activity, growth, and content strategy in real-time."
        actions={
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 16px",
              background: "var(--bg-elevated)",
              color: "var(--text-secondary)",
              border: "1px solid var(--border-default)",
              borderRadius: "var(--radius-md)",
              fontSize: "13px",
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
            className="hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
          >
            <PlusCircle size={14} />
            Track Competitor
          </button>
        }
      />

      {/* Your position vs field */}
      <div
        style={{
          background: "var(--bg-surface)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-lg)",
          padding: "20px 24px",
          marginBottom: "24px",
          display: "flex",
          gap: "32px",
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>
            Your Position
          </p>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 700, color: "var(--accent-primary)", lineHeight: 1 }}>
            #2
          </p>
          <p style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "3px" }}>of 5 tracked brands</p>
        </div>
        <div style={{ width: "1px", height: "48px", background: "var(--border-subtle)" }} />
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "12px", color: "var(--text-muted)", marginBottom: "8px" }}>Follower ranking</p>
          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            {[
              { label: "BrandAlpha", value: 118, color: "#f5564a" },
              { label: "You", value: 95, color: "#00d4aa", isYou: true },
              { label: "CreativeHub", value: 84, color: "#8ba3be" },
              { label: "StyleCo", value: 61, color: "#8ba3be" },
              { label: "NovaBrand", value: 39, color: "#8ba3be" },
            ].map((b) => (
              <div key={b.label} style={{ flex: b.value, display: "flex", flexDirection: "column", gap: "4px" }}>
                <div
                  style={{
                    height: "8px",
                    background: b.color,
                    borderRadius: "3px",
                    opacity: (b as any).isYou ? 1 : 0.4,
                    boxShadow: (b as any).isYou ? `0 0 8px ${b.color}80` : "none",
                  }}
                />
                <span style={{ fontSize: "9px", color: (b as any).isYou ? "var(--text-primary)" : "var(--text-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {b.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "24px" }}>
        {/* Competitors table */}
        <div
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "16px 20px", borderBottom: "1px solid var(--border-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)" }}>Tracked Competitors</p>
            <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>Updated 1h ago</span>
          </div>

          {/* Table header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 100px 90px 90px 80px 70px",
              gap: "12px",
              padding: "10px 20px",
              borderBottom: "1px solid var(--border-subtle)",
              background: "var(--bg-elevated)",
            }}
          >
            {["Account", "Followers", "Growth", "Engagement", "Posts/Mo", "Threat"].map((h) => (
              <span key={h} style={{ fontSize: "10px", fontWeight: 600, color: "var(--text-disabled)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {h}
              </span>
            ))}
          </div>

          {competitors.map((c, i) => (
            <div
              key={c.name}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 100px 90px 90px 80px 70px",
                gap: "12px",
                padding: "14px 20px",
                alignItems: "center",
                borderBottom: i < competitors.length - 1 ? "1px solid var(--border-subtle)" : "none",
                transition: "background 0.15s ease",
                opacity: 0,
                animation: `fadeUp 0.35s ease ${i * 0.07 + 0.1}s forwards`,
              }}
              className="hover:bg-[var(--bg-elevated)]"
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: `${c.color}22`,
                    border: `1px solid ${c.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    fontWeight: 700,
                    color: c.color,
                    fontFamily: "var(--font-display)",
                    flexShrink: 0,
                  }}
                >
                  {c.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <p style={{ fontSize: "13px", fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.2 }}>{c.name}</p>
                  <p style={{ fontSize: "11px", color: "var(--text-muted)" }}>{c.handle}</p>
                </div>
              </div>
              <span style={{ fontSize: "13px", fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>{c.followers}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                {c.positive ? <ArrowUp size={11} style={{ color: "var(--status-success)" }} /> : <ArrowDown size={11} style={{ color: "var(--status-error)" }} />}
                <span style={{ fontSize: "12px", color: c.positive ? "var(--status-success)" : "var(--status-error)" }}>{c.growth}</span>
              </div>
              <span style={{ fontSize: "12px", color: "var(--text-primary)" }}>{c.engagement}</span>
              <span style={{ fontSize: "12px", color: "var(--text-secondary)" }}>{c.postsMonth}</span>
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 600,
                  color: threatColors[c.threat],
                  background: `${threatColors[c.threat]}18`,
                  padding: "3px 8px",
                  borderRadius: "99px",
                  textTransform: "capitalize",
                  letterSpacing: "0.04em",
                  display: "inline-block",
                }}
              >
                {c.threat}
              </span>
            </div>
          ))}
        </div>

        {/* Right column — alerts */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "16px 18px", borderBottom: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", gap: "8px" }}>
              <Bell size={14} style={{ color: "#f5a623" }} />
              <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)" }}>Activity Alerts</p>
            </div>
            <div style={{ padding: "12px 16px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {alerts.map((alert, i) => (
                <div
                  key={i}
                  style={{
                    padding: "12px",
                    background: "var(--bg-elevated)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border-subtle)",
                    transition: "border-color 0.15s ease",
                  }}
                  className="hover:border-[var(--border-default)]"
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" }}>
                    <span style={{ fontSize: "11px", fontWeight: 600, color: "#f5a623" }}>{alert.competitor}</span>
                    <span style={{ fontSize: "10px", color: "var(--text-disabled)" }}>{alert.time}</span>
                  </div>
                  <p style={{ fontSize: "12px", color: "var(--text-secondary)", lineHeight: 1.5 }}>{alert.message}</p>
                </div>
              ))}
            </div>
          </div>

          <PlaceholderCard
            icon={AlertCircle}
            title="Set Custom Alerts"
            description="Get notified when competitors hit key milestones or post trending content."
            accentColor="#f5a623"
          />
        </div>
      </div>
    </div>
  );
}
