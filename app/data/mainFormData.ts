import {
    DataFunctionaryObject,
    DataMainFormObject,
    DataPatientObject,
    DataProfessionalObject,
    DataCampusObject,
    DataSpecialtyObject,
} from "@/types/mainForm";

export const dataMainFormObject = {
    uid: "",
    icon: "",
    idType: "",
    id: "",
    name: "",
    description: "",
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
    cardNumber: "",
    medicalRecord: "",
    specialty: "",
    contract: "",
    rol: "",
    campus: "",
    area: "",
    urlPhoto: "",
    timestamp: "",
    isActive: "",
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
    password: "",
    confirmPassword: "",
    rol: "Funcionario",
    campus: "",
    area: "",
    urlPhoto: "",
    timestamp: "",
    isActive: "",
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
    timestamp: "",
    isActive: "",
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
    cardNumber: "",
    medicalRecord: "",
    specialty: "",
    contract: "",
    rol: "Profesional",
    urlPhoto: "",
    timestamp: "",
    isActive: "",
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
    timestamp: "",
    isActive: "",
    isDeleted: false,
} as DataCampusObject;


export const dataSpecialtyObject = {
    uid: "",
    icon: "",
    name: "",
    description: "",
    isActive: "",
    isDeleted: false,
} as DataSpecialtyObject;
