import * as React from "react";
import { Button, Field, Input } from "@fluentui/react-components";

export const FormsMiniDemo = () => {
  return (
    <form style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <Field label="E-Mail" required hint="required + type=email">
        <Input type="email" placeholder="name@beispiel.de" />
      </Field>

      <Field label="Matrikelnummer" validationState="none">
        <Input placeholder="z. B. 1234567" />
      </Field>

      <Button appearance="primary" type="submit">
        Absenden
      </Button>
    </form>
  );
};
