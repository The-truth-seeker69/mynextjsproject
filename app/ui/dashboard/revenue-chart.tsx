'use client'
import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Legend } from "recharts";


export function RevenueChart() {
    const data = [
        { month: "Jan", Revenue: 1000 },
        { month: "Feb", Revenue: 2000 },
        { month: "Mar", Revenue: 2000 },
        { month: "April", Revenue: 2000 },
        { month: "May", Revenue: 3000 },
        { month: "Jun", Revenue: 3000 },
        { month: "Jul", Revenue: 4000 },
        { month: "Aug", Revenue: 5000 },
        { month: "Sep", Revenue: 6000 },
        { month: "Oct", Revenue: 9000 },
        { month: "Nov", Revenue: 10000 },
        { month: "Dec", Revenue: 15000 },

    ]

    return (
        <div className="rounded-xl bg-gray-50 p-6 shadow-sm ">
            <div className="p-2 bg-white rounded-lg shadow-md ">
                <BarChart width={520} height={350} data={data}>
                    <CartesianGrid />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Bar dataKey="Revenue" fill="#8884d8" />
                    <Legend />
                </BarChart>
            </div>
        </div>
    )

}