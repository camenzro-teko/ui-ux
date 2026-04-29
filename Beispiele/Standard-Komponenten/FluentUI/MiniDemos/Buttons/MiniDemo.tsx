import * as React from "react";
import { Button } from "@fluentui/react-components";

export const ButtonsMiniDemo = () => {
  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
      <Button appearance="primary">Primary</Button>
      <Button appearance="secondary">Secondary</Button>
      <Button appearance="outline">Outline</Button>
      <Button size="small">Small</Button>
      <Button size="large">Large</Button>
      <Button disabled>Disabled</Button>
    </div>
  );
};
