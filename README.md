# expressGQL
To run the project
```
yarn install
yarn start

```
go to localhost:5000/graphql
Sample Query
```
{
  product(productId: 144697) {
    productId
    sku
    name
    currency
  },
  recommendation(productId: 144697) {
    count,
    products {
      productId
      name
      sku
    }
  }
  config {
    pdpConfigPositions {
      colorsAndSizes
    }
  }
}

```

### TODO

- [ ] Add Mutation to demonstarate post/put api
- [ ] Sequential fetch( when one data depends on another api call)
- [ ] understand the organisation of schema and url to make it maintainable
