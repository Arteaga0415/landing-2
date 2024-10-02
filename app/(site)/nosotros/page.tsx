import { Metadata } from "next";
import Nosotros from "@/components/Nosotros";
import Presentation from "@/components/Presentation";

export const metadata: Metadata = {
  title: "Quiénes Somos",
  description: "Single Family Services, es una empresa privada que está conformada por un grupo de ingenieros y especialistas en Telecomunicaciones; con más de 18 años de experiencia en el área de las comunicaciones, brindamos los mejores estándares de calidad y servicios",
};

export default function NosotrosPage () {
  return (
    <>
      <section className="overflow-hidden pb-25 pt-45 lg:pb-32.5 lg:pt-50 xl:pb-37.5 xl:pt-55">
        <Nosotros/>
        <Presentation />
      </section>
    </>
  )
}