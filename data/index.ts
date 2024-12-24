import { User } from "@/types";

import {
  BookSVG,
  CategorySVG,
  UserOctagonSVG,
  MessageSVG,
  SettingSVG,
} from "@/components/react-icons";

const data = {
  navMain: [
    {
      title: "Overview",
      url: "#",
      icon: CategorySVG,
      isActive: true,
    },
    {
      title: "Task",
      icon: BookSVG,
      url: "#",
    },
    {
      title: "Mentors",
      icon: UserOctagonSVG,
      url: "#",
    },
    {
      title: "Message",
      icon: MessageSVG,
      url: "#",
    },
    {
      title: "Settings",
      icon: SettingSVG,
      url: "#",
    },
  ],
  mentors: [
    {
      name: "Curious George",
      field: "UI UX Design",
      imageUrl: "https://avatar.iran.liara.run/public",
      totalTasks: 40,
      reviews: {
        total: 750,
        average: 4.7,
      },
    },
    {
      name: "Sarah Chen",
      field: "Frontend Development",
      imageUrl: "https://avatar.iran.liara.run/public/2",
      totalTasks: 35,
      reviews: {
        total: 680,
        average: 4.8,
      },
    },
    {
      name: "Marcus Rodriguez",
      field: "Backend Development",
      imageUrl: "https://avatar.iran.liara.run/public/3",
      totalTasks: 52,
      reviews: {
        total: 820,
        average: 4.6,
      },
    },
    {
      name: "Emma Watson",
      field: "Product Design",
      imageUrl: "https://avatar.iran.liara.run/public/4",
      totalTasks: 45,
      reviews: {
        total: 590,
        average: 4.9,
      },
    },
    {
      name: "Alex Kim",
      field: "Mobile Development",
      imageUrl: "https://avatar.iran.liara.run/public/5",
      totalTasks: 38,
      reviews: {
        total: 420,
        average: 4.5,
      },
    },
    {
      name: "Lisa Thompson",
      field: "Data Analysis",
      imageUrl: "https://avatar.iran.liara.run/public/6",
      totalTasks: 33,
      reviews: {
        total: 380,
        average: 4.7,
      },
    },
    {
      name: "David Patel",
      field: "Cloud Architecture",
      imageUrl: "https://avatar.iran.liara.run/public/7",
      totalTasks: 48,
      reviews: {
        total: 910,
        average: 4.8,
      },
    },
    {
      name: "Nina Garcia",
      field: "DevOps Engineering",
      imageUrl: "https://avatar.iran.liara.run/public/8",
      totalTasks: 42,
      reviews: {
        total: 560,
        average: 4.6,
      },
    },
    {
      name: "James Wilson",
      field: "System Design",
      imageUrl: "https://avatar.iran.liara.run/public/9",
      totalTasks: 37,
      reviews: {
        total: 630,
        average: 4.7,
      },
    },
    {
      name: "Sophia Lee",
      field: "Software Testing",
      imageUrl: "https://avatar.iran.liara.run/public/10",
      totalTasks: 44,
      reviews: {
        total: 480,
        average: 4.5,
      },
    },
    {
      name: "Michael Zhang",
      field: "Security Engineering",
      imageUrl: "https://avatar.iran.liara.run/public/11",
      totalTasks: 50,
      reviews: {
        total: 840,
        average: 4.8,
      },
    },
    {
      name: "Olivia Brown",
      field: "Project Management",
      imageUrl: "https://avatar.iran.liara.run/public/12",
      totalTasks: 39,
      reviews: {
        total: 720,
        average: 4.7,
      },
    },
    {
      name: "Ryan Murphy",
      field: "Database Design",
      imageUrl: "https://avatar.iran.liara.run/public/13",
      totalTasks: 46,
      reviews: {
        total: 550,
        average: 4.6,
      },
    },
    {
      name: "Ava Martinez",
      field: "Machine Learning",
      imageUrl: "https://avatar.iran.liara.run/public/14",
      totalTasks: 41,
      reviews: {
        total: 690,
        average: 4.8,
      },
    },
    {
      name: "Daniel Johnson",
      field: "Network Engineering",
      imageUrl: "https://avatar.iran.liara.run/public/15",
      totalTasks: 36,
      reviews: {
        total: 470,
        average: 4.5,
      },
    },
    {
      name: "Isabella Taylor",
      field: "API Development",
      imageUrl: "https://avatar.iran.liara.run/public/16",
      totalTasks: 43,
      reviews: {
        total: 600,
        average: 4.7,
      },
    },
  ] as User[],
};

export default data;
