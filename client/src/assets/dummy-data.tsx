import { UploadIcon, VideoIcon, ZapIcon } from "lucide-react";

export const featuresData = [
  {
    icon: <UploadIcon className="w-6 h-6" />,
    title: "Smart upload",
    desc: "Drag & drop your assets. We auto-optimize formats and sizes.",
  },
  {
    icon: <ZapIcon className="w-6 h-6" />,
    title: "Instant Generation",
    desc: "Optimized models deliver output in seconds with great fidelity.",
  },
  {
    icon: <VideoIcon className="w-6 h-6" />,
    title: "Video Synthesis",
    desc: "Bring product shots to life with short-form, social-ready videos.",
  },
];

export const plansData = [
  {
    id: "starter",
    name: "Starter",
    price: "₹49",
    desc: "Try the platform at no cost.",
    credits: 25,
    features: [
      "25 Credits",
      "standard quality",
      "No watermark",
      "Slower generation speed",
      "Email support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "₹99",
    desc: "Creators & small teams.",
    credits: 80,
    features: [
      "80 Credits",
      "HD Quality",
      "No Watermark",
      "Video Generation",
      "Priority Support",
    ],
    popular: true,
  },
  {
    id: "ultra",
    name: "Ultra",
    price: "₹149",
    desc: "Scale across teams and agencies",
    credits: 300,
    features: [
      "300 Credits",
      "FHD quality",
      "No watermark",
      "Fast generation speed",
      "Chat + Email support",
    ],
  },
];

export const faqData = [
  {
    question: "How does the AI generation work?",
    answer:
      "We leverage state-of-the-art diffusion models trained on millions of product images to blend your product into realistics scenes while preserving details, lighting and reflections.",
  },
  {
    question: "Do I own the generated images?",
    answer:
      "Yes - you recieve the full commercial rights to any images and videos generated ont the platform. Use them for ads, ecommerce, social media and more.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes - you can cancel from your dashboard. You will retain access through the end of your billing period. ",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. We offer maintenance, optimization and growth support packages to ensure your product continues to perform and evolve.",
  },
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", url: "#" },
      { name: "Features", url: "#" },
      { name: "Pricing", url: "#" },
      { name: "FAQ", url: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", url: "#" },
      { name: "Terms of Service", url: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/tanish-gupta01" },
      { name: "GitHub", url: "https://github.com/OfficialTanishGupta" },
    ],
  },
];
