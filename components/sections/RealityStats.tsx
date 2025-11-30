"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

const stats = [
    {
        value: "95%",
        label: "de las empresas se sienten desconectadas de la estrategia real",
        description: "La brecha entre la visión ejecutiva y la operación diaria es la causa #1 del fracaso.",
        color: "text-[#D7FFFB]", // Vibrant Purple
    },
    {
        value: "USD $2M+",
        label: "anuales evaporados en PYMEs por procesos opacos",
        description: "Ineficiencias que consumen recursos de forma invisible cada jornada.",
        color: "text-[#80DDD6]", // Mint
    },
    {
        value: "40%",
        label: "del tiempo semanal se desperdicia en reuniones innecesarias",
        description: "Equipos atrapados en 'reunionitis' en lugar de ejecutar trabajo de alto valor.",
        color: "text-[#18A7A0]", // Teal
    },
];

export function RealityStats() {
    return (
        <Section id="estadisticas" className="bg-[#320F6A]">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">La Realidad del Mercado</h2>
                <p className="text-lg text-[#E1E6FF] max-w-2xl mx-auto">
                    Datos que revelan la urgente necesidad de optimización organizacional.
                </p>
            </div>

            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center p-6 bg-white/5 rounded-2xl border border-[#80DDD6]/20"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-[#80DDD6] mb-2">
                                {stat.value}
                            </div>
                            <p className="text-lg text-[#E1E6FF] font-medium mb-2">
                                {stat.label}
                            </p>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="mt-12 text-center">
                <p className="text-xl font-semibold text-[#80DDD6] px-4">
                    Imagina recuperar 10 horas semanales con un equipo verdaderamente motivado.
                </p>
            </div>
        </Section>
    );
}
