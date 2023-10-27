"use client";
import React, { useState, useRef } from "react";
import GridComponent from "./GridComponent";

const GridParent = () => {
    const [clickLocation, setClickLocation] = useState<undefined | number>(
        undefined
    );

    const ref = useRef<HTMLDivElement | null>(null);

    // if (ref.current) {
    //     const rect = ref.current.getBoundingClientRect();
    // }

    return (
        <div
            onMouseDown={(e) => {
                setClickLocation(e.clientY);
                console.log(e.clientY);
            }}
            className="bg-zinc-600 text-white h-[2400px] w-1/2 relative"
            ref={ref}
        >
            <GridComponent
                style={{
                    top: clickLocation,
                }}
            />
        </div>
    );
};

export default GridParent;
