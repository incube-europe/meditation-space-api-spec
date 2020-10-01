import { string } from '../../common/schemas/string';
import { unixTimeRef } from '../../common/schemas/unixTime';
import { id } from '../../common/schemas/id';
import { AllowRef, Schema } from '@kojidev/openapi-ts';

export const planetSchema: AllowRef<Schema> = {
  type: 'object',
  properties: {
    id,
    name: string,
    createdAt: unixTimeRef,
  },
};
