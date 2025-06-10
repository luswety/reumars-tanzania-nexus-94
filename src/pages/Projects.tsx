
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Dar es Salaam Logistics Hub',
      category: 'Logistics & Transportation',
      description: 'A state-of-the-art logistics facility serving as a central hub for East African trade operations.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=300&fit=crop',
      status: 'Completed',
      year: '2023'
    },
    {
      title: 'Kilimanjaro Agricultural Processing Plant',
      category: 'Agricultural Development',
      description: 'Modern agro-processing facility enhancing food security and supporting local farmers.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=300&fit=crop',
      status: 'Ongoing',
      year: '2024'
    },
    {
      title: 'Mwanza Commercial Complex',
      category: 'Real Estate',
      description: 'Mixed-use commercial development featuring retail, office, and residential spaces.',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=300&fit=crop',
      status: 'Planning',
      year: '2024'
    },
    {
      title: 'East Africa Manufacturing Center',
      category: 'Manufacturing',
      description: 'Advanced manufacturing facility producing industrial equipment and consumer goods.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop',
      status: 'Completed',
      year: '2022'
    },
    {
      title: 'Dodoma Government Documentation Center',
      category: 'Documentation Services',
      description: 'Comprehensive documentation processing facility serving government and private sector clients.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop',
      status: 'Completed',
      year: '2023'
    },
    {
      title: 'Arusha Trade Consulting Hub',
      category: 'Consulting',
      description: 'Regional center providing trade consulting and advisory services to businesses across East Africa.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop',
      status: 'Ongoing',
      year: '2024'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Ongoing': return 'bg-blue-100 text-blue-800';
      case 'Planning': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&h=400&fit=crop"
            alt="Our Projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient opacity-75"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Projects</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Showcasing our commitment to excellence across diverse sectors
          </p>
        </div>
      </section>

      {/* Projects Overview */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our diverse portfolio of projects demonstrates our capability to deliver 
              excellence across multiple sectors, from logistics and manufacturing to 
              real estate and agricultural development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="service-card overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary">
                      {project.year}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-sm text-primary font-medium mb-2">{project.category}</p>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="section-padding bg-earth-light">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Project Impact</h2>
            <p className="text-lg text-muted-foreground">
              Measuring our contribution to East African development
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="service-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <h4 className="font-semibold mb-1">Projects Completed</h4>
                <p className="text-sm text-muted-foreground">Across all sectors</p>
              </CardContent>
            </Card>
            <Card className="service-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">$200M+</div>
                <h4 className="font-semibold mb-1">Investment Value</h4>
                <p className="text-sm text-muted-foreground">Total project investments</p>
              </CardContent>
            </Card>
            <Card className="service-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                <h4 className="font-semibold mb-1">Jobs Created</h4>
                <p className="text-sm text-muted-foreground">Direct and indirect employment</p>
              </CardContent>
            </Card>
            <Card className="service-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <h4 className="font-semibold mb-1">Countries</h4>
                <p className="text-sm text-muted-foreground">East African presence</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
