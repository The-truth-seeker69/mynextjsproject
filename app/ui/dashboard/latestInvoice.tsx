
import { ArrowPathIcon } from "@heroicons/react/24/solid"
import { merriweather } from '../font'

export default function LatestInvoice() {
    const customersData = [
        { id: 1, custName: "nigga123", custEmail: "nigga23123@gmail.com", custInvAmount: "$" + 1000 },
        { id: 2, custName: "nigga", custEmail: "nigga@gmail.com", custInvAmount: "$" + 1000 },
        { id: 3, custName: "nigga1", custEmail: "nigga@gmail.com", custInvAmount: "$" + 1000 },
        { id: 4, custName: "nigga2", custEmail: "nigga123@gmail.com", custInvAmount: "$" + 1000 },

    ]
    return (
        <div className="rounded-xl bg-gray-50 p-6 shadow-sm w-full  ">
            <div className=" p-2 bg-white rounded-lg shadow-md">
                {customersData.map((customer) => (
                    <div key={customer.id} className="flex justify-between p-5  items-center border-b border-gray-300 last:border-b-0 ">
                        <div>
                            <h3 className={`${merriweather.className}`}>{customer.custName}</h3>
                            <p className={`${merriweather.className} text-gray-500`}>{customer.custEmail}</p>
                        </div>
                        <div>
                            <p className={`${merriweather.className} `}>{customer.custInvAmount}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center mt-4">
                <ArrowPathIcon className="h-5 w-5 text-gray-500" />
                <h3 className="text-gray-700">Updated just now</h3>
            </div>
        </div>
    )
}