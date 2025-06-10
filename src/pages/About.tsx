
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const founders = [
    {
      name: 'Mr. Reuben Ambokile Mwakapala',
      role: 'Founder & Chairman',
      bio: 'A visionary leader with over 20 years of experience in business development across East Africa. Mr. Mwakapala has been instrumental in establishing strategic partnerships and driving sustainable growth.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Ms. Marsia Philip Tillya',
      role: 'Co-Founder & Managing Director',
      bio: 'An accomplished business executive with expertise in operations management and strategic planning. Ms. Tillya brings extensive knowledge in logistics and manufacturing operations.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c27ba47e?w=300&h=300&fit=crop&crop=face'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=400&fit=crop"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient opacity-75"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Reumars</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Building the future of East Africa through innovation, integrity, and excellence
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Reumars Tanzania Limited was founded with a clear vision: to drive sustainable 
                  economic growth and innovation across East Africa. What began as a small 
                  documentation and logistics company has evolved into a diversified business 
                  conglomerate with operations spanning multiple industries.
                </p>
                <p>
                  Our journey reflects the dynamic spirit of Tanzania and the broader East African 
                  region. Through strategic partnerships, innovative solutions, and unwavering 
                  commitment to excellence, we have established ourselves as a trusted partner 
                  for businesses seeking comprehensive, reliable services.
                </p>
                <p>
                  Today, Reumars Tanzania Limited stands as a testament to what can be achieved 
                  when vision meets execution, and when local expertise combines with global 
                  best practices.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop"
                alt="Our Story"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-earth-light">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="service-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading diversified business conglomerate in East Africa, 
                  recognized for innovation, sustainability, and positive impact on 
                  economic development across the region.
                </p>
              </CardContent>
            </Card>
            <Card className="service-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide comprehensive, high-quality business solutions that drive 
                  growth for our clients while contributing to the sustainable 
                  development of East African communities through ethical business practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Our <span className="text-gradient">Leadership</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the visionary leaders who drive our mission and guide our strategic direction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <Card key={index} className="service-card">
                <CardContent className="p-8 text-center">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
                  />
                  <h3 className="text-xl font-semibold mb-2">{founder.name}</h3>
                  <p className="text-primary font-medium mb-4">{founder.role}</p>
                  <p className="text-muted-foreground">{founder.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Strength */}
      <section className="section-padding bg-earth-light">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Financial <span className="text-gradient">Strength</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our strong financial foundation enables us to pursue ambitious projects 
              and maintain sustainable growth across all business segments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="service-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">$50M+</div>
                <h4 className="font-semibold mb-2">Share Capital</h4>
                <p className="text-sm text-muted-foreground">
                  Strong capital base supporting our diverse operations
                </p>
              </CardContent>
            </Card>
            <Card className="service-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <h4 className="font-semibold mb-2">Strategic Investments</h4>
                <p className="text-sm text-muted-foreground">
                  Diversified portfolio across multiple sectors
                </p>
              </CardContent>
            </Card>
            <Card className="service-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">AAA</div>
                <h4 className="font-semibold mb-2">Credit Rating</h4>
                <p className="text-sm text-muted-foreground">
                  Excellent financial stability and creditworthiness
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
