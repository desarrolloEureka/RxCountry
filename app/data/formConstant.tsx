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
    value: state.id,
    label: state.departamento,
}));

export const getCities = (id: number) =>
    colombianCitiesData[id]?.ciudades?.map((city) => ({
        value: city,
        label: city,
    }));

export const specialties = [{ value: "Example", label: "Example" }];
export const contracts = [{ value: "Example", label: "Example" }];
export const status = [{ value: "Example", label: "Example" }];
export const campus = [{ value: "Example", label: "Example" }];
export const areas = [{ value: "Example", label: "Example" }];
