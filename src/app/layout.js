import "./globals.css";
import { Source_Serif_4 } from "next/font/google";

const font = Source_Serif_4({ subsets: ["latin"] });

export const metadata = {
  title: "Welkin",
  description: "Welking Singapore",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  );
}
