import {
  Calendar,
  Video,
  CreditCard,
  User,
  FileText,
  ShieldCheck,
} from "lucide-react";

// JSON data for features
export const features = [
  {
    icon: <User className="h-6 w-6 text-emerald-400" />,
    title: "Create Your Profile",
    description:
      "Sign up and personalize your account to receive tailored healthcare services and suggestions.",
  },
  {
    icon: <Calendar className="h-6 w-6 text-emerald-400" />,
    title: "Book Appointments",
    description:
      "Find the right doctor, view availability, and schedule appointments that work for you.",
  },
  {
    icon: <Video className="h-6 w-6 text-emerald-400" />,
    title: "Video Consultation",
    description:
      "Meet with trusted doctors via secure, high-quality video—no need to leave your home.",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-emerald-400" />,
    title: "Consultation Credits",
    description:
      "Choose a flexible credit plan that fits your needs. Pay once, consult anytime.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
    title: "Verified Doctors",
    description:
      "All healthcare providers are carefully vetted and verified to ensure quality care.",
  },
  {
    icon: <FileText className="h-6 w-6 text-emerald-400" />,
    title: "Medical Documentation",
    description:
      "Easily access your consultation history, doctor’s notes, and treatment recommendations.",
  },
];

// JSON data for testimonials
export const testimonials = [
  {
    initials: "SP",
    name: "Sarah P.",
    role: "Patient",
    quote:
      "As a working mom, time is everything. The video consultation feature let me speak with a doctor during my lunch break—no traffic, no waiting rooms. It was quick, easy, and incredibly reassuring to get expert care right when I needed it.",
  },
  {
    initials: "DR",
    name: "Dr. Robert M.",
    role: "Cardiologist",
    quote:
      "This platform has redefined how I practice medicine. I’m now able to follow up with patients more regularly and give timely advice without being restricted by geography. It's a game-changer for both doctors and patients.",
  },
  {
    initials: "JT",
    name: "James T.",
    role: "Patient",
    quote:
      "The consultation credit system is such a smart idea. I bought a family plan with enough credits for all of us. It’s reassuring to know we can speak to a doctor anytime without worrying about unexpected costs or expired benefits.",
  },
];

// JSON data for credit system benefits
export const creditBenefits = [
  "Each consultation requires <strong class='text-emerald-400'>2 credits</strong> regardless of duration",
  "Credits <strong class='text-emerald-400'>never expire</strong> - use them whenever you need",
  "Monthly subscriptions give you <strong class='text-emerald-400'>fresh credits every month</strong>",
  "Cancel or change your subscription <strong class='text-emerald-400'>anytime</strong> without penalties",
];