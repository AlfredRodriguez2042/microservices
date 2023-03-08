import {
  ArgumentMetadata,
  PipeTransform,
  UnprocessableEntityException,
} from '@nestjs/common';
import { z } from 'zod';

interface IZodPipeSchema {
  params?: z.ZodObject<z.ZodRawShape, 'strict'>;
  query?: z.ZodObject<z.ZodRawShape, 'strict'>;
  body?: z.ZodObject<z.ZodRawShape, 'strip'>;
  payload?: z.ZodObject<z.ZodRawShape, 'strip'>;
}
export class ZodValidationPipe implements PipeTransform {
  constructor(private readonly schema: IZodPipeSchema) {}
  transform(value: any, metadata: ArgumentMetadata) {
    if (!this.schema[metadata.type]) {
      throw new UnprocessableEntityException();
    }
    const result = this.schema[metadata.type].safeParse(value);
    if (!result.success) {
      throw new UnprocessableEntityException({ msg: result.error });
    }
    return result.data;
  }
}
