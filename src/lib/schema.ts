import z from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.email({ message: "Invalid email address" }),
    subject: z.string().min(1, { message: "Subject is required" }),
    message: z.string().min(1, { message: "Message is required" }),
    honeypot: z.string().max(0, { message: "Spam detected!" }).optional(),
})

export type contactFormSchemaDto = z.infer<typeof contactFormSchema>;

