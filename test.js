// // // const { scrypt, randomFill, createCipheriv } = import("node:crypto");
// // const crypto = require("crypto");
// // const { Buffer } = require("node:buffer");
// // const encryptionDatas = require("./encryptionData.json");

// // const ENCRYPT = require("./encrypt");

// // var fs = require("fs");

// // class en {
// //   constructor() {
// //     this.algorithm = "aes-192-cbc";
// //     this.password = "Password used to generate key";
// //     this.key = crypto.scryptSync(this.password, "salt", 24);
// //     this.iv = Buffer.alloc(16, 0, "hex");
// //     this.encrypted = "";
// //     this.decrypted = "";
// //   }
// //   encrypting(data) {
// //     var writeStream = fs.createWriteStream("encryptionData.json");
// //     const s = {
// //       data: {
// //         algorithm: this.algorithm,
// //         password: this.password,
// //         key: this.key,
// //         iv: this.iv,
// //       },
// //     };

// //     // const d = JSON.stringify(JSON.parse(s));

// //     writeStream.write(JSON.stringify(s));

// //     writeStream.end();
// //     const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);

// //     cipher.setEncoding("hex");

// //     cipher.on("data", (chunk) => (this.encrypted += chunk));
// //     cipher.on("end", () => {
// //       console.log(this.encrypted, this.iv, this.key);
// //     });

// //     cipher.write(data);
// //     cipher.end();
// //   }

// //   async decrypting() {
// //     const dt = await JSON.parse(JSON.stringify(encryptionDatas));
// //     const bufferKey = Buffer.from(dt.data.key);
// //     const bufferIv = Buffer.from(dt.data.iv);

// //     console.log(dt.data.key, "na the key be this");
// //     console.log(Buffer.from(dt.data.key), "na the  buffer key be this");
// //     console.log(Buffer.from(dt.data.iv), "na the  buffer iv be this");

// //     const decipher = crypto.createDecipheriv(
// //       dt.data.algorithm,
// //       bufferKey,
// //       bufferIv
// //     );

// //     decipher.on("readable", () => {
// //       let chunk;
// //       while (null !== (chunk = decipher.read())) {
// //         this.decrypted += chunk.toString("utf8");
// //       }
// //     });
// //     decipher.on("end", () => {
// //       console.log(this.decrypted);
// //       // Prints: some clear text data
// //     });

// //     // Encrypted with same algorithm, key and iv.

// //     decipher.write(this.encrypted, "hex");
// //     decipher.end();
// //   }
// // }
// // const dhd = new en();
// // console.log(
// //   ("<------------------->",
// //   dhd.decrypted,
// //   "<------------------->",
// //   dhd.encrypted)
// // );

// // dhd.encrypting("this is a testimony");
// // dhd.decrypting();
// // setTimeout(function () {
// //   console.log((dhd.decrypted, "<------------------->", dhd.decrypted));
// // }, 2000);
// // setTimeout(function () {
// //   console.log((dhd.encrypted, "<------------------->", dhd.encrypted));
// // }, 5000);
// // // async function nn() {
// // //   console.log(JSON.stringify(encryptionDatas));

// // //   console.log(
// // //     (await JSON.parse(JSON.stringify(encryptionDatas)), "<------------------->")
// // //   );
// // // }
// // // // nn();
// // const decipher = new ENCRYPT();
// // decipher.decrypting("dcbd6f4c3dbd40113682c3ab1b10fd20");
// // console.log(decipher.decrypted);

// // const { createHmac } = require("crypto");
// // const da = Date.now();
// // const secret = Math.random().toString(36).substring(2, 15);
// // const d = da + secret;

// // console.log(secret);
// // console.log(da);
// // console.log(d);

// // const hash = createHmac("sha256", "hello")
// //   .update("this is going to be the longest time of the season")
// //   .digest("hex");
// // console.log(hash);

// // const { pbkdf2Sync, randomBytes } = require("crypto");

// // // const key = pbkdf2Sync("secret", "salt", 100000, 64, "sha512");
// // // console.log(key.toString("hex"));

// // const sal = Math.random(Math.random() * 100).toString(30);
// // const k = randomBytes(32).toString("hex");
// // console.log(sal);
// // console.log(k);

// // const { scrypt, randomFill, createCipheriv } = import("node:crypto");
// const crypto = require("crypto");
// const { Buffer } = require("node:buffer");

// var fs = require("fs");

// class ENCRYPT {
//   algorithm = "aes-192-cbc";
//   password = "Password used to generate key";
//   salt = "this is the salt used to hash the crypto sync";
//   iv = Buffer.alloc(16, 0, "hex");
//   constructor(data) {
//     if (data) {
//       const { password, salt, iv } = data;

//       this.password = password;
//       this.salt = salt;
//       this.iv = iv;

//       // if (password) {
//       //   this.password = password;
//       // } else {
//       //   this.password = "Password used to generate key";
//       // }

//       // if (salt) {
//       //   this.salt = salt;
//       // } else {
//       //   this.salt = "this is the salt used to hash the crypto sync";
//       // }
//       // if (iv) {
//       //   this.iv = iv;
//       // } else {
//       //   this.iv = Buffer.alloc(16, 0, "hex");
//       // }
//     }
//     this.key = crypto.scryptSync(this.password, this.salt, 24);
//     this.encrypted = "";
//     this.decrypted = "";
//   }
//   encrypting(myData) {
//     var writeStream = fs.createWriteStream("encryptionKey.json");
//     const s = {
//       data: {
//         salt: this.salt,
//         algorithm: this.algorithm,
//         password: this.password,
//         key: this.key,
//         iv: this.iv,
//       },
//     };

//     // const d = JSON.stringify(JSON.parse(s));

//     writeStream.write(JSON.stringify(s));

//     writeStream.end();
//     const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);

//     cipher.setEncoding("hex");

//     cipher.on("data", (chunk) => (this.encrypted += chunk));
//     cipher.on("end", () => {
//       //   console.log(this.encrypted, this.iv, this.key);
//     });

//     cipher.write(myData);
//     cipher.end();
//   }

//   async decrypting(data) {
//     const encryptionDatas = require("./encryptionKey.json");
//     const dt = await JSON.parse(JSON.stringify(encryptionDatas));
//     const bufferKey = Buffer.from(dt.data.key);
//     const bufferIv = Buffer.from(dt.data.iv);

//     // console.log(dt.data.key, "na the key be this");
//     // console.log(Buffer.from(dt.data.key), "na the  buffer key be this");
//     // console.log(Buffer.from(dt.data.iv), "na the  buffer iv be this");

//     const decipher = crypto.createDecipheriv(
//       dt.data.algorithm,
//       bufferKey,
//       bufferIv
//     );

//     decipher.on("readable", () => {
//       let chunk;
//       while (null !== (chunk = decipher.read())) {
//         this.decrypted += chunk.toString("utf8");
//       }
//     });
//     decipher.on("end", () => {
//       console.log(this.decrypted);
//     });
//     decipher.write(data, "hex");
//     decipher.end();
//   }
// }

// const c = new ENCRYPT();

// c.encrypting("hello");
// console.log(c.encrypted);
// console.log(crypto.scryptSync("this.password", "this.salt", 24));

const data = [
  {
    name: "derek",
    job: "developer",
  },
  {
    name: "friday",
    job: "developer",
  },
  {
    name: "david",
    job: "developer",
  },
  {
    name: "emmanuel",
    job: "developer",
  },
];

const we = {
  school: "UNIBEN",
  course: "Engineering",
  data: data,
};

// console.log(we);
