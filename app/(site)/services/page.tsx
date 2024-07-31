import Presentation from "@/components/Presentation";
import Service from "@/components/services";

export default function ServicesPage () {
  return (
    < section className="overflow-hidden pb-25 pt-15 lg:pb-32.5 lg:pt-20 xl:pb-37.5 xl:pt-25">
      <Service />
      <Presentation />
    </ section>
  )
}