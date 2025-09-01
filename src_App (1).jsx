import React, { useState } from "react";

// ✅ Drop this file into a Vite/Next/CRA project and it will just work.
// ✅ Tailwind classes are used for styling. If you don't use Tailwind yet,
//    you can keep the structure and swap classes for your own CSS.
// ✅ All buttons link to in-page anchors. Replace hrefs with your payment links (Stripe/Gumroad/etc.).

export default function IndicatorLandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  const features = [
    {
      title: "Non‑Repainting Signals",
      desc: "Engineered to minimize repainting and alert you in real time with clear entries/exits.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 12l4 4 12-12" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Adaptive Trend Engine",
      desc: "Combines momentum, volatility and structure to adapt across markets & timeframes.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 17l6-6 4 4 7-7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Smart Alerts",
      desc: "Push, email, and webhooks compatible via TradingView alerts for hands‑off monitoring.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2zm6-6V11a6 6 0 1 0-12 0v5l-2 2h18l-2-2z"/>
        </svg>
      ),
    },
    {
      title: "Multi‑Market Coverage",
      desc: "Forex, crypto, indices, commodities — works on M1 to 1D, scalps to swings.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"/>
        </svg>
      ),
    },
    {
      title: "Clean Visuals",
      desc: "Candle coloring, zones, dashboards, and labels to simplify decision‑making.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 20h16M8 4h2v12H8zM14 8h2v8h-2z"/>
        </svg>
      ),
    },
    {
      title: "Beginner‑Friendly",
      desc: "Templates, quick‑start videos, and one‑pager rules get you live in minutes.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422A12 12 0 0 1 21 20.5 11.96 11.96 0 0 0 12 18a11.96 11.96 0 0 0-9 2.5 12 12 0 0 1 2.84-9.922L12 14z"/>
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      q: "Does it repaint?",
      a: "Signals are designed to avoid repainting after candle close. Backtests should be done responsibly and forward‑tested before live use.",
    },
    {
      q: "What platforms are supported?",
      a: "TradingView (invite‑only script). No paid TradingView plan required for access. Alerts work on mobile & desktop.",
    },
    {
      q: "Which markets/timeframes?",
      a: "Forex, crypto, indices, commodities from M1 to 1D. For beginners, we suggest starting on M5–M15.",
    },
    {
      q: "How do I get access?",
      a: "Purchase a plan, share your TradingView username, and you’ll be invited within minutes. Access renews automatically unless canceled.",
    },
    {
      q: "Refunds & cancellation?",
      a: "You can cancel anytime from your billing portal. Due to the nature of digital access, refunds are limited — please read the policy.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/60 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400" />
              <span className="font-semibold tracking-tight">AstraSignals</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
              {navItems.map((n) => (
                <a key={n.label} href={n.href} className="hover:text-white transition">
                  {n.label}
                </a>
              ))}
              <a href="#pricing" className="rounded-2xl bg-white text-neutral-900 px-4 py-2 font-medium hover:shadow-lg transition">
                Get Access
              </a>
            </nav>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/15 p-2"
              aria-label="Toggle menu"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10">
            <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3 text-white/80">
              {navItems.map((n) => (
                <a key={n.label} href={n.href} onClick={() => setMobileOpen(false)} className="py-2">
                  {n.label}
                </a>
              ))}
              <a href="#pricing" onClick={() => setMobileOpen(false)} className="rounded-xl bg-white text-neutral-900 px-4 py-2 font-medium text-center">
                Get Access
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30" aria-hidden>
          <div className="absolute -top-24 right-1/4 h-72 w-72 bg-indigo-500/30 blur-3xl rounded-full"/>
          <div className="absolute top-40 left-10 h-64 w-64 bg-emerald-500/30 blur-3xl rounded-full"/>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
                <span className="h-2 w-2 rounded-full bg-emerald-400"/> Live on TradingView · Invite‑Only Script
              </p>
              <h1 className="mt-4 text-4xl/tight sm:text-5xl/tight font-semibold tracking-tight">
                Trade with clarity: <span className="bg-gradient-to-r from-sky-400 to-emerald-300 bg-clip-text text-transparent">AI‑assisted</span> signals,
                clean visuals, and smart alerts.
              </h1>
              <p className="mt-4 text-white/70 max-w-xl">
                Turn noise into structure. AstraSignals highlights high‑probability zones, trend shifts, and risk in real time — across Forex, Crypto, and Indices.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#pricing" className="inline-flex items-center justify-center rounded-2xl bg-white text-neutral-900 px-6 py-3 font-medium hover:shadow-xl">
                  Get Access
                </a>
                <a href="#how" className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-6 py-3 font-medium text-white/90">
                  See How It Works
                </a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-white/60">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24 7.46 13.97 5.82 21z"/></svg>
                  ))}
                </div>
                <span>Trusted by 50,000+ traders</span>
                <span>•</span>
                <span>Cancel anytime</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 shadow-2xl overflow-hidden">
                {/* Placeholder chart mock */}
                <div className="h-full w-full p-4">
                  <div className="h-full w-full rounded-xl bg-neutral-950/60 border border-white/10 p-4">
                    <div className="flex items-center justify-between text-xs text-white/50">
                      <span>EURUSD · M5</span>
                      <span>AstraSignals v3.2</span>
                    </div>
                    <div className="mt-3 h-[260px] w-full bg-[linear-gradient(to_bottom,transparent_24px,rgba(255,255,255,0.06)_25px),linear-gradient(to_right,transparent_24px,rgba(255,255,255,0.06)_25px)] bg-[length:100%_25px,25px_100%] rounded-md relative overflow-hidden">
                      {/* buy/sell markers */}
                      {Array.from({ length: 7 }).map((_, i) => (
                        <div key={i} className="absolute" style={{ left: `${6 + i * 12}%`, top: `${35 + Math.sin(i) * 10}%` }}>
                          <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[10px] ${i % 2 ? "bg-emerald-500/30 text-emerald-200" : "bg-rose-500/30 text-rose-200"}`}>
                            {i % 2 ? "BUY" : "SELL"}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                        <div className="text-white/60">Trend</div>
                        <div className="text-emerald-300 font-semibold">Bullish</div>
                      </div>
                      <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                        <div className="text-white/60">Volatility</div>
                        <div className="text-white">Medium</div>
                      </div>
                      <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                        <div className="text-white/60">Risk</div>
                        <div className="text-amber-300">Moderate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-10 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-white/50">Seen in & used by communities on</p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 opacity-70">
            {[
              "TradingView", "Discord", "Reddit", "YouTube", "X (Twitter)", "Telegram",
            ].map((brand) => (
              <div key={brand} className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 py-3 text-sm">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">Everything you need to trade with confidence</h2>
            <p className="mt-3 text-white/70">From fast entries to risk guidance — all inside a clean TradingView overlay.</p>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.06] transition">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-emerald-300">
                    {f.icon}
                  </div>
                  <h3 className="font-medium">{f.title}</h3>
                </div>
                <p className="mt-3 text-sm text-white/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-16 lg:py-20 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">How it works</h2>
            <p className="mt-3 text-white/70">Three steps to go from signup to first alert.</p>
          </div>
          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Choose a plan",
                desc: "Pick Starter, Pro, or Lifetime. You’ll receive a billing portal and onboarding email.",
              },
              {
                step: "02",
                title: "Share your TradingView username",
                desc: "We send an invite for instant access to the indicator (invite‑only script).",
              },
              {
                step: "03",
                title: "Load the template & set alerts",
                desc: "Add the indicator to your chart, select a preset, and enable push/email/webhook alerts.",
              },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-white/50 text-sm">Step {s.step}</div>
                <h3 className="mt-1 text-lg font-medium">{s.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">Loved by traders worldwide</h2>
            <p className="mt-3 text-white/70">Real stories from retail and prop traders using AstraSignals daily.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Ananya S.",
                role: "FX Swing Trader",
                quote: "Clear rules + alerts = fewer impulsive trades. The candle coloring is a game changer.",
              },
              {
                name: "Leo M.",
                role: "Crypto Scalper",
                quote: "The trend engine and S/R zones kept me on the right side all week.",
              },
              {
                name: "Ravi K.",
                role: "Indices Day Trader",
                quote: "Setup took 5 minutes. Alerts to my phone while I’m away — super convenient.",
              },
            ].map((t, i) => (
              <figure key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/10"/>
                  <figcaption>
                    <div className="font-medium">{t.name}</div>
                    <div className="text-xs text-white/60">{t.role}</div>
                  </figcaption>
                </div>
                <blockquote className="mt-3 text-white/80 text-sm">“{t.quote}”</blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 lg:py-20 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">Simple pricing</h2>
            <p className="mt-3 text-white/70">Start small, scale when you’re ready. Cancel anytime.</p>
          </div>
          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            {[
              {
                name: "Starter",
                price: "₹99 for 30 days",
                sub: "then ₹2,999 / month",
                cta: "Start Trial",
                popular: false,
                features: ["Full indicator access", "1 TradingView username", "Email support", "Quick‑start video"],
              },
              {
                name: "Pro",
                price: "₹4,999 / month",
                sub: "or ₹49,999 / year",
                cta: "Go Pro",
                popular: true,
                features: [
                  "All Starter features",
                  "2 TradingView usernames",
                  "Discord community + watchlists",
                  "Webhook & strategy templates",
                ],
              },
              {
                name: "Lifetime",
                price: "₹49,999 one‑time",
                sub: "limited seats",
                cta: "Get Lifetime",
                popular: false,
                features: [
                  "All Pro features",
                  "Priority support",
                  "All future updates",
                  "Early access to new tools",
                ],
              },
            ].map((p) => (
              <div key={p.name} className={`relative rounded-2xl border ${p.popular ? "border-emerald-400/40" : "border-white/10"} bg-white/5 p-6 flex flex-col`}>
                {p.popular && (
                  <span className="absolute -top-3 left-4 rounded-full bg-emerald-400 px-3 py-1 text-xs font-semibold text-neutral-900 shadow">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-medium">{p.name}</h3>
                <div className="mt-2 text-2xl font-semibold">{p.price}</div>
                <div className="text-sm text-white/60">{p.sub}</div>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 12l4 4 12-12"/></svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#checkout" className="mt-6 inline-flex items-center justify-center rounded-xl bg-white text-neutral-900 px-4 py-2 font-medium hover:shadow-lg">
                  {p.cta}
                </a>
                <p className="mt-2 text-xs text-white/50">Secure checkout · Stripe/UPI/PayPal</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">Frequently asked questions</h2>
            <p className="mt-3 text-white/70">Can’t find what you’re looking for? Email <a className="underline" href="mailto:support@astrasignals.com">support@astrasignals.com</a>.</p>
          </div>
          <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
            {faqs.map((f, i) => (
              <div key={f.q} className="p-5">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between text-left">
                  <span className="font-medium">{f.q}</span>
                  <svg viewBox="0 0 24 24" className={`h-5 w-5 transition ${openFaq === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
                {openFaq === i && <p className="mt-2 text-sm text-white/70">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 md:p-12 text-center">
            <h3 className="text-2xl font-semibold">Ready to level up your charts?</h3>
            <p className="mt-2 text-white/70">Get instant TradingView access after checkout. Cancel anytime.</p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#pricing" className="rounded-2xl bg-white text-neutral-900 px-6 py-3 font-medium hover:shadow-xl">Choose a Plan</a>
              <a href="mailto:sales@astrasignals.com" className="rounded-2xl border border-white/15 px-6 py-3 font-medium text-white/90">Talk to Sales</a>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer & Footer */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
            <p className="font-medium text-white">Risk Disclaimer</p>
            <p className="mt-2">Trading involves substantial risk. Past performance is not indicative of future results. No indicator can guarantee profits. This is educational software; use at your own discretion and always follow your local laws and regulations.</p>
          </div>
          <footer className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400"/>
              <span>AstraSignals © {new Date().getFullYear()}</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Refund Policy</a>
              <a href="mailto:support@astrasignals.com" className="hover:text-white">Contact</a>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}