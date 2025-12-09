import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen text-[#1f2329]">
      <header className="section-shell pt-10 pb-6 flex items-center justify-between gap-6">
        <div>
          <p className="handwritten-text text-[#f48c44] text-xl">Hannah Thayer, LMFT</p>
          <p className="text-sm text-neutral-600">
            Therapy & wellness counseling inspired by Mediterranean calm
          </p>
        </div>
        <Link
          href="/consultation"
          className="pill text-sm font-medium text-[#1f2329] hover:shadow-md transition-shadow"
        >
          Schedule a call
        </Link>
      </header>

      <main>
        {/* Hero */}
        <section className="relative section-shell py-12 md:py-20">
          <div className="sun-corner" aria-hidden />
          <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-12 items-center relative">
            <div className="space-y-6">
              <span className="handwritten-text text-lg text-[#3e879e]">
                Calm, warm, and clinically grounded
              </span>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight accent-underline">
                Professional therapy that feels human, steady, and inviting.
              </h1>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Together we will create a supportive space to work through anxiety, relationship
                transitions, and the moments that feel too heavy to carry alone. Evidence-based
                care, delivered with warmth.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/consultation"
                  className="rounded-full bg-[#f48c44] text-white px-6 py-3 font-medium shadow-md shadow-[#f48c44]/30 hover:bg-[#d76c25] transition-colors"
                >
                  Book a consultation
                </Link>
                <Link
                  href="#services"
                  className="rounded-full border border-[#1f2329]/10 px-6 py-3 font-medium text-[#1f2329] hover:border-[#3e879e]/50 hover:text-[#3e879e] transition-colors"
                >
                  Explore services
                </Link>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                {[
                  { title: "Anxiety & stress", note: "Grounding tools + CBT" },
                  { title: "Relationships", note: "Couples + communication" },
                  { title: "Life transitions", note: "Career, family, identity" },
                ].map((item) => (
                  <div key={item.title} className="card-soft p-4">
                    <p className="text-sm text-[#3e879e] font-semibold">{item.title}</p>
                    <p className="text-sm text-neutral-600 mt-1">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-soft p-4 md:p-6 relative overflow-hidden photo-card">
              <div className="relative rounded-2xl overflow-hidden bg-[#fff7f0]">
                <Image
                  src="/hannah-hero.jpg"
                  alt="Portrait of Hannah Thayer, LMFT"
                  width={960}
                  height={1280}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="photo-note">
                <div>
                  <p className="text-sm font-semibold text-[#1f2329]">Warm, approachable care</p>
                  <p className="text-xs text-neutral-600">Telehealth sessions (CA)</p>
                </div>
                <span className="handwritten-text text-[#f48c44] text-lg">Hannah</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section-shell py-16 md:py-20">
          <div className="max-w-3xl mb-10">
            <span className="handwritten-text text-[#f48c44] text-lg">Services</span>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-2">
              Care that is personalized, structured, and compassionate.
            </h2>
            <p className="text-lg text-neutral-700 mt-4">
              We will set clear goals together, then move at a pace that honors both your needs and
              your capacity.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Individual therapy",
                color: "#3e879e",
                desc:
                  "Process anxiety, burnout, grief, and self-doubt with a calm, structured partner.",
              },
              {
                title: "Couples counseling",
                color: "#f48c44",
                desc:
                  "Strengthen communication, navigate conflict, and reconnect with shared values.",
              },
              {
                title: "Work & life transitions",
                color: "#c57b5a",
                desc:
                  "Career changes, caregiving, parenthood, relocation, or identity shifts—move forward with confidence.",
              },
            ].map((service) => (
              <div key={service.title} className="card-soft p-6">
                <div className="handwritten-text text-lg" style={{ color: service.color }}>
                  {service.title}
                </div>
                <p className="text-base text-neutral-700 mt-3 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Approach */}
        <section className="section-shell py-16 md:py-20">
          <div className="max-w-3xl mb-10">
            <span className="handwritten-text text-[#3e879e] text-lg">Approach</span>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-2">
              Clear steps, steady support.
            </h2>
            <p className="text-lg text-neutral-700 mt-4">
              Blending CBT, mindfulness, and attachment-informed care with a warm, collaborative
              tone.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "01 / Listen",
                desc: "We map what matters most, define goals, and pace sessions to your comfort.",
              },
              {
                title: "02 / Practice",
                desc:
                  "Practical tools for regulation, communication, and self-compassion between sessions.",
              },
              {
                title: "03 / Integrate",
                desc: "Sustain progress with rituals, reflections, and small changes that feel doable.",
              },
            ].map((step) => (
              <div key={step.title} className="card-soft p-6">
                <p className="text-sm font-semibold text-[#3e879e]">{step.title}</p>
                <p className="text-base text-neutral-700 mt-3 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-shell py-16 md:py-20">
          <div className="max-w-3xl mb-10">
            <span className="handwritten-text text-[#f48c44] text-lg">Client reflections</span>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-2">
              &ldquo;I feel calmer, clearer, and less alone.&rdquo;
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Hannah balances practical tools with genuine care. I finally feel like I have a roadmap.",
                name: "Client, anxiety & life transition",
              },
              {
                quote:
                  "Our sessions helped us communicate without shutting down. The pace felt respectful and warm.",
                name: "Couples client",
              },
            ].map((item) => (
              <div key={item.name} className="card-soft p-6">
                <p className="text-lg leading-relaxed text-neutral-800">“{item.quote}”</p>
                <p className="handwritten-text text-[#3e879e] text-lg mt-4">{item.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="section-shell pb-20">
          <div className="card-soft p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-3">
                <span className="handwritten-text text-[#3e879e] text-lg">Next step</span>
                <h3 className="text-2xl md:text-3xl font-semibold">
                  Let&apos;s plan your first session.
                </h3>
                <p className="text-lg text-neutral-700">
                  Telehealth appointments available across California. Use the consultation form to
                  request your preferred time.
                </p>
              </div>
              <Link
                href="/consultation"
                className="self-start rounded-full bg-[#f48c44] text-white px-6 py-3 font-medium shadow-md shadow-[#f48c44]/30 hover:bg-[#d76c25] transition-colors"
              >
                Schedule a consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="section-shell pb-12 text-sm text-neutral-600">
        <div className="soft-divider mb-6" />
        <p>© {new Date().getFullYear()} Therapy & Wellness. All rights reserved.</p>
      </footer>
    </div>
  );
}
