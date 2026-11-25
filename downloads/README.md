# Downloads Directory

<!-- TODO: client to supply official price list PDF -->

Place the official price list PDF here as:

`downloads/price-list.pdf`

Then update `js/site-config.js` to set:

```js
priceListAvailable: true
```

Until `price-list.pdf` is provided, the green **PRICE LIST** button in the navigation bar opens `request-a-quote.html` instead of returning a 404 error.
