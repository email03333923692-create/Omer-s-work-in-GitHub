"use server";

import { prisma } from "@/lib/db";
import { inquirySchema } from "@/lib/validators";

export type InquiryState = {
  ok: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
};

export async function submitInquiry(
  _prev: InquiryState,
  formData: FormData
): Promise<InquiryState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    type: String(formData.get("type") ?? "general"),
    subject: String(formData.get("subject") ?? "") || undefined,
    message: String(formData.get("message") ?? ""),
    org: String(formData.get("org") ?? "") || undefined,
    phone: String(formData.get("phone") ?? "") || undefined,
  };

  const parsed = inquirySchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0]?.toString();
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      ok: false,
      message: "Please correct the highlighted fields.",
      fieldErrors,
    };
  }

  try {
    await prisma.inquiry.create({ data: parsed.data });
  } catch (err) {
    console.error("[inquiry] failed to persist", err);
    return {
      ok: false,
      message:
        "Something went wrong saving your message. Please email us directly.",
    };
  }

  return {
    ok: true,
    message: "Thanks — your message is in. We'll be in touch shortly.",
  };
}
