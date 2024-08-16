//アルゴリズムはrsa-pss 鍵長は2048
import type {
  identityKey,
  identityKeyPrivate,
  identityKeyPub,
  Sign,
} from "../types.ts";
import { exportfromJWK } from "../import.ts";
import { digestMessage } from "../utils/hash.ts";
import { encodeBase64 } from "./base64.ts";
import { signMasterKey } from "./masterKey.ts";

export async function generateIdentityKey(
  masterKeyPub: CryptoKey,
  masterKeyPriv: CryptoKey,
): Promise<identityKey> {
  const keyPair = await crypto.subtle.generateKey(
    {
      name: "RSA-PSS",
      modulusLength: 2048,
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: "SHA-256",
    },
    true,
    ["sign", "verify"],
  );
  const publicKeyJWK = await exportfromJWK(keyPair.publicKey);
  const privateKeyJWK = await exportfromJWK(keyPair.privateKey);
  const signature = await signMasterKey(
    masterKeyPriv,
    new TextEncoder().encode(JSON.stringify(publicKeyJWK)),
  );
  const masterKeyJWK = await exportfromJWK(masterKeyPub);
  const masterKeyHash = await digestMessage(JSON.stringify(masterKeyJWK));
  const keyExpiration = new Date();
  keyExpiration.setFullYear(keyExpiration.getFullYear() + 1);
  const publicKey: identityKeyPub = {
    key: publicKeyJWK,
    keyType: "identityPub",
    keyExpiration: keyExpiration.toISOString(),
    sign: {
      signature: encodeBase64(signature),
      hashedPublicKeyHex: masterKeyHash,
      type: "master",
    },
    keyExpirationSign: {
      signature: encodeBase64(
        await signMasterKey(
          masterKeyPriv,
          new TextEncoder().encode(keyExpiration.toISOString()),
        ),
      ),
      hashedPublicKeyHex: masterKeyHash,
      type: "identity",
    },
  };
    const privateKey: identityKeyPrivate = {
        key: privateKeyJWK,
        keyType: "identityPrivate",
        keyExpiration: keyExpiration.toISOString(),
    };
    const result: identityKey = {
        public: publicKey,
        private: privateKey,
    };
    return result;
}

export function signIdentityKey(
  privateKey: CryptoKey,
  data: ArrayBuffer,
): Promise<ArrayBuffer> {
  return crypto.subtle.sign("RSA-PSS", privateKey, data);
}

export function verifyIdentityKey(
  publicKey: CryptoKey,
  signature: ArrayBuffer,
  data: ArrayBuffer,
): Promise<boolean> {
  return crypto.subtle.verify("RSA-PSS", publicKey, signature, data);
}
