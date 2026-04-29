import * as React from "react";
import { Button, Card, CardHeader, Text } from "@fluentui/react-components";

export const CardsMiniDemo = () => {
  return (
    <Card appearance="filled-alternative" size="small" style={{ maxWidth: 360 }}>
      <CardHeader
        header={<Text weight="semibold">Kurskarte: UI Grundlagen</Text>}
        description={<Text size={200}>appearance, size, Header + Actions</Text>}
        action={<Button size="small">Mehr</Button>}
      />
      <Text>
        Karten bündeln Inhalte mit optionalen Aktionen und klarer visueller Hierarchie.
      </Text>
    </Card>
  );
};
