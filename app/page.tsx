import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Star,
  GitFork,
  Calendar,
  MapPin,
  Music,
  Film,
  User,
  Heart,
  Trophy,
  Target,
  BarChart3,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const projects = [
    {
      name: "Fantasy League Analytics",
      description:
        "Built a comprehensive analytics dashboard for fantasy sports leagues with player performance predictions and trade recommendations.",
      language: "TypeScript",
      stars: 156,
      forks: 34,
      topics: ["nextjs", "typescript", "sports-analytics", "data-viz"],
    },
    {
      name: "Team Performance Tracker",
      description:
        "Real-time performance tracking tool for sports teams with injury management and roster optimization features.",
      language: "React",
      stars: 89,
      forks: 21,
      topics: ["react", "sports-data", "performance", "dashboard"],
    },
    {
      name: "Game Day Companion",
      description:
        "Mobile-first app for sports fans with live scores, stats, and social features. My weekend passion project.",
      language: "React Native",
      stars: 67,
      forks: 15,
      topics: ["react-native", "sports", "mobile", "real-time"],
    },
    {
      name: "Pizza Order Optimizer",
      description:
        "Throwback to my catering days - algorithm to optimize pizza orders for large events based on preferences and dietary restrictions.",
      language: "Python",
      stars: 45,
      forks: 12,
      topics: ["python", "optimization", "food-service", "algorithms"],
    },
  ]

  const workExperience = [
    {
      company: "SportsTech Pro",
      position: "Senior Product Manager - Fan Engagement",
      duration: "2022 - Present",
      description:
        "Leading product strategy for fan engagement platform serving 2M+ sports fans. Increased user engagement by 65% through gamification and social features. Managed cross-functional team of 12.",
    },
    {
      company: "Athletic Analytics Corp",
      position: "Product Manager - Performance Platform",
      duration: "2020 - 2022",
      description:
        "Built performance analytics tools for professional sports teams. Launched predictive injury prevention system that reduced player injuries by 30% across partner teams.",
    },
    {
      company: "GameDay Solutions",
      position: "Associate Product Manager",
      duration: "2019 - 2020",
      description:
        "Managed mobile app product roadmap for live sports streaming platform. Conducted user research with 500+ sports fans to inform feature prioritization and UX improvements.",
    },
    {
      company: "Tony's Pizza Catering",
      position: "Founder & Operations Manager",
      duration: "2017 - 2019",
      description:
        "Founded and operated pizza catering business serving corporate events and sports venues. Managed operations, customer relationships, and developed efficient delivery systems.",
    },
  ]

  const skills = [
    "Product Strategy",
    "Sports Analytics",
    "User Research",
    "A/B Testing",
    "Fan Engagement",
    "Performance Metrics",
    "SQL",
    "JavaScript",
    "React",
    "Python",
    "Tableau",
    "Team Leadership",
  ]

  const favoriteMusic = ["Stadium Anthems", "Electronic", "Hip Hop", "Classic Rock", "Pump-up Playlists"]

  const favoriteMovies = ["Moneyball", "The Last Dance", "Rush", "Ford v Ferrari", "Chef", "Any Given Sunday"]

  const sportsInterests = [
    "Fantasy Football",
    "NBA Analytics",
    "Soccer Tactics",
    "Baseball Sabermetrics",
    "Sports Betting",
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-primary">Nick Piovano</h1>
            <div className="hidden md:flex space-x-6">
              <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                Experience
              </Link>
              <Link href="#interests" className="text-muted-foreground hover:text-primary transition-colors">
                Interests
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="relative inline-block">
              <Image
                src="/images/profile.jpg"
                alt="Nick Piovano - Product Manager"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-6 border-4 border-primary pizza-glow object-cover"
              />
              <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full p-2">
                <Trophy className="w-6 h-6" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="sports-gradient bg-clip-text text-transparent">Nick Piovano</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Sports Product Manager & Weekend Code Athlete
            </p>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-muted-foreground">
              Building winning products in the sports industry by day, crafting code by night. Former pizza entrepreneur
              who traded dough for data, but kept the passion for bringing people together.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link href="#projects">
                  <Target className="w-4 h-4 mr-2" />
                  See My Game Plan
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                asChild
              >
                <Link href="#contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Join My Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <User className="w-8 h-8 mr-3 text-primary" />
              About the Player
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg mb-6">
                  I'm a sports product manager with 5+ years of experience building digital experiences that connect
                  fans with the games they love. My technical background helps me bridge the gap between complex sports
                  data and intuitive user experiences.
                </p>
                <p className="text-lg mb-6">
                  Before diving into sports tech, I ran a pizza catering business serving corporate events and sports
                  venues. That experience taught me about operations, customer service, and the importance of delivering
                  under pressure - skills that translate perfectly to product management.
                </p>
                <p className="text-lg mb-6">
                  When I'm not analyzing user funnels or planning product roadmaps, you'll find me coding side projects,
                  diving deep into sports analytics, or perfecting my homemade pizza recipe.
                </p>
                <div className="flex items-center text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4 mr-2 text-accent" />
                  San Francisco, CA
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2 text-accent" />
                  Ready for the next championship
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Skills & Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-secondary/20 text-secondary border-secondary/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <Github className="w-8 h-8 mr-3 text-primary" />
              Side Projects & Code
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My weekend coding sessions where I combine sports passion with technical skills. Each project solves a
              real problem I've encountered.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {projects.map((project) => (
              <Card
                key={project.name}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 pizza-glow"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center text-card-foreground">
                        <Github className="w-5 h-5 mr-2 text-primary" />
                        {project.name}
                      </CardTitle>
                      <CardDescription className="mt-2 text-muted-foreground">{project.description}</CardDescription>
                    </div>
                    <Button variant="ghost" size="icon" className="hover:bg-primary/20" asChild>
                      <Link href="#" aria-label="View project">
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.topics.map((topic) => (
                      <Badge key={topic} variant="outline" className="text-xs border-accent/30 text-accent">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <div className="w-3 h-3 bg-secondary rounded-full mr-2" />
                        {project.language}
                      </span>
                      <span className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-accent" />
                        {project.stars}
                      </span>
                      <span className="flex items-center">
                        <GitFork className="w-4 h-4 mr-1 text-accent" />
                        {project.forks}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
              <Link href="https://github.com" target="_blank">
                <Github className="w-4 h-4 mr-2" />
                View Full Roster on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <Trophy className="w-8 h-8 mr-3 text-accent" />
              Career Highlights
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            {workExperience.map((job, index) => (
              <div key={job.company} className="relative">
                <div className="flex items-start space-x-4 pb-8">
                  <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2 relative z-10" />
                  <div className="flex-grow">
                    <Card className="bg-card border-border">
                      <CardHeader>
                        <CardTitle className="text-card-foreground">{job.position}</CardTitle>
                        <CardDescription className="flex items-center justify-between">
                          <span className="text-primary font-medium">{job.company}</span>
                          <span className="text-sm text-accent">{job.duration}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{job.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                {index < workExperience.length - 1 && (
                  <div className="absolute left-2 top-6 w-0.5 h-full bg-border -translate-x-0.5" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <Heart className="w-8 h-8 mr-3 text-primary" />
              Off the Field
            </h2>
            <p className="text-muted-foreground">What keeps me motivated outside of work</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-card-foreground">
                  <Music className="w-5 h-5 mr-2 text-accent" />
                  Game Day Playlist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {favoriteMusic.map((genre) => (
                    <Badge key={genre} variant="secondary" className="bg-secondary/20 text-secondary">
                      {genre}
                    </Badge>
                  ))}
                </div>
                <p className="text-muted-foreground mt-4">
                  Music that gets me pumped up for big product launches and late-night coding sessions.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-card-foreground">
                  <Film className="w-5 h-5 mr-2 text-accent" />
                  Must-Watch Films
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {favoriteMovies.map((movie) => (
                    <Badge key={movie} variant="secondary" className="bg-secondary/20 text-secondary">
                      {movie}
                    </Badge>
                  ))}
                </div>
                <p className="text-muted-foreground mt-4">
                  Sports dramas, underdog stories, and anything that celebrates the entrepreneurial spirit.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-card-foreground">
                  <BarChart3 className="w-5 h-5 mr-2 text-accent" />
                  Sports Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {sportsInterests.map((interest) => (
                    <Badge key={interest} variant="secondary" className="bg-secondary/20 text-secondary">
                      {interest}
                    </Badge>
                  ))}
                </div>
                <p className="text-muted-foreground mt-4">
                  Always diving deep into the numbers behind the games. Data tells the real story.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">Ready to Team Up?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Looking for new opportunities to build amazing sports products. Let's connect and see how we can win
            together!
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <Link href="mailto:nick@example.com">
                <Mail className="w-4 h-4 mr-2" />
                Send Game Plan
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-white"
              asChild
            >
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              asChild
            >
              <Link href="https://github.com" target="_blank">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>
            &copy; 2024 Nick Piovano. Built with Next.js, Tailwind CSS, and a lot of{" "}
            <span className="text-primary">❤️</span> for sports and great pizza.
          </p>
        </div>
      </footer>
    </div>
  )
}
