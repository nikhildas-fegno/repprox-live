"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Briefcase,
  LayoutDashboard,
  Map,
  Database,
  ArrowRightLeft,
  Settings,
  Plug,
  Menu,
  ChevronDown,
  Bell,
  User,
  TrendingUp,
  LineChart,
  Wallet,
  BarChart3,
  CircleDollarSign,
  ShoppingBag,
  Users,
  FileText,
  Percent,
  LayoutGrid,
  Upload,
  Package,
  Edit2,
  Trash2,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Calendar,
  MousePointer2,
} from "lucide-react";

import avatar from "@/public/home/avatar.png";
import logo from "@/../public/logo.png";
import trackingMap from "@/public/home/tracking.png";

const SALES_REPORTS = [
  { title: "SALES CONSOLIDATE", desc: "Summarizes sales data from various sources." },
  { title: "ROUTES BY REP", desc: "Routes assigned to each sales rep for efficient territory management." },
  { title: "STOP & MISSING CUSTOMERS", desc: "Identifies customers who have stopped purchasing or are no longer active." },
  { title: "ESTIMATE", desc: "Provides projected costs and resources required for a project or task." },
  { title: "ORDER", desc: "Summarizes sales orders placed by customers." },
  { title: "INVOICE", desc: "Overview of generated invoices for sales transactions." },
  { title: "PAYMENT", desc: "Summarizes the payments received from customers." },
  { title: "RETURN", desc: "Summarizes sales returns placed by customers." },
  { title: "DAYS OF STOCK", desc: "Analyzes how quickly inventory is being sold and replenished." },
  { title: "CONSOLIDATE ACTIVITY", desc: "Provides a summarized overview of various activities within a specific period." },
  { title: "SALES COMMISSION", desc: "Summarizes the commissions earned by sales representatives." },
  { title: "SALES CONSOLIDATE BY REP", desc: "Concise summary of sales performance by individual sales representatives." },
];

const CHART_DATA = [
  { month: "Jan", sales: 800, cash: 1650 },
  { month: "Feb", sales: 1120, cash: 1980 },
  { month: "Mar", sales: 1350, cash: 2420 },
  { month: "Apr", sales: 1980, cash: 3450 },
  { month: "May", sales: 1760, cash: 2980 },
  { month: "Jun", sales: 2250, cash: 3660 },
  { month: "Jul", sales: 2680, cash: 4120 },
  { month: "Aug", sales: 2420, cash: 3750 },
  { month: "Sep", sales: 2950, cash: 4680 },
  { month: "Oct", sales: 2750, cash: 4220 },
  { month: "Nov", sales: 3250, cash: 5120 },
  { month: "Dec", sales: 3650, cash: 5890 },
  { month: "Jan", sales: 800, cash: 1650 },
];

