import Image from "next/image"
import Link from "next/link"
import { Condition } from "@/types/condition"

export default function BigConditions ({ condition }: { condition: Condition }) {
    return (
        <div className="lg:w-2/3">
            <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                        src={condition.img}
                        alt="Kobe Steel plant that supplied"
                        fill
                        className="rounded-md object-cover object-center"
                    />
                    </div>
                </div>
        
                <h3 className="font-semibold mb-5">
                    {condition.title}
                </h3>
        
        
                <div className="blog-details text-justify">
                    <p className="pb-5">•{condition.description1}</p>
                    <p className="pb-5">•{condition.description2}</p>
                    <p className="pb-5">•{condition.description3}</p>
                    {condition.description4 && <p className="pb-5">•{condition.description4}</p>}
                    {condition.description5 && <p className="pb-5">•{condition.description5}</p>}
                </div>
        
            </div>
        </div>
    )
}