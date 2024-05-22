"use client";

import { usePathname } from "next/navigation";

const Ocultar = ({ children }: any) => {
    const pathname = usePathname();

    return <div className={pathname === "/" ? "hidden" : ""}>{children}</div>;
};

export default Ocultar;
