
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import FeaturedServices from '@/components/FeaturedServices';
import TestimonialsSection from '@/components/TestimonialsSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      
      {/* Company Introduction */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Empowering East Africa Through <span className="text-gradient">Diversified Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded with a vision to drive sustainable economic growth across East Africa, 
              Reumars Tanzania Limited stands as a beacon of innovation and excellence. 
              Our diversified portfolio spans multiple industries, from documentation and logistics 
              to manufacturing and real estate development, positioning us as a trusted partner 
              for businesses seeking comprehensive solutions.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Business Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">12</div>
                <div className="text-muted-foreground">Core Services</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedServices />
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
