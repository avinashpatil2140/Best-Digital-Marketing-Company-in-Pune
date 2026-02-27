"use client";
import Head from "next/head";
import { motion } from "framer-motion";
import { useState } from "react";

// Animation definitions (accessible to all components)
const fadeUp = {
  hidden:{opacity:0,y:40},
  visible:{opacity:1,y:0,transition:{duration:0.6}}
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function Home() {

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return(
    <main className="bg-white text-gray-900">
        <Head>
          <title>Digital Marketing Agency in Pune | Best Digital Marketing Company</title>
          <meta name="description" content="Looking for a digital marketing agency in Pune? BizOn Digital is the best digital marketing company in Pune providing top digital marketing services in Pune with experienced consultants." />
        </Head>

        {/* NAVBAR */}
        <nav className="sticky top-0 bg-white/80 backdrop-blur-lg border-b z-50 shadow-sm">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
            <a href="/" className="hover:opacity-80 transition flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-[#F97316] to-[#2563EB] rounded-lg flex items-center justify-center font-bold text-white text-xl">
                B
              </div>
              <div>
                <h2 className="font-black text-xl text-[#F97316] leading-tight">BIZON</h2>
                <h3 className="font-bold text-xs text-[#2563EB] leading-tight">DIGITAL</h3>
              </div>
            </a>
            <div className="hidden md:flex gap-8 text-sm font-semibold">
              <a href="/#home" className="hover:text-[#F97316] transition">Home</a>
              <a href="/#services" className="hover:text-[#F97316] transition">Services</a>
              <a href="https://bizondigital.com/about" className="hover:text-[#F97316] transition">About</a>
              <a href="https://bizondigital.com/blog" className="hover:text-[#F97316] transition">Blog</a>
              <a href="https://bizondigital.com/contact" className="hover:text-[#F97316] transition">Contact</a>
            </div>
            <a href="https://bizondigital.com/contact"
               className="bg-[#F97316] text-white px-6 py-2 rounded-full font-bold hover:bg-orange-700 transition shadow-md">
               Get Free Quote
            </a>
          </div>
        </nav>

        {/* HERO */}
        <section id="home" className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-32 px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible"
            className="max-w-5xl mx-auto">

            <motion.h1 className="text-4xl md:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-[#F97316]"
              variants={fadeUp}>
              Top Digital Marketing Agency in Pune Driving Real Business Growth
            </motion.h1>

            <motion.p className="mt-8 text-lg text-gray-600"
              variants={fadeUp}>
              Award-winning digital marketing agency in Pune delivering SEO, PPC, social media, content marketing and more.
              As the best digital marketing company in Pune, we provide top digital marketing services in Pune and expert consultants to build your brand online. Transform your online presence with data-driven strategies.
            </motion.p>

            <motion.div className="flex flex-col md:flex-row gap-4 justify-center mt-10"
              variants={staggerContainer} initial="hidden" animate="visible">
              <motion.a href="https://bizondigital.com/contact"
                 className="bg-[#F97316] text-white px-10 py-4 rounded-full font-bold hover:bg-orange-700 hover:shadow-xl transition transform hover:-translate-y-1 text-center"
                 variants={scaleUp}>
                🎯 Free Marketing Audit
              </motion.a>

              <motion.a href="https://bizondigital.com/services"
                 className="border-2 border-[#F97316] text-[#F97316] px-10 py-4 rounded-full font-bold hover:bg-[#F97316] hover:text-white transition text-center"
                 variants={scaleUp}>
                Explore Our Services
              </motion.a>

              <motion.a href="https://wa.me/917030323838?text=Hello!%20I%27m%20interested%20in%20digital%20marketing%20services%20in%20Pune."
                className="bg-gray-900 text-white px-10 py-4 rounded-full font-bold hover:bg-gray-800 hover:shadow-xl transition transform hover:-translate-y-1 text-center"
                variants={scaleUp}>
                📞 Schedule Free Call
              </motion.a>
            </motion.div>

            <motion.p className="mt-6 text-sm text-gray-500" variants={fadeUp}>
              ⭐ 4.9/5 Average Rating | 25+ Awards | 120+ Successful Projects | 8+ Years Experience
            </motion.p>
          </motion.div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{once: true}}>
              <h2 className="text-4xl font-extrabold mb-6">
                Why Choose BizOn Digital - Top Digital Marketing Agency Pune?
              </h2>

              <p className="text-gray-600 max-w-3xl mx-auto">
                As Pune's leading digital marketing agency, we combine strategic expertise with data analysis to deliver campaigns that convert.
                Our results-driven approach ensures every marketing decision is backed by research and drives real business impact.
              </p>
            </motion.div>

            <motion.div className="grid md:grid-cols-3 gap-8 mt-14" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once: true}}>
            <Feature title="📈 SEO & Analytics Expertise"
            desc="Optimizing websites for search and using analytics to guide growth and improve visibility in Pune and beyond."/>
            <Feature title="🎯 Data-Driven Campaigns"
            desc="Our marketing strategies are based on research, audience insights, and measurable KPIs to maximize ROI."/>
            <Feature title="🚀 Full-Service Marketing"
            desc="End-to-end digital marketing services including SEO, PPC, social media, content, and email marketing."/>
            </motion.div>
          </div>
        </section>

        {/* TRUSTED CLIENTS */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-8">
              Trusted by 120+ Brands Across Pune & India
            </h3>
            <motion.div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once: true}}>
              <ClientLogo name="Tech Solutions"/>
              <ClientLogo name="Digital First"/>
              <ClientLogo name="Eco Partners"/>
              <ClientLogo name="Smart Future"/>
              <ClientLogo name="Commerce Peak"/>
              <ClientLogo name="Brand Labs"/>
            </motion.div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-24 px-6" id="services">
          <div className="max-w-7xl mx-auto">

            <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" variants={fadeUp} viewport={{once: true}}>
              <h2 className="text-4xl font-extrabold mb-4">
                Digital Marketing Services Pune
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive digital marketing services for brands seeking growth across SEO, PPC, social media, and more
              </p>
            </motion.div>
            <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once: true}}>

              <ServiceCard title="🔍 SEO Optimization"
                url="https://bizondigital.com/services/branding"
                desc="Improve your search engine rankings and drive organic traffic with our SEO specialists."/>

              <ServiceCard title="💡 PPC & Paid Ads"
                url="https://bizondigital.com/services/web-development"
                desc="Maximize ROI with targeted pay‑per‑click campaigns on Google, Facebook, and more."/>

              <ServiceCard title="📱 Social Media Marketing"
                url="https://bizondigital.com/services/branding"
                desc="Engage your audience across platforms with creative social media strategies and management."/>

              <ServiceCard title="✍️ Content Marketing"
                url="https://bizondigital.com/services/web-development"
                desc="Attract and retain customers with compelling blogs, video, and copy that tells your brand story."/>

              <ServiceCard title="📧 Email & CRM"
                url="https://bizondigital.com/services/web-development"
                desc="Nurture leads and drive conversions with personalised email marketing and CRM integration."/>

              <ServiceCard title="📊 Marketing Audits & Consulting"
                url="https://bizondigital.com/services/branding"
                desc="Get expert analysis and advice from top digital marketing consultants in Pune to improve your strategy."/>

            </motion.div>

            <motion.div className="text-center mt-12" initial="hidden" whileInView="visible" variants={fadeUp} viewport={{once: true}}>
              <a href="https://bizondigital.com/services" className="inline-block bg-[#F97316] text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700 transition hover:shadow-lg">
                View All Services →
              </a>
            </motion.div>

          </div>
        </section>

        {/* ABOUT */}
        <section className="py-24 px-6" id="about">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{once: true}}>
              <h2 className="text-4xl font-extrabold mb-6">
                About BizOn Digital - Digital Marketing Agency Pune
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                We are the best digital marketing company in Pune, providing full-service online growth strategies for businesses of all sizes.
                Since 2017, we've helped 120+ companies like yours increase traffic, leads, and sales through targeted campaigns and expert consulting.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Our team combines marketing knowledge with deep industry insights and analytics,
                ensuring every campaign we run drives measurable results and maximizes your return on investment.
              </p>

              <div className="flex gap-4 mt-8">
                <a href="https://bizondigital.com/contact"
                  className="inline-block bg-[#F97316] text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700 hover:shadow-lg transition">
                  📞 Free Consultation
                </a>
                <a href="https://bizondigital.com/about"
                  className="inline-block border-2 border-[#F97316] text-[#F97316] px-8 py-3 rounded-full font-bold hover:bg-orange-50 transition">
                  Learn More
                </a>
              </div>
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once: true}}>
              <Stat number="120+" label="Happy Clients"/>
              <Stat number="⭐ 4.9" label="Average Rating"/>
              <Stat number="8+" label="Years in Business"/>
              <Stat number="98%" label="Success Rate"/>
            </motion.div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" variants={fadeUp} viewport={{once: true}}>
              <h2 className="text-4xl font-extrabold mb-4">
                How We Market - Digital Marketing Process
              </h2>
              <p className="text-gray-600">
                Our proven 6-step digital marketing process ensures your campaigns are targeted, measurable, and growth-focused
              </p>
            </motion.div>

            <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once: true}}>
              <Process num="01" title="Audit & Research" desc="Analyze your current online presence, competitors and audience to identify opportunities."/>
              <Process num="02" title="Strategy & Planning" desc="Develop a customised marketing plan outlining channels, budgets, and KPIs aligned with business goals."/>
              <Process num="03" title="Campaign Setup" desc="Create ad campaigns, SEO optimisations, content calendars, and setup tracking for accurate measurement."/>
              <Process num="04" title="Execution & Optimization" desc="Launch campaigns across PPC, social, email and SEO while continuously optimizing based on performance."/>
              <Process num="05" title="Reporting & Analysis" desc="Provide transparent reports and deep analytics to understand ROI and guide next steps."/>
              <Process num="06" title="Scaling & Growth" desc="Iterate on successful tactics, scale budgets, and explore new channels for sustained growth."/>
            </motion.div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 px-6 bg-gradient-to-br from-orange-50 to-white" id="testimonials">
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" variants={fadeUp} viewport={{once: true}}>
              <h2 className="text-4xl font-extrabold mb-4">
                Success Stories from Our Clients
              </h2>

              <p className="text-gray-600 max-w-2xl mx-auto">
                See how brands in Pune and across India have grown traffic, leads, and revenue working with the top digital marketing agency Pune.
              </p>
            </motion.div>

            <Testimonials currentIndex={currentTestimonial} setCurrentIndex={setCurrentTestimonial}/>

            <motion.div className="text-center mt-12" initial="hidden" whileInView="visible" variants={fadeUp} viewport={{once: true}}>
              <a href="https://bizondigital.com/contact"
                 className="inline-block bg-[#F97316] text-white px-10 py-4 rounded-full font-bold hover:bg-orange-700 hover:shadow-lg transition">
                 ✨ Start Your Success Story
              </a>
            </motion.div>
          </div>
        </section>

        {/* TEAM */}
        <section className="bg-gray-50 py-24 px-6" id="team">
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" variants={fadeUp} viewport={{once: true}}>
              <h2 className="text-4xl font-extrabold mb-4">
                Meet Our Leadership Team
              </h2>
              <p className="text-gray-600">
                Expert professionals dedicated to your digital success
              </p>
            </motion.div>

            <motion.div className="grid md:grid-cols-2 gap-12" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once: true}}>
              <TeamMember name="Rahul Wanchoo" title="Founder & Marketing Strategist" desc="Marketing veteran with over a decade of experience driving results for Pune businesses through SEO, PPC and growth strategies."/>
              <TeamMember name="Suresh Khorate" title="Head of Performance Marketing" desc="Specialist in paid media, analytics and conversion optimization. He ensures every campaign delivers measurable ROI."/>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-24 px-6" id="faq">
          <div className="max-w-4xl mx-auto">
            <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" variants={fadeUp} viewport={{once: true}}>
              <h2 className="text-4xl font-extrabold mb-4">
                Digital Marketing FAQs
              </h2>
              <p className="text-gray-600">
                Common questions about our digital marketing services, strategy, and results
              </p>
            </motion.div>

            <motion.div className="space-y-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once: true}}>
              <FAQItem q="What types of digital marketing services do you offer?"
                a="We provide SEO, PPC, social media marketing, content marketing, email campaigns, and full-funnel growth strategies tailored to your business."/>

              <FAQItem q="How do you measure success?"
                a="Success is measured using clear KPIs such as traffic, leads, conversions and ROI, all tracked through transparent reporting tools."/>

              <FAQItem q="How long before I see results?"
                a="Organic SEO usually takes 3–6 months, while paid campaigns can generate leads immediately. We focus on both short-term wins and long-term growth."/>

              <FAQItem q="Do you only work with Pune businesses?"
                a="While we're based in Pune, we serve clients across India and globally. Many of our Pune clients appreciate working with local digital marketing consultants."/>

              <FAQItem q="Can you manage my existing marketing efforts?"
                a="Absolutely! We can audit and take over existing campaigns, refine strategy, and optimize performance for better results."/>

              <FAQItem q="What makes you the best digital marketing company in Pune?"
                a="Our local expertise, transparent reporting, and a results-driven team set us apart. We combine creativity with analytics to deliver top-tier marketing services."/>
            </motion.div>
          </div>
        </section>

        {/* CTA - Contact Section */}
        <section className="py-24 px-6 bg-gradient-to-r from-[#F97316] via-orange-500 to-red-500 text-white" id="contact">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{once: true}}>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                Ready To Grow Your Business Online?
              </h2>

              <p className="text-xl opacity-95 mb-10">
                Schedule your FREE 30-minute consultation with our digital marketing consultants in Pune. 
                Get a campaign audit, strategy outline, timeline, and investment estimation with no obligations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/917030323838?text=Hello!%20I%27m%20interested%20in%20digital%20marketing%20services%20in%20Pune."
                   className="bg-white text-[#F97316] px-10 py-4 rounded-full font-bold hover:shadow-xl transition transform hover:-translate-y-1 text-center">
                   💬 Message on WhatsApp
                </a>
                <a href="tel:+917030323838"
                  className="bg-gray-900 text-white px-10 py-4 rounded-full font-bold hover:bg-gray-800 transition transform hover:-translate-y-1 text-center">
                  📞 Call: +91 7030323838
                </a>
              </div>

              <div className="mt-10 pt-10 border-t border-white/20 flex flex-col sm:flex-row justify-center gap-8 text-sm">
                <div>
                  <p className="font-bold text-lg">🏢 Based in Pune</p>
                  <p className="opacity-90">Serving businesses across India</p>
                </div>
                <div>
                  <p className="font-bold text-lg">⭐ 4.9/5 Rating</p>
                  <p className="opacity-90">From 120+ happy clients</p>
                </div>
                <div>
                  <p className="font-bold text-lg">🚀 8+ Years</p>
                  <p className="opacity-90">Proven track record</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FINAL CTA - Dark Background */}
        <section className="py-16 px-6 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{once: true}}>
              <h3 className="text-2xl font-extrabold mb-6">
                💡 Have a Project Idea?
              </h3>

              <p className="text-gray-300 mb-8">
                Let's discuss how BizOn Digital can transform your online presence and accelerate your business growth
              </p>

              <a href="https://bizondigital.com/contact"
                className="inline-block bg-[#F97316] text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700 transition">
                Start Your Free Consultation
              </a>
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-white py-16 px-6 border-t-4 border-[#F97316]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F97316] to-[#2563EB] rounded-lg flex items-center justify-center font-bold text-white text-lg">
                    B
                  </div>
                  <div>
                    <h3 className="font-black text-sm text-[#F97316] leading-tight">BIZON</h3>
                    <h4 className="font-bold text-xs text-[#2563EB] leading-tight">DIGITAL</h4>
                  </div>
                </div>
                <p className="text-gray-400">Full-service digital marketing agency in Pune. We grow traffic, leads, and sales using proven SEO, PPC, social and content strategies.</p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
                <ul className="space-y-3">
                  <li><a href="/#home" className="text-gray-400 hover:text-[#F97316] transition">Home</a></li>
                  <li><a href="https://bizondigital.com/services" className="text-gray-400 hover:text-[#F97316] transition">Services</a></li>
                  <li><a href="https://bizondigital.com/about" className="text-gray-400 hover:text-[#F97316] transition">About Us</a></li>
                  <li><a href="https://bizondigital.com/blog" className="text-gray-400 hover:text-[#F97316] transition">Blog</a></li>
                  <li><a href="https://bizondigital.com/contact" className="text-gray-400 hover:text-[#F97316] transition">Contact</a></li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-bold text-lg mb-4 text-white">Services</h4>
                <ul className="space-y-3">
                  <li><a href="https://bizondigital.com/services/seo" className="text-gray-400 hover:text-[#F97316] transition">SEO</a></li>
                  <li><a href="https://bizondigital.com/services/paid-ads" className="text-gray-400 hover:text-[#F97316] transition">Paid Ads</a></li>
                  <li><a href="https://bizondigital.com/services/social-media" className="text-gray-400 hover:text-[#F97316] transition">Social Media</a></li>
                  <li><a href="https://bizondigital.com/services/branding" className="text-gray-400 hover:text-[#F97316] transition">Branding</a></li>
                  <li><a href="https://bizondigital.com/services/web-development" className="text-gray-400 hover:text-[#F97316] transition">Web Development</a></li>
                  <li><a href="https://bizondigital.com/services/ecommerce" className="text-gray-400 hover:text-[#F97316] transition">E-Commerce</a></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-bold text-lg mb-4 text-white">Support</h4>
                <ul className="space-y-3">
                  <li><a href="https://bizondigital.com/faq" className="text-gray-400 hover:text-[#F97316] transition">FAQ</a></li>
                  <li><a href="https://bizondigital.com/contact" className="text-gray-400 hover:text-[#F97316] transition">Contact Us</a></li>
                  <li><a href="https://bizondigital.com/terms" className="text-gray-400 hover:text-[#F97316] transition">Terms & Conditions</a></li>
                  <li><a href="https://bizondigital.com/privacy" className="text-gray-400 hover:text-[#F97316] transition">Privacy Policy</a></li>
                  <li><a href="https://bizondigital.com/refund" className="text-gray-400 hover:text-[#F97316] transition">Refund Policy</a></li>
                  <li><a href="https://bizondigital.com/help" className="text-gray-400 hover:text-[#F97316] transition">Help Desk</a></li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 pt-8 mt-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Contact Info */}
                <div>
                  <p className="text-gray-400 mb-2">📞 Contact Us</p>
                  <a href="tel:+917030323838" className="text-[#F97316] font-bold hover:underline text-lg">+91 7030323838</a>
                  <p className="text-gray-400 text-sm mt-1">Business Hours: 10 AM - 6 PM</p>
                </div>

                {/* Social Media */}
                <div className="text-center">
                  <p className="text-gray-400 mb-3">Follow Us On Social Media</p>
                  <div className="flex gap-4 justify-center">
                    <a href="https://facebook.com" target="_blank" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#F97316] transition" rel="noopener noreferrer">f</a>
                    <a href="https://twitter.com" target="_blank" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#F97316] transition" rel="noopener noreferrer">𝕏</a>
                    <a href="https://linkedin.com" target="_blank" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#F97316] transition" rel="noopener noreferrer">in</a>
                    <a href="https://instagram.com" target="_blank" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#F97316] transition" rel="noopener noreferrer">📷</a>
                  </div>
                </div>

                {/* Copyright */}
                <div className="text-right text-gray-400 text-sm">
                  <p>© 2025 BizOn Digital</p>
                  <p>Digital Marketing Agency Pune</p>
                  <p>All rights reserved</p>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </main>
  );
}

