import Pricing from "@/components/Pricing";
import Presentation from "@/components/Presentation";

export default function PricingPage () {
  return (
    <>
      <section  className="overflow-hidden py-25 lg:py-32.5 xl:py-37.5">  
        <Pricing />
        <Presentation/>
      </section>
    </>
  )
}