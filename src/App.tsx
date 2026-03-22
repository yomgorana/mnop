/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Leaf, 
  ArrowRight, 
  Star, 
  TreePine, 
  ShieldCheck, 
  Truck, 
  MessageCircle, 
  Share2, 
  Mail 
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center px-8 py-4 max-w-full">
          <span className="text-2xl font-bold tracking-tighter text-primary font-headline">MNOP</span>
          <div className="hidden md:flex items-center gap-12">
            <a className="text-secondary border-b-2 border-secondary pb-1 font-headline font-medium text-lg" href="#about">About</a>
            <a className="text-primary hover:text-secondary transition-colors font-headline font-medium text-lg" href="#products">Products</a>
            <a className="text-primary hover:text-secondary transition-colors font-headline font-medium text-lg" href="#benefits">Benefits</a>
            <a className="text-primary hover:text-secondary transition-colors font-headline font-medium text-lg" href="#contact">Contact</a>
          </div>
          <button className="bg-primary text-on-primary px-6 py-2 rounded-md font-label font-bold hover:bg-primary-container transition-all active:scale-95 duration-200">
            Shop Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Fresh herbs and sunlight on a rustic wooden table" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_gViqUoDnqTcrmbghdzLx3G1tNEdzR-qlHkyINSc2FcFWc5RqriSxENke64vhF7BNnIexUgbJn3xHO6f9dds0XI7e9D3OtKacI4WTAkVQyhoIGA8q7MU4dzkz8YvSrpCP7BCmT61ydtORGKSe-PzT7XXrOiR0J0ONnvSuPogKmc1CxHx7MEQK2LQAvafOvV1JaH3ZFzhHMeXZX4WTpPTCIum3-l6JWRQWlO4zOdKJxeM6sALSWbtKg8Lv3NduF7hxQAayDpz42m4"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block py-1 px-3 mb-6 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-xs font-bold uppercase tracking-widest font-label">
              Nature's Finest, Delivered to You
            </span>
            <h1 className="text-6xl md:text-8xl font-headline font-bold text-on-surface leading-[1.1] tracking-tight mb-8">
              The Purity of <br/>
              <span className="text-primary italic">Wild Harvests.</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-lg mb-10 leading-relaxed">
              Experience the artisanal craft of Madhumalti. Locally sourced, sustainably processed, and delivered with seasonal integrity.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-md font-bold text-lg hover:shadow-lg transition-all">
                Explore Collection
              </button>
              <button className="text-on-surface font-bold px-8 py-4 border-b-2 border-outline-variant hover:border-primary transition-all">
                Our Story
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Product Showcases */}
      <section id="products" className="py-32 px-8 bg-surface">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-24">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">Seasonal Staples</h2>
              <p className="text-on-surface-variant">Carefully curated selections from our botanical archives, harvested at the peak of their nutritional potency.</p>
            </div>
            <div className="hidden md:block">
              <Leaf className="text-primary w-12 h-12" />
            </div>
          </div>

          {/* Bento-style Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            {/* 1. Lemon Tea */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="md:col-span-7 group"
            >
              <div className="relative overflow-hidden rounded-lg bg-surface-container-highest h-[500px]">
                <img 
                  alt="Lemon tea in a clear glass cup" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpePcLg8ZkE7OF9zIsNlXkAK8HMpTIvpn6qEmF46ZmMTw2Co3WveR2cY567sfWQmXAyQplogPlot7RYBvLpJqX93eeRBXvbnMc3xeZHLPrvEozPLTzys93gBC85wjAQqossduzjE4vPSIzFcD8fnlOdXc5u9NkkcueiqORh0cwoH7-XbA_ZrrBML571SBcS2veWRGl1_bPFCkHsfI056zhElp9DeNS8tNi4GBsb7OeNK1XqINg9mQgoCSpE8Bt76hrM-CCILJcrmA"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/60 to-transparent text-white">
                  <h3 className="text-3xl font-headline font-bold mb-2">Lemon Tea</h3>
                  <p className="max-w-md opacity-90">Refreshing and citrusy, perfect for a morning boost. Our blend uses sun-dried zests and premium green leaves.</p>
                  <button className="mt-6 flex items-center gap-2 font-bold hover:gap-4 transition-all">
                    Shop Now <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* 2. Organic Mushrooms */}
            <div className="md:col-span-5 flex flex-col gap-8">
              <div className="bg-surface-container p-10 rounded-lg flex-1 flex flex-col justify-center">
                <div className="mb-6">
                  <Leaf className="text-secondary w-10 h-10" />
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4">Organic Mushrooms</h3>
                <p className="text-on-surface-variant mb-6 leading-relaxed">
                  Earthy, nutrient-rich, and locally grown in controlled environments to ensure peak umami and texture.
                </p>
                <div className="flex items-center gap-2">
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-full text-xs font-bold font-label">NON-GMO</span>
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-full text-xs font-bold font-label">LOCAL</span>
                </div>
              </div>
              <div className="h-64 rounded-lg overflow-hidden bg-surface-container-highest">
                <img 
                  alt="Exotic mushrooms on a dark background" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7GGgNtywiL3GhA6nRbwETLOnpRbgKa9l1_GDxBxws9xdDFu7co56evE1mUvDchsJqInBSDUcB-mcpBq-VQF5IU38THdCcYZldPtF4qr2zTjrC0EiLua97NLJKa_aOrf-gm-hyF9j2Sg545ShSrvsCcsJre239w2e0dmHwpQybk7o3TIcEBNrUG95sIpJQN2bcNF0y37UZJntyCOeZiQtugiyv0xvN1yXPL80dyZAx26BZHXy8gUxlyv4T-vSY9FB6xtu-oM6tMUw"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* 3. Premium Saffron */}
            <div className="md:col-span-12 mt-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 rounded-lg overflow-hidden botanical-shadow bg-surface-container-lowest">
                <div className="col-span-12 md:col-span-5 h-[400px]">
                  <img 
                    alt="Saffron strands in a bowl" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvdUoHrZfw-ewAZts_0cJpr1UrBAOkpqcIxPIGFv6eKJdZISZCeAy_SwyMZOBn3PbudoXsGh3JK1046r_f06rZe52MADyNZSn3GNqdUCf8Psn5IeKxUfWA-17FCq1wYD6qE0xhPklCTshXdbhuSeAcyCaQRqBp0Pavk3mkEOZv40I-E_WLJMaUIAMxdV64wdlkgVw5wtEJKMQ3RFNcVekBaIbTp-xc-FE_w8W7EfIphFifj5PBk3zKFpvgA2qCoSUjQsRU-LtDOMk"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="col-span-12 md:col-span-7 p-12 flex flex-col justify-center bg-white">
                  <div className="flex items-center gap-2 mb-4 text-secondary">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-label font-bold tracking-widest text-sm uppercase">Limited Reserve</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-headline font-bold mb-6">Premium Saffron</h3>
                  <p className="text-lg text-on-surface-variant mb-8 leading-relaxed max-w-xl">
                    Known as the gold of spices, our saffron is handpicked for purity and potency. A single strand transforms any culinary creation into a masterpiece of aroma and hue.
                  </p>
                  <button className="bg-secondary text-on-secondary px-10 py-4 rounded-md font-bold w-fit hover:bg-opacity-90 transition-all">
                    Discover Premium Grade
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-32 bg-surface-container-low">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-headline font-bold mb-8 italic">The Madhumalti Promise</h2>
            <p className="text-xl text-on-surface-variant">We bridge the gap between ancient botanical wisdom and modern wellness through uncompromising standards.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <TreePine className="text-primary w-8 h-8" />
              </div>
              <h4 className="text-2xl font-headline font-bold mb-4">Sustainability First</h4>
              <p className="text-on-surface-variant leading-relaxed">Every product is sourced using regenerative practices that give back to the soil as much as they take.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <ShieldCheck className="text-primary w-8 h-8" />
              </div>
              <h4 className="text-2xl font-headline font-bold mb-4">Unyielding Purity</h4>
              <p className="text-on-surface-variant leading-relaxed">No additives, no synthetics. Just pure, organic ingredients exactly as nature intended them to be.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Truck className="text-primary w-8 h-8" />
              </div>
              <h4 className="text-2xl font-headline font-bold mb-4">Direct Sourcing</h4>
              <p className="text-on-surface-variant leading-relaxed">By cutting the middlemen, we ensure farmers get fair value and you get the freshest harvests possible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & WhatsApp Section */}
      <section id="contact" className="py-32 px-8">
        <div className="container mx-auto">
          <div className="bg-primary rounded-xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
            <div className="md:w-1/2 p-12 md:p-20 text-on-primary">
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8">Have questions about our products?</h2>
              <p className="text-xl mb-12 opacity-80 leading-relaxed">
                Our botanical experts are available to help you choose the right blend for your lifestyle. Connect with us directly for personalized recommendations.
              </p>
              <a 
                className="inline-flex items-center gap-4 bg-background text-primary px-8 py-5 rounded-md font-bold text-xl hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1" 
                href="https://wa.me/917976686439" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-8 h-8 fill-current" />
                Chat on WhatsApp
              </a>
            </div>
            <div className="md:w-1/2 relative min-h-[400px]">
              <img 
                alt="Greenhouse interior" 
                className="absolute inset-0 w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC1sQjc2AHPt4_IpHh1xSmAfwfRjtI6Nb3rGEFCr6-UDSuLvo8WdQERvO0PJ-EYxj8tcMN_QTeC4FfdpdBX4HclcSJ39qJ2hjZbVs4nWcdEBSqRcnEZSTdvtR5O4X5Sa_kP_-UpaPkTVe_8S0HEf4WyeM8pDOGeViuZ5BIcrvaSPPoVMa1p7p9fe61YBMrZ51oRitEZkom43yWgm3gDDCBvIvZ7dViecze8f-zeSDFuy8_lfStnipES8NU16bt8nqkgFPxDLJjSOk"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-dim text-primary border-t border-outline-variant/40">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="text-xl font-bold font-headline">MNOP</span>
            <p className="font-body text-sm leading-relaxed max-w-xs text-center md:text-left text-on-surface/80">
              © 2024 MNOP - Madhumalti Natural and Organic Products. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="font-body text-sm font-semibold text-secondary transition-colors" href="#">About</a>
            <a className="font-body text-sm text-primary/80 hover:text-secondary transition-colors" href="#">Products</a>
            <a className="font-body text-sm text-primary/80 hover:text-secondary transition-colors" href="#">Benefits</a>
            <a className="font-body text-sm text-primary/80 hover:text-secondary transition-colors" href="#">Contact</a>
            <a className="font-body text-sm text-primary/80 hover:text-secondary transition-colors" href="#">Privacy Policy</a>
          </div>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
              <Share2 className="w-5 h-5" />
            </a>
            <a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
