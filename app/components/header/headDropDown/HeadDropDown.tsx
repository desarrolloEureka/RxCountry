import { Dropdown, Form, InputGroup, Nav } from "react-bootstrap";
import {
    image_flag1,
    image_flag2,
    image_flag3,
    image_flag4,
    image_flag5,
} from "@/globals/images";
import SelectOptions, { HeaderDropDownProps, Notify } from "@/data/header";
import { useState } from "react";
import SimpleBar from "simplebar-react";
import Link from "next/link";
import { LocalVariable } from "@/types/global";

const HeadDropDown = (params: HeaderDropDownProps) => {
    const [notifications, setNotifications] = useState([...Notify]);
    // console.log('localVariable>>>', localVariable);
    const handleToggleDark = () => {
        const localVariable = localStorage.getItem("@theme");
        console.log("localVariable", localVariable);

        // console.log('localVariableClone', localVariableClone);
        if (localVariable) {
            const localVariableClone = {
                ...JSON.parse(localVariable),
            } as LocalVariable;

            if (localVariableClone.dataThemeMode === "light") {
                localVariableClone.dataThemeMode = "dark";
            } else {
                localVariableClone.dataThemeMode = "light";
            }
            document.documentElement.setAttribute(
                "data-theme-mode",
                localVariableClone.dataThemeMode,
            );

            console.log("localVariableClone", localVariableClone);
            localStorage.setItem("@theme", JSON.stringify(localVariableClone));
        }
    };

    return (
        <>
            {params.dark && (
                <Dropdown className="header-element header-theme-mode">
                    <Nav.Link
                        className="header-link layout-setting"
                        onClick={handleToggleDark}
                    >
                        <span className="dark-layout">
                            <i className="fe fe-sun header-link-icon"></i>
                        </span>
                        <span className="light-layout">
                            <i className="fe fe-moon header-link-icon lh-2"></i>
                        </span>
                    </Nav.Link>
                </Dropdown>
            )}
            {!params.multiLingual && (
                <Dropdown className="header-element country-selector">
                    <Dropdown.Toggle
                        className="nav-link icon country-Flag p-0"
                        variant=""
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <circle cx="256" cy="256" r="256" fill="#f0f0f0" />
                            <g fill="#0052b4">
                                <path d="M52.92 100.142c-20.109 26.163-35.272 56.318-44.101 89.077h133.178L52.92 100.142zM503.181 189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075 89.076h133.176zM8.819 322.784c8.83 32.758 23.993 62.913 44.101 89.075l89.074-89.075H8.819zM411.858 52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177l89.076-89.075zM100.142 459.079c26.163 20.109 56.318 35.272 89.076 44.102V370.005l-89.076 89.074zM189.217 8.819c-32.758 8.83-62.913 23.993-89.075 44.101l89.075 89.075V8.819zM322.783 503.181c32.758-8.83 62.913-23.993 89.075-44.101l-89.075-89.075v133.176zM370.005 322.784l89.075 89.076c20.108-26.162 35.272-56.318 44.101-89.076H370.005z" />
                            </g>
                            <g fill="#d80027">
                                <path d="M509.833 222.609H289.392V2.167A258.556 258.556 0 00256 0c-11.319 0-22.461.744-33.391 2.167v220.441H2.167A258.556 258.556 0 000 256c0 11.319.744 22.461 2.167 33.391h220.441v220.442a258.35 258.35 0 0066.783 0V289.392h220.442A258.533 258.533 0 00512 256c0-11.317-.744-22.461-2.167-33.391z" />
                                <path d="M322.783 322.784L437.019 437.02a256.636 256.636 0 0015.048-16.435l-97.802-97.802h-31.482v.001zM189.217 322.784h-.002L74.98 437.019a256.636 256.636 0 0016.435 15.048l97.802-97.804v-31.479zM189.217 189.219v-.002L74.981 74.98a256.636 256.636 0 00-15.048 16.435l97.803 97.803h31.481zM322.783 189.219L437.02 74.981a256.328 256.328 0 00-16.435-15.047l-97.802 97.803v31.482z" />
                            </g>
                        </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                        className="dropdown-menu"
                        style={{ margin: "0px" }}
                    >
                        <Dropdown.Item className="d-flex ">
                            <span className="avatar  me-3 align-self-center bg-transparent">
                                <img src={image_flag1.src} alt="img" />
                            </span>
                            <div className="d-flex">
                                <span className="mt-1">French</span>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item className="d-flex">
                            <span className="avatar  me-3 align-self-center bg-transparent">
                                <img src={image_flag2.src} alt="img" />
                            </span>
                            <div className="d-flex">
                                <span className="mt-1">Germany</span>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item className="d-flex">
                            <span className="avatar me-3 align-self-center bg-transparent">
                                <img src={image_flag3.src} alt="img" />
                            </span>
                            <div className="d-flex">
                                <span className="mt-1">Italy</span>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item className="d-flex">
                            <span className="avatar me-3 align-self-center bg-transparent">
                                <img src={image_flag4.src} alt="img" />
                            </span>
                            <div className="d-flex">
                                <span className="mt-1">Russia</span>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item className="d-flex">
                            <span className="avatar  me-3 align-self-center bg-transparent">
                                <img src={image_flag5.src} alt="img" />
                            </span>
                            <div className="d-flex">
                                <span className="mt-1">spain</span>
                            </div>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            )}
            {params.fulScreen && (
                <div className="header-element header-fullscreen d-xl-flex d-none">
                    <div
                        className="header-link d-xl-block d-none"
                        // onClick={Fullscreen}
                    >
                        <i className="fe fe-maximize full-screen-open header-link-icon"></i>
                    </div>
                </div>
            )}
            <Dropdown className="header-search">
                <Dropdown.Toggle variant="default" className="px-0">
                    <i className="fe fe-search header-icons fs-18 px-2 lh-5"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu className="p-2">
                    <div className="mb-1">
                        <SelectOptions />
                    </div>
                    <InputGroup className="">
                        <Form.Control
                            type="search"
                            className="form-control rounded-0"
                            placeholder="Search for anything..."
                        />
                        <InputGroup.Text className="btn search-btn ms-auto d-flex">
                            <i className="fe fe-search"></i>
                        </InputGroup.Text>
                    </InputGroup>
                </Dropdown.Menu>
            </Dropdown>
            {params.notifications && (
                <Dropdown className="header-element notifications-dropdown">
                    <Dropdown.Toggle
                        href="#!"
                        className="header-link"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        id="messageDropdown"
                        aria-expanded="false"
                        variant="default"
                    >
                        <i className="fe fe-bell header-link-icon"></i>
                        <span
                            className="badge bg-secondary rounded-pill header-icon-badge pulse pulse-secondary"
                            id="notification-icon-badge"
                        >{`${notifications.length} `}</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu
                        className="main-header-dropdown  dropdown-menu-end"
                        data-popper-placement="none"
                    >
                        <div className="p-3">
                            <div className="d-flex align-items-center justify-content-between">
                                <p className="mb-0 fs-17 fw-semibold">
                                    Notifications
                                </p>
                                <span
                                    className="badge bg-secondary rounded-pill"
                                    id="notifiation-data"
                                >{`${notifications.length} unread`}</span>
                            </div>
                        </div>
                        <div className="dropdown-divider"></div>
                        {/* <SimpleBar> */}
                        <SimpleBar
                            className="list-unstyled mb-0"
                            id="header-notification-scroll"
                        >
                            {notifications.map((notification, id) => (
                                <Dropdown.Item
                                    as="li"
                                    className="dropdown-item"
                                    key={id}
                                >
                                    <div className="d-flex align-items-start">
                                        <div className="pe-2">
                                            <span
                                                className={notification.online}
                                            >
                                                <img
                                                    src={notification.image}
                                                    alt="img"
                                                />
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-0">
                                                    <Link
                                                        href="/components/pages/notifications-list/"
                                                        className="text-dark"
                                                    >
                                                        {" "}
                                                        {notification.text1}
                                                        <strong>
                                                            {" "}
                                                            {notification.text2}
                                                        </strong>
                                                        {notification.text3}{" "}
                                                    </Link>
                                                </p>
                                                <span className="text-muted fw-normal fs-12 header-notification-text">
                                                    {notification.status}{" "}
                                                    <span
                                                        className={
                                                            notification.bg
                                                        }
                                                    >
                                                        {notification.proid}
                                                    </span>
                                                    {notification.date}
                                                </span>
                                            </div>
                                            <div>
                                                <Link
                                                    href="#!"
                                                    className="min-w-fit-content text-muted me-1 dropdown-item-close1"
                                                    // onClick={() => handleRemove1(id)}
                                                >
                                                    <i className="ti ti-x fs-16"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Dropdown.Item>
                            ))}
                        </SimpleBar>
                        {/* </SimpleBar> */}
                        <div
                            className={`p-3 empty-header-item1 border-top ${
                                notifications.length === 0
                                    ? "d-none"
                                    : "d-block"
                            }`}
                        >
                            <div className="d-grid">
                                <Link
                                    href="/components/pages/notifications-list/"
                                    className="btn btn-primary"
                                >
                                    View All
                                </Link>
                            </div>
                        </div>
                        <div
                            className={`p-5 empty-item1 ${
                                notifications.length === 0
                                    ? "d-block"
                                    : "d-none"
                            }`}
                        >
                            <div className="text-center">
                                <span className="avatar avatar-xl avatar-rounded bg-secondary-transparent">
                                    <i className="ri-notification-off-line fs-2"></i>
                                </span>
                                <h6 className="fw-semibold mt-3">
                                    No New Notifications
                                </h6>
                            </div>
                        </div>
                    </Dropdown.Menu>
                </Dropdown>
            )}
            {/* <Dropdown className="header-element logout-selector">
                <Dropdown.Toggle
                    className="nav-link icon country-Flag p-0"
                    variant=""
                    onClick={params.logOut}
                >
                    <svg
                        width="800px"
                        height="800px"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="#555"
                            d="M10.2392344,0 C13.3845587,0 16.2966635,1.39466883 18.2279685,3.74426305 C18.4595621,4.02601608 18.4134356,4.43777922 18.124942,4.66396176 C17.8364485,4.89014431 17.4148346,4.84509553 17.183241,4.5633425 C15.5035716,2.51988396 12.9739849,1.30841121 10.2392344,1.30841121 C5.32416443,1.30841121 1.33971292,5.19976806 1.33971292,10 C1.33971292,14.8002319 5.32416443,18.6915888 10.2392344,18.6915888 C13.0144533,18.6915888 15.5774656,17.443711 17.2546848,15.3485857 C17.4825482,15.0639465 17.9035339,15.0136047 18.1949827,15.2361442 C18.4864315,15.4586837 18.5379776,15.8698333 18.3101142,16.1544725 C16.3816305,18.5634688 13.4311435,20 10.2392344,20 C4.58426141,20 8.8817842e-14,15.5228475 8.8817842e-14,10 C8.8817842e-14,4.4771525 4.58426141,0 10.2392344,0 Z M17.0978642,7.15999289 L19.804493,9.86662172 C20.0660882,10.1282169 20.071043,10.5473918 19.8155599,10.802875 L17.17217,13.4462648 C16.9166868,13.701748 16.497512,13.6967932 16.2359168,13.435198 C15.9743215,13.1736028 15.9693667,12.7544279 16.2248499,12.4989447 L17.7715361,10.9515085 L7.46239261,10.9518011 C7.0924411,10.9518011 6.79253615,10.6589032 6.79253615,10.2975954 C6.79253615,9.93628766 7.0924411,9.64338984 7.46239261,9.64338984 L17.7305361,9.64250854 L16.1726778,8.08517933 C15.9110825,7.82358411 15.9061278,7.40440925 16.1616109,7.14892607 C16.4170941,6.89344289 16.836269,6.89839767 17.0978642,7.15999289 Z"
                        />
                    </svg>
                </Dropdown.Toggle>
            </Dropdown> */}
        </>
    );
};

export default HeadDropDown;
