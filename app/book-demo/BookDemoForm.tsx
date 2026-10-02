"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, CalendarCheck, ChevronDown } from "lucide-react";
import { DEMO_TIMES, isWeekend, parseLocalDate, slotLabel } from "@/lib/slots";
import { PHONE_FORMAT_ERROR, digitsOnly, isValidPhone } from "@/lib/phone";

type FormState = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  meetingType: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
  // Honeypot — must stay empty for real users (bots tend to fill it).
  botField: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  meetingType: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
  botField: "",
};

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Your name is required.";
  if (!form.email.trim()) {
    errors.email = "Your email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.phone) {
    errors.phone = "Your phone number is required.";
  } else if (!isValidPhone(form.phone)) {
    errors.phone = PHONE_FORMAT_ERROR;
  }
  if (!form.meetingType)
    errors.meetingType = "Please choose onsite or virtual.";
  if (!form.preferredDate) {
    errors.preferredDate = "Please pick a date.";
  } else if (isWeekend(parseLocalDate(form.preferredDate))) {
    errors.preferredDate = "Demos run Monday–Friday only.";
  }
  if (!form.preferredTime) errors.preferredTime = "Please pick a time.";

  // The slot is confirmed the moment it's submitted, so it has to be ahead of
  // now — not merely today. The server enforces this too.
  if (form.preferredDate && form.preferredTime) {
    const slot = new Date(`${form.preferredDate}T${form.preferredTime}`);
    if (!Number.isNaN(slot.getTime()) && slot.getTime() <= Date.now()) {
      errors.preferredTime = "Please choose a time in the future.";
    }
  }
  return errors;
}

