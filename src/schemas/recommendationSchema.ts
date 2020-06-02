import { GraphQLInt, GraphQLList, GraphQLObjectType } from 'graphql';
import fetch from 'node-fetch';
import ProductSchema from './productSchema';


const recommendationSchema = new GraphQLObjectType({
    name: 'Recommendations',
    description: 'Recommendations description',

    fields: () => ({
        count: { type: GraphQLInt },
        products: { type: new GraphQLList(ProductSchema) }
    })
})

export const recommendationResolver = (id: number) => fetch(`https://devapi.zivame.com/api/v1/recommendation/widgets/more_like_this?productId=${id}`)
    .then(response => response.json()).then(response => {
        console.log(response);
        return response.data
    })


export default recommendationSchema;
