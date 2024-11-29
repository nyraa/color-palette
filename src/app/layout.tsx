import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "色",
    description: "很色的版面",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>)
{
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
