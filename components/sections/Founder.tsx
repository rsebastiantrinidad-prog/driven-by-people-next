"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export function Founder() {
    return (
        <Section id="historia" className="bg-[#320F6A] overflow-hidden">
            <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
                {/* Image - Stacked on top for mobile or kept side-by-side on desktop */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden order-first lg:order-none"
                >
                    <Image
                        src="/sebastian.jpg"
                        alt="Sebastián Trinidad"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#320F6A]/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 md:p-8">
                        <p className="text-white font-bold text-xl">Sebastián Trinidad</p>
                        <p className="text-[#80DDD6]">Fundador & Estratega</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6 md:space-y-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Por Qué Existe <span className="text-[#80DDD6]">Driven by People</span>
                    </h2>

                    <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
                        <p>
                            "He visto demasiadas veces la misma historia: equipos brillantes que se queman haciendo cosas que no funcionan. Estrategias ambiciosas que mueren ahogadas en reuniones evitables. Personas talentosas atrapadas en el día a día que trabaja en su contra. Y me pregunté: ¿tiene que ser así?"
                        </p>
                        <p>
                            Fundé <span className="text-[#80DDD6] font-semibold">Driven by People</span> sabiendo que no:
                        </p>
                        <blockquote className="border-l-4 border-[#80DDD6] pl-4 italic text-white text-xl my-6">
                            "Lo que haces todos los días no debería entorpecer hacia dónde querés ir. Somos personas trabajando para personas y eso es <span className="text-[#80DDD6] font-semibold">una ventaja</span>"
                        </blockquote>
                        <p>
                            Construimos sistemas que liberan el potencial de tu estrategia, dándole a tu equipo claridad y procesos que los potencian.
                        </p>
                    </div>
                    <Button variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 border-[#80DDD6] text-[#80DDD6] hover:bg-[#80DDD6]/10" asChild>
                        <Link href="https://www.linkedin.com/in/rsebastiantrinidad/" target="_blank">
                            Conoce más en LinkedIn
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </Section>
    );
}
