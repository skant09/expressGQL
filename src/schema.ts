import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    graphql
} from 'graphql';
import { query } from 'express';
import { resolve } from 'dns';

const ProductType = new GraphQLObjectType({
    name: 'Product',
    description: '...',

    fields: () => ({
        id: { type: GraphQLID },
        sku: { type: GraphQLString }
    })
})

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'query',
        description: '....',
        fields: () => ({
            product: {
                name: 'product',
                type: ProductType,
                args: {
                    id: { type: GraphQLID }
                },
                async resolve(root, { args }, { fetchItem }) {
                    if (args === "1") {
                        return { id: 123, sku: "Zivame" }
                    }
                    let product = await fetchItem(144697);
                    console.log(product);
                    return product;
                }
            }
        })
    })
})

export default schema;