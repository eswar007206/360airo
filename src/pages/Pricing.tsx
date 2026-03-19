import { useState } from "react";
import Navbar from "@/components/Navbar";
import AnimatedButton, { AnimatedArrowButton } from "@/components/AnimatedButton";
import Footer from "@/components/Footer";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import HeroVideo from "@/components/HeroVideo";
import { ScrollProgressBar } from "@/components/ScrollInteractions";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    label: "BEST FOR INDIVIDUALS",
    name: "Starter",
    monthlyPrice: "$49",
    yearlyPrice: "$49",
    priceSub: "billed yearly",
    features: ["50 new leads per month", "Multichannel outreach", "Basic reporting and analytics"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    label: "MOST POPULAR",
    name: "Pro",
    monthlyPrice: "$99",
    yearlyPrice: "$99",
    priceSub: "billed yearly",
    features: ["400 new leads per month", "Advanced automation", "CRM integrations", "In-depth analytics"],
    cta: "Get Started",
    highlighted: true,
  },
  {
    label: "BEST FOR TEAMS",
    name: "Enterprise",
    monthlyPrice: "Custom pricing",
    yearlyPrice: "Custom pricing",
    priceSub: "",
    features: ["Unlimited leads per month", "Dedicated account manager", "Advanced team settings", "API access & custom solutions"],
    cta: "Contact Us",
    highlighted: false,
  },
];

const Pricing = () => {
  const [yearly, setYearly] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgressBar />
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-24 relative overflow-hidden">
        <HeroVideo />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <ScrollFadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.04em] mb-5 text-balance leading-[0.95]">
              Flexible pricing that<br />scales with your team
            </h1>
          </ScrollFadeIn>
          <ScrollFadeIn delay={0.1}>
            <p className="text-lg text-muted-foreground mb-10">
              Get started for free, upgrade as you grow
            </p>
          </ScrollFadeIn>

          {/* Toggle */}
          <ScrollFadeIn delay={0.15}>
            <div className="inline-flex items-center gap-0 glass-card p-1 rounded-full">
              <button
                onClick={() => setYearly(false)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-500",
                  !yearly ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-500 flex items-center gap-1.5",
                  yearly ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                Yearly
                <span className="text-[10px] bg-primary-foreground/20 px-1.5 py-0.5 rounded-full">Save</span>
              </button>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto items-stretch">
            {plans.map((plan, i) => (
              <ScrollFadeIn key={plan.name} delay={i * 0.12}>
                <div className={cn(
                  "glass-card-hover p-8 h-full flex flex-col text-center relative",
                  plan.highlighted && "border-primary/30 shadow-[0_0_60px_rgba(0,122,255,0.08)] scale-[1.03]"
                )}>
                  <div className="text-[10px] tracking-[0.2em] text-muted-foreground font-medium mb-4 uppercase">
                    {plan.label}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{plan.name}</h3>
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {plan.name === "Enterprise" ? "" : (yearly ? plan.yearlyPrice : plan.monthlyPrice)}
                    {plan.name !== "Enterprise" && <span className="text-base font-normal text-muted-foreground">/mo</span>}
                    {plan.name === "Enterprise" && <span className="text-lg font-normal text-muted-foreground">Custom pricing</span>}
                  </div>
                  {plan.priceSub && <div className="text-xs text-muted-foreground mb-6">{plan.priceSub}</div>}
                  {!plan.priceSub && <div className="mb-6" />}

                  <ul className="space-y-3 mb-8 flex-grow text-left">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <AnimatedButton
                    variant={plan.highlighted ? "primary" : "outline"}
                    className="w-full"
                  >
                    {plan.cta}
                  </AnimatedButton>
                </div>
              </ScrollFadeIn>
            ))}
          </div>

          <ScrollFadeIn delay={0.3}>
            <p className="text-center text-sm text-muted-foreground mt-10">
              Free 14-day trial. Cancel anytime. All features included.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <HeroVideo />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <ScrollFadeIn>
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-6">
              Ready to supercharge<br />your sales outreach?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">Get started for free, upgrade as you grow.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <AnimatedArrowButton size="lg">Start Free Trial</AnimatedArrowButton>
              <AnimatedButton variant="outline" size="lg">Book Demo</AnimatedButton>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
