import * as React from "react";
import { Button, Field, Input } from "@fluentui/react-components";

export const BarrierefreiheitMiniDemo = () => {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 360 }}>
      <Field label="Suche" hint="Label + Hint verbessern Screenreader-Ausgabe">
        <Input aria-label="Suche nach Kursen" placeholder="Kurs suchen" />
      </Field>

      <Button aria-label="Kurs speichern" appearance="primary">
        Speichern
      </Button>
    </div>
  );
};
