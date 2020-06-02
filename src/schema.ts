import { GraphQLID, GraphQLObjectType, GraphQLSchema } from 'graphql';
import configSchema, { configResolver } from './schemas/configSchema';
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
            config: {
                name: 'Web config',
                description: 'Config from mAdmin',
                type: configSchema,
                args: {
                },
                async resolve(root) {
                    return await configResolver();
                }
            }
        })
    })
});

export default schema;