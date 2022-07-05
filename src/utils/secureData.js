import CryptoJS from 'crypto-js';

const KEY = 'admin123$';

export const encryptData = data => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), KEY).toString();
};

export const decryptData = data => {
  return CryptoJS.AES.decrypt(data, KEY).toString(CryptoJS.enc.Utf8);
};
