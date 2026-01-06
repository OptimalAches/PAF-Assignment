"use client";

import { useState } from "react";

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

    const years = Array.from({ length: 2026 - 2011 + 1 }, (_, i) => 2026 - i);

    return (

        <div className="flex justify-between py-3">
            {/* Order buttons (unchanged) */}
            <div className="flex gap-3.5 overflow-x-auto">
                {/* <button
                    onClick={() => setOrderBy(1)}
                    className={`font-din border px-2 py-1.5 text-sm ${orderBy === 1
                            ? "bg-[#1F2022] text-white border-[#1F2022]"
                            : "border-[#CACED1] text-[#505153] hover:bg-[#F6F8F9]"
                        }`}
                >
                    Latest
                </button> */}
                <button
                    onClick={() => setOrderBy(1)}
                    className={`

    border
    font-medium
    px-3 py-2
    laptop:px-3 laptop:py-[8.5px]
    text-sm laptop:text-[15px]
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


                {/* <button
                    onClick={() => setOrderBy(3)}
                    className={`font-din border px-2 py-1.5 text-sm ${orderBy === 3
                        ? "bg-[#1F2022] text-white border-[#1F2022]"
                        : "border-[#CACED1] text-[#505153] hover:bg-[#F6F8F9]"
                        }`}
                >
                    Most Viewed
                </button> */}

                <button
                    onClick={() => setOrderBy(3)}
                    className={`
    
    border
    font-medium
    px-3 py-2
    laptop:px-3 laptop:py-[8.5px]
    text-sm laptop:text-[15px]
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


                {/* <button
                    onClick={() => setOrderBy(2)}
                    className={`font-din border px-2 py-1.5 text-sm ${orderBy === 2
                        ? "bg-[#1F2022] text-white border-[#1F2022]"
                        : "border-[#CACED1] text-[#505153] hover:bg-[#F6F8F9]"
                        }`}
                >
                    Oldest
                </button> */}

                <button
                    onClick={() => setOrderBy(2)}
                    className={`
    
    border
    font-medium
    px-3 py-2
    laptop:px-3 laptop:py-[8.5px]
    text-sm laptop:text-[15px]
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
            <div className="relative min-w-[95px]">
                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    className={`

    flex w-full items-center justify-center gap-1
    border
    font-medium
    px-3 py-2
    laptop:px-5 laptop:py-2 laptop:gap-1
    text-sm laptop:text-[15px]
    leading-[1.25]
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
    flex h-5 w-5 items-center justify-center
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
                    <div className="absolute right-0 mt-3
      min-w-[220px] laptop:min-w-[160px]
      bg-[#1F2022]
      z-20
      max-h-65
      overflow-y-auto">
                        <button
                            onClick={() => {
                                setYear(null);
                                setOpen(false);
                            }}
                            className={`
    flex items-center justify-between
    w-full
    px-4 py-2
    text-sm
    ${year === null
                                    ? "text-white"
                                    : "text-[#E2E5E8]"
                                }
  `}
                        >
                            <span>All</span>
                            {year === null && <span className="text-sm">✓</span>}
                        </button>

                        <div className="h-px w-full bg-[#2A2B2D]" />

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
        px-4 py-2
        text-sm
        ${year === y
                                            ? "text-white"
                                            : "text-[#E2E5E8]"
                                        }
      `}
                                >
                                    <span>{y}</span>
                                    {year === y && <span className="text-sm">✓</span>}
                                </button>

                                {/* Divider except after last item */}
                                {index !== years.length - 1 && (
                                    <div className="h-px w-full bg-[#2A2B2D]" />
                                )}
                            </div>
                        ))}


                    </div>
                )}

            </div>
        </div>
    );
}