"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export function Founder() {
    return (
        <Section id="historia" className="bg-[#320F6A] overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Founder Image */}
                    <div className="aspect-[4/5] relative rounded-2xl overflow-hidden border border-[#18A7A0]/30 shadow-2xl">
                        <Image
                            src="/sebastian.jpg"
                            alt="Sebastián Trinidad"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-[#661EDA] text-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block border border-[#9163EA]">
                        <p className="font-bold text-lg">"Las personas primero, los resultados fluyen."</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        De la Frustración al Propósito
                    </h2>
                    <h3 className="text-xl text-[#80DDD6] font-medium">
                        R Sebastián Trinidad, Fundador
                    </h3>
                    <p className="text-lg text-[#E1E6FF] leading-relaxed">
                        Sebastián convierte equipos caóticos en culturas colaborativas. Su método combina la rigurosidad de la gestión de proyectos con la empatía necesaria para entender que detrás de cada tarea hay un ser humano.
                    </p>
                    <p className="text-lg text-[#E1E6FF] leading-relaxed">
                        Con años de experiencia transformando organizaciones, ha desarrollado un enfoque único que no solo mejora los números, sino también la calidad de vida de quienes los producen.
                    </p>

                    <div className="pt-4">
                        <Button asChild variant="outline" size="lg" className="border-[#80DDD6] text-[#80DDD6] hover:bg-[#80DDD6]/10">
                            <Link href="https://www.instagram.com/drivenbypeople_" target="_blank">
                                Síguenos en Instagram
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
