import BigConditions from "./big-conditions"
import conditionsData from "../Conditions/conditionsData"
import Link from "next/link"

export default function ConditionsPage() {
  return (
    <>
      <div className="flex md:flex-row flex-col gap-10 mx-10 md:mx-40">
        {conditionsData.map((condition) => (
          <BigConditions condition={condition} />
        ))}
      </div >
      <Link className="mt-10" href={'/support'}>
        <button
          aria-label="get started button"
          className="flex rounded-full bg-primary px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-primaryho dark:bg-primary dark:hover:bg-primaryho"
        >
          <h3>
            Contact Us
          </h3>
        </button>
      </Link>
</>
    
  )
}