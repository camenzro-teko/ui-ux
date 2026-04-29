import * as React from "react";
import { Button, Toaster, Toast, ToastBody, ToastTitle, useId, useToastController } from "@fluentui/react-components";

export const ToastFeedbackMiniDemo = () => {
  const toasterId = useId("toaster");
  const { dispatchToast } = useToastController(toasterId);

  return (
    <>
      <Toaster toasterId={toasterId} position="top-end" />
      <Button
        appearance="primary"
        onClick={() =>
          dispatchToast(
            <Toast>
              <ToastTitle>Erfolgreich gespeichert</ToastTitle>
              <ToastBody>Die Komponente zeigt Positionierung und Feedback-Zustand.</ToastBody>
            </Toast>,
            { intent: "success", timeout: 2500 },
          )
        }
      >
        Toast anzeigen
      </Button>
    </>
  );
};
