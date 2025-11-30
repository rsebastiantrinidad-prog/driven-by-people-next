"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Search, Compass, Rocket, BarChart } from "lucide-react";

const steps = [
    {
        icon: <Search className="w-8 h-8 text-[#320F6A]" />,
        title: "Semana 1-2: Diagnóstico Profundo",
        description: "Analizamos tus flujos de trabajo, comunicación y cuellos de botella. Entendemos la realidad de tu equipo sin filtros.",
    },
    {
        icon: <Compass className="w-8 h-8 text-[#320F6A]" />,
        title: "Semana 3-4: Diseño del Sistema",
        description: "Co-creamos los nuevos procesos y rituales. Definimos roles claros y herramientas que realmente se usen.",
    },
    {
        icon: <Rocket className="w-8 h-8 text-[#320F6A]" />,
        title: "Semana 5-6: Implementación Ágil",
        description: "Desplegamos los cambios en iteraciones cortas. Acompañamos a tu equipo en la adopción para asegurar que funcione.",
    },
    {
        icon: <BarChart className="w-8 h-8 text-[#320F6A]" />,
        title: "Semana 7-8: Optimización y Entrega",
        description: "Ajustamos basado en feedback real y te entregamos un sistema operativo documentado y funcionando.",
    },
];

export function Transformation() {
    return (
        <Section id="proceso" className="bg-[#F1F5F9]">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#320F6A]">Transformación en 56 Días</h2>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                    Un proceso estructurado para pasar del caos a la claridad sin detener tu operación.
                </p>
            </div>

            <div className="container-custom max-w-4xl">
                <div className="relative space-y-8 md:space-y-12">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-[#320F6A]/20 -translate-x-1/2 hidden md:block" />
                    <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-[#320F6A]/20 md:hidden" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Content */}
                            <div className="flex-1 pl-16 md:pl-0 md:px-12 w-full">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-bold text-[#320F6A] mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>

                            {/* Icon/Marker */}
                            <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-[#80DDD6] border-4 border-white shadow-sm z-10">
                                {step.icon}
                            </div>

                            {/* Spacer for desktop alignment */}
                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
