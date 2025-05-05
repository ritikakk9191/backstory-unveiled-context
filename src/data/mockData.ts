
import { AnalysisData } from "@/components/AnalysisResult";

// Mock data to simulate API response
export const mockAnalysisData: AnalysisData = {
  title: "Climate Change Accelerating Faster Than Expected, Study Finds",
  url: "https://example.com/climate-change-article",
  publishDate: "2025-04-22",
  author: "Jane Smith",
  summary: {
    short: "Global temperatures are rising faster than previous models predicted, potentially reaching dangerous thresholds by 2035 instead of 2050.",
    detailed: "A comprehensive new study published in the journal Nature Climate Science indicates that climate change is accelerating at a pace significantly faster than previous models had predicted. The research, which compiled data from over 200 monitoring stations globally, suggests that the planet could reach the critical 1.5°C warming threshold as early as 2035, rather than 2050 as previously estimated.\n\nThe researchers pointed to several factors contributing to the acceleration, including increased methane emissions from thawing permafrost, decreased carbon absorption by saturated oceanic systems, and continued growth in global fossil fuel consumption despite renewable energy initiatives. The report emphasizes that without immediate and dramatic intervention, severe climate events will become increasingly common and irreversible tipping points may be reached within the next decade."
  },
  historicalContext: "Climate change awareness and scientific concern began emerging in the 1970s, though the greenhouse effect was first described in 1896 by Svante Arrhenius. The Intergovernmental Panel on Climate Change (IPCC) was established in 1988, and the first major international agreement, the Kyoto Protocol, was adopted in 1997.\n\nInitially, climate models predicted gradual warming with major impacts occurring in the late 21st century. However, since the early 2000s, actual observations have consistently outpaced model predictions. The Paris Agreement of 2015 established the goal of limiting warming to well below 2°C, preferably 1.5°C, compared to pre-industrial levels.\n\nScience has increasingly moved from cautious uncertainty to alarming certainty over the past two decades. Where earlier models allowed for a range of possible outcomes, modern measurements and improved models have narrowed these ranges and generally indicated more rapid warming than previously anticipated.",
  relatedEvents: [
    {
      title: "COP28 Climate Summit",
      description: "The upcoming COP28 climate summit is expected to address these accelerated timelines, with negotiators facing increased pressure to establish more aggressive emissions targets."
    },
    {
      title: "Recent Extreme Weather Events",
      description: "The past year saw record-breaking heatwaves across southern Europe, unprecedented flooding in South Asia, and the most active Atlantic hurricane season ever recorded, all consistent with accelerated climate change predictions."
    },
    {
      title: "Renewable Energy Transition",
      description: "Despite growth in renewable energy adoption, global carbon emissions reached a new record high last year, highlighting the gap between current actions and what would be needed to meet the Paris Agreement goals."
    }
  ],
  biasAnalysis: {
    bias: "Slight Pro-Environmental Action",
    sentiment: "Concerned/Urgent",
    examples: [
      "The use of 'despite renewable energy initiatives' suggests disappointment with current climate action progress",
      "The phrase 'without immediate and dramatic intervention' indicates an urgency-focused framing",
      "The article uses 'dangerous thresholds' rather than neutral 'temperature increases'"
    ]
  },
  sourceCredibility: {
    score: 87,
    knownBias: "Left-Leaning",
    description: "The publishing source generally adheres to scientific consensus on climate issues and has a strong fact-checking process. While it does exhibit a pro-environmental action editorial stance, its reporting on climate science specifically remains highly factual with minimal editorializing of data. The source has won several journalism awards for environmental reporting accuracy."
  }
};
