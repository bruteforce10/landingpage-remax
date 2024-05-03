import { data } from "autoprefixer";
import request, { gql } from "graphql-request";

export default async function handler(req, res) {
  const router = req.query.router;

  if (router === "topNavigations") {
    const query = gql`
      query TopNavigations {
        topNavigations {
          text
          id
          iconName {
            url
          }
        }
      }
    `;

    const result = await request(
      "https://api-us-west-2.hygraph.com/v2/clvptosws04zt07w3oohqtove/master",
      query
    );
    res.status(200).json({ data: result });
  }

  res.status(404).json({ message: "Router harus diisi" });
}
