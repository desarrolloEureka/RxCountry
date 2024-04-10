"use client";
import {
    dataCampusObject,
    dataFunctionaryObject,
    dataMainFormObject,
    dataPatientObject,
    dataProfessionalObject,
} from "@/data/mainFormData";
import { saveDataDocumentsQuery } from "@/queries/documentsQueries";
import { ErrorDataForm } from "@/types/documents";
import { ModalParamsMainForm } from "@/types/modals";
import moment from "moment";
import { SetStateAction, useEffect, useState } from "react";
import _ from "lodash";

const MainFormHook = ({
    handleShowSales,
    setHandleShowSales,
    reference,
}: ModalParamsMainForm) => {
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(dataMainFormObject);
    const [errorValid, setErrorValid] = useState("");
    const [errorForm, setErrorForm] = useState(false);
    const [errorDataUpload, setErrorDataUpload] = useState<ErrorDataForm[]>();
    const [showPassword, setShowPassword] = useState(false);
    const [files, setFiles] = useState<SetStateAction<any>[]>([]);

    const generateGUID = () => {
        const S4 = (): string => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };

        return S4() + S4();
    };

    const changeHandler = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const dateChangeHandler = (e: any) => {
        const dateFormat = moment(e.target.value).format("YYYY-MM-DD");
        setData({ ...data, [e.target.name]: dateFormat });
    };

    const selectChangeHandlerIdType = (e: any) => {
        setData({ ...data, ["idType"]: e?.value });
    };
    const selectChangeHandlerState = (e: any) => {
        setData({ ...data, ["state"]: e?.value });
    };
    const selectChangeHandlerCountry = (e: any) => {
        setData({ ...data, ["country"]: e?.value });
    };
    const selectChangeHandlerCity = (e: any) => {
        setData({ ...data, ["city"]: e?.value });
    };
    const selectChangeHandlerSpecialty = (e: any) => {
        setData({ ...data, ["specialty"]: e?.value });
    };
    const selectChangeHandlerContract = (e: any) => {
        setData({ ...data, ["contract"]: e?.value });
    };
    const selectChangeHandlerRol = (e: any) => {
        setData({ ...data, ["rol"]: e?.value });
    };
    const selectChangeHandlerCampus = (e: any) => {
        setData({ ...data, ["campus"]: e?.value });
    };
    const selectChangeHandlerArea = (e: any) => {
        setData({ ...data, ["area"]: e?.value });
    };
    const selectChangeHandlerStatus = (e: any) => {
        setData({ ...data, ["isActive"]: e?.value });
    };

    const uploadHandle = async () => {
        let newData = {};
        const error: ErrorDataForm[] = [];

        if (reference === "functionary") {
            // const dataUpload: DataFunctionaryObject[] = [];
            // for (const record of files) {
            // const urlName = record.name.split(".")[0];
            // await saveFilesDocuments({ urlName, record, data })
            //     .then((result) => {
            const currentDataObject = { ...dataFunctionaryObject };

            // currentDataObject.iud = data.iud;
            currentDataObject.idType = data.idType;
            currentDataObject.id = data.id;
            currentDataObject.name = data.name;
            currentDataObject.lastName = data.lastName;
            currentDataObject.phone = data.phone;
            currentDataObject.email = data.email;
            currentDataObject.password = data.password;
            currentDataObject.confirmPassword = data.confirmPassword;
            currentDataObject.rol = data.rol;
            currentDataObject.campus = data.campus;
            currentDataObject.area = data.area;
            currentDataObject.isActive = data.isActive;
            // currentDataObject.urlPhoto = urlName;
            // error.push(...result);
            // dataUpload.push(currentDataObject);
            // })
            // .catch((err) => {
            //     error.push({ success: false, urlName });
            // });
            // }
            newData = { ...currentDataObject };
        }
        if (reference === "patient") {
            // const dataUpload: DataFunctionaryObject[] = [];
            // for (const record of files) {
            // const urlName = record.name.split(".")[0];
            // await saveFilesDocuments({ urlName, record, data })
            //     .then((result) => {
            const currentDataObject = { ...dataPatientObject };

            // currentDataObject.iud = data.iud;
            currentDataObject.idType = data.idType;
            currentDataObject.id = data.id;
            currentDataObject.name = data.name;
            currentDataObject.lastName = data.lastName;
            currentDataObject.birthDate = data.birthDate;
            currentDataObject.age = data.age;
            currentDataObject.phone = data.phone;
            currentDataObject.phone2 = data.phone2;
            currentDataObject.address = data.address;
            currentDataObject.country = data.country;
            currentDataObject.state = data.state;
            currentDataObject.city = data.city;
            currentDataObject.email = data.email;
            currentDataObject.password = data.password;
            currentDataObject.confirmPassword = data.confirmPassword;
            currentDataObject.rol = data.rol;
            currentDataObject.isActive = data.isActive;
            // currentDataObject.urlPhoto = urlName;
            // error.push(...result);
            // dataUpload.push(currentDataObject);
            // })
            // .catch((err) => {
            //     error.push({ success: false, urlName });
            // });
            // }
            newData = { ...currentDataObject };
        }
        if (reference === "professionals") {
            // const dataUpload: DataFunctionaryObject[] = [];
            // for (const record of files) {
            // const urlName = record.name.split(".")[0];
            // await saveFilesDocuments({ urlName, record, data })
            //     .then((result) => {
            const currentDataObject = { ...dataProfessionalObject };

            // currentDataObject.iud = data.iud;
            currentDataObject.idType = data.idType;
            currentDataObject.id = data.id;
            currentDataObject.name = data.name;
            currentDataObject.lastName = data.lastName;
            currentDataObject.phone = data.phone;
            currentDataObject.phone2 = data.phone2;
            currentDataObject.address = data.address;
            currentDataObject.country = data.country;
            currentDataObject.state = data.state;
            currentDataObject.city = data.city;
            currentDataObject.email = data.email;
            currentDataObject.password = data.password;
            currentDataObject.confirmPassword = data.confirmPassword;
            currentDataObject.cardNumber = data.cardNumber;
            currentDataObject.medicalRecord = data.medicalRecord;
            currentDataObject.specialty = data.specialty;
            currentDataObject.contract = data.contract;
            currentDataObject.rol = data.rol;
            currentDataObject.isActive = data.isActive;
            // currentDataObject.urlPhoto = urlName;
            // error.push(...result);
            // dataUpload.push(currentDataObject);
            // })
            // .catch((err) => {
            //     error.push({ success: false, urlName });
            // });
            // }
            newData = { ...currentDataObject };
        }
        if (reference === "campus") {
            // const dataUpload: DataFunctionaryObject[] = [];
            // for (const record of files) {
            // const urlName = record.name.split(".")[0];
            // await saveFilesDocuments({ urlName, record, data })
            //     .then((result) => {
            const currentDataObject = { ...dataCampusObject };

            // currentDataObject.iud = data.iud;
            currentDataObject.campusName = data.campusName;
            currentDataObject.description = data.description;
            currentDataObject.phone2 = data.phone2;
            currentDataObject.address = data.address;
            currentDataObject.country = data.country;
            currentDataObject.state = data.state;
            currentDataObject.city = data.city;
            currentDataObject.isActive = data.isActive;
            // currentDataObject.urlPhoto = urlName;
            // error.push(...result);
            // dataUpload.push(currentDataObject);
            // })
            // .catch((err) => {
            //     error.push({ success: false, urlName });
            // });
            // }
            newData = { ...currentDataObject };
        }

        console.log("newData", newData);

        await saveDataDocumentsQuery({
            data: newData,
            reference,
        }).then((result) => {
            // console.log("result", result);
        });
        return [...error];
    };

    const functionaryVal =
        data.idType &&
        data.id &&
        data.name &&
        data.lastName &&
        data.phone &&
        data.email &&
        data.password &&
        data.confirmPassword &&
        data.rol &&
        data.campus &&
        data.area;
    // files.length > 0;

    const campusVal =
        data.campusName &&
        data.address &&
        data.country &&
        data.state &&
        data.city;

    const professionalsVal =
        data.idType &&
        data.id &&
        data.campusName &&
        data.lastName &&
        data.phone &&
        data.phone2 &&
        data.address &&
        data.country &&
        data.state &&
        data.city &&
        data.email &&
        data.password &&
        data.confirmPassword &&
        data.cardNumber &&
        data.medicalRecord &&
        data.specialty &&
        data.contract &&
        data.rol;
    // files.length > 0;

    const patientVal =
        data.idType &&
        data.id &&
        data.name &&
        data.lastName &&
        data.birthDate &&
        data.age &&
        data.phone &&
        data.phone2 &&
        data.address &&
        data.country &&
        data.state &&
        data.city &&
        data.email &&
        data.password &&
        data.confirmPassword &&
        data.rol;
    // files.length > 0;

    const handleSendForm = async () => {
        if (functionaryVal || campusVal || professionalsVal || patientVal) {
            console.log("Entró");
            setIsLoading(true);
            const dataUpload = await uploadHandle();
            setErrorDataUpload(dataUpload);
            setIsLoading(false);
            const errorFound = dataUpload.find((value) => !value.success);
            !errorFound && handleClose();
        } else {
            setErrorForm(true);
            console.log("Falló");
        }
    };

    const handleClose = () => {
        setShow(false);
        setHandleShowSales(false);
        setErrorValid("");
        setData(dataMainFormObject);
        setIsLoading(false);
    };

    const clearSelectFields = () => {
        // setSelectedIdType(null);
        // setSelectedState(null);
        // setSelectedCountry(null);
        // setSelectedCity(null);
        // setSelectedSpecialty(null);
        // setSelectedContract(null);
        // setSelectedStatus(null);
        // setSelectedRol(null);
        // setSelectedCampus(null);
        // setSelectedArea(null);
    };

    const handleReset = (e: any) => {
        e.target.reset();
    };

    const handleGetBirthDate = (e: any) => {
        // setSelectedAge(e.target.value);
    };

    const calculateAge = (birthDate: Date | string): number => {
        const today = new Date();
        const birthDay = new Date(birthDate);
        let age = today.getFullYear() - birthDay.getFullYear();
        const monthsDiff = today.getMonth() - birthDay.getMonth();
        const daysDiff: number = today.getDate() - birthDay.getDate();

        if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff <= 0)) {
            age--;
        }

        if (age < 0) {
            age = 0;
        }

        return age;
    };

    // const getAllCustomers = useCallback(async () => {
    //     if (handleShowSales) {
    //         const customersResult = await getAllCustomersQuery();
    //         customersResult && setCustomers(customersResult);
    //     }
    // }, [handleShowSales]);

    // useEffect(() => {
    //     getAllCustomers();
    // }, [getAllCustomers]);

    useEffect(() => {
        handleShowSales && setShow(true);
    }, [handleShowSales]);

    return {
        changeHandler,
        handleSendForm,
        handleClose,
        handleReset,
        show,
        isLoading,
        setErrorForm,
        errorForm,
        errorDataUpload,
        errorValid,
        clearSelectFields,
        calculateAge,
        handleGetBirthDate,
        dateChangeHandler,
        selectChangeHandlerIdType,
        showPassword,
        setShowPassword,
        files,
        setFiles,
        selectChangeHandlerRol,
        selectChangeHandlerCampus,
        selectChangeHandlerArea,
        selectChangeHandlerStatus,
        selectChangeHandlerContract,
        selectChangeHandlerSpecialty,
        selectChangeHandlerCity,
        selectChangeHandlerCountry,
        selectChangeHandlerState,
        data,
    };
};

export default MainFormHook;
