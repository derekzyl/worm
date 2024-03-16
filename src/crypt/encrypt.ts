// const { scrypt, randomFill, createCipheriv } = import("node:crypto");

import { createCipheriv, createDecipheriv, scryptSync } from "crypto";

var fs = require("fs");

export class ENCRYPT {
  password = "Password used to generate key";
  salt = "this is the salt used to hash the crypto sync yrtytyuuy8yuyu9yo8yuio";
  iv = Buffer.alloc(16, 0, "hex");
  algorithm = "aes-192-cbc";
  key: any;
  encrypted: string;
  decrypted: string;
  constructor(data?: { password: string; salt: string; iv: Buffer }) {
    if (data) {
      const { password, salt, iv } = data;

      this.password = password;
      this.salt = salt;
      this.iv = iv;

      // if (password) {
      //   this.password = password;
      // } else {
      //   this.password = "Password used to generate key";
      // }

      // if (salt) {
      //   this.salt = salt;
      // } else {
      //   this.salt = "this is the salt used to hash the crypto sync";
      // }
      // if (iv) {
      //   this.iv = iv;
      // } else {
      //   this.iv = Buffer.alloc(16, 0, "hex");
      // }
    }
    this.key = scryptSync(this.password, this.salt, 24);
    this.encrypted = "";
    this.decrypted = "";
  }
  encrypting(myData: string) {
    var writeStream = fs.createWriteStream("encryptionKey.json");
    const s = {
      data: {
        salt: this.salt,
        algorithm: this.algorithm,
        password: this.password,
        key: this.key,
        iv: this.iv,
      },
    };

    // const d = JSON.stringify(JSON.parse(s));

    writeStream.write(JSON.stringify(s));

    writeStream.end();
    const cipher = createCipheriv(this.algorithm, this.key, this.iv);

    cipher.setEncoding("hex");

    cipher.on("data", (chunk) => (this.encrypted += chunk));
    cipher.on("end", () => {
      //   console.log(this.encrypted, this.iv, this.key);
    });

    cipher.write(myData);
    cipher.end();
  }

  async decrypting(data: any) {
    const encryptionDatas = require("./encryptionKey.json");
    const dt = await JSON.parse(JSON.stringify(encryptionDatas));
    const bufferKey = Buffer.from(dt.data.key);
    const bufferIv = Buffer.from(dt.data.iv);

    // console.log(dt.data.key, "na the key be this");
    // console.log(Buffer.from(dt.data.key), "na the  buffer key be this");
    // console.log(Buffer.from(dt.data.iv), "na the  buffer iv be this");

    const decipher = createDecipheriv(dt.data.algorithm, bufferKey, bufferIv);

    decipher.on("readable", () => {
      let chunk;
      while (null !== (chunk = decipher.read())) {
        this.decrypted += chunk.toString("utf8");
      }
    });
    decipher.on("end", () => {
      // console.log(this.decrypted);
    });
    decipher.write(data, "hex");
    decipher.end();
  }
}
