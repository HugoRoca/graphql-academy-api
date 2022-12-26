import { IResolvers } from '@graphql-tools/utils';
import { database } from '../data/data.store';
import _ from 'lodash';

const mutation: IResolvers = {
  Mutation: {
    newCourse(__: void, { course }): any {
      const itemCourse = {
        id: String(database.courses.length + 1),
        title: course.title,
        description: course.description,
        class: course.class,
        time: course.time,
        level: course.level,
        logo: course.logo,
        path: course.path,
        teacher: course.teacher,
        reviews: [],
      };

      if (database.courses.filter((item) => item.title === itemCourse.title).length === 0) {
        database.courses.push(itemCourse);
        return itemCourse;
      }

      return {
        id: '-1',
        title: `The course with the title ${course.title} already exists`,
        description: '',
        class: -1,
        time: 0.0,
        level: 'ALL',
        logo: '',
        path: '',
        teacher: '',
        reviews: [],
      };
    },
    modifyCourse(__: void, { course }): any {
      const elementExist = _.findIndex(database.courses, function (o) {
        return o.id === course.id;
      });

      if (elementExist > -1) {
        const value = database.courses[elementExist];
        value.title = course.title;
        value.description = course.description;
        value.class = course.class;
        value.time = course.time;
        value.level = course.level;
        value.logo = course.logo;
        value.path = course.path;
        value.teacher = course.teacher;
        return value;
      }

      return {
        id: '-1',
        title: `The course with the id ${course.id} does not exist`,
        description: '',
        class: -1,
        time: 0.0,
        level: 'ALL',
        logo: '',
        path: '',
        teacher: '',
        reviews: [],
      };
    },
    deleteCourse(__: void, { id }): any {
      const deleteCourse = _.remove(database.courses, function (course) {
        return course.id === id;
      });

      if (deleteCourse[0] === undefined) {
        return {
          id: '-1',
          title: `The course with the id ${id} does not exist`,
          description: '',
          class: -1,
          time: 0.0,
          level: 'ALL',
          logo: '',
          path: '',
          teacher: '',
          reviews: [],
        };
      }

      return deleteCourse[0];
    }
  }
}

export default mutation;