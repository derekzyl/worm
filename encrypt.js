// const { scrypt, randomFill, createCipheriv } = import("node:crypto");
const crypto = require("crypto");
const { Buffer } = require("node:buffer");

var fs = require("fs");

module.exports = class ENCRYPT {
  constructor(data) {
    const {password, salt, iv} = data
    this.algorithm = "aes-192-cbc";

    if (password) {
      this.password = password;
    } else {
      this.password = "Password used to generate key";
    }

    if (salt) {
      this.salt = salt;
    } else {
      this.salt = "this is the salt used to hash the crypto sync";
    }
    if (iv) {
      this.iv = iv;
    } else {
      this.iv = Buffer.alloc(16, 0, "hex");
    }
    this.key = crypto.scryptSync(this.password, this.salt, 24);
    this.encrypted = "";
    this.decrypted = "";
  }
  encrypting(myData) {
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
    const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);

    cipher.setEncoding("hex");

    cipher.on("data", (chunk) => (this.encrypted += chunk));
    cipher.on("end", () => {
      //   console.log(this.encrypted, this.iv, this.key);
    });

    cipher.write(myData);
    cipher.end();
  }

  async decrypting(data) {
    const encryptionDatas = require("./encryptionKey.json");
    const dt = await JSON.parse(JSON.stringify(encryptionDatas));
    const bufferKey = Buffer.from(dt.data.key);
    const bufferIv = Buffer.from(dt.data.iv);

    // console.log(dt.data.key, "na the key be this");
    // console.log(Buffer.from(dt.data.key), "na the  buffer key be this");
    // console.log(Buffer.from(dt.data.iv), "na the  buffer iv be this");

    const decipher = crypto.createDecipheriv(
      dt.data.algorithm,
      bufferKey,
      bufferIv
    );

    decipher.on("readable", () => {
      let chunk;
      while (null !== (chunk = decipher.read())) {
        this.decrypted += chunk.toString("utf8");
      }
    });
    decipher.on("end", () => {
      console.log(this.decrypted);
    });
    decipher.write(data, "hex");
    decipher.end();
  }
};
