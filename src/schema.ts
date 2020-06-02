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

const ProductType = new GraphQLObjectType({
    name: 'Product',
    description: '...',

    fields: () => ({
        productId: { type: GraphQLID },
        sku: { type: GraphQLString },
        name: { type: GraphQLString },
        url: { type: GraphQLString },
        brandName: { type: GraphQLString },
        mainCategoryId: { type: GraphQLInt },
        mainCategoryLink: { type: GraphQLString },
        mainCategoryName: { type: GraphQLString },
        wishlistCount: { type: GraphQLInt },
        rating: { type: GraphQLFloat },
        reviewCount: { type: GraphQLInt },
        currency: {
            type: new GraphQLEnumType({
                name: 'currency',
                values: {
                    rupee: {
                        value: '₹'
                    }
                }

            }),
        },
        price: { type: GraphQLInt },
        specialPrice: { type: GraphQLInt },
        color: { type: GraphQLString },
        stockStatus: { type: GraphQLBoolean },
        offerCount: { type: GraphQLInt },
        mchLevel3data: { type: GraphQLString },
        discountPercent: { type: GraphQLInt },
        brandLink: { type: GraphQLString }
    })
})

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