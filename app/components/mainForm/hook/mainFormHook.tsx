"use client";
import {
    dataAgreementsObject,
    dataAreasObject,
    dataCampusObject,
    dataDiagnosesObject,
    dataDiagnosticianObject,
    dataFunctionaryObject,
    dataMainFormObject,
    dataPatientObject,
    dataProfessionalObject,
    dataSpecialtyObject,
} from "@/data/mainFormData";
// import { getDocumentRefById } from "@/firebase/Documents";
// import { registerFirebase } from "@/firebase/user";
import useAuth from "@/firebase/auth";
import { addUser } from "@/firebase/user";
import { getAllAgreementsQuery } from "@/queries/AgreementsQueries";
import { getAllAreasQuery } from "@/queries/AreasQueries";
import { getAllCampusQuery } from "@/queries/campusQueries";
import {
    getAllDocumentsQuery,
    getDocumentReference,
    saveAreasOnCampusQuery,
    saveDataDocumentsQuery,
    saveEditDataDocumentsQuery,
    saveFilesDocuments,
} from "@/queries/documentsQueries";
import { getAllRolesQuery } from "@/queries/RolesQueries";
import { getAllSpecialtiesQuery } from "@/queries/SpecialtiesQueries";
import { AgreementSelector } from "@/types/agreements";
import { AreasSelector } from "@/types/areas";
import { CampusSelector } from "@/types/campus";
import { ErrorDataForm } from "@/types/documents";
import { LocalVariable } from "@/types/global";
import { ModalParamsMainForm } from "@/types/modals";
import { RolesSelector } from "@/types/roles";
import { SpecialtySelector } from "@/types/specialty";
import { handleSendWelcomeEmail } from "lib/brevo/handlers/actions";
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
    const { accessTokenUser } = useAuth();

    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [data, setData] = useState(dataMainFormObject);
    const [errorValid, setErrorValid] = useState("");
    const [errorForm, setErrorForm] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [itemExist, setItemExist] = useState(false);
    const [errorDataUpload, setErrorDataUpload] = useState<ErrorDataForm[]>();
    const [showPassword, setShowPassword] = useState(false);
    const [files, setFiles] = useState<SetStateAction<any>[]>([]);
    // const [urlPhoto, setUrlPhoto] = useState<string>("");
    const [campus, setCampus] = useState<CampusSelector[]>();
    const [specialties, setSpecialties] = useState<SpecialtySelector[]>();
    const [contracts, setContract] = useState<AgreementSelector[]>();
    const [areas, setAreas] = useState<AreasSelector[]>();
    const [roles, setRoles] = useState<RolesSelector[]>();
    const [diagnostician, setDiagnostician] = useState<any[]>();

    const [selectedIdType, setSelectedIdType] = useState<any>(null);
    const [selectedState, setSelectedState] = useState<any>(null);
    const [selectedCountry, setSelectedCountry] = useState<any>(null);
    const [selectedCity, setSelectedCity] = useState<any>(null);

    const [selectedSpecialty, setSelectedSpecialty] = useState<any>(null);
    const [selectedContract, setSelectedContract] = useState<any>(null);
    const [selectedStatus, setSelectedStatus] = useState<any>(null);
    const [selectedRol, setSelectedRol] = useState<any>(null);
    const [selectedCampus, setSelectedCampus] = useState<any>(null);
    const [selectedAvailableCampus, setSelectedAvailableCampus] =
        useState<any>(null);
    const [selectedArea, setSelectedArea] = useState<any>(null);

    const theme = localStorage.getItem("@theme");
    const themeParsed = theme ? (JSON.parse(theme) as LocalVariable) : null;

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

    const areasByCampus = (idCampus: string) => {
        const filteredIdAreas = campus?.find(
            (item) => item.value === idCampus,
        )?.areas;

        const result = areas?.filter((area) =>
            filteredIdAreas?.includes(area.value),
        );
        return result;
    };

    const getRolesByReference = () => {
        const noFunctionaryRolesIds: string[] = [
            "1cxJ0a8uCX7OTesEHT2G",
            "FHSly0jguw1lwYSj8EHV",
            "ShHQKRuKJfxHcV70XSvC",
            "ZWb0Zs42lnKOjetXH5lq",
        ];
        // const referenceList: string[] = ["","",""]
        if (reference === "functionary") {
            const rolesFiltered = roles?.filter(
                (rol) => !noFunctionaryRolesIds.includes(rol.value),
            );
            return rolesFiltered;
        }
        // else {
        //     const rolesFiltered = roles?.filter(
        //         (rol) => !noFunctionaryRolesIds.includes(rol.value),
        //     );
        // }
        return roles;
    };

    const changeHandler = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value });

        const diagnosticianFound = diagnostician?.find(
            (user) => user.id === e.target.value,
        );

        reference === "diagnostician" &&
            e.target.name === "id" &&
            diagnosticianFound &&
            // console.log("Este usuario ya existe!!");
            (setErrorValid(
                "¡Este documento ya está vinculado con un usuario existente!",
            ),
            setItemExist(true));

        const campusFound = campus?.find(
            (item) =>
                item.label.toLocaleLowerCase() ===
                e.target.value.toLocaleLowerCase(),
        );
        const specialtiesFound = specialties?.find(
            (item) =>
                item.label.toLocaleLowerCase() ===
                e.target.value.toLocaleLowerCase(),
        );
        const areasFound = areas?.find(
            (item) =>
                item.label.toLocaleLowerCase() ===
                e.target.value.toLocaleLowerCase(),
        );

        (reference === "areas" ||
            reference === "campus" ||
            reference === "specialties") &&
            e.target.name === "name" &&
            (campusFound || specialtiesFound || areasFound) &&
            (setErrorValid(`¡Este nombre ya existe: -> ${e.target.value} !`),
            setItemExist(true));
    };

    const dateChangeHandler = (e: any) => {
        const dateFormat = moment(e.target.value).format("YYYY-MM-DD");
        setData({
            ...data,
            [e.target.name]: dateFormat,
            ["age"]: `${calculateAge(dateFormat)}`,
        });
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
    const selectChangeHandlerRol = (e: any) => {
        setData({ ...data, ["rol"]: e?.value });
        setSelectedRol(e);
    };
    const selectChangeHandlerCampus = (e: any) => {
        setData({ ...data, ["campus"]: e?.value });
        setSelectedCampus(e);
    };

    const selectChangeHandlerAvailableCampus = (e: any) => {
        setData({
            ...data,
            ["availableCampus"]: e?.map((item: any) => item.value),
        });
        setSelectedAvailableCampus(e);
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
    const phoneChangeHandler = (e: any) => {
        setData({ ...data, ["phone"]: e });
    };
    const phoneTwoChangeHandler = (e: any) => {
        setData({ ...data, ["phone2"]: e });
    };

    const uploadHandle = async () => {
        let newData = {};
        const error: ErrorDataForm[] = [];
        const documentRef: any = getDocumentReference(reference);

        if (reference === "functionary") {
            const currentDataObject = { ...dataFunctionaryObject };

            handleShowMainFormEdit
                ? (currentDataObject.uid = data.uid)
                : (currentDataObject.uid = documentRef.id);
            currentDataObject.idType = data.idType;
            currentDataObject.id = data.id;
            currentDataObject.name = data.name;
            currentDataObject.lastName = data.lastName;
            currentDataObject.phone = data.phone;
            currentDataObject.email = data.email;
            currentDataObject.phone2 = data.phone2;
            currentDataObject.address = data.address;
            currentDataObject.country = data.country;
            currentDataObject.state = data.state;
            currentDataObject.city = data.city;
            currentDataObject.rol = data.rol;
            // currentDataObject.password = data.password;
            // currentDataObject.confirmPassword = data.confirmPassword;
            currentDataObject.campus = data.campus;
            currentDataObject.area = data.area;
            currentDataObject.isActive = data.isActive;

            for (const record of files) {
                const urlName = record.name.split(".")[0];
                await saveFilesDocuments({
                    urlName,
                    record,
                    uid: handleShowMainFormEdit ? data.uid : documentRef.id,
                    reference,
                })
                    .then((result) => {
                        currentDataObject.urlPhoto = result;
                        // error.push(...result);
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

            handleShowMainFormEdit
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
            // currentDataObject.password = data.password;
            // currentDataObject.confirmPassword = data.confirmPassword;
            currentDataObject.isActive = data.isActive;

            for (const record of files) {
                const urlName = record.name.split(".")[0];
                await saveFilesDocuments({
                    urlName,
                    record,
                    uid: handleShowMainFormEdit ? data.uid : documentRef.id,
                    reference,
                })
                    .then((result) => {
                        currentDataObject.urlPhoto = result;
                        // error.push(...result);
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

            handleShowMainFormEdit
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
            // currentDataObject.password = data.password;
            // currentDataObject.confirmPassword = data.confirmPassword;
            currentDataObject.specialty = data.specialty;
            currentDataObject.contract = data.contract;
            currentDataObject.isActive = data.isActive;
            currentDataObject.urlPhoto = data.urlPhoto;

            for (const record of files) {
                const urlName = record.name.split(".")[0];
                await saveFilesDocuments({
                    urlName,
                    record,
                    uid: handleShowMainFormEdit ? data.uid : documentRef.id,
                    reference,
                })
                    .then((result) => {
                        currentDataObject.urlPhoto = result;
                        // error.push(...result);
                    })
                    .catch((err) => {
                        error.push({ success: false, urlName });
                        // console.log(error);
                    });
            }

            newData = { ...currentDataObject };
        }

        if (reference === "campus") {
            const currentDataObject = { ...dataCampusObject };

            handleShowMainFormEdit
                ? (currentDataObject.uid = data.uid)
                : (currentDataObject.uid = documentRef.id);
            currentDataObject.name = data.name;
            currentDataObject.description = data.description;
            currentDataObject.phone2 = data.phone2;
            currentDataObject.address = data.address;
            currentDataObject.country = data.country;
            currentDataObject.state = data.state;
            currentDataObject.city = data.city;
            currentDataObject.availableAreas = data.availableAreas;
            currentDataObject.isActive = data.isActive;

            newData = { ...currentDataObject };
        }

        if (reference === "specialties") {
            const currentDataObject = { ...dataSpecialtyObject };

            handleShowMainFormEdit
                ? (currentDataObject.uid = data.uid)
                : (currentDataObject.uid = documentRef.id);
            currentDataObject.name = data.name;
            currentDataObject.description = data.description;
            currentDataObject.icon = data.icon;
            currentDataObject.isActive = data.isActive;

            newData = { ...currentDataObject };
        }

        if (reference === "diagnoses") {
            const currentDataObject = { ...dataDiagnosesObject };

            handleShowMainFormEdit
                ? (currentDataObject.uid = data.uid)
                : (currentDataObject.uid = documentRef.id);
            currentDataObject.name = data.name;
            currentDataObject.code = data.code;
            currentDataObject.isActive = data.isActive;

            newData = { ...currentDataObject };
        }

        if (reference === "diagnostician") {
            const currentDataObject = { ...dataDiagnosticianObject };

            handleShowMainFormEdit
                ? (currentDataObject.uid = data.uid)
                : (currentDataObject.uid = documentRef.id);
            currentDataObject.idType = data.idType;
            currentDataObject.id = data.id;
            currentDataObject.name = data.name;
            currentDataObject.rut = data.rut;
            currentDataObject.phone = data.phone;
            currentDataObject.phone2 = data.phone2;
            currentDataObject.email = data.email;
            currentDataObject.address = data.address;
            currentDataObject.country = data.country;
            currentDataObject.state = data.state;
            currentDataObject.city = data.city;
            currentDataObject.isActive = data.isActive;

            newData = { ...currentDataObject };
        }

        if (reference === "agreements") {
            const currentDataObject = { ...dataAgreementsObject };

            handleShowMainFormEdit
                ? (currentDataObject.uid = data.uid)
                : (currentDataObject.uid = documentRef.id);
            currentDataObject.name = data.name;
            currentDataObject.personType = data.personType;
            currentDataObject.discount = data.discount;
            currentDataObject.isActive = data.isActive;

            newData = { ...currentDataObject };
        }

        if (reference === "areas") {
            const currentDataObject = { ...dataAreasObject };

            handleShowMainFormEdit
                ? (currentDataObject.uid = data.uid)
                : (currentDataObject.uid = documentRef.id);
            currentDataObject.name = data.name;
            currentDataObject.description = data.description;
            currentDataObject.availableCampus = data.availableCampus;
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
              })
                  .then(() => {
                      if (reference === "areas") {
                          if (
                              editData.availableCampus.length >
                                  data.availableCampus.length ||
                              !_.isEqual(
                                  editData.availableCampus,
                                  data.availableCampus.length,
                              )
                          ) {
                              const currentData = _.difference(
                                  editData.availableCampus,
                                  data.availableCampus,
                              );
                              //   console.log("currentData", currentData);

                              currentData.forEach(async (itemData: string) => {
                                  await saveAreasOnCampusQuery({
                                      id: itemData,
                                      refArea: data.uid,
                                      data:
                                          campus &&
                                          campus.find(
                                              (item) => item.value === itemData,
                                          )?.areas,
                                      reference: "campus",
                                      refExist: true,
                                  });
                              });

                              data.availableCampus.forEach(
                                  async (itemData: string) => {
                                      await saveAreasOnCampusQuery({
                                          id: itemData,
                                          refArea: data.uid,
                                          data:
                                              campus &&
                                              campus.find(
                                                  (item) =>
                                                      item.value === itemData,
                                              )?.areas,
                                          reference: "campus",
                                      });
                                  },
                              );
                          } else {
                              data.availableCampus.forEach(
                                  async (itemData: string) => {
                                      await saveAreasOnCampusQuery({
                                          id: itemData,
                                          refArea: data.uid,
                                          data:
                                              campus &&
                                              campus.find(
                                                  (item) =>
                                                      item.value === itemData,
                                              )?.areas,
                                          reference: "campus",
                                      });
                                  },
                              );
                          }
                      }
                  })
                  .then(confirmAlert)
            : reference === "professionals" ||
              reference === "patients" ||
              reference === "functionary"
            ? await addUser({
                  email: data.email,
                  password: data.id,
                  accessTokenUser,
                  uid: documentRef.id,
              }).then(async () => {
                  await saveDataDocumentsQuery({
                      documentRef,
                      data: newData,
                  }).then(async () => {
                      confirmAlert();
                      await handleSendWelcomeEmail(data);
                  });
              })
            : await saveDataDocumentsQuery({
                  documentRef,
                  data: newData,
              })
                  .then(() => {
                      if (reference === "areas") {
                          data.availableCampus.forEach(async (element) => {
                              await saveAreasOnCampusQuery({
                                  id: element,
                                  refArea: documentRef.id,
                                  data:
                                      campus &&
                                      campus.find(
                                          (item) => item.value === element,
                                      )?.areas,
                                  reference: "campus",
                              });
                          });
                      }
                  })
                  .then(confirmAlert);

        return [...error];
    };

    const functionaryVal =
        reference === "functionary" &&
        data.idType &&
        data.id &&
        data.name &&
        data.lastName &&
        data.phone &&
        data.email &&
        data.confirmEmail &&
        data.rol &&
        // data.password &&
        // data.confirmPassword &&
        data.campus &&
        data.area;

    const campusVal = !itemExist && reference === "campus" && data.name;

    const diagnosticianVal =
        reference === "diagnostician" &&
        data.idType &&
        data.id &&
        data.name &&
        data.rut &&
        data.phone &&
        !itemExist &&
        data.email;

    const agreementsVal =
        reference === "agreements" && data.name && data.personType;

    const diagnosesVal = reference === "diagnoses" && data.name && data.code;

    const areasVal =
        !itemExist &&
        reference === "areas" &&
        data.name &&
        data.availableCampus.length > 0;

    const specialtyVal =
        !itemExist && reference === "specialties" && data.name.length > 1;

    const professionalsVal =
        reference === "professionals" &&
        data.idType &&
        data.id &&
        data.name &&
        data.lastName &&
        data.phone &&
        data.confirmEmail &&
        data.email;
    // data.password &&
    // data.confirmPassword;

    const patientVal =
        reference === "patients" &&
        data.idType &&
        data.id &&
        data.name &&
        data.lastName &&
        // data.birthDate &&
        // data.age &&
        data.phone &&
        data.confirmEmail &&
        data.email;
    // data.password &&
    // data.confirmPassword;

    // const passValidation = handleShowMainFormEdit
    //     ? data.confirmPassword === data.password
    //     : data.confirmPassword === data.password &&
    //       data.password &&
    //       data.confirmPassword;

    const emailValidation = handleShowMainFormEdit
        ? data.confirmEmail === data.email
        : data.confirmEmail === data.email && data.email && data.confirmEmail;

    // console.log("data", data);
    // console.log("editData", editData);

    const saveAlert = async (callbackFc: () => Promise<ErrorDataForm[]>) => {
        const result: ErrorDataForm[] = [];
        Swal.fire({
            position: "center",
            title: `Guardando...`,
            text: "Por favor espera",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        try {
            const dataUpload = await callbackFc();
            dataUpload.forEach((item) => {
                if (!item.success) {
                    result.push(item);
                }
            });

            Swal.fire({
                icon: "success",
                title: "Éxito",
                text: "La información se guardó con éxito",
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: `Ocurrió un error: ${error}`,
            });
        }
        return result;
    };

    const confirmSaveAlert = () => {
        Swal.fire({
            title: "¿Confirma el envío de la información?",
            text: "Verifique la información, que todo esté correcto",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#1f2937",
            confirmButtonText: "¡Sí, enviar!",
            cancelButtonText: "¡No, verificar!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                await saveAlert(uploadHandle).then(handleClose);
            }
        });
    };

    const handleSendForm = async (e?: any) => {
        // console.log(data);
        if (
            areasVal ||
            campusVal ||
            specialtyVal ||
            diagnosticianVal ||
            diagnosesVal ||
            agreementsVal ||
            ((functionaryVal || professionalsVal || patientVal) &&
                emailValidation)
        ) {
            e.preventDefault();
            e.stopPropagation();
            console.log("Entró");
            setIsLoading(true);
            confirmSaveAlert();
            setIsLoading(false);
        } else {
            e.preventDefault();
            e.stopPropagation();
            // setErrorForm(true);
            (reference === "functionary" ||
                reference === "professionals" ||
                reference === "patients") &&
                !emailValidation &&
                setErrorEmail(true);
            console.log("Falló");
            reference === "diagnostician" &&
                itemExist &&
                setErrorValid(
                    `¡Ya existe un usuario con ese documento: -> ${data.id}!`,
                );
            (reference === "areas" ||
                reference === "campus" ||
                reference === "specialties") &&
                itemExist &&
                setErrorValid(
                    `¡Ya existe un registro con ese nombre: -> ${data.name}!`,
                );
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
        // setUrlPhoto("");
        clearSelectFields();
        setItemExist(false);
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
            const agreementResult = await getAllAgreementsQuery();
            agreementResult && setContract(agreementResult);
            const areasResult = await getAllAreasQuery();
            areasResult && setAreas(areasResult);
            const rolesResult = await getAllRolesQuery();
            rolesResult && setRoles(rolesResult);
            const diagnosticianResult = await getAllDocumentsQuery(
                "diagnostician",
            );
            diagnosticianResult && setDiagnostician(diagnosticianResult);
        }
    }, [handleShowMainForm, handleShowMainFormEdit]);

    useEffect(() => {
        getAllSelectOptions();
    }, [getAllSelectOptions]);

    useEffect(() => {
        handleShowMainForm && (setShow(true), setIsEdit(true));
    }, [handleShowMainForm]);

    useEffect(() => {
        if (handleShowMainFormEdit) {
            setShow(true);
            if (
                reference === "patients" ||
                reference === "professionals" ||
                reference === "functionary"
            ) {
                const newData = {
                    ...editData,
                    confirmEmail: editData.email,
                };
                setData(newData);
                return;
            }

            setData(editData);
        }
    }, [editData, handleShowMainFormEdit, reference]);

    return {
        show,
        isLoading,
        errorForm,
        // errorDataUpload,
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
        selectedAvailableCampus,
        selectedArea,
        files,
        showPassword,
        isEdit,
        errorEmail,
        campus,
        specialties,
        contracts,
        areas,
        roles: getRolesByReference(),
        theme: themeParsed?.dataThemeMode,
        setErrorEmail,
        setErrorValid,
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
        selectChangeHandlerRol,
        selectChangeHandlerCampus,
        selectChangeHandlerAvailableCampus,
        selectChangeHandlerArea,
        selectChangeHandlerStatus,
        selectChangeHandlerContract,
        selectChangeHandlerSpecialty,
        selectChangeHandlerCity,
        selectChangeHandlerCountry,
        selectChangeHandlerState,
        phoneChangeHandler,
        phoneTwoChangeHandler,
        findValue,
        handleEditForm,
        handleMultipleChange,
        selectChangeHandlerPersonType,
        areasByCampus,
    };
};

export default MainFormHook;
