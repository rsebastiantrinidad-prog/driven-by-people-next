"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const services = [
    {
        title: "Implementación PMO 60 días",
        description: "Estructura completa de gestión de proyectos adaptada a tu empresa.",
        features: ["Procesos documentados", "Herramientas optimizadas", "Métricas de seguimiento"],
    },
    {
        title: "Perfilado DISC del Equipo",
        description: "Análisis de personalidades para optimizar la comunicación y colaboración.",
        features: ["Evaluación individual", "Mapeo de equipos", "Estrategias de comunicación"],
    },
    {
        title: "Arquitectura de Procesos",
        description: "Diseño de flujos de trabajo que eliminan cuellos de botella.",
        features: ["Mapeo de procesos", "Automatizaciones", "Documentación clara"],
    },
    {
        title: "Coaching de Liderazgo",
        description: "Desarrollo de habilidades directivas para liderar el cambio.",
        features: ["Sesiones personalizadas", "Herramientas de liderazgo", "Seguimiento continuo"],
    },
];

export function Transformation() {
    return (
        <Section id="servicios" className="bg-[#320F6A]">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Transformación en 60 Días</h2>
                <p className="text-[#F1F5F9] text-lg max-w-2xl mx-auto">
                    Un enfoque integral que combina metodología PMO con análisis DISC.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-[#18A7A0]/30 hover:shadow-md transition-all group"
                    >
                        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#80DDD6] transition-colors">
                            {service.title}
                        </h3>
                        <p className="text-slate-100 mb-6 leading-relaxed">
                            {service.description}
                        </p>
                        <ul className="space-y-3">
                            {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center text-sm text-slate-200">
                                    <CheckCircle2 className="w-5 h-5 text-[#80DDD6] mr-3 flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
