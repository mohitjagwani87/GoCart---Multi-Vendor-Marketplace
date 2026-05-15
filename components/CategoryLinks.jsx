"use client"
import { useRouter } from "next/navigation"

const CategoryLinks = () => {
    const router = useRouter()

    const categories = ["Earphones", "Headphones", "Smartphones", "Laptops"]

    const openCategory = (cat) => {
        router.push(`/shop?category=${encodeURIComponent(cat)}`)
    }

    return (
        <div className="px-6 max-w-6xl mx-auto mt-8 mb-20">
            <h2 className="text-lg font-medium mb-4 text-slate-700">Browse by category</h2>
            <div className="flex gap-3 flex-wrap">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => openCategory(cat)}
                        className="px-4 py-2 bg-slate-100 rounded-md text-sm text-slate-600 hover:bg-slate-700 hover:text-white transition"
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default CategoryLinks
