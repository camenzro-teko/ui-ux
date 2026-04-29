import * as React from "react";
import { tokens, makeStyles, shorthands, Text } from "@fluentui/react-components";

const useStyles = makeStyles({
  demoBox: {
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
    ...shorthands.padding(tokens.spacingVerticalL, tokens.spacingHorizontalL),
    ...shorthands.borderRadius(tokens.borderRadiusLarge),
    maxWidth: "380px",
  },
});

export const DesignStylesMiniDemo = () => {
  const styles = useStyles();

  return (
    <div className={styles.demoBox}>
      <Text weight="semibold">Design Tokens Demo</Text>
      <Text block>Zeigt Token-Nutzung für Farben, Spacing und Radius.</Text>
    </div>
  );
};
