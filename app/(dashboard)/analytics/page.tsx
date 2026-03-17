import PageHeader from "@/components/PageHeader";
import StatCard from "@/components/StatCard";
import PlaceholderCard from "@/components/PlaceholderCard";
import {
  BarChart3,
  Eye,
  MousePointerClick,
  Users,
  TrendingUp,
  Activity,
  PieChart,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  { label: "Total Reach", value: "142K", change: "+18.2%", positive: true, icon: Eye, color: "#3d9ef5" },
  { label: "Profile Visits", value: "8,340", change: "+6.5%", positive: true, icon: MousePointerClick, color: "#00d4aa" },
  { label: "New Followers", value: "+912", change: "+3.1%", positive: true, icon: Users, color: "#a78bfa" },
  { label: "Impressions", value: "316K", change: "-2.4%", positive: false, icon: TrendingUp, color: "#f5a623" },
];

const topContent = [
  { rank: 1, caption: "Sunday morning vibes ☀️", reach: "12.4K", engagement: "8.2%", delta: "+2.1%" },
  { rank: 2, caption: "New summer collection drop 🌊", reach: "9.8K", engagement: "7.9%", delta: "+1.4%" },
  { rank: 3, caption: "Behind the scenes 📸", reach: "8.1K", engagement: "6.3%", delta: "+0.8%" },
  { rank: 4, caption: "Your next fav summer look →", reach: "7.6K", engagement: "5.7%", delta: "-0.3%" },
  { rank: 5, caption: "We asked, you answered 💬", reach: "6.9K", engagement: "5.2%", delta: "+0.2%" },
];

const audienceData = [
  { label: "18–24", pct: 38 },
  { label: "25–34", pct: 29 },
  { label: "35–44", pct: 18 },
  { label: "45–54", pct: 10 },
  { label: "55+", pct: 5 },
];

export default function AnalyticsPage() {
  return (
    <div className="animate-fade-up">
      <PageHeader
        icon={BarChart3}
        iconColor="#3d9ef5"
        title="Analytics"
        subtitle="Track performance, audience insights, and content metrics."
        actions={
          <div style={{ display: "flex", gap: "8px" }}>
            {["7d", "30d", "90d"].map((range) => (
              <button
                key={range}
                style={{
                  padding: "6px 14px",
                  borderRadius: "var(--radius-md)",
                  fontSize: "12px",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  background: range === "30d" ? "var(--accent-primary-dim)" : "var(--bg-elevated)",
                  border: range === "30d" ? "1px solid var(--accent-primary-glow)" : "1px solid var(--border-subtle)",
                  color: range === "30d" ? "var(--accent-primary)" : "var(--text-secondary)",
                  fontFamily: "var(--font-display)",
                }}
              >
                {range}
              </button>
            ))}
          </div>
        }
      />

      {/* Stats */}
      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "32px" }}
        className="stagger"
      >
        {stats.map((s, i) => (
          <StatCard key={s.label} {...s} iconColor={s.color} index={i} />
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "24px" }}>
        {/* Chart placeholder + Top content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Chart area */}
          <div
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-lg)",
              padding: "22px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <div>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)" }}>Reach & Impressions</p>
                <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "2px" }}>Last 30 days</p>
              </div>
              <div style={{ display: "flex", gap: "16px" }}>
                {[
                  { label: "Reach", color: "#3d9ef5" },
                  { label: "Impressions", color: "#00d4aa" },
                ].map(({ label, color }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: color }} />
                    <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated bar chart */}
            <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", height: "160px", padding: "0 4px" }}>
              {[42, 58, 45, 72, 61, 88, 70, 95, 78, 110, 92, 130, 115, 140].map((v, i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3px", alignItems: "center", height: "100%", justifyContent: "flex-end" }}>
                  <div
                    style={{
                      width: "100%",
                      height: `${(v * 0.7)}px`,
                      background: `linear-gradient(180deg, #3d9ef5 0%, #3d9ef520 100%)`,
                      borderRadius: "3px 3px 0 0",
                      transition: "height 0.3s ease",
                    }}
                  />
                  <div
                    style={{
                      width: "100%",
                      height: `${v * 0.45}px`,
                      background: `linear-gradient(180deg, #00d4aa 0%, #00d4aa20 100%)`,
                      borderRadius: "3px 3px 0 0",
                    }}
                  />
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px", padding: "0 4px" }}>
              {["Mar 1", "Mar 8", "Mar 15", "Mar 22", "Mar 29"].map((d) => (
                <span key={d} style={{ fontSize: "10px", color: "var(--text-disabled)" }}>{d}</span>
              ))}
            </div>
          </div>

          {/* Top content */}
          <div
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "18px 20px", borderBottom: "1px solid var(--border-subtle)" }}>
              <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)" }}>Top Performing Content</p>
              <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "2px" }}>By reach, last 30 days</p>
            </div>
            <div>
              {topContent.map((item, i) => (
                <div
                  key={item.rank}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "24px 1fr 80px 80px 60px",
                    gap: "12px",
                    alignItems: "center",
                    padding: "12px 20px",
                    borderBottom: i < topContent.length - 1 ? "1px solid var(--border-subtle)" : "none",
                    transition: "background 0.15s ease",
                  }}
                  className="hover:bg-[var(--bg-elevated)]"
                >
                  <span style={{ fontSize: "12px", fontFamily: "var(--font-display)", color: "var(--text-disabled)", fontWeight: 700 }}>
                    {String(item.rank).padStart(2, "0")}
                  </span>
                  <span style={{ fontSize: "12px", color: "var(--text-secondary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {item.caption}
                  </span>
                  <span style={{ fontSize: "12px", color: "var(--text-primary)", fontFamily: "var(--font-display)", textAlign: "right" }}>{item.reach}</span>
                  <span style={{ fontSize: "12px", color: "var(--text-primary)", textAlign: "right" }}>{item.engagement}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "3px", justifyContent: "flex-end" }}>
                    <ArrowUpRight size={11} style={{ color: item.delta.startsWith("+") ? "var(--status-success)" : "var(--status-error)" }} />
                    <span style={{ fontSize: "11px", color: item.delta.startsWith("+") ? "var(--status-success)" : "var(--status-error)" }}>
                      {item.delta}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Audience age */}
          <div
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-lg)",
              padding: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "18px" }}>
              <PieChart size={14} style={{ color: "#a78bfa" }} />
              <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)" }}>Audience Age</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {audienceData.map(({ label, pct }) => (
                <div key={label}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                    <span style={{ fontSize: "11px", color: "var(--text-secondary)" }}>{label}</span>
                    <span style={{ fontSize: "11px", fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>{pct}%</span>
                  </div>
                  <div style={{ height: 4, background: "var(--bg-muted)", borderRadius: "2px", overflow: "hidden" }}>
                    <div
                      style={{
                        height: "100%",
                        width: `${pct}%`,
                        background: `linear-gradient(90deg, #a78bfa, #3d9ef5)`,
                        borderRadius: "2px",
                        transition: "width 0.6s ease",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity heatmap placeholder */}
          <PlaceholderCard
            icon={Activity}
            title="Posting Heatmap"
            description="Connect more data to see when your audience is most active."
            accentColor="#3d9ef5"
          />
        </div>
      </div>
    </div>
  );
}
