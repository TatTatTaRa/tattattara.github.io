import React from "react";
import {DropDown, Logo, MajorMenu, MiddleMenu, SubMenu} from "src/components/header/index";

const MenuGroup = () => <><MiddleMenu menu={"메뉴1"}/><SubMenu icon={"아이콘"} menu={"섭메뉴1"} /></>

const Header = () => {
    return (
        <>
            {/*<Logo logo={"LOGO"} />*/}
            {/*<MajorMenu menu={"히잉"} />*/}
            {/*<MiddleMenu menu={"미들메뉴"} />*/}
            {/*<SubMenu menu={"서브메뉴"} />*/}
            <DropDown menuGroups={[MenuGroup]}/>
        </>
    )
}

export default Header