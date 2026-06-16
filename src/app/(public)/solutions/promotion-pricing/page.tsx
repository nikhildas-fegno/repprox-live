import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Container from "@/components/layout/container";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/sections/cta-section";
import {
  TrendingUp, CircleDollarSign, BarChart4, ShieldCheck, Tag, Gift, Layers, BrainCircuit, Activity,
  CheckCircle2, XCircle, ArrowRight, LineChart, Target, Zap, LayoutDashboard, ShoppingBag, DollarSign,
  PieChart, Building2, Package, Pill, Wrench, Factory, Store
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Pricing & Promotions Management | RepProX",
  description: "Maximize profitability and control pricing, promotions, and trade discounts from one intelligent platform.",
  path: "/solutions/promotion-pricing",
});

export default function PromotionPricingPage() {
  return (
    <>
      {/* HERO SECTION - LIGHT EMERALD THEME */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFF] via-[#EEF5FF] to-white py-24 lg:h-svh flex items-center border-b border-emerald-100/50">

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Text Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 bg-white/60 backdrop-blur-md mb-8 shadow-sm">
                  <Tag className="size-4 text-emerald-600" />
                  <span className="text-sm font-semibold text-emerald-700 tracking-wide uppercase">Promotions & Pricing</span>
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 text-balance">
                  Revenue Growth Starts With <span className="text-emerald-600">Smarter Pricing</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8 text-balance font-light">
                  Control pricing, promotions, customer agreements, trade discounts, and sales incentives from one intelligent commercial execution platform.
                </p>
                <p className="text-base text-slate-600 mb-10 max-w-2xl">
                  RepProX helps distributors, FMCG companies, wholesalers, and consumer goods businesses maximize profitability while increasing sales through data-driven pricing and promotion management.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full">
                  <a href="/contact" className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-8 font-semibold text-white transition-all hover:bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                    Request Demo
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Hero Visuals */}
            <Reveal delay={0.2}>
              <div className="relative w-full max-w-lg mx-auto bg-white rounded-3xl border border-emerald-100 shadow-2xl p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-2xl rounded-full"></div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <TrendingUp className="text-emerald-500" /> Key Outcomes
                </h3>
                <ul className="space-y-4">
                  {[
                    "Increase Revenue Per Customer",
                    "Protect Profit Margins",
                    "Eliminate Pricing Errors",
                    "Improve Promotion Effectiveness",
                    "Drive Higher Order Values",
                    "Gain Full Commercial Control"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 transition-colors hover:border-emerald-200 hover:bg-emerald-50/30">
                      <div className="size-8 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="size-4 text-emerald-600" />
                      </div>
                      <span className="font-medium text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* COMMERCIAL CHALLENGES & TRADITIONAL MODELS */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <h2 className="font-display text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Revenue Is Lost Long Before <br />
                <span className="text-rose-500">An Order Is Placed</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Many businesses unknowingly lose profitability because pricing decisions are fragmented across spreadsheets, disconnected systems, and manual approvals.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 p-5 rounded-2xl bg-rose-50/50 border border-rose-100">
                  <XCircle className="size-6 text-rose-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Common Challenges</h4>
                    <div className="grid sm:grid-cols-2 gap-2 text-sm text-slate-600">
                      <p>• Inconsistent customer pricing</p>
                      <p>• Unauthorized discounting</p>
                      <p>• Margin leakage across territories</p>
                      <p>• Complex promotional execution</p>
                      <p>• Pricing conflicts between branches</p>
                      <p>• Limited visibility into campaigns</p>
                      <p>• Manual price updates</p>
                      <p>• Poor sales incentive control</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <Zap className="size-6 text-amber-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">The Result</h4>
                    <p className="text-slate-600 text-sm">Revenue growth slows while margins continue to erode due to inconsistent execution.</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-[80px] rounded-full pointer-events-none"></div>
                <h3 className="text-2xl font-bold mb-6">Why Traditional Models Fail</h3>
                <p className="text-slate-300 mb-6">Most organizations manage pricing through Excel sheets, manual approvals, static lists, disconnected ERPs, and individual rep decisions.</p>

                <div className="bg-white/10 rounded-xl p-5 mb-6 border border-white/10">
                  <h4 className="font-semibold text-emerald-300 mb-3 text-sm uppercase tracking-wider">This Creates:</h4>
                  <ul className="space-y-2">
                    {["Pricing confusion", "Revenue leakage", "Reduced profitability", "Customer dissatisfaction", "Promotion inconsistencies"].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-300">
                        <ArrowRight className="size-4 text-emerald-400" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-sm font-medium">
                  <ShieldCheck className="size-4" /> RepProX centralizes every decision
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* COMMERCIAL CONTROL CENTER */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-200 bg-teal-50 mb-6">
              <LayoutDashboard className="size-4 text-teal-600" />
              <span className="text-xs font-bold text-teal-700 tracking-wide uppercase">Command Hub</span>
            </div>
            <h2 className="font-display text-4xl font-bold text-slate-900 mb-6">
              Your Real-Time Pricing & Promotion Center
            </h2>
            <p className="text-lg text-slate-600">
              Monitor everything from one dashboard. Executives gain complete visibility into commercial performance.
            </p>
          </div>

          <Reveal>
            <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
              {[
                { icon: Gift, label: "Active Promotions" },
                { icon: Activity, label: "Campaign Performance" },
                { icon: Tag, label: "Discount Utilization" },
                { icon: LineChart, label: "Territory Pricing Trends" },
                { icon: PieChart, label: "Margin Analysis" },
                { icon: Layers, label: "Bundle Performance" },
                { icon: Target, label: "Customer Profitability" },
                { icon: ShoppingBag, label: "Product Profitability" },
                { icon: CircleDollarSign, label: "Promo Revenue" },
                { icon: ShieldCheck, label: "Pricing Compliance" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-full px-6 py-3 flex items-center gap-3 shadow-sm hover:border-teal-300 hover:shadow-md transition-all cursor-default">
                  <item.icon className="size-5 text-teal-500" />
                  <span className="font-medium text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* FEATURE SECTIONS - DENSE GRID LAYOUT */}
      <section id="features" className="py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-bold text-slate-900 mb-6">Complete Commercial Control</h2>
            <p className="text-lg text-slate-600">Everything you need to execute complex pricing strategies and promotional campaigns without the blank space.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Feature 01 */}
            <Reveal>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 h-full flex flex-col hover:border-emerald-300 hover:bg-emerald-50/30 transition-all">
                <div className="size-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                  <CircleDollarSign className="size-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Dynamic Price Management</h3>
                <p className="text-slate-600 text-sm mb-8 flex-grow">Create flexible pricing structures based on customer type, territory, industry, volume, or agreements.</p>
                <div className="space-y-3 text-sm font-medium text-slate-700 border-t border-slate-200 pt-6">
                  <div className="flex items-center gap-3"><CheckCircle2 className="size-4 text-emerald-500" /> Multiple Price Lists</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="size-4 text-emerald-500" /> Region & Territory Pricing</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="size-4 text-emerald-500" /> Customer Segment Pricing</div>
                </div>
              </div>
            </Reveal>

            {/* Feature 02 */}
            <Reveal delay={0.1}>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 h-full flex flex-col hover:border-blue-300 hover:bg-blue-50/30 transition-all">
                <div className="size-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  <Building2 className="size-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Customer Agreements</h3>
                <p className="text-slate-600 text-sm mb-8 flex-grow">Create negotiated pricing models for key accounts while maintaining centralized governance.</p>
                <div className="space-y-3 text-sm font-medium text-slate-700 border-t border-slate-200 pt-6">
                  <div className="flex items-center gap-3"><CheckCircle2 className="size-4 text-blue-500" /> Contract Pricing</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="size-4 text-blue-500" /> Customer Discount Structures</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="size-4 text-blue-500" /> Account-Based Incentives</div>
                </div>
              </div>
            </Reveal>

            {/* Feature 03 */}
            <Reveal delay={0.2}>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 h-full flex flex-col hover:border-purple-300 hover:bg-purple-50/30 transition-all">
                <div className="size-14 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
                  <Gift className="size-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Promotion Management</h3>
                <p className="text-slate-600 text-sm mb-8 flex-grow">Design and execute promotions across products, brands, categories, territories, and customer groups.</p>
                <div className="space-y-3 text-sm font-medium text-slate-700 border-t border-slate-200 pt-6">
                  <div className="flex items-center gap-3"><CheckCircle2 className="size-4 text-purple-500" /> Promotion Rules & Scheduling</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="size-4 text-purple-500" /> Seasonal & Event Offers</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="size-4 text-purple-500" /> Campaign Targeting</div>
                </div>
              </div>
            </Reveal>

            {/* Feature 04 */}
            <Reveal>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 h-full flex flex-col hover:border-teal-300 hover:bg-teal-50/30 transition-all">
                <div className="size-14 rounded-xl bg-teal-100 flex items-center justify-center mb-6">
                  <Layers className="size-7 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Bundle & Cross-Sell</h3>
                <p className="text-slate-600 text-sm mb-8 flex-grow">Increase average order value by encouraging customers to purchase complementary products through intelligent bundles.</p>
                <div className="space-y-3 text-sm font-medium text-slate-700 border-t border-slate-200 pt-6">
                  <div className="flex items-center gap-3"><CheckCircle2 className="size-4 text-teal-500" /> Mix & Match Offers</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="size-4 text-teal-500" /> Cross-Sell Packages</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="size-4 text-teal-500" /> Upsell Campaigns</div>
                </div>
              </div>
            </Reveal>

            {/* Feature 05 */}
            <Reveal delay={0.1}>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 h-full flex flex-col hover:border-amber-300 hover:bg-amber-50/30 transition-all">
                <div className="size-14 rounded-xl bg-amber-100 flex items-center justify-center mb-6">
                  <TrendingUp className="size-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Volume-Based Growth</h3>
                <p className="text-slate-600 text-sm mb-8 flex-grow">Reward larger purchases automatically. Drive larger orders without requiring manual intervention.</p>
                <div className="space-y-3 text-sm font-medium text-slate-700 border-t border-slate-200 pt-6">
                  <div className="flex items-center gap-3"><CheckCircle2 className="size-4 text-amber-500" /> Quantity Break Pricing</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="size-4 text-amber-500" /> Tiered Incentives</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="size-4 text-amber-500" /> Wholesale Programs</div>
                </div>
              </div>
            </Reveal>

            {/* Feature 06 */}
            <Reveal delay={0.2}>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 h-full flex flex-col hover:border-rose-300 hover:bg-rose-50/30 transition-all">
                <div className="size-14 rounded-xl bg-rose-100 flex items-center justify-center mb-6">
                  <ShieldCheck className="size-7 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Margin Protection</h3>
                <p className="text-slate-600 text-sm mb-8 flex-grow">Grow revenue without sacrificing profitability. Prevent excessive discounting and maintain healthy margins.</p>
                <div className="space-y-3 text-sm font-medium text-slate-700 border-t border-slate-200 pt-6">
                  <div className="flex items-center gap-3"><CheckCircle2 className="size-4 text-rose-500" /> Discount Approvals</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="size-4 text-rose-500" /> Margin Thresholds</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="size-4 text-rose-500" /> Exception Monitoring</div>
                </div>
              </div>
            </Reveal>

          </div>
        </Container>
      </section>


      {/* INDUSTRIES & IMPACT */}
      <section className="py-24 bg-slate-50">
        <Container>
          <div className="grid lg:grid-cols-12 gap-16">

            {/* Industries Grid */}
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Industries That Benefit</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Factory, title: "FMCG Distribution", desc: "Drive trade promotions and retail growth." },
                    { icon: Store, title: "Food & Beverage", desc: "Manage seasonal campaigns and product bundles." },
                    { icon: Pill, title: "Pharmaceutical Distribution", desc: "Control pricing agreements and customer programs." },
                    { icon: Package, title: "Consumer Goods", desc: "Increase product visibility and promotional execution." },
                    { icon: Wrench, title: "Building Materials", desc: "Manage contract pricing and volume incentives." },
                    { icon: Building2, title: "Wholesale Distribution", desc: "Control large-scale pricing structures and agreements." }
                  ].map((ind, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2 hover:border-emerald-200 transition-colors">
                      <ind.icon className="size-6 text-emerald-500 mb-1" />
                      <h4 className="font-bold text-slate-900">{ind.title}</h4>
                      <p className="text-sm text-slate-600">{ind.desc}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Business Impact Column */}
            <div className="lg:col-span-5">
              <Reveal delay={0.2}>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Revenue Growth You Can Measure</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl border-l-4 border-emerald-500 shadow-sm">
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <TrendingUp className="size-5 text-emerald-500" /> Commercial Impact
                    </h4>
                    <p className="text-sm text-slate-600">Higher Average Order Value • Increased Promotion ROI • Faster Campaign Execution • Better Customer Retention</p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border-l-4 border-teal-500 shadow-sm">
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <CircleDollarSign className="size-5 text-teal-500" /> Financial Impact
                    </h4>
                    <p className="text-sm text-slate-600">Reduced Margin Leakage • Improved Profitability • Better Pricing Compliance • Stronger Revenue Forecasting</p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border-l-4 border-blue-500 shadow-sm">
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <Activity className="size-5 text-blue-500" /> Operational Impact
                    </h4>
                    <p className="text-sm text-slate-600">Centralized Commercial Control • Automated Governance • Faster Decision Making • Improved Visibility</p>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </Container>
      </section>

      {/* CTA SECTION */}
      <CtaSection
        title="Stop Competing On Discounts. Start Winning With Strategy."
        description="Transform pricing and promotions from operational tasks into a powerful revenue growth engine. Increase sales, protect margins, and maximize promotion performance with RepProX."
        primary={{ label: "Request Demo", href: "/contact" }}
      />
    </>
  );
}