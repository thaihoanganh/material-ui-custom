import { createContext, useMemo, useState } from "react";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

export const ThemeContext = createContext();

const Theme = (props) => {
    const [state, setState] = useState({
        theme: "light",
    });

    const theme = createMuiTheme({
        palette: {
            type: state.theme,
        },
        props: {
            MuiButton: {
                disableElevation: true,
            },
        },
    });

    const onToggleTheme = () => {
        setState((prev) => {
            return { ...prev, theme: prev.theme === "light" ? "dark" : "light" };
        });
    };

    const exportValue = useMemo(() => {
        return {
            theme: state.theme,
            onToggleTheme: onToggleTheme,
        };
    }, [state]);

    return (
        <ThemeContext.Provider value={exportValue}>
            <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default Theme;
