import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="container py-4">
        <div className="flex items-center justify-between">
          <div className="min-w-0 flex-1">
            <p className="handwritten text-[#f48c44] text-xl sm:text-2xl">Hannah Thayer, LMFT</p>
          </div>
          <Link href="/consultation" className="btn btn-primary text-sm sm:text-base">
            Schedule
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero-bg">
          <div className="container section">
            <div className="text-center mb-8">
              <p className="handwritten text-[#3e879e] text-xl mb-3">
                You deserve support.
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                Find clarity, calm, and wellbeing.
              </h1>
              <p className="text-lg text-neutral-600 max-w-lg mx-auto">
                Warm, evidence-based therapy for anxiety, OCD, identity, and life transitions. 
                Telehealth sessions across California.
              </p>
            </div>

            {/* Photo */}
            <div className="photo-frame max-w-xs mx-auto mb-8">
              <Image
                src="/hannah-hero.jpg"
                alt="Hannah Thayer, LMFT"
                width={400}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* CTA Buttons - Full width on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-center">
              <Link href="/consultation" className="btn btn-primary btn-full">
                Schedule a consultation
              </Link>
              <Link href="#services" className="btn btn-secondary btn-full">
                Learn more
              </Link>
            </div>
          </div>
        </section>

        {/* Welcome section */}
        <section className="container section">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Welcome
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-4">
            I&apos;m Hannah, a licensed therapist specializing in anxiety, OCD, identity exploration, 
            and overall mental health and wellbeing. I help individuals work through the thoughts 
            and patterns that feel overwhelming or stuck.
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed">
            My approach blends evidence-based techniques with genuine warmth. Together, we&apos;ll 
            create a supportive space where you can feel heard, understood, and equipped with 
            practical tools for lasting change.
          </p>
        </section>

        <div className="container"><div className="divider" /></div>

        {/* Services */}
        <section id="services" className="container section">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Services
          </h2>
          <p className="text-neutral-600 mb-6">
            Personalized care tailored to your needs.
          </p>

          <div className="space-y-4">
            <div className="service-item">
              <h3 className="font-semibold text-lg text-[#3e879e] mb-2">
                Anxiety &amp; OCD
              </h3>
              <p className="text-neutral-700">
                Learn to manage racing thoughts, intrusive patterns, and overwhelming worry. 
                We&apos;ll build practical tools grounded in CBT and exposure therapy.
              </p>
            </div>

            <div className="service-item">
              <h3 className="font-semibold text-lg text-[#f48c44] mb-2">
                Identity &amp; Self-Discovery
              </h3>
              <p className="text-neutral-700">
                Explore questions around identity, values, and who you want to become. 
                A supportive space for self-understanding and growth.
              </p>
            </div>

            <div className="service-item">
              <h3 className="font-semibold text-lg text-[#c57b5a] mb-2">
                Life Transitions &amp; Wellbeing
              </h3>
              <p className="text-neutral-700">
                Navigate career changes, burnout, grief, or major life shifts. Build resilience 
                and move forward with confidence.
              </p>
            </div>
          </div>
        </section>

        <div className="container"><div className="divider" /></div>

        {/* Approach */}
        <section className="container section">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            My Approach
          </h2>
          <p className="text-neutral-600 mb-6">
            Clear steps, steady support.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#3e879e] text-white flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <p className="font-semibold mb-1">Listen</p>
                <p className="text-neutral-700">
                  We map what matters most, define goals, and pace sessions to your comfort.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#3e879e] text-white flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <p className="font-semibold mb-1">Practice</p>
                <p className="text-neutral-700">
                  Practical tools for regulation, communication, and self-compassion.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#3e879e] text-white flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <p className="font-semibold mb-1">Integrate</p>
                <p className="text-neutral-700">
                  Sustain progress with rituals, reflections, and small changes that feel doable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="container"><div className="divider" /></div>

        {/* Testimonials */}
        <section className="container section">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            What Clients Say
          </h2>

          <div className="space-y-6">
            <div className="quote">
              <p className="text-lg text-neutral-800 mb-2">
                &ldquo;Hannah balances practical tools with genuine care. I finally feel like I have a roadmap.&rdquo;
              </p>
              <p className="handwritten text-[#3e879e] text-lg">
                — Client, anxiety &amp; life transition
              </p>
            </div>

            <div className="quote">
              <p className="text-lg text-neutral-800 mb-2">
                &ldquo;I felt understood from the first session. The pace was respectful and I never felt rushed.&rdquo;
              </p>
              <p className="handwritten text-[#3e879e] text-lg">
                — Client, OCD &amp; identity
              </p>
            </div>
          </div>
        </section>

        <div className="container"><div className="divider" /></div>

        {/* CTA Section */}
        <section className="container section">
          <div className="card p-6 sm:p-8 text-center">
            <p className="handwritten text-[#f48c44] text-xl mb-2">Ready to begin?</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Let&apos;s plan your first session.
            </h2>
            <p className="text-neutral-600 mb-6">
              Telehealth appointments available across California.
            </p>
            <Link href="/consultation" className="btn btn-primary">
              Schedule a consultation
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container py-8">
        <div className="divider mb-6" />
        <div className="text-center text-sm text-neutral-500">
          <p className="mb-2">Hannah Thayer, LMFT · Telehealth Therapy · California</p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
