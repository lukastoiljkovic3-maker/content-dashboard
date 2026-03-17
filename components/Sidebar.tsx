"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Instagram,
  BarChart3,
  CalendarDays,
  Crosshair,
  Newspaper,
  Settings,
  Bell,
  ChevronRight,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Instagram",
    href: "/instagram",
    icon: Instagram,
    badge: 3,
    color: "#e1306c",
  },
  {
    label: "Analytics",
    href: "/analytics",
    icon: BarChart3,
    color: "#3d9ef5",
  },
  {
    label: "Content Calendar",
    href: "/calendar",
    icon: CalendarDays,
    color: "#00d4aa",
  },
  {
    label: "Competitor Tracker",
    href: "/competitors",
    icon: Crosshair,
    color: "#f5a623",
  },
  {
    label: "News Consolidator",
    href: "/news",
    icon: Newspaper,
    color: "#a78bfa",
  },
];

const bottomItems = [
  { label: "Notifications", href: "/notifications", icon: Bell },
  { label: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      style={{
        width: "var(--sidebar-width)",
        background: "var(--bg-surface)",
        borderRight: "1px solid var(--border-subtle)",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 50,
      }}
    >
      {/* Logo / Wordmark */}
      <div
        style={{
          padding: "20px 20px 16px",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "var(--radius-sm)",
              background: "var(--accent-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: "0 0 12px var(--accent-primary-glow)",
            }}
          >
            <Zap size={17} color="#080b10" strokeWidth={2.5} />
          </div>
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "13px",
                fontWeight: 700,
                color: "var(--text-primary)",
                letterSpacing: "0.02em",
                lineHeight: 1.2,
              }}
            >
              PULSE
            </p>
            <p
              style={{
                fontSize: "10px",
                color: "var(--text-muted)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              Content Studio
            </p>
          </div>
        </div>
      </div>

      {/* Workspace indicator */}
      <div
        style={{
          padding: "12px 16px",
          margin: "12px",
          background: "var(--bg-elevated)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--border-default)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "border-color 0.15s ease",
        }}
        className="group hover:border-[var(--border-strong)]"
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: "var(--radius-sm)",
              background: "linear-gradient(135deg, #00d4aa 0%, #3d9ef5 100%)",
              flexShrink: 0,
            }}
          />
          <div>
            <p style={{ fontSize: "12px", fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.2 }}>
              Acme Corp
            </p>
            <p style={{ fontSize: "10px", color: "var(--text-muted)" }}>Free Plan</p>
          </div>
        </div>
        <ChevronRight size={14} color="var(--text-muted)" />
      </div>

      {/* Section label */}
      <div style={{ padding: "4px 20px 8px" }}>
        <p
          style={{
            fontSize: "10px",
            fontWeight: 600,
            color: "var(--text-disabled)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Modules
        </p>
      </div>

      {/* Nav items */}
      <nav style={{ flex: 1, padding: "0 8px", overflowY: "auto" }}>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1px" }}>
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "8px 12px",
                    borderRadius: "var(--radius-md)",
                    textDecoration: "none",
                    transition: "all 0.15s ease",
                    position: "relative",
                    background: isActive ? "var(--accent-primary-dim)" : "transparent",
                    border: isActive ? `1px solid var(--accent-primary-glow)` : "1px solid transparent",
                  }}
                  className={cn(
                    "group",
                    !isActive && "hover:bg-[var(--bg-elevated)] hover:border-[var(--border-subtle)]"
                  )}
                >
                  {/* Active indicator line */}
                  {isActive && (
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: 3,
                        height: 16,
                        background: "var(--accent-primary)",
                        borderRadius: "0 2px 2px 0",
                        boxShadow: "0 0 8px var(--accent-primary-glow)",
                      }}
                    />
                  )}

                  <Icon
                    size={16}
                    style={{
                      color: isActive ? item.color : "var(--text-muted)",
                      transition: "color 0.15s ease",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: isActive ? 500 : 400,
                      color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                      flex: 1,
                      transition: "color 0.15s ease",
                    }}
                  >
                    {item.label}
                  </span>
                  {item.badge && (
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "#fff",
                        background: item.color,
                        borderRadius: "99px",
                        padding: "1px 6px",
                        lineHeight: 1.6,
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom items */}
      <div
        style={{
          padding: "8px",
          borderTop: "1px solid var(--border-subtle)",
        }}
      >
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1px" }}>
          {bottomItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "8px 12px",
                    borderRadius: "var(--radius-md)",
                    textDecoration: "none",
                    background: isActive ? "var(--accent-primary-dim)" : "transparent",
                  }}
                  className="hover:bg-[var(--bg-elevated)] transition-colors duration-150"
                >
                  <Icon size={16} style={{ color: "var(--text-muted)" }} />
                  <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* User avatar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 12px",
            marginTop: "4px",
            borderRadius: "var(--radius-md)",
            cursor: "pointer",
          }}
          className="hover:bg-[var(--bg-elevated)] transition-colors duration-150"
        >
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #00d4aa, #3d9ef5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "11px",
              fontWeight: 700,
              color: "#080b10",
              fontFamily: "var(--font-display)",
              flexShrink: 0,
            }}
          >
            AC
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontSize: "12px", fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.2 }}>
              Admin
            </p>
            <p
              style={{
                fontSize: "11px",
                color: "var(--text-muted)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              admin@acme.com
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
