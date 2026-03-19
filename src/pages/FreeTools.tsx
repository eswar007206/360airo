import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import HeroVideo from "@/components/HeroVideo";
import { ScrollProgressBar, TextReveal, PeakScrollReveal } from "@/components/ScrollInteractions";
import { AnimatedArrowButton } from "@/components/AnimatedButton";
import AnimatedButton from "@/components/AnimatedButton";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail, Shield, Calculator, FileCode, Code, Sparkles,
  Pen, Layers, Search, ArrowRight, Zap, Users, CheckCircle2
} from "lucide-react";

const tools = [
  { icon: Mail, title: "Email Deliverability Test", desc: "Test your deliverability score and identify issues before sending.", color: "from-blue-500/20 to-blue-500/20", iconColor: "text-blue-400" },
  { icon: Search, title: "Email Verifier", desc: "Verify email addresses in bulk to reduce bounces.", color: "from-blue-500/20 to-sky-500/20", iconColor: "text-blue-400" },
  { icon: Calculator, title: "Mailbox Calculator", desc: "Calculate optimal mailboxes for your outreach volume.", color: "from-blue-500/20 to-blue-500/20", iconColor: "text-blue-400" },
  { icon: Shield, title: "DMARC Generator", desc: "Generate DMARC records to protect your domain.", color: "from-blue-500/20 to-blue-500/20", iconColor: "text-blue-400" },
  { icon: Code, title: "SPF Generator", desc: "Create SPF records to authorize email servers.", color: "from-rose-500/20 to-pink-500/20", iconColor: "text-rose-400" },
  { icon: Sparkles, title: "Email Pitch Generator", desc: "Generate compelling cold email pitches using AI.", color: "from-primary/20 to-secondary/20", iconColor: "text-primary" },
  { icon: Pen, title: "Email Signature Builder", desc: "Create professional HTML email signatures.", color: "from-sky-500/20 to-blue-500/20", iconColor: "text-sky-400" },
  { icon: Layers, title: "Email Sequencer", desc: "Plan and preview your email sequence timing.", color: "from-fuchsia-500/20 to-pink-500/20", iconColor: "text-fuchsia-400" },
  { icon: FileCode, title: "Email Template Analyzer", desc: "Analyze templates for spam triggers and readability.", color: "from-lime-500/20 to-green-500/20", iconColor: "text-lime-400" },
];

const stats = [
  { value: "50K+", label: "Tools Used Monthly" },
  { value: "100%", label: "Free Forever" },
  { value: "0", label: "Signup Required" },
  { value: "9", label: "Pro Tools" },
];

const ToolCard = ({ tool, index }: { tool: typeof tools[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: 15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        whileHover={{ y: -12, scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="relative glass-card-hover p-7 h-full flex flex-col group cursor-pointer overflow-hidden"
      >
        {/* Background gradient blob */}
        <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${tool.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

        {/* Icon with animated ring */}
        <div className="relative mb-6">
          <motion.div
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center relative shadow-inner shadow-white/10`}
            whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <tool.icon strokeWidth={1.25} className={`w-6 h-6 ${tool.iconColor} relative z-10 drop-shadow-md`} />
          </motion.div>
          {/* Subtle pulse ring on hover */}
          <div className="absolute inset-0 w-14 h-14 rounded-2xl border border-white/20 group-hover:scale-[1.6] group-hover:opacity-0 transition-all duration-700" />
        </div>

        <h3 className="font-semibold text-foreground mb-2 text-[15px] group-hover:text-primary transition-colors duration-300">{tool.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{tool.desc}</p>

        <motion.div
          className="flex items-center gap-1.5 text-primary text-sm font-medium mt-5"
          whileHover={{ x: 4 }}
        >
          Try Now
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const FreeTools = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgressBar />
      <Navbar />

      {/* ===== HERO ===== */}
      <section ref={heroRef} className="pt-36 pb-28 relative overflow-hidden">
        <HeroVideo />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <Zap strokeWidth={1.25} className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-primary">No signup required · Instant access</span>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-[-0.04em] mb-6 text-balance leading-[0.95]"
          >
            Powerful Email Tools —{" "}
            <span className="gradient-text">100% Free</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Professional-grade tools to optimize your email outreach — no signup required.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-wrap justify-center gap-4"
          >
            <AnimatedArrowButton size="lg">Access Free Tools</AnimatedArrowButton>
            <AnimatedButton variant="outline" size="lg">See All Features</AnimatedButton>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/[0.15] flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-muted-foreground" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="py-14 border-y border-white/[0.04]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <ScrollFadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <motion.div
                    className="text-3xl md:text-4xl font-bold gradient-text"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: i * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm mt-1 text-muted-foreground">{stat.label}</div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEXT REVEAL ===== */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <TextReveal
              text="Every tool you need to master email deliverability, verify contacts, and craft high-converting outreach — all free, forever."
              className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-[-0.02em] leading-[1.2]"
            />
          </div>
        </div>
      </section>

      {/* ===== TOOLS GRID ===== */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-4 text-foreground">
                Your Free Toolkit
              </h2>
              <p className="max-w-lg mx-auto text-muted-foreground">
                Click any tool to get started — zero friction, instant results.
              </p>
            </div>
          </ScrollFadeIn>

          <PeakScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {tools.map((tool, i) => (
                <ToolCard key={tool.title} tool={tool} index={i} />
              ))}
            </div>
          </PeakScrollReveal>
        </div>
      </section>

      {/* ===== WHY FREE ===== */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <ScrollFadeIn direction="left">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-primary font-medium mb-4">Why Free?</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-5 leading-[1.1] text-foreground">
                  We believe great tools should be accessible to everyone
                </h2>
                <p className="leading-relaxed mb-8 text-muted-foreground">
                  These tools are part of our mission to help sales teams succeed. Use them without limits — and when you're ready for more, upgrade to the full platform.
                </p>
                <ul className="space-y-4">
                  {[
                    "No credit card or signup needed",
                    "Unlimited usage — no daily caps",
                    "Same tools our Pro users rely on",
                    "New tools added every month",
                  ].map((item) => (
                    <motion.li
                      key={item}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle2 strokeWidth={1.25} className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn direction="right">
              <div className="glass-card p-6 space-y-3">
                {[
                  { icon: Users, label: "50K+ monthly users", sub: "Growing every day" },
                  { icon: Zap, label: "Instant results", sub: "No waiting, no queues" },
                  { icon: Shield, label: "Privacy first", sub: "Your data is never stored" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    whileHover={{ x: 4, backgroundColor: "rgba(0,122,255,0.04)" }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-white/[0.06] cursor-pointer transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon strokeWidth={1.25} className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{item.label}</div>
                      <div className="text-xs text-muted-foreground">{item.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-padding relative overflow-hidden">
        <div className="aurora-bg" />
        <div className="grain-overlay" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <ScrollFadeIn>
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-6">
              Want Even More Power?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Unlock AI-powered multichannel outreach, CRM integrations, and advanced analytics.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <AnimatedArrowButton size="lg">Start Free Trial</AnimatedArrowButton>
              <AnimatedButton variant="outline" size="lg">See Pricing</AnimatedButton>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreeTools;
