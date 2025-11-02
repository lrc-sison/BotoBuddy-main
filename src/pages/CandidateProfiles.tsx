import { useState } from 'react';
import { ExternalLink, MapPin, Users, Calendar, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import candidate1 from '@/assets/WuI6hRwp.jpg';
import candidate2 from '@/assets/pdmh48u-.jpg';
import candidate3 from '@/assets/i1YVZk_r.jpg';
import candidate4 from '@/assets/candidate4.jpg';

const CandidateProfiles = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null);

  const candidates = [
    {
      id: 1,
      name: 'Marceline Lagdameo',
      party: 'BINI-A Party',
      position: 'Mayor',
      image: candidate1,
      location: 'District 1',
      experience: '8 years',
      bio: 'Former city council member with extensive experience in urban planning and community development.',
      fullBio: 'Adeline Acosta has dedicated her career to public service, focusing on sustainable urban development and community engagement. With a background in environmental policy and urban planning, she has successfully led multiple initiatives to improve public transportation, increase affordable housing, and promote green energy solutions.',
      stances: {
        economy: 'Supports small business growth and job creation through targeted tax incentives.',
        climate: 'Champions renewable energy and carbon neutrality by 2030.',
        healthcare: 'Advocates for expanded public health services and mental health support.',
        education: 'Prioritizes increased funding for public schools and teacher support.'
      },
      endorsements: ['Teachers Union', 'Environmental Coalition', 'Small Business Association'],
      website: ''
    },
    {
      id: 2,
      name: 'Santhrielle Sevilla',
      party: 'BINI-B Party',
      position: 'Mayor',
      image: candidate2,
      location: 'District 2',
      experience: '12 years',
      bio: 'Business leader and former state representative focused on fiscal responsibility and economic growth.',
      fullBio: 'Santhrielle Sevilla brings a wealth of private sector experience and proven leadership in government. As a former state representative and successful business owner, he understands both the challenges facing our community and the practical solutions needed to address them.',
      stances: {
        economy: 'Focuses on reducing business regulations and attracting new industries.',
        climate: 'Supports balanced approach to environmental protection and economic growth.',
        healthcare: 'Promotes market-based healthcare solutions and public-private partnerships.',
        education: 'Advocates for school choice and performance-based education funding.'
      },
      endorsements: ['Chamber of Commerce', 'Police Union', 'Taxpayers Association'],
      website: ''
    },
    {
      id: 3,
      name: 'Adeline Acosta',
      party: 'Independent',
      position: 'Mayor',
      image: candidate3,
      location: 'District 3',
      experience: '5 years',
      bio: 'Community organizer and advocate for social justice and government transparency.',
      fullBio: 'Adeline Acosta has spent her career fighting for the underrepresented and ensuring that all voices are heard in government. Her grassroots approach to politics and commitment to transparency have earned her support across party lines.',
      stances: {
        economy: 'Emphasizes worker rights and living wage policies.',
        climate: 'Prioritizes environmental justice and community-led climate solutions.',
        healthcare: 'Supports universal healthcare access and community health centers.',
        education: 'Advocates for equitable funding and community-centered schools.'
      },
      endorsements: ['Community Action Network', 'Civil Rights Coalition', 'Healthcare Workers Union'],
      website: ''
    },
    {
      id: 4,
      name: 'Journey Ramos',
      party: 'Independent',
      position: 'Mayor',
      image: candidate4,
      location: 'District 4',
      experience: '10 years',
      bio: 'Public advocate focused on accountability, rural development, and climate resilience.',
      fullBio: 'Journey Ramos is a dedicated public advocate with a decade of experience in community governance. She has championed anti-corruption initiatives, sustainable livelihoods, and rural empowerment. Her leadership has helped establish transparent oversight bodies, support programs for farmers and fisherfolk, and community-based disaster preparedness plans that strengthened local resilience.',
      stances: {
        economy: 'Promotes fair trade, financial aid, and market access for rural workers.',
        climate: 'Advocates for climate resilience through sustainable and community-based disaster management.',
        governance: 'Strengthens anti-corruption measures, transparency, and whistleblower protection.',
        agriculture: 'Expands livelihood programs for farmers and fisherfolk with access to resources and fair trade systems.'
      },
      endorsements: ['Community Organizations', 'Rural Development Networks'],
      website: ''
    }

  ];

  const CandidateModal = ({ candidate, isOpen, onClose }: any) => (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between w-full">
            <DialogTitle className="text-2xl font-bold text-primary">{candidate.name}</DialogTitle>

            {/* single DialogClose control */}
            <DialogClose asChild>
              <button aria-label="Close" className="p-2 rounded hover:bg-muted/50">
                <X />
              </button>
            </DialogClose>
          </div>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img
              src={candidate.image}
              alt={candidate.name}
              className="w-full h-80 md:h-96 object-cover rounded-lg mb-4"
            />
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{candidate.party}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{candidate.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{candidate.experience} experience</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Biography</h3>
              <p className="text-muted-foreground">{candidate.fullBio}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Policy Positions</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-accent">Economy</h4>
                  <p className="text-sm text-muted-foreground">{candidate.stances.economy}</p>
                </div>
                <div>
                  <h4 className="font-medium text-accent">Climate</h4>
                  <p className="text-sm text-muted-foreground">{candidate.stances.climate}</p>
                </div>
                <div>
                  <h4 className="font-medium text-accent">Healthcare</h4>
                  <p className="text-sm text-muted-foreground">{candidate.stances.healthcare}</p>
                </div>
                <div>
                  <h4 className="font-medium text-accent">Education</h4>
                  <p className="text-sm text-muted-foreground">{candidate.stances.education}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Endorsements</h3>
              <div className="flex flex-wrap gap-2">
                {candidate.endorsements.map((endorsement: string, index: number) => (
                  <Badge key={index} variant="secondary">{endorsement}</Badge>
                ))}
              </div>
            </div>

            <Button asChild variant="civic" className="w-full">
              <a href={candidate.website} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit Campaign Website
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen bg-gradient-card pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Candidate Profiles</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know the candidates running for office. Review their backgrounds, policy positions, and endorsements to make an informed decision.
          </p>
        </div>

        {/* horizontal scroll container */}
        <div className="overflow-x-auto">
          <div className="flex gap-6 px-4 pb-6 snap-x snap-mandatory">
            {candidates.map((candidate) => (
              <div key={candidate.id} className="min-w-[320px] md:min-w-[420px] lg:min-w-[480px] flex-shrink-0 snap-start">
                <Card className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="relative mb-4">
                      <img
                        src={candidate.image}
                        alt={candidate.name}
                        className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-lg"
                      />
                      <Badge className="absolute top-2 right-2 bg-primary text-white">
                        {candidate.position}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-primary">{candidate.name}</CardTitle>
                    <p className="text-accent font-medium">{candidate.party}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {candidate.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {candidate.experience} experience
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {candidate.bio}
                    </p>

                    <Button variant="outline" className="w-full" onClick={() => setSelectedCandidate(candidate.id)}>
                      View Full Profile
                    </Button>

                    <CandidateModal
                      candidate={candidate}
                      isOpen={selectedCandidate === candidate.id}
                      onClose={() => setSelectedCandidate(null)}
                    />
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CandidateProfiles;