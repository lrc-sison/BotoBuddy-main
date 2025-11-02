import React from "react";
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Vote, ArrowRight, Search, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/philippines-paint-background-texture-wallpaper-preview.jpg';

const Index = () => {
  const steps = [
    {
      icon: <Search className="h-12 w-12 text-accent" />,
      title: "Take the Test",
      description: "Answer questions about key political issues to identify your values and priorities."
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-accent" />,
      title: "Align",
      description: "Discover candidates who align with your values through our matching algorithm."
    },
    {
      icon: <Vote className="h-12 w-12 text-accent" />,
      title: "Vote Confidently",
      description: "Cast your ballot knowing you've made an informed decision."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})` }}
      >
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            BotoBuddy
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Your Vote, Your Voice, Made Simple.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline-white" size="xl">
              <Link to="/test">
                Take Sample Test
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="civic" size="xl">
              <Link to="/candidates">View Candidates</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Making informed voting decisions has never been easier. Follow these simple steps to find candidates that match your values.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardContent className="pt-8 pb-6">
                  <div className="flex justify-center mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Make Your Voice Heard?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of voters who have used our platform to make informed decisions and participate in democracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline-white" size="xl">
              <Link to="/voting">
                <Vote className="mr-2 h-5 w-5" />
                Start Voting
              </Link>
            </Button>
            <Button asChild variant="secondary" size="xl">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;