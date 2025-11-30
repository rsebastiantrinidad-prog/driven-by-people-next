"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Clock, BatteryWarning, MessageSquareOff, Shuffle } from "lucide-react";

const challenges = [
    {
        icon: <Clock className="w-10 h-10 text-[#80DDD6]" />,
        title: "Retrasos Constantes",
        description: "Proyectos que nunca terminan a tiempo y fechas de entrega que se mueven constantemente.",
    },
    {
        icon: <BatteryWarning className="w-10 h-10 text-[#80DDD6]" />,
        title: "Equipos Agotados",
        description: "Baja productividad y burnout generalizado por falta de dirección clara.",
    },
    {
        icon: <MessageSquareOff className="w-10 h-10 text-[#80DDD6]" />,
        title: "Reuniones Infinitas",
        description: "Horas perdidas en salas de juntas sin llegar a acuerdos ni resultados concretos.",
    },
    {
        icon: <Shuffle className="w-10 h-10 text-[#80DDD6]" />,
        title: "Procesos Confusos",
        description: "Falta de claridad en la comunicación y responsabilidades mal definidas.",
    },
];

export function Challenges() {
    return (
        <Section className="bg-[#26514F] text-white">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Te Suena Familiar?</h2>
                <p className="text-[#D7FFFB] text-lg max-w-2xl mx-auto">
                    Los desafíos más comunes que enfrentan las empresas hoy.
                </p>
            </div>

            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {challenges.map((challenge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-[#80DDD6]/20 hover:bg-white/10 transition-colors"
                        >
                            <div className="h-12 w-12 bg-[#320F6A]/10 rounded-xl mb-4 flex items-center justify-center">
                                {challenge.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{challenge.title}</h3>
                            <p className="text-slate-100 text-sm leading-relaxed">
                                {challenge.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