export function HeroDashboard() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "sales" | "routes" | "tracking">("dashboard");
  const [isMainExpanded, setIsMainExpanded] = useState(false);
  const [isRoutesExpanded, setIsRoutesExpanded] = useState(false);
  const [mainHinted, setMainHinted] = useState(true);
  const [subsRevealed, setSubsRevealed] = useState(false);
  const [subHinted, setSubHinted] = useState({ dashboard: false, sales: false });
  const [routesHinted, setRoutesHinted] = useState(true);
  const [routesRevealed, setRoutesRevealed] = useState(false);
  const [routeHinted, setRouteHinted] = useState({ routes: false, tracking: false });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="relative mt-16 4xl:mt-40 w-full rounded-2xl border border-ink/10 shadow-2xl shadow-ink/35 overflow-hidden h-[470px] md:h-[510px] lg:h-[546px] xl:h-[623px] 2xl:h-[690px]"
    >
      {/* Scale wrapper: inner content is 750px natural height, scaled down for smaller viewports */}
      <div className="absolute top-0 left-0 origin-top-left bg-[#f8fafc] flex flex-col md:flex-row text-left text-ink h-[750px] w-full md:w-[147%] lg:w-[137%] xl:w-[121%] 2xl:w-[109%] md:scale-[0.68] lg:scale-[0.728] xl:scale-[0.83] 2xl:scale-[0.92]">
        {/* ── Sidebar ─────────────────────────────────────── */}
        <div className="w-[240px] hidden md:flex flex-col bg-white border-r border-ink/10 flex-shrink-0 relative z-10">
          {/* Logo */}
          <div className="p-4 flex items-center gap-2 text-xl font-bold text-[#1D6BD9] cursor-pointer">
            <div className="rounded-full">
              <Image src={logo} alt="RepProX Logo" width={30} height={30} className="size-full object-cover" />
            </div>
            RepProX
          </div>

          {/* User profile */}
          <div className="flex flex-col items-center py-6">
            <div className="relative mb-3 size-16">
              <div className="size-16 rounded-full border-2 border-white shadow-sm overflow-hidden">
                <Image src={avatar} alt="User Avatar" width={64} height={64} className="size-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 size-4 bg-emerald-500 border-2 border-white rounded-full" />
            </div>
            <h3 className="font-semibold text-ink">Zayn</h3>
            <p className="text-xs text-ink-soft mt-0.5">Admin</p>
          </div>

          {/* Nav */}
          <div className="flex-1 py-4 flex flex-col gap-1 px-3">
            {/* Main — collapsible */}
            <button
              type="button"
              onClick={() => { setIsMainExpanded(v => !v); setMainHinted(false); if (!isMainExpanded) setSubsRevealed(true); }}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg font-medium text-sm transition-colors cursor-pointer w-full text-left ${mainHinted ? "bg-blue-50 text-[#1d4ed8]" : "bg-blue-50/30 text-[#1d4ed8]/60 hover:bg-blue-50 hover:text-[#1d4ed8]"}`}
            >
              <span className="flex items-center gap-3"><Briefcase className="size-4.5" /> Main</span>
              <span className="flex items-center gap-2">
                {mainHinted && <span className="inline-flex rounded-full bg-[#0ea5ff]/10 border border-[#0ea5ff]/20 p-1 animate-bounce"><MousePointer2 className="size-3 text-[#0ea5ff]" /></span>}
                <ChevronDown className={`size-4 transition-transform duration-300 ${isMainExpanded ? "rotate-180" : ""}`} />
              </span>
            </button>

            <div className={`grid transition-all duration-300 ease-in-out ${isMainExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden flex flex-col gap-1 pl-6 relative before:absolute before:left-[21px] before:top-2 before:bottom-2 ">
                <button
                  type="button"
                  onClick={() => { setActiveTab("dashboard"); setSubHinted(p => ({ ...p, dashboard: true })); }}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-sm transition-colors cursor-pointer relative z-10 w-full text-left ${activeTab === "dashboard" ? "bg-blue-50 text-[#1d4ed8]" : "bg-blue-50/30 text-[#1d4ed8]/60 hover:bg-blue-50 hover:text-[#1d4ed8]"}`}
                >
                  <LayoutDashboard className="size-4.5" /> Dashboard
                  {subsRevealed && !subHinted.dashboard && <span className="ml-auto inline-flex rounded-full bg-[#0ea5ff]/10 border border-[#0ea5ff]/20 p-1 animate-bounce"><MousePointer2 className="size-3 text-[#0ea5ff]" /></span>}
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveTab("sales"); setSubHinted(p => ({ ...p, sales: true })); }}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-sm transition-colors cursor-pointer relative z-10 w-full text-left ${activeTab === "sales" ? "bg-blue-50 text-[#1d4ed8]" : "bg-blue-50/30 text-[#1d4ed8]/60 hover:bg-blue-50 hover:text-[#1d4ed8]"}`}
                >
                  <BarChart3 className="size-4.5" /> Sales Data &amp; Analytics
                  {subsRevealed && !subHinted.sales && <span className="ml-auto inline-flex rounded-full bg-[#0ea5ff]/10 border border-[#0ea5ff]/20 p-1 animate-bounce"><MousePointer2 className="size-3 text-[#0ea5ff]" /></span>}
                </button>
                <div className="flex items-center gap-3 px-3 py-2.5 text-ink-soft rounded-lg font-medium text-sm relative z-10">
                  <LineChart className="size-4.5" /> Enhanced Analytics
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => { setIsRoutesExpanded(v => !v); setRoutesHinted(false); if (!isRoutesExpanded) setRoutesRevealed(true); }}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg font-medium text-sm transition-colors cursor-pointer mt-1 w-full text-left ${routesHinted ? "bg-blue-50 text-[#1d4ed8]" : "bg-blue-50/30 text-[#1d4ed8]/60 hover:bg-blue-50 hover:text-[#1d4ed8]"}`}
            >
              <span className="flex items-center gap-3"><Map className="size-4.5" /> Routes</span>
              <span className="flex items-center gap-2">
                {routesHinted && <span className="inline-flex rounded-full bg-[#0ea5ff]/10 border border-[#0ea5ff]/20 p-1 animate-bounce"><MousePointer2 className="size-3 text-[#0ea5ff]" /></span>}
                <ChevronDown className={`size-4 transition-transform duration-300 ${isRoutesExpanded ? "rotate-180" : ""}`} />
              </span>
            </button>

            <div className={`grid transition-all duration-300 ease-in-out ${isRoutesExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden flex flex-col gap-1 pl-6 relative before:absolute before:left-[21px] before:top-2 before:bottom-2 ">
                <button
                  type="button"
                  onClick={() => { setActiveTab("routes"); setRouteHinted(p => ({ ...p, routes: true })); }}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-sm transition-colors cursor-pointer relative z-10 w-full text-left ${activeTab === "routes" ? "bg-blue-50 text-[#1d4ed8]" : "bg-blue-50/30 text-[#1d4ed8]/60 hover:bg-blue-50 hover:text-[#1d4ed8]"}`}
                >
                  <Map className="size-4.5" /> Manage Routes
                  {routesRevealed && !routeHinted.routes && <span className="ml-auto inline-flex rounded-full bg-[#0ea5ff]/10 border border-[#0ea5ff]/20 p-1 animate-bounce"><MousePointer2 className="size-3 text-[#0ea5ff]" /></span>}
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveTab("tracking"); setRouteHinted(p => ({ ...p, tracking: true })); }}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-sm transition-colors cursor-pointer relative z-10 w-full text-left ${activeTab === "tracking" ? "bg-blue-50 text-[#1d4ed8]" : "bg-blue-50/30 text-[#1d4ed8]/60 hover:bg-blue-50 hover:text-[#1d4ed8]"}`}
                >
                  <Map className="size-4.5" /> Tracking
                  {routesRevealed && !routeHinted.tracking && <span className="ml-auto inline-flex rounded-full bg-[#0ea5ff]/10 border border-[#0ea5ff]/20 p-1 animate-bounce"><MousePointer2 className="size-3 text-[#0ea5ff]" /></span>}
                </button>
              </div>
            </div>
            {[
              { icon: Database, label: "Master Data" },
              { icon: ArrowRightLeft, label: "Transactions" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center justify-between px-3 py-2.5 text-ink-soft rounded-lg font-medium text-sm mt-1 w-full text-left"
              >
                <span className="flex items-center gap-3"><Icon className="size-4.5" /> {label}</span>
                <ChevronDown className="size-4" />
              </div>
            ))}

            <div className="mt-3 border-t border-ink/5 pt-3 flex flex-col gap-1">
              {[
                { icon: Settings, label: "Setup" },
                { icon: Settings, label: "Settings" },
                { icon: Plug, label: "Integration" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center justify-between px-3 py-2.5 text-ink-soft rounded-lg font-medium text-sm">
                  <span className="flex items-center gap-3"><Icon className="size-4.5" /> {label}</span>
                  <ChevronDown className="size-4" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Main content ────────────────────────────────── */}
        <div className="flex-1 flex flex-col bg-[#f8fafc] overflow-hidden relative">
          {/* Top header */}
          <header className="h-16 bg-white border-b border-ink/10 flex items-center justify-between px-4 lg:px-8 flex-shrink-0 z-10">
            <div className="flex items-center gap-4">
              <Menu className="size-5 text-ink-soft md:hidden cursor-pointer" />
              <div className="hidden md:flex items-center gap-4 text-sm font-medium text-ink-soft">
                <div className="flex items-center gap-1.5 cursor-pointer hover:text-ink transition-colors">
                  My Account : zayn.sale@cv.com <ChevronDown className="size-4" />
                </div>
                <div className="h-4 w-px bg-ink/10" />
                <div className="text-ink font-semibold">Zayn Sales Dashboard</div>
                <Settings className="size-4.5 ml-2 cursor-pointer hover:text-ink transition-colors" />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden sm:flex flex-col items-end">
                <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-500">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live Data
                </div>
                <div className="text-[10px] text-ink-soft">Last Sync: 1 min ago</div>
              </div>
              <div className="relative cursor-pointer group">
                <Bell className="size-5 text-ink-soft group-hover:text-ink transition-colors" />
                <span className="absolute -top-1.5 -right-1.5 size-4 bg-red-500 text-white text-[9px] font-bold flex items-center justify-center rounded-full border-2 border-white">3</span>
              </div>
              <div className="size-8 rounded-full bg-slate-100 border border-ink/10 flex items-center justify-center cursor-pointer hover:bg-slate-200 transition-colors">
                <User className="size-4 text-slate-400" />
              </div>
            </div>
          </header>

          {/* Scrollable body */}
          <div className="flex-1 overflow-y-auto p-4 lg:p-8">
            {/* Welcome row */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-ink">
                  {activeTab === "dashboard" ? "Hi, welcome back Zayn! 👋" : "Hi, welcome back!"}
                </h2>
                <p className="text-sm text-ink-soft mt-1">
                  {activeTab === "dashboard" ? "Here's what's happening with your sales today." : "Reports monitoring dashboard."}
                </p>
              </div>
              {activeTab === "dashboard" && (
                <div className="flex items-center gap-2 text-sm font-medium text-ink-soft bg-white px-3 py-1.5 rounded-lg border border-ink/10 cursor-pointer hover:bg-slate-50 transition-colors">
                  Currency: <span className="text-ink font-bold">IQD</span> <ChevronDown className="size-4 ml-1" />
                </div>
              )}
            </div>

            {/* ── Tracking tab ── */}
            {activeTab === "tracking" ? (
              <div className="flex gap-6 pb-6 h-[85%] items-stretch">
                {/* Left Controls Panel */}
                <div className="w-[280px] bg-white rounded-xl shadow-sm border border-ink/5 p-6 flex flex-col gap-6 flex-shrink-0">
                  {/* From Date */}
                  <div>
                    <label className="text-xs font-medium text-ink-soft mb-1.5 block">From</label>
                    <div className="flex items-center border border-ink/10 rounded-lg overflow-hidden">
                      <div className="bg-slate-100 p-2.5 border-r border-ink/10">
                        <Calendar className="size-4.5 text-ink-soft" />
                      </div>
                      <input type="text" value="06/09/2026" readOnly className="px-3 py-2.5 text-sm font-medium text-ink w-full outline-none" />
                    </div>
                  </div>

                  {/* To Date */}
                  <div>
                    <label className="text-xs font-medium text-ink-soft mb-1.5 block">To</label>
                    <div className="flex items-center border border-ink/10 rounded-lg overflow-hidden">
                      <div className="bg-slate-100 p-2.5 border-r border-ink/10">
                        <Calendar className="size-4.5 text-ink-soft" />
                      </div>
                      <input type="text" value="06/09/2026" readOnly className="px-3 py-2.5 text-sm font-medium text-ink w-full outline-none" />
                    </div>
                  </div>

                  {/* Sales Rep Dropdown */}
                  <div className="border border-ink/10 rounded-lg overflow-hidden flex items-center justify-between px-3 py-2.5 cursor-pointer">
                    <span className="text-sm font-medium text-ink">Sales Rep</span>
                    <ChevronDown className="size-4 text-ink-soft" />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <button className="bg-[#1d4ed8] text-white px-5 py-2 rounded font-medium text-sm hover:bg-blue-700 transition-colors cursor-pointer">
                      Run
                    </button>
                    <button className="bg-[#1d4ed8] text-white px-5 py-2 rounded font-medium text-sm hover:bg-blue-700 transition-colors cursor-pointer">
                      Download
                    </button>
                  </div>

                  {/* Legend */}
                  <div className="flex flex-col gap-3 mt-2">
                    <div className="flex items-center gap-3">
                      <div className="size-4 rounded-full bg-yellow-400" />
                      <span className="text-sm text-ink font-medium">Start of route</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="size-4 rounded-full bg-[#1d4ed8]" />
                      <span className="text-sm text-ink font-medium">End of route</span>
                    </div>
                  </div>
                </div>

                {/* Right Map Panel */}
                <div className="flex-1 bg-white rounded-xl shadow-sm border border-ink/5 p-2 relative overflow-hidden flex flex-col">
                  {/* Map image fill */}
                  <div className="w-full h-full relative rounded-lg overflow-hidden border border-ink/5">
                    <Image src={trackingMap} alt="Tracking Map" fill className="object-cover object-left-top" />
                  </div>
                </div>
              </div>
            ) : activeTab === "routes" ? (
              <div className="flex flex-col gap-4 pb-6">
                {/* Header */}
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-xl font-medium text-ink">Manage Routes</h2>
                  <span className="text-ink-soft text-sm">/ List View</span>
                </div>

                {/* Top Banner Card */}
                <div className="bg-white rounded-xl shadow-sm p-6 relative overflow-hidden flex flex-col justify-center min-h-[160px]">
                  <div className="max-w-2xl relative z-10">
                    <h3 className="text-xl font-bold text-[#1D6BD9] mb-3">Routing Lists Table</h3>
                    <p className="text-sm text-ink-soft leading-relaxed mb-6 max-w-xl">
                      This table is contain information about Routes Lists and rules that are applicable in a particular jurisdiction or region. This information could include details such as the list name, and the date to this list.
                    </p>
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-2 px-5 py-2 rounded-full border border-[#1D6BD9] text-[#1D6BD9] font-medium text-sm hover:bg-blue-50 transition-colors cursor-pointer">
                        <LayoutGrid className="size-4" /> Add Route
                      </button>
                      <button className="flex items-center gap-2 px-5 py-2 rounded-full border border-[#1D6BD9]/50 text-sky-500 font-medium text-sm hover:bg-sky-50 transition-colors cursor-pointer">
                        <Upload className="size-4" /> Upload
                      </button>
                    </div>
                  </div>

                  {/* Abstract Illustration representation */}
                  <div className="hidden lg:flex absolute right-12 bottom-0 h-full items-end justify-center pointer-events-none">
                    <div className="relative w-40 h-32 flex items-end justify-center">
                      {/* Character stand-in */}
                      <div className="absolute left-0 bottom-0 w-12 h-24 bg-[#1D6BD9] rounded-t-full" />
                      <div className="absolute left-3 bottom-24 size-8 bg-[#1D6BD9] rounded-full border-2 border-white" />
                      {/* Box/Trolley stand-in */}
                      <div className="absolute right-0 bottom-4 w-20 h-24 bg-[#f8fafc] border border-ink/10 rounded-t-lg flex flex-col items-center justify-end pb-2">
                        <div className="size-14 bg-amber-300 rounded shadow-sm border border-amber-400 mb-1 flex items-center justify-center">
                          <Package className="size-8 text-amber-700/50" />
                        </div>
                        <div className="w-16 h-4 bg-sky-200 rounded-full flex justify-between px-1">
                          <div className="size-4 bg-sky-600 rounded-full -ml-2" />
                          <div className="size-4 bg-sky-600 rounded-full -mr-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Card */}
                <div className="bg-white rounded-xl shadow-sm p-5 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors">
                  <h3 className="text-lg font-bold text-[#1D6BD9]">Map</h3>
                  <ChevronDown className="size-5 text-ink-soft" />
                </div>

                {/* Routing Lists Table Card */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-xl font-medium text-ink mb-6">Routing Lists</h3>
                  <div className="w-full overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                      <thead>
                        <tr className="border-b border-ink/5">
                          <th className="pb-4 w-12"><div className="size-4 rounded border border-ink/20" /></th>
                          <th className="pb-4 font-bold text-ink w-24">Actions</th>
                          <th className="pb-4 font-bold text-ink w-48">Name</th>
                          <th className="pb-4 font-bold text-ink">Comments</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-ink/5">
                        {[
                          { name: "Zayn Alvi", comment: "Visit Al Noor Grocery, deliver FMCG products, verify stock levels, and collect feedback on fast-moving items." },
                          { name: "Omar Khalid", comment: "Deliver pending order to Al Madina Supermarket, check shelf availability, and discuss next week's replenishment requirements." },
                          { name: "Yusuf Kareem", comment: "Conduct a new product introduction at Al Baraka Stores, place promotional materials, and confirm stock receipt." },
                          { name: "Faisal Rahman", comment: "Visit Green Palm Market, deliver products, verify invoice against received goods, and collect outstanding payment details." },
                          { name: "Hamza Nasser", comment: "Visit Desert Star Trading, inspect product display arrangement, deliver replenishment stock, and record competitor activity." },
                        ].map((row, i) => (
                          <tr key={i} className="hover:bg-slate-50 transition-colors cursor-pointer">
                            <td className="py-4"><div className="size-4 rounded border border-ink/20" /></td>
                            <td className="py-4">
                              <div className="flex items-center gap-1">
                                <button className="size-7 rounded bg-[#0ea5ff] text-white flex items-center justify-center hover:bg-sky-500 transition-colors cursor-pointer"><Edit2 className="size-3.5" /></button>
                                <button className="size-7 rounded bg-[#f43f5e] text-white flex items-center justify-center hover:bg-rose-500 transition-colors cursor-pointer"><Trash2 className="size-3.5" /></button>
                              </div>
                            </td>
                            <td className="py-4 font-bold text-ink text-xs">{row.name}</td>
                            <td className="py-4 text-ink-soft whitespace-normal text-xs leading-relaxed max-w-xl">{row.comment}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  <div className="flex justify-end mt-6 text-xs text-ink-soft">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        Rows per page:
                        <div className="flex items-center gap-1 border border-ink/10 rounded px-2 py-1 cursor-pointer hover:bg-slate-50">
                          10 <ChevronDown className="size-3" />
                        </div>
                      </div>
                      <div>1-5 of 5</div>
                      <div className="flex items-center gap-2">
                        <button className="p-1 opacity-40 hover:opacity-100 transition-opacity cursor-pointer"><ChevronsLeft className="size-4" /></button>
                        <button className="p-1 opacity-40 hover:opacity-100 transition-opacity cursor-pointer"><ChevronLeft className="size-4" /></button>
                        <button className="size-6 flex items-center justify-center rounded border border-[#1d4ed8] text-[#1d4ed8] font-medium cursor-pointer">1</button>
                        <button className="p-1 opacity-40 hover:opacity-100 transition-opacity cursor-pointer"><ChevronRight className="size-4" /></button>
                        <button className="p-1 opacity-40 hover:opacity-100 transition-opacity cursor-pointer"><ChevronsRight className="size-4" /></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : activeTab === "sales" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 pb-6">
                {SALES_REPORTS.map((card) => (
                  <div key={card.title} className="relative overflow-hidden bg-white p-6 rounded-xl border border-ink/5 shadow-sm transition-all duration-500 cursor-pointer group hover:shadow-lg hover:-translate-y-1">
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#5DAEFA] rounded-full scale-0 group-hover:scale-[4] transition-transform duration-700 ease-out z-0" />
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-[#5DAEFA]/30 to-transparent rounded-full scale-0 group-hover:scale-[5] transition-transform duration-1000 ease-out z-0 delay-75" />
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="size-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors duration-500 shadow-sm border border-ink/5">
                        <FileText className="size-5 text-ink-soft group-hover:text-[#5DAEFA] transition-colors duration-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-ink mb-1 group-hover:text-white transition-colors duration-500">{card.title}</h4>
                        <p className="text-xs text-ink-soft group-hover:text-white/80 transition-colors duration-500 leading-relaxed">{card.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* ── Dashboard tab ── */
              <>
                {/* Stat cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6">
                  {[
                    { label: "Total Sales Today", value: "12,450 IQD", pct: "18.6%", from: "#3b82f6", to: "#2563eb", shadow: "shadow-blue-500/20", Icon: LineChart, wave: "M0,50 C320,100 420,0 740,50 C1060,100 1160,0 1440,50 L1440,100 L0,100 Z" },
                    { label: "Total Cash Today", value: "8,750 IQD", pct: "12.4%", from: "#f43f5e", to: "#e11d48", shadow: "shadow-rose-500/20", Icon: Wallet, wave: "M0,30 C320,80 420,20 740,50 C1060,80 1160,20 1440,30 L1440,100 L0,100 Z" },
                    { label: "Total Sales This Month", value: "215,680 IQD", pct: "24.7%", from: "#10b981", to: "#059669", shadow: "shadow-emerald-500/20", Icon: BarChart3, wave: "M0,60 C320,20 420,80 740,50 C1060,20 1160,80 1440,60 L1440,100 L0,100 Z" },
                    { label: "Total Cash This Month", value: "31,540 IQD", pct: "21.3%", from: "#f97316", to: "#ea580c", shadow: "shadow-orange-500/20", Icon: CircleDollarSign, wave: "M0,40 C320,90 420,10 740,40 C1060,90 1160,10 1440,40 L1440,100 L0,100 Z" },
                  ].map(({ label, value, pct, from, to, shadow, Icon, wave }) => (
                    <div key={label} className={`relative rounded-xl overflow-hidden text-white p-5 shadow-lg ${shadow} group hover:-translate-y-1 transition-transform duration-300 cursor-pointer`} style={{ background: `linear-gradient(to bottom right, ${from}, ${to})` }}>
                      <div className="relative z-10 flex justify-between items-start">
                        <div>
                          <p className="text-white/70 text-xs font-medium mb-1">{label}</p>
                          <h3 className="text-2xl font-bold mb-3">{value}</h3>
                          <div className="flex items-center gap-1 text-xs font-medium text-white/70">
                            <TrendingUp className="size-3 text-emerald-300" />
                            <span className="text-emerald-300">{pct}</span> vs yesterday
                          </div>
                        </div>
                        <div className="size-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm shadow-inner group-hover:scale-110 transition-transform duration-300">
                          <Icon className="size-5 text-white" />
                        </div>
                      </div>
                      <svg className="absolute bottom-0 left-0 w-full h-12 opacity-30 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1440 100">
                        <path fill="currentColor" d={wave} />
                      </svg>
                    </div>
                  ))}
                </div>

                {/* Small metric strip */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 bg-white p-4 rounded-xl border border-ink/5 shadow-sm">
                  {[
                    { icon: ShoppingBag, value: "42", label: "Orders Today", bg: "bg-blue-50", color: "text-blue-600" },
                    { icon: Users, value: "18", label: "New Customers", bg: "bg-rose-50", color: "text-rose-600" },
                    { icon: FileText, value: "7", label: "Pending Collections", bg: "bg-emerald-50", color: "text-emerald-600" },
                    { icon: Percent, value: "96.2%", label: "Collection Efficiency", bg: "bg-orange-50", color: "text-orange-600" },
                  ].map(({ icon: Icon, value, label, bg, color }, i, arr) => (
                    <div key={label} className={`flex items-center gap-4 p-2 cursor-pointer hover:bg-slate-50 rounded-lg transition-colors ${i < arr.length - 1 ? "lg:border-r border-ink/5" : ""}`}>
                      <div className={`size-12 rounded-full ${bg} flex items-center justify-center ${color} flex-shrink-0`}>
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-ink">{value}</div>
                        <div className="text-xs font-medium text-ink-soft">{label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bar chart */}
                <div className="bg-white p-6 rounded-xl border border-ink/5 shadow-sm mb-4">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-sm font-bold text-ink uppercase tracking-wider mb-1">Sales Status</h3>
                      <p className="text-xs text-ink-soft">Track your sales from ship date to arrival.</p>
                    </div>
                    <Menu className="size-5 text-ink-soft cursor-pointer hover:text-ink transition-colors" />
                  </div>

                  <div className="flex items-center gap-8 mb-8">
                    <div>
                      <div className="text-lg font-bold text-ink">12,450 IQD</div>
                      <div className="flex items-center gap-2 text-[10px] font-bold text-ink-soft mt-1">
                        <div className="size-2.5 rounded-[2px] bg-blue-600" /> TOTAL SALES
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-ink">8,750 IQD</div>
                      <div className="flex items-center gap-2 text-[10px] font-bold text-ink-soft mt-1">
                        <div className="size-2.5 rounded-[2px] bg-rose-600" /> TOTAL CASH
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-64 flex flex-col justify-end relative pl-8 pb-8">
                    {/* Y-axis grid */}
                    <div className="absolute inset-0 flex flex-col justify-between z-0 pb-8">
                      {[12000, 10000, 8000, 6000, 4000, 2000, 0].map((val) => (
                        <div key={val} className="w-full border-t border-ink/5 flex items-center relative">
                          <span className="absolute -left-2 -translate-x-full text-[10px] text-ink-soft font-medium bg-white px-1">
                            {val === 0 ? "0" : val.toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bars */}
                    <div className="relative z-10 w-full h-[85%] flex justify-between px-1">
                      {CHART_DATA.map((data, i) => (
                        <div key={i} className="flex flex-col items-center group w-full h-full relative">
                          <div className="flex items-end justify-center gap-px w-full h-full relative">
                            <div className="w-1/2 bg-[#2563eb] rounded-t-[2px] transition-all duration-300 ease-out hover:brightness-110 cursor-pointer" style={{ height: `${(data.sales / 12000) * 100}%` }} />
                            <div className="w-1/2 bg-[#e11d48] rounded-t-[2px] transition-all duration-300 ease-out hover:brightness-110 cursor-pointer" style={{ height: `${(data.cash / 12000) * 100}%` }} />
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-ink text-white text-[10px] font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity z-30">
                              Sales: {data.sales.toLocaleString()} | Cash: {data.cash.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="absolute bottom-8 left-8 right-0 border-t border-ink/20 z-10" />

                    <div className="absolute bottom-0 left-8 right-0 flex justify-between px-2 sm:px-4">
                      {CHART_DATA.map(({ month }, i) => (
                        <span key={i} className="text-[10px] font-medium text-ink-soft w-full max-w-[24px] sm:max-w-[32px] text-center">{month}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center items-center gap-6 mt-6">
                    <div className="flex items-center gap-2 text-[11px] font-bold text-ink-soft">
                      <div className="size-2.5 rounded-[2px] bg-[#2563eb]" /> TOTAL SALES
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-bold text-ink-soft">
                      <div className="size-2.5 rounded-[2px] bg-[#e11d48]" /> TOTAL CASH
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>{/* end scale wrapper */}
    </motion.div>
  );
}
