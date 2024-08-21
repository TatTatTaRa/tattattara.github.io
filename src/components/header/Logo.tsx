import React from "react";

interface Props {
    logo: string;
    className?: string;
}

const Logo = ({ logo, className }: Props) => {
    return (
        <div className={className}>{logo}</div>
    )
}

export default Logo
