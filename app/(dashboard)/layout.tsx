import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "var(--bg-base)",
      }}
    >
      <Sidebar />
      <main
        style={{
          marginLeft: "var(--sidebar-width)",
          flex: 1,
          minHeight: "100vh",
          padding: "32px 40px",
          maxWidth: "calc(100vw - var(--sidebar-width))",
          overflowX: "hidden",
        }}
      >
        {children}
      </main>
    </div>
  );
}
