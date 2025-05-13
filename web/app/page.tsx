import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Code, ExternalLink, Github, Linkedin, Mail, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold">
            <span className="text-primary">Bhaskar</span>Pittala
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild>
              <Link href="#contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-24 sm:py-32 space-y-8 md:space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Hi, I'm Bhaskar Pittala
                <br />
                <span className="text-primary">Full-Stack Developer</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                I build accessible, user-friendly web applications that solve real-world problems.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="#projects">
                    View my work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#contact">Contact me</Link>
                </Button>
              </div>
              <div className="flex gap-4 pt-4">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="mailto:contact@example.com" aria-label="Email">
                  <Mail className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              </div>
            </div>
            <div className="relative mx-auto aspect-square max-w-sm rounded-full border overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Bhaskar Pittala"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section id="about" className="container py-24 sm:py-32 space-y-8">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Me</div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mt-4">Get to know me</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mt-4">
              I'm a passionate developer with a focus on creating intuitive and performant web experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image src="/placeholder.svg?height=720&width=1280" alt="About me image" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">My Journey</h3>
              <p className="text-muted-foreground">
                With over 5 years of experience in web development, I've worked on a variety of projects from small
                business websites to large-scale applications. I'm passionate about creating clean, efficient code and
                delivering exceptional user experiences.
              </p>
              <p className="text-muted-foreground">
                I specialize in JavaScript, React, and Next.js, and I'm always eager to learn new technologies and
                improve my skills. When I'm not coding, you can find me hiking, reading, or experimenting with new
                recipes in the kitchen.
              </p>
              <Button asChild>
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <User className="mr-2 h-4 w-4" /> View Resume
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-muted/40">
          <div className="container py-24 sm:py-32 space-y-8">
            <div className="flex flex-col items-center text-center">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Projects</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mt-4">My Recent Work</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mt-4">
                Here are some of the projects I've worked on recently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[1, 2, 3].map((project) => (
                <Card key={project} className="overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src={`/placeholder.svg?height=720&width=1280&text=Project+${project}`}
                      alt={`Project ${project}`}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-bold text-xl">Project {project}</h3>
                        <p className="text-muted-foreground">
                          A brief description of this project and the technologies used to build it.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <div className="rounded-full bg-muted px-3 py-1 text-xs">React</div>
                        <div className="rounded-full bg-muted px-3 py-1 text-xs">Next.js</div>
                        <div className="rounded-full bg-muted px-3 py-1 text-xs">Tailwind</div>
                      </div>
                      <div className="flex gap-4">
                        <Button size="sm" variant="outline" asChild>
                          <Link href="#" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> Code
                          </Link>
                        </Button>
                        <Button size="sm" asChild>
                          <Link href="#" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> Demo
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Button variant="outline" asChild>
                <Link href="/projects">
                  View all projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="skills" className="container py-24 sm:py-32 space-y-8">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Skills</div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mt-4">My Expertise</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mt-4">
              Here are the technologies and tools I work with.
            </p>
          </div>

          <Tabs defaultValue="frontend" className="mt-12 w-full max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>
            <TabsContent value="frontend" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Redux"].map(
                  (skill) => (
                    <div key={skill} className="flex flex-col items-center gap-2 p-4 bg-muted rounded-lg">
                      <Code className="h-8 w-8 text-primary" />
                      <span className="font-medium text-center">{skill}</span>
                    </div>
                  ),
                )}
              </div>
            </TabsContent>
            <TabsContent value="backend" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "REST API", "GraphQL", "Prisma"].map(
                  (skill) => (
                    <div key={skill} className="flex flex-col items-center gap-2 p-4 bg-muted rounded-lg">
                      <Code className="h-8 w-8 text-primary" />
                      <span className="font-medium text-center">{skill}</span>
                    </div>
                  ),
                )}
              </div>
            </TabsContent>
            <TabsContent value="tools" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {["Git", "GitHub", "VS Code", "Docker", "Figma", "Vercel", "Jest", "Cypress"].map((skill) => (
                  <div key={skill} className="flex flex-col items-center gap-2 p-4 bg-muted rounded-lg">
                    <Code className="h-8 w-8 text-primary" />
                    <span className="font-medium text-center">{skill}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section id="contact" className="bg-muted/40">
          <div className="container py-24 sm:py-32 space-y-8">
            <div className="flex flex-col items-center text-center">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mt-4">Get In Touch</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mt-4">
                Have a project in mind or just want to say hello? Feel free to reach out!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <a href="mailto:contact@example.com" className="hover:text-primary transition-colors">
                      contact@example.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Linkedin className="h-6 w-6 text-primary" />
                    <a
                      href="https://www.linkedin.com/in/bhaskar-pittala-b4363224b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      linkedin.com/in/BhaskarPittala
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Github className="h-6 w-6 text-primary" />
                    <a
                      href="https://github.com/BHASHER2229"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      github.com/BhaskarPittala
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Send Me a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Bhaskar Pittala"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="pittalabhasker2@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container py-8 md:py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="font-bold text-xl">
              <span className="text-primary">Bhaskar</span>Pittala
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
            Cybersecurity Graduate | CEH in Progress | Packet Analysis | VAPT | ICS/SCADA | Blue Team Enthusiast.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="mailto:contact@example.com" aria-label="Email">
              <Mail className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
        <div className="container border-t py-6 flex justify-center md:justify-between items-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Bhaskar Pittala. All rights reserved.</p>
          <div className="hidden md:flex gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
