import { IResolvers } from '@graphql-tools/utils';
import _type from './type';
import query from './query';

const resolversMap: IResolvers = {
  ...query,
  ..._type
}

export default resolversMap;