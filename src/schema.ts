import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from 'graphql';
import { query } from 'express';
import { resolve } from 'dns';

const ItemType = new GraphQLObjectType({
    name: 'Item',
    description: '...',

    fields: () => ({
        keyword: {
            type: GraphQLString,
            args: {
                lang: { type: GraphQLString }
            },
            resolve: (xml, args) => {
                const title = xml.GoodreadsResponse.book[0].title[0]
                return args.lang
            }
        }
    })
})

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'query',
        description: '....',
        fields: () => ({
            product: {
                name: 'product',
                type: GraphQLString,
                resolve: (root, context, args) => {
                    console.log(root, context, args)
                    return '123'
                }
            },
            productName: {
                name: 'product',
                type: GraphQLString,
                resolve: (root, context, args) => {
                    console.log(root, context, args)
                    return 'zivame'
                }
            },
        })
    })
})

export default schema;