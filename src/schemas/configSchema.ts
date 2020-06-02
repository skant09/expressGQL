import { GraphQLFloat, GraphQLObjectType, GraphQLString } from 'graphql';
import fetch from 'node-fetch';


const configSchema = new GraphQLObjectType({
    name: 'config',
    description: 'This key fetches the config from mAdmin',

    fields: () => ({
        pdpConfigPositions: {
            type: new GraphQLObjectType({
                name: 'Pdp',
                description: 'Product page ordering of components',
                fields: {
                    "colorsAndSizes": { type: GraphQLFloat },
                    "addToCart": { type: GraphQLFloat },
                    "offers": { type: GraphQLFloat },
                    "codPolicies": { type: GraphQLFloat },
                    "description": { type: GraphQLFloat },
                    "productFeatures": { type: GraphQLFloat },
                    "reviews": { type: GraphQLFloat },
                    "checkDelivery": { type: GraphQLFloat }
                }
            })
        },
        saleStartTime: { type: GraphQLString }
    })
})

export const configResolver = () => fetch(`https://devapi.zivame.com/api/v1/config?src=config_web`)
    .then(response => response.json()).then(response => {
        return response.data
    })


export default configSchema;
