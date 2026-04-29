import * as React from "react";
import { Spinner } from "@fluentui/react-components";

export const SpinnerLoadingMiniDemo = () => {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <Spinner label="Lade Kursdaten..." size="medium" />
      <Spinner labelPosition="after" label="Dateiupload..." size="small" />
    </div>
  );
};
