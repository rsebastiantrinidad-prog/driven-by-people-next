"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
    return (
        <Section id="contacto" className="bg-[#26514F] text-white text-center">
            <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold">
                    ¿Listo para Transformar tu Empresa?
                </h2>
                <p className="text-xl text-[#D7FFFB] leading-relaxed">
                    Agenda una consulta gratuita de 30 minutos y descubre cómo podemos optimizar tus procesos y potenciar a tu equipo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button size="lg" variant="secondary" className="text-lg h-14 px-8 bg-[#80DDD6] text-black hover:bg-[#80DDD6]/90" asChild>
                        <Link href="https://calendly.com/rsebastian-trinidad/30min" target="_blank">
                            Agenda tu Diagnóstico Gratuito
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg h-14 px-8 bg-transparent text-white border-white hover:bg-white hover:text-[#26514F]" asChild>
                        <Link href="https://www.instagram.com/drivenbypeople_" target="_blank">
                            Síguenos en Instagram
                        </Link>
                    </Button>
                </div>
            </div>
        </Section>
    );
}
