
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FadeIn } from '@/components/ui/motion';
import { Search, Plus, Edit, Trash2, ExternalLink } from 'lucide-react';

const AdminProducts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for demonstration
  const products = [
    { id: '1', name: 'Organic Oat Milk', category: 'Beverages', source: 'Internal', status: 'Active' },
    { id: '2', name: 'Grass-Fed Beef', category: 'Protein', source: 'Internal', status: 'Active' },
    { id: '3', name: 'Sourdough Bread', category: 'Grains', source: 'Internal', status: 'Draft' },
    { id: '4', name: 'Almond Yogurt', category: 'Protein', source: 'Wolt', status: 'Active' },
    { id: '5', name: 'Fresh Avocados', category: 'Vegetables', source: 'Wolt', status: 'Active' },
  ];
  
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="space-y-6">
      <FadeIn>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-6">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </div>
      </FadeIn>
      
      <FadeIn delay={150}>
        <Card>
          <CardHeader>
            <CardTitle>Products</CardTitle>
            <CardDescription>Manage your product catalog</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>
                      {product.source === 'Wolt' ? (
                        <div className="flex items-center">
                          <span className="mr-2">Wolt</span>
                          <ExternalLink className="h-3 w-3 text-muted-foreground" />
                        </div>
                      ) : (
                        product.source
                      )}
                    </TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        product.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {product.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
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

export default AdminProducts;
