
import SideNav from '../ui/dashboard/sidenav'
export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex ">
            <SideNav />
            <div className="w-full">{children}</div>
        </div>
    )
}