/* COMPONENTS */

function Feature({title,desc}){
  return(
    <motion.div className="p-10 rounded-3xl border bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition" variants={scaleUp}>
      <h3 className="font-bold text-xl mb-3 text-[#F97316]">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </motion.div>
  )
}

function ServiceCard({title,desc,url}){
  return(
    <motion.a href={url}
      className="group bg-white/80 backdrop-blur p-10 rounded-3xl border border-gray-200 hover:shadow-2xl hover:-translate-y-3 hover:bg-white transition block" variants={scaleUp}>
      <h3 className="font-bold text-xl mb-4 group-hover:text-[#F97316] transition">{title}</h3>
      <p className="text-gray-600">{desc}</p>
      <div className="mt-4 inline-block group-hover:translate-x-2 transition">→</div>
    </motion.a>
  )
}

function Stat({number,label}){
  return(
    <motion.div className="p-8 border border-gray-200 rounded-3xl text-center bg-white hover:shadow-lg hover:border-[#F97316] transition" variants={scaleUp}>
      <h4 className="text-4xl font-extrabold text-[#F97316]">{number}</h4>
      <p className="text-gray-600 mt-2 font-semibold">{label}</p>
    </motion.div>
  )
}

function Process({num,title,desc}){
  return(
    <motion.div className="p-10 border-2 border-gray-200 rounded-3xl bg-white hover:border-[#F97316] hover:shadow-lg transition group" variants={scaleUp}>
      <div className="text-4xl font-extrabold text-[#F97316] mb-4">{num}</div>
      <h4 className="font-bold text-xl mb-2 group-hover:text-[#F97316]">{title}</h4>
      <p className="text-gray-600">{desc}</p>
    </motion.div>
  )
}

