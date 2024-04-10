export interface DataMainFormObject {
    iud: string;
    idType: string;
    id: string;
    campusName: string;
    name: string;
    description: string;
    lastName: string;
    birthDate: string;
    age: string;
    phone: number;
    phone2: number;
    address: string;
    country: string;
    state: number;
    city: string;
    email: string;
    password: string;
    confirmPassword: string;
    cardNumber: string;
    medicalRecord: string;
    specialty: string;
    contract: string;
    rol: string;
    campus: string;
    area: string;
    urlPhoto: string;
    timestamp: number;
    isActive: boolean;
}

export type DataFunctionaryObject = {
    iud: string;
    idType: string;
    id: string;
    name: string;
    lastName: string;
    phone: number;
    email: string;
    password: string;
    confirmPassword: string;
    rol: string;
    campus: string;
    area: string;
    urlPhoto: string;
    timestamp: number;
    isActive: boolean;
};

export type DataPatientObject = {
    iud: string;
    idType: string;
    id: string;
    name: string;
    lastName: string;
    birthDate: string;
    age: string;
    phone: number;
    phone2: number;
    address: string;
    country: string;
    state: number;
    city: string;
    email: string;
    password: string;
    confirmPassword: string;
    rol: string;
    urlPhoto: string;
    timestamp: number;
    isActive: boolean;
};

export type DataProfessionalObject = {
    iud: string;
    idType: string;
    id: string;
    name: string;
    lastName: string;
    phone: number;
    phone2: number;
    address: string;
    country: string;
    state: number;
    city: string;
    email: string;
    password: string;
    confirmPassword: string;
    cardNumber: string;
    medicalRecord: string;
    specialty: string;
    contract: string;
    rol: string;
    urlPhoto: string;
    timestamp: number;
    isActive: boolean;
};

export type DataCampusObject = {
    campusName: string;
    description: string;
    phone: number;
    phone2: number;
    address: string;
    country: string;
    state: number;
    city: string;
    timestamp: number;
    isActive: boolean;
};
