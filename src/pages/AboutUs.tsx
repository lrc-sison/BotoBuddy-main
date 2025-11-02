import { Target, Eye, Users, Shield, CheckCircle, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutUs = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Transparency",
      description: "We provide clear, unbiased information about all candidates and their positions."
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Accessibility",
      description: "Our platform is designed to be user-friendly and accessible to all voters."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-accent" />,
      title: "Neutrality",
      description: "We maintain strict political neutrality and present information objectively."
    }
  ];

  const milestones = [
    { year: "2020", event: "Platform conception and initial research", status: "completed" },
    { year: "2022", event: "Beta launch with local elections", status: "completed" },
    { year: "2023", event: "Partnership with civic organizations", status: "completed" },
    { year: "2024", event: "National expansion and enhanced features", status: "current" }
  ];

  return (
    <div className="min-h-screen bg-gradient-card pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Mission Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-6">About BotoBuddy</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            BotoBuddy is dedicated to empowering voters with the information they need to make informed decisions.
          </p>
          <div className="flex justify-center gap-4">
            <div className="text-center">
              <Target className="h-12 w-12 text-accent mx-auto mb-2" />
              <h3 className="font-semibold text-primary">Our Mission</h3>
              <p className="text-sm text-muted-foreground">Informed Democracy</p>
            </div>
            <div className="text-center">
              <Eye className="h-12 w-12 text-accent mx-auto mb-2" />
              <h3 className="font-semibold text-primary">Our Vision</h3>
              <p className="text-sm text-muted-foreground">Engaged Citizens</p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl text-primary">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why We Built This Section */}
        <section className="mb-16">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Why We Built This Platform</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                BotoBuddy was created in response to the growing need for accessible, reliable information in the electoral process.
              </p>
              <p className="text-muted-foreground">
                With BotoBuddy, we aim to bridge the information gap and help voters navigate the complexities of elections with confidence.
              </p>
              <p className="text-muted-foreground">
                Our goal is not to tell you who to vote for, but to give you the tools and information 
                you need to make that decision for yourself. We believe that an informed electorate 
                is the foundation of a healthy democracy.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Timeline Section */}
        
      </div>
    </div>
  );
};

export default AboutUs;