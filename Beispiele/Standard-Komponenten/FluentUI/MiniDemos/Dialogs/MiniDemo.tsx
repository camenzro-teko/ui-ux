import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
} from "@fluentui/react-components";

export const DialogsMiniDemo = () => {
  return (
    <Dialog modalType="modal">
      <DialogTrigger disableButtonEnhancement>
        <Button appearance="primary">Dialog öffnen</Button>
      </DialogTrigger>

      <DialogSurface>
        <DialogBody>
          <DialogTitle>Änderungen speichern?</DialogTitle>
          <DialogContent>
            Dieses Beispiel zeigt `modalType`, `DialogTrigger` und Aktionen im Footer.
          </DialogContent>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">Abbrechen</Button>
            </DialogTrigger>
            <Button appearance="primary">Speichern</Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
