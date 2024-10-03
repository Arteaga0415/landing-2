import ConditionsPage from "@/components/Conditions-page"

export default function ServicesPage () {
  return (
    < section className="flex flex-col items-center text-center overflow-hidden py-25 lg:py-32.5 xl:py-37.5">
        <h2>We buy your house in any condition!</h2>
        <h3 className="mb-20">What Condition Is Your House In?</h3>
        <ConditionsPage />
    </ section>
  )
}