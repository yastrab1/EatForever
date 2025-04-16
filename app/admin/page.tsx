'use client'
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from '@/components/ui/motion';
import AdminWoltSettings from '@/components/admin/AdminWoltSettings';
import AdminProducts from '@/components/admin/AdminProducts';
import AdminBlog from '@/components/admin/AdminBlog';
import { Sidebar, SidebarContent, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AdminSidebar from '@/components/admin/AdminSidebar';

const Page = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <SidebarProvider>
        <div className="min-h-screen flex w-full pt-24">
          <AdminSidebar />
          
          <main className="flex-1 container px-4 py-6">
            <SidebarTrigger className="mb-6 md:hidden" />
            
            <FadeIn>
              <div className="mb-8">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <p className="text-muted-foreground mt-1">Manage your store, products, blog, and Wolt integration</p>
              </div>
              
              <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                <TabsList className="mb-8">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="products">Products</TabsTrigger>
                  <TabsTrigger value="wolt">Wolt Integration</TabsTrigger>
                  <TabsTrigger value="blog">Blog Posts</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <FadeIn delay={100}>
                      <Card>
                        <CardHeader>
                          <CardTitle>Products</CardTitle>
                          <CardDescription>Manage your product catalog</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-3xl font-bold">24</div>
                          <p className="text-muted-foreground text-sm">Active products</p>
                        </CardContent>
                      </Card>
                    </FadeIn>
                    
                    <FadeIn delay={200}>
                      <Card>
                        <CardHeader>
                          <CardTitle>Wolt Integration</CardTitle>
                          <CardDescription>Connected store status</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-3xl font-bold text-amber-500">Pending</div>
                          <p className="text-muted-foreground text-sm">API key configuration required</p>
                        </CardContent>
                      </Card>
                    </FadeIn>
                    
                    <FadeIn delay={300}>
                      <Card>
                        <CardHeader>
                          <CardTitle>Blog</CardTitle>
                          <CardDescription>Community content</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-3xl font-bold">5</div>
                          <p className="text-muted-foreground text-sm">Published posts</p>
                        </CardContent>
                      </Card>
                    </FadeIn>
                  </div>
                </TabsContent>
                
                <TabsContent value="products">
                  <AdminProducts />
                </TabsContent>
                
                <TabsContent value="wolt">
                  <AdminWoltSettings />
                </TabsContent>
                
                <TabsContent value="blog">
                  <AdminBlog />
                </TabsContent>
              </Tabs>
            </FadeIn>
          </main>
        </div>
      </SidebarProvider>
      
      <Footer />
    </div>
  );
};

export default Page;
