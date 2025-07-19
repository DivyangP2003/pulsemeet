import Pricing from "@/components/pricing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { checkUser } from "@/lib/checkUser";
import { creditBenefits, features, testimonials } from "@/lib/data";
import { ArrowRight, Check, Stethoscope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const user = await checkUser();

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
            <div className="space-y-8">
              <Badge
                variant="outline"
                className="bg-emerald-900/30 
        border-emerald-700/30 
        px-4 py-2
        text-emerald-400 text-sm font-medium"
              >
                Healthcare made simple
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Connect with Doctors <br />
                <span className="gradient-title">Anytime,Anywhere</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-md">
                Book appointments, consult via video, and manage your Healthcare
                journey all in one secure platform
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  <Link href={"/onboarding"}>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-emerald-700/30 hover:bg-muted/80"
                >
                  <Link href={"/doctors"}>Find Doctors</Link>
                </Button>
              </div> */}
              <div className="flex flex-col sm:flex-row gap-4">
                {user?.role === "PATIENT" ? (
                  <>
                    <Button
                      asChild
                      size="lg"
                      className="bg-emerald-600 text-white hover:bg-emerald-700"
                    >
                      <Link href="/appointments">
                        My Appointments
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="bg-emerald-700/30 hover:bg-muted/80"
                    >
                      <Link href="/doctors">Find Doctors</Link>
                    </Button>
                  </>
                ) : user?.role === "DOCTOR" ? (
                  <Button
                    asChild
                    size="lg"
                    className="bg-emerald-600 text-white hover:bg-emerald-700"
                  >
                    <Link href="/onboarding">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                ) : (
                  <>
                    <Button
                      asChild
                      size="lg"
                      className="bg-emerald-600 text-white hover:bg-emerald-700"
                    >
                      <Link href="/onboarding">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="bg-emerald-700/30 hover:bg-muted/80"
                    >
                      <Link href="/doctors">Find Doctors</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
            <div className="flex justify-center lg:justify-center">
              <div className="relative w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-none lg:w-[90%] aspect-[5/4] rounded-xl overflow-hidden">
                <Image
                  src="/banner_2.png"
                  alt="A doctor providing an online consultation via video call"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform makes healthcare accessible with just a few clicks
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              return (
                <Card
                  key={index}
                  className="border-emerald-900/20 hover:border-emerald-800/40 transition-all duration-300"
                >
                  <CardHeader className="pb-2">
                    <div className="bg-emerald-900/20 p-3 rounded-lg w-fit mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-white">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {user?.role !== "DOCTOR" && user?.role !== "ADMIN" && (
        <section className="py-20 ">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge
                variant="outline"
                className="bg-emerald-900/30 
        border-emerald-700/30 
        px-4 py-1
        text-emerald-400 text-sm font-medium mb-4"
              >
                Affordable Healthcare
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Consultation Packages
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto ">
                Choose the perfect consultation package that fits your
                healthcare needs
              </p>
            </div>
            <div>
              {/* Pricing Table */}

              <Pricing />

              <Card className="mt-12 bg-muted/20 border-emerald-900/30">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-white flex items-center">
                    <Stethoscope className="h-5 w-5 mr-2 text-emerald-400" />
                    How Our Credit System Works
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {creditBenefits.map((benefit, index) => {
                      return (
                        <li key={index} className="flex items-start">
                          <div className="mr-3 mt-1 bg-emerald-900/20 p-1 rounded-full">
                            <Check className="h-4 w-4 text-emerald-400" />
                          </div>
                          <p
                            className="text-muted-foreground"
                            dangerouslySetInnerHTML={{ __html: benefit }}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}
      {user?.role === "DOCTOR" && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge
                variant="outline"
                className="bg-emerald-900/30 border-emerald-700/30 px-4 py-1 text-emerald-400 text-sm font-medium mb-4"
              >
                Doctor Dashboard
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Manage Your Practice
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Access your appointments and control your availability easily.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <Card className="bg-muted/30 border-emerald-900/30">
                <CardHeader>
                  <CardTitle className="text-white text-lg">
                    Appointments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    View and manage your upcoming appointments with patients.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/appointments">Go to Appointments</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-muted/30 border-emerald-900/30">
                <CardHeader>
                  <CardTitle className="text-white text-lg">
                    Availability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Set your consultation hours and availability preferences.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/appointments">Manage Availability</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {user?.role === "ADMIN" && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge
                variant="outline"
                className="bg-emerald-900/30 border-emerald-700/30 px-4 py-1 text-emerald-400 text-sm font-medium mb-4"
              >
                Admin Dashboard
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Doctor Verification
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Review doctor profiles and manage verification statuses.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <Card className="bg-muted/30 border-emerald-900/30">
                <CardHeader>
                  <CardTitle className="text-white text-lg">
                    Manage Pending Verifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Review and approve doctor profiles awaiting verification.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/admin">Go to Verifications</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-muted/30 border-emerald-900/30">
                <CardHeader>
                  <CardTitle className="text-white text-lg">
                    Verified Doctors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Browse and manage the list of verified medical
                    professionals.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/admin">View Verified Doctors</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-emerald-900/30 
        border-emerald-700/30 
        px-4 py-1
        text-emerald-400 text-sm font-medium mb-4"
            >
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from patients and doctors who use our platform{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              return (
                <Card
                  key={index}
                  className="border-emerald-900/20 hover:border-emerald-800/40 transition-all duration-300"
                >
                  <CardContent>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-900/20 flex items-center justify-center mr-4">
                        <span className="text-emerald-400 font-bold">
                          {testimonial.initials}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-emerald-900/30 to-emerald-950/20 border-emerald-800/20">
            <CardContent className="p-8 md:p-12 lg:p-16 relative overflow-hidden">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to take control of your Healthcare?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join thousands of users who have simplified their healthcare
                  journey with our platform. Get started today and experience
                  healthcare the way it should be.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-emerald-600 text-white hover:bg-emerald-700"
                    asChild
                  >
                    <Link href="/sign-in">Sign In Now</Link>
                  </Button>
                  {user?.role !== "DOCTOR" && user?.role !== "ADMIN" && (
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-emerald-700/30 hover:bg-muted/80"
                      asChild
                    >
                      <Link href="/pricing">View Pricing</Link>
                    </Button>
                  )}

                  {user?.role === "DOCTOR" && (
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/doctor">Manage Schedule</Link>
                    </Button>
                  )}

                  {/* <Button
                    size="lg"
                    variant="outline"
                    className="border-emerald-700/30 hover:bg-muted/80"
                    asChild
                  >
                    <Link href="/pricing"> View Pricing</Link>
                  </Button> */}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
