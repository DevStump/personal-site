import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Calendar,
  MapPin,
  Music,
  Users,
  User,
  Heart,
  Trophy,
  Target,
  BarChart3,
  Glasses,
} from "lucide-react"
import { GiBasketballBall, GiAmericanFootballBall } from "react-icons/gi"
import { FaBaseballBall } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const getProductIcon = (productName: string) => {
    switch (productName) {
      case "DynastyGM & Dynasty Nerds App":
        return <Glasses className="w-5 h-5 mr-2 text-primary" />
      case "FanDuel Sportsbook Platform":
        return <GiBasketballBall className="w-5 h-5 mr-2 text-primary" />
      case "Youth Baseball Video Platform":
        return <FaBaseballBall className="w-5 h-5 mr-2 text-primary" />
      case "SleeperSheet Analytics Tool":
        return <GiAmericanFootballBall className="w-5 h-5 mr-2 text-primary" />
      default:
        return <Target className="w-5 h-5 mr-2 text-primary" />
    }
  }

  const projects = [
    {
      name: "PaletteMatch",
      description:
        "Discover your seasonal color palette with AI-powered clothing analysis. Take a photo and get instant feedback on what colors work best for you.",
      language: "TypeScript",
      stars: 0,
      forks: 0,
      topics: ["ai", "color-analysis", "fashion", "computer-vision"],
      url: "https://www.palettematch.info",
    },
    {
      name: "SleeperSheet",
      description:
        "The predescessor to the DynastyGM and Dynasty Nerds App -- what got me started in the fantasy space.",
      language: "JavaScript",
      stars: 0,
      forks: 0,
      topics: ["google scripts", "google sheet", "acquistion", "sports"],
      url: "https://github.com/DevStump/sleepersheet",
    },
    {
      name: "GamedayDiary",
      description:
        "Letting fans track and save their favorite memories from the games they attend and watch.",
      language: "Typescript",
      stars: 0,
      forks: 0,
      topics: ["sports"],
      url: "https://github.com/DevStump/gameday-diary",
    },
    {
      name: "Retiro (Work in Progress)",
      description:
        "An app helping users visualize their path to retirement, simply and effectively.",
      language: "TypeScript",
      stars: 0,
      forks: 0,
      topics: ["css", "javascript", "finance"],
      url: "https://github.com/DevStump/retiro",
    },
    {
      name: "Personal Website",
      description:
        "The very website you're on right now. Site-ception.",
      language: "TypeScript",
      stars: 0,
      forks: 0,
      topics: ["css", "javascript", "portfolio"],
      url: "https://github.com/DevStump/personal-site",
    },
  ]

  const workExperience = [
    {
      company: "FanDuel Sportsbook",
      position: "Product Manager",
      duration: "Apr 2024 – Present",
      description:
        "Drive product strategy and execution for FanDuel's Sportsbook platform within the Risk & Trading team. Lead cross-functional initiatives across trading, engineering, data, compliance, and marketing. Focus on building fan-first betting products with a balance of engagement and responsible gaming.",
    },
    {
      company: "Dynasty Nerds",
      position: "Head of Product",
      duration: "Feb 2020 – Present",
      description:
        "Lead product for the DynastyGM fantasy platform and mobile app used by 12,000+ paid subscribers. Shipped proprietary tools to simplify league management and improve win probability. Manage remote team and long-term roadmap as an ongoing passion project.",
    },
    {
      company: "Realplay Sports",
      position: "Director of Product",
      duration: "Jan 2021 – Mar 2024",
      description:
        "Owned product development for a youth baseball video and recruiting platform. Overhauled workflows to cut video production labor by 73% and costs by 50%. Helped drive 65% YoY revenue growth in 2022 and 30% in 2023 through improved user experience and backend efficiency.",
    },
    {
      company: "Pizza Pio Neapolitan Pizza Catering",
      position: "Founder & Chef",
      duration: "Jun 2023 – Jun 2024",
      description:
        "Founded and ran a mobile pizza catering business for events across Boston. Served 2,000+ slices in one weekend at the Boston Pizza Festival while managing all operations, marketing, and logistics.",
    },
    {
      company: "Paytronix Systems",
      position: "Enterprise Technology Consultant",
      duration: "Apr 2019 – Jan 2021",
      description:
        "Led strategic technical implementations for enterprise restaurant clients. Acted as the primary technical advisor for top-tier accounts, improving loyalty platform outcomes across 15+ deployments.",
    },
    {
      company: "Paytronix Systems",
      position: "Technology Consultant",
      duration: "Jul 2018 – Apr 2019",
      description:
        "Executed technical implementations and strategic consulting for 100+ restaurant clients. Promoted within 10 months for performance and client satisfaction.",
    },
    {
      company: "SleeperSheet",
      position: "Founder",
      duration: "Jul 2016 – Dec 2019",
      description:
        "Built and launched a fantasy football analytics platform to manage Dynasty leagues. Developed proprietary algorithms and tools to consolidate cross-platform data. Acquired by Dynasty Nerds in 2019.",
    },
  ]

  const productExperience = [
    {
      name: "DynastyGM & Dynasty Nerds App",
      company: "Dynasty Nerds",
      duration: "Feb 2020 – Present",
      metrics: "12,000+ paid subscribers",
      description:
        "Lead product for comprehensive dynasty fantasy football platform. Shipped proprietary tools to simplify league management and improve win probability for serious fantasy players.",
      impact: ["Built core platform serving 12K+ users", "Designed mobile app from 0-to-1", "Manage remote team and long-term roadmap"],
    },
    {
      name: "FanDuel Sportsbook Platform",
      company: "FanDuel",
      duration: "Apr 2024 – Present",
      metrics: "Millions of active users",
      description:
        "Drive product strategy for FanDuel's core Sportsbook platform within Risk & Trading, focused on college basketball. Lead cross-functional initiatives to build fan-first betting products.",
      impact: ["Focus on college basketball features", "Balance engagement with responsible gaming", "Cross-team collaboration across trading, eng, data"],
    },
    {
      name: "Youth Baseball Video Platform",
      company: "Realplay Sports",
      duration: "Jan 2021 – Mar 2024",
      metrics: "65% YoY growth in 2022",
      description:
        "Owned product development for video and recruiting platform connecting youth baseball players with college scouts.",
      impact: ["Cut video production labor by 73%", "Reduced operational costs by 50%", "Drove 65% YoY revenue growth in 2022"],
    },
    {
      name: "SleeperSheet Analytics Tool",
      company: "Independent",
      duration: "Jul 2016 – Dec 2019",
      metrics: "Acquired by Dynasty Nerds",
      description:
        "Built and launched fantasy football analytics platform with proprietary algorithms to manage Dynasty leagues and consolidate cross-platform data.",
      impact: ["Zero-to-one product development", "Built user base that led to acquisition", "Foundation for current Dynasty Nerds platform"],
    },
  ]

  const sideProjectsCard = {
    name: "Personal Side Projects",
    company: "Independent",
    duration: "2016 – Present",
    metrics: "Multiple 0-to-1 products",
    description:
      "Product manager and developer for various passion projects where I handle everything from user research to technical implementation.",
    impact: ["Retiro: Retirement planning visualization app", "GamedayDiary: Fan memory tracking platform", "Personal Website: This portfolio site", "More experimental projects in development"],
  }

  const skills = [
    "Product Strategy",
    "Roadmapping",
    "Opportunity Mapping",
    "Customer Interviewing",
    "Product Discovery",
    "Stakeholder Management",
    "Working in Regulated Environments",
    "Oral & Written Communication",
    "Cross-Functional Collaboration",
    "AI Prototyping",
    "Claude Code",
    "v0.dev",
    "Cursor",
    "Figma",
    "Notion",
    "Atlassian Jira",
    "Confluence",
    "Problem Solving",
    "Fantasy Sports Product Design",
    "Sports Betting Platforms",
    "Fan Engagement",
    "User Research",
    "Zero-to-One Product Development",
  ]

  const favoriteMusic = [
    "Radiohead",
    "King Gizzard",
    "Lana Del Rey",
    "Khruangbin",
  ]

  const favoriteTeams = [
    "Yankees", 
    "Jets", 
    "Juventus", 
    "Knicks", 
  ]

  const sportsInterests = [
    "NFL",
    "MLB",
    "Fantasy Football",
    "Sports Betting",
  ]

  const personalQuirks = [
    "Seaside Vacations",
    "Neapolitan Pizza Making",
    "Baseball Card Collecting",
    "Vinyl Collecting",
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-primary font-bricolage">Nick Piovano</h1>
            <div className="hidden md:flex space-x-6">
              <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#products" className="text-muted-foreground hover:text-primary transition-colors">
                Product
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Code
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
                src="/images/profile.png?v=2"
                alt="Nick Piovano - Product Manager"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-6 border-4 border-primary pizza-glow object-cover"
              />
              <div className="absolute top-0 right-0 bg-accent text-accent-foreground rounded-full p-2 border-2 border-background z-10">
                <Trophy className="w-5 h-5" />
              </div>
              
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-bricolage">
              
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Product Innovator & Leader in Sports
            </p>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-muted-foreground">
            Sports product manager with 10+ years building tools for fans — from fantasy and betting to live video and recruiting. 
            I specialize in early-stage product work and turning complex data into intuitive experiences.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link href="#projects">
                  <Target className="w-4 h-4 mr-2" />
                  See My Playbook
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                asChild
              >
                <Link href="#contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Ready to Team Up?
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gradient-to-br from-muted/40 to-primary/10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center font-bricolage">
              <User className="w-8 h-8 mr-3 text-primary" />
              About the Player
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg mb-6">
                I’m a sports product manager with 10+ years of experience building digital tools that connect fans with the games 
                they love — especially in niche communities with big, untapped potential. I started by building Sleeper Sheet in 
                college, a fantasy tool that got acquired by Dynasty Nerds, where I still lead product and a small team today.
                </p>
                <p className="text-lg mb-6">
                Since then, I’ve built recruiting tools for youth baseball, led product at a sports video startup, and now work 
                on college basketball and trading automation at FanDuel. My technical background helps me bridge the gap between 
                complex data and intuitive fan experiences.
                </p>
                <p className="text-lg mb-6">
                My sweet spot is early-stage product work: zero-to-one discovery, fast iteration, and creating things people 
                actually use. I thrive in ambiguous spaces and work best when I’m close to the product, the user, and the messy 
                middle where real progress happens.
                </p>
                <p className="text-lg mb-6">
                At one point during all that, I ran a pizza catering business serving private clients at their homes — and once sold 
                2,000 slices in a weekend at the Boston Pizza Festival. Still one of my proudest stats.
                </p>
                <div className="flex items-center text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4 mr-2 text-accent" />
                  Boston, MA
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2 text-accent" />
                  Currently seeking a trade
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Skills & Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-secondary/20 text-secondary border-secondary/30 hover:bg-secondary/20"
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

      {/* Product Manager Experience Section */}
      <section id="products" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <Target className="w-8 h-8 mr-3 text-primary" />
              Product Manager Experience
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Products I've built and managed that connect fans with the sports they love. Each represents 
              a different stage in my PM journey, from zero-to-one discovery to scaling existing platforms.
            </p>
          </div>
          {/* Main Product Cards - 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-8">
            {productExperience.map((product) => (
              <Card
                key={product.name}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 ocean-glow"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center text-card-foreground">
                        {getProductIcon(product.name)}
                        {product.name}
                      </CardTitle>
                      <div className="flex items-center mt-2">
                        <span className="text-sm text-primary font-medium">{product.company}</span>
                        <Badge variant="secondary" className="ml-4 bg-accent/20 text-accent border-accent/30">
                          {product.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="mt-3 text-muted-foreground">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center text-sm font-medium text-secondary mb-2">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Key Impact: {product.metrics}
                    </div>
                    <ul className="space-y-1">
                      {product.impact.map((item, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start">
                          <div className="w-1 h-1 bg-accent rounded-full mt-2 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Personal Side Projects - Full Width, Less Emphasized */}
          <div className="max-w-6xl mx-auto">
            <Card className="bg-muted/20 border-muted-foreground/20 hover:border-muted-foreground/30 transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center text-muted-foreground text-lg">
                      <Target className="w-4 h-4 mr-2 text-muted-foreground/70" />
                      {sideProjectsCard.name}
                    </CardTitle>
                    <div className="flex items-center mt-2">
                      <span className="text-sm text-muted-foreground/70 font-medium">{sideProjectsCard.company}</span>
                      <Badge variant="secondary" className="ml-4 bg-muted-foreground/10 text-muted-foreground/60 border-muted-foreground/20">
                        {sideProjectsCard.duration}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardDescription className="mt-3 text-muted-foreground/80">{sideProjectsCard.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center text-sm font-medium text-muted-foreground/70 mb-2">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Key Impact: {sideProjectsCard.metrics}
                    </div>
                    <ul className="space-y-1">
                      {sideProjectsCard.impact.map((item, index) => (
                        <li key={index} className="text-sm text-muted-foreground/80 flex items-start">
                          <div className="w-1 h-1 bg-muted-foreground/40 rounded-full mt-2 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-end justify-end">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-muted-foreground/30 text-muted-foreground hover:bg-muted-foreground/10 hover:text-muted-foreground"
                      asChild
                    >
                      <Link href="#projects">
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                      <Link href={project.url} target="_blank" aria-label="View project">
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-xs border-secondary/30 text-secondary">
                      <div className="w-3 h-3 bg-secondary rounded-full mr-2" />
                      {project.language}
                    </Badge>
                    {project.topics.map((topic) => (
                      <Badge key={topic} variant="outline" className="text-xs border-accent/30 text-accent">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
              <Link href="https://github.com/DevStump" target="_blank">
                <Github className="w-4 h-4 mr-2" />
                View Full Lineup on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-gradient-to-br from-muted/20 to-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <Trophy className="w-8 h-8 mr-3 text-accent" />
              Career Highlights
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            {workExperience.map((job, index) => (
              <div key={`${job.company}-${job.position}-${index}`} className="relative">
                <div className="flex items-center space-x-4 pb-8">
                  <div className={`flex-shrink-0 w-4 h-4 border-2 border-primary rounded-full relative z-10 ${
                    job.duration.includes('Present') ? 'bg-primary' : 'bg-transparent'
                  }`} />
                  <div className="flex-grow">
                    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-card-foreground">{job.position}</CardTitle>
                        <CardDescription className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
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
                <div className="absolute w-0.5 bg-border" style={{
                  left: 'calc(0.5rem - 1px)',
                  top: index === 0 ? '0' : '-0.5rem',
                  bottom: index === workExperience.length - 1 ? '32px' : '-2rem'
                }} />
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-8xl mx-auto">
            <Card className="bg-card border-border king-gizz-glow">
              <CardHeader>
                <CardTitle className="flex items-center text-card-foreground">
                  <Music className="w-5 h-5 mr-2 text-accent" />
                  Game Day Playlist
                  <span className="ml-2 gator-bounce">🐊</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {favoriteMusic.map((genre) => (
                    <Badge key={genre} variant="secondary" className="bg-secondary/20 text-secondary hover:bg-secondary/20">
                      {genre}
                    </Badge>
                  ))}
                </div>
                <p className="text-muted-foreground mt-4">
                  From Radiohead’s moody masterpieces to King Gizzard’s genre-hopping chaos, with detours into Khruangbin’s desert-psych grooves and Lana Del Rey’s dreamy melancholia — this is the soundtrack to my work, my weekends, and my weirdest ideas.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border king-gizz-glow">
              <CardHeader>
                <CardTitle className="flex items-center text-card-foreground">
                  <Users className="w-5 h-5 mr-2 text-accent" />
                  Favorite Teams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {favoriteTeams.map((sport) => (
                    <Badge key={sport} variant="secondary" className="bg-secondary/20 text-secondary hover:bg-secondary/20">
                      {sport}
                    </Badge>
                  ))}
                </div>
                <p className="text-muted-foreground mt-4">
                  Catch me riding the highs and lows with the Yankees, Jets, Knicks, and Juventus — usually yelling at the TV.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border king-gizz-glow">
              <CardHeader>
                <CardTitle className="flex items-center text-card-foreground">
                  <BarChart3 className="w-5 h-5 mr-2 text-accent" />
                  Sports Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {sportsInterests.map((interest) => (
                    <Badge key={interest} variant="secondary" className="bg-secondary/20 text-secondary hover:bg-secondary/20">
                      {interest}
                    </Badge>
                  ))}
                </div>
                <p className="text-muted-foreground mt-4">
                  Always diving deep into the numbers behind the games. Data tells the real story.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border king-gizz-glow">
              <CardHeader>
                <CardTitle className="flex items-center text-card-foreground">
                  <Heart className="w-5 h-5 mr-2 text-accent" />
                  Personal Vibes
                  <span className="text-2xl ml-2 turtle-float">🐢</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {personalQuirks.map((quirk) => (
                    <Badge key={quirk} variant="secondary" className="bg-secondary/20 text-secondary hover:bg-secondary/20">
                      {quirk}
                    </Badge>
                  ))}
                </div>
                <p className="text-muted-foreground mt-4">
                  Sea turtles are my spirit animal - patient, persistent, and always finding their way home. Kind of like me when it's time to make pizza.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-br from-muted/20 to-accent/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">Ready to Team Up?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's connect and see how we can win together!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-4">
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <Link href="mailto:nicholas.piovano@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Send Game Plan
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-white"
              asChild
            >
              <Link href="https://linkedin.com/in/nickpiovano" target="_blank">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              asChild
            >
              <Link href="https://github.com/DevStump" target="_blank">
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
            &copy; 2025 Nick Piovano. Built with Next.js, Tailwind CSS, and a lot of{" "}
            <span className="text-primary">❤️</span> for sports, great pizza, and sea turtles{" "}
            <span className="sea-turtle inline-block">🐢</span>
          </p>
        </div>
      </footer>
    </div>
  )
}