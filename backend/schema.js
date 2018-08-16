import {makeExecutableSchema} from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = [`
    type Course {
        id: String
        title: String
        author: String
        description: String
        topic: String
        url: String
        voteCount: Int
    }
    type Set {
        id:Int!
        questionsList:[Question]
    }
   
    type Question {
        id: String
        section: String
        theme: String
        url: String
    } 
    
    type Section {
        id: String
        theme: [Theme]
    }
    type Theme{
        id: String
        url:String
    }
    
    type Query {
        allCourses(searchTerm: String): [Course]
        course(id: String!): Course
        questionById(id:String): Question
        questionBySectionAndTheme(section:String!,theme:String!): [Question]
    }
    type Mutation {
        addCourse(title: String!, author: String!, description: String, topic: String!, url: String): Course
        upvote(id: String!): Course
        downvote(id: String!): Course
        addQuestion(id:String!, section:String!, theme: String!, url:String! ): Question
    }
`];

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;