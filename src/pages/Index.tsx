
import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import UrlForm from '@/components/UrlForm';
import AnalysisResult from '@/components/AnalysisResult';
import LoadingState from '@/components/LoadingState';
import { mockAnalysisData } from '@/data/mockData';
import { AnalysisData } from '@/components/AnalysisResult';
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [analysisData, setAnalysisData] = useState<AnalysisData | null>(null);
  const [analyzedUrl, setAnalyzedUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const handleAnalyzeUrl = async (url: string) => {
    setIsLoading(true);
    setAnalyzedUrl(url);
    setAnalysisData(null);

    try {
      // This is where we would make an API call in a real application
      // For now, we'll simulate an API response with a timeout
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Use our mock data
      setAnalysisData(mockAnalysisData);
      
      toast({
        title: "Analysis Complete",
        description: "Successfully analyzed the article",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to analyze the article. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-backstory-navy text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center mb-4">
              <BookOpen className="mr-2 h-8 w-8" />
              <h1 className="text-3xl font-bold">Backstory</h1>
            </div>
            <p className="text-gray-300 max-w-xl mb-8">
              Get rich context for any article or news story — historical background, bias analysis, 
              source credibility, and more in seconds.
            </p>
            
            <UrlForm onSubmit={handleAnalyzeUrl} isLoading={isLoading} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {isLoading ? (
          <LoadingState />
        ) : analysisData ? (
          <AnalysisResult data={analysisData} />
        ) : (
          <div className="max-w-3xl mx-auto mt-8 text-center">
            <div className="p-12 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Enter any article URL to get started</h2>
              <p className="text-gray-500">
                Backstory helps you understand the context behind any article, news story, or blog post.
                Just paste a link above and click Analyze.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="p-4 bg-backstory-light-purple rounded-lg">
                  <h3 className="font-medium text-sm">Historical Context</h3>
                </div>
                <div className="p-4 bg-backstory-soft-blue rounded-lg">
                  <h3 className="font-medium text-sm">Related Events</h3>
                </div>
                <div className="p-4 bg-backstory-soft-yellow rounded-lg">
                  <h3 className="font-medium text-sm">Bias Analysis</h3>
                </div>
                <div className="p-4 bg-backstory-soft-green rounded-lg">
                  <h3 className="font-medium text-sm">Source Credibility</h3>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>Backstory — The Context Engine for Any Web Page</p>
          <p className="mt-2">© 2025 Backstory. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
