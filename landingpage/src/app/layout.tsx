import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

// app/layout.tsx
export const metadata: Metadata = {
    title: "Jebena-Bestro-Ethiopian-Restaurant-US",
    description:
        "Experience the Heart of Ethiopia in Every Bite at Jebena Bistro",
    icons: {
        icon: "/images/jebenalogo.png", // Standard favicon
        shortcut: "/images/jebenalogo.png", // Alternative for older browsers
        apple: "/images/jebenalogo.png", // For iOS home screen bookmarks
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} font-sans antialiased `}>
                {children}
            </body>
        </html>
    );
}
