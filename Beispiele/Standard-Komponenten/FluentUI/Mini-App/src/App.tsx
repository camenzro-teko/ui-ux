import React, { useId, useState } from "react";
import {
  Body1,
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridRow,
  Field,
  Input,
  Select,
  Spinner,
  TableCellLayout,
  TableColumnDefinition,
  Toast,
  ToastBody,
  ToastTitle,
  Toaster,
  createTableColumn,
  useToastController,
} from "@fluentui/react-components";

type CustomerStatus = "Aktiv" | "Lead" | "Inaktiv";

type Customer = {
  id: number;
  name: string;
  email: string;
  status: CustomerStatus;
};

const statusOptions: CustomerStatus[] = ["Aktiv", "Lead", "Inaktiv"];

const initialCustomers: Customer[] = [
  { id: 1, name: "Anna Weber", email: "anna.weber@example.com", status: "Aktiv" },
  { id: 2, name: "Lukas Berg", email: "lukas.berg@example.com", status: "Lead" },
];

export const App = () => {
  const toasterId = useId();
  const { dispatchToast } = useToastController(toasterId);

  const [customers, setCustomers] = useState<Customer[]>(initialCustomers);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<CustomerStatus>("Lead");
  const [isSaving, setIsSaving] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState<Customer | null>(null);

  const canSave = name.trim().length > 1 && email.includes("@");

  const resetForm = () => {
    setName("");
    setEmail("");
    setStatus("Lead");
  };

  const handleSave = async () => {
    if (!canSave || isSaving) {
      return;
    }

    setIsSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 800));

    setCustomers((prev) => [
      {
        id: Date.now(),
        name: name.trim(),
        email: email.trim(),
        status,
      },
      ...prev,
    ]);
    resetForm();
    setIsSaving(false);

    dispatchToast(
      <Toast>
        <ToastTitle>Kunde gespeichert</ToastTitle>
        <ToastBody>{name.trim()} wurde erfolgreich angelegt.</ToastBody>
      </Toast>,
      { intent: "success" },
    );
  };

  const confirmDelete = () => {
    if (!customerToDelete) {
      return;
    }

    setCustomers((prev) => prev.filter((entry) => entry.id !== customerToDelete.id));
    dispatchToast(
      <Toast>
        <ToastTitle>Kunde geloescht</ToastTitle>
        <ToastBody>{customerToDelete.name} wurde entfernt.</ToastBody>
      </Toast>,
      { intent: "success" },
    );
    setCustomerToDelete(null);
  };

  const columns: TableColumnDefinition<Customer>[] = [
    createTableColumn<Customer>({
      columnId: "name",
      renderHeaderCell: () => "Name",
      renderCell: (item) => <TableCellLayout>{item.name}</TableCellLayout>,
    }),
    createTableColumn<Customer>({
      columnId: "email",
      renderHeaderCell: () => "E-Mail",
      renderCell: (item) => item.email,
    }),
    createTableColumn<Customer>({
      columnId: "status",
      renderHeaderCell: () => "Status",
      renderCell: (item) => item.status,
    }),
    createTableColumn<Customer>({
      columnId: "action",
      renderHeaderCell: () => "Aktion",
      renderCell: (item) => (
        <Dialog open={customerToDelete?.id === item.id}>
          <DialogTrigger disableButtonEnhancement>
            <Button appearance="subtle" onClick={() => setCustomerToDelete(item)}>
              Loeschen
            </Button>
          </DialogTrigger>
          <DialogSurface>
            <DialogBody>
              <DialogTitle>Eintrag wirklich loeschen?</DialogTitle>
              <DialogContent>{item.name} wird dauerhaft aus der Liste entfernt.</DialogContent>
              <DialogActions>
                <Button appearance="secondary" onClick={() => setCustomerToDelete(null)}>
                  Abbrechen
                </Button>
                <Button appearance="primary" onClick={confirmDelete}>
                  Loeschen bestaetigen
                </Button>
              </DialogActions>
            </DialogBody>
          </DialogSurface>
        </Dialog>
      ),
    }),
  ];

  return (
    <main className="page">
      <h1>Mini-App: Kundenverwaltung</h1>

      <section className="card">
        <h2>Neuen Kunden erfassen</h2>
        <div className="formGrid">
          <Field label="Name" required>
            <Input
              value={name}
              onChange={(_, data) => setName(data.value)}
              placeholder="z. B. Maria Klein"
            />
          </Field>

          <Field label="E-Mail" required hint={email && !email.includes("@") ? "Bitte gueltige E-Mail" : undefined}>
            <Input
              value={email}
              onChange={(_, data) => setEmail(data.value)}
              type="email"
              placeholder="name@firma.de"
            />
          </Field>

          <Field label="Status">
            <Select
              value={status}
              onChange={(event) => setStatus(event.target.value as CustomerStatus)}
            >
              {statusOptions.map((entry) => (
                <option key={entry} value={entry}>
                  {entry}
                </option>
              ))}
            </Select>
          </Field>
        </div>

        <div className="actionsRow">
          <Button appearance="primary" onClick={handleSave} disabled={!canSave || isSaving}>
            Speichern
          </Button>
          {isSaving ? <Spinner size="tiny" label="Speichern..." /> : null}
        </div>
      </section>

      <section className="card">
        <h2>Kundenliste</h2>
        <DataGrid items={customers} columns={columns} focusMode="composite" sortable={false}>
          <DataGridHeader>
            <DataGridRow>
              {({ renderHeaderCell }) => <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>}
            </DataGridRow>
          </DataGridHeader>
          <DataGridBody<Customer>>
            {({ item, rowId }) => (
              <DataGridRow<Customer> key={rowId}>
                {({ renderCell }) => <DataGridCell>{renderCell(item)}</DataGridCell>}
              </DataGridRow>
            )}
          </DataGridBody>
        </DataGrid>
      </section>

      <section className="card">
        <h2>UX-Entscheidungen</h2>
        <Body1>
          Speichern bleibt deaktiviert, bis sinnvolle Eingaben vorhanden sind. Das senkt Fehler fruehzeitig.
        </Body1>
        <Body1>
          Der Spinner zeigt asynchrone Arbeit transparent an. Der Toast bestaetigt erfolgreiche Aktionen ohne den Flow zu unterbrechen.
        </Body1>
        <Body1>
          Das Loeschen nutzt einen bestaetigenden Dialog, weil dieser Schritt nicht rueckgaengig ist.
        </Body1>
      </section>

      <Toaster toasterId={toasterId} />
    </main>
  );
};
