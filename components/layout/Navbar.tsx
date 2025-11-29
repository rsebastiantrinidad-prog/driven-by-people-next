"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Servicios", href: "#servicios" },
    { name: "Historia", href: "#historia" },
    { name: "Estadísticas", href: "#estadisticas" },
    { name: "Contacto", href: "#contacto" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-[#320F6A]/80 backdrop-blur-md border-b border-[#661EDA]/30 shadow-sm"
                    : "bg-transparent"
            )}
        >
            <div className="container-custom flex h-20 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <div className="relative h-14 w-48 md:h-16 md:w-[400px]">
                        <Image
                            src="/logo-white.png"
                            alt="Driven by People"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-[#E1E6FF] hover:text-[#80DDD6] transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button asChild variant="secondary" className="bg-[#80DDD6] text-black hover:bg-[#80DDD6]/90">
                        <Link href="https://calendly.com/rsebastian-trinidad/30min" target="_blank">
                            Comienza Ahora
                        </Link>
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#320F6A]/95 backdrop-blur-md border-b border-[#661EDA]/30 overflow-hidden"
                    >
                        <div className="container-custom flex flex-col py-6 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-medium text-[#E1E6FF] hover:text-[#80DDD6]"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Button asChild className="w-full bg-[#80DDD6] text-black hover:bg-[#80DDD6]/90" variant="secondary">
                                <Link href="https://calendly.com/rsebastian-trinidad/30min" target="_blank">
                                    Comienza Ahora
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
