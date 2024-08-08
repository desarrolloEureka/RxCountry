"use client";
import { main_logo_dark, main_logo_light } from "@/globals/images";
import Logout from "@/hook/Logout";
import { LocalVariable } from "@/types/global";
import useAuth from "@/firebase/auth";
import { getProfileDataByIdFb } from "@/firebase/user";
import { useCallback, useEffect, useState } from "react";
import { ProfileData } from "@/data/user";
import { getAllRolesQuery } from "@/queries/RolesQueries";
import { RolesSelector } from "@/types/roles";

function HeaderHook() {
    const { logOut } = Logout();
    const { user } = useAuth();
    const [data, setData] = useState<any>(ProfileData);

    const theme = localStorage.getItem("@theme");
    const themeParsed = theme ? (JSON.parse(theme) as LocalVariable) : null;
    const main_logo = themeParsed
        ? themeParsed.dataThemeMode === "light"
            ? main_logo_dark.src
            : main_logo_light.src
        : main_logo_dark.src;

    const getUserProfileData = useCallback(async () => {
        if (user) {
            const userData: any = await getProfileDataByIdFb(user?.uid);
            const allRolesData: RolesSelector[] = await getAllRolesQuery();
            const rolNameFound: string | undefined =
            userData &&
            allRolesData &&
            allRolesData.find((item: any) => item.value === userData.rol)
            ?.label;
            setData({ ...userData, rolName: rolNameFound });
        }
    }, [user]);

    useEffect(() => {
        getUserProfileData();
    }, [getUserProfileData]);

    return { logOut, main_logo, data };
}

export default HeaderHook;
