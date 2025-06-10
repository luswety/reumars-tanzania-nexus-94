
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&h=800&fit=crop"
          alt="Tanzania Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-max text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight animate-fade-in-up">
            Driving Growth and Innovation in
            <span className="block text-tanzania-gold">East Africa</span>
          </h1>
          
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto animate-slide-in-right">
            Reumars Tanzania Limited is a diversified company specializing in documentation & logistics, 
            manufacturing, real estate, agricultural projects, and strategic business consulting across East Africa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Link to="/about">
              <Button size="lg" className="bg-tanzania-gold text-tanzania-brown hover:bg-tanzania-gold/90 px-8 py-4 text-lg font-semibold">
                Learn More
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
