import { ChooseUs } from "@/types/ChooseUs" 

export default function ChooseUsCard ({ reason }: {reason: ChooseUs}) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center">
                <span className="text-green-500 text-2xl mr-4">✔️</span>
                <div>
                    <h3 className="text-lg font-semibold">{reason.title}</h3>
                    <p className="text-gray-600">
                        {reason.description}
                    </p>
                </div>
            </div>
        </div>
    )
}