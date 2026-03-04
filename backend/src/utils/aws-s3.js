// src/utils/aws-s3.js
import crypto from "crypto";
import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { env } from "../config/env.js";

export const s3 = new S3Client({
  region: env.awsRegion,
  credentials: {
    accessKeyId: env.awsAccessKeyId,
    secretAccessKey: env.awsSecretAccessKey,
  },
});

export function buildS3Key({ folder = env.s3Prefix || "products/", ext }) {
  const id = crypto.randomUUID();
  const cleanFolder = folder.endsWith("/") ? folder : `${folder}/`;
  return `${cleanFolder}${id}.${ext}`;
}

export async function createPresignedPutUrl({ key, contentType, expiresIn = 60 }) {
  const cmd = new PutObjectCommand({
    Bucket: env.s3Bucket,
    Key: key,
    ContentType: contentType,
  });

  const uploadUrl = await getSignedUrl(s3, cmd, { expiresIn });
  return uploadUrl;
}

export async function createPresignedGetUrl({ key, expiresIn = 300 }) {
  const cmd = new GetObjectCommand({
    Bucket: env.s3Bucket,
    Key: key,
  });

  const downloadUrl = await getSignedUrl(s3, cmd, { expiresIn });
  return downloadUrl;
}
