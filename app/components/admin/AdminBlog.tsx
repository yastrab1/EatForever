
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FadeIn } from '@/components/ui/motion';
import { Search, Plus, Edit, Trash2, Eye } from 'lucide-react';

const AdminBlog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for demonstration
  const posts = [
    { 
      id: '1', 
      title: 'Simple Ingredients for Better Health', 
      author: 'Jane Doe',
      published: 'May 1, 2023',
      status: 'Published' 
    },
    { 
      id: '2', 
      title: 'Understanding Food Labels', 
      author: 'John Smith',
      published: 'June 15, 2023',
      status: 'Published' 
    },
    { 
      id: '3', 
      title: 'The Science Behind Clean Eating', 
      author: 'Jane Doe',
      published: 'July 22, 2023',
      status: 'Published' 
    },
    { 
      id: '4', 
      title: 'Meal Prep for Busy Professionals', 
      author: 'Alex Johnson',
      published: 'August 5, 2023',
      status: 'Published' 
    },
    { 
      id: '5', 
      title: 'Upcoming Food Trends 2024', 
      author: 'John Smith',
      published: '',
      status: 'Draft' 
    },
  ];
  
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.author.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="space-y-6">
      <FadeIn>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-6">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search blog posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Post
          </Button>
        </div>
      </FadeIn>
      
      <FadeIn delay={150}>
        <Card>
          <CardHeader>
            <CardTitle>Blog Posts</CardTitle>
            <CardDescription>Manage your community content</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Published</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPosts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell className="font-medium">{post.title}</TableCell>
                    <TableCell>{post.author}</TableCell>
                    <TableCell>{post.published || '—'}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        post.status === 'Published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {post.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
};

export default AdminBlog;
