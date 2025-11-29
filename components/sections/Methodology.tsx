"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const discTypes = [
    { letter: "D", name: "Dominante", color: "bg-[#661EDA]", desc: "Directo, orientado a resultados, firme." },
    { letter: "I", name: "Influyente", color: "bg-[#9163EA]", desc: "Extrovertido, entusiasta, persuasivo." },
    { letter: "S", name: "Estable", color: "bg-[#18A7A0]", desc: "Paciente, leal, buen oyente." },
    { letter: "C", name: "Concienzudo", color: "bg-[#26514F]", desc: "Analítico, preciso, diplomático." },
];

export function Methodology() {
    return (
        <Section className="bg-[#320F6A]">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Metodología DISC</h2>
                    <p className="text-lg text-[#F1F5F9] leading-relaxed">
                        Descubre cómo los diferentes tipos de personalidad pueden trabajar en perfecta armonía. No se trata solo de habilidades técnicas, sino de entender cómo cada miembro del equipo procesa la información y se comunica.
                    </p>
                    <p className="text-lg text-[#F1F5F9] leading-relaxed">
                        Al mapear los perfiles DISC de tu equipo, podemos asignar roles que se alineen con sus fortalezas naturales, reduciendo la fricción y aumentando la satisfacción laboral.
                    </p>
                    <Button asChild size="lg" className="mt-4 bg-[#80DDD6] text-black hover:bg-[#80DDD6]/90">
                        <Link href="https://calendly.com/rsebastian-trinidad/30min" target="_blank">
                            Descubre tu Perfil DISC
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {discTypes.map((type, index) => (
                        <motion.div
                            key={type.letter}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-[#18A7A0]/30 text-center hover:shadow-lg transition-all"
                        >
                            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4 ${type.color}`}>
                                {type.letter}
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-white">{type.name}</h3>
                            <p className="text-sm text-slate-100">{type.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
