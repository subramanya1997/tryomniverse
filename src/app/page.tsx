import { ArrowUpRight, BrainCircuit, Bot, Building2, ChartBar, Code2, LineChart, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

const metrics = [
  { value: "120+", label: "Enterprise workflows automated" },
  { value: "28%", label: "Average uplift in productivity" },
  { value: "45 days", label: "From idea to production pilots" },
  { value: "A+", label: "Responsible AI maturity score" },
];

const services = [
  {
    icon: BrainCircuit,
    title: "AI Strategy & Roadmaps",
    description:
      "Evaluate opportunities, build executive alignment, and capture ROI with our outcome-driven strategy sprints.",
    highlights: ["Vision framing", "Value modeling", "Capability assessment"],
  },
  {
    icon: Code2,
    title: "Model Engineering",
    description:
      "Design, fine-tune, and evaluate models using your proprietary data with our applied research engineers.",
    highlights: ["LLM & RAG", "Multimodal", "Evaluation harness"],
  },
  {
    icon: Bot,
    title: "Automation & Agents",
    description:
      "Ship production-grade copilots and agents that orchestrate across systems with traceable guardrails.",
    highlights: ["Orchestration", "Human-in-the-loop", "Observability"],
  },
];

const caseStudies = [
  {
    title: "Fintech portfolio intelligence",
    result: "Reduced analyst synthesis time by 63% while increasing coverage across 18 markets.",
    industry: "Financial Services",
    description:
      "Delivered a retrieval-augmented copilots suite integrating 12 proprietary data sources with SOC2 compliant controls.",
  },
  {
    title: "Global manufacturing quality AI",
    result: "Achieved 9-point improvement in first-pass yield through predictive anomaly detection.",
    industry: "Manufacturing",
    description:
      "Productionized vision transformers with real-time monitoring, enabling operations teams to intervene proactively.",
  },
  {
    title: "Healthcare contact center copilots",
    result: "Improved patient satisfaction by 21% with context-aware guidance across HIPAA-bound workflows.",
    industry: "Healthcare",
    description:
      "Rolled out virtual agents with safe automation, sentiment routing, and continuous evaluation dashboards.",
  },
];

const testimonials = [
  {
    name: "Lena Ortiz",
    role: "VP of Product, Stratify",
    quote:
      "Omniverse translated AI hype into measurable wins. The team embedded with our squads and earned trust fast.",
    avatar: "/avatars/lena.svg",
  },
  {
    name: "Marcus Hill",
    role: "CTO, Nova Industrial",
    quote:
      "They engineered a production MLOps stack in weeks, not quarters. Governance and velocity finally coexist.",
    avatar: "/avatars/marcus.svg",
  },
  {
    name: "Ayla Chen",
    role: "Chief Customer Officer, Meridian Health",
    quote:
      "The Omniverse team delivers at the pace of our ambition while keeping human impact front and center.",
    avatar: "/avatars/ayla.svg",
  },
];

const faqs = [
  {
    question: "How do you start an engagement?",
    answer:
      "We begin with a discovery sprint to map business outcomes, data realities, and stakeholders. Within two weeks you receive a prioritized roadmap and pilot backlog.",
  },
  {
    question: "Do you work with our internal teams?",
    answer:
      "Yes. We embed product strategists, researchers, and engineers alongside your teams to co-build capabilities and enable hand-off.",
  },
  {
    question: "How do you ensure responsible AI?",
    answer:
      "Responsible AI is embedded through dataset audits, eval harnesses, policy playbooks, and human-in-the-loop workflows that satisfy regulatory requirements.",
  },
];

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden pb-16 pt-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-hero-grid opacity-60" />
          <div className="absolute inset-0 bg-hero-aurora opacity-70" />
          <div className="absolute left-1/2 top-8 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(129,140,248,0.28),_transparent_62%)] blur-3xl" />
          <div className="absolute -left-44 top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,_rgba(45,212,191,0.24),_transparent_58%)] blur-3xl" />
          <div className="absolute -right-36 top-14 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.22),_transparent_58%)] blur-3xl" />
        </div>
        <div className="container grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <Badge className="w-fit border-primary/50 bg-primary/15 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              AI, responsibly shipped
            </Badge>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Build intelligence your operators trust and your executives can scale.
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Omniverse partners with enterprises to imagine, engineer, and operationalize AI systems that create measurable value—without compromising on safety, ethics, or speed.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <Link href="#contact">
                  Schedule a strategy session
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#case-studies">Explore our work</Link>
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {metrics.map((metric) => (
                <Card key={metric.label} className="border-border/50 bg-card/80 shadow-card backdrop-blur">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-3xl font-semibold text-foreground">
                      {metric.value}
                    </CardTitle>
                    <CardDescription>{metric.label}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-hero-grid opacity-70" />
            <Card className="relative h-full min-h-[460px] overflow-hidden border-border/60 bg-card/90 p-0 shadow-card backdrop-blur">
              <div className="absolute inset-0 bg-[linear-gradient(130deg,_rgba(129,140,248,0.18),_rgba(56,189,248,0.12)_45%,_transparent_80%)]" />
              <div className="relative flex h-full flex-col justify-between p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 rounded-full border border-border/50 bg-background/70 px-4 py-2 text-xs uppercase tracking-wide">
                      <Sparkles className="h-4 w-4 text-primary" />
                      Intelligent transformation
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <ShieldCheck className="h-4 w-4 text-secondary" />
                      SOC2-ready
                    </div>
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">
                    A full-stack team to orchestrate your AI ambition.
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Strategy partners, applied scientists, prompt engineers, and experience designers working as one squad with you.
                  </p>
                </div>
                <div className="grid gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/70 px-4 py-3">
                    <Building2 className="h-5 w-5 text-primary" />
                    Multinational enterprises across 11 industries
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/70 px-4 py-3">
                    <ChartBar className="h-5 w-5 text-secondary" />
                    Impact dashboards shipping every two weeks
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/70 px-4 py-3">
                    <ShieldCheck className="h-5 w-5 text-accent" />
                    Trust & governance baked into every release
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="container space-y-12">
        <div className="space-y-4 text-center">
          <Badge variant="accent" className="mx-auto">Services</Badge>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            From boardroom vision to the dashboards your teams depend on.
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Engage Omniverse across the lifecycle or plug in specialized squads to accelerate a single mission-critical program.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="border-border/60 bg-card/80 backdrop-blur">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="approach" className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <div className="space-y-4">
            <Badge variant="outline" className="w-fit">
              Proven approach
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Velocity with guardrails, alignment with measurable value.
            </h2>
            <p className="text-muted-foreground">
              Every engagement combines executive strategy facilitation, responsible AI architecture, and embedded enablement to ensure durable outcomes.
            </p>
          </div>
          <Tabs defaultValue="strategy" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="strategy">Strategy</TabsTrigger>
              <TabsTrigger value="engineering">Engineering</TabsTrigger>
              <TabsTrigger value="enablement">Enablement</TabsTrigger>
            </TabsList>
            <TabsContent value="strategy" className="space-y-4 rounded-3xl border border-border/60 bg-card/80 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold">Executive alignment & value framing</h3>
              <p className="text-sm text-muted-foreground">
                We articulate the AI ambition, quantify value, and design a sequencing roadmap anchored in real operational constraints.
              </p>
              <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                <li className="rounded-2xl border border-border/60 bg-background/70 p-3">
                  Opportunity mapping workshop
                </li>
                <li className="rounded-2xl border border-border/60 bg-background/70 p-3">
                  Investment & ROI modeling
                </li>
                <li className="rounded-2xl border border-border/60 bg-background/70 p-3">
                  Responsible AI playbooks
                </li>
                <li className="rounded-2xl border border-border/60 bg-background/70 p-3">
                  Enterprise change orchestration
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="engineering" className="space-y-4 rounded-3xl border border-border/60 bg-card/80 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold">Production-grade model engineering</h3>
              <p className="text-sm text-muted-foreground">
                Multi-disciplinary builders design, fine-tune, and evaluate AI systems with built-in observability.
              </p>
              <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                <li className="rounded-2xl border border-border/60 bg-background/70 p-3">
                  Proprietary data readiness sprints
                </li>
                <li className="rounded-2xl border border-border/60 bg-background/70 p-3">
                  Evaluation harness & guardrails
                </li>
                <li className="rounded-2xl border border-border/60 bg-background/70 p-3">
                  MLOps infrastructure automation
                </li>
                <li className="rounded-2xl border border-border/60 bg-background/70 p-3">
                  Responsible deployment runbooks
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="enablement" className="space-y-4 rounded-3xl border border-border/60 bg-card/80 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold">Capability transfer & enablement</h3>
              <p className="text-sm text-muted-foreground">
                Your teams gain the knowledge, rituals, and governance required to sustain momentum after launch.
              </p>
              <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                <li className="rounded-2xl border border-border/60 bg-background/70 p-3">
                  Embedded training and playbooks
                </li>
                <li className="rounded-2xl border border-border/60 bg-background/70 p-3">
                  Change management communications
                </li>
                <li className="rounded-2xl border border-border/60 bg-background/70 p-3">
                  Governance councils & rituals
                </li>
                <li className="rounded-2xl border border-border/60 bg-background/70 p-3">
                  Success metrics instrumentation
                </li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="case-studies" className="container space-y-12">
        <div className="space-y-4 text-center">
          <Badge variant="outline" className="mx-auto">
            Proof in production
          </Badge>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Trusted by leaders shipping mission-critical AI.
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We orchestrate multi-disciplinary teams that de-risk complexity and deliver measurable, defensible impact.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((project) => (
            <Card key={project.title} className="border-border/60 bg-card/80 backdrop-blur">
              <CardHeader>
                <Badge variant="accent" className="w-fit">
                  {project.industry}
                </Badge>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.result}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <Button variant="link" className="mt-4 h-auto px-0 text-primary">
                  Read the story
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="insights" className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-center">
          <div className="space-y-4">
            <Badge variant="accent" className="w-fit">
              Insights
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Operators-first playbooks, delivered monthly.
            </h2>
            <p className="text-muted-foreground">
              Stay ahead with actionable research covering AI governance, architecture patterns, and org design for intelligent products.
            </p>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <LineChart className="h-5 w-5 text-primary" />
              Benchmark data from 150+ AI programs
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Sparkles className="h-5 w-5 text-secondary" />
              Expert commentary from Omniverse partners
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {[1, 2, 3, 4].map((index) => (
              <Card key={index} className="border-border/60 bg-card/80 backdrop-blur">
                <CardHeader className="space-y-2">
                  <Badge variant="outline" className="w-fit">
                    Edition {index}
                  </Badge>
                  <CardTitle className="text-lg">
                    {index === 1 && "Building enterprise copilots with confidence"}
                    {index === 2 && "Designing evaluation harnesses that scale"}
                    {index === 3 && "Governance guardrails for generative AI"}
                    {index === 4 && "The new operating model for AI-driven orgs"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {index === 1 &&
                      "How to orchestrate RAG, human review, and compliance reviews in weeks, not quarters."}
                    {index === 2 &&
                      "A blueprint for quantitative and qualitative evaluation loops trusted by regulators."}
                    {index === 3 &&
                      "Frameworks for policy, risk, and oversight that empower product teams."}
                    {index === 4 &&
                      "Evolving rituals, incentives, and structure to sustain AI velocity."}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <Badge variant="outline" className="w-fit">
              Voices from the field
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Teams we empower to lead in the age of intelligence.
            </h2>
            <p className="text-muted-foreground">
              We meet you where you are—whether launching the first AI pilot or scaling global automation programs.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border-border/60 bg-card/80 backdrop-blur">
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">“{testimonial.quote}”</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="container space-y-12">
        <div className="space-y-4 text-center">
          <Badge variant="accent" className="mx-auto">
            FAQs
          </Badge>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            The details executives ask before we engage.
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Not seeing what you need? Our team will happily walk through process, timelines, and sample deliverables.
          </p>
        </div>
        <Accordion type="single" collapsible className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq) => (
            <AccordionItem value={faq.question} key={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section id="contact" className="container">
        <Card className="overflow-hidden border-border/60 bg-gradient-to-br from-primary/15 via-secondary/12 to-background/80 p-10 backdrop-blur">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit border-border/60 text-foreground">
                Partner with us
              </Badge>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready to architect the next wave of intelligent experiences?
              </h2>
              <p className="text-muted-foreground">
                Tell us about your mandate. We will respond within two business days with tailored next steps and a curated team roster.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/60 bg-background/70 p-4 text-sm text-muted-foreground">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground/80">
                    Average time to value
                  </div>
                  <div className="text-2xl font-semibold text-foreground">6 weeks</div>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/70 p-4 text-sm text-muted-foreground">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground/80">
                    Net promoter score
                  </div>
                  <div className="text-2xl font-semibold text-foreground">74</div>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" name="name" placeholder="Casey Morgan" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="casey@company.com"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" placeholder="Omniverse Labs" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeline">Initiative timeline</Label>
                <Input id="timeline" name="timeline" placeholder="Pilot launch by Q2" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">What are you building?</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Share context on your AI initiative, stakeholders, and success metrics."
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Submit briefing
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </Card>
      </section>
    </div>
  );
}
