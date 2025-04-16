
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/motion';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

// This would come from an API in a real application
const getBlogPost = (id: string) => {
  return {
    id,
    title: 'Simple Ingredients for Better Health',
    content: `
      <p>In today's world of processed foods and complex ingredient lists, there's growing interest in returning to simpler, cleaner eating. Foods with fewer ingredients often mean less processing, fewer additives, and a more natural approach to nourishment.</p>
      
      <h2>The Benefits of Fewer Ingredients</h2>
      
      <p>When foods contain fewer ingredients, it's easier to understand exactly what you're consuming. This transparency allows for:</p>
      
      <ul>
        <li>Better awareness of potential allergens</li>
        <li>Reduced exposure to artificial additives and preservatives</li>
        <li>More conscious eating habits</li>
        <li>Often, higher nutritional value</li>
      </ul>
      
      <p>Studies have shown correlations between highly processed foods (which typically have longer ingredient lists) and various health concerns, including obesity, heart disease, and certain types of cancer.</p>
      
      <h2>Reading Food Labels</h2>
      
      <p>One practical way to implement a "fewer ingredients" approach is to become adept at reading food labels. Here are some tips:</p>
      
      <ul>
        <li>Look for products where you recognize all the ingredients</li>
        <li>Be wary of items with chemical-sounding names or numbers</li>
        <li>Consider whether you could make a similar item at home with common ingredients</li>
        <li>Remember that ingredients are listed in order of quantity - the first few make up most of the product</li>
      </ul>
      
      <h2>Quality Over Quantity</h2>
      
      <p>It's important to note that fewer ingredients doesn't automatically mean healthier. Five types of sugar in a product would technically be "simple" in terms of ingredient count, but not in terms of health impact.</p>
      
      <p>The focus should be on high-quality, nutritious ingredients rather than simply their number. Whole, unprocessed foods naturally have fewer "ingredients" because they come as nature intended.</p>
      
      <h2>Making Changes Gradually</h2>
      
      <p>Transitioning to a diet centered around foods with fewer ingredients doesn't have to happen overnight. Small changes can make a significant difference:</p>
      
      <ul>
        <li>Replace one processed snack with a whole food alternative each week</li>
        <li>Try making a commonly purchased item from scratch</li>
        <li>Shop the perimeter of the grocery store first, where fresher items are typically located</li>
        <li>Use herbs and spices instead of pre-made sauces and seasonings</li>
      </ul>
      
      <p>By gradually introducing simple, clean foods into your diet, you may notice improvements in energy levels, digestion, and overall well-being.</p>
    `,
    author: 'Jane Doe',
    date: 'May 1, 2023',
    category: 'Health',
    tags: ['nutrition', 'clean eating', 'wellness'],
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  };
};

const Page = () => {
  const { id } = useParams<{ id: string }>();
  const post = getBlogPost(id || '1');
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container px-4 sm:px-6 max-w-4xl mx-auto">
          <FadeIn>
            <Link to="/blog">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
            
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-primary/10 text-primary">
                  {post.category}
                </span>
                {post.tags.map(tag => (
                  <span key={tag} className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-muted text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" /> {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" /> {post.date}
                </span>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={150}>
            <div className="rounded-lg overflow-hidden mb-8 h-[400px]">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          </FadeIn>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Page;
