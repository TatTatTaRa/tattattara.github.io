import React from "react";
import styled from "styled-components";
import { MiddleMenu, SubMenu} from "src/components/header/index";

// interface MenuItem {
//     middle: string;
//     sub: string[];
// }

interface Props {
    menuList: string[];
    className?: string;
}

const DropDown = styled(({ menuList, className }:Props) => (
    <div className={className}>
        <div className="middle-menu-parent">
            <MiddleMenu menu={"메뉴1"}/>
        </div>
        <div className="middle-menu-parent">
            <MiddleMenu menu={"메뉴1"}/>
        </div>
        <div className="middle-menu-parent">
            <MiddleMenu menu={"메뉴1"}/>
        </div>
        <div className="middle-menu-parent">
            <MiddleMenu menu={"메뉴1"}/>
        </div>
    </div>
))`
    width: fit-content;
    position: relative;
    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.04);;
    border-radius: 5px;
    background-color: #fff;
    border: 1px solid var(--sub-color06);
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px 20px;
    gap: 15px;
    text-align: left;
    
    .middle-menu-parent {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
`

export default DropDown