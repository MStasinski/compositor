import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {Query} from './types';
import {map, filter} from 'rxjs/operators';

@Injectable()
export class QuestionService {

  constructor(private apollo: Apollo) {
  }

  questionBySectionAndTheme(section: string, theme: string) {
    return this.apollo.watchQuery<Query>({
      pollInterval: 500,
      query: gql`
        query questionBySectionAndTheme($section: String!, $theme: String!) {
          questionBySectionAndTheme(section: $section,theme: $theme) {
          id,
          section,
          theme,
          url,
        }
      }
      `,
      variables: {
        section: section,
        theme: theme
      }
    })
      .valueChanges
      .pipe(
        map(result => result.data.questionBySectionAndTheme)
      );
  }

  questionById(id: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation questionById($id: String!) {
         questionById(id: $id) {
             id,
             section,
             theme,
             url,
          }
        }
      `,
      variables: {
        id: id
      }
    });
  }
}
