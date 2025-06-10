
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Calendar, Home, Users, Mail, Book } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: 'Documentation and Logistics Services',
      description: 'Comprehensive documentation processing, customs clearance, and efficient logistics solutions for seamless business operations.',
      features: ['Customs Documentation', 'Freight Forwarding', 'Warehousing Solutions', 'Supply Chain Management'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=300&fit=crop'
    },
    {
      icon: Calendar,
      title: 'Manufacturing and Production',
      description: 'State-of-the-art manufacturing facilities with quality control systems and efficient production processes.',
      features: ['Quality Manufacturing', 'Product Development', 'Process Optimization', 'Quality Assurance'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop'
    },
    {
      icon: Home,
      title: 'Real Estate and Civil Engineering',
      description: 'Strategic real estate development and civil engineering projects contributing to urban development.',
      features: ['Property Development', 'Civil Engineering', 'Project Management', 'Urban Planning'],
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=300&fit=crop'
    },
    {
      icon: Users,
      title: 'Agricultural Projects and Agro Processing',
      description: 'Innovative agricultural solutions and agro-processing facilities to enhance food security.',
      features: ['Agricultural Consulting', 'Agro Processing', 'Farm Management', 'Food Security Solutions'],
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=300&fit=crop'
    },
    {
      icon: Mail,
      title: 'Trade Consulting and Advisory',
      description: 'Expert trade consulting services to help businesses navigate complex international markets.',
      features: ['Market Analysis', 'Trade Strategy', 'Business Advisory', 'Risk Assessment'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop'
    },
    {
      icon: Book,
      title: 'Transportation and Logistics',
      description: 'Reliable transportation services and comprehensive logistics solutions across East Africa.',
      features: ['Fleet Management', 'Route Optimization', 'Cargo Transportation', 'Logistics Planning'],
      image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=600&h=300&fit=crop'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=400&fit=crop"
            alt="Our Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient opacity-75"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive business solutions across multiple sectors
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Comprehensive <span className="text-gradient">Business Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer a diverse range of services designed to meet the evolving needs of businesses 
              across East Africa, from logistics and manufacturing to real estate and agricultural development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="service-card overflow-hidden">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-primary">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-earth-light">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground">
              Expanding our expertise to serve diverse business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Medical and Health Products',
              'Industrial and Agricultural Machinery',
              'Commercial and Residential Development',
              'Training and Education',
              'General Office Equipment Supply',
              'Distribution and Wholesale'
            ].map((service, index) => (
              <Card key={index} className="service-card text-center">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">{service}</h4>
                  <p className="text-sm text-muted-foreground">
                    Professional solutions tailored to your specific business requirements.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
