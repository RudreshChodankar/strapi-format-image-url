## Requirements

Strapi v4 is required.

## Installation

Download

```
yarn add strapi-format-image-url
```

or

```
npm i strapi-format-image-url
```

## Usage Example
```
const strapiFormatImageUrl = require("strapi-format-image-url");

module.exports = createCoreService("api::country.country", {
 async findOne(ctx) {
  let country = super.findOne(ctx)
  country.Flag = strapiFormatImageUrl.formatStrapiImage(country.Flag, "url");
  country.Flag = strapiFormatImageUrl.formatStrapiImage(country.Flag, "medium");
  country.Flag = strapiFormatImageUrl.formatStrapiImage(country.Flag, "thumbnail");
 }
});
```
