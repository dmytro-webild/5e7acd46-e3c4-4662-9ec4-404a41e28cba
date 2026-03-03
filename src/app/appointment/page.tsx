"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import TextAbout from '@/components/sections/about/TextAbout';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Mail } from 'lucide-react';
import Link from 'next/link';

export default function AppointmentPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="small"
      sizing="largeSizeMediumTitles"
      background="fluid"
      cardStyle="glass-depth"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="solid"
      headingFontWeight="normal"
    >
      {/* Navbar */}
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Home", id: "home" },
            { name: "Try Styles", id: "virtual-tryon" },
            { name: "Find Stylists", id: "stylists" },
            { name: "Products", id: "market" },
            { name: "About", id: "about" },
          ]}
          button={{ text: "Book Now", href: "/appointment" }}
          brandName="StyleAI"
        />
      </div>

      {/* Booking CTA Section */}
      <div id="booking-intro" data-section="booking-intro">
        <TextAbout
          tag="Book Your Transformation"
          title="Find Your Perfect Stylist and Book Your Appointment"
          buttons={[]}
          useInvertedBackground={false}
        />
      </div>

      {/* Contact Newsletter Section */}
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Updated"
          title="Get Your StyleAI Access"
          description="Join thousands who've discovered their perfect style. Get early access to new stylists, exclusive booking discounts, and AI styling tips delivered to your inbox."
          tagIcon={Mail}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-vibrant-modern-barber-shop-interior-wi-1772539353772-b879aa25.png"
          mediaPosition="right"
          mediaAnimation="slide-up"
          useInvertedBackground={true}
          inputPlaceholder="Enter your email"
          buttonText="Get Access"
          termsText="We respect your privacy. Unsubscribe anytime from emails."
          background={{ variant: "sparkles-gradient" }}
          onSubmit={(email) => console.log("Subscribed:", email)}
        />
      </div>

      {/* FAQ Section */}
      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Booking Questions"
          sideDescription="Everything you need to know about booking appointments and managing your StyleAI experience"
          faqs={[
            {
              id: "1",
              title: "How do I book an appointment on StyleAI?",
              content: "Browse stylists using our search and filters, check their portfolios and reviews, view real-time availability, and book instantly. You'll receive a confirmation and can communicate with your stylist directly before your appointment.",
            },
            {
              id: "2",
              title: "Can I reschedule or cancel my appointment?",
              content: "Yes, you can reschedule or cancel up to 24 hours before your appointment through the app with no penalty. Cancellations within 24 hours may incur a small fee depending on the stylist's policy.",
            },
            {
              id: "3",
              title: "What if I'm not satisfied with my appointment?",
              content: "Contact your stylist directly for follow-up care or adjustments. Most professionals offer touch-ups within a reasonable timeframe. For platform issues, reach out to our support team.",
            },
            {
              id: "4",
              title: "How do payments work?",
              content: "You can pay securely through the app using your preferred payment method. Payment is processed when you confirm your booking, and you receive an instant receipt.",
            },
            {
              id: "5",
              title: "Can I request a specific stylist?",
              content: "Absolutely! You can search for specific stylists you've worked with before or filter by specialization, location, and availability. Favorite your preferred stylists for quick access.",
            },
            {
              id: "6",
              title: "What if my stylist cancels?",
              content: "If your stylist cancels, you'll be notified immediately and offered alternative time slots or full refunds. We work to reschedule you with a similar professional as quickly as possible.",
            },
          ]}
          useInvertedBackground={false}
          textPosition="left"
          animationType="smooth"
        />
      </div>

      {/* Footer */}
      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="StyleAI"
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "Terms of Service", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}