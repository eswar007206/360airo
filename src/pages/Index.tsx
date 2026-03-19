import { useRef, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import AnimatedCounter from "@/components/AnimatedCounter";
import HeroVideo from "@/components/HeroVideo";
import AnimatedButton from "@/components/AnimatedButton";
import { GalaxyBackground } from "@/components/GalaxyBackground";
import { ScrollProgressBar, ScrollScale, Parallax, TextReveal, PeakScrollReveal, HeroScrollMask } from "@/components/ScrollInteractions";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Check, Mail, Linkedin, Phone, Zap, Shield, BarChart3, Users,
  Sparkles, Globe, MessageSquare, Bot, ArrowRight, Star, Clock, Target,
  Megaphone, TrendingUp, PieChart, Search, CheckCircle2
} from "lucide-react";

import avatarHS from "@/assets/avatar-hs.jpg";
import avatarGL from "@/assets/avatar-gl.jpg";
import avatarFD from "@/assets/avatar-fd.jpg";
import logo from "@/assets/logo-360airo.jpeg";

const steps = [
  { step: "01", title: "Import or Find Leads", desc: "Upload your data or discover verified contacts using powerful enrichment." },
  { step: "02", title: "Create Sequences", desc: "Blend emails, LinkedIn messages, and calls seamlessly timed for every timezone." },
  { step: "03", title: "Let AI Handle It", desc: "AI manages follow-ups, tracks replies, and intelligently suggests next best actions." },
];

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      // Divide progress into 3 sections (0, 1, 2)
      const step = Math.min(Math.floor(latest * 3), 2);
      setActiveStep(step);
    });
  }, [scrollYProgress]);
  return (
    <div className="min-h-screen bg-transparent text-foreground relative">
      <GalaxyBackground />
      <ScrollProgressBar />
      <Navbar />

      {/* ===== HERO ===== */}
      <div className="h-[120vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-transparent">
          <HeroScrollMask className="w-full h-full relative flex items-center justify-center">
            <HeroVideo />
            <div className="container mx-auto px-4 md:px-6 relative z-10 w-full">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-[-0.04em] leading-[0.95] text-balance mb-6 drop-shadow-lg">
                    Supercharge
                    <br />
                    <span className="gradient-text drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">Your Sales Outreach</span>
                  </h1>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="text-base md:text-xl max-w-lg mx-auto mb-10 text-muted-foreground/80 drop-shadow-md"
                >
                  AI-powered multichannel outreach across email, LinkedIn, and calls.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  <AnimatedButton variant="primary">Start Free Trial</AnimatedButton>
                  <AnimatedButton variant="outline">Book Demo</AnimatedButton>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
              <span className="text-xs tracking-widest uppercase text-muted-foreground/80">Scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-5 h-8 rounded-full border border-white/[0.15] flex justify-center pt-1.5 backdrop-blur-md bg-black/20"
              >
                <div className="w-1 h-2 rounded-full bg-white/70 shadow-[0_0_8px_white]" />
              </motion.div>
            </motion.div>
          </HeroScrollMask>
        </div>
      </div>

      {/* ===== TEXT REVEAL ===== */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <TextReveal
              text="Everything you need to drive more leads. Reach, engage, and convert prospects with powerful AI automation that works across every channel."
              className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-[-0.02em] leading-[1.2]"
            />
          </div>
        </div>
      </section>

      {/* ===== FEATURE CARDS ===== */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-4 text-foreground">
                Everything you need to drive more leads
              </h2>
              <p className="max-w-lg mx-auto text-muted-foreground/80">
                Reach, engage, and convert prospects with powerful AI automation.
              </p>
            </div>
          </ScrollFadeIn>

          <PeakScrollReveal>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Megaphone, title: "Campaign Automation", desc: "Leverage AI to automate outreach across email, LinkedIn, and calls — all in one place." },
                { icon: TrendingUp, title: "Lead Insights", desc: "Identify prospects most likely to convert with powerful lead scoring and data enrichment." },
                { icon: PieChart, title: "Analytics Dashboard", desc: "Track email, LinkedIn, and call performance with real-time analytics and detailed reports." },
              ].map((card, i) => (
                <ScrollFadeIn key={card.title} delay={i * 0.12}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="glass-card-hover p-8 h-full flex flex-col cursor-pointer group shadow-lg"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 shadow-inner shadow-white/10 group-hover:bg-primary/20 transition-colors">
                      <card.icon strokeWidth={1.25} className="w-7 h-7 text-accent drop-shadow-md group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground transition-colors group-hover:text-accent">{card.title}</h3>
                    <p className="text-sm leading-relaxed mb-6 flex-grow text-muted-foreground/80">{card.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent cursor-pointer hover:gap-3 transition-all duration-500">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </motion.div>
                </ScrollFadeIn>
              ))}
            </div>
          </PeakScrollReveal>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "5,000+", label: "Businesses" },
              { value: "12M+", label: "Outreach Actions" },
              { value: "40%", label: "More Meetings" },
              { value: "3x", label: "Faster Response" },
            ].map((stat, i) => (
              <ScrollFadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm mt-1 text-muted-foreground/80">{stat.label}</div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DASHBOARD ===== */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-4 text-foreground">
                Track and optimize your outreach
              </h2>
              <p className="max-w-lg mx-auto text-muted-foreground/80">
                Monitor key metrics with a real-time analytics dashboard.
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollScale>
            <div className="dashboard-frame max-w-5xl mx-auto">
              <div className="flex items-center justify-between px-6 py-3.5 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="360Airo" className="h-6 w-auto rounded object-contain mix-blend-screen" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-lg bg-muted/50 text-xs text-muted-foreground/80 flex items-center gap-1.5">
                    <Search strokeWidth={1.25} className="w-3 h-3" /> Search
                  </div>
                  <div className="w-7 h-7 rounded-full bg-muted/50" />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.03]">
                {[
                  { label: "Emails Sent", value: "4,286" },
                  { label: "New Leads", value: "1,208", change: "+110%" },
                  { label: "Meetings Booked", value: "176" },
                  { label: "Lead Sources", isChart: true },
                ].map((m) => (
                  <div key={m.label} className="p-5 bg-card/80">
                    <div className="text-xs text-muted-foreground/80 mb-1.5">{m.label}</div>
                    {m.isChart ? (
                      <div className="flex items-center gap-3 mt-2">
                        <div className="w-16 h-16 rounded-full border-4 border-primary/60 border-t-accent border-r-secondary relative">
                          <div className="absolute inset-2 rounded-full bg-card" />
                        </div>
                        <div className="space-y-1.5">
                          {[
                            { label: "LinkedIn", pct: "+30%", color: "bg-primary" },
                            { label: "Cold Email", pct: "+3.3%", color: "bg-accent" },
                            { label: "Warm Calls", pct: "+22%", color: "bg-secondary" },
                          ].map((s) => (
                            <div key={s.label} className="flex items-center gap-1.5 text-[10px]">
                              <div className={`w-1.5 h-1.5 rounded-full ${s.color}`} />
                              <span className="text-muted-foreground/80">{s.label}</span>
                              <span className="text-foreground font-medium">{s.pct}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-foreground">{m.value}</span>
                        {m.change && <span className="text-xs text-accent font-medium">{m.change}</span>}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-6">
                <div className="h-32 flex items-end gap-1">
                  {[40, 55, 45, 65, 80, 70, 90, 85, 60, 75, 95, 88, 70, 82, 78, 92].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="flex-1 rounded-t bg-gradient-to-t from-primary/30 to-primary/70 min-w-[6px]"
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.03] border-t border-white/[0.06]">
                {[
                  { value: "3,965", label: "Leads Generated", change: "+3.9%" },
                  { value: "$298K", label: "Revenue", change: "+3.9%" },
                  { value: "245", label: "Meetings Booked", change: "+2.1%" },
                  { value: "3.9%", label: "Conversion rate" },
                ].map((s) => (
                  <div key={s.label} className="p-5 bg-card/80">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-foreground">{s.value}</span>
                      <span className="text-[10px] text-muted-foreground/80">{s.label}</span>
                    </div>
                    {s.change && <span className="text-xs text-accent mt-1 block">{s.change}</span>}
                  </div>
                ))}
              </div>
            </div>
          </ScrollScale>
        </div>
      </section>

      {/* ===== MOBILE MOCKUP ===== */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-4 text-foreground">
                Streamline your outreach from anywhere
              </h2>
              <p className="max-w-lg mx-auto text-muted-foreground/80">
                Access and manage your sales pipeline on the go.
              </p>
            </div>
          </ScrollFadeIn>

          <div className="flex justify-center gap-6 md:gap-10 mb-16">
            {[
              {
                title: "Active Sequences",
                status: "Active",
                items: [
                  { icon: Linkedin, label: "LinkedIn Connection Request", sub: "Delivered · 21 in Queue" },
                  { icon: Linkedin, label: "LinkedIn InMail", sub: "Scheduled in 1d 6h" },
                  { icon: Clock, label: "Delay", sub: "1 day" },
                  { icon: Mail, label: "Email Follow-up", sub: "Scheduled in 2d" },
                ],
              },
              {
                title: "Today's Tasks",
                items: [
                  { icon: Linkedin, label: "LinkedIn Connection Request", sub: "Brenda Derick · 11m ago" },
                  { icon: MessageSquare, label: "Ahmad Adams", sub: "Changed status · 15m ago" },
                  { icon: Mail, label: "Cold Outbound Email", sub: "Crossett Ross · 25m ago" },
                ],
              },
            ].map((phone, pi) => (
              <ScrollFadeIn key={pi} delay={pi * 0.2}>
                <Parallax speed={pi === 0 ? 0.15 : -0.15}>
                  <div className="phone-frame w-[200px] md:w-[240px]">
                    <div className="flex items-center justify-between px-4 py-2 text-[9px] text-muted-foreground/80">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-1.5 rounded-sm bg-muted-foreground/40" />
                        <div className="w-3 h-1.5 rounded-sm bg-muted-foreground/40" />
                      </div>
                    </div>
                    <div className="px-4 py-3 border-b border-white/[0.06]">
                      <div className="text-xs font-semibold text-foreground">{phone.title}</div>
                      {phone.status && (
                        <div className="flex items-center gap-1 mt-0.5">
                          <CheckCircle2 strokeWidth={1.25} className="w-3 h-3 text-accent" />
                          <span className="text-[10px] text-accent font-medium">{phone.status}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-3 space-y-2">
                      {phone.items.map((item, ii) => (
                        <div key={ii} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-muted/30 border border-white/[0.04]">
                          <div className="w-6 h-6 rounded-md bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                            <item.icon strokeWidth={1.25} className="w-3 h-3 text-accent" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[10px] font-medium text-foreground leading-tight">{item.label}</div>
                            <div className="text-[9px] text-muted-foreground/80 mt-0.5">{item.sub}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Parallax>
              </ScrollFadeIn>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { icon: CheckCircle2, title: "Stay In Control", desc: "Respond to leads and monitor campaigns" },
              { icon: Clock, title: "Save Time", desc: "Automate outreach and complete tasks" },
              { icon: Target, title: "Close More Deals", desc: "Access lead history and top contacts" },
            ].map((item, i) => (
              <ScrollFadeIn key={item.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon strokeWidth={1.25} className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-sm font-semibold mb-1 text-foreground">{item.title}</h4>
                  <p className="text-xs text-muted-foreground/80">{item.desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AI SECTION ===== */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <ScrollFadeIn direction="left">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-accent font-medium mb-4">Intelligent Automation</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-5 leading-[1.1] text-foreground">
                  AI That Never Sleeps
                </h2>
                <p className="leading-relaxed mb-8 text-muted-foreground/80">
                  A sales assistant that writes your emails, finds leads, and follows up — automatically.
                </p>
                <ul className="space-y-4">
                  {[
                    "Generate personalized icebreakers in seconds",
                    "Score leads based on engagement and intent",
                    "Adjust campaign timing dynamically",
                    "Pause outreach when a meeting is booked",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check strokeWidth={1.25} className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-muted-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn direction="right">
              <div className="glass-card p-6 space-y-3">
                {[
                  { icon: Bot, label: "AI Icebreaker Generator", status: "Active", statusColor: "text-blue-500" },
                  { icon: Target, label: "Lead Scoring Engine", status: "Analyzing", statusColor: "text-accent" },
                  { icon: Clock, label: "Dynamic Timing", status: "Optimizing", statusColor: "text-accent" },
                  { icon: MessageSquare, label: "Auto Follow-ups", status: "3 Queued", statusColor: "text-sky-500" },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ x: 4, backgroundColor: "rgba(168,85,247,0.04)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-white/[0.06] cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                        <item.icon strokeWidth={1.25} className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{item.label}</span>
                    </div>
                    <span className={`text-xs font-medium ${item.statusColor}`}>{item.status}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* ===== BUILT FOR TEAMS ===== */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-4 text-foreground">
                Built for every team
              </h2>
            </div>
          </ScrollFadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Users, title: "Sales Teams", desc: "Book more meetings and never miss a follow-up." },
              { icon: BarChart3, title: "Marketing Teams", desc: "Run personalized campaigns that convert." },
              { icon: Globe, title: "Agencies", desc: "Manage multiple clients under one dashboard." },
              { icon: Sparkles, title: "Founders", desc: "Automate lead generation from day one." },
            ].map((card, i) => (
              <ScrollFadeIn key={card.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(168,85,247,0.08)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass-card-hover p-6 text-center h-full cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <card.icon strokeWidth={1.25} className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground/80">{card.desc}</p>
                </motion.div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES GRID ===== */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-4 text-foreground">
                Everything in one platform
              </h2>
            </div>
          </ScrollFadeIn>

          <PeakScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Sparkles, title: "AI-Personalized Outreach", desc: "Generate personalized icebreakers with dynamic variables." },
                { icon: Globe, title: "Data Enrichment", desc: "Discover verified emails, phone numbers, and company data." },
                { icon: BarChart3, title: "Real-Time Analytics", desc: "Measure performance across every campaign and channel." },
                { icon: Shield, title: "GDPR Compliance", desc: "Enterprise-grade encryption and compliance protocols." },
                { icon: Zap, title: "Seamless Integrations", desc: "HubSpot, Salesforce, Pipedrive, Slack, Gmail, Zapier." },
                { icon: Mail, title: "Unlimited Emails", desc: "Inbox rotation for safe scalability and deliverability." },
              ].map((card, i) => (
                <ScrollFadeIn key={card.title} delay={i * 0.06}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02, borderColor: "rgba(255,255,255,0.2)" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="glass-card p-6 h-full flex flex-col cursor-pointer transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(168,85,247,0.1)] group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors shadow-inner shadow-white/5">
                      <card.icon strokeWidth={1.25} className="w-6 h-6 text-accent drop-shadow-md group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">{card.title}</h3>
                    <p className="text-sm leading-relaxed flex-grow text-muted-foreground/80">{card.desc}</p>
                  </motion.div>
                </ScrollFadeIn>
              ))}
            </div>
          </PeakScrollReveal>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-4 text-foreground">
                What our users say
              </h2>
            </div>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { quote: "Our outreach was scattered. Now we manage email, LinkedIn, and calls in one place — meetings tripled.", avatar: avatarHS, name: "Harish S.", role: "Head of Sales", company: "CredFlow" },
              { quote: "We replaced multiple tools. The AI writes better intros than most SDRs. Reply rate went from 5% to 18%.", avatar: avatarGL, name: "Grace L.", role: "Growth Lead", company: "CloudWorks" },
              { quote: "The automation feels personal. Every message sounds human, and our leads love the experience.", avatar: avatarFD, name: "Frank D.", role: "Founder", company: "LeadBridge Agency" },
            ].map((t, i) => (
              <ScrollFadeIn key={t.name} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass-card p-6 h-full flex flex-col cursor-pointer transition-shadow duration-500 hover:shadow-[0_8px_40px_rgba(168,85,247,0.06)]"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} strokeWidth={1.25} className="w-3.5 h-3.5 fill-primary text-accent" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed mb-6 flex-grow text-muted-foreground/80">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <div className="text-sm font-medium text-foreground">{t.name}</div>
                      <div className="text-xs text-muted-foreground/80">{t.role}, {t.company}</div>
                    </div>
                  </div>
                </motion.div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS (STICKY SEQUENCE) ===== */}
      <section className="relative w-full bg-transparent pt-24 pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.04em] mb-4 text-foreground lowercase">
              how it <span className="text-muted-foreground/80">works</span>
            </h2>
          </div>
        </div>

        {/* Tall container to allow scrolling */}
        <div ref={containerRef} className="relative h-[300vh] w-full">
          {/* Sticky wrapper */}
          <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 w-full">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full max-h-[800px]">
                
                {/* Left Column: Steps */}
                <div className="relative z-10 space-y-8 md:space-y-16 py-10">
                  {steps.map((item, i) => {
                    // isActive when the current progress matches this step's index
                    const isActive = activeStep === i;
                    
                    return (
                      <div
                        key={item.step}
                        className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isActive ? "opacity-100 translate-x-4 scale-100" : "opacity-30 translate-x-0 scale-95"
                        }`}
                      >
                        <div className="text-5xl md:text-7xl font-black mb-4">
                          <span className={isActive ? "text-accent transition-colors duration-700 delay-100" : "text-foreground transition-colors duration-700"}>
                            {item.step}
                          </span>
                        </div>
                        <h3 className={`text-2xl md:text-4xl font-bold tracking-tight mb-4 transition-colors duration-700 ${isActive ? "text-foreground" : "text-muted-foreground/80"}`}>
                          {item.title}
                        </h3>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed max-w-md"
                          >
                            {item.desc}
                          </motion.p>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Right Column: Visuals */}
                <div className="relative h-[400px] lg:h-[600px] w-full max-w-2xl mx-auto rounded-3xl lg:rounded-[40px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.05] overflow-hidden flex items-center justify-center p-8 lg:p-12 shadow-2xl backdrop-blur-2xl">
                  {/* Subtle animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 opacity-50 mix-blend-screen" />
                  
                  <AnimatePresence mode="wait">
                    {activeStep === 0 && (
                      <motion.div
                        key="step-0"
                        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full p-6 lg:p-8 rounded-2xl glass-card border border-white/10"
                      >
                         <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                              <Search strokeWidth={1} className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                               <div className="h-2.5 w-32 bg-white/20 rounded mb-2"></div>
                               <div className="h-2 w-24 bg-white/10 rounded"></div>
                            </div>
                         </div>
                         <div className="space-y-3">
                            {[1, 2, 3].map((_, idx) => (
                              <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                                 <div className="flex items-center gap-3">
                                   <div className="w-8 h-8 rounded-full bg-white/10" />
                                   <div className="h-2 w-20 bg-white/20 rounded" />
                                 </div>
                                 <CheckCircle2 strokeWidth={1} className="w-4 h-4 text-green-400" />
                              </div>
                            ))}
                         </div>
                      </motion.div>
                    )}

                    {activeStep === 1 && (
                      <motion.div
                        key="step-1"
                        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full h-full flex items-center justify-center p-8 glass-card rounded-2xl border border-white/10"
                      >
                        <div className="absolute left-1/2 top-4 bottom-4 w-px bg-white/10 -translate-x-1/2" />
                        <div className="w-full space-y-8 relative z-10">
                          <div className="flex justify-start">
                             <div className="w-4/5 p-4 rounded-xl bg-accent/10 border border-primary/20 shadow-lg blur-[0.5px]">
                                <Mail strokeWidth={1} className="w-5 h-5 text-accent mb-2" />
                                <div className="h-1.5 w-16 bg-primary/40 rounded mb-1.5"></div>
                                <div className="h-1.5 w-full bg-primary/20 rounded"></div>
                             </div>
                          </div>
                          <div className="flex justify-end">
                             <div className="w-4/5 p-4 rounded-xl bg-accent/10 border border-accent/20 shadow-lg blur-[0.5px]">
                                <Linkedin strokeWidth={1} className="w-5 h-5 text-accent mb-2" />
                                <div className="h-1.5 w-20 bg-accent/40 rounded mb-1.5"></div>
                                <div className="h-1.5 w-full bg-accent/20 rounded"></div>
                             </div>
                          </div>
                          <div className="flex justify-start">
                             <div className="w-4/5 p-4 rounded-xl bg-white/5 border border-white/10 shadow-lg blur-[0.5px]">
                                <Phone strokeWidth={1} className="w-5 h-5 text-muted-foreground/80 mb-2" />
                                <div className="h-1.5 w-12 bg-white/20 rounded mb-1.5"></div>
                                <div className="h-1.5 w-3/4 bg-white/10 rounded"></div>
                             </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeStep === 2 && (
                      <motion.div
                        key="step-2"
                        initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full h-full flex flex-col items-center justify-center glass-card rounded-2xl border border-white/10 overflow-hidden"
                      >
                         <Bot strokeWidth={1} className="w-24 h-24 text-accent drop-shadow-[0_0_30px_rgba(168,85,247,0.4)] mb-8" />
                         
                         {/* Fake terminal / log output */}
                         <div className="w-full px-8 space-y-3 font-mono text-[10px] text-muted-foreground/80/60">
                           <div className="flex gap-2"><span className="text-accent/70">{">"}</span> Analyzing reply...</div>
                           <div className="flex gap-2 pl-4">Intent detected: <span className="text-green-400">Positive / Meeting Request</span></div>
                           <div className="flex gap-2"><span className="text-accent/70">{">"}</span> Pausing sequence 0x4F9...</div>
                           <div className="flex gap-2"><span className="text-accent/70">{">"}</span> Generating scheduling calendar link...</div>
                           <div className="flex gap-2 pl-4 text-white">Drafting email response [Ready to review]</div>
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-padding relative overflow-hidden">
        <div className="aurora-bg" />
        <div className="grain-overlay" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <ScrollFadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-5 text-foreground">
                Ready to supercharge your sales outreach?
              </h2>
              <p className="mb-8 text-muted-foreground/80">
                Get started for free, upgrade as you grow.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <AnimatedButton variant="primary">Start Free Trial</AnimatedButton>
                <AnimatedButton variant="outline">Book Demo</AnimatedButton>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
