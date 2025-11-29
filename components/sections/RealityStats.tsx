"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

const stats = [
    {
        value: "95%",
        label: "de las empresas se sienten desconectadas de la estrategia real",
        color: "text-[#D7FFFB]", // Vibrant Purple
    },
    {
        value: "$2M+",
        label: "pérdida anual para empresas medianas por procesos poco claros",
        color: "text-[#80DDD6]", // Mint
    },
    {
        value: "40%",
        label: "del tiempo semanal se desperdicia en reuniones innecesarias",
        color: "text-[#18A7A0]", // Teal
    },
];

export function RealityStats() {
    return (
        <Section id="estadisticas" className="bg-[#320F6A]">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">La Realidad del Mercado</h2>
                <p className="text-lg text-[#E1E6FF] max-w-2xl mx-auto">
                    Datos que revelan la urgente necesidad de optimización organizacional.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-[#18A7A0]/30 text-center hover:shadow-md transition-shadow"
                    >
                        <div className={`text-5xl font-bold mb-4 ${stat.color}`}>
                            {stat.value}
                        </div>
                        <p className="text-[#D7FFFB] font-medium leading-relaxed">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <p className="text-xl font-semibold text-[#80DDD6]">
                    Imagina recuperar 10 horas semanales con un equipo verdaderamente motivado.
                </p>
            </div>
        </Section>
    );
}
