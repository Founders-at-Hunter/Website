import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Component as HeroSection } from "@/components/hero-section";

export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Animations */}
      <HeroSection />

      {/* About Section */}
      <section className="container mx-auto px-4 py-20 bg-[#F5F1E8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#522D80]">Who We Are</h2>
          <p className="text-lg text-[#522D80]/80 text-center mb-12">
            We are a community of student entrepreneurs at Hunter College dedicated to
            learning, building, and growing together.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-[#522D80]/20 bg-white">
              <CardHeader>
                <CardTitle className="text-[#522D80]">Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#522D80]/70">
                  Workshops, talks, and resources to develop your entrepreneurial skills
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#522D80]/20 bg-white">
              <CardHeader>
                <CardTitle className="text-[#522D80]">Build</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#522D80]/70">
                  Work on real projects and bring your ideas to life
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#522D80]/20 bg-white">
              <CardHeader>
                <CardTitle className="text-[#522D80]">Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#522D80]/70">
                  Network with fellow founders and industry professionals
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
