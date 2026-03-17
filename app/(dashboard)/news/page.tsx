import PageHeader from "@/components/PageHeader";
import PlaceholderCard from "@/components/PlaceholderCard";
import { Newspaper, Rss, ExternalLink, Tag, Clock, TrendingUp, BookOpen, Filter } from "lucide-react";

const feeds = [
  { name: "Social Media Today", status: "active", articles: 14, color: "#3d9ef5" },
  { name: "Marketing Week", status: "active", articles: 8, color: "#a78bfa" },
  { name: "TechCrunch — Social", status: "active", articles: 11, color: "#f5564a" },
  { name: "Later Blog", status: "paused", articles: 0, color: "#8ba3be" },
];

const articles = [
  {
    source: "Social Media Today",
    sourceColor: "#3d9ef5",
    title: "Instagram Tests New Chronological Feed Feature for Business Accounts",
    summary: "Meta is reportedly rolling out an opt-in chronological feed for business profiles in select markets, with a full launch expected Q2.",
    tags: ["Instagram", "Algorithm"],
    time: "2h ago",
    read: false,
  },
  {
    source: "Marketing Week",
    sourceColor: "#a78bfa",
    title: "Short-Form Video Drives 47% Higher Engagement Than Static Posts in 2025",
    summary: "A new industry report shows Reels and TikTok-style content continue to dominate organic reach metrics across all demographics.",
    tags: ["Video", "Engagement", "Trends"],
    time: "5h ago",
    read: false,
  },
  {
    source: "TechCrunch",
    sourceColor: "#f5564a",
    title: "Meta Expands Creator Monetisation Tools to 30 New Markets",
    summary: "The expansion includes Subscriptions, Gifts, and ad revenue sharing for eligible creators with over 10,000 followers.",
    tags: ["Meta", "Monetisation"],
    time: "1d ago",
    read: true,
  },
  {
    source: "Social Media Today",
    sourceColor: "#3d9ef5",
    title: "LinkedIn Introduces AI-Powered Content Recommendations for Company Pages",
    summary: "LinkedIn's new tool analyses historical post performance to suggest optimal posting times and content formats.",
    tags: ["LinkedIn", "AI"],
    time: "1d ago",
    read: true,
  },
  {
    source: "Marketing Week",
    sourceColor: "#a78bfa",
    title: "User-Generated Content Outperforms Brand Posts by 4x in Trust Metrics",
    summary: "The latest consumer survey highlights the growing importance of authentic peer content over polished brand campaigns.",
    tags: ["UGC", "Strategy"],
    time: "2d ago",
    read: true,
  },
];

const trendingTopics = [
  { tag: "Short-form Video", articles: 12, trend: "+38%" },
  { tag: "AI in Marketing", articles: 9, trend: "+64%" },
  { tag: "Creator Economy", articles: 7, trend: "+22%" },
  { tag: "Algorithm Changes", articles: 6, trend: "+15%" },
  { tag: "UGC Strategy", articles: 5, trend: "+41%" },
];

