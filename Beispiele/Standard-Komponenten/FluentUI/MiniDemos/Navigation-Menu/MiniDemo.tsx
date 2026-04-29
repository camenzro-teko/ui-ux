import * as React from "react";
import { Menu, MenuItem, MenuList, MenuPopover, MenuTrigger, Button } from "@fluentui/react-components";

export const NavigationMenuMiniDemo = () => {
  return (
    <Menu positioning="below-end">
      <MenuTrigger disableButtonEnhancement>
        <Button appearance="secondary">Menü öffnen</Button>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <MenuItem>Dashboard</MenuItem>
          <MenuItem>Kurse</MenuItem>
          <MenuItem disabled>Einstellungen</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
