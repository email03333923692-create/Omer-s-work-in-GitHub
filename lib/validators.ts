import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().min(2, "Please enter your full name").max(120),
  email: z.string().email("Please enter a valid email"),
  type: z.enum(["sponsor", "academy", "scout", "media", "general"]),
  subject: z.string().max(160).optional(),
  message: z.string().min(10, "Tell us a bit more (10+ characters)").max(4000),
  org: z.string().max(160).optional(),
  phone: z.string().max(40).optional(),
});

export type InquirySchema = z.infer<typeof inquirySchema>;
