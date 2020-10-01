import { planetSchema } from './schemas';
import { listing } from '../../common/schemas/listing';
import {
  AllowRef,
  Paths,
} from '@kojidev/openapi-ts';

export const planetPaths: AllowRef<Paths> = {
  '/v1/planets': {
    get: {
      description: 'Get planets',
      responses: {
        ...listing(planetSchema),
      },
    },
  },
};
