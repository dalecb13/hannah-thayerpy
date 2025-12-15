import Image from "next/image";
import Link from "next/link";

const CONSULTATION_ENABLED = process.env.NEXT_PUBLIC_CONSULTATION_ENABLED === "true";
const CONTACT_EMAIL = "hannahthayerlpcc@gmail.com";
const EMAIL_SUBJECT = "Consultation Schedule Request";
const EMAIL_BODY = `Hi Hannah,

I'm reaching out to schedule a consultation for therapy services.

NAME:
First name: 
Last name: 
Preferred name (if different): 

PRONOUNS:
[e.g., she/her, he/him, they/them]

MY PREFERRED MEETING TIMES:
[Please list days/times that work best for you, e.g., "Weekday afternoons" or "Tuesday/Thursday mornings"]

WHAT BRINGS ME TO THERAPY:
[Please share a brief description of what you'd like to work on]

HAVE YOU BEEN IN THERAPY BEFORE?
[Yes/No - if yes, feel free to share what was helpful or what you're looking for this time]

ADDITIONAL NOTES:
[Anything else you'd like me to know]

Thank you,
[Your phone number (optional)]`;

const MAILTO_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="container py-4">
        <div className="flex items-center justify-between">
          <div className="min-w-0 flex-1">
            <p className="handwritten text-[#f48c44] text-xl sm:text-2xl">Hannah Thayer, LPCC</p>
          </div>
          {CONSULTATION_ENABLED ? (
            <Link href="/consultation" className="btn btn-primary text-sm sm:text-base">
              Schedule
            </Link>
          ) : (
            <a href={MAILTO_HREF} className="btn btn-primary text-sm sm:text-base">
              Schedule
            </a>
          )}
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
                Telehealth sessions in California.
              </p>
              <span className="badge">Se habla español</span>
            </div>

            {/* Photo */}
            <div className="photo-frame max-w-xs mx-auto mb-8">
        <Image
                src="/hannah-thayer-py-background.png"
                alt="Hannah Thayer, LPCC"
                width={400}
                height={500}
                className="w-full h-auto"
          priority
        />
            </div>

            {/* CTA Buttons - Full width on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-center">
              {CONSULTATION_ENABLED ? (
                <Link href="/consultation" className="btn btn-primary btn-full">
                  Schedule a consultation
                </Link>
              ) : (
                <a href={MAILTO_HREF} className="btn btn-primary btn-full">
                  Schedule a consultation
                </a>
              )}
              <Link href="#about" className="btn btn-secondary btn-full">
                Learn more
              </Link>
            </div>
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="container section">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-48 sm:w-56 md:w-64 shrink-0">
              <Image
                src="/hannah-portrait.jpg"
                alt="Hannah Thayer, LPCC"
                width={256}
                height={320}
                className="rounded-xl shadow-md w-full h-auto"
              />
            </div>
            <div>
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
            </div>
          </div>
        </section>

        {/* My Approach */}
        <section className="section-alt">
          <div className="container section">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            My Approach
          </h2>
          <p className="text-neutral-600 mb-6">
            Collaborative, evidence-based, and tailored to you.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Evidence-Based Methods */}
            <div className="card p-5">
              <div className="w-10 h-10 rounded-full bg-[#3e879e]/10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-[#3e879e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23.693L5 15.3m14.8 0 .002 1.542a2.233 2.233 0 0 1-2.2 2.163 41.81 41.81 0 0 1-10.406 0 2.233 2.233 0 0 1-2.2-2.163L5 15.3" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#3e879e] mb-2">Evidence-Based Methods</h3>
              <p className="text-neutral-600 text-sm">
                CBT, DBT, ACT, and mindfulness/somatic strategies to help you understand thought and behavior patterns.
              </p>
            </div>

            {/* Collaborative Process */}
            <div className="card p-5">
              <div className="w-10 h-10 rounded-full bg-[#f48c44]/10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-[#f48c44]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#f48c44] mb-2">Collaborative Process</h3>
              <p className="text-neutral-600 text-sm">
                We work together so you can eventually become your own therapist, targeting your own needs.
              </p>
            </div>

            {/* Deep Listening */}
            <div className="card p-5">
              <div className="w-10 h-10 rounded-full bg-[#c57b5a]/10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-[#c57b5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#c57b5a] mb-2">Deep Listening</h3>
              <p className="text-neutral-600 text-sm">
                I listen deeply and ask thoughtful questions to help you explore your thoughts and feelings.
              </p>
            </div>

            {/* Adaptable Style */}
            <div className="card p-5">
              <div className="w-10 h-10 rounded-full bg-[#3e879e]/10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-[#3e879e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#3e879e] mb-2">Adaptable Style</h3>
              <p className="text-neutral-600 text-sm">
                Whether you need gentle encouragement or structured guidance, I meet you where you are.
              </p>
            </div>
          </div>
          </div>
        </section>

        {/* Your First Session */}
        <section className="container section">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Your First Session
          </h2>
          <p className="text-neutral-600 mb-6">
            What to expect when we meet.
          </p>

          <div className="space-y-0">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-[#3e879e] text-white flex items-center justify-center text-sm font-semibold">1</div>
                <div className="w-0.5 bg-[#3e879e]/20 flex-1 my-2" />
              </div>
              <div className="pb-6">
                <h3 className="font-semibold text-neutral-800 mb-1">Getting to know each other</h3>
                <p className="text-neutral-600 text-sm">We&apos;ll start with introductions and I&apos;ll learn a bit about you.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-[#f48c44] text-white flex items-center justify-center text-sm font-semibold">2</div>
                <div className="w-0.5 bg-[#f48c44]/20 flex-1 my-2" />
              </div>
              <div className="pb-6">
                <h3 className="font-semibold text-neutral-800 mb-1">Discussing your concerns</h3>
                <p className="text-neutral-600 text-sm">Share what brought you to therapy—your concerns, background, and questions.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-[#c57b5a] text-white flex items-center justify-center text-sm font-semibold">3</div>
                <div className="w-0.5 bg-[#c57b5a]/20 flex-1 my-2" />
              </div>
              <div className="pb-6">
                <h3 className="font-semibold text-neutral-800 mb-1">Setting goals together</h3>
                <p className="text-neutral-600 text-sm">We&apos;ll talk about what you want from therapy and create a path forward.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-[#3e879e] text-white flex items-center justify-center text-sm font-semibold">4</div>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 mb-1">Building trust</h3>
                <p className="text-neutral-600 text-sm">We&apos;ll cover confidentiality and begin building a safe, supportive relationship.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How I Set Goals */}
        <section className="section-alt">
          <div className="container section">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            How I Set Goals
          </h2>
          <p className="text-neutral-600 mb-6">
            Focused sessions, meaningful progress.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-6">
            I approach goal setting with clients as an ongoing thing. I prefer to have a goal for 
            each session and like to discuss that goal at the beginning of every meeting to help 
            the session stay focused and productive for the client.
          </p>
          
          {/* Pull Quote */}
          <div className="relative bg-[#3e879e]/5 rounded-xl p-6 pl-8 border-l-4 border-[#3e879e]">
            <span className="absolute top-2 left-3 text-5xl text-[#3e879e]/20 font-serif leading-none">&ldquo;</span>
            <p className="text-xl text-[#3e879e] font-medium leading-relaxed">
              I believe that there is no goal that is too small—and that understanding one&apos;s 
              goals can help the client see a bigger picture.
            </p>
          </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="container section">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Services
          </h2>
          <p className="text-neutral-600 mb-6">
            Personalized care tailored to your needs.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {/* Anxiety & OCD */}
            <div className="card p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-[#3e879e]/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#3e879e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-[#3e879e] mb-2">
                Anxiety &amp; OCD
              </h3>
              <p className="text-neutral-600 text-sm">
                Manage racing thoughts, intrusive patterns, and worry with CBT and exposure therapy.
              </p>
            </div>

            {/* Identity & Self-Discovery */}
            <div className="card p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-[#f48c44]/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#f48c44]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-[#f48c44] mb-2">
                Identity &amp; Self-Discovery
              </h3>
              <p className="text-neutral-600 text-sm">
                Explore questions around identity, values, and who you want to become.
              </p>
            </div>

            {/* Life Transitions */}
            <div className="card p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-[#c57b5a]/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#c57b5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-[#c57b5a] mb-2">
                Life Transitions
              </h3>
              <p className="text-neutral-600 text-sm">
                Navigate career changes, burnout, grief, or major life shifts with resilience.
              </p>
            </div>
          </div>
        </section>

        {/* Recommended Reading */}
        <section className="section-alt">
          <div className="container section">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Recommended Reading
          </h2>
          <p className="text-neutral-600 mb-6">
            Books that have shaped my practice and may support your journey.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="book-card flex gap-4">
              <div className="w-8 h-10 rounded bg-[#3e879e]/10 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#3e879e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 mb-1">Adult Children of Emotionally Immature Parents</h3>
                <p className="text-sm text-neutral-600">Understanding childhood emotional neglect and healing from its effects.</p>
              </div>
            </div>

            <div className="book-card flex gap-4">
              <div className="w-8 h-10 rounded bg-[#f48c44]/10 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#f48c44]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 mb-1">The Body Keeps the Score</h3>
                <p className="text-sm text-neutral-600">How trauma reshapes the body and brain, and paths toward recovery.</p>
              </div>
            </div>

            <div className="book-card flex gap-4">
              <div className="w-8 h-10 rounded bg-[#c57b5a]/10 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#c57b5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 mb-1">Attached</h3>
                <p className="text-sm text-neutral-600">The science of adult attachment and how it shapes our relationships.</p>
              </div>
            </div>

            <div className="book-card flex gap-4">
              <div className="w-8 h-10 rounded bg-[#3e879e]/10 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#3e879e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 mb-1">My Grandmother&apos;s Hands</h3>
                <p className="text-sm text-neutral-600">Racialized trauma and the pathway to mending our hearts and bodies.</p>
              </div>
            </div>

            <div className="book-card flex gap-4">
              <div className="w-8 h-10 rounded bg-[#f48c44]/10 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#f48c44]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 mb-1">No Bad Parts</h3>
                <p className="text-sm text-neutral-600">Internal Family Systems and healing the parts that carry our pain.</p>
              </div>
            </div>

            <div className="book-card flex gap-4">
              <div className="w-8 h-10 rounded bg-[#c57b5a]/10 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#c57b5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 mb-1">The Happiness Trap</h3>
                <p className="text-sm text-neutral-600">Using ACT to stop struggling and start living a meaningful life.</p>
              </div>
            </div>
          </div>
          </div>
        </section>

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

        {/* CTA Section */}
        <section className="section-alt">
          <div className="container section">
          <div className="card p-6 sm:p-8 text-center">
            <p className="handwritten text-[#f48c44] text-xl mb-2">Ready to begin?</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Let&apos;s plan your first session.
            </h2>
            <p className="text-neutral-600 mb-4">
              Telehealth appointments available in California.
            </p>
            <span className="badge mb-4">Se habla español</span>
            <div className="mt-4">
              {CONSULTATION_ENABLED ? (
                <Link href="/consultation" className="btn btn-primary">
                  Schedule a consultation
                </Link>
              ) : (
                <a href={MAILTO_HREF} className="btn btn-primary">
                  Schedule a consultation
                </a>
              )}
            </div>
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
