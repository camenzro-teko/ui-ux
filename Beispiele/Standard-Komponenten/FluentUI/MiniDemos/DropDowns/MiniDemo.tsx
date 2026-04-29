import * as React from "react";
import { Dropdown, Option, Field } from "@fluentui/react-components";

export const DropDownsMiniDemo = () => {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 320 }}>
      <Field label="Semester" hint="defaultSelectedOptions + multiselect">
        <Dropdown defaultSelectedOptions={["WiSe"]} placeholder="Bitte wählen">
          <Option value="WiSe">Wintersemester</Option>
          <Option value="SoSe">Sommersemester</Option>
        </Dropdown>
      </Field>

      <Field label="Schwerpunkte (multi)">
        <Dropdown multiselect defaultSelectedOptions={["ui"]} placeholder="Mehrfachauswahl">
          <Option value="ui">UI Design</Option>
          <Option value="ux">UX Research</Option>
          <Option value="a11y">Barrierefreiheit</Option>
        </Dropdown>
      </Field>
    </div>
  );
};
