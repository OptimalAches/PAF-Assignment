"use client";

import { useState, useRef, useEffect } from "react";

export default function FilterBar({
    orderBy,
    setOrderBy,
    year,
    setYear,
}: {
    orderBy: number;
    setOrderBy: (v: number) => void;
    year: number | null;
    setYear: (v: number | null) => void;
}) {
    const [open, setOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const years = Array.from({ length: 2026 - 2011 + 1 }, (_, i) => 2026 - i);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        }

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);


    return (
        <div className="flex justify-between py-3">
            {/* ===== Order Buttons ===== */}
            <div className="flex gap-2 md:gap-3.5 overflow-x-auto">
                <button
                    onClick={() => setOrderBy(1)}
                    className={`
                        border
                        font-medium
                        px-2.5 py-1.5
                        md:px-3.5 md:py-2
                        text-[12px] md:text-[15px]
                        whitespace-nowrap
                        transition-colors
                        ${orderBy === 1
                            ? "bg-[#1F2022] text-white border-[#1F2022]"
                            : "bg-white border-[#CACED1] text-[#505153] hover:bg-[#F6F8F9]"
                        }
                    `}
                >
                    Latest
                </button>

                <button
                    onClick={() => setOrderBy(3)}
                    className={`
                        border
                        font-medium
                        px-2.5 py-1.5
                        md:px-3.5 md:py-2
                        text-[12px] md:text-[15px]
                        whitespace-nowrap
                        transition-colors
                        ${orderBy === 3
                            ? "bg-[#1F2022] text-white border-[#1F2022]"
                            : "bg-white border-[#CACED1] text-[#505153] hover:bg-[#F6F8F9]"
                        }
                    `}
                >
                    Most Viewed
                </button>

                <button
                    onClick={() => setOrderBy(2)}
                    className={`
                        border
                        font-medium
                        px-2.5 py-1.5
                        md:px-3.5 md:py-2
                        text-[12px] md:text-[15px]
                        whitespace-nowrap
                        transition-colors
                        ${orderBy === 2
                            ? "bg-[#1F2022] text-white border-[#1F2022]"
                            : "bg-white border-[#CACED1] text-[#505153] hover:bg-[#F6F8F9]"
                        }
                    `}
                >
                    Oldest
                </button>
            </div>

            {/* ===== Year Dropdown ===== */}
            <div ref={dropdownRef} className="relative min-w-18 md:min-w-23.75">
                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    className={`
                        flex w-full items-center justify-center gap-1
                        border
                        font-medium
                        px-2.5 py-1.5
                        md:px-3.5 md:py-2
                        text-[12px] md:text-[15px]
                        focus:outline-none
                        transition-colors
                        ${open
                            ? "bg-[#1F2022] border-[#1F2022] text-white"
                            : "bg-white border-[#B6BBBF] text-[#505153] hover:bg-[#F6F8F9]"
                        }
                    `}
                >
                    <span>{year ?? "Year"}</span>

                    <div
                        className={`
                            flex h-4 w-4 md:h-5 md:w-5 items-center justify-center
                            transition-transform duration-300
                            ${open ? "rotate-180 text-white" : "text-[#505153]"}
                        `}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 14 9"
                            className="w-3 h-3.5 fill-current"
                        >
                            <path d="m7 5.671 4.95-4.95 1.414 1.415L7 8.5.636 2.136 2.05.722z" />
                        </svg>
                    </div>
                </button>

                {open && (
                    <div
                        className="
                            absolute right-0 mt-3
                            min-w-46.25 md:min-w-66.25
                            bg-[#1F2022]
                            z-20
                            max-h-80
                            overflow-y-auto
                        "
                    >
                        <button
                            onClick={() => {
                                setYear(null);
                                setOpen(false);
                            }}
                            className={`
                                flex items-center justify-between
                                w-full
                                px-4 py-3
                                text-sm
                                font-medium
                                ${year === null ? "text-white" : "text-[#E2E5E8]"}
                            `}
                        >
                            <span>All</span>
                            {year === null && <span className="text-sm">✓</span>}
                        </button>

                        <div className="h-px w-full bg-[#505153]" />

                        {years.map((y, index) => (
                            <div key={y}>
                                <button
                                    onClick={() => {
                                        setYear(y);
                                        setOpen(false);
                                    }}
                                    className={`
                                        flex items-center justify-between
                                        w-full
                                        px-4 py-3
                                        text-sm
                                        font-medium
                                        ${year === y ? "text-white" : "text-[#E2E5E8]"}
                                    `}
                                >
                                    <span>{y}</span>
                                    {year === y && <span className="text-sm">✓</span>}
                                </button>

                                {index !== years.length - 1 && (
                                    <div className="h-px w-full bg-[#505153]" />
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}