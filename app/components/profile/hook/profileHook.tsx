import React, { useState } from "react";

type Props = {};

const ProfileHook = (props?: Props) => {
    const [key, setKey] = useState<any>("first");
    return { key, setKey };
};

export default ProfileHook;
