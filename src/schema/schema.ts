import { pbkdf2Sync, randomBytes } from "crypto";
import { Decimal128 } from "mongodb";
import { schemaT } from "./interface.schema";

class newErr extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "newErr";
  }
}
/**
 * this is the data validator
 * @param {object} data - the data to validate
 * @param {array} rules - the rules to validate the data with
 * @returns {object} - the validated data
 * @throws {Error} - if the data is not valid
 */

class Schema {
  schema: Record<string, any>;
  constructor(schema: schemaT) {
    this.schema = schema;
  }
  /**
   * this is the data validator
   * @param {object} data - the data to validate
   * @param {array} rules - the rules to validate the data with
   * @returns {object} - the validated data
   * @throws {Error} - if the data is not valid
   * @Example { name :{type: "String", required: true, unique: true, maxLength: 10, minLength: 5} }
   */

  async checkSchema() {}

<<<<<<< HEAD
  async validateData(inData: object) {
=======
  async validateData(inData:Record<string, any>) {
>>>>>>> a48cd688df671991afc40b397ef5755a4b105f36
    let data = JSON.parse(JSON.stringify(inData));

    // if (Array.isArray(data)) {
    //   data.forEach((dat) => (data = dat));

    // }
    // console.log(data);
    if (typeof data !== "object" && !Array.isArray(data)) {
      throw new newErr("data must be an object");
    }

    //todo const keys = Object.keys(this.schema);
    // todo const dataKeys = Object.keys(data);
    //todo if (keys.length !== dataKeys.length) {
    //todo   throw new newErr("data must have the same keys as the schema");
    // todo}

    if (typeof this.schema === "object") {
      for (const [key, value] of Object.entries(this.schema)) {
        // console.log(Array.isArray(value));
        // console.log(
        //   value,
        //   "name value",

        //   "hold am na the value be this",
        //   key
        // );
        if (Array.isArray(value) /*&& value instanceof Array*/) {
          const dataValue = data[key];

          // console.log(value, "<<<<<<<<<=========is an array ");

          dataValue.forEach((item) => {
            if (
              typeof value[0] === "string" ||
              value[0].name === "String" ||
              value[0] === "String"
            ) {
              if (typeof item !== "string") {
                throw new newErr(`${key}: [${item}] must be a string`);
              }
            }
            if (value[0].name === "Number" || value[0] === "Number") {
              if (typeof item !== "number") {
                throw new newErr(`${key}: [${item}] must be a number`);
              }
            }
            if (value[0].name === "Boolean" || value[0] === "Boolean") {
              if (typeof item !== "boolean") {
                throw new newErr(`${key}: [${item}] must be a boolean`);
              }
            }
          });
        }

        if (typeof value === "function") {
          const dataValue = data[key];
          if (value.name === "String" || value === "String") {
            if (typeof dataValue !== "string" && dataValue === null) {
              throw new newErr(`${key}: [ ${dataValue} ] must be a string`);
            }
          }
          if (value.name === "Number" || value === "Number") {
            if (typeof dataValue !== "number" && dataValue === null) {
              throw new newErr(`${key}:  ${dataValue}  must be a number`);
            }
          }
          if (value.name === "Boolean" || value === "Boolean") {
            if (typeof dataValue !== "boolean" && dataValue === null) {
              throw new newErr(`${key}: [ ${dataValue}  ] must be a boolean`);
            }
          }

          //  console.log(typeof v, v.name, "typeof va", k);
        }
        /**
         * it is an object literal to give precise details of your model key
         * ****************************************************************
         * @param {string} type - the type of the data
         * @param {boolean} required - if the data is required
         * @param {boolean} unique - if the data is unique
         * @param {number} maxLength - the max length of the data
         * @param {number} minLength - the min length of the data
         * @param {string} regex - the regex of the data
         * @param {array} enum - the enum of the data
         * @param {regex} email - the enum values of the data
         */

        if (typeof value === "object" && !Array.isArray(value)) {
          let {
            type,
            enum: enumValue,
            validate,
            required,
            unique,
            maxLength,
            minLength,
            include,
            isEmail,
            forEncrypting,
            isDefault,
            isPassword,
            minimum,
            maximum,
          } = value;

          if (typeof type === "string") {
            if (typeof data[key] !== "string") {
              throw new newErr(data[key] + " data must be a string");
            }
          }

          // if (type[0].name === "String" && Array.isArray(type)) {
          //   if (typeof data[key] !== "string") {
          //     throw new newErr(" data must be a string");
          //   }
          // }
          // console.log(typeof type, type.name, "typeof va", typeof data[key]);
          if (typeof type === "number") {
            if (typeof data[key] !== "number") {
              throw new newErr("data must be a number");
            }
          }
          if (typeof type === "boolean") {
            if (typeof data[key].type !== "boolean") {
              throw new newErr("data must be a boolean");
            }
          }

          if (required) {
            if (Array.isArray(required)) {
              if (!data[key]) {
                throw new newErr(
                  required[1] ? required[1] : `${key} is required`
                );
              }
            }
            if (!data[key]) {
              throw new newErr(`${key} is required`);
            }
          }
          if (unique) {
            if (data[key] === data[key]) {
              //todo: fetch data from database and compare  throw new newErr("data must be unique");
            }
          }
          if (maxLength) {
            if (Array.isArray(maxLength)) {
              if (data[key].length > maxLength[0]) {
                throw new newErr(
                  maxLength[1]
                    ? maxLength[1]
                    : "data must be less than " + maxLength[0]
                );
              }
            }
            if (data[key].length > maxLength) {
              throw new newErr("data must be less than " + maxLength);
            }
          }
          if (minimum) {
            if (Array.isArray(minimum)) {
              if (data[key] < minimum[0]) {
                throw new newErr(
                  minimum[1]
                    ? minimum[1]
                    : "data must be greater than " + minimum[0]
                );
              }
            }
            if (data[key] < minimum) {
              throw new newErr("data must be less than " + minimum);
            }
          }
          if (maximum) {
            if (Array.isArray(maximum)) {
              if (data[key].length > maximum[0]) {
                throw new newErr(
                  maximum[1]
                    ? maximum[1]
                    : "data must be less than " + maximum[0]
                );
              }
            }
            if (data[key].length > maxLength) {
              throw new newErr("data must be less than " + maxLength);
            }
          }
          if (minLength) {
            // console.log("typeof minlength", typeof minLength);
            if (Array.isArray(minLength)) {
              if (data[key].length < minLength[0]) {
                throw new newErr(
                  minLength[1]
                    ? minLength[1]
                    : "data must be greater than " + minLength[0]
                );
              }
            }
            if (data[key].length < minLength) {
              throw new newErr(`data must be greater than  ${minLength}`);
            }
          }
          if (include) {
            if (!data[key].includes(include)) {
              throw new newErr(`${data[key]} must be included in the ${key}`);
            }
            if (Array.isArray(include)) {
              if (!data[key].includes(include[0])) {
                throw new newErr(
                  include[1]
                    ? include[1]
                    : `${data[key]} must be included in the ${key}`
                );
              }
            }
          }
          if (enumValue) {
            if (!data[key].includes(enumValue)) {
              throw new newErr(`${data[key]} is not part of the enum`);
            }
          }
          if (isEmail) {
            const stringing = String(data[key]);
            if (
              !stringing.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
            ) {
              throw new newErr(`${stringing} <-------- Must be an email`);
            }
            if (Array.isArray(isEmail)) {
              const stringing = String(data[key]);

              if (
                !stringing.match(
                  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                )
              ) {
                throw new newErr(
                  isEmail[1]
                    ? isEmail[1]
                    : `${stringing} <-------- Must be an email`
                );
              }
            }
          }
          if (forEncrypting && !isPassword) {
            const dat = new ENCRYPT();

            // console.log(
            //   "<<<<<<<<<<<<<-----is encrypting------->>>>",
            //   data[key]
            // );
            dat.encrypting(data[key]);
            const ne = dat.encrypted;
            data[key] = dat.encrypted;
            // console.log(ne, "this is the encryted data", data[key]);
          }
          if (isPassword && !forEncrypting) {
            console.log("this ia s a key obj", data[key]);
            if (Array.isArray(isPassword)) {
              const d = isPassword[1];
              const p = new PASSWORD(d);

              const ps = p.hashPassword(data[key]);
              data[key] = ps;
            }
            if (!Array.isArray(isPassword)) {
              throw new newErr(
                "password needs to be an array taking a meta data as second array"
              );
            }
          }
          if (isPassword && forEncrypting) {
            throw new newErr(
              `you caant use both isPassword and isEncrypting at the same time`
            );
          }
          if (isDefault) {
            if (Array.isArray(isDefault)) {
              if (!data[key]) {
                isDefault[0] = data[key];
              }
            } else {
              if (!data[key]) {
                isDefault = data[key];
              }
            }
          }
        }

        // console.log(
        //   key,
        //   "<<<<<<<<<<<------key and data---------->>>>>>>>",
        //   data[key]
        // );
      }
      // console.log(data);
      return data;
    }
  }

  validator(data: object) {
    let v;
    if (Array.isArray(data)) {
      data.forEach((data) => {
        v = this.validateData(data);
        // console.log(v, "this is a return from libya");
        return v;
      });
    } else {
      v = this.validateData(data);
      // console.log(v, "this is a return from libya");

      return v;
    }
  }

  /*   saveData(data) {
    this.validate(data);
    return this.db.save(data);
  } */
}

const dat = {
  length: 32,
  digest: "sha512",
};

const neo = new Schema({
  name: {
    type: String,
    isPassword: [true, dat],
  },
  age: Number,
  nime: Number,
  good: Number,
  isCool: Boolean,
  friends: String,
  address: {
    type: String,
    required: true,
    unique: true,
    isEmail: true,
  },
  game: {
    type: String,
    minLength: [6, "this is a fucking hole"],
    required: true,
  },
});

console.log(neo.schema, "this ia a schema");

//todo this will be migrated to mongodb section
const jsond: {
  required: Array<any>;
  bsonType: Record<string, any>;
  properties: Record<string, any>;
} = {
  required: [],
  bsonType: {},
  properties: {},
};

const b = neo.schema;

for (const [k, v] of Object.entries(b)) {
  // console.log(typeof k, "and the", typeof v);
  if (typeof v === "function") {
    if (v.name === "String") {
      jsond.properties[k] = {
        bsonType: "string",
        description: `${k} must be a string`,
      };
    }
    if (v.name === "Boolean") {
      jsond.properties[k] = {
        bsonType: "string",
        description: `${k} must be a string`,
      };
    }
    if (v.name === "Number") {
      jsond.properties[k] = {
        bsonType: "boolean",
        description: `${k} must be a boolean`,
      };
    }
  }
  // console.log(jsond);

  if (Array.isArray(v) /*&& value instanceof Array*/) {
    // console.log(value, "<<<<<<<<<=========is an array ");

    if (
      typeof v[0] === "string" ||
      v[0].name === "String" ||
      v[0] === "String"
    ) {
      jsond.properties[k] = {
        bsonType: ["string"],
        description: `${k} must be a string`,
      };
    }
    if (v[0].name === "Number" || v[0] === "Number") {
      jsond.properties[k] = {
        bsonType: ["double"],
        description: `${k} must be a number`,
      };
    }
    if (v[0].name === "Boolean" || v[0] === "Boolean") {
      jsond.properties[k] = {
        bsonType: ["boolean"],
        description: `${k} must be a boolean`,
      };
    }
  }

  if (typeof v === "object" && !Array.isArray(v)) {
    const { type, required, unique, minimum, maximum } = v;

    console.log(type, "anggg", k);

    console.log(k, "key");
    if (typeof type === "string") {
      jsond.properties[k] = {
        bsonType: "string",
        description: `${k} must be a string`,
      };
    }

    if (typeof type === "number") {
      jsond.properties[k] = {
        bsonType: "double",
        description: `${k} must be a number`,
      };
    }
    if (typeof type === "boolean") {
      jsond.properties[k] = {
        bsonType: "boolean",
        description: `${k} must be a boolean`,
      };
    }

    if (required) {
      if (Array.isArray(required)) {
        jsond.required.push(k);
      } else {
        jsond.required.push(k);
      }
    }
    // if (unique) {
    //   if (data[key] === data[key]) {
    //     //todo: fetch data from database and compare  throw new newErr("data must be unique");
    //   }
    // }
    if (minimum) {
      if (Array.isArray(minimum)) {
        jsond.properties[k] = {
          minimum: minimum[0],
          description: minimum[1]
            ? minimum[1]
            : "data must be greater than " + minimum[0],
        };
      } else {
        jsond.properties[k] = {
          minimum: minimum,
          description: "data must be greater than " + minimum,
        };
      }
    }
    if (maximum) {
      if (Array.isArray(maximum)) {
        jsond.properties[k] = {
          maximum: maximum[0],
          description: maximum[1]
            ? maximum[1]
            : "data must be greater than " + maximum[0],
        };
      } else {
        jsond.properties[k] = {
          maximum: maximum,
          description: "data must be greater than " + maximum,
        };
      }
    }
  }

  // console.log(b[k],);
}
console.log(jsond);
//! migration to mongodb ends here

// todo create a structure for creating table for mysql
let vc = [];

// if (typeof b === "object") {
//   let bbb = {};
//   for (const [key, value] of Object.entries(b)) {
//     bbb[key] = [];
//     if (typeof value === "function") {
//       if (value.name === "String" || value === "String") {
//         bbb[key].push(key + " VARCHAR");
//         //todo for sql
//       }

//       if (value.name === "Number" || value === "Number") {
//         bbb[key].push(key + " INT");
//         //todo for sql
//       }
//       if (value.name === "Boolean" || value === "Boolean") {
//         //todo for sql
//         bbb[key].push(key + " BOOLEAN");
//       }
//     }
//     if (Array.isArray(value) /*&& value instanceof Array*/) {
//       // console.log(value, "<<<<<<<<<=========is an array ");

//       if (
//         typeof value[0] === "string" ||
//         value[0].name === "String" ||
//         value[0] === "String"
//       ) {
//       }
//       if (value[0].name === "Number" || value[0] === "Number") {
//       }
//       if (value[0].name === "Boolean" || value[0] === "Boolean") {
//       }
//     }
//     if (typeof value === "object" && !Array.isArray(v)) {
//       const {
//         type,
//         enum: enumValue,
//         validate,
//         required,
//         unique,
//         maxLength,
//         minLength,
//         include,
//         isEmail,
//         forEncrypting,
//         isDefault,
//         isPassword,
//         minimum,
//         maximum,
//       } = value;
//       if (typeof type) {
//         console.log(typeof type.name === "string", "type of type");
//       }
//       if (typeof type && typeof type.name === "string") {
//         //todo for sql
//         bbb[key].push("VARCHAR");
//       }

//       if (typeof type && typeof type.name === "number") {
//         //todo for sql
//         bbb[key].push("INT");
//       }
//       if (typeof type && typeof type.name === "boolean") {
//         bbb[key].push("BOOLEAN");
//         //todo for sql
//       }

//       if (required) {
//         if (Array.isArray(required)) {
//           bbb[key].push("NOT NULL");
//           //todo for sql        //todo for sql
//         }
//         bbb[key].push("NOT NULL");
//         //todo for sql
//       }
//       if (unique) {
//         //todo for sql
//         bbb[key].push("UNIQUE");
//       }
//       if (maxLength) {
//         if (Array.isArray(maxLength)) {
//           bbb[key].shift();
//           bbb[key].push(`VARCHAR(${maxLength[0]})`);
//           //todo for sql
//         }
//         bbb[key].shift();
//         bbb[key].push(`VARCHAR(${maxLength})`);

//         //todo for sql
//       }
//       if (minimum) {
//         if (Array.isArray(minimum)) {
//           bbb[key].shift();
//           bbb[key].push(`VARCHAR(${minimum[0]})`);

//           //todo for sql
//         }
//         bbb[key].shift();
//         bbb[key].push(`VARCHAR(${minimum})`);

//         //todo for sql
//       }
//       if (maximum) {
//         if (Array.isArray(maximum)) {
//           bbb[key].shift();
//           bbb[key].push(`VARCHAR(${maximum[0]})`);

//           //todo for sql
//         }
//         bbb[key].shift();
//         bbb[key].push(`VARCHAR(${maximum})`);
//         //todo for sql
//       }
//       if (minLength) {
//         // console.log("typeof minlength", typeof minLength);
//         if (Array.isArray(minLength)) {
//           bbb[key].shift();
//           bbb[key].push(`VARCHAR(${minLength[0]})`);

//           //todo for sql
//         } else {
//           bbb[key].shift();
//           bbb[key].push(`VARCHAR(${minLength})`);
//         }

//         //todo for sql
//       }
//       if (include) {
//         //todo for sql
//         if (Array.isArray(include)) {
//           //todo for sql
//         }
//       }
//       if (enumValue) {
//         //todo for sql
//       }
//       if (isEmail) {
//         //todo for sql
//         if (Array.isArray(isEmail)) {
//           bbb[key].push(`VARCHAR(${255})`);

//           //todo for sql
//         }
//       }
//       if (forEncrypting && !isPassword) {
//         //todo for sql
//       }
//       if (isPassword && !forEncrypting) {
//         if (Array.isArray(isPassword)) {
//           //todo for sql
//         }
//       }

//       if (isDefault) {
//         if (Array.isArray(isDefault)) {
//           bbb[key].push(`DEFAULT '${isDefault[0]}'`);

//           //todo for sql
//         } else {
//           bbb[key].push(`DEFAULT '${isDefault}'`);

//           //todo for sql
//         }
//       }
//     }

//     // console.log(
//     //   key,
//     //   "<<<<<<<<<<<------key and data---------->>>>>>>>",
//     //   data[key]
//     // );
//   }
//   // console.log(data);
//   console.log(bbb);
// }

neo.validator([
  {
    name: "hello",
    age: [30, 56, 55],
    isCool: true,
    friends: "888888",
    address: "dav@gh.com",
    game: "222292",
  },
  {
    name: "jenni",
    age: [30, 56, 55],
    isCool: true,
    friends: "paul",
    address: "de@gmail.com",
    game: "ddfffffffffffff",
  },
  ,
  {
    name: "John",
    age: [30, 56, 55],
    isCool: true,
    friends: "james",
    address: "derl@gmail.com",
    game: 33334444444444,
  },
]);

// if (keys.length !== dataKeys.length) {
//    throw new Error('data must have the same keys as the schema');
// }// eslint-disable-line
// const validatedData = {};
// keys.forEach((key) => {
//    const rule = this.schema[key];
//    const value = data[key];
//    if (rule.type === 'string') {
//       if (typeof value !== 'string') {
//          throw new Error(`${key} must be a string`);
//       }
//    } else if (rule.type === 'number') {
//       if (typeof value !== 'number') {
//          throw new Error(`${key} must be a number`);
//       }
//    } else if (rule.type === 'boolean') {
//       if (typeof value !== 'boolean') {
//          throw new Error(`${key} must be a boolean`);
//       }
//    } else if (rule.type === 'array') {
//       if (!Array.isArray(value)) {
//          throw new Error(`${key} must be an array`);
//       }
//    } else if (rule.type === 'object') {
//       if (typeof value !== 'object') {
//          throw new Error(`${key} must be an object`);
//       }
//    } else if (rule.type === 'date') {
//       if (!(value instanceof Date)) {
//          throw new Error(`${key} must be a date`);
//       }
//    } else if (rule.type === 'email') {
//       if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))) {
//          throw new Error(`${key} must be a valid email`);
//       }
//    } else if (rule.type === 'url') {
//       if (!(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(value))) {
//          throw new Error(`${key} must be a valid url`);
//       });
//    }
