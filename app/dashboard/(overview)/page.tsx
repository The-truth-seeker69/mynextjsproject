import { merriweather } from "../../ui/font"
import CardWrapper from '../../ui/dashboard/card';
import { RevenueChart } from '../../ui/dashboard/revenue-chart'
import LatestInvoice from "../../ui/dashboard/latestInvoice"
export default function Page() {
    return (
        <div className=" min-h-screen   ">
            <div>
                <h1 className={`${merriweather.className} p-10 text-2xl`}>Dashboard</h1>
                <CardWrapper />
            </div>
            <div className="flex px-7 gap-5">
                <div>
                    <h1 className={`${merriweather.className} p-10 text-2xl `}>Recent Revenue</h1>

                    <RevenueChart />
                </div>
                <div className="w-full h-full">
                    <h1 className={`${merriweather.className} p-10 text-2xl `}>Latest Invoice</h1>
                    <LatestInvoice />

                </div>
            </div>

        </div>

    )


}