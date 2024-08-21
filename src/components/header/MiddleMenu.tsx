import React from "react";
import styled from "styled-components";

interface Props {
    menu: string;
    className?: string;
}

const MiddleMenu = styled(({menu, className}: Props) => (
    <div className={className}>
        <b>{menu}</b>
    </div>
))`
    width: 180px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px;
    box-sizing: border-box;
    text-align: left;
    font-size: 15px;
    
    b {
        position: relative;
        color: var(--sub-color05);
    }
`

export default MiddleMenu