import Pricing from "@/components/Pricing";
import Presentation from "@/components/Presentation";

export default function PricingPage () {
  return (
    <>
      <section  className="overflow-hidden pb-25 pt-45 lg:pb-32.5 lg:pt-50 xl:pb-37.5 xl:pt-55">  
        <Pricing />
        <Presentation/>
      </section>
    </>
  )
}