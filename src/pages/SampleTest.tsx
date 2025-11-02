import { useState } from 'react';
import { ChevronRight, RotateCcw, Trophy, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface CandidateResult {
  id: string;
  name: string;
  party: string;
  color: string;
  score: number;
  percentage: number;
}

type Option = {
  id: string;
  text: string;
  weight: Record<string, number>;
};

const SampleTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState<CandidateResult[]>([]);
  const [isTestComplete, setIsTestComplete] = useState(false);

  const questions: { id: number; question: string; options: Option[] }[] = [
    {
      id: 1,
      question: "What should be the government’s priority regarding taxes?",
      options: [
        { id: 'a', text: 'Lower taxes to encourage business growth and investment.', weight: { santhrielle: 3, journey: 1, adeline: 1, marceline: 1 } },
        { id: 'b', text: 'Maintain fair taxes but ensure strict transparency in spending.', weight: { santhrielle: 1, journey: 3, adeline: 1, marceline: 1 } },
        { id: 'c', text: 'Reform taxes to prioritize social welfare and equality.', weight: { santhrielle: 1, journey: 1, adeline: 3, marceline: 1 } },
        { id: 'd', text: 'Implement green taxes on polluters to fund sustainable infrastructure.', weight: { santhrielle: 1, journey: 1, adeline: 1, marceline: 3 } },
      ],
    },
    {
      id: 2,
      question: "How should cities address congestion and sustainability?",
      options: [
        { id: 'a', text: 'Build more eco-friendly and inclusive public spaces.', weight: { santhrielle: 1, journey: 1, adeline: 1, marceline: 3 } },
        { id: 'b', text: 'Encourage private developers to invest in smart infrastructure.', weight: { santhrielle: 3, journey: 1, adeline: 1, marceline: 1 } },
        { id: 'c', text: 'Prioritize community consultation before approving projects.', weight: { santhrielle: 1, journey: 1, adeline: 3, marceline: 1 } },
        { id: 'd', text: 'Focus on rural development to reduce urban migration.', weight: { santhrielle: 1, journey: 3, adeline: 1, marceline: 1 } },
      ],
    },
    {
      id: 3,
      question: "How should transparency be ensured in governance?",
      options: [
        { id: 'a', text: 'Establish independent oversight and whistleblower protection laws.', weight: { santhrielle: 1, journey: 3, adeline: 1, marceline: 1 } },
        { id: 'b', text: 'Require full open data and citizen access to public records.', weight: { santhrielle: 1, journey: 1, adeline: 1, marceline: 3 } },
        { id: 'c', text: 'Involve citizens and watchdog groups in monitoring budgets.', weight: { santhrielle: 1, journey: 1, adeline: 3, marceline: 1 } },
        { id: 'd', text: 'Use digital reporting tools to track government fund use efficiently.', weight: { santhrielle: 3, journey: 1, adeline: 1, marceline: 1 } },
      ],
    },
    {
      id: 4,
      question: "Which approach best promotes long-term economic growth?",
      options: [
        { id: 'a', text: 'Strengthen local businesses through tax incentives and micro-loans.', weight: { santhrielle: 3, journey: 1, adeline: 1, marceline: 1 } },
        { id: 'b', text: 'Encourage cooperatives and small livelihood programs.', weight: { santhrielle: 1, journey: 1, adeline: 3, marceline: 1 } },
        { id: 'c', text: 'Expand green jobs and eco-friendly industries.', weight: { santhrielle: 1, journey: 1, adeline: 1, marceline: 3 } },
        { id: 'd', text: 'Focus on supporting farmers, fisherfolk, and rural enterprises.', weight: { santhrielle: 1, journey: 3, adeline: 1, marceline: 1 } },
      ],
    },
    {
      id: 5,
      question: "What’s the best way to address climate challenges?",
      options: [
        { id: 'a', text: 'Create sustainable cities and invest in green infrastructure.', weight: { santhrielle: 1, journey: 1, adeline: 1, marceline: 3 } },
        { id: 'b', text: 'Promote climate resilience and disaster preparedness in rural areas.', weight: { santhrielle: 1, journey: 3, adeline: 1, marceline: 1 } },
        { id: 'c', text: 'Involve local communities in environmental protection initiatives.', weight: { santhrielle: 1, journey: 1, adeline: 3, marceline: 1 } },
        { id: 'd', text: 'Offer tax incentives for green businesses and innovation.', weight: { santhrielle: 3, journey: 1, adeline: 1, marceline: 1 } },
      ],
    },
    {
      id: 6,
      question: "What should the government prioritize regarding housing?",
      options: [
        { id: 'a', text: 'Ensure affordable and accessible housing for all income levels.', weight: { santhrielle: 1, journey: 1, adeline: 1, marceline: 3 } },
        { id: 'b', text: 'Partner with private developers to expand housing projects.', weight: { santhrielle: 3, journey: 1, adeline: 1, marceline: 1 } },
        { id: 'c', text: 'Regulate land use to prevent corruption and unfair evictions.', weight: { santhrielle: 1, journey: 1, adeline: 3, marceline: 1 } },
        { id: 'd', text: 'Provide direct aid for rural housing and community rehabilitation.', weight: { santhrielle: 1, journey: 3, adeline: 1, marceline: 1 } },
      ],
    },
    {
      id: 7,
      question: "How should corruption be addressed?",
      options: [
        { id: 'a', text: 'Strengthen community-based watchdog groups.', weight: { santhrielle: 1, journey: 1, adeline: 3, marceline: 1 } },
        { id: 'b', text: 'Enforce independent anti-corruption commissions.', weight: { santhrielle: 1, journey: 3, adeline: 1, marceline: 1 } },
        { id: 'c', text: 'Require financial transparency for all public officials.', weight: { santhrielle: 3, journey: 1, adeline: 1, marceline: 1 } },
        { id: 'd', text: 'Use technology and open data to prevent misuse of funds.', weight: { santhrielle: 1, journey: 1, adeline: 1, marceline: 3 } },
      ],
    },
    {
      id: 8,
      question: "What’s your preferred focus for improving education?",
      options: [
        { id: 'a', text: 'Integrate sustainability and urban planning into curricula.', weight: { santhrielle: 1, journey: 1, adeline: 1, marceline: 3 } },
        { id: 'b', text: 'Provide financial literacy and digital skills training.', weight: { santhrielle: 3, journey: 1, adeline: 1, marceline: 1 } },
        { id: 'c', text: 'Make education equitable and accessible to all communities.', weight: { santhrielle: 1, journey: 1, adeline: 3, marceline: 1 } },
        { id: 'd', text: 'Improve education access in remote and rural areas.', weight: { santhrielle: 1, journey: 3, adeline: 1, marceline: 1 } },
      ],
    },
    {
      id: 9,
      question: "What role should citizens play in governance?",
      options: [
        { id: 'a', text: 'Have regular public consultations and participatory budgeting.', weight: { santhrielle: 1, journey: 1, adeline: 1, marceline: 3 } },
        { id: 'b', text: 'Encourage civic movements and grassroots decision-making.', weight: { santhrielle: 1, journey: 1, adeline: 3, marceline: 1 } },
        { id: 'c', text: 'Build partnerships between government, private sector, and citizens.', weight: { santhrielle: 3, journey: 1, adeline: 1, marceline: 1 } },
        { id: 'd', text: 'Empower rural communities to lead local development projects.', weight: { santhrielle: 1, journey: 3, adeline: 1, marceline: 1 } },
      ],
    },
    {
      id: 10,
      question: "How should the country prepare for natural disasters?",
      options: [
        { id: 'a', text: 'Invest in sustainable urban drainage and flood systems.', weight: { santhrielle: 1, journey: 1, adeline: 1, marceline: 3 } },
        { id: 'b', text: 'Prioritize local disaster training and early warning systems.', weight: { santhrielle: 1, journey: 3, adeline: 1, marceline: 1 } },
        { id: 'c', text: 'Encourage volunteer-driven emergency response programs.', weight: { santhrielle: 1, journey: 1, adeline: 3, marceline: 1 } },
        { id: 'd', text: 'Fund public-private partnerships for disaster infrastructure.', weight: { santhrielle: 3, journey: 1, adeline: 1, marceline: 1 } },
      ],
    },
    {
      id: 11,
      question: "How should the government reduce inequality?",
      options: [
        { id: 'a', text: 'Focus on equal housing and infrastructure access.', weight: { santhrielle: 1, journey: 1, adeline: 1, marceline: 3 } },
        { id: 'b', text: 'Support small businesses to create job opportunities.', weight: { santhrielle: 3, journey: 1, adeline: 1, marceline: 1 } },
        { id: 'c', text: 'Protect workers’ rights and promote inclusive social programs.', weight: { santhrielle: 1, journey: 1, adeline: 3, marceline: 1 } },
        { id: 'd', text: 'Strengthen rural economies through fair trade and subsidies.', weight: { santhrielle: 1, journey: 3, adeline: 1, marceline: 1 } },
      ],
    },
    {
      id: 12,
      question: "What’s your stance on technology in government?",
      options: [
        { id: 'a', text: 'Use open data systems for transparency and citizen access.', weight: { santhrielle: 1, journey: 1, adeline: 1, marceline: 3 } },
        { id: 'b', text: 'Digitize tax and financial systems for efficiency.', weight: { santhrielle: 3, journey: 1, adeline: 1, marceline: 1 } },
        { id: 'c', text: 'Use digital tools to empower citizens and watchdogs.', weight: { santhrielle: 1, journey: 1, adeline: 3, marceline: 1 } },
        { id: 'd', text: 'Use tech to improve disaster alerts and rural connectivity.', weight: { santhrielle: 1, journey: 3, adeline: 1, marceline: 1 } },
      ],
    },
    {
      id: 13,
      question: "How should the agricultural sector be improved?",
      options: [
        { id: 'a', text: 'Promote urban-rural food networks and sustainability.', weight: { santhrielle: 1, journey: 1, adeline: 1, marceline: 3 } },
        { id: 'b', text: 'Provide business incentives for agri-tech and exports.', weight: { santhrielle: 3, journey: 1, adeline: 1, marceline: 1 } },
        { id: 'c', text: 'Protect farmers’ rights and fair wages.', weight: { santhrielle: 1, journey: 1, adeline: 3, marceline: 1 } },
        { id: 'd', text: 'Provide financial aid, training, and fair market access.', weight: { santhrielle: 1, journey: 3, adeline: 1, marceline: 1 } },
      ],
    },
    {
      id: 14,
      question: "How should public funds be managed?",
      options: [
        { id: 'a', text: 'Prioritize environmental and sustainable projects.', weight: { santhrielle: 1, journey: 1, adeline: 1, marceline: 3 } },
        { id: 'b', text: 'Ensure efficiency and audit-based transparency.', weight: { santhrielle: 3, journey: 1, adeline: 1, marceline: 1 } },
        { id: 'c', text: 'Make all budgets publicly available for citizen review.', weight: { santhrielle: 1, journey: 1, adeline: 3, marceline: 1 } },
        { id: 'd', text: 'Focus on essential services like health, agriculture, and disaster response.', weight: { santhrielle: 1, journey: 3, adeline: 1, marceline: 1 } },
      ],
    },
    {
      id: 15,
      question: "Which should be the country’s top long-term focus?",
      options: [
        { id: 'a', text: 'Sustainable urban progress and eco-friendly innovation.', weight: { santhrielle: 1, journey: 1, adeline: 1, marceline: 3 } },
        { id: 'b', text: 'Economic growth and competitiveness in global markets.', weight: { santhrielle: 3, journey: 1, adeline: 1, marceline: 1 } },
        { id: 'c', text: 'Social justice, equality, and accountable governance.', weight: { santhrielle: 1, journey: 1, adeline: 3, marceline: 1 } },
        { id: 'd', text: 'Rural development, resilience, and corruption-free governance.', weight: { santhrielle: 1, journey: 3, adeline: 1, marceline: 1 } },
      ],
    },
  ];

  const candidates = [
    { id: 'santhrielle', name: 'Santhrielle Sevilla', party: 'Party A', color: 'bg-red-500' },
    { id: 'journey', name: 'Journey Ramos', party: 'Party B', color: 'bg-yellow-500' },
    { id: 'adeline', name: 'Adeline Acosta', party: 'Party C', color: 'bg-blue-500' },
    { id: 'marceline', name: 'Marceline Lagdameo', party: 'Green Alliance', color: 'bg-emerald-500' },
  ];

  const handleAnswerChange = (value: string) => {
    setAnswers({
      ...answers,
      [currentQuestion]: value
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    const scores: Record<string, number> = {};
    candidates.forEach(c => (scores[c.id] = 0));

    Object.entries(answers).forEach(([qIndex, answer]) => {
      const idx = parseInt(qIndex, 10);
      const q = questions[idx];
      const selected = q?.options.find(o => o.id === answer);
      if (selected) {
        Object.entries(selected.weight).forEach(([candId, w]) => {
          scores[candId] = (scores[candId] || 0) + Number(w || 0);
        });
      }
    });

    const maxScore = questions.length * 3;
    const results = candidates.map(c => ({
      ...c,
      score: scores[c.id] || 0,
      percentage: Math.round(((scores[c.id] || 0) / maxScore) * 100)
    }));

    results.sort((a, b) => b.percentage - a.percentage);
    setShowResults(results);
    setIsTestComplete(true);
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults([]);
    setIsTestComplete(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (isTestComplete) {
    return (
      <div className="min-h-screen bg-gradient-card pt-20">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Card className="shadow-elegant">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Trophy className="h-16 w-16 text-accent" />
              </div>
              <CardTitle className="text-3xl text-primary">Your Results</CardTitle>
              <p className="text-muted-foreground">Based on your answers, here are your candidate matches:</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {showResults.map((candidate, index) => (
                  <div key={candidate.id} className="border rounded-lg p-4 hover:shadow-card transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Badge variant={index === 0 ? "default" : "secondary"}>#{index + 1} Match</Badge>
                        <div>
                          <h3 className="font-semibold text-primary">{candidate.name}</h3>
                          <p className="text-sm text-muted-foreground">{candidate.party}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-accent">{candidate.percentage}%</div>
                        <div className="text-sm text-muted-foreground">match</div>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${candidate.color.replace('bg-', 'bg-')} transition-all duration-1000`}
                        style={{ width: `${candidate.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button onClick={resetTest} variant="outline" size="lg">
                  <RotateCcw className="mr-2 h-4 w-4" /> Retake Test
                </Button>
                <Button asChild variant="civic" size="lg">
                  <Link to="/candidates">View Candidate Profiles</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-card pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-primary">Voter Alignment Test</h1>
            <div className="text-sm text-muted-foreground">Question {currentQuestion + 1} of {questions.length}</div>
          </div>
          <Progress value={progress} className="w-full" />
        </div>

        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="text-xl text-primary">{questions[currentQuestion].question}</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={answers[currentQuestion] || ''} onValueChange={handleAnswerChange}>
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option) => (
                  <div key={option.id} className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value={option.id} id={`${currentQuestion}-${option.id}`} className="mt-1" />
                    <Label htmlFor={`${currentQuestion}-${option.id}`} className="flex-1 cursor-pointer leading-relaxed">{option.text}</Label>
                  </div>
                ))}
              </div>
            </RadioGroup>

            <div className="flex justify-between mt-8">
              <Button onClick={handlePrevious} disabled={currentQuestion === 0} variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
              </Button>

              <Button onClick={handleNext} disabled={!answers[currentQuestion]} variant={currentQuestion === questions.length - 1 ? "hero" : "default"}>
                {currentQuestion === questions.length - 1 ? 'See Results' : 'Next'}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SampleTest;
