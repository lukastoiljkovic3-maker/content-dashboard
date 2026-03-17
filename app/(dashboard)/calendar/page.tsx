import PageHeader from "@/components/PageHeader";
import PlaceholderCard from "@/components/PlaceholderCard";
import { CalendarDays, PlusCircle, Instagram, Twitter, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const events: Record<number, { caption: string; platform: string; type: string; color: string }[]> = {
  3: [{ caption: "Spring lookbook reel", platform: "IG", type: "Reel", color: "#e1306c" }],
  7: [{ caption: "Behind the scenes carousel", platform: "IG", type: "Carousel", color: "#e1306c" }],
  10: [
    { caption: "Product launch announcement", platform: "IG", type: "Story", color: "#e1306c" },
    { caption: "Launch tweet thread", platform: "TW", type: "Thread", color: "#1da1f2" },
  ],
  14: [{ caption: "UGC feature post", platform: "IG", type: "Post", color: "#e1306c" }],
  17: [{ caption: "Brand Q&A session", platform: "IG", type: "Live", color: "#e1306c" }],
  21: [{ caption: "Weekly roundup", platform: "TW", type: "Thread", color: "#1da1f2" }],
  24: [{ caption: "Easter campaign kick-off", platform: "IG", type: "Reel", color: "#e1306c" }],
  28: [{ caption: "End of month report story", platform: "IG", type: "Story", color: "#e1306c" }],
};

const upcoming = [
  { day: "Tomorrow", time: "9:00 AM", caption: "Spring lookbook reel", platform: "Instagram", type: "Reel", color: "#e1306c" },
  { day: "Thu, Mar 20", time: "11:30 AM", caption: "Product launch announcement", platform: "Instagram", type: "Story", color: "#e1306c" },
  { day: "Thu, Mar 20", time: "12:00 PM", caption: "Launch tweet thread", platform: "Twitter", type: "Thread", color: "#1da1f2" },
  { day: "Mon, Mar 24", time: "10:00 AM", caption: "Easter campaign kick-off", platform: "Instagram", type: "Reel", color: "#e1306c" },
];

export default function CalendarPage() {
  const today = 17;

  return (
    <div className="animate-fade-up">
      <PageHeader
        icon={CalendarDays}
        iconColor="#00d4aa"
        title="Content Calendar"
        subtitle="Plan, schedule, and visualise your entire content pipeline."
        actions={
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 16px",
              background: "var(--accent-primary)",
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
            <PlusCircle size={14} />
            Schedule Post
          </button>
        }
      />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "24px" }}>
        {/* Calendar grid */}
        <div
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
          }}
        >
          {/* Calendar header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
              borderBottom: "1px solid var(--border-subtle)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <button
                style={{ background: "none", border: "1px solid var(--border-default)", borderRadius: "var(--radius-sm)", padding: "4px", cursor: "pointer", color: "var(--text-secondary)", display: "flex" }}
                className="hover:border-[var(--border-strong)]"
              >
                <ChevronLeft size={14} />
              </button>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 700, color: "var(--text-primary)" }}>
                March 2026
              </span>
              <button
                style={{ background: "none", border: "1px solid var(--border-default)", borderRadius: "var(--radius-sm)", padding: "4px", cursor: "pointer", color: "var(--text-secondary)", display: "flex" }}
                className="hover:border-[var(--border-strong)]"
              >
                <ChevronRight size={14} />
              </button>
            </div>
            <div style={{ display: "flex", gap: "6px" }}>
              {["Month", "Week"].map((v, i) => (
                <button
                  key={v}
                  style={{
                    padding: "5px 12px",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "11px",
                    fontWeight: 500,
                    cursor: "pointer",
                    background: i === 0 ? "var(--accent-primary-dim)" : "transparent",
                    border: i === 0 ? "1px solid var(--accent-primary-glow)" : "1px solid transparent",
                    color: i === 0 ? "var(--accent-primary)" : "var(--text-muted)",
                  }}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Day labels */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", padding: "0 4px" }}>
            {DAYS.map((d) => (
              <div
                key={d}
                style={{
                  padding: "10px 0",
                  textAlign: "center",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "var(--text-disabled)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {d}
              </div>
            ))}
          </div>

          {/* Calendar cells */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              borderTop: "1px solid var(--border-subtle)",
              padding: "0 4px 4px",
            }}
          >
            {/* March 2026 starts on Sunday (offset 6 in Mon-first grid) */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={`empty-${i}`} style={{ minHeight: 80, borderTop: "1px solid var(--border-subtle)" }} />
            ))}
            {Array.from({ length: 31 }).map((_, i) => {
              const day = i + 1;
              const isToday = day === today;
              const dayEvents = events[day] || [];
              return (
                <div
                  key={day}
                  style={{
                    minHeight: 80,
                    padding: "8px 6px",
                    borderTop: "1px solid var(--border-subtle)",
                    transition: "background 0.1s ease",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  className="hover:bg-[var(--bg-elevated)]"
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: isToday ? "var(--accent-primary)" : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "4px",
                      boxShadow: isToday ? "0 0 10px var(--accent-primary-glow)" : "none",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        fontFamily: "var(--font-display)",
                        fontWeight: isToday ? 700 : 400,
                        color: isToday ? "#080b10" : day < today ? "var(--text-disabled)" : "var(--text-secondary)",
                      }}
                    >
                      {day}
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    {dayEvents.slice(0, 2).map((ev, idx) => (
                      <div
                        key={idx}
                        style={{
                          fontSize: "9px",
                          padding: "2px 5px",
                          borderRadius: "3px",
                          background: `${ev.color}22`,
                          color: ev.color,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          fontWeight: 600,
                        }}
                      >
                        {ev.type}
                      </div>
                    ))}
                    {dayEvents.length > 2 && (
                      <span style={{ fontSize: "9px", color: "var(--text-muted)" }}>+{dayEvents.length - 2} more</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming panel */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "16px 18px", borderBottom: "1px solid var(--border-subtle)" }}>
              <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)" }}>Upcoming Posts</p>
              <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "2px" }}>Next 7 days</p>
            </div>
            <div style={{ padding: "12px 16px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {upcoming.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                    padding: "10px 12px",
                    background: "var(--bg-elevated)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border-subtle)",
                    transition: "border-color 0.15s ease",
                  }}
                  className="hover:border-[var(--border-default)]"
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "var(--radius-sm)",
                      background: `${item.color}18`,
                      border: `1px solid ${item.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: "9px",
                      fontWeight: 700,
                      color: item.color,
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {item.platform === "Instagram" ? "IG" : "TW"}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: "12px", color: "var(--text-primary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginBottom: "3px" }}>
                      {item.caption}
                    </p>
                    <p style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                      {item.day} · {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <PlaceholderCard
            icon={Sparkles}
            title="AI Content Suggestions"
            description="Connect your AI provider to get smart scheduling recommendations."
            accentColor="#00d4aa"
          />
        </div>
      </div>
    </div>
  );
}
