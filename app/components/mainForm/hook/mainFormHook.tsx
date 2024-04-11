"use client";
import {
    dataCampusObject,
    dataFunctionaryObject,
    dataMainFormObject,
    dataPatientObject,
    dataProfessionalObject,
} from "@/data/mainFormData";
import {
    saveDataDocumentsQuery,
    saveEditDataDocumentsQuery,
} from "@/queries/documentsQueries";
import { ErrorDataForm } from "@/types/documents";
import { ModalParamsMainForm } from "@/types/modals";
import moment from "moment";
import { SetStateAction, useEffect, useState } from "react";
import _ from "lodash";
import Swal from "sweetalert2";

const MainFormHook = ({
    handleShowMainForm,
    setHandleShowMainForm,
    handleShowMainFormEdit,
    setHandleShowMainFormEdit,
    editData,
    title,
    reference,
}: ModalParamsMainForm) => {
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [data, setData] = useState(dataMainFormObject);
    const [errorValid, setErrorValid] = useState("");
    const [errorForm, setErrorForm] = useState(false);
    const [errorPass, setErrorPass] = useState(false);
    const [errorDataUpload, setErrorDataUpload] = useState<ErrorDataForm[]>();
    const [showPassword, setShowPassword] = useState(false);
    const [files, setFiles] = useState<SetStateAction<any>[]>([]);

    const [selectedIdType, setSelectedIdType] = useState<any>(null);
    const [selectedState, setSelectedState] = useState<any>(null);
    const [selectedCountry, setSelectedCountry] = useState<any>(null);
    const [selectedCity, setSelectedCity] = useState<any>(null);

    const [selectedSpecialty, setSelectedSpecialty] = useState<any>(null);
    const [selectedContract, setSelectedContract] = useState<any>(null);
    const [selectedStatus, setSelectedStatus] = useState<any>(null);
    const [selectedRol, setSelectedRol] = useState<any>(null);
    const [selectedCampus, setSelectedCampus] = useState<any>(null);
    const [selectedArea, setSelectedArea] = useState<any>(null);

    const generateGUID = () => {
        const S4 = (): string => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };

        return S4() + S4();
    };

    const handleEditForm = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setIsEdit(true);
    };

    const confirmAlert = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: `Se guardó correctamente en la tabla de ${title}`,
            showConfirmButton: false,
            timer: 2000,
        });
    };

    const findValue = (item: any, dataValue: any) => item.value === dataValue;

    const changeHandler = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const dateChangeHandler = (e: any) => {
        const dateFormat = moment(e.target.value).format("YYYY-MM-DD");
        setData({
            ...data,
            [e.target.name]: dateFormat,
            ["age"]: `${calculateAge(data.birthDate)}`,
        });
        // console.log({ ...data, [e.target.name]: dateFormat });
    };

    const selectChangeHandlerIdType = (e: any) => {
        setData({ ...data, ["idType"]: e?.value });
        setSelectedIdType(e);
    };
    const selectChangeHandlerState = (e: any) => {
        setData({ ...data, ["state"]: e?.value });
        setSelectedState(e);
    };
    const selectChangeHandlerCountry = (e: any) => {
        setData({ ...data, ["country"]: e?.value });
        setSelectedCountry(e);
    };
    const selectChangeHandlerCity = (e: any) => {
        setData({ ...data, ["city"]: e?.value });
        setSelectedCity(e);
    };
    const selectChangeHandlerSpecialty = (e: any) => {
        setData({ ...data, ["specialty"]: e?.value });
        setSelectedSpecialty(e);
    };
    const selectChangeHandlerContract = (e: any) => {
        setData({ ...data, ["contract"]: e?.value });
        setSelectedContract(e);
    };
    // const selectChangeHandlerRol = (e: any) => {
    //     setData({ ...data, ["rol"]: e?.value });
    //     setSelectedRol(e);
    // };
    const selectChangeHandlerCampus = (e: any) => {
        setData({ ...data, ["campus"]: e?.value });
        setSelectedCampus(e);
    };
    const selectChangeHandlerArea = (e: any) => {
        setData({ ...data, ["area"]: e?.value });
        setSelectedArea(e);
    };
    const selectChangeHandlerStatus = (e: any) => {
        setData({ ...data, ["isActive"]: e?.value });
        setSelectedStatus(e);
    };

    // console.log(data);

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

            editData && (currentDataObject.iud = data.iud);
            currentDataObject.idType = data.idType;
            currentDataObject.id = data.id;
            currentDataObject.name = data.name;
            currentDataObject.lastName = data.lastName;
            currentDataObject.phone = data.phone;
            currentDataObject.email = data.email;
            currentDataObject.password = data.password;
            currentDataObject.confirmPassword = data.confirmPassword;
            // currentDataObject.rol = data.rol;
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
        if (reference === "patients") {
            // const dataUpload: DataFunctionaryObject[] = [];
            // for (const record of files) {
            // const urlName = record.name.split(".")[0];
            // await saveFilesDocuments({ urlName, record, data })
            //     .then((result) => {
            const currentDataObject = { ...dataPatientObject };

            editData && (currentDataObject.iud = data.iud);
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
            currentDataObject.isActive = data.isActive;
            // currentDataObject.rol = data.rol;
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

            editData && (currentDataObject.iud = data.iud);
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
            currentDataObject.isActive = data.isActive;
            // currentDataObject.rol = data.rol;
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

            editData && (currentDataObject.iud = data.iud);
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

        // console.log("newData", newData);
        // console.log("reference", reference);

        handleShowMainFormEdit
            ? await saveEditDataDocumentsQuery({
                  id: data.iud,
                  data: newData,
                  reference,
              }).then(confirmAlert)
            : await saveDataDocumentsQuery({
                  data: newData,
                  reference,
              }).then(confirmAlert);
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
        // data.rol &&
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
        data.name &&
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
        data.isActive;
    // data.rol &&
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
        data.isActive;
    // data.rol &&
    // files.length > 0;

    const passValidation = data.confirmPassword === data.password;

    const handleSendForm = async (e?: any) => {
        console.log("data", data);

        if (
            campusVal ||
            ((functionaryVal || professionalsVal || patientVal) &&
                passValidation)
        ) {
            e.preventDefault();
            e.stopPropagation();
            console.log("Entró");
            setIsLoading(true);
            const dataUpload = await uploadHandle();
            setErrorDataUpload(dataUpload);
            setIsLoading(false);
            const errorFound = dataUpload.find((value) => !value.success);
            !errorFound && handleClose();
        } else {
            e.preventDefault();
            e.stopPropagation();
            // setErrorForm(true);
            !passValidation && setErrorPass(true);
            console.log("Falló");
        }
    };

    const handleClose = () => {
        setShow(false);
        setHandleShowMainForm(false);
        setHandleShowMainFormEdit(false);
        setErrorValid("");
        setData(dataMainFormObject);
        setIsLoading(false);
        setIsEdit(false);
        setShowPassword(false);
    };

    const clearSelectFields = () => {
        setSelectedIdType(null);
        setSelectedState(null);
        setSelectedCountry(null);
        setSelectedCity(null);
        setSelectedSpecialty(null);
        setSelectedContract(null);
        setSelectedStatus(null);
        setSelectedRol(null);
        setSelectedCampus(null);
        setSelectedArea(null);
        setData(dataMainFormObject);
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
        handleShowMainForm && (setShow(true), setIsEdit(true));
    }, [handleShowMainForm]);

    useEffect(() => {
        handleShowMainFormEdit && (setShow(true), setData(editData));
    }, [editData, handleShowMainFormEdit]);

    // useEffect(() => {
    //     passwordValidate();
    // }, [passwordValidate]);

    return {
        show,
        isLoading,
        errorForm,
        errorDataUpload,
        errorValid,
        data,
        selectedIdType,
        selectedState,
        selectedCountry,
        selectedCity,
        selectedSpecialty,
        selectedContract,
        selectedStatus,
        selectedRol,
        selectedCampus,
        selectedArea,
        files,
        showPassword,
        isEdit,
        errorPass,
        setErrorPass,
        changeHandler,
        handleSendForm,
        handleClose,
        handleReset,
        setErrorForm,
        clearSelectFields,
        calculateAge,
        handleGetBirthDate,
        dateChangeHandler,
        selectChangeHandlerIdType,
        setShowPassword,
        setFiles,
        // selectChangeHandlerRol,
        selectChangeHandlerCampus,
        selectChangeHandlerArea,
        selectChangeHandlerStatus,
        selectChangeHandlerContract,
        selectChangeHandlerSpecialty,
        selectChangeHandlerCity,
        selectChangeHandlerCountry,
        selectChangeHandlerState,
        findValue,
        handleEditForm,
    };
};

export default MainFormHook;
