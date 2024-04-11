"use client";
import { main_logo_dark, main_logo_light } from "@/globals/images";
import Logout from "@/hook/Logout";
import { LocalVariable } from "@/types/global";

function HeaderHook() {
    const { logOut } = Logout();

    const theme = localStorage.getItem("@theme");
    const themeParsed = theme ? (JSON.parse(theme) as LocalVariable) : null;
    const main_logo = themeParsed
        ? themeParsed.dataThemeMode === "light"
            ? main_logo_dark.src
            : main_logo_light.src
        : main_logo_dark.src;

    return { logOut, main_logo };
}

export default HeaderHook;
