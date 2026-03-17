import PageHeader from "@/components/PageHeader";
import StatCard from "@/components/StatCard";
import PlaceholderCard from "@/components/PlaceholderCard";
import {
  Instagram,
  Heart,
  Users,
  ImageIcon,
  TrendingUp,
  PlusCircle,
  Clock,
  Send,
  Link2,
  Sparkles,
} from "lucide-react";

const stats = [
  { label: "Followers", value: "24.8K", change: "+12.4%", positive: true, icon: Users, color: "#e1306c" },
  { label: "Total Likes", value: "183K", change: "+8.1%", positive: true, icon: Heart, color: "#ff6b9d" },
  { label: "Posts This Month", value: "18", change: "+3", positive: true, icon: ImageIcon, color: "#3d9ef5" },
  { label: "Avg. Engagement", value: "4.7%", change: "-0.3%", positive: false, icon: TrendingUp, color: "#f5a623" },
];

const recentPosts = [
  { id: 1, caption: "Sunday morning vibes ☀️ New collection dropping soon...", likes: 1240, comments: 88, status: "published", time: "2h ago" },
  { id: 2, caption: "Behind the scenes at our latest shoot 📸 Can you guess...", likes: 940, comments: 54, status: "published", time: "1d ago" },
  { id: 3, caption: "Your next favourite summer look. Swipe to see the full fit →", likes: 2100, comments: 130, status: "published", time: "3d ago" },
];

const scheduled = [
  { id: 4, caption: "New drop alert 🚨 The waitlist is open...", time: "Tomorrow, 9:00 AM", type: "Reel" },
  { id: 5, caption: "We asked, you answered. Here are the top...", time: "Thu, 11:30 AM", type: "Carousel" },
];

export default function InstagramPage() {
  return (
    <div className="animate-fade-up">
      <PageHeader
        icon={Instagram}
        iconColor="#e1306c"
        title="Instagram Manager"
        subtitle="Manage posts, track performance, and schedule content."
        actions={
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 16px",
              background: "#e1306c",
              color: "#fff",
              border: "none",
              borderRadius: "var(--radius-md)",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "opacity 0.15s ease",
            }}
            className="hover:opacity-85"
          >
            <PlusCircle size={14} />
            New Post
          </button>
        }
      />

      {/* Stats grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
          marginBottom: "32px",
        }}
        className="stagger"
      >
        {stats.map((s, i) => (
          <StatCard key={s.label} {...s} iconColor={s.color} index={i} />
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "24px" }}>
        {/* Recent posts */}
        <section>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "12px",
              fontWeight: 700,
              color: "var(--text-muted)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            Recent Posts
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {recentPosts.map((post, i) => (
              <div
                key={post.id}
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-lg)",
                  padding: "16px 18px",
                  display: "flex",
                  gap: "14px",
                  alignItems: "flex-start",
                  opacity: 0,
                  animation: `fadeUp 0.35s ease ${i * 0.06 + 0.2}s forwards`,
                  transition: "border-color 0.15s ease",
                }}
                className="hover:border-[var(--border-default)]"
              >
                {/* Thumbnail placeholder */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "var(--radius-md)",
                    background: `linear-gradient(135deg, #e1306c22, #ff6b9d22)`,
                    border: "1px solid #e1306c22",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <ImageIcon size={20} style={{ color: "#e1306c" }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--text-primary)",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      marginBottom: "6px",
                    }}
                  >
                    {post.caption}
                  </p>
                  <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                    <span style={{ fontSize: "12px", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
                      <Heart size={11} /> {post.likes.toLocaleString()}
                    </span>
                    <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                      {post.comments} comments
                    </span>
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "var(--status-success)",
                        background: "var(--accent-primary-dim)",
                        padding: "2px 7px",
                        borderRadius: "99px",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {post.status}
                    </span>
                    <span style={{ fontSize: "11px", color: "var(--text-disabled)", marginLeft: "auto" }}>
                      {post.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Right column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Scheduled */}
          <section>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "12px",
                fontWeight: 700,
                color: "var(--text-muted)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              Scheduled
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {scheduled.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-lg)",
                    padding: "14px 16px",
                    transition: "border-color 0.15s ease",
                  }}
                  className="hover:border-[var(--border-default)]"
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "#3d9ef5",
                        background: "rgba(61,158,245,0.12)",
                        padding: "2px 8px",
                        borderRadius: "99px",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {item.type}
                    </span>
                    <span style={{ fontSize: "11px", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
                      <Clock size={10} /> {item.time}
                    </span>
                  </div>
                  <p style={{ fontSize: "12px", color: "var(--text-secondary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Quick actions */}
          <section>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "12px",
                fontWeight: 700,
                color: "var(--text-muted)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              Quick Actions
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              {[
                { icon: Send, label: "Create Post", color: "#e1306c" },
                { icon: Clock, label: "Schedule", color: "#f5a623" },
                { icon: Link2, label: "Bio Link", color: "#3d9ef5" },
                { icon: Sparkles, label: "AI Caption", color: "#a78bfa" },
              ].map(({ icon: Icon, label, color }) => (
                <button
                  key={label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                    padding: "16px 12px",
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-lg)",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                  className="hover:border-[var(--border-default)] hover:bg-[var(--bg-elevated)]"
                >
                  <Icon size={18} style={{ color }} />
                  <span style={{ fontSize: "11px", color: "var(--text-secondary)", fontWeight: 500 }}>{label}</span>
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
