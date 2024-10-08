import {
    DataAgreementsObject,
    DataAreasObject,
    DataCampusObject,
    DataDiagnosesObject,
    DataDiagnosticianObject,
    DataFunctionaryObject,
    DataMainFormObject,
    DataPatientObject,
    DataProfessionalObject,
    DataSpecialtyObject,
} from "@/types/mainForm";

export const dataMainFormObject = {
    uid: "",
    icon: "",
    idType: "",
    id: "",
    name: "",
    description: "",
    personType: "",
    discount: "",
    rut: "",
    code: "",
    lastName: "",
    birthDate: "",
    age: "",
    phone: "",
    phone2: "",
    address: "",
    country: "",
    state: "",
    city: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    // cardNumber: "",
    // medicalRecord: "",
    specialty: "",
    contract: "",
    rol: "",
    campus: "",
    availableCampus: [],
    area: "",
    availableAreas: [],
    urlPhoto: "",
    timestamp: new Date(),
    isActive: true,
    isDeleted: false,
} as DataMainFormObject;

export const dataFunctionaryObject = {
    uid: "",
    idType: "",
    id: "",
    name: "",
    lastName: "",
    phone: "",
    email: "",
    confirmEmail: "",
    phone2: "",
    address: "",
    country: "",
    state: "",
    city: "",
    // password: "",
    // confirmPassword: "",
    rol: "",
    campus: "",
    area: "",
    urlPhoto: "",
    timestamp: new Date(),
    isActive: true,
    isDeleted: false,
} as DataFunctionaryObject;

export const dataPatientObject = {
    uid: "",
    idType: "",
    id: "",
    name: "",
    lastName: "",
    birthDate: "",
    age: "",
    phone: "",
    phone2: "",
    address: "",
    country: "",
    state: "",
    city: "",
    email: "",
    confirmEmail: "",
    // password: "",
    // confirmPassword: "",
    rol: "ShHQKRuKJfxHcV70XSvC",
    urlPhoto: "",
    timestamp: new Date(),
    isActive: true,
    isDeleted: false,
} as DataPatientObject;

export const dataProfessionalObject = {
    uid: "",
    idType: "",
    id: "",
    name: "",
    lastName: "",
    phone: "",
    phone2: "",
    address: "",
    country: "",
    state: "",
    city: "",
    email: "",
    confirmEmail: "",
    // password: "",
    // confirmPassword: "",
    // cardNumber: "",
    // medicalRecord: "",
    specialty: "",
    contract: "",
    rol: "ZWb0Zs42lnKOjetXH5lq",
    urlPhoto: "",
    timestamp: new Date(),
    isActive: true,
    isDeleted: false,
} as DataProfessionalObject;

export const dataCampusObject = {
    uid: "",
    name: "",
    description: "",
    // phone: "",
    phone2: "",
    address: "",
    country: "",
    state: "",
    city: "",
    availableAreas: [],
    timestamp: new Date(),
    isActive: false,
    isDeleted: false,
} as DataCampusObject;

export const dataSpecialtyObject = {
    uid: "",
    icon: "",
    name: "",
    description: "",
    isActive: false,
    isDeleted: false,
} as DataSpecialtyObject;

export const dataDiagnosesObject = {
    uid: "",
    name: "",
    code: "",
    isActive: false,
    isDeleted: false,
} as DataDiagnosesObject;

export const dataAgreementsObject = {
    uid: "",
    name: "",
    personType: "",
    discount: "",
    isActive: false,
    isDeleted: false,
} as DataAgreementsObject;

export const dataAreasObject = {
    uid: "",
    name: "",
    description: "",
    availableCampus: [],
    isActive: false,
    isDeleted: false,
} as DataAreasObject;

export const dataDiagnosticianObject = {
    uid: "",
    idType: "",
    id: "",
    name: "",
    rut: "",
    phone: "",
    phone2: "",
    email: "",
    address: "",
    country: "",
    state: "",
    city: "",
    isActive: false,
    isDeleted: false,
} as DataDiagnosticianObject;
