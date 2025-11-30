"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
    return (
        <Section className="bg-[#320F6A] text-center py-20 md:py-32">
            <div className="container-custom max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    ¿Listo para Transformar tu Empresa?
                </h2>
                <p className="text-lg md:text-xl text-[#E1E6FF] mb-10 leading-relaxed">
                    Deja de perder dinero en ineficiencias y empieza a construir una cultura de alta productividad humana.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                        size="lg"
                        className="w-full sm:w-auto text-lg h-14 px-8 bg-[#80DDD6] text-black hover:bg-[#80DDD6]/90 active:scale-95 transition-transform shadow-lg shadow-[#80DDD6]/20"
                        asChild
                    >
                        <Link href="https://calendly.com/rsebastian-trinidad/30min" target="_blank">
                            Agenda una Llamada Gratuita
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <p className="text-sm text-[#80DDD6]/80 mt-4 sm:mt-0 sm:ml-4">
                        Sin compromiso. Solo claridad.
                    </p>
                </div>
            </div>
        </Section>
    );
}
