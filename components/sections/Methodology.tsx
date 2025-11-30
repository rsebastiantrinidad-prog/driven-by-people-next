"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const profiles = [
    {
        id: "D",
        title: "Dominante",
        description: "Orientado a resultados, directo y decisivo. Puede parecer brusco bajo presión.",
        color: "bg-red-500",
        textColor: "text-red-500",
    },
    {
        id: "I",
        title: "Influyente",
        description: "Entusiasta, optimista y persuasivo. Puede perder el foco en los detalles.",
        color: "bg-yellow-500",
        textColor: "text-yellow-500",
    },
    {
        id: "S",
        title: "Estable",
        description: "Paciente, leal y buen oyente. Puede resistirse al cambio repentino.",
        color: "bg-green-500",
        textColor: "text-green-500",
    },
    {
        id: "C",
        title: "Concienzudo",
        description: "Analítico, preciso y sistemático. Puede paralizarse por el análisis.",
        color: "bg-blue-500",
        textColor: "text-blue-500",
    },
];

export function Methodology() {
    const [activeProfile, setActiveProfile] = useState(profiles[0]);

    return (
        <Section id="metodologia" className="bg-white">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#320F6A]">Metodología DISC</h2>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                    No gestionamos "recursos", gestionamos personalidades. Entender quién es quién es la clave.
                </p>
            </div>

            <div className="container-custom max-w-5xl">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                    {/* Interactive Disc Wheel / Selector */}
                    <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                        {profiles.map((profile) => (
                            <button
                                key={profile.id}
                                onClick={() => setActiveProfile(profile)}
                                className={cn(
                                    "aspect-square rounded-2xl flex flex-col items-center justify-center p-4 transition-all duration-300 border-2",
                                    activeProfile.id === profile.id
                                        ? `border-${profile.color.split("-")[1]}-500 shadow-lg scale-105 bg-white`
                                        : "border-slate-100 bg-slate-50 hover:bg-slate-100"
                                )}
                            >
                                <span className={cn("text-4xl font-bold mb-2", profile.textColor)}>
                                    {profile.id}
                                </span>
                                <span className="text-sm font-medium text-slate-600">
                                    {profile.title}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Description Panel */}
                    <div className="w-full md:w-1/2">
                        <motion.div
                            key={activeProfile.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-slate-50 p-8 rounded-3xl border border-slate-200"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl", activeProfile.color)}>
                                    {activeProfile.id}
                                </div>
                                <h3 className="text-2xl font-bold text-[#320F6A]">
                                    {activeProfile.title}
                                </h3>
                            </div>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                {activeProfile.description}
                            </p>
                            <div className="mt-6 pt-6 border-t border-slate-200">
                                <p className="text-sm text-slate-500 italic">
                                    "Para liderar a un {activeProfile.title}, necesitas..."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
