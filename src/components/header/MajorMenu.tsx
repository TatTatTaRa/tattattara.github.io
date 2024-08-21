import styled from "styled-components";
import React from "react";

interface Props {
    menu: string;
    className?: string;
}

const MajorMenu = styled(({ menu, className }: Props) => (
    <div className={className}>
        <div>{menu}</div>
    </div>
))`
    position: relative;
    width: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8px 0;
    box-sizing: border-box;
    text-align: left;
    font-size: 17px;
    cursor: pointer;
    
    div {
        position: relative;
        font-weight: 600;
    }
    
    &:hover {
        border-bottom: 1px solid var(--main-color);
        
        div {
            color: var(--main-color);
        }
    }
`;

export default MajorMenu