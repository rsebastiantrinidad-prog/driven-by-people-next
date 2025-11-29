"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[var(--background)]">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#661EDA]/30 via-transparent to-transparent" />
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#18A7A0]/20 via-transparent to-transparent" />

            <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <div className="relative w-64 h-24 md:w-80 md:h-32">
                        <Image
                            src="/logo-colored.png"
                            alt="Driven by People Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>

                    <div className="inline-flex items-center rounded-full border border-[#661EDA] bg-[#661EDA]/10 px-3 py-1 text-sm font-medium text-[#D7FFFB]">
                        <span className="flex h-2 w-2 rounded-full bg-[#80DDD6] mr-2"></span>
                        Claridad Estratégica
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-white">
                        Porque detrás de cada proyecto hay <span className="text-[#80DDD6]">personas</span> que se comunican.
                    </h1>

                    <p className="text-xl text-[#F1F5F9] max-w-lg leading-relaxed">
                        Convertimos el caos organizacional en claridad estratégica. Gestión de proyectos humana para equipos que buscan resultados reales.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="text-lg h-14 px-8 bg-[#80DDD6] text-black hover:bg-[#80DDD6]/90" asChild>
                            <Link href="https://calendly.com/rsebastian-trinidad/30min" target="_blank">
                                Agenda tu Diagnóstico
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg h-14 px-8 border-[#661EDA] text-[#F1F5F9] hover:bg-[#661EDA]/20" asChild>
                            <Link href="#servicios">
                                Ver Servicios
                            </Link>
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    {/* Abstract visual representation of order from chaos */}
                    <div className="relative w-full aspect-square">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#661EDA] to-[#18A7A0] rounded-full blur-3xl opacity-30 animate-pulse" />
                        <div className="grid grid-cols-2 gap-6 relative z-10">
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-[#18A7A0]/30 transform translate-y-8">
                                <div className="h-12 w-12 bg-[#18A7A0]/20 rounded-xl mb-4 flex items-center justify-center text-[#80DDD6]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m9 12 2 2 4-4" /></svg>
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-white">Resultados Claros</h3>
                                <p className="text-sm text-slate-100 leading-relaxed">Metas definidas y alcanzables para todo el equipo.</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-[#18A7A0]/30">
                                <div className="h-12 w-12 bg-[#661EDA]/20 rounded-xl mb-4 flex items-center justify-center text-[#9163EA]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-white">Equipos Unidos</h3>
                                <p className="text-sm text-slate-100 leading-relaxed">Comunicación fluida y roles bien definidos.</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-[#18A7A0]/30 col-span-2 transform -translate-y-4 mx-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="h-10 w-10 rounded-full bg-[#18A7A0]/20 overflow-hidden relative">
                                        {/* Avatar */}
                                        <img src="/sebastian.jpg" alt="Sebastián Trinidad" className="object-cover w-full h-full" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-white">Sebastián Trinidad</p>
                                        <p className="text-xs text-slate-200">Fundador</p>
                                    </div>
                                </div>
                                <p className="text-sm italic text-slate-100">"La productividad real nace de la conexión humana."</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
