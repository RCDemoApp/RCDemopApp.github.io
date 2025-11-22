import { Users, ShoppingBag, School } from "lucide-react"
import Image from "next/image"

export function Stats() {
  return (
    <section className="relative border-y bg-background py-20">
      <div className="absolute inset-0 z-0">
        <Image src="UCMC.jpg" alt="UCMC Campus" fill className="object-cover" />
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px] mix-blend-multiply"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center text-center group">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white transition-transform group-hover:scale-110 border border-white/30">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-1">400+</h3>
            <p className="text-base text-white/90 font-medium">Estudiantes Activos</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white transition-transform group-hover:scale-110 border border-white/30">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-1">50+</h3>
            <p className="text-base text-white/90 font-medium">Intercambios Activos</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white transition-transform group-hover:scale-110 border border-white/30">
              <School className="h-8 w-8" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-1">5+</h3>
            <p className="text-base text-white/90 font-medium">Facultades</p>
          </div>
        </div>
      </div>
    </section>
  )
}
