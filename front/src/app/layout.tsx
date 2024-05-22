import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./reset.css";
import "./globals.css";
import NavBar from "@/components/navBar/NavBar";
import Footer from "@/components/footer/Footer";
import Ocultar from "@/components/ocultar/Ocultar";

export const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Mpple",
    description: "Página autorizada para la venta de productos Apple ",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`bg-apwhite ${montserrat.className}`}>
                <Ocultar>
                    <NavBar />
                </Ocultar>
                {children}
                <Ocultar>
                    <Footer />
                </Ocultar>
            </body>
        </html>
    );
}
