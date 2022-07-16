import * as t from 'io-ts'

const isEmptyArray = (input: unknown): input is [] =>
  Array.isArray(input) && input.length === 0

export const emptyArray = new t.Type<[], [], unknown>(
  'emptyArray',
  isEmptyArray,
  (input, context) =>
    isEmptyArray(input) ? t.success(input) : t.failure(input, context),
  t.identity
)
