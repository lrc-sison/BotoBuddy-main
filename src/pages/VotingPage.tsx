import { useState, useEffect } from 'react';
import { Calendar, Clock, CheckCircle, Vote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const VotingPage = () => {
  const [selectedCandidate, setSelectedCandidate] = useState('');
  const [hasVoted, setHasVoted] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');
  const { toast } = useToast();

  // Mock election date - 30 days from now
  const electionDate = new Date();
  electionDate.setDate(electionDate.getDate() + 30);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = electionDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft(`${days}d ${hours}h ${minutes}m`);

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft("Election has ended");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [electionDate]);

  const candidates = [
    {
      id: 'Marceline Lagdameo',
      name: 'Marceline Lagdameo',
      party: 'BINI-A',
      position: 'Mayor'
    },
    {
      id: 'Santhrielle Sevilla',
      name: 'Santhrielle Sevilla',
      party: 'BINI-B',
      position: 'Mayor'
    },
    {
      id: 'Adeline Acosta',
      name: 'Adeline Acosta',
      party: 'Independent',
      position: 'Mayor'
    },
    {
      id: 'Journey Ramos',
      name: 'Journey Ramos',
      party: 'Independent',
      position: 'Mayor'
    }
  ];

  const handleVote = () => {
    if (!selectedCandidate) {
      toast({
        title: "Please select a candidate",
        description: "You must select a candidate before voting.",
        variant: "destructive"
      });
      return;
    }

    // Simulate voting process
    setTimeout(() => {
      setHasVoted(true);
      toast({
        title: "Vote cast successfully!",
        description: "Thank you for participating in democracy.",
        variant: "default"
      });
    }, 1000);
  };

  if (hasVoted) {
    return (
      <div className="min-h-screen bg-gradient-card pt-20">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <Card className="text-center shadow-elegant">
            <CardContent className="pt-12 pb-8">
              <CheckCircle className="h-20 w-20 text-success mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-primary mb-4">Thank You for Voting!</h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Your vote has been recorded successfully. You've made your voice heard and contributed to our democratic process.
              </p>
              <div className="bg-muted rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-primary mb-2">Your Selection:</h3>
                <p className="text-lg">{candidates.find(c => c.id === selectedCandidate)?.name}</p>
                <p className="text-sm text-muted-foreground">{candidates.find(c => c.id === selectedCandidate)?.party}</p>
              </div>
              <Button asChild variant="civic" size="lg">
                <a href="/BotoBuddy/candidates">View All Candidates</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-card pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Election Countdown */}
        <Card className="mb-8 shadow-card">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Calendar className="h-8 w-8 text-accent" />
                <div>
                  <h3 className="text-xl font-semibold text-primary">Election Day Countdown</h3>
                  <p className="text-muted-foreground">Don't forget to vote!</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-accent">{timeLeft}</div>
                <p className="text-sm text-muted-foreground">until election</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Voting Form */}
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Vote className="h-8 w-8 text-primary" />
              Cast Your Vote - Mock Election
            </CardTitle>
            <p className="text-muted-foreground">
              This is a simulation for demonstration purposes. Select your preferred candidate for Mayor.
            </p>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedCandidate} onValueChange={setSelectedCandidate}>
              <div className="space-y-4">
                {candidates.map((candidate) => (
                  <div key={candidate.id} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value={candidate.id} id={candidate.id} />
                    <Label htmlFor={candidate.id} className="flex-1 cursor-pointer">
                      <div className="font-medium text-primary">{candidate.name}</div>
                      <div className="text-sm text-muted-foreground">{candidate.party} • {candidate.position}</div>
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>

            <div className="mt-8 flex justify-center">
              <Button 
                onClick={handleVote} 
                variant="hero" 
                size="xl"
                disabled={!selectedCandidate}
              >
                <Vote className="mr-2 h-5 w-5" />
                Cast Your Vote
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VotingPage;