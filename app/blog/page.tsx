
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FadeIn, StaggerChildren } from '@/components/ui/motion';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';

// Sample blog post data
const BLOG_POSTS = [
  {
    id: '1',
    title: 'Simple Ingredients for Better Health',
    excerpt: 'Learn how choosing foods with fewer, cleaner ingredients can improve your overall health and well-being.',
    author: 'Jane Doe',
    date: 'May 1, 2023',
    category: 'Health',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: '2',
    title: 'Understanding Food Labels',
    excerpt: 'A comprehensive guide to decoding food labels and identifying products with fewer additives and preservatives.',
    author: 'John Smith',
    date: 'June 15, 2023',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: '3',
    title: 'The Science Behind Clean Eating',
    excerpt: 'Discover the scientific evidence supporting the benefits of consuming foods with minimal processing and additives.',
    author: 'Jane Doe',
    date: 'July 22, 2023',
    category: 'Science',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: '4',
    title: 'Meal Prep for Busy Professionals',
    excerpt: 'Practical tips for preparing clean, simple meals that save time without compromising on quality or nutrition.',
    author: 'Alex Johnson',
    date: 'August 5, 2023',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: '5',
    title: 'Upcoming Food Trends 2024',
    excerpt: 'Explore the emerging trends in sustainable and clean eating expected to dominate the food industry in 2024.',
    author: 'John Smith',
    date: 'September 10, 2023',
    category: 'Trends',
    image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
];

const Page = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPosts = BLOG_POSTS.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container px-4 sm:px-6">
          <FadeIn className="mb-12">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Community & Blog
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Discover insights about high-quality food with fewer ingredients and join our community of health-conscious shoppers.
            </p>
          </FadeIn>
          
          <FadeIn delay={150} className="mb-12">
            <div className="relative max-w-md mx-auto md:mx-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 w-full"
              />
            </div>
          </FadeIn>
          
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerAmount={100}>
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden flex flex-col h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-primary/10 text-primary">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" /> {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {post.date}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link to={`/blog/${post.id}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </StaggerChildren>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl font-medium mb-2">No posts found</p>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search to find what you're looking for.
              </p>
              <Button 
                onClick={() => setSearchQuery('')}
                variant="outline"
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Page;
