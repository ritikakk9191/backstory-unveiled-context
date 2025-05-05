
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, Calendar, AlertTriangle, Award, FileText, BookOpen } from 'lucide-react';

// Type definitions for our analysis data
export interface AnalysisData {
  title: string;
  url: string;
  publishDate?: string;
  author?: string;
  summary: {
    short: string;
    detailed: string;
  };
  historicalContext: string;
  relatedEvents: Array<{
    title: string;
    description: string;
  }>;
  biasAnalysis: {
    bias: string;
    sentiment: string;
    examples: string[];
  };
  sourceCredibility: {
    score: number;
    knownBias?: string;
    description: string;
  };
}

interface AnalysisResultProps {
  data: AnalysisData;
}

const AnalysisResult: React.FC<AnalysisResultProps> = ({ data }) => {
  // Helper function to determine credibility badge color
  const getCredibilityColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  // Helper function to format date
  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "Unknown date";
    try {
      return new Date(dateStr).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } catch (e) {
      return dateStr;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{data.title}</h2>
        <div className="flex flex-wrap gap-2 text-sm text-gray-600">
          {data.author && <span>By {data.author}</span>}
          {data.publishDate && (
            <>
              <span className="mx-1">•</span>
              <span>{formatDate(data.publishDate)}</span>
            </>
          )}
          <span className="mx-1">•</span>
          <a 
            href={data.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-backstory-purple hover:underline"
          >
            Original Article
          </a>
        </div>
      </div>
      
      <Tabs defaultValue="summary" className="w-full">
        <TabsList className="grid grid-cols-5 mb-6">
          <TabsTrigger value="summary" className="flex gap-2 items-center">
            <FileText size={16} />
            <span className="hidden sm:inline">Summary</span>
          </TabsTrigger>
          <TabsTrigger value="historical" className="flex gap-2 items-center">
            <Book size={16} />
            <span className="hidden sm:inline">Historical</span>
          </TabsTrigger>
          <TabsTrigger value="related" className="flex gap-2 items-center">
            <Calendar size={16} />
            <span className="hidden sm:inline">Related</span>
          </TabsTrigger>
          <TabsTrigger value="bias" className="flex gap-2 items-center">
            <AlertTriangle size={16} />
            <span className="hidden sm:inline">Bias</span>
          </TabsTrigger>
          <TabsTrigger value="credibility" className="flex gap-2 items-center">
            <Award size={16} />
            <span className="hidden sm:inline">Credibility</span>
          </TabsTrigger>
        </TabsList>

        {/* Summary Tab */}
        <TabsContent value="summary">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Summary
              </CardTitle>
              <CardDescription>
                Key points and overview of the article
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 p-4 bg-backstory-light-purple rounded-md">
                <h4 className="text-sm font-semibold mb-2 text-backstory-navy">TL;DR</h4>
                <p>{data.summary.short}</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold mb-2">Detailed Summary</h4>
                <p className="whitespace-pre-line">{data.summary.detailed}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Historical Context Tab */}
        <TabsContent value="historical">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                Historical Context
              </CardTitle>
              <CardDescription>
                Background and historical information about the topic
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <div className="whitespace-pre-line">{data.historicalContext}</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Related Events Tab */}
        <TabsContent value="related">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Related Events
              </CardTitle>
              <CardDescription>
                Other events and developments related to this topic
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.relatedEvents.map((event, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-md">
                    <h4 className="font-semibold mb-1">{event.title}</h4>
                    <p>{event.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Bias Analysis Tab */}
        <TabsContent value="bias">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Bias & Sentiment Analysis
              </CardTitle>
              <CardDescription>
                Detected bias, tone, and sentiment in the article
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold">Overall Bias:</h4>
                  <Badge variant="outline" className="bg-backstory-soft-yellow">
                    {data.biasAnalysis.bias}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">Sentiment:</h4>
                  <Badge variant="outline" className="bg-backstory-soft-blue">
                    {data.biasAnalysis.sentiment}
                  </Badge>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Examples from the text:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {data.biasAnalysis.examples.map((example, index) => (
                    <li key={index}>{example}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Source Credibility Tab */}
        <TabsContent value="credibility">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Source Credibility
              </CardTitle>
              <CardDescription>
                Assessment of the source's reliability and reputation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex items-center gap-4">
                <div className="relative h-24 w-24">
                  <div className="absolute inset-0 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-2xl font-bold">{data.sourceCredibility.score}</span>
                  </div>
                  <svg className="h-24 w-24" viewBox="0 0 100 100">
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      stroke="#e5e7eb" 
                      strokeWidth="10" 
                    />
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      stroke={data.sourceCredibility.score >= 80 ? "#22c55e" : data.sourceCredibility.score >= 60 ? "#eab308" : "#ef4444"} 
                      strokeWidth="10" 
                      strokeDasharray="282.7"
                      strokeDashoffset={282.7 - (282.7 * data.sourceCredibility.score / 100)}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Credibility Score</h4>
                  <p className="text-sm text-gray-600">
                    Based on historical accuracy and journalistic standards
                  </p>
                  {data.sourceCredibility.knownBias && (
                    <Badge className="mt-2 bg-backstory-soft-orange">
                      {data.sourceCredibility.knownBias} Bias
                    </Badge>
                  )}
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-md">
                <h4 className="font-semibold mb-2">Analysis</h4>
                <p>{data.sourceCredibility.description}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalysisResult;
