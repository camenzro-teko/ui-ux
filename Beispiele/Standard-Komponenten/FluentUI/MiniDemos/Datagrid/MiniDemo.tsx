import * as React from "react";
import {
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridRow,
  DataGridSelectionCell,
  TableCellLayout,
  TableColumnDefinition,
  createTableColumn,
} from "@fluentui/react-components";

type Student = { id: number; name: string; kurs: string };

const items: Student[] = [
  { id: 1, name: "Anna", kurs: "UX Basics" },
  { id: 2, name: "Mehmet", kurs: "FluentUI" },
];

const columns: TableColumnDefinition<Student>[] = [
  createTableColumn<Student>({ columnId: "name", renderHeaderCell: () => "Name", renderCell: (item) => <TableCellLayout>{item.name}</TableCellLayout> }),
  createTableColumn<Student>({ columnId: "kurs", renderHeaderCell: () => "Kurs", renderCell: (item) => <TableCellLayout>{item.kurs}</TableCellLayout> }),
];

export const DatagridMiniDemo = () => {
  return (
    <DataGrid items={items} columns={columns} selectionMode="multiselect" sortable>
      <DataGridHeader>
        <DataGridRow selectionCell={{ "aria-label": "Alle auswählen" }}>
          {({ renderHeaderCell }) => <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>}
        </DataGridRow>
      </DataGridHeader>
      <DataGridBody<Student>>
        {({ item, rowId }) => (
          <DataGridRow<Student> key={rowId} selectionCell={{ "aria-label": "Zeile auswählen" }}>
            {({ renderCell }) => <DataGridCell>{renderCell(item)}</DataGridCell>}
          </DataGridRow>
        )}
      </DataGridBody>
    </DataGrid>
  );
};
