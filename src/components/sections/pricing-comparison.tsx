"use client";

import React, { Fragment } from "react";
import {
  Check,
  X,
  Package,
  Building2,
  User,
  Rocket,
  TrendingUp,
  Target,
  Map,
  Activity,
  Wrench,
  Workflow,
  PieChart,
  Database,
  Headset
} from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    id: "starter",
    name: "STARTER",
    description: "",
    icon: Rocket,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50",
    isPopular: false,
  },
  {
    id: "growth",
    name: "GROWTH",
    description: "MOST POPULAR",
    icon: TrendingUp,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
    isPopular: true,
  },
  {
    id: "enterprise",
    name: "ENTERPRISE",
    description: "",
    icon: Building2,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
    isPopular: false,
  },
];

const featureCategories = [
  {
    name: "Core Sales Execution",
    icon: Target,
    color: "text-slate-900",
    bg: "bg-emerald-50",
    features: [
      { name: "Customer Management", tiers: { starter: true, growth: true, enterprise: true, "web-user": true } },
      { name: "Product Management", tiers: { starter: true, growth: true, enterprise: true, "web-user": true } },
      { name: "Price Lists", tiers: { starter: true, growth: true, enterprise: true, "web-user": true } },
      { name: "Sales Quotations", tiers: { starter: true, growth: true, enterprise: true, "web-user": true } },
      { name: "Sales Orders", tiers: { starter: true, growth: true, enterprise: true, "web-user": true } },
      { name: "Sales Returns", tiers: { starter: true, growth: true, enterprise: true, "web-user": true } },
      { name: "Collection Management", tiers: { starter: true, growth: true, enterprise: true, "web-user": true } },
      { name: "Customer Visit Tracking", tiers: { starter: true, growth: true, enterprise: true, "web-user": true } },
      { name: "GPS Tracking", tiers: { starter: true, growth: true, enterprise: true, "web-user": true } },
    ],
  },
  {
    name: "Inventory & Distribution",
    icon: Package,
    color: "text-slate-900",
    bg: "bg-blue-50",
    features: [
      { name: "Warehouse Inventory Visibility", tiers: { starter: false, growth: true, enterprise: true, "web-user": true } },
      { name: "Stock Requests", tiers: { starter: false, growth: true, enterprise: true, "web-user": false } },
      { name: "Stock Transfers", tiers: { starter: false, growth: true, enterprise: true, "web-user": false } },
      { name: "Inventory Counting", tiers: { starter: false, growth: true, enterprise: true, "web-user": false } },
      { name: "Batch Tracking", tiers: { starter: false, growth: true, enterprise: true, "web-user": false } },
      { name: "Expiry Management", tiers: { starter: false, growth: true, enterprise: true, "web-user": false } },
      { name: "Route Inventory Management", tiers: { starter: false, growth: true, enterprise: true, "web-user": false } },
      { name: "Smart Replenishment", tiers: { starter: false, growth: true, enterprise: true, "web-user": false } },
    ],
  },
  {
    name: "Route & Territory Management",
    icon: Map,
    color: "text-slate-900",
    bg: "bg-purple-50",
    features: [
      { name: "Route Planning", tiers: { starter: false, growth: true, enterprise: true, "web-user": false } },
      { name: "Territory Management", tiers: { starter: false, growth: true, enterprise: true, "web-user": false } },
      { name: "Route Compliance Monitoring", tiers: { starter: false, growth: true, enterprise: true, "web-user": false } },
      { name: "Missed Customer Analysis", tiers: { starter: false, growth: true, enterprise: true, "web-user": false } },
      { name: "Route Performance Reports", tiers: { starter: false, growth: true, enterprise: true, "web-user": false } },
    ],
  },
  {
    name: "Performance Management",
    icon: Activity,
    color: "text-slate-900",
    bg: "bg-orange-50",
    features: [
      { name: "Sales KPIs", tiers: { starter: true, growth: true, enterprise: true, "web-user": false } },
      { name: "Sales Targets", tiers: { starter: false, growth: true, enterprise: true, "web-user": false } },
      { name: "Seasonal Targets", tiers: { starter: false, growth: true, enterprise: true, "web-user": false } },
      { name: "Team Performance Dashboards", tiers: { starter: false, growth: true, enterprise: true, "web-user": false } },
      { name: "Customer Coverage Analysis", tiers: { starter: false, growth: true, enterprise: true, "web-user": false } },
    ],
  },
  {
    name: "Field Service Management",
    icon: Wrench,
    color: "text-slate-900",
    bg: "bg-teal-50",
    features: [
      { name: "Task Management", tiers: { starter: false, growth: true, enterprise: true, "web-user": false } },
      { name: "Work Orders", tiers: { starter: false, growth: true, enterprise: true, "web-user": false } },
      { name: "Technician Scheduling", tiers: { starter: false, growth: true, enterprise: true, "web-user": false } },
      { name: "Service Visit Tracking", tiers: { starter: false, growth: true, enterprise: true, "web-user": false } },
      { name: "Photo Attachments", tiers: { starter: false, growth: true, enterprise: true, "web-user": false } },
      { name: "Customer Sign-Off", tiers: { starter: false, growth: true, enterprise: true, "web-user": false } },
    ],
  },
  {
    name: "Workflow & Automation",
    icon: Workflow,
    color: "text-slate-900",
    bg: "bg-rose-50",
    features: [
      { name: "Alerts & Notification", tiers: { starter: true, growth: true, enterprise: true, "web-user": true } },
      { name: "Approval Workflows", tiers: { starter: false, growth: true, enterprise: true, "web-user": false } },
      { name: "Multi-Level Approvals", tiers: { starter: false, growth: false, enterprise: true, "web-user": false } },
      { name: "Automated Actions", tiers: { starter: false, growth: false, enterprise: true, "web-user": false } },
    ],
  },
  {
    name: "Analytics & Intelligence",
    icon: PieChart,
    color: "text-slate-900",
    bg: "bg-blue-50",
    features: [
      { name: "Standard Reports", tiers: { starter: true, growth: true, enterprise: true, "web-user": true } },
      { name: "Dashboards", tiers: { starter: true, growth: true, enterprise: true, "web-user": true } },
      { name: "Advanced Analytics", tiers: { starter: false, growth: true, enterprise: true, "web-user": false } },
      { name: "Executive Dashboards", tiers: { starter: false, growth: false, enterprise: true, "web-user": false } },
      { name: "AI Demand Prediction", tiers: { starter: false, growth: false, enterprise: true, "web-user": false } },
      { name: "Purchase Intelligence", tiers: { starter: false, growth: false, enterprise: true, "web-user": false } },
      { name: "Customer Profitability Analysis", tiers: { starter: false, growth: false, enterprise: true, "web-user": false } },
    ],
  },
  {
    name: "ERP Integration",
    icon: Database,
    color: "text-slate-900",
    bg: "bg-amber-50",
    features: [
      { name: "ERP Synchronization", tiers: { starter: true, growth: true, enterprise: true, "web-user": true } },
      { name: "SAP Business One", tiers: { starter: true, growth: true, enterprise: true, "web-user": true } },
      { name: "Odoo", tiers: { starter: true, growth: true, enterprise: true, "web-user": true } },
      { name: "Microsoft Dynamics", tiers: { starter: true, growth: false, enterprise: true, "web-user": true } },
      { name: "API Access", tiers: { starter: false, growth: false, enterprise: true, "web-user": false } },
    ],
  },
  {
    name: "Support",
    icon: Headset,
    color: "text-slate-900",
    bg: "bg-cyan-50",
    features: [
      { name: "Email Support", tiers: { starter: true, growth: true, enterprise: true, "web-user": true } },
      { name: "WhatsApp Support", tiers: { starter: true, growth: true, enterprise: true, "web-user": true } },
      { name: "Priority Support", tiers: { starter: false, growth: false, enterprise: true, "web-user": false } },
      { name: "Dedicated Account Manager", tiers: { starter: false, growth: false, enterprise: true, "web-user": false } },
      { name: "SLA Support", tiers: { starter: false, growth: false, enterprise: true, "web-user": false } },
    ],
  },
];

