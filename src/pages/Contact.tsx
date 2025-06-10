
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Contact as ContactIcon, Home } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1200&h=400&fit=crop"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient opacity-75"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch with our team to discuss your business needs
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Send us a Message</h2>
              <Card className="service-card">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full btn-primary">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <Card className="service-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Home className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Head Office</h4>
                        <p className="text-muted-foreground">
                          Dar es Salaam<br />
                          Tanzania<br />
                          East Africa
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="service-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <ContactIcon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Phone</h4>
                        <p className="text-muted-foreground">
                          +255 XXX XXX XXX<br />
                          +255 XXX XXX XXX
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="service-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Email</h4>
                        <p className="text-muted-foreground">
                          info@reumarstanzania.com<br />
                          business@reumarstanzania.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <Card className="service-card">
                  <CardContent className="p-0">
                    <div className="h-64 bg-earth-light rounded-lg flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <Home className="h-12 w-12 mx-auto mb-2" />
                        <p>Interactive Map Coming Soon</p>
                        <p className="text-sm">Dar es Salaam, Tanzania</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="section-padding bg-earth-light">
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold mb-4">Business Hours</h2>
            <p className="text-lg text-muted-foreground">
              We're here to serve you during these hours
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="service-card text-center">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Office Hours</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>
            <Card className="service-card text-center">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Emergency Contact</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>24/7 Emergency Line</p>
                  <p>+255 XXX XXX XXX</p>
                  <p>emergency@reumarstanzania.com</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
