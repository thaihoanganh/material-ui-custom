import { useContext } from "react";

import { ThemeContext } from "./Prividers";

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (context) {
        return context;
    } else {
        return {};
    }
};
