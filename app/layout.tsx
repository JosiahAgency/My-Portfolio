import type {Metadata} from "next";
import {Rubik} from "next/font/google";
import "./globals.css";

const rubik = Rubik({
    variable: "--font-Rubik",
    subsets: ["latin"],
});


export const metadata: Metadata = {
    title: "Josiah",
    description: "This is George Josiah's Portfolio",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${rubik.className} antialiased scroll-smooth`}
        >
        {children}
        </body>
        </html>
    );
}
