import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    graphql,
    GraphQLEnumType,
    GraphQLBoolean,
    GraphQLFloat
} from 'graphql';
import { query } from 'express';
import { resolve } from 'dns';
import { url } from 'inspector';
import ProductType from './schemas';

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'query',
        description: 'Root Query',
        fields: () => ({
            product: {
                name: 'product',
                description: 'Product query',
                type: ProductType,
                args: {
                    productId: { type: GraphQLID }
                },
                async resolve(root, { productId }, { fetchItem }) {
                    return await fetchItem(productId);
                }
            }
        })
    })
})

export default schema;