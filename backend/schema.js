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
    
    input QuestionInput {
        id: String
        section: String
        theme: String
        url: String
    } 
    
    type Section {
        id: String
        name:String
        theme: [Theme]
    }
    
    type Theme{
        id: String
        name:String
        questions:[Question]
    }
    
    input ThemeInput{
        id: String
        name:String
        questions:[QuestionInput]
    }
    
    type Query {
        allCourses(searchTerm: String): [Course]
        course(id: String!): Course
        questionById(id:String): Question
        questionBySectionAndTheme(section:String!,theme:String!): [Question]
    }
    
    type Mutation {
        addSection(id: String!, name: String!, theme: [ThemeInput]): Section
        addThemeToSection(idSection: String!, id: String!, name: String!): Section
        addQuestionToTheme(idSection: String!, idTheme: String!, id: String!, section: String!, theme: String!, url: String!): Section
        
        addCourse(title: String!, author: String!, description: String, topic: String!, url: String): Course
        upvote(id: String!): Course
        downvote(id: String!): Course
        addQuestion(id:String!, section:String!, theme: String!, url:String! ): Question
    }
`];

/*addTheme(id: String!, name: String): Theme
addQuestionToTheme({idSection: String!, idTheme: String!, id: String!, section: String!, theme: String!, url: String!): Theme*/


const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;