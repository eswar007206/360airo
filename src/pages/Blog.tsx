import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import HeroVideo from "@/components/HeroVideo";
import { ScrollProgressBar } from "@/components/ScrollInteractions";
import { ArrowRight } from "lucide-react";

const posts = [
  { title: "How AI is Revolutionizing Cold Email Outreach in 2026", category: "AI & Sales", date: "Mar 10, 2026", excerpt: "Discover how AI-powered personalization is changing the game for sales teams worldwide." },
  { title: "The Ultimate Guide to LinkedIn Automation", category: "LinkedIn", date: "Mar 5, 2026", excerpt: "Everything you need to know about automating your LinkedIn outreach while staying compliant." },
  { title: "Email Deliverability: 15 Tips to Land in the Inbox", category: "Email", date: "Feb 28, 2026", excerpt: "Protect your sender reputation and ensure your emails reach your prospects every time." },
  { title: "Multichannel Outreach: Why Single-Channel is Dead", category: "Strategy", date: "Feb 20, 2026", excerpt: "Learn why the best sales teams use at least 3 channels in their outreach sequences." },
  { title: "GDPR Compliance for Sales Teams: A Complete Guide", category: "Compliance", date: "Feb 15, 2026", excerpt: "Stay compliant while running aggressive outreach campaigns across Europe." },
  { title: "How to Book 40% More Meetings with Smart Calling", category: "Calling", date: "Feb 8, 2026", excerpt: "Combine AI insights with strategic calling to dramatically increase your meeting rates." },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgressBar />
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-24 relative overflow-hidden">
        <HeroVideo />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <ScrollFadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-[-0.04em] mb-6 leading-[0.95]">
              360Airo <span className="gradient-text">Blog</span>
            </h1>
          </ScrollFadeIn>
          <ScrollFadeIn delay={0.1}>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Stay Ahead in Prospecting — AI-powered sales insights, strategies, and updates.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {posts.map((post, i) => (
              <ScrollFadeIn key={post.title} delay={i * 0.06}>
                <article className="glass-card-hover p-7 h-full flex flex-col group cursor-pointer">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="text-xs text-primary font-medium px-2.5 py-1 rounded-full bg-primary/10">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-500 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{post.excerpt}</p>
                  <div className="flex items-center gap-1.5 text-primary text-sm font-medium mt-5 group-hover:gap-3 transition-all duration-500">
                    Read More <ArrowRight className="w-4 h-4" />
                  </div>
                </article>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
