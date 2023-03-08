import { ZodSchema, ZodTypeDef, z } from 'zod';

export interface ZodDto<
  TOutput = any,
  TDef extends ZodTypeDef = ZodTypeDef,
  TInput = TOutput,
> {
  new (): TOutput;
  isZodDto: true;
  schema: ZodSchema<TOutput, TDef, TInput>;
  create(input: unknown): TOutput;
}
export function createZodDto<
  TOutput = any,
  TDef = ZodTypeDef,
  TInput = TOutput,
>(schema: ZodSchema<TOutput, ZodTypeDef, TInput>) {
  class AugmentedZodDto {
    public static isZodDto = true;
    public static schema = schema;
    public static create(input: unknown) {
      return this.schema.parse(input);
    }
  }

  return AugmentedZodDto as unknown as ZodDto<TOutput, TDef, TInput>;
}

const dto = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    emailConfirmed: z.boolean(),
    password: z.string(),
    phoneNumber: z.number(),
    phoneNumberConfirmed: z.boolean(),
    profile: z.string(),
    language: z.string(),
    ipAddress: z.string(),
    role: z.any(),
  })
  .required();
export const createUserDto = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
  language: z.string(),
  ipAddress: z.string(),
});

export const updateUserDto = z.object({
  id: z.string(),
  body: z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    emailConfirmed: z.boolean(),
    password: z.string(),
    phoneNumber: z.number(),
    phoneNumberConfirmed: z.boolean(),
    profile: z.string(),
    language: z.string(),
    ipAddress: z.string(),
    role: z.any(),
  }),
});

export abstract class IUpdateUserDto extends createZodDto(updateUserDto) {}
export abstract class ICreateUserDto extends createZodDto(createUserDto) {}
export abstract class UserModel extends createZodDto(dto) {}
