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
    phone: any;
    phone2: any;
    address: string;
    country: string;
    state: any;
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
    timestamp: any;
    isActive: any;
    isDeleted: boolean;
}

export type DataFunctionaryObject = {
    iud: string;
    idType: string;
    id: string;
    name: string;
    lastName: string;
    phone: any;
    email: string;
    password: string;
    confirmPassword: string;
    rol: string;
    campus: string;
    area: string;
    urlPhoto: string;
    timestamp: any;
    isActive: any;
};

export type DataPatientObject = {
    iud: string;
    idType: string;
    id: string;
    name: string;
    lastName: string;
    birthDate: string;
    age: string;
    phone: any;
    phone2: any;
    address: string;
    country: string;
    state: any;
    city: string;
    email: string;
    password: string;
    confirmPassword: string;
    rol: string;
    urlPhoto: string;
    timestamp: any;
    isActive: any;
};

export type DataProfessionalObject = {
    iud: string;
    idType: string;
    id: string;
    name: string;
    lastName: string;
    phone: any;
    phone2: any;
    address: string;
    country: string;
    state: any;
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
    timestamp: any;
    isActive: any;
};

export type DataCampusObject = {
    iud: string;
    campusName: string;
    description: string;
    // phone: any;
    phone2: any;
    address: string;
    country: string;
    state: any;
    city: string;
    timestamp: any;
    isActive: any;
};

export interface showPasswordParams {
    showPassword: boolean;
    setShowPassword: (e: boolean) => void;
}
