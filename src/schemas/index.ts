import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLID,
    GraphQLEnumType,
    GraphQLBoolean,
    GraphQLFloat
} from 'graphql';

const ProductType = new GraphQLObjectType({
    name: 'Product',
    description: 'Product description',

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

export default ProductType;
