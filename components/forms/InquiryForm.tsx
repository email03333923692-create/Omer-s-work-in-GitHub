"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { submitInquiry, type InquiryState } from "@/app/actions/inquiry";
import { cn } from "@/lib/cn";

const initial: InquiryState = { ok: false, message: "" };

type Props = {
  defaultType?: "sponsor" | "academy" | "scout" | "media" | "general";
  showOrg?: boolean;
  showPhone?: boolean;
  hideTypePicker?: boolean;
  title?: string;
  subtitle?: string;
};

export function InquiryForm({
  defaultType = "general",
  showOrg = true,
  showPhone = false,
  hideTypePicker = false,
  title = "Open a conversation",
  subtitle = "Tell us a little about you and we'll be in touch.",
}: Props) {
  const [state, formAction] = useFormState(submitInquiry, initial);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok && formRef.current) formRef.current.reset();
  }, [state.ok]);

  const fe = state.fieldErrors ?? {};

  return (
    <div className="glass-strong p-6 sm:p-8">
      <p className="eyebrow">{title}</p>
      <h3 className="font-display text-3xl mt-2">{subtitle}</h3>

      <form ref={formRef} action={formAction} className="mt-6 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label="Full name"
            name="name"
            placeholder="Your name"
            required
            error={fe.name}
          />
          <Field
            label="Email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            error={fe.email}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {showOrg && (
            <Field
              label="Organisation"
              name="org"
              placeholder="Club, brand, agency"
              error={fe.org}
            />
          )}
          {showPhone && (
            <Field
              label="Phone"
              name="phone"
              placeholder="+92 ..."
              error={fe.phone}
            />
          )}
        </div>

        {!hideTypePicker && (
          <div>
            <Label>Inquiry type</Label>
            <select
              name="type"
              defaultValue={defaultType}
              className="mt-2 w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-electric"
            >
              <option value="sponsor">Sponsor / brand partnership</option>
              <option value="academy">Academy / club intake</option>
              <option value="scout">Scout / agent</option>
              <option value="media">Media / press</option>
              <option value="general">General</option>
            </select>
          </div>
        )}
        {hideTypePicker && (
          <input type="hidden" name="type" value={defaultType} />
        )}

        <Field
          label="Subject"
          name="subject"
          placeholder="Optional — short summary"
          error={fe.subject}
        />

        <div>
          <Label>Message</Label>
          <textarea
            name="message"
            required
            rows={6}
            placeholder="Tell us what you're working on…"
            className={cn(
              "mt-2 w-full rounded-xl border bg-ink-900 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-electric",
              fe.message ? "border-red-400/60" : "border-white/10"
            )}
          />
          {fe.message && (
            <p className="mt-1 text-xs text-red-400">{fe.message}</p>
          )}
        </div>

        <SubmitButton />

        {state.message && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "text-sm",
              state.ok ? "text-neon" : "text-red-400"
            )}
          >
            {state.message}
          </motion.p>
        )}
      </form>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-xs uppercase tracking-[0.25em] text-white/50">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={cn(
          "mt-2 w-full rounded-xl border bg-ink-900 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-electric",
          error ? "border-red-400/60" : "border-white/10"
        )}
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send message"}
      <span aria-hidden>→</span>
    </button>
  );
}
