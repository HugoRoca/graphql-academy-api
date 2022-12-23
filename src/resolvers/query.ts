import { IResolvers } from '@graphql-tools/utils';

const query: IResolvers = {
  Query: {
    students(): string {
      return 'List students';
    }
  }
}

export default query;``