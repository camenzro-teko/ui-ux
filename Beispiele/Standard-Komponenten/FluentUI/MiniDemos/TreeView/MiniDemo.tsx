import * as React from "react";
import { Tree, TreeItem, TreeItemLayout } from "@fluentui/react-components";

export const TreeViewMiniDemo = () => {
  return (
    <Tree aria-label="Projektstruktur" defaultOpenItems={["src", "components"]}>
      <TreeItem itemType="branch" value="src">
        <TreeItemLayout>src</TreeItemLayout>
        <Tree>
          <TreeItem itemType="branch" value="components">
            <TreeItemLayout>components</TreeItemLayout>
            <Tree>
              <TreeItem itemType="leaf" value="button">
                <TreeItemLayout>Button.tsx</TreeItemLayout>
              </TreeItem>
              <TreeItem itemType="leaf" value="card">
                <TreeItemLayout>Card.tsx</TreeItemLayout>
              </TreeItem>
            </Tree>
          </TreeItem>
          <TreeItem itemType="leaf" value="app">
            <TreeItemLayout>App.tsx</TreeItemLayout>
          </TreeItem>
          <TreeItem itemType="leaf" value="styles">
            <TreeItemLayout>styles.css</TreeItemLayout>
          </TreeItem>
        </Tree>
      </TreeItem>
      <TreeItem itemType="branch" value="assets">
        <TreeItemLayout>assets</TreeItemLayout>
        <Tree>
          <TreeItem itemType="leaf" value="logo">
            <TreeItemLayout>logo.svg</TreeItemLayout>
          </TreeItem>
        </Tree>
      </TreeItem>
      <TreeItem itemType="leaf" value="package">
        <TreeItemLayout>package.json</TreeItemLayout>
      </TreeItem>
    </Tree>
  );
};
