"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { MapPin, Zap, MessageCircle, Check } from 'lucide-react';
import Link from 'next/link';

export default function StylistsPage() {
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

      {/* Featured Stylists Section */}
      <div id="featured-stylists" data-section="featured-stylists">
        <TeamCardFive
          title="Find Your Perfect Stylist"
          description="Browse our verified network of top-rated professionals. Each stylist is carefully selected and reviewed by our community."
          tag="Local Experts"
          tagIcon={MapPin}
          team={[
            {
              id: "1",
              name: "Marcus Johnson",
              role: "Master Barber",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-headshot-of-a-confident-s-1772539353003-d526f3c7.png",
              imageAlt: "Marcus Johnson - Master Barber",
            },
            {
              id: "2",
              name: "Aisha Williams",
              role: "Senior Stylist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-headshot-of-a-talented-ex-1772539352872-9b95b827.png",
              imageAlt: "Aisha Williams - Senior Stylist",
            },
            {
              id: "3",
              name: "James Chen",
              role: "Precision Barber",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-headshot-of-a-confident-s-1772539353003-d526f3c7.png",
              imageAlt: "James Chen - Precision Barber",
            },
            {
              id: "4",
              name: "Sophia Martinez",
              role: "Color Specialist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-headshot-of-a-talented-ex-1772539352872-9b95b827.png",
              imageAlt: "Sophia Martinez - Color Specialist",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      {/* Why Choose Our Stylists Section */}
      <div id="why-choose" data-section="why-choose">
        <FeatureCardTen
          title="Why Choose StyleAI Stylists"
          description="All our stylists meet rigorous standards ensuring you get the best service every time"
          tag="Quality Assurance"
          tagIcon={Zap}
          features={[
            {
              id: "1",
              title: "Verified & Vetted",
              description: "Every stylist undergoes identity verification, background checks, and portfolio review. We maintain the highest standards of professionalism.",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-headshot-of-a-confident-s-1772539353003-d526f3c7.png",
                imageAlt: "Verified stylist professional",
              },
              items: [
                { icon: Check, text: "Background checked" },
                { icon: Check, text: "Portfolio verified" },
                { icon: Check, text: "Credentials confirmed" },
              ],
              reverse: false,
            },
            {
              id: "2",
              title: "Real Client Reviews",
              description: "Ratings are from verified customers only. No fake reviews, just honest feedback from people who've experienced their work.",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-headshot-of-a-talented-ex-1772539352872-9b95b827.png",
                imageAlt: "Customer testimonials",
              },
              items: [
                { icon: Check, text: "Verified reviews only" },
                { icon: Check, text: "Detailed feedback" },
                { icon: Check, text: "Portfolio gallery" },
              ],
              reverse: true,
            },
            {
              id: "3",
              title: "Instant Booking & Communication",
              description: "See real-time availability, confirm appointments instantly, and communicate directly with your stylist before your appointment.",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-modern-appointment-booking-calendar-in-1772539354163-6fa220b1.png",
                imageAlt: "Appointment booking system",
              },
              items: [
                { icon: Check, text: "Live availability" },
                { icon: Check, text: "Instant confirmation" },
                { icon: Check, text: "Direct messaging" },
              ],
              reverse: false,
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      {/* Stylist Testimonials Section */}
      <div id="stylist-testimonials" data-section="stylist-testimonials">
        <TestimonialCardThirteen
          title="Stylist Success Stories"
          description="Hear from the professionals who've built thriving practices on StyleAI"
          tag="Testimonials"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Marcus Johnson",
              handle: "@marcusbarber",
              testimonial: "StyleAI has transformed my business. I've grown my client base significantly and the platform handles all the logistics. I just focus on delivering great cuts.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-headshot-of-a-confident-s-1772539353003-d526f3c7.png",
              imageAlt: "Marcus Johnson",
            },
            {
              id: "2",
              name: "Aisha Williams",
              handle: "@aishastylist",
              testimonial: "The verification process gave me credibility, and verified client reviews build trust. My booking rate has doubled since joining StyleAI.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-headshot-of-a-talented-ex-1772539352872-9b95b827.png",
              imageAlt: "Aisha Williams",
            },
            {
              id: "3",
              name: "James Chen",
              handle: "@jamesprecision",
              testimonial: "StyleAI's communication tools make consultations so much easier. Clients know exactly what they're getting, and I've had zero dissatisfied customers.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-headshot-of-a-confident-s-1772539353003-d526f3c7.png",
              imageAlt: "James Chen",
            },
          ]}
          showRating={true}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
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