import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-[#320F6A] text-[#E1E6FF] py-12 border-t border-[#661EDA]/30">
            <div className="container-custom grid md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-white text-xl font-bold mb-4">Driven by People</h3>
                    <p className="max-w-xs mb-4 text-[#D7FFFB]/80">
                        Transformamos el caos organizacional en claridad estratégica a través de metodologías probadas y análisis de tus indicadores claves.
                    </p>
                    <p className="text-sm text-[#D7FFFB]/60">
                        © {new Date().getFullYear()} Driven by People. Todos los derechos reservados.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
                    <ul className="space-y-2">
                        <li><Link href="#servicios" className="hover:text-[#80DDD6] transition-colors">Servicios</Link></li>
                        <li><Link href="#historia" className="hover:text-[#80DDD6] transition-colors">Historia</Link></li>
                        <li><Link href="#estadisticas" className="hover:text-[#80DDD6] transition-colors">Estadísticas</Link></li>
                        <li><Link href="#contacto" className="hover:text-[#80DDD6] transition-colors">Contacto</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Contacto</h4>
                    <p className="mb-2">R Sebastián Trinidad</p>
                    <p className="mb-2">Fundador</p>
                    <div className="flex gap-4 mt-4">
                        {/* Social Icons could go here */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
