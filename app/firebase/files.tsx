import { UploadFileProps } from '@/types/files';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

// Create a root reference
const storage = getStorage();
const storageRef = (folder: string, fileName: string) =>
  ref(storage, `coupons/${folder}/${fileName}`);

export const uploadFiles = async ({
  folder,
  fileName,
  file,
}: UploadFileProps) => {
  // 'file' comes from the Blob or File API
  return uploadBytes(storageRef(folder, fileName), file);
};
