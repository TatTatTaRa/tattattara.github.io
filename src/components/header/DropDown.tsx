import React from "react";
import styled from "styled-components";
import {v4 as uuidv4} from "uuid";

interface Props {
    menuGroups: React.ComponentType<any>[];
    className?: string;
}

const DropDown = styled(({ menuGroups, className }:Props) => (
    <div className={className}>
        {menuGroups.map((MenuGroup) => (
            <div className="middle-menu-parent" key={uuidv4()}>
                <MenuGroup/>
            </div>
        ))}
    </div>
))`
    width: fit-content;
    max-width: 610px;
    position: relative;
    box-shadow: var(--card-shadow);
    border-radius: var(--card);
    background-color: #fff;
    outline: 1px solid var(--sub-color06);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs) 20px;
    gap: 15px;
    text-align: left;
    font-size: 16px;

    .middle-menu-parent {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
`

export default DropDown