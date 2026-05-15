'use client'
import BestSelling from "@/components/BestSelling";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import OurSpecs from "@/components/OurSpec";
import LatestProducts from "@/components/LatestProducts";
import CategoryLinks from "@/components/CategoryLinks"

export default function Home() {
    return (
        <div>
            <Hero />
            <LatestProducts />
            <CategoryLinks />
            <BestSelling />
            <OurSpecs />
            <Newsletter />
        </div>
    );
}
