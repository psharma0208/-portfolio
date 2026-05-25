"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Tab = "console" | "endpoints" | "schema";

const MOCK_CONSOLE_LOGS = [
  "  .   ____          _            __ _ _",
  " /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\",
  "( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\",
  " \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )",
  "  '  |____| .__|_| |_|_|_| \\__, | / / / /",
  " =========|_|==============|___/=/_/_/_/",
  " :: Spring Boot ::                (v3.2.5)",
  "",
  "INFO 67637 --- [main] c.e.erp.ErpApplication : Starting ErpApplication on Port 8080...",
  "INFO 67637 --- [main] c.e.erp.ErpApplication : No active profile set, falling back to default...",
  "INFO 67637 --- [main] o.s.b.w.e.t.TomcatWebServer : Tomcat initialized with port(s): 8080 (http)",
  "INFO 67637 --- [main] o.h.e.t.j.p.i.HikariDataSource : HikariPool-1 - Starting...",
  "INFO 67637 --- [main] o.h.e.t.j.p.i.HikariDataSource : HikariPool-1 - Start completed.",
  "INFO 67637 --- [main] o.h.jpa.internal.util.LogHelper : HHH000204: Processing Persistence Unit [default]",
  "INFO 67637 --- [main] o.h.e.t.j.p.i.SpringSecurity : Configure Spring Security Filter Chain...",
  "INFO 67637 --- [main] o.h.e.t.j.p.i.JWTProvider : JWT Token provider initialized successfully.",
  "INFO 67637 --- [main] o.s.b.w.e.t.TomcatWebServer : Tomcat started on port(s): 8080 (http) with context path ''",
  "INFO 67637 --- [main] c.e.erp.ErpApplication : Started ErpApplication in 2.84 seconds (JVM running for 3.42)",
  "INFO 67637 --- [nio-8080-exec-1] o.a.c.c.C.[Tomcat].[localhost].[/] : Initializing Spring FrameworkServlet 'dispatcherServlet'",
  "INFO 67637 --- [nio-8080-exec-1] o.s.web.servlet.DispatcherServlet : Completed initialization in 12ms",
  "INFO 67637 --- [nio-8080-exec-2] c.e.erp.security.JWTFilter : Authenticating request for path: /api/v1/auth/login",
  "INFO 67637 --- [nio-8080-exec-2] c.e.erp.service.AuthService : JWT Token successfully issued for user: admin_principal",
  "INFO 67637 --- [nio-8080-exec-3] c.e.erp.security.JWTFilter : Token verified. Authorities: [ROLE_ADMIN]",
  "INFO 67637 --- [nio-8080-exec-3] c.e.erp.controller.StudentController : Fetching students data. Cache hit: false. DB latency: 34ms",
  "INFO 67637 --- [nio-8080-exec-4] c.e.erp.controller.StudentController : Fetching students data. Cache hit: true. Redis latency: 1ms",
];

const MOCK_ENDPOINTS = [
  { method: "POST", path: "/api/v1/auth/login", status: 200, time: "28ms", desc: "User Authentication & JWT Issuance" },
  { method: "GET", path: "/api/v1/students/records", status: 200, time: "12ms", desc: "Paginated Student Details (Cached in Redis)" },
  { method: "POST", path: "/api/v1/payments/checkout", status: 201, time: "184ms", desc: "Stripe Integration & ERP Ledger Update" },
  { method: "PUT", path: "/api/v1/admin/roles/grant", status: 200, time: "42ms", desc: "RBAC Authority Updates (Spring Security)" },
  { method: "GET", path: "/api/v1/analytics/daily-report", status: 500, time: "340ms", desc: "Heavy aggregation fallback triggered gracefully", isError: true },
];

