import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kalyan Kumar Doppalapudi | Software Engineer",
  description:
    "Portfolio of Kalyan Kumar Doppalapudi - Software Engineer specializing in Full Stack Development, Backend Engineering, Cloud Computing, and AI-powered applications.",

  keywords: [
    "Kalyan Kumar Doppalapudi",
    "Software Engineer",
    "Full Stack Developer",
    "Backend Engineer",
    "Next.js",
    "React",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
    "Machine Learning",
    "Portfolio",
  ],

  authors: [
    {
      name: "Kalyan Kumar Doppalapudi",
    },
  ],

  creator: "Kalyan Kumar Doppalapudi",

  openGraph: {
    title: "Kalyan Kumar Doppalapudi | Software Engineer",
    description:
      "Software Engineer passionate about building scalable backend systems, cloud-native applications, distributed systems, and AI-powered software.",
    type: "website",
    siteName: "Kalyan Kumar Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kalyan Kumar Doppalapudi",
    description:
      "Software Engineer | Full Stack Developer | Backend Engineer",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}