
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Industry News', 'Company Updates', 'Market Insights', 'Sustainability'];

  const blogPosts = [
    {
      title: 'The Future of Logistics in East Africa',
      excerpt: 'Exploring emerging trends and technologies shaping the logistics industry across the East African region.',
      category: 'Industry News',
      date: '2024-03-15',
      author: 'Reumars Team',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=300&fit=crop',
      readTime: '5 min read'
    },
    {
      title: 'Reumars Expands Manufacturing Capabilities',
      excerpt: 'Announcing our new state-of-the-art manufacturing facility in Dar es Salaam, enhancing our production capacity.',
      category: 'Company Updates',
      date: '2024-03-10',
      author: 'Management Team',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop',
      readTime: '3 min read'
    },
    {
      title: 'Agricultural Innovation: Technology Meets Tradition',
      excerpt: 'How modern agricultural technologies are revolutionizing traditional farming practices in Tanzania.',
      category: 'Market Insights',
      date: '2024-03-05',
      author: 'Agricultural Team',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=300&fit=crop',
      readTime: '7 min read'
    },
    {
      title: 'Sustainable Development Goals: Our Commitment',
      excerpt: 'Detailing our initiatives and commitments towards achieving sustainable development goals in East Africa.',
      category: 'Sustainability',
      date: '2024-02-28',
      author: 'Sustainability Team',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=300&fit=crop',
      readTime: '6 min read'
    },
    {
      title: 'Real Estate Market Trends in Tanzania',
      excerpt: 'Comprehensive analysis of the current real estate market conditions and future projections for Tanzania.',
      category: 'Market Insights',
      date: '2024-02-20',
      author: 'Real Estate Division',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=300&fit=crop',
      readTime: '8 min read'
    },
    {
      title: 'Partnership Announcement: East African Trade Network',
      excerpt: 'Reumars joins the East African Trade Network to enhance cross-border commerce and collaboration.',
      category: 'Company Updates',
      date: '2024-02-15',
      author: 'Business Development',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop',
      readTime: '4 min read'
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Industry News': return 'bg-blue-100 text-blue-800';
      case 'Company Updates': return 'bg-green-100 text-green-800';
      case 'Market Insights': return 'bg-purple-100 text-purple-800';
      case 'Sustainability': return 'bg-emerald-100 text-emerald-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=400&fit=crop"
            alt="Blog & News"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient opacity-75"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Blog & News</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Stay updated with the latest insights, news, and developments from Reumars Tanzania
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-earth-light">
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold mb-4">Latest Updates</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our latest thoughts on industry trends, company news, and market insights
            </p>
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="mb-2"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredPosts.map((post, index) => (
              <Card key={index} className="service-card overflow-hidden">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(post.category)}>
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No posts found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="section-padding bg-earth-light">
        <div className="container-max">
          <Card className="service-card max-w-2xl mx-auto text-center">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter to receive the latest updates, industry insights, 
                and company news directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="btn-primary">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