export function BackendDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("console");
  const [consoleLines, setConsoleLines] = useState<string[]>([]);
  const [lineIndex, setLineIndex] = useState(0);

  // Auto-scroll terminal simulation
  useEffect(() => {
    if (activeTab !== "console") return;
    if (lineIndex >= MOCK_CONSOLE_LOGS.length) {
      // Loop logs or stop
      const timer = setTimeout(() => {
        setConsoleLines([]);
        setLineIndex(0);
      }, 5000);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(
      () => {
        setConsoleLines((prev) => [...prev, MOCK_CONSOLE_LOGS[lineIndex] ?? ""]);
        setLineIndex((prev) => prev + 1);
      },
      lineIndex < 8 ? 80 : 350,
    );
    return () => clearTimeout(timer);
  }, [lineIndex, activeTab]);

  return (
    <aside className="glass glow-card relative flex flex-col rounded-3xl border border-white/5 bg-[#090a0f]/80 p-5 min-h-[380px] shadow-2xl overflow-hidden w-full max-w-full">
      {/* Header controls bar */}
      <div className="flex items-center justify-between border-b border-white/5 pb-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-rose-500/80" />
          <span className="h-3 w-3 rounded-full bg-amber-500/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
            Prashant-Spring-Server
          </span>
        </div>
        <div className="flex gap-1 bg-white/[0.03] p-1 rounded-xl border border-white/5">
          {(["console", "endpoints", "schema"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium font-display transition-all capitalize ${
                activeTab === tab
                  ? "bg-violet-600/20 text-violet-400 border border-violet-500/30"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Body */}
      <div className="flex-1 mt-4 overflow-y-auto font-mono text-xs leading-relaxed select-text max-h-[300px]">
        <AnimatePresence mode="wait">
          {activeTab === "console" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-zinc-300 space-y-1 h-full pr-1 overflow-x-auto whitespace-pre"
            >
              {consoleLines.map((line, idx) => {
                let colorClass = "text-zinc-400";
                if (line.includes("INFO")) colorClass = "text-emerald-400/90";
                if (line.includes("WARN")) colorClass = "text-amber-400/90";
                if (line.includes("ERROR")) colorClass = "text-rose-400/90";
                if (line.includes(":: Spring Boot ::")) colorClass = "text-violet-400 font-bold";

                return (
                  <div key={idx} className={`${colorClass} whitespace-pre-wrap font-mono text-[11px]`}>
                    {line}
                  </div>
                );
              })}
              {lineIndex < MOCK_CONSOLE_LOGS.length && (
                <div className="inline-block h-4 w-1.5 bg-violet-400 animate-pulse translate-y-0.5 ml-1" />
              )}
            </motion.div>
          )}

          {activeTab === "endpoints" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-3"
            >
              {MOCK_ENDPOINTS.map((ep, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-all gap-2"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        ep.method === "GET"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : ep.method === "POST"
                          ? "bg-violet-500/10 text-violet-400 border border-violet-500/20"
                          : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                      }`}
                    >
                      {ep.method}
                    </span>
                    <span className="font-mono text-zinc-200 text-xs font-semibold">{ep.path}</span>
                  </div>

                  <div className="flex items-center gap-3 justify-between sm:justify-end">
                    <span className="text-[11px] text-zinc-500">{ep.desc}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-zinc-400">{ep.time}</span>
                      <span
                        className={`h-2 w-2 rounded-full ${
                          ep.isError ? "bg-rose-500 animate-pulse" : "bg-emerald-500"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "schema" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-4 space-y-4"
            >
              <div className="flex items-center justify-center gap-6 flex-wrap w-full">
                {/* Users Table */}
                <div className="p-3 rounded-xl border border-white/10 bg-white/[0.02] w-40 text-[11px] space-y-1">
                  <div className="font-bold text-violet-400 border-b border-white/5 pb-1 font-display">users</div>
                  <div className="text-zinc-300">🔑 id <span className="text-zinc-500">(BIGINT)</span></div>
                  <div className="text-zinc-400">email <span className="text-zinc-500">(VARCHAR)</span></div>
                  <div className="text-zinc-400">password <span className="text-zinc-500">(HASH)</span></div>
                </div>

                <div className="h-0.5 w-8 bg-gradient-to-r from-violet-500 to-rose-500 hidden sm:block relative">
                  <span className="absolute inset-0 bg-violet-400 animate-ping opacity-30 rounded" />
                </div>

                {/* Roles Table */}
                <div className="p-3 rounded-xl border border-white/10 bg-white/[0.02] w-40 text-[11px] space-y-1">
                  <div className="font-bold text-rose-400 border-b border-white/5 pb-1 font-display">roles</div>
                  <div className="text-zinc-300">🔑 id <span className="text-zinc-500">(INT)</span></div>
                  <div className="text-zinc-400">name <span className="text-zinc-500">(VARCHAR)</span></div>
                  <div className="text-zinc-400">auths <span className="text-zinc-500">(LIST)</span></div>
                </div>
              </div>

              <div className="h-8 w-0.5 bg-gradient-to-b from-rose-500 to-teal-500 hidden sm:block relative">
                <span className="absolute inset-0 bg-rose-400 animate-ping opacity-30 rounded" />
              </div>

              {/* Payments Table */}
              <div className="p-3 rounded-xl border border-white/10 bg-white/[0.02] w-48 text-[11px] space-y-1">
                <div className="font-bold text-teal-400 border-b border-white/5 pb-1 font-display">payments</div>
                <div className="text-zinc-300">🔑 id <span className="text-zinc-500">(UUID)</span></div>
                <div className="text-zinc-400">user_id <span className="text-violet-400">FK ➔ users</span></div>
                <div className="text-zinc-400">amount <span className="text-zinc-500">(DECIMAL)</span></div>
                <div className="text-zinc-400">status <span className="text-zinc-500">(ENUM)</span></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </aside>
  );
}
