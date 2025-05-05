
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Search } from 'lucide-react';

interface UrlFormProps {
  onSubmit: (url: string) => void;
  isLoading: boolean;
}

const UrlForm: React.FC<UrlFormProps> = ({ onSubmit, isLoading }) => {
  const [url, setUrl] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic URL validation
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a URL",
        variant: "destructive",
      });
      return;
    }

    try {
      // Simple URL validation
      const urlObj = new URL(url);
      if (!urlObj.protocol.startsWith('http')) {
        throw new Error('Invalid URL protocol');
      }
      onSubmit(url);
    } catch (error) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid URL (e.g., https://example.com)",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-3xl flex-col gap-4 sm:flex-row">
      <Input
        type="text"
        placeholder="Paste any article URL (e.g., https://nytimes.com/article)"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="flex-grow text-base"
      />
      <Button 
        type="submit" 
        className="bg-backstory-purple hover:bg-opacity-90 text-white"
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-t-transparent"></div>
            Analyzing...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Search size={18} />
            Analyze
          </span>
        )}
      </Button>
    </form>
  );
};

export default UrlForm;
