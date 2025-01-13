"use client";

import NavbarMenu from "./navbar-menu";

export default function DesktopNavbar() {
    return (
        <nav className="w-60 h-full overflow-y-auto shadow-[-0.0625rem_0_#27272A_inset] hidden md:block">
            <NavbarMenu />
        </nav>
    );
}
