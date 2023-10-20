"use client";
import { Resizable } from "re-resizable";

const GridComponent = () => {
    return (
        <Resizable
            className="bg-zinc-800 text-white"
            maxWidth={200}
            minHeight={100}
            defaultSize={{ width: 200, height: 100 }}
            grid={[0, 100]}
        >
            sample resizable component
        </Resizable>
    );
};

export default GridComponent;
