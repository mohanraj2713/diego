import "../styles/index.scss";
import ThemeProvider from "@/components/provider/ThemeProvider";
import { VideoProvider } from "@/provider/VideoProvider";

import {
  Abril_Fatface,
  DM_Sans,
  EB_Garamond,
  Kufam,
  Poppins,
  Playfair_Display,
} from "next/font/google";

export const metadata = {
  title: "Swara Patel | Dance Educator",
  description: "I use movement to unlock what words often cannot — confidence, connection, joy, and self-expression.",
  icons: {
    icon: "/assets/img/source/Simple SP Letter Logo 1.png",
    shortcut: "/assets/img/source/Simple SP Letter Logo 1.png",
    apple: "/assets/img/source/Simple SP Letter Logo 1.png",
  },
};

// all font configure
const abril = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-abril",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const garamond = EB_Garamond({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-garamond",
});

const kufam = Kufam({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-kufam",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      tp-theme="tp-theme-light"
      className={`
        ${abril.variable}
        ${dmSans.variable}
        ${garamond.variable}
        ${kufam.variable}
        ${poppins.variable}
        ${playfair.variable}
      `}
    >
      <head>
        <link rel="icon" href="/assets/img/source/Simple SP Letter Logo 1.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/assets/img/source/Simple SP Letter Logo 1.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/img/source/Simple SP Letter Logo 1.png" />
      </head>
      <body suppressHydrationWarning className="scroll-smooth">
        <ThemeProvider>
          <VideoProvider>{children}</VideoProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
