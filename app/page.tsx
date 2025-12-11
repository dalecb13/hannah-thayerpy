import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="container py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 min-w-0">
            <Image 
              src="/logo-icon.svg" 
              alt="Logo" 
              width={36} 
              height={36}
              className="shrink-0"
            />
            <span className="handwritten text-[#f48c44] text-xl sm:text-2xl truncate">Hannah Thayer, LPCC</span>
          </Link>
          <Link href="/consultation" className="btn btn-primary text-sm sm:text-base shrink-0">
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
              <p className="text-lg text-neutral-600 max-w-lg mx-auto mb-4">
                Warm, evidence-based therapy for anxiety, OCD, identity, and life transitions. 
                Telehealth sessions across California.
              </p>
              <span className="badge">Se habla español</span>
            </div>

            {/* Photo */}
            <div className="photo-frame max-w-xs mx-auto mb-8">
              <Image
                src="/hannah-hero.jpg"
                alt="Hannah Thayer, LPCC"
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
              <Link href="#about" className="btn btn-secondary btn-full">
                Learn more
              </Link>
            </div>
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="container section">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-4">
            Hi! My name is Hannah Thayer and I am a Licensed Professional Clinical Counselor (LPCC) 
            with 5 years of clinical experience counseling individuals, couples, families, and groups. 
            As a therapist, I find it fulfilling to see clients move towards growth while also becoming 
            more comfortable with themselves and their needs as a person.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="credential-badge">5+ years experience</span>
            <span className="credential-badge">3,000+ client hours</span>
            <span className="credential-badge">English &amp; Spanish</span>
          </div>
        </section>

        <div className="container"><div className="divider" /></div>

        {/* My Approach */}
        <section className="container section">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            My Approach
          </h2>
          <p className="text-neutral-600 mb-6">
            Collaborative, evidence-based, and tailored to you.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-[#3e879e] mb-2">Therapeutic Methods</h3>
              <p className="text-neutral-700 leading-relaxed">
                I use CBT, DBT, ACT, and mindfulness/somatic-based strategies. I enjoy challenging 
                a client&apos;s mindset in order to help them gain more insight into how their thoughts 
                and behavior patterns affect them both positively and negatively. I believe that all 
                these approaches are a collaborative process between a client and therapist so that 
                the client can eventually become their own therapist to target their own needs and 
                move towards their goals.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[#f48c44] mb-2">My Communication Style</h3>
              <p className="text-neutral-700 leading-relaxed">
                My communication style as a therapist is warm, open, and collaborative. I strive to 
                create a safe and non-judgmental space where clients feel heard and understood. I aim 
                to be clear and direct when explaining concepts, while also being sensitive to each 
                client&apos;s emotional needs. I listen deeply and ask thoughtful questions to help 
                clients explore their thoughts and feelings. My approach is adaptable—whether clients 
                need gentle encouragement or more structured guidance, I tailor my communication to 
                meet them where they are in their journey.
              </p>
            </div>
          </div>
        </section>

        <div className="container"><div className="divider" /></div>

        {/* Your First Session */}
        <section className="container section">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Your First Session
          </h2>
          <p className="text-neutral-600 mb-6">
            What to expect when we meet.
          </p>

          <div className="card p-5 sm:p-6">
            <p className="text-neutral-700 leading-relaxed mb-4">
              In our first session, we&apos;ll focus on getting to know each other. I&apos;ll ask about 
              what brought you to therapy, your current concerns, and any relevant background information. 
              This is also your chance to ask questions and share anything you feel comfortable with.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              We&apos;ll talk about goals for therapy and how the process works, including confidentiality. 
              The aim is to create a safe space and start building a trusting relationship, so you can 
              feel supported moving forward.
            </p>
          </div>
        </section>

        <div className="container"><div className="divider" /></div>

        {/* How I Set Goals */}
        <section className="container section">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            How I Set Goals
          </h2>
          <p className="text-neutral-600 mb-6">
            Focused sessions, meaningful progress.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4">
            I approach goal setting with clients as an ongoing thing. I prefer to have a goal for 
            each session and like to discuss that goal at the beginning of every meeting to help 
            the session stay focused and productive for the client.
          </p>
          <p className="text-lg text-[#3e879e] font-medium">
            I believe that there is no goal that is too small—and that understanding one&apos;s 
            goals can help the client see a bigger picture.
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

        {/* Recommended Reading */}
        <section className="container section">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Recommended Reading
          </h2>
          <p className="text-neutral-600 mb-6">
            Books that have shaped my practice and may support your journey.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="book-card">
              <h3 className="font-semibold text-neutral-800 mb-1">Adult Children of Emotionally Immature Parents</h3>
              <p className="text-sm text-neutral-600">Understanding childhood emotional neglect and healing from its effects.</p>
            </div>

            <div className="book-card">
              <h3 className="font-semibold text-neutral-800 mb-1">The Body Keeps the Score</h3>
              <p className="text-sm text-neutral-600">How trauma reshapes the body and brain, and paths toward recovery.</p>
            </div>

            <div className="book-card">
              <h3 className="font-semibold text-neutral-800 mb-1">Attached</h3>
              <p className="text-sm text-neutral-600">The science of adult attachment and how it shapes our relationships.</p>
            </div>

            <div className="book-card">
              <h3 className="font-semibold text-neutral-800 mb-1">My Grandmother&apos;s Hands</h3>
              <p className="text-sm text-neutral-600">Racialized trauma and the pathway to mending our hearts and bodies.</p>
            </div>

            <div className="book-card">
              <h3 className="font-semibold text-neutral-800 mb-1">No Bad Parts</h3>
              <p className="text-sm text-neutral-600">Internal Family Systems and healing the parts that carry our pain.</p>
            </div>

            <div className="book-card">
              <h3 className="font-semibold text-neutral-800 mb-1">The Happiness Trap</h3>
              <p className="text-sm text-neutral-600">Using ACT to stop struggling and start living a meaningful life.</p>
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
            <p className="text-neutral-600 mb-4">
              Telehealth appointments available across California.
            </p>
            <span className="badge mb-4">Se habla español</span>
            <div className="mt-4">
              <Link href="/consultation" className="btn btn-primary">
                Schedule a consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container py-8">
        <div className="divider mb-6" />
        <div className="text-center text-sm text-neutral-500">
          <p className="mb-2">Hannah Thayer, LPCC · Telehealth Therapy · California</p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
