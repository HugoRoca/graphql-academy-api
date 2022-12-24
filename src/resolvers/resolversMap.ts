import { IResolvers } from '@graphql-tools/utils';
import _type from './type';
import query from './query';
import mutation from './mutation';

const resolversMap: IResolvers = {
  ...query,
  ..._type,
  ...mutation
}

export default resolversMap;