/**
 * this is the data validator
 * @param {object} data - the data to validate
 * @param {array} rules - the rules to validate the data with
 * @returns {object} - the validated data
 * @throws {Error} - if the data is not valid
 */
class newErr extends Error {
  constructor(message) {
    super(message);
    this.name = "newErr";
  }
}
class Schema {
  constructor(schema) {
    this.schema = schema;
  }

  validateData(data) {
    if (typeof data !== "object") {
      throw new newErr("data must be an object");
    }
    const keys = Object.keys(this.schema);
    const dataKeys = Object.keys(data);
    if (keys.length !== dataKeys.length) {
      throw new newErr("data must have the same keys as the schema");
    }

    if (typeof this.schema === "object") {
      for (const [key, value] of Object.entries(this.schema)) {
        if (typeof value === "function" || typeof value === "string") {
          const dataValue = data[key];
          if (value.name === "String" || value === "String") {
            if (typeof dataValue !== "string") {
              throw new newErr("data must be a string");
            }
          }
          if (value.name === "Number" || value === "Number") {
            if (typeof dataValue !== "number") {
              throw new newErr("data must be a number");
            }
          }
          if (value.name === "Boolean" || value === "Boolean") {
            if (typeof dataValue !== "boolean") {
              throw new newErr("data must be a boolean");
            }
          }
          if (value.name === "Array" || value === "Array") {
            if (typeof dataValue !== "array") {
              throw new newErr("data must be an array");
            }
          }
          console.log(result);

          console.log(typeof v, v.name, "typeof va", k);
        }

        if (typeof value === "object") {
          const {
            type,
            validate,
            required,
            unique,
            maxValue,
            minValue,
            maxLength,
            minLength,
            include,
          } = value;

          if (typeof type === "String") {
            if (typeof data[key] !== "string") {
              throw new newErr("data must be a string");
            }
          }
          if (typeof type === "Number") {
            if (typeof data[key] !== "number") {
              throw new newErr("data must be a number");
            }
          }
          if (typeof type === "Boolean") {
            if (typeof data[key].type !== "boolean") {
              throw new newErr("data must be a boolean");
            }
          }
          if (typeof type === "Array") {
            if (typeof data[key] !== "object") {
              throw new newErr("data must be an array");
            }
          }
          if (required) {
            if (!data[key]) {
              throw new newErr("data must be required");
            }
          }
          if (unique) {
            if (data[key] === data[key]) {
              throw new newErr("data must be unique");
            }
          }
          if (maxValue) {
            if (data[key] > maxValue) {
              throw new newErr("data must be less than maxValue");
            }
          }
        }
      }
    }
  }
}

const ne = new Worm();
ne.createTable({
  name: String,
  age: Number,
  another: {
    type: Number,
    maximumNumber: 5,
    minimum: 6,
  },
});

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
