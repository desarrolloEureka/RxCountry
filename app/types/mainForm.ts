export interface DataMainFormObject {
    uid: string;
    icon: string;
    idType: string;
    id: string;
    name: string;
    description: string;
    personType: string;
    discount: string;
    rut: string;
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
    // cardNumber: string;
    // medicalRecord: string;
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
    uid: string;
    idType: string;
    id: string;
    name: string;
    lastName: string;
    phone: any;
    email: string;
    phone2: any;
    address: string;
    country: string;
    state: any;
    city: string;
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
    uid: string;
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
    uid: string;
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
    // cardNumber: string;
    // medicalRecord: string;
    specialty: string;
    contract: string;
    rol: string;
    urlPhoto: string;
    timestamp: any;
    isActive: any;
};

export type DataCampusObject = {
    uid: string;
    name: string;
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

export type DataSpecialtyObject = {
    uid: string;
    icon: string;
    name: string;
    description: string;
    isActive: any;
};

export type DataAgreementsObject = {
    uid: string;
    name: string;
    personType: string;
    discount: string;
    isActive: any;
};

export type DataDiagnosticianObject = {
    uid: string;
    idType: string;
    id: string;
    name: string;
    phone: any;
    phone2: any;
    email: string;
    rut: string;
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
