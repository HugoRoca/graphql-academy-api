import { IResolvers } from '@graphql-tools/utils';
import { database } from '../data/data.store';

const query: IResolvers = {
  Query: {
    courses(): any {
      return database.courses;
    },
    course(__: void, { id }): any {
      const result = database.courses.filter(course => course.id === id)[0];
      return result ? result : {
        id: '-1',
        title: `Course with id ${id} not found`,
        description: '',
        class: -1,
        time: 0,
        level: 'ALL',
        logo: '',
        path: '',
        teacher: '',
        reviews: [],
      }
    },
    students(): any {
      return database.students;
    },
    student(__: void, { id }): any {
      const result = database.students.filter(student => student.id === id)[0];

      if (!result) return {
        id: '-1',
        name: `Student with id ${id} not found`,
        email: '',
        courses: [],
      }
      
      return result;
    }
  }
}

export default query;