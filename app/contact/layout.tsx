import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact iCoop | Cooperative Management Software Demo — Nigeria",
  description:
    "Contact iCoop to request a demo of Nigeria's leading cooperative management software. Reach our team by email, phone, or form. We respond within 24 hours.",
  keywords: [
    "iCoop contact",
    "cooperative management software Nigeria",
    "cooperative software demo Nigeria",
    "Nigerian cooperative software",
    "cooperative society software contact",
    "thrift group management software",
  ],
  openGraph: {
    title: "Contact iCoop | Cooperative Management Software Demo — Nigeria",
    description:
      "Request a demo or get in touch with iCoop. Nigeria's cooperative management platform for cooperative societies, unions, and thrift groups.",
    type: "website",
    locale: "en_NG",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "iCoop",
              description:
                "Cooperative management software built for Nigerian cooperatives, unions, and thrift groups.",
              url: "https://icoop.ng",
              logo: "https://icoop.ng/iCoop_logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+234-800-123-4567",
                email: "hello@icoop.ng",
                contactType: "customer service",
                areaServed: "NG",
                availableLanguage: "English",
                hoursAvailable: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lagos",
                addressRegion: "Lagos State",
                addressCountry: "NG",
              },
              sameAs: [],
            },
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Contact iCoop",
              description:
                "Contact iCoop to request a demo or get support for our cooperative management software in Nigeria.",
              url: "https://icoop.ng/contact",
              mainEntity: {
                "@type": "Organization",
                name: "iCoop",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How quickly does iCoop respond to inquiries?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "iCoop responds to all inquiries within 24 business hours. For urgent support, you can call us directly during business hours.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does iCoop offer a free trial of its cooperative management software?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. iCoop offers a 30-day free trial with full access to all features of our cooperative management platform. No credit card is required.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I request a personalized demo of iCoop for my cooperative society?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Select 'Request a Demo' in the contact form and our team will schedule a walkthrough of iCoop tailored to your cooperative society's needs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does iCoop provide onboarding support for Nigerian cooperatives?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Every iCoop plan includes dedicated onboarding support. Our team guides you through setup, data migration, and member training for your cooperative.",
                  },
                },
              ],
            },
          ]),
        }}
      />
      {children}
    </>
  );
}
