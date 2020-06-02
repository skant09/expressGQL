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
import ProductSchema, { productResolver } from './schemas/productSchema';
import recommendationSchema, { recommendationResolver } from './schemas/recommendationSchema';

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'query',
        description: 'Root Query',
        fields: () => ({
            product: {
                name: 'product',
                description: 'Product query',
                type: ProductSchema,
                args: {
                    productId: { type: GraphQLID }
                },
                async resolve(root, { productId }) {
                    return await productResolver(productId);
                }
            },
            recommendation: {
                name: 'recommendation',
                description: 'Recommendation query',
                type: recommendationSchema,
                args: {
                    productId: { type: GraphQLID }
                },
                async resolve(root, { productId }) {
                    return await recommendationResolver(productId);
                }
            },

        })
    })
});

export default schema;