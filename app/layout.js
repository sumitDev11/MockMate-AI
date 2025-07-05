import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import AuthLayout from "./dashboard/_components/AuthLayout";


import "./globals.css";

// Fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  fallback: ["system-ui", "arial", "sans-serif"],
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  fallback: ["Courier New", "monospace"],
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body className="antialiased min-h-screen flex flex-col bg-white text-gray-900 font-sans">
          <a
            href="#main-content"
            className="absolute top-[-999px] left-[-999px] z-[-1] focus:top-0 focus:left-0 focus:z-50 p-4 bg-indigo-600 text-white"
          >
            Skip to main content
          </a>

          <Toaster />

          <AuthLayout>{children}</AuthLayout>
        </body>
      </html>
    </ClerkProvider>
  );
}