export default function NewsPage() {
  const unread = articles.filter((a) => !a.read).length;

  return (
    <div className="animate-fade-up">
      <PageHeader
        icon={Newspaper}
        iconColor="#a78bfa"
        title="News Consolidator"
        subtitle="Aggregate industry news, trends, and insights from curated RSS feeds."
        actions={
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 14px",
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
              <Filter size={13} />
              Filter
            </button>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 14px",
                background: "#a78bfa",
                color: "#080b10",
                border: "none",
                borderRadius: "var(--radius-md)",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "opacity 0.15s ease",
              }}
              className="hover:opacity-85"
            >
              <Rss size={13} />
              Add Feed
            </button>
          </div>
        }
      />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: "24px" }}>
        {/* Articles */}
        <div>
          {/* Unread header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "12px", fontWeight: 700, color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Articles
              </h2>
              {unread > 0 && (
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    color: "#fff",
                    background: "#a78bfa",
                    padding: "2px 7px",
                    borderRadius: "99px",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {unread} new
                </span>
              )}
            </div>
            <button style={{ fontSize: "12px", color: "var(--text-muted)", background: "none", border: "none", cursor: "pointer" }} className="hover:text-[var(--accent-primary)]">
              Mark all read
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {articles.map((article, i) => (
              <div
                key={i}
                style={{
                  background: "var(--bg-surface)",
                  border: `1px solid ${article.read ? "var(--border-subtle)" : "var(--border-default)"}`,
                  borderRadius: "var(--radius-lg)",
                  padding: "18px 20px",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  position: "relative",
                  opacity: 0,
                  animation: `fadeUp 0.35s ease ${i * 0.07 + 0.1}s forwards`,
                }}
                className="hover:border-[var(--border-strong)] hover:bg-[var(--bg-elevated)]"
              >
                {/* Unread dot */}
                {!article.read && (
                  <div
                    style={{
                      position: "absolute",
                      top: 20,
                      right: 18,
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#a78bfa",
                      boxShadow: "0 0 8px rgba(167, 139, 250, 0.5)",
                    }}
                  />
                )}

                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 600,
                      color: article.sourceColor,
                      background: `${article.sourceColor}18`,
                      padding: "2px 8px",
                      borderRadius: "99px",
                    }}
                  >
                    {article.source}
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--text-disabled)", display: "flex", alignItems: "center", gap: "3px" }}>
                    <Clock size={9} />
                    {article.time}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "14px",
                    fontWeight: article.read ? 400 : 600,
                    color: article.read ? "var(--text-secondary)" : "var(--text-primary)",
                    lineHeight: 1.4,
                    marginBottom: "6px",
                  }}
                >
                  {article.title}
                </h3>
                <p style={{ fontSize: "12px", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "10px" }}>
                  {article.summary}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "10px",
                        color: "var(--text-muted)",
                        background: "var(--bg-muted)",
                        padding: "2px 8px",
                        borderRadius: "99px",
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                      }}
                    >
                      <Tag size={8} />
                      {tag}
                    </span>
                  ))}
                  <button
                    style={{
                      marginLeft: "auto",
                      fontSize: "11px",
                      color: "var(--text-muted)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                    className="hover:text-[var(--text-primary)]"
                  >
                    <ExternalLink size={11} /> Read full
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Active feeds */}
          <div
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "14px 16px", borderBottom: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", gap: "8px" }}>
              <Rss size={13} style={{ color: "#a78bfa" }} />
              <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)" }}>RSS Feeds</p>
            </div>
            <div style={{ padding: "10px 12px", display: "flex", flexDirection: "column", gap: "6px" }}>
              {feeds.map((feed) => (
                <div
                  key={feed.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "8px 10px",
                    borderRadius: "var(--radius-md)",
                    transition: "background 0.15s ease",
                  }}
                  className="hover:bg-[var(--bg-elevated)]"
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: feed.status === "active" ? "var(--status-success)" : "var(--text-disabled)",
                        boxShadow: feed.status === "active" ? "0 0 6px var(--accent-primary-glow)" : "none",
                      }}
                    />
                    <span style={{ fontSize: "12px", color: feed.status === "active" ? "var(--text-primary)" : "var(--text-muted)" }}>
                      {feed.name}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: "10px",
                      fontFamily: "var(--font-display)",
                      color: feed.status === "active" ? feed.color : "var(--text-disabled)",
                      background: feed.status === "active" ? `${feed.color}18` : "var(--bg-muted)",
                      padding: "2px 7px",
                      borderRadius: "99px",
                    }}
                  >
                    {feed.status === "active" ? `${feed.articles} new` : "paused"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Trending topics */}
          <div
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "14px 16px", borderBottom: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", gap: "8px" }}>
              <TrendingUp size={13} style={{ color: "#00d4aa" }} />
              <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)" }}>Trending Topics</p>
            </div>
            <div style={{ padding: "10px 12px", display: "flex", flexDirection: "column", gap: "6px" }}>
              {trendingTopics.map((t, i) => (
                <div
                  key={t.tag}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "8px 10px",
                    borderRadius: "var(--radius-md)",
                    cursor: "pointer",
                    transition: "background 0.15s ease",
                  }}
                  className="hover:bg-[var(--bg-elevated)]"
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "10px", fontFamily: "var(--font-display)", color: "var(--text-disabled)", fontWeight: 700 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span style={{ fontSize: "12px", color: "var(--text-primary)" }}>{t.tag}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>{t.articles}</span>
                    <span style={{ fontSize: "10px", color: "var(--status-success)", fontWeight: 600 }}>{t.trend}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <PlaceholderCard
            icon={BookOpen}
            title="Saved Articles"
            description="Bookmark articles for later reference and share them with your team."
            accentColor="#a78bfa"
          />
        </div>
      </div>
    </div>
  );
}
