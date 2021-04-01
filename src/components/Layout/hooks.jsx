import { useContext } from "react";

import { LayoutContext } from "./Providers";

export const useLayout = () => {
    const context = useContext(LayoutContext);

    if (context) {
        return context;
    } else {
        return {};
    }
};
