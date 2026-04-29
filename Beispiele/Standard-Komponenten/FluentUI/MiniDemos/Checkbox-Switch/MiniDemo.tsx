import * as React from "react";
import { Checkbox, Switch } from "@fluentui/react-components";

export const CheckboxSwitchMiniDemo = () => {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <Checkbox label="Ich akzeptiere die Bedingungen" defaultChecked />
      <Checkbox label="Deaktivierte Option" disabled />

      <Switch label="Dark Mode" defaultChecked />
      <Switch label="Benachrichtigungen" disabled />
    </div>
  );
};
