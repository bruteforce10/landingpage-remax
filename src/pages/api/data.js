import { data } from "autoprefixer";
import request, { gql } from "graphql-request";

export default async function handler(req, res) {
  const query = gql`
    query TopNavigations {
      topNavigations {
        text
        id
        iconName {
          url
        }
      }
      menus {
        menu
      }
      headers {
        heading
        description {
          html
        }
        subHeading
      }
      abouts {
        description {
          html
        }
        heading
        headingHighligt
      }
      bankPartners {
        image {
          url
        }
      }
      whyMes {
        heading
        shortDescription
        description {
          html
        }
        icon {
          url
        }
        image {
          url
        }
        number
      }
    }
  `;

  const result = await request(
    "https://api-us-west-2.hygraph.com/v2/clvptosws04zt07w3oohqtove/master",
    query
  );
  res.status(200).json({ data: result });
}
