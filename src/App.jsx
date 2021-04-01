import { Button } from "@material-ui/core";
import { Home } from "@material-ui/icons";

import { useTheme } from "@components/Theme";
import { useLayout } from "@components/Layout";

import { Layout, LayoutSidebar, LayoutMain, LayoutHeader, LayoutContent } from "@components/Layout";
import { Menu, MenuItem } from "@components/Menu";

const App = () => {
    const { onToggleTheme } = useTheme();
    const { onToggleSidebar } = useLayout();

    return (
        <Layout>
            <LayoutSidebar>
                <Menu>
                    <MenuItem path="/menu-item-1" icon={<Home />}>
                        Menu Item 1
                    </MenuItem>
                    <MenuItem path="/menu-item-2" icon={<Home />}>
                        Menu Item 2
                    </MenuItem>
                    <MenuItem path="/menu-item-3" icon={<Home />}>
                        Menu Item 3
                    </MenuItem>
                </Menu>
            </LayoutSidebar>
            <LayoutMain>
                <LayoutHeader>
                    <Button onClick={onToggleTheme}>Toggle theme</Button>
                    <Button onClick={onToggleSidebar}>Toggle Sidebar</Button>
                </LayoutHeader>
                <LayoutContent></LayoutContent>
            </LayoutMain>
        </Layout>
    );
};

export default App;
