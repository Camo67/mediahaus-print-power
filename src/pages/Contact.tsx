import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary/30 to-background py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg text-muted-foreground">
                Get in touch with our team. We're here to help with your printing media needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                  <p className="text-muted-foreground mb-8">
                    Have questions about our products or need expert advice? Our team is ready to assist you.
                  </p>
                </div>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="w-5 h-5 text-accent" />
                      <CardTitle>Our Location</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      15 Stilt Street, The Reeds<br />
                      Centurion 0157<br />
                      South Africa
                    </p>
                    <Button variant="outline" asChild>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=15+Stilt+Street+The+Reeds+Centurion+0157"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open in Maps
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Phone className="w-5 h-5 text-accent" />
                      <CardTitle>Phone & Email</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Phone</p>
                      <a
                        href="tel:+27824404465"
                        className="text-lg font-medium hover:text-accent transition-colors"
                      >
                        082 440 4465
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <a
                        href="mailto:clive@mediahaus.co.za"
                        className="text-lg font-medium hover:text-accent transition-colors"
                      >
                        clive@mediahaus.co.za
                      </a>
                    </div>
                    <Button asChild>
                      <a href="mailto:clive@mediahaus.co.za">
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Send Us A Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="What is this regarding?"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your requirements..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
