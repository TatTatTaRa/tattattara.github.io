import React from "react";
import styled from "styled-components";

interface Props {
    menu: string;
    icon: string;
    className?: string;
}

const SubMenu = styled(({ menu, icon, className }:Props) => (
    <div className={className}>
        <span className="icon">{icon}</span>
        {/*<img className="icon" alt="" src="Icon.svg" />*/}
        <b>{menu}</b>
    </div>
))`
    width: 180px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    box-sizing: border-box;
    gap: 10px;
    text-align: left;
    font-size: 16px;
    cursor: pointer;
    
    .icon {
        position: relative;
    }

    b {
        position: relative;
    }
    
    &:hover {
        background-color: var(--sub-color04);
    }
`

export default SubMenu