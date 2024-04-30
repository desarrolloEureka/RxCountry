"use client";
import {
    dataAgreementsObject,
    dataCampusObject,
    dataDiagnosticianObject,
    dataFunctionaryObject,
    dataMainFormObject,
    dataPatientObject,
    dataProfessionalObject,
    dataSpecialtyObject,
} from "@/data/mainFormData";
import { getAllAgreementsQuery } from "@/queries/AgreementsQueries";
import { getAllCampusQuery } from "@/queries/campusQueries";
import {
    getDocumentReference,
    getUrlFile,
    saveDataDocumentsQuery,
    saveEditDataDocumentsQuery,
    saveFilesDocuments,
} from "@/queries/documentsQueries";
import { getAllSpecialtiesQuery } from "@/queries/SpecialtiesQueries";
import { AgreementSelector } from "@/types/agreements";
import { CampusSelector } from "@/types/campus";
import { ErrorDataForm } from "@/types/documents";
import { ModalParamsMainForm } from "@/types/modals";
import { SpecialtySelector } from "@/types/specialty";
import _ from "lodash";
import moment from "moment";
import { SetStateAction, useCallback, useEffect, useState } from "react";
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
    const [urlPhoto, setUrlPhoto] = useState<string>("");
    const [campus, setCampus] = useState<CampusSelector[]>();
    const [specialties, setSpecialties] = useState<SpecialtySelector[]>();
    const [contracts, setContract] = useState<AgreementSelector[]>();

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

    const urlFile = (): string => {
        if (editData && editData.urlPhoto) {
            getUrlFile({
                folder: editData.uid,
                fileName: editData.urlPhoto,
                reference,
            })
                .then((res) => {
                    setUrlPhoto(res);
                    // console.log(res);
                })
                .catch(() => {
                    setUrlPhoto("");
                });
        }
        return urlPhoto;
    };

    // console.log(editData);

    const findValue = (item: any, dataValue: any) => item.value === dataValue;

    const changeHandler = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const dateChangeHandler = (e: any) => {
        const dateFormat = moment(e.target.value).format("YYYY-MM-DD");
        setData({
            ...data,
            [e.target.name]: dateFormat,
            ["age"]: `${calculateAge(dateFormat)}`,
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
    const selectChangeHandlerPersonType = (e: any) => {
        setData({ ...data, ["personType"]: e?.value });
        setSelectedStatus(e);
    };
    const handleMultipleChange = (event: { target: any }) => {
        event.target.files && setFiles([...event.target.files]);
    };

    // console.log(data);

    const uploadHandle = async () => {
        let newData = {};
        const error: ErrorDataForm[] = [];
        const documentRef: any = getDocumentReference(reference);

        if (reference === "functionary") {
            const currentDataObject = { ...dataFunctionaryObject };

            editData
                ? (currentDataObject.uid = data.uid)
                : (currentDataObject.uid = documentRef.id);
            currentDataObject.idType = data.idType;
            currentDataObject.id = data.id;
            currentDataObject.name = data.name;
            currentDataObject.lastName = data.lastName;
            currentDataObject.phone = data.phone;
            currentDataObject.email = data.email;
            currentDataObject.password = data.password;
            currentDataObject.confirmPassword = data.confirmPassword;
            currentDataObject.campus = data.campus;
            currentDataObject.area = data.area;
            currentDataObject.isActive = data.isActive;
            _.isEmpty(files) && (currentDataObject.urlPhoto = data.urlPhoto);

            for (const record of files) {
                const urlName = record.name.split(".")[0];
                await saveFilesDocuments({
                    urlName,
                    record,
                    uid: editData ? data.uid : documentRef.id,
                    reference,
                })
                    .then((result) => {
                        currentDataObject.urlPhoto = urlName;
                        error.push(...result);
                    })
                    .catch((err) => {
                        error.push({ success: false, urlName });
                        // console.log(error);
                    });
            }

            newData = { ...currentDataObject };
        }

        if (reference === "patients") {
            const currentDataObject = { ...dataPatientObject };

            editData
                ? (currentDataObject.uid = data.uid)
                : (currentDataObject.uid = documentRef.id);
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
            _.isEmpty(files) && (currentDataObject.urlPhoto = data.urlPhoto);

            for (const record of files) {
                const urlName = record.name.split(".")[0];
                await saveFilesDocuments({
                    urlName,
                    record,
                    uid: editData ? data.uid : documentRef.id,
                    reference,
                })
                    .then((result) => {
                        currentDataObject.urlPhoto = urlName;
                        error.push(...result);
                    })
                    .catch((err) => {
                        error.push({ success: false, urlName });
                        // console.log(error);
                    });
            }

            newData = { ...currentDataObject };
        }

        if (reference === "professionals") {
            const currentDataObject = { ...dataProfessionalObject };

            editData
                ? (currentDataObject.uid = data.uid)
                : (currentDataObject.uid = documentRef.id);
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
            currentDataObject.urlPhoto = data.urlPhoto;

            // editData && (currentDataObject.uid = data.uid);

            for (const record of files) {
                const urlName = record.name.split(".")[0];
                await saveFilesDocuments({
                    urlName,
                    record,
                    uid: editData ? data.uid : documentRef.id,
                    reference,
                })
                    .then((result) => {
                        currentDataObject.urlPhoto = urlName;
                        error.push(...result);
                    })
                    .catch((err) => {
                        error.push({ success: false, urlName });
                    });
            }

            newData = { ...currentDataObject };
        }

        if (reference === "campus") {
            const currentDataObject = { ...dataCampusObject };

            editData
                ? (currentDataObject.uid = data.uid)
                : (currentDataObject.uid = documentRef.id);
            currentDataObject.name = data.name;
            currentDataObject.description = data.description;
            currentDataObject.phone2 = data.phone2;
            currentDataObject.address = data.address;
            currentDataObject.country = data.country;
            currentDataObject.state = data.state;
            currentDataObject.city = data.city;
            currentDataObject.isActive = data.isActive;

            newData = { ...currentDataObject };
        }

        if (reference === "specialties") {
            const currentDataObject = { ...dataSpecialtyObject };

            editData
                ? (currentDataObject.uid = data.uid)
                : (currentDataObject.uid = documentRef.id);
            currentDataObject.name = data.name;
            currentDataObject.description = data.description;
            currentDataObject.icon = data.icon;
            currentDataObject.isActive = data.isActive;

            newData = { ...currentDataObject };
        }

        if (reference === "diagnostician") {
            const currentDataObject = { ...dataDiagnosticianObject };

            editData
                ? (currentDataObject.uid = data.uid)
                : (currentDataObject.uid = documentRef.id);
            currentDataObject.idType = data.idType;
            currentDataObject.id = data.id;
            currentDataObject.name = data.name;
            currentDataObject.rut = data.rut;
            currentDataObject.phone = data.phone;
            currentDataObject.phone2 = data.phone2;
            currentDataObject.address = data.address;
            currentDataObject.country = data.country;
            currentDataObject.state = data.state;
            currentDataObject.city = data.city;
            currentDataObject.isActive = data.isActive;

            newData = { ...currentDataObject };
        }

        if (reference === "agreements") {
            const currentDataObject = { ...dataAgreementsObject };

            editData
                ? (currentDataObject.uid = data.uid)
                : (currentDataObject.uid = documentRef.id);
            currentDataObject.name = data.name;
            currentDataObject.personType = data.personType;
            currentDataObject.discount = data.discount;
            currentDataObject.isActive = data.isActive;

            newData = { ...currentDataObject };
        }

        // console.log("newData", newData);
        // console.log("reference", reference);

        handleShowMainFormEdit
            ? await saveEditDataDocumentsQuery({
                  id: data.uid,
                  data: newData,
                  reference,
              }).then(confirmAlert)
            : await saveDataDocumentsQuery({
                  documentRef,
                  data: newData,
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
        data.area &&
        data.isActive;
    // files.length > 0;

    const campusVal =
        data.name &&
        data.address &&
        data.country &&
        data.state &&
        data.city &&
        data.isActive;

    const diagnosticianVal =
        data.idType &&
        data.id &&
        data.name &&
        data.rut &&
        data.phone &&
        data.address &&
        data.country &&
        data.state &&
        data.city &&
        data.isActive;

    const agreementsVal = data.name && data.personType && data.isActive;

    const specialtyVal = data.name && data.isActive;

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
        // console.log("data", data);

        if (
            campusVal ||
            specialtyVal ||
            diagnosticianVal ||
            agreementsVal ||
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
        setUrlPhoto("");
        clearSelectFields();
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

    const getAllSelectOptions = useCallback(async () => {
        if (handleShowMainForm || handleShowMainFormEdit) {
            const campusResult = await getAllCampusQuery();
            campusResult && setCampus(campusResult);
            const specialtyResult = await getAllSpecialtiesQuery();
            specialtyResult && setSpecialties(specialtyResult);
            const AgreementResult = await getAllAgreementsQuery();
            AgreementResult && setContract(AgreementResult);
        }
    }, [handleShowMainForm, handleShowMainFormEdit]);

    useEffect(() => {
        getAllSelectOptions();
    }, [getAllSelectOptions]);

    useEffect(() => {
        handleShowMainForm && (setShow(true), setIsEdit(true));
    }, [handleShowMainForm]);

    useEffect(() => {
        handleShowMainFormEdit && (setShow(true), setData(editData));
    }, [editData, handleShowMainFormEdit]);

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
        campus,
        specialties,
        contracts,
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
        handleMultipleChange,
        urlFile,
        selectChangeHandlerPersonType,
    };
};

export default MainFormHook;
