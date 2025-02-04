
![Logo](https://californica-nursery-icons.s3.us-west-1.amazonaws.com/wordmark_web.png)


# Californica Nursery Website

E-Commerce website for Long Beach, CA based nursery, landscaping, and environmental restoration business. Built using React, Typescript, NextJS, ChakraUI, and Square.


## Authors

- [Muzzammil Adamjee](https://github.com/ComfyCoyote) - Lead Software Engineer


## Acknowledgements
Special thanks to these lovely people for their support and guidance in this project :)

 - Keilani Snyder - Web Designer
 - Ian Rhodes - Californica Nursery CEO and Co-Founder
 - Jackson Driscoll - Californica Nursery Owner and Co-Founder


## Technical Overview

- All products details (item name, description, price, etc) are fetched through Square's [Catalog](https://developer.squareup.com/reference/square/catalog-api) and [Inventory](https://developer.squareup.com/docs/inventory-api/what-it-does) APIs
- Product images are served using [AWS CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html) coupled with [AWS S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html) in webp format
- Pages are statically generated at build time with a scheduled revalidation interval
- Payment processing is done by redirecting to square checkout page using the [Payments](https://developer.squareup.com/docs/payments-overview) API
- UI is comprised of modified ChakraUI components customized according to design specifications, outfitted for both desktop and mobile use.
- SEO optimization is being done through meta/title tags, server side generation, and urls with product names.


## Tech Stack

React 18.2, Next 13.4, ChakraUI 2.10, Square 28.0, Typescript 5.0



## Used By

- Californica Nursery LLC


## License

[CC BY-NC 4.0]( https://creativecommons.org/licenses/by-nc/4.0/)

