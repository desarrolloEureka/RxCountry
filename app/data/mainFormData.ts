import {
    DataFunctionaryObject,
    DataMainFormObject,
    DataPatientObject,
    DataProfessionalObject,
    DataCampusObject,
    DataSpecialtyObject,
    DataDiagnosticianObject,
    DataAgreementsObject,
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
    password: "",
    confirmPassword: "",
    // cardNumber: "",
    // medicalRecord: "",
    specialty: "",
    contract: "",
    rol: "",
    campus: "",
    area: "",
    urlPhoto: "",
    timestamp: new Date(),
    isActive: false,
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
    phone2: "",
    address: "",
    country: "",
    state: "",
    city: "",
    password: "",
    confirmPassword: "",
    rol: "Funcionario",
    campus: "",
    area: "",
    urlPhoto: "",
    timestamp: new Date(),
    isActive: false,
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
    password: "",
    confirmPassword: "",
    rol: "Paciente",
    urlPhoto: "",
    timestamp: new Date(),
    isActive: false,
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
    password: "",
    confirmPassword: "",
    // cardNumber: "",
    // medicalRecord: "",
    specialty: "",
    contract: "",
    rol: "Profesional",
    urlPhoto: "",
    timestamp: new Date(),
    isActive: false,
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

export const dataAgreementsObject = {
    uid: "",
    name: "",
    personType: "",
    discount: "",
    isActive: false,
    isDeleted: false,
} as DataAgreementsObject;

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
