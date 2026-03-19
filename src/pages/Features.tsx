import Navbar from "@/components/Navbar";
import AnimatedButton, { AnimatedArrowButton } from "@/components/AnimatedButton";
import Footer from "@/components/Footer";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import HeroVideo from "@/components/HeroVideo";
import { ScrollProgressBar, PeakScrollReveal } from "@/components/ScrollInteractions";
import {
  Mail, Linkedin, Phone, MessageSquare, Zap, BarChart3, Shield,
  Bot, ArrowRight, Check, Sparkles, Clock, Users, Globe,
  Headphones, Search, Calendar, Lock
} from "lucide-react";

const Features = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgressBar />
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-24 relative overflow-hidden">
        <HeroVideo />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <ScrollFadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-[-0.04em] mb-6 text-balance leading-[0.95]">
              Everything You Need to Power{" "}
              <span className="gradient-text">High-Performance Outreach</span>
            </h1>
          </ScrollFadeIn>
          <ScrollFadeIn delay={0.1}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              From AI-powered personalization to multichannel sequences — all the tools your team needs to close more deals.
            </p>
          </ScrollFadeIn>
          <ScrollFadeIn delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              <AnimatedArrowButton size="lg">Start Free Trial</AnimatedArrowButton>
              <AnimatedButton variant="outline" size="lg">Schedule Demo</AnimatedButton>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Multi-Channel */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollFadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-5">
                Multi-Channel Outreach
              </h2>
              <p className="text-muted-foreground text-lg">Reach prospects wherever they are.</p>
            </div>
          </ScrollFadeIn>

          <PeakScrollReveal>
            <div className="flex flex-wrap justify-center gap-4 mb-14">
              {[
                { icon: Mail, label: "Email" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: MessageSquare, label: "WhatsApp" },
                { icon: Phone, label: "SMS" },
                { icon: Headphones, label: "Calls" },
                { icon: Zap, label: "Sequences" },
              ].map((ch, i) => (
                <div key={ch.label} className="glass-card-hover px-6 py-4 flex items-center gap-3">
                  <ch.icon strokeWidth={1.25} className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{ch.label}</span>
                </div>
              ))}
            </div>
          </PeakScrollReveal>

          <div className="max-w-3xl mx-auto space-y-3">
            {[
              "Automated LinkedIn connection requests & follow-ups",
              "Hyper-personalized cold email sequences",
              "Smart call scheduling with CRM sync",
              "WhatsApp & SMS integration for higher open rates",
              "Unified inbox for all conversations",
            ].map((item, i) => (
              <ScrollFadeIn key={item} delay={i * 0.05}>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/20 border border-white/[0.04] hover:bg-muted/40 transition-colors cursor-default">
                  <Check strokeWidth={1.25} className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* AI Personalization */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollFadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-5">
                AI-Powered Personalization
              </h2>
            </div>
          </ScrollFadeIn>

          <PeakScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="glass-card-hover p-8 h-full">
                <Bot strokeWidth={1.25} className="w-10 h-10 text-primary mb-5 drop-shadow-md" />
                <h3 className="text-lg font-semibold text-foreground mb-3">Smart Message Generation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  AI crafts unique, contextual messages for every prospect based on their role, company, and recent activity.
                </p>
                <div className="glass-card p-4 space-y-2">
                  <div className="text-xs text-muted-foreground">AI Preview:</div>
                  <div className="text-sm text-foreground italic">
                    "Hi Sarah, I noticed CloudWorks just expanded into APAC — we've helped similar teams scale outreach 3x..."
                  </div>
                </div>
              </div>
              
              <div className="glass-card-hover p-8 h-full">
                <BarChart3 strokeWidth={1.25} className="w-10 h-10 text-secondary mb-5 drop-shadow-md" />
                <h3 className="text-lg font-semibold text-foreground mb-3">Performance Optimization</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  AI analyzes patterns and engagement data to continuously improve your outreach strategy.
                </p>
                <div className="flex gap-4 mt-4">
                  <div className="glass-card p-4 flex-1 text-center group cursor-default shadow-inner shadow-white/5">
                    <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform">40-60%</div>
                    <div className="text-xs text-muted-foreground">Higher Open Rates</div>
                  </div>
                  <div className="glass-card p-4 flex-1 text-center group cursor-default shadow-inner shadow-white/5">
                    <div className="text-2xl font-bold text-secondary group-hover:scale-110 transition-transform">3x</div>
                    <div className="text-xs text-muted-foreground">More Replies</div>
                  </div>
                </div>
              </div>
            </div>
          </PeakScrollReveal>
        </div>
      </section>

      {/* Smart Automation */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollFadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-5">
                Smart Automation
              </h2>
            </div>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Zap, title: "Behavior-Triggered Workflows", desc: "Automatically adjust based on how prospects engage." },
              { icon: Clock, title: "Smart Follow-ups", desc: "AI-timed follow-ups at the perfect moment." },
              { icon: Sparkles, title: "Zero Manual Labor", desc: "Every step automated while feeling personal." },
            ].map((card, i) => (
              <ScrollFadeIn key={card.title} delay={i * 0.1}>
                <div className="glass-card-hover p-8 h-full text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <card.icon strokeWidth={1.25} className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Unified Inbox */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollFadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-5">
                Unified Inbox
              </h2>
              <p className="text-muted-foreground text-lg">All conversations from every channel in one view.</p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="glass-card p-6 md:p-8 max-w-4xl mx-auto">
              <div className="space-y-3">
                {[
                  { name: "Sarah Johnson", channel: "LinkedIn", msg: "Thanks for reaching out! I'd love to learn more about...", time: "2m ago", icon: Linkedin },
                  { name: "Mike Rodriguez", channel: "Email", msg: "Re: Quick question about your enterprise plan...", time: "15m ago", icon: Mail },
                  { name: "Emily Chen", channel: "WhatsApp", msg: "Can we schedule a call for Thursday?", time: "1h ago", icon: MessageSquare },
                  { name: "David Park", channel: "Email", msg: "Forwarded your proposal to our team. Looking good!", time: "3h ago", icon: Mail },
                ].map((conv) => (
                  <div key={conv.name} className="flex items-center gap-4 p-4 rounded-xl bg-muted/20 border border-white/[0.04] hover:bg-muted/30 transition-colors duration-500 cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <conv.icon strokeWidth={1.25} className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-foreground">{conv.name}</span>
                        <span className="text-xs text-primary px-2 py-0.5 rounded-full bg-primary/10">{conv.channel}</span>
                      </div>
                      <p className="text-xs text-muted-foreground truncate mt-0.5">{conv.msg}</p>
                    </div>
                    <span className="text-xs text-muted-foreground shrink-0">{conv.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Complete Feature Suite */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollFadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-5">
                Complete Feature Suite
              </h2>
            </div>
          </ScrollFadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Headphones, title: "AI Call Assistant", desc: "AI-powered call scripts and real-time coaching." },
              { icon: Search, title: "Lead Enrichment", desc: "Auto-enrich contacts with verified data." },
              { icon: Bot, title: "AI Coaching", desc: "Feedback on messaging effectiveness." },
              { icon: Calendar, title: "Smart Scheduling", desc: "Book meetings without back-and-forth." },
              { icon: Zap, title: "Workflow Automation", desc: "Custom workflows with triggers and actions." },
              { icon: Mail, title: "Deliverability Optimizer", desc: "Inbox rotation and domain warming." },
              { icon: Users, title: "Team Collaboration", desc: "Shared templates, sequences, and analytics." },
              { icon: Lock, title: "Compliance & Security", desc: "GDPR, CAN-SPAM, SOC 2 compliance." },
            ].map((card, i) => (
              <ScrollFadeIn key={card.title} delay={i * 0.05}>
                <div className="glass-card-hover p-6 h-full">
                  <card.icon strokeWidth={1.25} className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-1.5 text-sm">{card.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <HeroVideo />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <ScrollFadeIn>
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-6">
              Ready to Transform Your Outreach?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <AnimatedArrowButton size="lg">Start Free Trial</AnimatedArrowButton>
              <AnimatedButton variant="outline" size="lg">Book a Demo</AnimatedButton>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
