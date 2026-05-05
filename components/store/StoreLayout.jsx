'use client'
import { useEffect, useState } from "react"
import Loading from "../Loading"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import SellerNavbar from "./StoreNavbar"
import SellerSidebar from "./StoreSidebar"
import { dummyStoreData } from "@/assets/assets"
import { useSelector } from "react-redux"

const StoreLayout = ({ children }) => {


    const [isSeller, setIsSeller] = useState(false)
    const [loading, setLoading] = useState(true)
    const [storeInfo, setStoreInfo] = useState(null)
    const currentUser = useSelector((state) => state.auth.currentUser)

    const fetchIsSeller = async () => {
        const hasSellerAccess = currentUser?.role === 'seller' || currentUser?.role === 'admin'
        setIsSeller(Boolean(hasSellerAccess))
        setStoreInfo(hasSellerAccess ? dummyStoreData : null)
        setLoading(false)
    }

    useEffect(() => {
        fetchIsSeller()
    }, [currentUser])

    return loading ? (
        <Loading />
    ) : isSeller ? (
        <div className="flex flex-col h-screen">
            <SellerNavbar />
            <div className="flex flex-1 items-start h-full overflow-y-scroll no-scrollbar">
                <SellerSidebar storeInfo={storeInfo} />
                <div className="flex-1 h-full p-5 lg:pl-12 lg:pt-12 overflow-y-scroll">
                    {children}
                </div>
            </div>
        </div>
    ) : (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-2xl sm:text-4xl font-semibold text-slate-400">You are not authorized to access this page</h1>
            <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500">
                Please log in as a seller or admin to continue.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link href="/login" className="bg-indigo-600 text-white flex items-center gap-2 p-2 px-6 max-sm:text-sm rounded-full">
                    Login <ArrowRightIcon size={18} />
                </Link>
                <Link href="/" className="bg-slate-700 text-white flex items-center gap-2 p-2 px-6 max-sm:text-sm rounded-full">
                    Go to home <ArrowRightIcon size={18} />
                </Link>
            </div>
        </div>
    )
}

export default StoreLayout