export default function BookDemoForm() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [bookedSlot, setBookedSlot] = useState("");
  const [submitError, setSubmitError] = useState<string | null>(null);
  // Earliest bookable date = tomorrow. Computed on the client only, so the
  // prerendered HTML doesn't bake in a stale build-time date.
  const [minDate, setMinDate] = useState("");
  const botRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setMinDate(tomorrow.toISOString().split("T")[0]);
  }, []);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name } = e.target;
    const value =
      name === "phone" ? digitsOnly(e.target.value) : e.target.value;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleBlur(
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const field = e.target.name as keyof FormState;
    const fieldErrors = validate(form);
    if (fieldErrors[field]) {
      setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError(null);

    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      document.getElementById(Object.keys(fieldErrors)[0])?.focus();
      return;
    }

    // Bot detected via honeypot — pretend success so it moves on, send nothing.
    if (botRef.current?.value) {
      setSubmitted(true);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        const picked = parseLocalDate(form.preferredDate);
        setBookedSlot(
          `${picked.toLocaleDateString("en-GB", {
            weekday: "long",
            day: "numeric",
            month: "long",
          })}, ${slotLabel(form.preferredTime)} WAT`,
        );
        setSubmitted(true);
      } else {
        setSubmitError(
          data?.error ||
            "We couldn't book your demo. Please try again, or email us at info@connexxiongroup.com.",
        );
      }
    } catch {
      setSubmitError(
        "Network error — please check your connection and try again, or email us at info@connexxiongroup.com.",
      );
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="py-4" role="status" aria-live="polite">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary-soft">
          <CalendarCheck size={28} className="text-primary" aria-hidden="true" />
        </div>
        <h3 className="mb-3 text-2xl font-bold text-foreground">
          Your demo is booked!
        </h3>
        <p className="max-w-sm text-[15px] leading-relaxed text-text-secondary">
          {bookedSlot ? (
            <>
              We&apos;ll see you on{" "}
              <span className="font-semibold text-foreground">
                {bookedSlot}
              </span>
              . A confirmation is on its way to your inbox.
            </>
          ) : (
            <>A confirmation is on its way to your inbox.</>
          )}
        </p>
        <button
          onClick={() => {
            setForm(emptyForm);
            setErrors({});
            setBookedSlot("");
            setSubmitted(false);
          }}
          className="mt-7 text-sm font-semibold text-primary transition-colors hover:text-primary-deep"
        >
          Book another demo →
        </button>
      </div>
    );
  }

  const base =
    "w-full rounded-xl border bg-card px-4 py-3 text-[14px] text-foreground placeholder:text-text-muted outline-none transition-all duration-200 focus:ring-2";
  const normal = "border-border focus:border-primary/40 focus:ring-primary/15";
  const errored = "border-red-300 focus:border-red-400 focus:ring-red-100";
  const labelClass = "mb-2 block text-[13px] font-semibold text-foreground";
  const errClass = "mt-1.5 text-[12px] text-red-500";

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Book a demo" className="space-y-5">
      {/* Honeypot — hidden from people, catches bots. Leave empty; do not remove. */}
      <input
        ref={botRef}
        type="text"
        name="botField"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        value={form.botField}
        onChange={handleChange}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name <span className="text-red-400" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Adaeze Okonkwo"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-err" : undefined}
            className={`${base} ${errors.name ? errored : normal}`}
          />
          {errors.name && (
            <p id="name-err" role="alert" className={errClass}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email address{" "}
            <span className="text-red-400" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@cooperative.org"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-err" : undefined}
            className={`${base} ${errors.email ? errored : normal}`}
          />
          {errors.email && (
            <p id="email-err" role="alert" className={errClass}>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-red-400" aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="08012345678"
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-err" : undefined}
            className={`${base} ${errors.phone ? errored : normal}`}
          />
          {errors.phone && (
            <p id="phone-err" role="alert" className={errClass}>
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="organization" className={labelClass}>
            Cooperative name{" "}
            <span className="text-[12px] font-normal text-text-muted">
              (optional)
            </span>
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            autoComplete="organization"
            placeholder="Unity Thrift & Credit"
            value={form.organization}
            onChange={handleChange}
            className={`${base} ${normal}`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="meetingType" className={labelClass}>
          Meeting type <span className="text-red-400" aria-hidden="true">*</span>
        </label>
        <div className="relative">
          <select
            id="meetingType"
            name="meetingType"
            value={form.meetingType}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-required="true"
            aria-invalid={!!errors.meetingType}
            aria-describedby={
              errors.meetingType ? "meetingType-err" : undefined
            }
            className={`${base} cursor-pointer appearance-none pr-10 ${
              errors.meetingType ? errored : normal
            } ${!form.meetingType ? "text-text-muted" : "text-foreground"}`}
          >
            <option value="" disabled>
              Select meeting type…
            </option>
            <option value="Virtual">Virtual</option>
            <option value="Onsite">Onsite</option>
          </select>
          <ChevronDown
            size={16}
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-muted"
          />
        </div>
        {errors.meetingType && (
          <p id="meetingType-err" role="alert" className={errClass}>
            {errors.meetingType}
          </p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="preferredDate" className={labelClass}>
            Date <span className="text-red-400" aria-hidden="true">*</span>
          </label>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            min={minDate}
            value={form.preferredDate}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-required="true"
            aria-invalid={!!errors.preferredDate}
            aria-describedby={
              errors.preferredDate ? "preferredDate-err" : undefined
            }
            className={`${base} cursor-pointer ${
              errors.preferredDate ? errored : normal
            } ${!form.preferredDate ? "text-text-muted" : "text-foreground"}`}
          />
          {errors.preferredDate && (
            <p id="preferredDate-err" role="alert" className={errClass}>
              {errors.preferredDate}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="preferredTime" className={labelClass}>
            Time{" "}
            <span className="text-[12px] font-normal text-text-muted">
              (WAT)
            </span>{" "}
            <span className="text-red-400" aria-hidden="true">*</span>
          </label>
          <div className="relative">
            <select
              id="preferredTime"
              name="preferredTime"
              value={form.preferredTime}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-required="true"
              aria-invalid={!!errors.preferredTime}
              aria-describedby={
                errors.preferredTime ? "preferredTime-err" : undefined
              }
              className={`${base} cursor-pointer appearance-none pr-10 ${
                errors.preferredTime ? errored : normal
              } ${!form.preferredTime ? "text-text-muted" : "text-foreground"}`}
            >
              <option value="">Select a time…</option>
              {DEMO_TIMES.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-muted"
            />
          </div>
          {errors.preferredTime && (
            <p id="preferredTime-err" role="alert" className={errClass}>
              {errors.preferredTime}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Anything you&apos;d like us to focus on?{" "}
          <span className="text-[12px] font-normal text-text-muted">
            (optional)
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your membership size, the modules you're most interested in, or a specific problem you're trying to solve."
          value={form.message}
          onChange={handleChange}
          className={`${base} resize-none ${normal}`}
        />
      </div>

      {submitError && (
        <p
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[13px] leading-relaxed text-red-600"
        >
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-colors duration-200 hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <>
            <span
              className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
              aria-hidden="true"
            />
            Booking…
          </>
        ) : (
          <>
            Confirm my demo
            <ArrowRight
              size={16}
              strokeWidth={2.5}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            />
          </>
        )}
      </button>

      <p className="text-center text-[11px] leading-relaxed text-text-muted">
        Your slot is confirmed instantly. Need a different time later? Just reply
        to the confirmation email.
      </p>
    </form>
  );
}
