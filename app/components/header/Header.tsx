import { Tab } from "react-bootstrap";
import BannerMenu from "../bannerMenu/BannerMenu";
import HomeDash from "../dashBoard/homeDash/HomeDash";
import DataTableComponent from "../dataTable/DataTableComponent";
import HeaderContent from "./components/headerContent/HeaderContent";

const Header = ({ hamburger }: { hamburger?: boolean }) => {
    return (
        <Tab.Container defaultActiveKey="first">
            <HeaderContent />
            <Tab.Content>
                <Tab.Pane
                    className="tab-pane show  text-muted"
                    id="home1"
                    role="tabpanel"
                    eventKey="first"
                >
                    <HomeDash />
                </Tab.Pane>
                <Tab.Pane
                    className="tab-pane text-muted"
                    id="users"
                    role="tabpanel"
                    eventKey="second"
                >
                    <BannerMenu
                        seoTitle="Funcionarios"
                        title="Funcionarios"
                        item="Dashboard"
                        activeItem="Registro de Funcionarios"
                    />
                    <DataTableComponent
                        componentTitle="Tabla del Listado de Funcionarios."
                        componentDescription="En esta tabla se encuentran listados todos los usuarios para su administración."
                        tableTitle="Funcionarios"
                        reference="functionary"
                    />
                </Tab.Pane>
                <Tab.Pane
                    className="tab-pane text-muted"
                    id="patients"
                    role="tabpanel"
                    eventKey="third"
                >
                    <BannerMenu
                        seoTitle="Pacientes"
                        title="Pacientes"
                        item="Dashboard"
                        activeItem="Registro Pacientes"
                    />
                    <DataTableComponent
                        componentTitle="Tabla del Listado de Pacientes."
                        componentDescription="En esta tabla se encuentran listados todos los clientes para su administración."
                        tableTitle="Pacientes"
                        reference="patients"
                    />
                </Tab.Pane>
                <Tab.Pane
                    className="tab-pane text-muted"
                    id="professionals"
                    role="tabpanel"
                    eventKey="fourth"
                >
                    <BannerMenu
                        seoTitle="Medicos"
                        title="Medicos"
                        item="Dashboard"
                        activeItem="Registro profesionales"
                    />
                    <DataTableComponent
                        componentTitle="Tabla del Listado de Profesionales."
                        componentDescription="En esta tabla se encuentran listados todos los medicos para su administración."
                        tableTitle="Profesionales"
                        reference="professionals"
                    />
                </Tab.Pane>
                <Tab.Pane
                    className="tab-pane text-muted"
                    id="campus"
                    role="tabpanel"
                    eventKey="fifth"
                >
                    <BannerMenu
                        seoTitle="Sedes"
                        title="Sedes"
                        item="Dashboard"
                        activeItem="Sedes"
                    />
                    <DataTableComponent
                        componentTitle="Tabla del Listado de Sedes."
                        componentDescription="En esta tabla se encuentran las sedes disponibles."
                        tableTitle="Sedes"
                        reference="campus"
                    />
                </Tab.Pane>
            </Tab.Content>
        </Tab.Container>
    );
};

export default Header;