function ClientLogo({name}){
  return(
    <motion.div className="flex items-center justify-center p-6 border rounded-lg hover:shadow-md transition bg-white" variants={scaleUp}>
      <div className="text-sm font-bold text-gray-600">{name}</div>
    </motion.div>
  )
}

const testimonialData = [
  {
    company: "Tech Startup",
    name: "Priya Sharma",
    stars: 5,
    text: "BizOn Digital's SEO and PPC campaigns helped us double our organic traffic in 6 months and cut customer acquisition cost by 30%. Their digital marketing consultants in Pune truly understand growth."
  },
  {
    company: "E-Commerce Brand",
    name: "Rohan Patel",
    stars: 5,
    text: "Their paid ads strategy scaled our ROI to 10x and sales grew 3x quarter over quarter. BizOn Digital is the best digital marketing company in Pune for measurable results."
  },
  {
    company: "SaaS Company",
    name: "Neha Desai",
    stars: 5,
    text: "Our lead volume tripled after their content marketing and email campaigns. The team at BizOn Digital is a top digital marketing agency Pune that delivers."
  },
  {
    company: "Digital Media Platform",
    name: "Aisha Khan",
    stars: 5,
    text: "Their social media campaigns grew our engagement by 400% and we gained thousands of subscribers in weeks. These consultants are experts in digital marketing services in Pune."
  },
  {
    company: "Mobile App Studio",
    name: "Vikram Singh",
    stars: 5,
    text: "Our downloads increased by 70% thanks to their targeted ad campaigns and ASO work. BizOn Digital is truly a top digital marketing agency Pune."
  }
];

