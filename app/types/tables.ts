import { DataObject } from './documents';

export interface UploadDataModalProps {
  onUploadDataModalPdf?: () => void;
  onUploadDataModalCsv?: () => void;
  onSalesModal?: () => void;
  data: any;
  tableData: setDataTable;
  columns: any;
  noHeader?: boolean;
  tableTitle?: string;
}
export interface UploadDataButtonModalProps {
  onUploadDataModalPdf?: () => void;
  onUploadDataModalCsv?: () => void;
  onSalesModal?: () => void;
}
export interface TableDataItemOld {
  id: string;
  SNO: number;
  NAME: string;
  LASTNAME: string;
  POSITION: string;
  DATE: string;
  SALARY: string;
  EMAIL: string;
}
export interface TableDataItem {
  supplier_code: string;
  code: string;
  supplier: string;
  buy_value: string;
  date_start: number;
  date_end: number;
  date_sold: number;
  date_redeemed: number;
  is_active: boolean;
  redeem: boolean;
  sold: boolean;
  sold_value: string;
  title: string;
  description: string;
  customer: string;
  url: string;
}

export interface DataTableComponentProps {
  componentTitle?: string;
  componentDescription?: string;
  tableTitle: string;
  reference: string;
}

export interface CSVRow {
  [key: string]: string;
}

export interface ExportProps {
  onExport: (value: string) => void;
}

export interface setDataTable {
  columns: any;
  data: DataObject[];
}

export interface ColumnsTable {
  name: string;
  selector: (row: TableDataItem) => [any];
  sortable: boolean;
}
