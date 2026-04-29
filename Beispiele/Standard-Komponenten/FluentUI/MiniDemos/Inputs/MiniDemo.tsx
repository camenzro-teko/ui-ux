import * as React from "react";
import { Field, Input } from "@fluentui/react-components";

export const InputsMiniDemo = () => {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 360 }}>
      <Field label="Standard" hint="placeholder + controlled value">
        <Input placeholder="Name eingeben" value="Max Mustermann" />
      </Field>

      <Field label="Passwort" validationMessage="Mindestens 8 Zeichen" validationState="warning">
        <Input type="password" placeholder="Passwort" />
      </Field>

      <Field label="Disabled">
        <Input disabled value="Nicht editierbar" />
      </Field>
    </div>
  );
};
