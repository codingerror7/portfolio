
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  title: "Sujal Saraswat | Full Stack Developer & Designer",
  description:
    "Portfolio of Sujal Saraswat — Backend-Leaned Full Stack Developer and UI/UX Designer building performant, scalable, and visually refined web experiences.",
  keywords: [
    "Sujal Saraswat",
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Sujal Saraswat" }],
  creator: "Sujal Saraswat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${jakarta.variable}`}>
      <body className="bg-black text-white antialiased font-sans selection:bg-orange-500 selection:text-black overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

