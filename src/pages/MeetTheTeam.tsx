import { Github, Linkedin, Mail, Coffee, Book, Music, Gamepad2 } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import team1 from '@/assets/juancho.jpg';
import team2 from '@/assets/guenne.jpg';
import team3 from '@/assets/reiko.jpg';
import team4 from '@/assets/seth.jpg';
import team5 from '@/assets/kaylin.jpg'; // fixed filename
import team6 from '@/assets/carlos.jpg';

const MeetTheTeam = () => {
  const team = [
    {
      name: "Garcia, Seth Ezekiel G.",
      role: "Lead Researcher",
      bio: "Led the team with the creation of the idea and led in the provision of website info. Supervised the creation of the research paper.",
      funFact: "seth.garcia130155@my.lsgh.edu.ph",
      icon: <Mail className="h-4 w-4" />,
      image: team4
    },
    {
      name: "Basagre, Guenne Marie P.",
      role: "Researcher",
      bio: "Contructed the conceptual framewrok sampling method as well as the population and research questions.",
      funFact: "guenne.basagre210494@my.lsgh.edu.ph",
      icon: <Mail className="h-4 w-4" />,
      image: team2
    },
    {
      name: "Eleazar, Kaelyn Sigrid T.",
      role: "Researcher",
      bio: "Helped with the construction of the conceptual framework and the production of the ethical guidelines",
      funFact: "kaelyn.eleazar240044@my.lsgh.edu.ph",
      icon: <Mail className="h-4 w-4" />,
      image: team5
    },
    {
      name: "Flores, Juan Pablo A.",
      role: "Researcher",
      bio: "Developed the website and constucted the theoretical framework as well as the population and sampling.",
      funFact: "juan.flores240136@my.lsgh.edu.ph",
      icon: <Mail className="h-4 w-4" />,
      image: team1
    },
    {
      name: "Lago, Juan Carlos",
      role: "Researcher",
      bio: "Carlos mostly assisted the group in writing the research paper, providing insights and gathering relevant information for the study.",
      funFact: "juan.lago140011@my.lsgh.edu.ph",
      icon: <Mail className="h-4 w-4" />,
      image: team6
    },
    {
      name: "Gongora, Raikko Rain M.",
      role: "Researcher",
      bio: "Constructed the significance of the study as well as the scope and delimitation of the study.",
      funFact: "raikko.gongora200508@my.lsgh.edu.ph",
      icon: <Mail className="h-4 w-4" />,
      image: team3
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-card pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-6">Meet Our Team</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are Group-6 and provided is a short description of our members, necessarry info is given as well feel free to contact us anytime via e-mail!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 object-cover rounded-full"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                <p className="text-accent font-medium">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="bg-muted/50 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    {member.icon}
                    <span className="font-medium text-primary">E-Mail:</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{member.funFact}</p>
                </div>

                <div className="flex gap-2 justify-center">
                  <Button variant="outline" size="sm" asChild>
                    <a href={`mailto:${member.funFact}`}>
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Us Section */}
        <section className="mt-20">
          <Card className="shadow-elegant bg-gradient-primary text-white">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">Want to Join Our Mission?</h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                We're always looking for passionate individuals who want to make a difference 
                in civic engagement and democracy.
              </p>
              <Button variant="outline-white" size="lg" asChild>
                <a href="mailto:careers@voteassist.com">
                  <Mail className="mr-2 h-5 w-5" />
                  View Open Positions
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default MeetTheTeam;