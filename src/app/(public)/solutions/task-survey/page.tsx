import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Container from "@/components/layout/container";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/sections/cta-section";
import {
  ClipboardCheck, BarChart3, Target, Users, Activity, Layers, AlertCircle, FileText, Camera,
  CheckSquare, ShieldCheck, Clock, Check, ListChecks, Search
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Task & Survey Management Software | RepProX",
  description: "Control every task, audit, survey, and field activity with RepProX. Ensure execution consistency and field accountability.",
  path: "/solutions/task-survey",
});

export default function TaskSurveyPage() {
  return (
    <>
      {/* HERO SECTION - LIGHT BLUE THEME */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFF] via-[#EEF5FF] to-white py-24 lg:h-svh lg:flex lg:items-center">

        {/* Grid pattern background */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04] pointer-events-none"></div>

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Left Column: Text Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left pt-10 lg:pt-0">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-white/60 backdrop-blur-md mb-8 shadow-sm">
                  <ClipboardCheck className="size-4 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-700 tracking-wide uppercase">Task & Survey Management</span>
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 text-balance">
                  Turn Activities Into Results
                </h1>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-10 text-balance font-light">
                  RepProX enables organizations to execute operational activities, customer audits, compliance checks, field inspections, surveys, and merchandising programs with complete visibility and accountability.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="/contact" className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 font-semibold text-white transition-all hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                    Request Demo
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Hero Data Visuals */}
            <Reveal delay={0.2}>
              <div className="relative w-full max-w-2xl mx-auto h-[400px] md:h-[550px]">
                {/* Main Center Radar/Dashboard Element */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-full border border-blue-200/50 bg-gradient-to-b from-white/40 to-transparent flex items-center justify-center">
                  <div className="absolute inset-4 md:inset-6 rounded-full border border-blue-400/30 border-dashed animate-[spin_60s_linear_infinite]"></div>
                  <div className="absolute inset-10 md:inset-16 rounded-full border border-sky-400/30 animate-[spin_40s_linear_infinite_reverse]"></div>

                  <div className="relative z-10 w-40 h-40 md:w-56 md:h-56 bg-white/90 backdrop-blur-xl border border-slate-200 rounded-full shadow-2xl flex flex-col items-center justify-center">
                    <Activity className="size-8 md:size-12 text-blue-500 mb-2" />
                    <span className="text-2xl md:text-4xl font-bold text-slate-900">98%</span>
                    <span className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest mt-1">Completion</span>
                  </div>
                </div>

                {/* Floating Stat Cards - Re-positioned for the right column */}
                <div className="hidden md:block absolute top-[10%] left-[-5%] w-48 bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-4 shadow-xl animate-[bounce_5s_infinite]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600"><CheckSquare size={16} /></div>
                    <span className="text-xs font-medium text-slate-600">Active Tasks</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">1,248</div>
                </div>

                <div className="hidden md:block absolute bottom-[15%] right-[-10%] w-56 bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-4 shadow-xl animate-[bounce_6s_infinite_1s]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-amber-100 text-amber-600"><AlertCircle size={16} /></div>
                    <span className="text-xs font-medium text-slate-600">Compliance Score</span>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-bold text-slate-900">94.5%</span>
                    <span className="text-xs text-emerald-600 mb-1">+2.1%</span>
                  </div>
                </div>

                <div className="hidden md:block absolute top-[25%] right-[0%] w-40 bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-4 shadow-xl animate-[bounce_7s_infinite_0.5s]">
                  <div className="flex items-center gap-2 mb-2">
                    <Target size={14} className="text-purple-500" />
                    <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">Audits</span>
                  </div>
                  <div className="text-xl font-bold text-slate-900">342</div>
                  <div className="text-xs text-purple-600 mt-1">This Week</div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* THE EXECUTION GAP - Clean Light Section */}
      <section id="execution-gap" className="py-24 bg-white border-b border-slate-100">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <h2 className="font-display text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Activities Are Planned. <br />
                <span className="text-red-500">Execution Is Often Invisible.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Most organizations struggle because field activities happen outside the office. Tasks assigned through calls and messages result in missed opportunities, poor execution quality, compliance risks, and reduced operational performance.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <AlertCircle className="size-5 text-amber-500" /> Common Challenges
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    "No visibility into activity completion",
                    "Delayed issue reporting",
                    "Inconsistent customer audits",
                    "Missing field evidence",
                    "Lack of operational accountability",
                    "Poor compliance tracking",
                    "Manual survey collection",
                    "No centralized reporting"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <div className="mt-1 size-1.5 rounded-full bg-red-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-slate-50 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white border border-slate-200 shadow-xl rounded-3xl p-8">
                  <h3 className="font-bold text-slate-900 text-xl mb-6">The Cost of Invisibility</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium text-slate-700">Planned Activities</span>
                        <span className="text-slate-500">100%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium text-slate-700">Actual Execution</span>
                        <span className="text-red-500 font-bold">62%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 w-[62%]"></div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-slate-100">
                      <p className="text-sm text-slate-500 italic">&quot;Without proper tracking, up to 38% of field activities are either skipped, poorly executed, or completely unverifiable.&quot;</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* EXECUTION COMMAND CENTER - Wide Dashboard Showcase */}
      <section className="py-24 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 bg-indigo-50 mb-6">
              <Activity className="size-4 text-indigo-600" />
              <span className="text-xs font-bold text-indigo-700 tracking-wide uppercase">Execution Command Center</span>
            </div>
            <h2 className="font-display text-4xl font-bold text-slate-900 mb-6">
              Your Real-Time Field Activity Control Tower
            </h2>
            <p className="text-lg text-slate-600">
              Monitor every field activity from one dashboard. Managers gain complete visibility into what is happening in the field at any moment.
            </p>
          </div>

          <Reveal>
            <div className="bg-white rounded-[2rem] border border-slate-200 shadow-2xl p-2 max-w-6xl mx-auto relative">
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-indigo-500/20 blur-3xl rounded-full"></div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-500/20 blur-3xl rounded-full"></div>

              <div className="relative bg-slate-50 rounded-[1.5rem] border border-slate-100 p-6 md:p-10 flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-1/3 space-y-6">
                  <h3 className="font-bold text-slate-900 text-xl">Track Everything</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: CheckSquare, label: "Assigned Tasks" },
                      { icon: Activity, label: "Active Tasks" },
                      { icon: Clock, label: "Overdue Activities" },
                      { icon: FileText, label: "Survey Completion" },
                      { icon: AlertCircle, label: "Incident Reports" },
                      { icon: Target, label: "Customer Audits" },
                      { icon: Users, label: "Team Productivity" },
                      { icon: ShieldCheck, label: "Compliance Scores" }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white border border-slate-200 rounded-xl p-3 flex flex-col items-center justify-center text-center gap-2 hover:border-indigo-300 transition-colors cursor-default">
                        <item.icon className="size-5 text-indigo-500" />
                        <span className="text-[11px] font-semibold text-slate-600 leading-tight">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full md:w-2/3 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-blue-500"></div>
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="font-bold text-slate-800">Live Territory Performance</h4>
                    <span className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      Live Updates
                    </span>
                  </div>

                  <div className="space-y-4">
                    {[
                      { region: "North District", progress: 85, active: 42, pending: 8 },
                      { region: "South District", progress: 62, active: 28, pending: 15 },
                      { region: "East District", progress: 94, active: 56, pending: 3 }
                    ].map((row, idx) => (
                      <div key={idx} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                        <div className="flex justify-between items-end mb-2">
                          <div>
                            <span className="font-semibold text-sm text-slate-800">{row.region}</span>
                            <div className="text-xs text-slate-500 mt-0.5">{row.active} Active / {row.pending} Pending Tasks</div>
                          </div>
                          <span className="font-bold text-indigo-600">{row.progress}%</span>
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${row.progress}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* CORE MODULES - Sticky Scroll or Large Grid Layout */}
      <section className="py-24 bg-blue-50/50 relative overflow-hidden">
        {/* Decorative Background Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
          <div className="absolute -left-32 top-32 text-blue-200/50 transform -rotate-12">
            <Layers className="size-[400px]" strokeWidth={0.5} />
          </div>
          <div className="absolute -right-32 bottom-32 text-blue-200/50 transform rotate-12">
            <ClipboardCheck className="size-[400px]" strokeWidth={0.5} />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-200/30 transform rotate-45">
            <Target className="size-[600px]" strokeWidth={0.5} />
          </div>
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 mb-6">One Platform Complete Control.</h2>
            <p className="text-lg text-slate-600">Coordinate teams, collect data, and maintain compliance with powerful field management Tools.</p>
          </div>

          <div className="flex flex-col gap-8 max-w-[1200px] mx-auto">

            {/* Task Orchestration */}
            <Reveal>
              <div className="bg-white border border-slate-100 rounded-[2rem] p-8 md:p-12 shadow-[0_4px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_-10px_rgba(0,0,0,0.08)] transition-all flex flex-col md:flex-row gap-10 items-center overflow-hidden relative group">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-30 [mask-image:linear-gradient(to_right,white,transparent_40%)] pointer-events-none"></div>

                {/* Left Column - Icon & Title */}
                <div className="w-full md:w-[28%] flex flex-col items-start relative z-10">
                  <div className="relative size-16 mb-6">
                    <div className="absolute inset-0 bg-blue-200 rounded-2xl animate-ping opacity-20"></div>
                    <div className="relative size-full rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                      <Layers className="size-8 text-blue-600 transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-4">Task Orchestration<br className="hidden lg:block" /> Engine</h3>
                  <div className="w-16 h-1 rounded-full bg-blue-100 overflow-hidden relative">
                    <div className="absolute top-0 left-0 h-full bg-blue-500 w-1/3 transition-all duration-700 ease-out group-hover:w-full"></div>
                  </div>
                </div>

                {/* Middle Column - Description & Features */}
                <div className="w-full md:w-[42%] relative z-10">
                  <p className="text-slate-600 text-[15px] leading-relaxed mb-8">
                    RepProX transforms task management into a structured execution workflow. Assign, prioritize & execute work efficiently across all your field teams.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                    {["Multi-Level Allocation", "Priority Management", "Escalation Rules", "Recurring Tasks"].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="size-[18px] rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-blue-200">
                          <Check className="size-3" strokeWidth={3} />
                        </div>
                        <span className="text-sm font-semibold text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Illustration */}
                <div className="w-full md:w-[30%] flex justify-center md:justify-end relative z-0 mt-8 md:mt-0">
                  <div className="relative w-64 h-48 flex items-center justify-center">
                    {/* Back card */}
                    <div className="absolute right-4 top-4 w-40 h-48 bg-gradient-to-br from-blue-200 to-blue-400 rounded-2xl opacity-40 rotate-6 transform transition-transform duration-700 group-hover:rotate-12 group-hover:translate-x-2 shadow-lg"></div>
                    {/* Middle card */}
                    <div className="absolute right-8 top-2 w-40 h-48 bg-gradient-to-br from-blue-300 to-blue-500 rounded-2xl opacity-60 rotate-3 transform transition-transform duration-700 group-hover:rotate-6 group-hover:translate-x-1 shadow-xl"></div>
                    {/* Front card */}
                    <div className="absolute right-12 top-0 w-40 h-48 bg-white/90 backdrop-blur-sm border border-blue-50 rounded-2xl shadow-2xl p-4 flex flex-col gap-3 transform transition-transform duration-700 group-hover:-translate-y-2">
                      <div className="flex items-center gap-2 border-b border-slate-50 pb-2"><Check className="text-blue-500 size-4" /><div className="h-2 w-16 bg-slate-100 rounded-full"></div></div>
                      <div className="flex items-center gap-2 border-b border-slate-50 pb-2"><Check className="text-blue-500 size-4" /><div className="h-2 w-12 bg-slate-100 rounded-full"></div></div>
                      <div className="flex items-center gap-2 border-b border-slate-50 pb-2"><Check className="text-blue-500 size-4" /><div className="h-2 w-20 bg-slate-100 rounded-full"></div></div>
                    </div>
                    {/* Floating icon badge */}
                    <div className="absolute left-6 bottom-4 size-12 bg-blue-500 rounded-xl shadow-xl shadow-blue-500/30 border-2 border-white flex items-center justify-center transform -rotate-12 animate-[bounce_4s_infinite]">
                      <ListChecks className="text-white size-6" />
                    </div>
                    {/* Secondary Floating Icon */}
                    <div className="absolute right-0 -top-4 size-10 bg-blue-400 rounded-full shadow-lg border-2 border-white flex items-center justify-center transform rotate-12 animate-[bounce_5s_infinite_1s]">
                      <Users className="text-white size-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Digital Survey */}
            <Reveal delay={0.1}>
              <div className="bg-white border border-slate-100 rounded-[2rem] p-8 md:p-12 shadow-[0_4px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_-10px_rgba(0,0,0,0.08)] transition-all flex flex-col md:flex-row gap-10 items-center overflow-hidden relative group">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-30 [mask-image:linear-gradient(to_right,white,transparent_40%)] pointer-events-none"></div>

                {/* Left Column - Icon & Title */}
                <div className="w-full md:w-[28%] flex flex-col items-start relative z-10">
                  <div className="relative size-16 mb-6">
                    <div className="absolute inset-0 bg-emerald-200 rounded-2xl animate-ping opacity-20" style={{ animationDelay: '0.5s' }}></div>
                    <div className="relative size-full rounded-2xl bg-emerald-50 flex items-center justify-center border border-emerald-100 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <FileText className="size-8 text-emerald-600 transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-4">Digital Survey<br className="hidden lg:block" /> Platform</h3>
                  <div className="w-16 h-1 rounded-full bg-emerald-100 overflow-hidden relative">
                    <div className="absolute top-0 left-0 h-full bg-emerald-500 w-1/3 transition-all duration-700 ease-out group-hover:w-full"></div>
                  </div>
                </div>

                {/* Middle Column - Description & Features */}
                <div className="w-full md:w-[42%] relative z-10">
                  <p className="text-slate-600 text-[15px] leading-relaxed mb-8">
                    Replace paper forms and spreadsheets with dynamic mobile surveys. Capture accurate field intelligence in real-time.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                    {["Dynamic Forms", "Conditional Logic", "Market Research", "Survey Scoring"].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="size-[18px] rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-emerald-200">
                          <Check className="size-3" strokeWidth={3} />
                        </div>
                        <span className="text-sm font-semibold text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Illustration */}
                <div className="w-full md:w-[30%] flex justify-center md:justify-end relative z-0 mt-8 md:mt-0">
                  <div className="relative w-64 h-48 flex items-center justify-center">
                    <div className="absolute right-10 top-0 w-32 h-56 bg-gradient-to-b from-emerald-50 to-emerald-100 border-4 border-white rounded-3xl shadow-2xl overflow-hidden flex flex-col p-3 transform transition-transform duration-700 group-hover:-translate-y-2">
                      {/* Phone top notch */}
                      <div className="w-12 h-1 bg-emerald-200 rounded-full mx-auto mb-4"></div>
                      {/* Survey items */}
                      <div className="flex items-center gap-2 mb-3 bg-white/80 p-2 rounded-lg shadow-sm"><div className="size-4 rounded-full bg-emerald-500 flex items-center justify-center"><Check className="size-2 text-white" /></div><div className="h-1.5 w-12 bg-slate-100 rounded-full"></div></div>
                      <div className="flex items-center gap-2 mb-3 bg-white/80 p-2 rounded-lg shadow-sm"><div className="size-4 rounded-full bg-emerald-500 flex items-center justify-center"><Check className="size-2 text-white" /></div><div className="h-1.5 w-16 bg-slate-100 rounded-full"></div></div>
                      <div className="flex items-center gap-2 bg-white/80 p-2 rounded-lg shadow-sm"><div className="size-4 rounded-full bg-emerald-200"></div><div className="h-1.5 w-10 bg-slate-100 rounded-full"></div></div>
                    </div>
                    {/* Floating 3D Cubes */}
                    <div className="absolute right-4 top-12 size-6 bg-emerald-200 rounded opacity-60 transform rotate-12 animate-[bounce_4s_infinite_1s]"></div>
                    <div className="absolute right-2 bottom-6 size-8 bg-emerald-300 rounded opacity-50 transform -rotate-12 animate-[bounce_5s_infinite_0.5s]"></div>

                    <div className="absolute left-8 bottom-10 size-12 bg-emerald-500 rounded-full shadow-xl shadow-emerald-500/30 border-2 border-white flex items-center justify-center animate-[bounce_5s_infinite]">
                      <BarChart3 className="text-white size-6" />
                    </div>
                    {/* Secondary Floating Icon */}
                    <div className="absolute right-8 top-6 size-10 bg-emerald-400 rounded-xl shadow-lg border-2 border-white flex items-center justify-center transform rotate-6 animate-[bounce_4s_infinite_0.5s]">
                      <CheckSquare className="text-white size-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Audit Management */}
            <Reveal delay={0.2}>
              <div className="bg-white border border-slate-100 rounded-[2rem] p-8 md:p-12 shadow-[0_4px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_-10px_rgba(0,0,0,0.08)] transition-all flex flex-col md:flex-row gap-10 items-center overflow-hidden relative group">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-30 [mask-image:linear-gradient(to_right,white,transparent_40%)] pointer-events-none"></div>

                {/* Left Column - Icon & Title */}
                <div className="w-full md:w-[28%] flex flex-col items-start relative z-10">
                  <div className="relative size-16 mb-6">
                    <div className="absolute inset-0 bg-purple-200 rounded-2xl animate-ping opacity-20" style={{ animationDelay: '1s' }}></div>
                    <div className="relative size-full rounded-2xl bg-purple-50 flex items-center justify-center border border-purple-100 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                      <ShieldCheck className="size-8 text-purple-600 transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-4">Customer Audit<br className="hidden lg:block" /> Management</h3>
                  <div className="w-16 h-1 rounded-full bg-purple-100 overflow-hidden relative">
                    <div className="absolute top-0 left-0 h-full bg-purple-500 w-1/3 transition-all duration-700 ease-out group-hover:w-full"></div>
                  </div>
                </div>

                {/* Middle Column - Description & Features */}
                <div className="w-full md:w-[42%] relative z-10">
                  <p className="text-slate-600 text-[15px] leading-relaxed mb-8">
                    Standardize every audit process. Ensure audits are completed consistently across all locations and territories.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                    {["Retail Audits", "Merchandising", "Safety Inspections", "Brand Visibility"].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="size-[18px] rounded-full bg-purple-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-purple-200">
                          <Check className="size-3" strokeWidth={3} />
                        </div>
                        <span className="text-sm font-semibold text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Illustration */}
                <div className="w-full md:w-[30%] flex justify-center md:justify-end relative z-0 mt-8 md:mt-0">
                  <div className="relative w-64 h-48 flex items-center justify-center">
                    {/* Clipboard */}
                    <div className="absolute right-16 top-2 w-32 h-44 bg-purple-50 rounded-xl shadow-2xl border border-white p-4 pt-8 transform transition-transform duration-700 group-hover:-rotate-3 group-hover:-translate-y-2">
                      {/* Clip */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-slate-100 rounded-md border-b-2 border-slate-200 shadow-sm"></div>
                      <div className="flex items-center gap-2 mb-3"><Check className="text-purple-500 size-4" /><div className="h-2 w-16 bg-slate-200 rounded-full"></div></div>
                      <div className="flex items-center gap-2 mb-3"><Check className="text-purple-500 size-4" /><div className="h-2 w-12 bg-slate-200 rounded-full"></div></div>
                      <div className="flex items-center gap-2 mb-3"><Check className="text-purple-500 size-4" /><div className="h-2 w-14 bg-slate-200 rounded-full"></div></div>
                      <div className="flex items-center gap-2"><Check className="text-purple-500 size-4" /><div className="h-2 w-10 bg-slate-200 rounded-full"></div></div>
                    </div>
                    {/* Floating chart */}
                    <div className="absolute right-4 bottom-2 flex items-end gap-1.5 opacity-90 transform transition-transform duration-700 group-hover:scale-105">
                      <div className="w-4 h-8 bg-purple-300 rounded-t shadow-lg"></div>
                      <div className="w-4 h-12 bg-purple-400 rounded-t shadow-lg"></div>
                      <div className="w-4 h-20 bg-purple-500 rounded-t shadow-lg"></div>
                    </div>
                    {/* Floating shield */}
                    <div className="absolute left-6 bottom-6 size-12 bg-purple-500 rounded-xl shadow-xl shadow-purple-500/30 border-2 border-white flex items-center justify-center transform rotate-6 animate-[bounce_4.5s_infinite]">
                      <ShieldCheck className="text-white size-6" />
                    </div>
                    {/* Secondary Floating Icon */}
                    <div className="absolute right-6 -top-2 size-10 bg-purple-400 rounded-full shadow-lg border-2 border-white flex items-center justify-center transform -rotate-12 animate-[bounce_5s_infinite_1.5s]">
                      <Target className="text-white size-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Issue Management */}
            <Reveal delay={0.3}>
              <div className="bg-white border border-slate-100 rounded-[2rem] p-8 md:p-12 shadow-[0_4px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_-10px_rgba(0,0,0,0.08)] transition-all flex flex-col md:flex-row gap-10 items-center overflow-hidden relative group">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-30 [mask-image:linear-gradient(to_right,white,transparent_40%)] pointer-events-none"></div>

                {/* Left Column - Icon & Title */}
                <div className="w-full md:w-[28%] flex flex-col items-start relative z-10">
                  <div className="relative size-16 mb-6">
                    <div className="absolute inset-0 bg-amber-200 rounded-2xl animate-ping opacity-20" style={{ animationDelay: '0.2s' }}></div>
                    <div className="relative size-full rounded-2xl bg-amber-50 flex items-center justify-center border border-amber-100 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <AlertCircle className="size-8 text-amber-600 transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-4">Incident & Issue<br className="hidden lg:block" /> Management</h3>
                  <div className="w-16 h-1 rounded-full bg-amber-100 overflow-hidden relative">
                    <div className="absolute top-0 left-0 h-full bg-amber-500 w-1/3 transition-all duration-700 ease-out group-hover:w-full"></div>
                  </div>
                </div>

                {/* Middle Column - Description & Features */}
                <div className="w-full md:w-[42%] relative z-10">
                  <p className="text-slate-600 text-[15px] leading-relaxed mb-8">
                    Detect problems before they become business risks. Allow field teams to instantly report issues from any location.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                    {["Issue Categorization", "Escalation Workflows", "Resolution Tracking", "Root Cause Docs"].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="size-[18px] rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-amber-200">
                          <Check className="size-3" strokeWidth={3} />
                        </div>
                        <span className="text-sm font-semibold text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Illustration */}
                <div className="w-full md:w-[30%] flex justify-center md:justify-end relative z-0 mt-8 md:mt-0">
                  <div className="relative w-64 h-48 flex items-center justify-center">
                    <div className="absolute right-10 top-4 w-40 h-32 bg-white rounded-xl shadow-2xl border border-amber-50 p-4 transform transition-transform duration-700 group-hover:-translate-y-2">
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-16 h-3 bg-slate-100 rounded-full"></div>
                        <div className="size-6 bg-red-50 rounded-full flex items-center justify-center"><AlertCircle className="size-3 text-red-500" /></div>
                      </div>
                      <div className="w-full h-2 bg-slate-50 rounded-full mb-2"></div>
                      <div className="w-3/4 h-2 bg-slate-50 rounded-full mb-4"></div>
                      <div className="w-full h-8 bg-amber-50 rounded-lg border border-amber-100/50 flex items-center px-2">
                        <div className="size-2 rounded-full bg-amber-500 mr-2"></div>
                        <div className="w-12 h-1.5 bg-amber-200 rounded-full"></div>
                      </div>
                    </div>
                    <div className="absolute left-6 top-10 size-12 bg-amber-500 rounded-xl shadow-xl shadow-amber-500/30 border-2 border-white flex items-center justify-center transform -rotate-12 animate-[bounce_6s_infinite]">
                      <AlertCircle className="text-white size-6" />
                    </div>
                    {/* Secondary Floating Icon */}
                    <div className="absolute right-2 bottom-6 size-10 bg-amber-400 rounded-full shadow-lg border-2 border-white flex items-center justify-center transform rotate-12 animate-[bounce_4.5s_infinite_0.5s]">
                      <ClipboardCheck className="text-white size-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </Container>
      </section>



      {/* CTA SECTION */}
      <CtaSection
        title="Turn Field Activities Into Measurable Business Outcomes"
        description="Gain complete visibility into every task, audit, survey, inspection, and field operation while ensuring teams execute consistently across every territory."
        primary={{ label: "Request Demo", href: "/contact" }}
      />
    </>
  );
}