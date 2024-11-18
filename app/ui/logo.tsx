import { BoltIcon } from "@heroicons/react/24/solid";
import { roboto } from '../ui/font'


export default function Logo() {

    return (
        <div className={`${roboto.className} flex flex-row items-center leading-none`}>
            <BoltIcon className="h-12 w-12 " />
            <p>Skibidi Toilet</p>
        </div>
    )
}