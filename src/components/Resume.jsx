import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Mail, MapPin, Linkedin, Code, Sparkles, GraduationCap, Award, Rocket, Github } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

const Resume = () => {
  const [isWideScreen, setIsWideScreen] = useState(typeof window !== 'undefined' ? window.innerWidth >= 768 : true);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <ThemeToggle />
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
              Joshua Cork
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-4">
              AI Solution Architect & Product Owner
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-slate-500 dark:text-slate-400">
              <a href="mailto:joshua.cork@gmail.com" className="flex items-center gap-2 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">joshua.cork@gmail.com</span>
                <span className="sm:hidden">Email</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="hidden sm:inline">Chandler, Arizona</span>
                <span className="sm:hidden">Arizona</span>
              </div>
              <div className="flex gap-3 sm:gap-6">
                <a href="https://www.linkedin.com/in/joshuacork" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
                  <Linkedin className="h-4 w-4" />
                  <span className="hidden sm:inline">/in/joshuacork</span>
                  <span className="sm:hidden">LinkedIn</span>
                </a>
                <a href="https://github.com/JoshCork" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
                  <Github className="h-4 w-4" />
                  <span className="hidden sm:inline">JoshCork</span>
                  <span className="sm:hidden">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Professional Summary */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              About Me
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              Throughout my career, I've been a high performer because I love what I do and have a blast working closely 
              with my team to build innovative products that make a real impact on businesses and the people who use them. 
              Currently architecting AI-powered solutions using computer vision and large language models, while building 
              cutting-edge entrepreneurial ventures that leverage the latest AI development tools.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="secondary">Computer Vision</Badge>
              <Badge variant="secondary">Large Language Models</Badge>
              <Badge variant="secondary">AI-Assisted Development</Badge>
              <Badge variant="secondary">Product Management</Badge>
              <Badge variant="secondary">IoT/Edge Computing</Badge>
              <Badge variant="secondary">Entrepreneurship</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Recent Experience & Ventures Side by Side */}
        <div className={`flex ${isWideScreen ? 'flex-row' : 'flex-col'} gap-8 mb-8`}>
          {/* Column 1: Recent Intel Roles */}
          <div className={`${isWideScreen ? 'flex-1' : 'w-full'} min-w-0`}>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Code className="h-6 w-6" />
                Recent Leadership Roles
              </h2>
              
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">AI Solution Architect & Product Owner</CardTitle>
                  <CardDescription>September 2024 - Present • Intel - Consumer Industries - Retail</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                    Point of Sale & Self-Checkout Solutions
                  </p>
                  <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    <li>• Product owner for AI-powered POS solutions using computer vision and LLMs</li>
                    <li>• Lead open source GitHub repositories for customer optimization</li>
                    <li>• Drive "developing in the open" strategy for AI capabilities showcase</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Solutions Architect - Venues & Gaming</CardTitle>
                  <CardDescription>May 2023 - September 2024 • Intel Corporation</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    <li>• Hand-selected to lead new entertainment and casino gaming vertical</li>
                    <li>• Designed solutions for NFL stadiums and Las Vegas venues</li>
                    <li>• Successfully established and scaled new business unit</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Product Owner - Retail Solutions Division</CardTitle>
                  <CardDescription>February 2021 - May 2023 • Intel Corporation</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    <li>• Led product strategy for four diverse global teams</li>
                    <li>• Established customer-obsessed modern product management practices</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Column 2: Entrepreneurial Ventures */}
          <div className={`${isWideScreen ? 'flex-1' : 'w-full'} min-w-0`}>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Rocket className="h-6 w-6" />
                Entrepreneurial Ventures
              </h2>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Home Care Copilot</CardTitle>
                  <CardDescription>Founder • 2024 - Present</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                    AI-First Technology Solutions for In-Home Care Providers
                  </p>
                  <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    <li>• Built AI-first CRM with intelligent lead pipeline management</li>
                    <li>• Developed real-time AI voice assistant for sales training</li>
                    <li>• Engineered call analysis system using real-time AI APIs</li>
                    <li>• Rapid deployment using Cursor and Claude Code in 6 months</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">GESDATE LLC</CardTitle>
                  <CardDescription>CIO & Co-Founder • 2015 - Present</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                    Agricultural Technology - Sheep Production
                  </p>
                  <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    <li>• Comprehensive farm management platform for sheep producers</li>
                    <li>• Mobile and web applications streamlining farm operations</li>
                    <li>• AI-assisted development for rapid prototyping</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">STUDTEC LLC</CardTitle>
                  <CardDescription>CIO & Co-Founder • 2018 - Present</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                    Agricultural Technology - Livestock Breeding
                  </p>
                  <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    <li>• End-to-end business operations platform for breeding operations</li>
                    <li>• CRM and order fulfillment systems for modernized customer interactions</li>
                    <li>• Best practices frameworks for quality product delivery</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Full Experience Timeline */}
        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle>Complete Professional Journey</CardTitle>
            <CardDescription>25+ Years of Technology Leadership</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Intel Experience */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Intel Corporation</h3>
                  <Badge variant="outline">25 Years Total</Badge>
                </div>
                <div className="grid gap-4">
                  <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-4">
                    <h4 className="font-medium">Scrum Master</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">January 2020 - February 2021</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Transformed three low-maturity teams into high-performing organizations</p>
                  </div>
                  <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-4">
                    <h4 className="font-medium">Software Engineer Technical Lead</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">May 2017 - January 2021</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Led development of open source edge compute solutions with computer vision and ML</p>
                  </div>
                  <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-4">
                    <h4 className="font-medium">Solution Developer</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">January 2013 - May 2017</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Developed IoT supply chain platform with multisensor fusion • Featured speaker at Google Cloud Next 2017</p>
                  </div>
                  <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-4">
                    <h4 className="font-medium">Business Intelligence Manager</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">January 2008 - December 2013</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Managed global team of 13 developers, delivered efficiencies for $300M+ network</p>
                  </div>
                  <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-4">
                    <h4 className="font-medium">Senior Technical Team Lead & Database Developer</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">August 2000 - December 2006</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Built forecasting algorithms for $500M+ supply chain, earned highest team award</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education & Achievements */}
        <div className={`flex ${isWideScreen ? 'flex-row' : 'flex-col'} gap-8`}>
          <div className={`${isWideScreen ? 'flex-1' : 'w-full'} min-w-0`}>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Education & Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium">Master of Science, Information Management</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Arizona State University • 2005-2006</p>
                </div>
                <div>
                  <h4 className="font-medium">Bachelor of Science, Information Systems</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Arizona State University • 1996-2001</p>
                </div>
                <div>
                  <h4 className="font-medium">Blockchain Developer Nano-Degree</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Udacity • 2019 • Exceeds Expectations</p>
                </div>
                <div>
                  <h4 className="font-medium">Intel Harvard Leadership Challenge</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Harvard Business Publishing • 2022</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className={`${isWideScreen ? 'flex-1' : 'w-full'} min-w-0`}>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">11 Divisional Recognition Awards for exceptional performance</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Highest Team Award at Intel for pioneering supply chain analytics</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Global team leadership across US, Europe, and Asia</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Serial entrepreneur with multiple successful AI-powered ventures</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Open source advocate driving "developing in the open" strategies</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Featured speaker at Google Cloud Next 2017 on Intel Connected Logistics Platform</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-300">
            Ready to build innovative AI solutions that make a real impact? Let's connect!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;