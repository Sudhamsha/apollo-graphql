const {gql} = require('apollo-server');

const typeDefs = gql`
    type Query {
        tracksForHome: [Track!]!,
    }
    "Track is a group of Modules teaching specific topic"
    type Track{
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
    }

    "Author of a track"
    type Author {
        id: ID!
        name: String
        photo: String
    }
`;

module.exports = typeDefs;