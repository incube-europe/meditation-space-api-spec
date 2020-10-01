import { planetPaths } from './features/planets/planetPaths';
import {
  AllowRef,
  Paths,
} from '@kojidev/openapi-ts';

export const paths: AllowRef<Paths> = {
  ...planetPaths,
};
