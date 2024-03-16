import { DataObject } from './coupons';

export interface UploadFileProps {
  folder: string;
  fileName: string;
  file: any;
}

export interface saveFilesCouponsQueryProps {
  code: string;
  record: any;
  data: DataObject;
}
