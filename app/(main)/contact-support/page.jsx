"use client";

import React, { useState, useTransition } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { toast } from "sonner";
import { sendEmail } from "@/actions/send-email";
import { Badge } from "@/components/ui/badge";

export default function ContactSupport() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isPending, startTransition] = useTransition();

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    startTransition(async () => {
      const res = await sendEmail(formData);
      if (res.success) {
        toast.success(" Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(" Failed to send. Please try again.");
      }
    });
  };

  return (
    <div className="bg-gradient-to-b from-[#0f0f0f] to-[#151515] text-white min-h-screen py-16 px-4">
      {/* Title & Description */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-3 tracking-tight">
          Contact Support
        </h1>
        <p className="text-lg text-gray-400">
          Need help? Fill out the form below or use the contact information to
          reach us. Our team typically replies within 24 hours.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto mb-16">
        <Card className="bg-[#1a1a1a] border border-emerald-700/40 shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-400">
              📝 Send Us a Message
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Select
                  onValueChange={(value) => handleChange("subject", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="appointment">
                      Appointment Issue
                    </SelectItem>
                    <SelectItem value="technical">Technical Support</SelectItem>
                    <SelectItem value="billing">Billing</SelectItem>
                    <SelectItem value="verification">Verification</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold transition"
                disabled={isPending}
              >
                {isPending ? "Sending..." : "📤 Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Contact Info */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-[#1a1a1a] border border-gray-700 rounded-xl p-6 shadow">
          <h3 className="text-xl font-semibold mb-3">📞 Contact Details</h3>
          <p className="text-gray-300 mb-1">Phone: +91-99999-99999</p>
          <p className="text-gray-300 mb-1">
            Email:{" "}
            <a
              href="mailto:support@yourplatform.com"
              className="text-emerald-400 hover:underline"
            >
              support@yourplatform.com
            </a>
          </p>
          <p className="text-gray-300 mt-3">
            Address: <br />
            YourPlatform Health Pvt. Ltd. <br />
            123 Health Lane, Bengaluru, India
          </p>
        </div>
        <div className="bg-[#1a1a1a] border border-gray-700 rounded-xl p-6 shadow">
          <h3 className="text-xl font-semibold mb-3">🕒 Business Hours</h3>
          <ul className="text-gray-300 space-y-1">
            <li>Monday – Friday: 9:00 AM – 6:00 PM</li>
            <li>Saturday: 10:00 AM – 2:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>

      {/* Help Center CTA */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-gray-400 text-lg mb-4">Prefer self-help?</p>
        <Badge
          variant="outline"
          className="bg-emerald-900/30 
        border-emerald-700/30 
        px-4 py-1
        text-emerald-400 text-sm font-medium mb-4"
        >
          {" "}
          🔍 Visit Help Center
        </Badge>
      </div>

      {/* Privacy Note */}
      <div className="max-w-4xl mx-auto bg-[#1a1a1a]/60 border border-gray-700 p-6 rounded-xl text-center shadow backdrop-blur-md">
        <h4 className="text-lg font-semibold mb-2">
          🛡️ Your Privacy is Important to Us
        </h4>
        <p className="text-gray-400">
          All messages are encrypted. We value your confidentiality and data
          security.
        </p>
      </div>
    </div>
  );
}
