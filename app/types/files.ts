import { DataObject } from './documents';

export interface UploadFileProps {
  folder: string;
  fileName: string;
  file: any;
}

export interface saveFilesDocumentsQueryProps {
  code: string;
  record: any;
  data: DataObject;
}
