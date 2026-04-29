import * as React from "react";
import { Tab, TabList } from "@fluentui/react-components";

export const TabsMiniDemo = () => {
  const [selectedValue, setSelectedValue] = React.useState("overview");

  return (
    <TabList
      selectedValue={selectedValue}
      onTabSelect={(_, data) => setSelectedValue(String(data.value))}
      size="medium"
      appearance="subtle"
    >
      <Tab value="overview">Übersicht</Tab>
      <Tab value="details">Details</Tab>
      <Tab value="settings" disabled>
        Einstellungen (disabled)
      </Tab>
    </TabList>
  );
};
