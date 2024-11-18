import {
    BanknotesIcon,
    ClockIcon,
    UserGroupIcon,
    InboxIcon,
} from '@heroicons/react/24/outline';

import { merriweather } from '../font'
const iconMap = {
    collected: BanknotesIcon,
    customers: UserGroupIcon,
    pending: ClockIcon,
    invoices: InboxIcon,
};


export default function CardWrapper() {
    return (
        <div className='flex justify-center items-center gap-4'>
            <Card type="collected" value={1} title="Collected" />
            <Card type="invoices" value={1} title="invoices" />
            <Card type="pending" value={12} title="Pending" />
            <Card type="customers" value={10} title="customers" />
        </div>

    )

}



export function Card({ title, value, type }: {
    title: string, value: number | string, type: "invoices" | "customers" | "pending" | 'collected'
}) {
    const Icon = iconMap[type];
    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm w-64 ">
            <div className="flex p-5">
                {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
                <h3 className='ml-2 text-sm font-medium'>{title}</h3>
            </div>
            <p className={`${merriweather.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}>{value}</p>
        </div>

    )

}