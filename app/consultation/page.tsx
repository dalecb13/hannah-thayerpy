import Link from "next/link";

export default function Consultation() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="container py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="handwritten text-[#f48c44] text-xl">Consultation</p>
          </div>
          <Link href="/" className="btn btn-secondary text-sm">
            ← Back
          </Link>
        </div>
      </header>

      <main>
        <section className="container section">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            Schedule a consultation
          </h1>
          <p className="text-neutral-600 mb-6">
            Telehealth sessions available across California. Fill out the form below and 
            I&apos;ll follow up within 1–2 business days.
          </p>

          <form className="card p-5 sm:p-6 space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full border border-neutral-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-[#3e879e] focus:ring-1 focus:ring-[#3e879e]"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border border-neutral-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-[#3e879e] focus:ring-1 focus:ring-[#3e879e]"
                placeholder="you@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="phone">
                Phone <span className="text-neutral-400">(optional)</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full border border-neutral-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-[#3e879e] focus:ring-1 focus:ring-[#3e879e]"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Availability */}
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="availability">
                Preferred times
              </label>
              <input
                id="availability"
                name="availability"
                type="text"
                className="w-full border border-neutral-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-[#3e879e] focus:ring-1 focus:ring-[#3e879e]"
                placeholder="e.g., Weekday afternoons"
              />
            </div>

            {/* Focus */}
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="focus">
                What brings you to therapy?
              </label>
              <textarea
                id="focus"
                name="focus"
                rows={4}
                className="w-full border border-neutral-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-[#3e879e] focus:ring-1 focus:ring-[#3e879e] resize-none"
                placeholder="Share a few notes about what you'd like to work on..."
              />
            </div>

            {/* Captcha */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Verification
              </label>
              <div className="captcha-placeholder">
                CAPTCHA will appear here
              </div>
              <p className="text-xs text-neutral-500 mt-2">
                A verification step will confirm you&apos;re human.
              </p>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button type="submit" className="btn btn-primary btn-full">
                Send request
              </button>
              <p className="text-sm text-neutral-500 text-center mt-3">
                I&apos;ll reply within 1–2 business days.
              </p>
            </div>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="container py-8">
        <div className="divider mb-6" />
        <p className="text-center text-sm text-neutral-500">
          Hannah Thayer, LMFT · Telehealth Therapy · California
        </p>
      </footer>
    </div>
  );
}
