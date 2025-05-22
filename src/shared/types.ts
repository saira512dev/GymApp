import Benefits from "@/scenes/benefits";
import { JSX } from "react";
import { Interface } from "readline";

export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus",
    Testimonials = "testimonials",
    Faq = "faq"
  }

  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }

export interface ClassType {
    name:  string;
    description?: string;
    image: string;
}

export interface TestimonialType {
  id: number,
  name: string;
  role?: string;
  stars: number;
  location: string,
  joinDate: string;
  content: string;
}
  
export const testimonialsData: TestimonialType[] = [
  {
    id: 1,
    name: "Marcus Rivera",
    role: "Bodybuilder",
    stars: 5,
    location: "Miami, FL",
    joinDate: "Member since Feb 2021",
    content: "Added 20lbs of lean muscle in 8 months with their advanced hypertrophy program. The coaches' attention to form is unmatched!"
  },
  {
    id: 2,
    name: "Sophie Zhang",
    role: "Yoga Instructor",
    stars: 4,
    location: "Portland, OR",
    joinDate: "Member since Jul 2022",
    content: "The mobility classes completely eliminated my back pain. I now recommend all my yoga students to cross-train here."
  },
  {
    id: 3,
    name: "James Wilson",
    stars: 5, // Role omitted to show optional field
    location: "Austin, TX",
    joinDate: "Member since Jan 2020",
    content: "At 58, I'm stronger than I was at 30. The trainers understand aging athletes better than any gym I've tried."
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Marathon Runner",
    stars: 5,
    location: "Denver, CO",
    joinDate: "Member since Sep 2021",
    content: "Shaved 12 minutes off my marathon time thanks to their strength training for runners program."
  },
  {
    id: 5,
    name: "Tyler Nguyen",
    role: "Rehab Patient",
    stars: 4,
    location: "Chicago, IL",
    joinDate: "Member since Mar 2023",
    content: "After ACL surgery, they rebuilt my strength safely. Now I'm dunking basketballs again!"
  },
  {
    id: 6,
    name: "Naomi Carter",
    role: "Busy Mom",
    stars: 5,
    location: "Seattle, WA",
    joinDate: "Member since May 2022",
    content: "The 30-minute express classes fit my schedule perfectly. Lost the baby weight and gained energy for my twins!"
  },
  {
    id: 7,
    name: "David Kim",
    role: "Powerlifter",
    stars: 5,
    location: "Columbus, OH",
    joinDate: "Member since Nov 2019",
    content: "Added 90lbs to my total in 6 months with their powerlifting programming. Qualified for nationals thanks to this gym!"
  },
  {
    id: 8,
    name: "Aisha Johnson",
    role: "Nutrition Client",
    stars: 4,
    location: "Atlanta, GA",
    joinDate: "Member since Aug 2022",
    content: "Their meal planning service helped me lose 18% body fat while maintaining muscle. Life-changing guidance!"
  }
];

export const faqs = [
  {
    question: "How many days should I work out each week?",
    answer: "For most people, 3–5 days per week of exercise is optimal for strength and recovery.",
  },
  {
    question: "Can I build muscle without going to the gym?",
    answer: "Yes! Bodyweight exercises, resistance bands, and proper nutrition are enough to build muscle at home.",
  },
  {
    question: "What should I eat before and after a workout?",
    answer: "Before: light carbs + protein (like oats & banana). After: protein-rich meal with some carbs to refuel.",
  },
  {
    question: "Do I get to buy a trial plan to figure out if this works for me?",
    answer: "Absolutely! Get in touch with our team and let's figure out if this works for you.",
  },
  {
    question: "Is the workout plan beginner-friendly?",
    answer: "Yes! The program starts with easy exercises like incline push-ups and gradually increases in difficulty.",
  },
];
