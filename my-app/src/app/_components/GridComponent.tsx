"use client";
import { StyleSheetTuple } from "next/dist/client/page-loader";
import { Resizable } from "re-resizable";
import React from "react";

interface StyleContent {
    top: number | undefined;
}

interface StyleProps {
    style: StyleContent;
}

const GridComponent: React.FC<StyleProps> = ({ style }) => {
    return (
        <Resizable
            style={{
                top: style.top,
            }}
            className="bg-zinc-800 text-white absolute"
            minHeight={100}
            defaultSize={{ width: 1000, height: 100 }}
            grid={[0, 100]}
        ></Resizable>
    );
};

export default GridComponent;
