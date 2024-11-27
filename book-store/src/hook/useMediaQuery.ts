import {useEffect, useState} from "react";
import {getTheme} from "../style/theme";

export const useMediaQuery = () => {
    const [isMobile, setIsMobile] = useState(window.matchMedia(getTheme("light").mediaQuery.mobile).matches);

    useEffect(() => {
        const isMediaQuery = window.matchMedia(getTheme("light").mediaQuery.mobile);

        setIsMobile(isMediaQuery.matches)
    }, []);

    return { isMobile };
}
