const { pbkdf2Sync, randomBytes } = require("crypto");

class PASSWORD {
  salt = randomBytes(32).toString("hex");
  length = 16;
  digest = "sha512";

  constructor(data) {
    if (data) {
      const { salt, length, digest } = data;

      if (!salt) {
        console.warn(
          "\x1b[33m%s\x1b[0m",
          `hi there!!! \n please kindly insert your salt as this is used to generate a secure password but
        if you like the randomly generated key kindly save it and use it as  your key param
        -----------------------------------------------------------------------
        |                                                                     |
        |                                                                     | 
        |  ${this.salt}   |
        |                                                                     |
        |                                                                     |
        -----------------------------------------------------------------------
        `
        );
      }

      if (salt) {
        this.salt = salt;
      }
      if (length) {
        this.length = length;
      }
      if (digest) {
        this.digest = digest;
      }
    }
    console.log(this.salt, this.length, this.digest);
  }

  hashPassword(password) {
    console.log(password, "indsid hash pwrd");

    const key = pbkdf2Sync(
      password,
      this.salt,
      100000,
      this.length,
      this.digest
    );
    return key.toString("hex");
    // console.log(key.toString("hex"));
  }
  comparePassword(currentPassword, hashedPassword) {
    const key = pbkdf2Sync(
      currentPassword,
      this.salt,
      100000,
      this.length,
      this.digest
    );
    const stringKey = key.toString("hex");
    if (stringKey === hashedPassword) return true;
    else return false;
  }
}

const nn = new PASSWORD({
  salt: "10aaff135fd8ce200486aecf8285a2d582f0fd68d67f283fcf0ace54714e9f4f",
  length: 256,
});
const h =
  "8a4a9d042f3b014df04dc3a90b2a492019b9884aba94e506a97782574bc4e146734f90720a73114e513d13b479a501705225e4b6633cd49a18e54606533cbb54cf53f04d0314bdfcd25c76d943c789d595130051c8488a1eb8fa057d631bf8d4491359147757bb4a60927ebaa273453c8a28ffe46361cc5f517cb1d33e3d40b2883fd937f0449bbaded0de98149b235637d2fa29e6fdbfaa17c0974dc6cecc3d609ae02e914f9d2f1d26e8ec0e3160c048765097c2e598f06f7e9b0dc9222dd31aefb33a6cecda65abbdd704eba14c45168af8eaacad43e8082ce0bdb5205282d724c2c29e047bc1b11b47787a5fcf1a5b8e1daa1fc020829de38b5d9e7d20a9";
const p = "kkdkdkdkk";
console.log(nn.hashPassword("kkdkdkdkk"));

console.log(nn.comparePassword(p, h));
