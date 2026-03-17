"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroSplitDualMedia from "@/components/sections/hero/HeroSplitDualMedia";
import InlineImageSplitTextAbout from "@/components/sections/about/InlineImageSplitTextAbout";
import FeatureCardTwentyOne from "@/components/sections/feature/FeatureCardTwentyOne";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import TestimonialCardTwelve from "@/components/sections/testimonial/TestimonialCardTwelve";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import { Star, Leaf, CheckCircle, AlertTriangle } from "lucide-react";

export default function LandingPage() {
  const handleFormSubmit = (data: Record<string, string>) => {
    console.log("Form submitted:", data);
  };

  const handlePrivacyClick = () => {
    console.log("Privacy clicked");
  };

  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="largeSizeMediumTitles"
      background="aurora"
      cardStyle="inset"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="TN Tree Preservation"
          navItems={[
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Call Now: 615-560-6112",            href: "tel:+16155606112"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDualMedia
          title="24/7 Emergency Tree Service in Middle Tennessee"
          description="Fast, professional tree removal, trimming, and storm cleanup. Licensed, insured, and locally owned. We respond immediately to storm damage and dangerous trees."
          background={{ variant: "aurora" }}
          tag="5-Star Rated | 150+ Reviews"
          tagIcon={Star}
          tagAnimation="slide-up"
          buttons={[
            { text: "Call Now for Emergency Service", href: "tel:+16155606112" },
            { text: "Request Free Estimate", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          mediaItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/carpenter-working-sawmill-wood-manufacture_1303-22896.jpg",              imageAlt: "Professional tree removal crew removing large storm-damaged tree"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/photo-wood-texture-pattern_58702-16256.jpg",              imageAlt: "Emergency tree service crew responding to fallen tree damage"
            }
          ]}
          mediaAnimation="opacity"
          rating={5}
          ratingText="150+ Google Reviews"
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Locally Owned Tree Service Experts in College Grove, TN" }
          ]}
          buttons={[
            { text: "Contact Us Today", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentyOne
          title="Complete Tree Service Solutions"
          description="We handle all your tree service needs—from routine maintenance to emergency storm cleanup."
          tag="Full Service"
          tagIcon={Leaf}
          tagAnimation="slide-up"
          accordionItems={[
            {
              id: "tree-removal",              title: "Tree Removal",              content: "Professional removal of hazardous, dead, or unwanted trees. We use advanced equipment and safety protocols for residential and commercial properties."
            },
            {
              id: "tree-trimming",              title: "Tree Trimming & Pruning",              content: "Expert trimming to maintain tree health, shape, and safety. Improves appearance and prevents storm damage."
            },
            {
              id: "storm-damage",              title: "Storm Damage Cleanup",              content: "24/7 emergency response to fallen trees, broken limbs, and storm damage. Fast, safe removal of dangerous debris."
            },
            {
              id: "emergency-service",              title: "Emergency Tree Service",              content: "Available around the clock for emergency tree situations. Dangerous limbs over houses, fallen trees blocking access, and immediate hazard removal."
            },
            {
              id: "stump-grinding",              title: "Stump Grinding",              content: "Complete stump removal and grinding. We grind stumps below ground level for clean, usable yard space."
            },
            {
              id: "tree-preservation",              title: "Tree Preservation",              content: "Proactive care to keep your trees healthy and strong. Regular maintenance prevents future problems and extends tree life."
            }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/top-view-gardening-tools-ground_23-2148200409.jpg"
          imageAlt="Professional tree service equipment and crew"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
          mediaPosition="right"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          names={[
            "Licensed & Insured",            "Local Ownership",            "24/7 Emergency Response",            "Professional Arborists",            "Same-Day Service Available",            "Storm Damage Specialists",            "10+ Years Experience"
          ]}
          title="Why Choose TN Tree Preservation"
          description="Trusted by homeowners across Franklin, College Grove, and Middle Tennessee for expert service, competitive pricing, and reliable emergency response."
          tag="Local Expertise"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          showCard={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          testimonials={[
            {
              id: "1",              name: "Sarah Johnson",              imageSrc: "http://img.b2bpic.net/free-photo/closeup-attractive-woman-motion-with-takeaway-coffee-business-building-portrait-blonde-girl-holding-paper-cup-with-hot-drink-outdoor_158595-6701.jpg",              imageAlt: "Sarah Johnson, homeowner testimonial"
            },
            {
              id: "2",              name: "Michael Chen",              imageSrc: "http://img.b2bpic.net/free-photo/handsome-young-male-walking-street_158595-4693.jpg",              imageAlt: "Michael Chen, homeowner testimonial"
            },
            {
              id: "3",              name: "Emily Rodriguez",              imageSrc: "http://img.b2bpic.net/free-photo/young-smiling-professional-woman-having-coffee-break-her-full-working-day-she-holds-paper-cup-outdoors-near-business-building-while-relaxing-enjoying-her-beverage_158595-6865.jpg",              imageAlt: "Emily Rodriguez, homeowner testimonial"
            },
            {
              id: "4",              name: "David Kim",              imageSrc: "http://img.b2bpic.net/free-photo/dreaming-young-man-headphones_23-2147747821.jpg",              imageAlt: "David Kim, homeowner testimonial"
            },
            {
              id: "5",              name: "Jennifer Martinez",              imageSrc: "http://img.b2bpic.net/free-photo/girl-walks-woman-brown-coat_1157-42427.jpg",              imageAlt: "Jennifer Martinez, homeowner testimonial"
            },
            {
              id: "6",              name: "Robert Thompson",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-executive-with-big-smile-taking-selfie_23-2147562060.jpg",              imageAlt: "Robert Thompson, homeowner testimonial"
            }
          ]}
          cardTitle="Trusted by 150+ Homeowners"
          cardTag="5-Star Rated Service"
          cardTagIcon={Star}
          cardAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="emergency" data-section="emergency">
        <FeatureCardTwentyOne
          title="Storm Damage & Emergency Response"
          description="Don't wait when your home is at risk. We respond immediately to storm damage emergencies."
          tag="24/7 Available"
          tagIcon={AlertTriangle}
          tagAnimation="slide-up"
          buttons={[
            { text: "Call Emergency Line: 615-560-6112", href: "tel:+16155606112" }
          ]}
          buttonAnimation="slide-up"
          accordionItems={[
            {
              id: "fallen-trees",              title: "Fallen Trees",              content: "Immediate removal of fallen trees blocking driveways, damaging roofs, or creating safety hazards. Same-day emergency response available."
            },
            {
              id: "broken-limbs",              title: "Broken & Hanging Limbs",              content: "Dangerous limbs that threaten your home or property need immediate removal. We safely extract hazardous branches before they cause damage."
            },
            {
              id: "roof-damage",              title: "Storm Debris Cleanup",              content: "Complete cleanup and removal of storm debris, branches, and damaged trees. We leave your property clean and safe."
            },
            {
              id: "insurance-claims",              title: "Insurance Documentation",              content: "We provide photos and detailed documentation for insurance claims to ensure you get fair compensation for storm damage."
            }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/planting-trees-as-part-reforestation-process_23-2149409972.jpg"
          imageAlt="Storm damage tree removal residential property"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
          mediaPosition="left"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get Your Free Tree Service Estimate"
          description="Fill out the form below and we'll contact you within 24 hours. Emergency requests are prioritized."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "phone", type: "tel", placeholder: "Your Phone Number", required: true },
            { name: "address", type: "text", placeholder: "Service Address", required: true },
            { name: "service", type: "text", placeholder: "Service Needed (Tree Removal, Trimming, Storm Damage, etc.)", required: true }
          ]}
          textarea={{
            name: "message",            placeholder: "Describe your tree service needs. Include photos if possible.",            rows: 4,
            required: false
          }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/young-gardener-man-wearing-jumpsuit-hat-holding-mini-rake_141793-46883.jpg"
          imageAlt="TN Tree Preservation professional team"
          mediaAnimation="opacity"
          mediaPosition="right"
          buttonText="Request Free Estimate"
          onSubmit={handleFormSubmit}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="TN Tree Preservation"
          columns={[
            {
              title: "Services",              items: [
                { label: "Tree Removal", href: "#services" },
                { label: "Tree Trimming", href: "#services" },
                { label: "Storm Damage Cleanup", href: "#emergency" },
                { label: "Emergency Service", href: "tel:+16155606112" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Service Areas", href: "#" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Emergency",              items: [
                { label: "Call: 615-560-6112", href: "tel:+16155606112" },
                { label: "24/7 Available", href: "tel:+16155606112" },
                { label: "College Grove, TN", href: "#" },
                { label: "Licensed & Insured", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 TN Tree Preservation. Licensed & Insured | All Rights Reserved"
          onPrivacyClick={handlePrivacyClick}
        />
      </div>
    </ThemeProvider>
  );
}