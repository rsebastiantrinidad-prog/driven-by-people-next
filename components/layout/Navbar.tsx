"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    /*{ name: "Servicios", href: "#servicios" },*/
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
                    ? "bg-[#320F6A]/90 backdrop-blur-md border-b border-[#661EDA]/30 shadow-sm"
                    : "bg-transparent"
            )}
        >
            <div className="container-custom flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
                {/* Logo - Optimized for Mobile */}
                <Link href="/" className="flex-shrink-0 relative z-50">
                    <div className="relative h-10 w-32 md:h-12 md:w-40">
                        <Image
                            src="/logo-white.png"
                            alt="Driven by People"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav - Progressive Enhancement */}
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

                {/* Mobile Menu Toggle - 44px Touch Target */}
                <button
                    className="md:hidden relative z-50 p-2 text-white hover:bg-white/10 rounded-full transition-colors w-11 h-11 flex items-center justify-center"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav Overlay - Full Screen */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-[#320F6A] pt-20 px-6 md:hidden flex flex-col"
                    >
                        <div className="flex flex-col space-y-6 mt-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-2xl font-medium text-[#E1E6FF] py-2 border-b border-[#661EDA]/30"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Button asChild className="w-full h-12 text-lg bg-[#80DDD6] text-black active:scale-95 transition-transform mt-8" variant="secondary">
                                <Link href="https://calendly.com/rsebastian-trinidad/30min" target="_blank" onClick={() => setIsOpen(false)}>
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
