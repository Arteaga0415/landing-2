import Razones from "./razones";
import MisionItem from "./mision";
import MisionData from "./mision/data";
import QuienesData from "./quienes-somos/data";
import QuienesItem from "./quienes-somos";

export default function Nosotros () {
  return (
    <>
      <QuienesItem quienes={QuienesData}/>
      <Razones/>
      <MisionItem mision={MisionData} />
    </>
  )
}