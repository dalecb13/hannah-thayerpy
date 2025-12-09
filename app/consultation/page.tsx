import Link from "next/link";

export default function Consultation() {
  return (
    <div className="min-h-screen text-[#1f2329]">
      <header className="section-shell pt-10 pb-6 flex items-center justify-between gap-6">
        <div>
          <p className="handwritten-text text-[#f48c44] text-xl">Consultation</p>
          <p className="text-sm text-neutral-600">Telehealth sessions across California</p>
        </div>
        <Link
          href="/"
          className="pill text-sm font-medium text-[#1f2329] hover:shadow-md transition-shadow"
        >
          Back to home
        </Link>
      </header>

      <main>
        <section className="section-shell pb-20">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
              Schedule a telehealth consultation
            </h1>
            <p className="text-lg text-neutral-700">
              Tell me a bit about what you are looking for, and I will follow up to confirm a
              telehealth appointment time.
            </p>
          </div>

          <div className="card-soft p-8 md:p-10 mt-10 max-w-3xl space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#1f2329]" htmlFor="name">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full border border-[#1f2329]/10 rounded-lg px-4 py-3 bg-white focus:outline-none focus:border-[#3e879e]"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#1f2329]" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full border border-[#1f2329]/10 rounded-lg px-4 py-3 bg-white focus:outline-none focus:border-[#3e879e]"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#1f2329]" htmlFor="phone">
                  Phone (optional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full border border-[#1f2329]/10 rounded-lg px-4 py-3 bg-white focus:outline-none focus:border-[#3e879e]"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#1f2329]" htmlFor="availability">
                  Preferred times
                </label>
                <input
                  id="availability"
                  name="availability"
                  type="text"
                  className="w-full border border-[#1f2329]/10 rounded-lg px-4 py-3 bg-white focus:outline-none focus:border-[#3e879e]"
                  placeholder="Weekdays 3–6pm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#1f2329]" htmlFor="focus">
                What would you like to focus on?
              </label>
              <textarea
                id="focus"
                name="focus"
                rows={4}
                className="w-full border border-[#1f2329]/10 rounded-lg px-4 py-3 bg-white focus:outline-none focus:border-[#3e879e]"
                placeholder="Share a few notes about what brings you to therapy..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#1f2329]">Human verification</label>
              <div className="captcha-placeholder" aria-label="Captcha placeholder">
                CAPTCHA placeholder
              </div>
              <p className="text-xs text-neutral-500">
                A verification step will appear here to confirm you are human.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                className="rounded-full bg-[#f48c44] text-white px-6 py-3 font-semibold shadow-lg shadow-[#f48c44]/35 hover:bg-[#d76c25] transition-transform transition-colors whitespace-nowrap hover:-translate-y-0.5"
              >
                Send request
              </button>
              <p className="text-sm text-neutral-600">Telehealth only. I will reply within 1–2 business days.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

