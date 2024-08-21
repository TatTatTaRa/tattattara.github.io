import React from "react";
import {DropDown, Logo, MajorMenu, MiddleMenu, SubMenu} from "src/components/header/index";

const Header = () => {
    return (
        <>
            {/*<Logo logo={"LOGO"} />*/}
            {/*<MajorMenu menu={"히잉"} />*/}
            {/*<MiddleMenu menu={"미들메뉴"} />*/}
            {/*<SubMenu menu={"서브메뉴"} />*/}
            <DropDown menuList={["와아"]} />
        </>
    )
}

export default Header