function Testimonials({currentIndex, setCurrentIndex}){
  const current = testimonialData[currentIndex];
  
  return(
    <motion.div className="bg-white border-2 border-gray-200 rounded-3xl p-10 md:p-16 max-w-2xl mx-auto" 
      initial="hidden" whileInView="visible" variants={scaleUp} viewport={{once: true}}>
      <div className="flex gap-1 mb-6">
        {[...Array(current.stars)].map((_, i) => <span key={i} className="text-2xl">⭐</span>)}
      </div>
      
      <p className="text-2xl font-bold mb-6 text-gray-900">"{current.text}"</p>
      
      <div className="border-t pt-6">
        <p className="font-bold text-[#F97316]">{current.company}</p>
        <p className="text-gray-700">{current.name}</p>
      </div>

      <div className="flex gap-2 justify-center mt-8">
        {testimonialData.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition ${index === currentIndex ? 'bg-[#F97316] w-8' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </motion.div>
  )
}

function TeamMember({name, title, desc}){
  return(
    <motion.div className="bg-white border-2 border-gray-200 rounded-3xl p-10 hover:shadow-xl hover:border-[#F97316] transition" variants={scaleUp}>
      <div className="w-20 h-20 bg-gradient-to-br from-[#F97316] to-orange-600 rounded-full mx-auto mb-6"></div>
      <h3 className="text-2xl font-bold text-center mb-2">{name}</h3>
      <p className="text-[#F97316] font-semibold text-center text-sm mb-4">{title}</p>
      <p className="text-gray-600 text-center">{desc}</p>
    </motion.div>
  )
}

function FAQItem({q, a}){
  const [open, setOpen] = useState(false);
  
  return(
    <motion.div className="border-2 border-gray-200 rounded-2xl p-6 hover:border-[#F97316] transition cursor-pointer" 
      onClick={() => setOpen(!open)} variants={fadeUp}>
      <div className="flex justify-between items-start">
        <h4 className="font-bold text-lg text-gray-900">{q}</h4>
        <span className="text-2xl text-[#F97316]">{open ? '−' : '+'}</span>
      </div>
      {open && (
        <motion.p className="text-gray-600 mt-4 leading-relaxed" initial={{opacity: 0}} animate={{opacity: 1}}>
          {a}
        </motion.p>
      )}
    </motion.div>
  );
}
