import BigConditions from "./big-conditions"
import conditionsData from "../Conditions/conditionsData"

export default function ConditionsPage() {
  return (
    <div className="flex flex-row gap-10 mx-40">
      {conditionsData.map((condition) => (
        <BigConditions condition={condition} />
      ))}
    </div >
  )
}