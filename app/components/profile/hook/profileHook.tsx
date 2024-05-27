import { ProfileData } from "@/data/user";
import useAuth from "@/firebase/auth";
import { getProfileDataByIdFb, saveUserById } from "@/firebase/user";
import { useCallback, useEffect, useMemo, useState } from "react";
import Swal from "sweetalert2";
import _ from "lodash";
import { useRouter } from "next/navigation";

type Props = {
    // sendData: (e: any) => void;
};

const ProfileHook = (props?: Props) => {
    const { user } = useAuth();

    const router = useRouter();

    const [key, setKey] = useState<any>("first");
    const [data, setData] = useState<any>(ProfileData);
    const [editData, setEditData] = useState<any>();
    const [isDisabled, setIsDisabled] = useState(true);

    const changeHandler = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const ConfirmAlert = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "La información se guardó correctamente",
            showConfirmButton: false,
            timer: 2000,
        }).then(() => {
            setKey("first");
            // setIsDisabled(true);
        });
    };

    const ErrorAlert = () => {
        Swal.fire({
            position: "center",
            icon: "warning",
            title: "Ocurrió un error al guardar",
            showConfirmButton: false,
            timer: 2000,
        });
    };

    const handleUpdateProfile = async () => {
        await saveUserById({
            ...data,
            uid: user?.uid,
            emailVerified: user?.emailVerified,
        })
            .then(ConfirmAlert)
            .catch(ErrorAlert);
    };

    const getUserProfileData = useCallback(async () => {
        if (user) {
            const userData: any = await getProfileDataByIdFb(user?.uid);
            setData(userData);
            setEditData(userData);
            // console.log({ ...userData });
        }
    }, [user]);

    useEffect(() => {
        getUserProfileData();
    }, [getUserProfileData]);

    // useEffect(() => {
    //     if (editData) {
    //         setIsDisabled(_.isEqual(data, editData));
    //         _.isEqual(data, editData) ? console.log(isDisabled) : console.log("No entro");
    //         console.log(isDisabled);
    //     }
    // }, [data, editData, isDisabled]);

    return {
        data,
        isDisabled,
        key,
        router,
        setKey,
        changeHandler,
        handleUpdateProfile,
    };
};

export default ProfileHook;
