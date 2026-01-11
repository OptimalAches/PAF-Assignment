"use client";

import { useEffect, useRef, useState } from "react";

export default function TopicNav({
    categories,
    active,
    setActive,
}: {
    categories: any[];
    active: string | null;
    setActive: (v: string | null) => void;
}) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    // Determine arrow visibility
    const updateScrollState = () => {
        const el = scrollRef.current;
        if (!el) return;

        const maxScrollLeft = el.scrollWidth - el.clientWidth;

        // tolerance fixes smooth-scroll rounding
        const tolerance = 2;

        setCanScrollLeft(el.scrollLeft > tolerance);
        setCanScrollRight(el.scrollLeft < maxScrollLeft - tolerance);
    };


    // Scroll fully to one side
    const scrollTo = (dir: "left" | "right") => {
        const el = scrollRef.current;
        if (!el) return;

        el.scrollTo({
            left: dir === "left" ? 0 : el.scrollWidth,
            behavior: "smooth",
        });
    };


    useEffect(() => {
        const raf = requestAnimationFrame(updateScrollState);
        return () => cancelAnimationFrame(raf);
    }, [categories]);

    return (

        <div className="group relative pt-3 font-medium flex w-full items-center">

            {/* LEFT GRADIENT */}
            {canScrollLeft && (
                <div className="pointer-events-none absolute left-10 top-0 bottom-0 z-10 w-24
                          bg-linear-to-r from-white to-transparent opacity-0
                          group-hover:opacity-100" />
            )}

            {/* LEFT ARROW */}
            {canScrollLeft && (
                <button
                    onClick={() => scrollTo("left")}
                    className="absolute left-0 bottom-0 z-20 hidden h-10 w-10
                       items-center justify-center border border-[#D8DCDF]
                       bg-white md:group-hover:flex"
                >
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="currentColor">
                        <path d="M6 0 7.41 1.41 2.83 6l4.58 4.59L6 12 0 6z" />
                    </svg>
                </button>
            )}

            {/* SCROLL CONTAINER */}
            <div
                ref={scrollRef}
                onScroll={updateScrollState}
                className="scrollbar-hide flex w-screen max-w-none
                     gap-4 md:gap-6 overflow-x-auto
                     px-3 md:px-6 lg:px-0
                     -mx-3 md:-mx-6 lg:mx-0"
            >
                {/* All Videos */}
                <button
                    onClick={() => setActive(null)}
                    className={`pb-2.5 whitespace-nowrap text-base leading-tight
                        tracking-[0.005em] border-b-2 ${active === null
                            ? "border-black font-bold text-black"
                            : "border-transparent text-[#505153] hover:text-[#767677]"
                        }`}
                >
                    All Videos
                </button>

                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActive(cat.id)}
                        className={`pb-2.5 whitespace-nowrap text-base leading-tight
                          tracking-[0.005em] border-b-2 ${active === cat.id
                                ? "border-black font-bold text-black"
                                : "border-transparent text-[#505153] hover:text-[#767677]"
                            }`}
                    >
                        {cat.title?.english || cat.title?.hindi}
                    </button>
                ))}
            </div>

            {/* RIGHT GRADIENT */}
            {canScrollRight && (
                <div className="pointer-events-none absolute right-10 top-0 bottom-0 z-10 w-24
                          bg-linear-to-l from-white to-transparent opacity-0
                          group-hover:opacity-100" />
            )}

            {/* RIGHT ARROW */}
            {canScrollRight && (
                <button
                    onClick={() => scrollTo("right")}
                    className="absolute right-0 bottom-0 z-20 hidden h-10 w-10
                       items-center justify-center border border-[#D8DCDF]
                       bg-white md:group-hover:flex"
                >
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                        <path
                            fill="black"
                            d="M2 0 .59 1.41 5.17 6 .59 10.59 2 12l6-6z"
                        />
                    </svg>
                </button>
            )}
        </div>

    );
}