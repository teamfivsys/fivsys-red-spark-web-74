import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface BlogSearchFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  categories: { name: string; count: number }[];
  totalResults: number;
}

const BlogSearchFilter = ({
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
  categories,
  totalResults
}: BlogSearchFilterProps) => {
  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative max-w-xl mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search articles by title, topic, or keyword..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-12 pr-10 py-6 bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <Button
            key={cat.name}
            variant={activeCategory === cat.name ? 'default' : 'outline'}
            size="sm"
            onClick={() => onCategoryChange(cat.name)}
            className={cn(
              "transition-all duration-300",
              activeCategory === cat.name 
                ? "bg-primary text-primary-foreground" 
                : "bg-transparent border-border text-muted-foreground hover:border-primary hover:text-primary"
            )}
          >
            {cat.name} ({cat.count})
          </Button>
        ))}
      </div>

      {/* Results Count */}
      <p className="text-center text-sm text-muted-foreground">
        Showing {totalResults} article{totalResults !== 1 ? 's' : ''}
        {activeCategory !== 'All' && ` in ${activeCategory}`}
        {searchQuery && ` matching "${searchQuery}"`}
      </p>
    </div>
  );
};

export default BlogSearchFilter;
