"use server";
import ContactEmailTemplate from "@/components/email-template/templates/ContactEmailTemplate";
import { siteConfig } from "@/config/site";
import {
  ContactFormValues,
  contactSchema,
} from "@/lib/validations/contact-schema";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: ContactFormValues) {
  try {
    const validatedData = contactSchema.parse(formData);

    await resend.emails.send({
      from: `${siteConfig.name} <${siteConfig.email}>`,
      to: [siteConfig.email],
      subject: "New contact form submission",
      replyTo: validatedData.email,
      react: ContactEmailTemplate({ formData: validatedData }),
    });

    return {
      success: true,
      message: "Message sent successfully",
    };
  } catch (error) {
    console.log("Form submission error: ", error);
    return {
      success: false,
      message: "Something went wrong, please try again",
    };
  }
}
