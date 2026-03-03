"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TextAbout from '@/components/sections/about/TextAbout';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { MapPin, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
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

      {/* About Mission Section */}
      <div id="about-mission" data-section="about-mission">
        <TextAbout
          tag="Our Mission"
          title="Revolutionizing How People Find and Book Their Perfect Style"
          buttons={[{ text: "Book Your Appointment", href: "/appointment" }]}
          useInvertedBackground={false}
        />
      </div>

      {/* Our Team Section */}
      <div id="team" data-section="team">
        <TeamCardFive
          title="Meet Our Leadership Team"
          description="Experienced professionals dedicated to transforming the salon and barber booking experience"
          tag="Leadership"
          tagIcon={MapPin}
          team={[
            {
              id: "1",
              name: "Marcus Johnson",
              role: "Master Barber",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-headshot-of-a-confident-s-1772539353003-d526f3c7.png?_wi=3",
              imageAlt: "Marcus Johnson - Master Barber",
            },
            {
              id: "2",
              name: "Aisha Williams",
              role: "Senior Stylist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-headshot-of-a-talented-ex-1772539352872-9b95b827.png?_wi=3",
              imageAlt: "Aisha Williams - Senior Stylist",
            },
            {
              id: "3",
              name: "James Chen",
              role: "Precision Barber",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-headshot-of-a-confident-s-1772539353003-d526f3c7.png?_wi=4",
              imageAlt: "James Chen - Precision Barber",
            },
            {
              id: "4",
              name: "Sophia Martinez",
              role: "Color Specialist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-headshot-of-a-talented-ex-1772539352872-9b95b827.png?_wi=4",
              imageAlt: "Sophia Martinez - Color Specialist",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      {/* About Values Section */}
      <div id="values" data-section="values">
        <TestimonialCardThirteen
          title="Our Core Values"
          description="The principles that guide StyleAI and our community of stylists"
          tag="Values"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Trust & Transparency",
              handle: "@trust",
              testimonial: "We believe in verified professionals and honest reviews. Every stylist on our platform is thoroughly vetted to ensure the best experience for our users.",
              rating: 5,
              icon: MessageCircle,
            },
            {
              id: "2",
              name: "Innovation & Technology",
              handle: "@innovation",
              testimonial: "AI-powered virtual try-ons and smart matching algorithms help users find their perfect style with confidence and precision.",
              rating: 5,
              icon: MessageCircle,
            },
            {
              id: "3",
              name: "Inclusivity & Safety",
              handle: "@inclusivity",
              testimonial: "Our gender-specific interfaces ensure personalized, safe experiences. We celebrate diversity and create spaces where everyone feels welcome.",
              rating: 5,
              icon: MessageCircle,
            },
          ]}
          showRating={true}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
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