import { Storage } from "aws-amplify";

export async function s3Upload(file) {
  const filename = `${Date.now()}-${file.name}`;

  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type,
  });

  return stored.key;
}

export async function deleteS3Object(file) {
  const access = { level: "private" };

  const removed = await Storage.vault.remove(file, access);

  return removed.key;
}