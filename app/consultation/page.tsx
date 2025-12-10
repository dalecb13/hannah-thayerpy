"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FriendlyCaptchaSDK } from "@friendlycaptcha/sdk";

// Replace with your actual Friendly Captcha site key from https://friendlycaptcha.com/
const FRIENDLY_CAPTCHA_SITE_KEY = "FCMV995O03V7RIMQ";

// Create SDK instance outside component to avoid re-creation on re-renders
const sdk = new FriendlyCaptchaSDK();

export default function Consultation() {
  const [captchaResponse, setCaptchaResponse] = useState<string | null>(null);
  const [captchaState, setCaptchaState] = useState<string>("init");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<ReturnType<typeof sdk.createWidget> | null>(null);

  useEffect(() => {
    if (!containerRef.current || widgetRef.current) return;

    // Create the widget and attach it to the container
    const widget = sdk.createWidget({
      element: containerRef.current,
      sitekey: FRIENDLY_CAPTCHA_SITE_KEY,
    });

    widgetRef.current = widget;

    // Listen for state changes
    widget.addEventListener("frc:widget.statechange", (event) => {
      const detail = event.detail;
      setCaptchaState(detail.state);
      
      if (detail.state === "completed") {
        setCaptchaResponse(detail.response);
      } else if (detail.state === "error" || detail.state === "expired") {
        setCaptchaResponse(null);
      }
    });

    // Start solving automatically
    widget.start();

    // Cleanup on unmount
    return () => {
      if (widgetRef.current) {
        widgetRef.current.destroy();
        widgetRef.current = null;
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!captchaResponse) {
      alert("Please wait for verification to complete.");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      availability: formData.get("availability"),
      focus: formData.get("focus"),
      "frc-captcha-response": captchaResponse,
    };

    console.log("Form submission:", data);
    
    // TODO: Send to your backend for verification
    // The backend should verify the captchaResponse with Friendly Captcha API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen">
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
            <div className="card p-6 sm:p-8 text-center">
              <div className="text-4xl mb-4">✓</div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-3">
                Request received!
              </h1>
              <p className="text-neutral-600 mb-6">
                Thank you for reaching out. I&apos;ll review your request and get back 
                to you within 1–2 business days.
              </p>
              <Link href="/" className="btn btn-primary">
                Return home
              </Link>
            </div>
          </section>
        </main>

        <footer className="container py-8">
          <div className="divider mb-6" />
          <p className="text-center text-sm text-neutral-500">
            Hannah Thayer, LMFT · Telehealth Therapy · California
          </p>
        </footer>
      </div>
    );
  }

  const isVerified = captchaState === "completed" && captchaResponse;

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

          <form className="card p-5 sm:p-6 space-y-5" onSubmit={handleSubmit}>
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

            {/* Friendly Captcha Widget */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Verification
              </label>
              <div ref={containerRef} className="frc-captcha" />
              {captchaState === "solving" && (
                <p className="text-xs text-neutral-500 mt-2">
                  Verifying in background...
                </p>
              )}
              {isVerified && (
                <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                  <span>✓</span> Verified
                </p>
              )}
              {(captchaState === "error" || captchaState === "expired") && (
                <p className="text-xs text-red-600 mt-2">
                  Verification failed. Please refresh and try again.
                </p>
              )}
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button 
                type="submit" 
                className="btn btn-primary btn-full"
                disabled={isSubmitting || !isVerified}
                style={{ opacity: isSubmitting || !isVerified ? 0.6 : 1 }}
              >
                {isSubmitting ? "Sending..." : "Send request"}
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
