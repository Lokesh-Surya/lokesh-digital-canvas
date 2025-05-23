
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const Innovation = () => {
  return (
    <section id="innovation" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Innovation</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

        <Tabs defaultValue="research" className="w-full">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-12">
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="patent">Patent</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>

          {/* Research Section */}
          <TabsContent value="research" className="animate-slide-in">
            <div id="research" className="space-y-12">
              {/* Research Item 1 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-blue-50 flex items-center justify-center p-8">
                    <div className="text-center">
                      <Badge className="mb-2">Published 2022</Badge>
                      <h3 className="text-xl font-semibold">Journal of Digital Transformation</h3>
                    </div>
                  </div>
                  <div className="p-8 md:w-2/3">
                    <div className="uppercase tracking-wide text-sm text-primary font-semibold">Research Paper</div>
                    <h3 className="block mt-1 text-lg font-medium">Enhancing Enterprise Agility Through Integrated Digital Transformation Frameworks</h3>
                    <p className="mt-2 text-gray-600">
                      This research explores how organizations can develop integrated frameworks for digital transformation that enhance operational agility while maintaining strategic alignment.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge variant="outline">Digital Strategy</Badge>
                      <Badge variant="outline">Enterprise Architecture</Badge>
                      <Badge variant="outline">Organizational Change</Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Research Item 2 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-blue-50 flex items-center justify-center p-8">
                    <div className="text-center">
                      <Badge className="mb-2">Published 2020</Badge>
                      <h3 className="text-xl font-semibold">International Journal of AI Applications</h3>
                    </div>
                  </div>
                  <div className="p-8 md:w-2/3">
                    <div className="uppercase tracking-wide text-sm text-primary font-semibold">Research Paper</div>
                    <h3 className="block mt-1 text-lg font-medium">AI-Driven Decision Support Systems for Strategic Business Transformation</h3>
                    <p className="mt-2 text-gray-600">
                      This study examines the implementation of AI-based decision support systems in strategic business transformation initiatives, with a focus on measuring ROI and organizational impact.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge variant="outline">Artificial Intelligence</Badge>
                      <Badge variant="outline">Decision Support</Badge>
                      <Badge variant="outline">ROI Measurement</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Patent Section */}
          <TabsContent value="patent" className="animate-slide-in">
            <div id="patent" className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <Badge className="mb-2">Filed 2019 • Granted 2021</Badge>
                    <h3 className="text-2xl font-bold">Distributed Ledger System for Digital Identity Verification</h3>
                  </div>
                  <Badge variant="secondary" className="text-lg">US 10,984,469</Badge>
                </div>
                
                <p className="text-gray-600 mb-8">
                  A system and method for secure digital identity verification using distributed ledger technology. The invention provides a tamper-proof and privacy-preserving framework for managing digital identities across multiple platforms and applications.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {/* Patent Diagram 1 */}
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                    </svg>
                  </div>
                  
                  {/* Patent Diagram 2 */}
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                    </svg>
                  </div>
                  
                  {/* Patent Diagram 3 */}
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Blockchain</Badge>
                  <Badge variant="outline">Digital Identity</Badge>
                  <Badge variant="outline">Privacy</Badge>
                  <Badge variant="outline">Security</Badge>
                </div>
                
                <p className="text-sm text-gray-500">
                  This patent has been cited by over 20 subsequent patent applications and is currently being implemented in commercial applications.
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Projects Section (previously Startups) */}
          <TabsContent value="projects" className="animate-slide-in">
            <div id="projects" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <Card className="hover-card">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">AI Assistant Platform</CardTitle>
                    <Badge>2019</Badge>
                  </div>
                  <CardDescription>Project Lead</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p>
                    Developed an AI-powered virtual assistant platform that provides personalized support for customer service across multiple industries.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-2">
                  <div className="flex gap-2">
                    <Badge variant="outline">AI</Badge>
                    <Badge variant="outline">NLP</Badge>
                  </div>
                  <a href="#" className="inline-flex items-center text-primary text-sm">
                    Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>

              {/* Project 2 */}
              <Card className="hover-card">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">Smart City Dashboard</CardTitle>
                    <Badge>2018</Badge>
                  </div>
                  <CardDescription>Technical Architect</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p>
                    Designed and implemented a comprehensive smart city monitoring dashboard that integrates data from multiple IoT sources for real-time decision making.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-2">
                  <div className="flex gap-2">
                    <Badge variant="outline">IoT</Badge>
                    <Badge variant="outline">Data Visualization</Badge>
                  </div>
                  <a href="#" className="inline-flex items-center text-primary text-sm">
                    Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>

              {/* Project 3 */}
              <Card className="hover-card">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">FinTech Payment Solution</CardTitle>
                    <Badge>2017</Badge>
                  </div>
                  <CardDescription>Solution Architect</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p>
                    Created a secure, scalable payment processing system that handles millions of transactions monthly with advanced fraud detection capabilities.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-2">
                  <div className="flex gap-2">
                    <Badge variant="outline">FinTech</Badge>
                    <Badge variant="outline">Security</Badge>
                  </div>
                  <a href="#" className="inline-flex items-center text-primary text-sm">
                    Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Innovation;
