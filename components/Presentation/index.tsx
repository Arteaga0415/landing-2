import Image from "next/image"

const Presentation = () => {
  return (
    <div className="px-10 md:px-20">
      <Image 
        src={'/imagenes/Hoja Membretada Encabezado PNG.png'}
        width={2484}
        height={783}
        alt="Hoja Membretada Encabezado"
      />
    </div>
  )
}

export default Presentation;