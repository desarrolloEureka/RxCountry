import { colombianCitiesData } from "@/data/colombianCitiesData";

export const roles = [
    { value: "superAdmin", label: "Super Administrador" },
    { value: "admin", label: "Administrador" },
    { value: "functionary", label: "Funcionario" },
    { value: "professional", label: "Profesional" },
    { value: "patient", label: "Paciente" },
];

export const idTypes = [
    { value: "CC", label: "CC" },
    { value: "RC", label: "RC" },
    { value: "TI", label: "TI" },
    { value: "CN", label: "CN" },
    { value: "CD", label: "CD" },
    { value: "CE", label: "CE" },
    { value: "PA", label: "PA" },
    { value: "SC", label: "SC" },
    { value: "PE", label: "PE" },
    { value: "AS", label: "AS" },
    { value: "MS", label: "MS" },
];

export const countries = [{ value: "CO", label: "Colombia" }];

export const ColombianStates = colombianCitiesData.map((state) => ({
    value: state.id + 1,
    label: state.departamento,
}));

export const getCities = (id: number) =>
    colombianCitiesData[id - 1].ciudades.map((city) => ({
        value: city,
        label: city,
    }));

export const specialties = [{ value: "Example", label: "Example" }];
export const contracts = [{ value: "Example", label: "Example" }];
export const isActive = [
    { value: true, label: "Disponible" },
    { value: false, label: "Inactivo" },
];
export const campus = [
    { value: "marly", label: "Marly" },
    { value: "santaBarbara", label: "Santa Barbara" },
    { value: "country", label: "Country" },
];
export const areas = [
    { value: "admin", label: "Administrativo" },
    { value: "despacho", label: "Despachos" },
    { value: "diagnosticos", label: "Diagnósticos" },
    { value: "escanerModelos", label: "Escáner Modelos" },
    { value: "modelos", label: "Modelos" },
    { value: "radiología", label: "Radiología" },
    { value: "recepcionCaja", label: "Recepción/Caja" },
];
