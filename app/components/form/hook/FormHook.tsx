import { useState } from "react";

export interface FormComponentProps {
    reference?: string;
}

const roles = [
    { value: "superAdmin", label: "Super Administrador" },
    { value: "admin", label: "Administrador" },
    { value: "functionary", label: "Funcionario" },
    { value: "professional", label: "Profesional" },
    { value: "patient", label: "Paciente" },
];

const idTypes = [
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

const FormHook = ({ reference }: FormComponentProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [files, setFiles] = useState<any>([]);
    const [selectedIdType, setSelectedIdType] = useState<any>(null);

    return {
        showPassword,
        setShowPassword,
        files,
        setFiles,
        selectedIdType,
        setSelectedIdType,
        roles,
        idTypes,
    };
};

export default FormHook;
