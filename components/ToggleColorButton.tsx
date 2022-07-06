import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";
import HeaderButton from "./SocialButton";

export default function ToggleColorButton() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <HeaderButton onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </HeaderButton>
    )

}
