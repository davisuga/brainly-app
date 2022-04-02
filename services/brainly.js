import axios from "axios";
import { getData } from "./axios";

const api = axios.create({
  baseURL: "https://brainly.com.br/graphql/pt",
  headers: {
    "user-agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
  },
});

const brainlyDefaultParams = {
  extensions:
    '{"persistedQuery":{"version":1,"sha256Hash":"6b5d3f4ad2ddf1e7d142a25d50fdfbd55bb89570bfce0564bacd28a5ef89f096"}}',
};

export const searchQuestion = (question) => {
  const params = {
    ...brainlyDefaultParams,
    operationName: "SearchQuery",
    variables: JSON.stringify({ query: question, after: null, first: 10 }),
  };
  return api.get("/", { params }).then(getData);
};