export function PricingComparison() {
  return (
    <section className="w-full bg-[#FAFBFC] py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-accent-ink/25 bg-accent-ink/[0.07] px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-accent-ink mb-3">
            <span className="size-1.5 shrink-0 rounded-full bg-current" aria-hidden="true" />
            Feature Comparison
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl mb-4 font-display">
            Compare All Features
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            See exactly what&apos;s included in each plan and choose the right one for your business.
          </p>
        </div>

        {/* Table Container */}
        <div className="relative bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">

              {/* Header Row */}
              <thead>
                <tr>
                  <th className="p-4 md:p-6 w-[140px] min-w-[140px] md:w-[18%] md:min-w-[160px] align-middle border-b border-r border-slate-100 bg-gradient-to-br from-[#f2fcf7] to-[#ffffff] relative overflow-hidden sticky left-0 z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                    <div className="flex flex-col items-center justify-center h-full relative z-10">
                      <span className="text-sm md:text-base font-extrabold text-[#1e293b] tracking-widest uppercase">FEATURES</span>
                    </div>
                  </th>

                  {plans.map((plan, i) => (
                    <th
                      key={plan.id}
                      className={cn(
                        "p-4 md:p-6 text-center align-middle border-b border-slate-100 relative min-w-[160px] md:min-w-[220px]",
                        !plan.isPopular ? "bg-white" : "bg-[#FDF8F4]",
                        i !== plans.length - 1 && "border-r"
                      )}
                    >
                      {plan.isPopular && (
                        <div className="absolute -top-[2px] left-[-2px] right-[-2px] flex justify-center">
                          <div className="bg-blue-500 text-white text-[10px] font-bold px-4 py-1 rounded-b-lg uppercase tracking-widest shadow-sm">
                            Most chosen
                          </div>
                        </div>
                      )}

                      <div className="flex flex-col items-center py-2">
                        <h3 className={cn("text-lg font-extrabold mb-1 whitespace-nowrap uppercase", plan.isPopular ? "text-blue-600" : "text-[#111827]")}>{plan.name}</h3>
                        {plan.description && <p className="text-[10px] text-blue-600 leading-snug font-bold uppercase tracking-widest">{plan.description}</p>}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Body */}
              <tbody className="bg-white">
                {featureCategories.map((category) => (
                  <Fragment key={category.name}>
                    {/* Category Header */}
                    <tr>
                      <td colSpan={5} className={cn("p-0 border-y border-slate-100", category.bg)}>
                        <div className="py-3 px-4 md:px-6 flex items-center gap-2 md:gap-3 sticky left-0 w-max max-w-[85vw] md:max-w-none z-20">
                          <category.icon className={cn("w-4 h-4 md:w-5 md:h-5 hidden md:block shrink-0 mt-0.5", category.color)} />
                          <span className={cn("text-[11px] sm:text-xs md:text-sm font-extrabold tracking-wider text-black whitespace-normal break-words leading-snug", category.color)}>
                            {category.name}
                          </span>
                        </div>
                      </td>
                    </tr>

                    {/* Features */}
                    {category.features.map((feature, featureIdx) => (
                      <tr key={feature.name} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-3 px-4 md:px-6 border-b border-r border-slate-100 bg-white sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                          <div className="flex items-center gap-2 md:gap-3">
                            <span className="text-xs md:text-sm font-medium text-slate-700">{feature.name}</span>
                          </div>
                        </td>

                        {plans.map((plan, i) => {
                          const value = feature.tiers[plan.id as keyof typeof feature.tiers];

                          return (
                            <td
                              key={`${plan.id}-${feature.name}`}
                              className={cn(
                                "py-3 px-4 text-center border-b border-slate-100",
                                !plan.isPopular ? "bg-white" : "bg-[#FDF8F4]",
                                i !== plans.length - 1 && !plan.isPopular && "border-r"
                              )}
                            >
                              {value === true || value === "Included" ? (
                                <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-red-500 mx-auto" />
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </Fragment>
                ))}

                {/* Bottom Border for Popular Plan */}
                <tr>
                  <td className="p-0 border-r border-slate-100" />
                  {plans.map((plan, i) => (
                    <td
                      key={`bottom-${plan.id}`}
                      className={cn(
                        "p-0 h-0",
                        !plan.isPopular ? "bg-white" : "bg-[#FDF8F4] rounded-b-xl",
                        i !== plans.length - 1 && !plan.isPopular && "border-r border-slate-100"
                      )}
                    />
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>



      </div>
    </section>
  );
}
