
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Calendar, Home, Users } from 'lucide-react';

const FeaturedServices = () => {
  const services = [
    {
      icon: FileText,
      title: 'Documentation & Logistics',
      description: 'Comprehensive documentation services and efficient logistics solutions for seamless business operations.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop'
    },
    {
      icon: Calendar,
      title: 'Manufacturing & Production',
      description: 'Advanced manufacturing capabilities with state-of-the-art facilities and quality control systems.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop'
    },
    {
      icon: Home,
      title: 'Real Estate Development',
      description: 'Strategic real estate and civil engineering projects that contribute to urban development.',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=250&fit=crop'
    },
    {
      icon: Users,
      title: 'Agricultural Projects',
      description: 'Innovative agricultural solutions and agro-processing facilities to enhance food security.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=250&fit=crop'
    },
  ];

  return (
    <section className="section-padding bg-earth-light">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Our Core <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive business solutions across multiple sectors, 
            driving sustainable growth and innovation throughout East Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="service-card group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-all duration-300"></div>
                <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
