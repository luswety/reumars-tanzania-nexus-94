
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Home, Users, Calendar, Contact, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Calendar },
    { name: 'Projects', href: '/projects', icon: FileText },
    { name: 'Contact', href: '/contact', icon: Contact },
    { name: 'Blog', href: '/blog', icon: FileText },
  ];

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="container-max">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=40&h=40&fit=crop"
              alt="Reumars Tanzania Limited"
              className="h-10 w-10 rounded-lg object-cover"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary">Reumars</span>
              <span className="text-xs text-muted-foreground">Tanzania Limited</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="btn-primary">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center space-x-2 pb-4 border-b">
                  <img
                    src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=32&h=32&fit=crop"
                    alt="Reumars"
                    className="h-8 w-8 rounded object-cover"
                  />
                  <span className="font-bold text-primary">Reumars Tanzania</span>
                </div>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 px-3 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <Button className="w-full btn-primary">
                    Get Quote
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
