"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import TextAbout from '@/components/sections/about/TextAbout';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Sparkles, MapPin, Zap, Play, ShoppingBag, MessageCircle, Check, Star, Clock } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
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

      {/* Hero Section */}
      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="StyleAI"
          description="Discover your perfect style instantly. AI-powered virtual try-on meets trusted local stylists. Book appointments in seconds."
          buttons={[
            { text: "Try Your New Look", href: "/appointment" },
            { text: "Find Stylists", href: "/stylists" },
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-vibrant-modern-barber-shop-interior-wi-1772539353772-b879aa25.png"
          imageAlt="Modern premium salon interior"
          showDimOverlay={true}
          buttonAnimation="slide-up"
        />
      </div>

      {/* Virtual Try-On Section */}
      <div id="virtual-tryon" data-section="virtual-tryon">
        <TextAbout
          tag="AI Technology"
          tagIcon={Sparkles}
          title="See Your Style Before You Commit"
          buttons={[{ text: "Start Virtual Try-On", href: "/appointment" }]}
          useInvertedBackground={false}
          tagAnimation="slide-up"
        />
      </div>

      {/* Stylists Section */}
      <div id="stylists" data-section="stylists">
        <TeamCardFive
          title="Meet Your Perfect Stylist"
          description="Browse top-rated stylists in your area with verified portfolios and real client reviews"
          tag="Local Experts"
          tagIcon={MapPin}
          team={[
            {
              id: "1",              name: "Marcus Johnson",              role: "Master Barber",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-headshot-of-a-confident-s-1772539353003-d526f3c7.png",              imageAlt: "Marcus Johnson - Master Barber"},
            {
              id: "2",              name: "Aisha Williams",              role: "Senior Stylist",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-headshot-of-a-talented-ex-1772539352872-9b95b827.png",              imageAlt: "Aisha Williams - Senior Stylist"},
            {
              id: "3",              name: "James Chen",              role: "Precision Barber",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-headshot-of-a-confident-s-1772539353003-d526f3c7.png",              imageAlt: "James Chen - Precision Barber"},
            {
              id: "4",              name: "Sophia Martinez",              role: "Color Specialist",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-headshot-of-a-talented-ex-1772539352872-9b95b827.png",              imageAlt: "Sophia Martinez - Color Specialist"},
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          tagAnimation="slide-up"
        />
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" data-section="how-it-works">
        <FeatureCardTen
          title="How StyleAI Works"
          description="Four simple steps to discover, try, book, and transform your look with confidence"
          tag="Process"
          tagIcon={Zap}
          features={[
            {
              id: "1",              title: "Upload Your Photo",              description: "Take a selfie or upload a photo. Our AI analyzes your facial structure and features to find your perfect match.",              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-modern-sleek-virtual-try-on-interface--1772539352447-b91d765a.png",                imageAlt: "Virtual try-on interface"},
              items: [
                { icon: Check, text: "Upload in seconds" },
                { icon: Check, text: "Privacy protected" },
                { icon: Check, text: "Instant analysis" },
              ],
              reverse: false,
            },
            {
              id: "2",              title: "Try Styles Virtually",              description: "See hairstyles applied to your photo with AI precision. Use before-and-after sliders to compare looks and find what suits you best.",              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-before-and-after-transfor-1772539353017-ac955f31.png",                imageAlt: "Before and after haircut transformation"},
              items: [
                { icon: Sparkles, text: "Real-time preview" },
                { icon: Sparkles, text: "Liquid blur effects" },
                { icon: Sparkles, text: "Save favorites" },
              ],
              reverse: true,
            },
            {
              id: "3",              title: "Find & Book Your Stylist",              description: "Browse verified stylists who excel at your chosen style. Check ratings, portfolios, and real client results before booking.",              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-modern-mobile-map-interface-showing-ne-1772539353870-461fb166.png",                imageAlt: "Salon location map interface"},
              items: [
                { icon: MapPin, text: "Location filtering" },
                { icon: Star, text: "Real ratings" },
                { icon: Clock, text: "Live availability" },
              ],
              reverse: false,
            },
            {
              id: "4",              title: "Confirm & Get Styled",              description: "Book your appointment instantly. Track your stylist, receive reminders, and enjoy your transformation with confidence.",              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-modern-appointment-booking-calendar-in-1772539354163-6fa220b1.png",                imageAlt: "Booking calendar interface"},
              items: [
                { icon: Check, text: "Instant confirmation" },
                { icon: Check, text: "Real-time updates" },
                { icon: Check, text: "Post-service support" },
              ],
              reverse: true,
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          tagAnimation="slide-up"
        />
      </div>

      {/* Reels Section */}
      <div id="reels" data-section="reels">
        <BlogCardTwo
          title="Stylist Reels"
          description="Browse real transformations and tutorials from top-rated stylists. Scroll through vertical clips showcasing expertly executed cuts, colors, and styling."
          tag="Inspiration"
          tagIcon={Play}
          blogs={[
            {
              id: "1",              category: ["Men's Cuts", "Barber"],
              title: "Perfect Fade Tutorial",              excerpt: "Watch Marcus execute a flawless high fade with precision and expertise. This classic look works for any occasion.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-vertical-video-thumbnail-for-a-barber--1772539354410-a19dbc62.png",              imageAlt: "Barber performing fade cut",              authorName: "Marcus Johnson",              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-headshot-of-a-confident-s-1772539353003-d526f3c7.png",              date: "3 days ago"},
            {
              id: "2",              category: ["Women's Hair", "Color"],
              title: "Ombre Blonde Transformation",              excerpt: "Aisha transforms thick, dark hair into a stunning ombre blonde. See the complete coloring process and styling tips.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-before-and-after-transfor-1772539353929-5b477765.png",              imageAlt: "Women's hair ombre transformation",              authorName: "Aisha Williams",              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-headshot-of-a-talented-ex-1772539352872-9b95b827.png",              date: "5 days ago"},
            {
              id: "3",              category: ["Men's Cuts", "Styling"],
              title: "Modern Textured Crop",              excerpt: "James creates a trendy textured crop with detailed techniques. Perfect for the style-conscious man looking for versatility.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-vertical-video-thumbnail-for-a-barber--1772539354410-a19dbc62.png",              imageAlt: "Modern textured haircut for men",              authorName: "James Chen",              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-headshot-of-a-confident-s-1772539353003-d526f3c7.png",              date: "1 week ago"},
            {
              id: "4",              category: ["Women's Hair", "Styling"],
              title: "Volume & Texture Tips",              excerpt: "Sophia shares her favorite techniques for creating bounce and movement in any hair type. Includes product recommendations.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-before-and-after-transfor-1772539353929-5b477765.png",              imageAlt: "Professional hair styling techniques",              authorName: "Sophia Martinez",              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-headshot-of-a-talented-ex-1772539352872-9b95b827.png",              date: "1 week ago"},
            {
              id: "5",              category: ["Men's Cuts", "Trends"],
              title: "2024 Haircut Trends",              excerpt: "Marcus breaks down the hottest haircut trends for 2024. From classic to cutting-edge, find your next look.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-vertical-video-thumbnail-for-a-barber--1772539354410-a19dbc62.png",              imageAlt: "Latest men's haircut trends",              authorName: "Marcus Johnson",              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-headshot-of-a-confident-s-1772539353003-d526f3c7.png",              date: "2 weeks ago"},
            {
              id: "6",              category: ["Women's Hair", "Styling"],
              title: "Quick Blow-Dry Tutorial",              excerpt: "Get salon-quality hair at home. Aisha demonstrates her essential blow-dry techniques for any hair texture.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-before-and-after-transfor-1772539353929-5b477765.png",              imageAlt: "Professional blow-dry styling",              authorName: "Aisha Williams",              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-headshot-of-a-talented-ex-1772539352872-9b95b827.png",              date: "2 weeks ago"},
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          carouselMode="buttons"
          tagAnimation="slide-up"
        />
      </div>

      {/* Products Section */}
      <div id="market" data-section="market">
        <ProductCardOne
          title="Hair Care Shop"
          description="Recommended products based on your selected hairstyle. Premium hair care essentials to maintain your look."
          tag="Product Range"
          tagIcon={ShoppingBag}
          products={[
            {
              id: "1",              name: "Premium Hair Gel",              price: "$24.99",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-premium-hair-care-product-bottle-on-a--1772539352531-042da815.png",              imageAlt: "Premium Hair Gel"},
            {
              id: "2",              name: "Deep Conditioning Mask",              price: "$32.99",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-premium-hair-care-product-bottle-on-a--1772539352531-042da815.png",              imageAlt: "Deep Conditioning Mask"},
            {
              id: "3",              name: "Volumizing Shampoo",              price: "$18.99",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-premium-hair-care-product-bottle-on-a--1772539352531-042da815.png",              imageAlt: "Volumizing Shampoo"},
            {
              id: "4",              name: "Argan Oil Treatment",              price: "$28.99",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-premium-hair-care-product-bottle-on-a--1772539352531-042da815.png",              imageAlt: "Argan Oil Treatment"},
            {
              id: "5",              name: "Anti-Frizz Serum",              price: "$22.99",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-premium-hair-care-product-bottle-on-a--1772539352531-042da815.png",              imageAlt: "Anti-Frizz Serum"},
            {
              id: "6",              name: "Styling Pomade",              price: "$19.99",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-premium-hair-care-product-bottle-on-a--1772539352531-042da815.png",              imageAlt: "Styling Pomade"},
          ]}
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          textboxLayout="default"
          useInvertedBackground={false}
          tagAnimation="slide-up"
        />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="What Our Users Say"
          description="Real experiences from satisfied customers who found their perfect style on StyleAI"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",              name: "David Martinez",              handle: "@davidm",              testimonial: "The virtual try-on feature is a game-changer! I finally found a barber who could give me exactly the look I wanted. StyleAI made it so easy.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-headshot-of-a-confident-m-1772539351850-aa6edba6.png",              imageAlt: "David Martinez testimonial"},
            {
              id: "2",              name: "Emma Thompson",              handle: "@emmathompson",              testimonial: "I was nervous about trying something new with my hair. The AI preview gave me confidence, and the stylist nailed it. Love the results!",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-headshot-of-a-confident-f-1772539352374-70aaaa1e.png",              imageAlt: "Emma Thompson testimonial"},
            {
              id: "3",              name: "James Wilson",              handle: "@jameswilson",              testimonial: "Best booking experience ever. I could see the exact stylist, their work, and instant availability. No more phone calls or confusion.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-headshot-of-a-confident-m-1772539352151-affbeb52.png",              imageAlt: "James Wilson testimonial"},
            {
              id: "4",              name: "Sarah Kim",              handle: "@sarahkim",              testimonial: "The gender-specific interface means I get recommendations tailored for me. It's personal, thoughtful, and the stylists are genuinely vetted.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-headshot-of-a-confident-f-1772539352052-c618722d.png",              imageAlt: "Sarah Kim testimonial"},
            {
              id: "5",              name: "Michael Brown",              handle: "@michaelbrown",              testimonial: "Finally a platform that understands what I want. No surprises, no miscommunications. My barber and I are now regulars thanks to StyleAI.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-headshot-of-a-confident-m-1772539351850-aa6edba6.png",              imageAlt: "Michael Brown testimonial"},
            {
              id: "6",              name: "Jessica Lopez",              handle: "@jesslopez",              testimonial: "The product recommendations after my haircut were so helpful. I bought the suggested products and my hair looks amazing weeks later.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQlunMn77AA2pwuzNsZ1UEn6IT/a-professional-headshot-of-a-confident-f-1772539352374-70aaaa1e.png",              imageAlt: "Jessica Lopez testimonial"},
          ]}
          showRating={true}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          tagAnimation="slide-up"
          carouselMode="buttons"
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