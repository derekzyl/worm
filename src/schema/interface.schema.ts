interface schemaObjectI {
  type: string | number | Array<string | number | boolean> | boolean | object;
  ref?: string;

  enum?: string;
  validate?: boolean;
  required: boolean;
  unique: boolean;
  maxLength: number;
  minLength: number;
  include: string;
  isEmail: boolean;
  forEncrypting: boolean;
  isDefault: boolean;
  isPassword: boolean;
  minimum: number;
  maximum: number;
}

export type schemaT = Record<
  string,
  | string
  | number
  | Array<string | number | boolean | schemaObjectI>
  | schemaObjectI
>;
