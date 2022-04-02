//@ts-check
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { searchQuestion } from "../../services/brainly";

export default async function handler(req, res) {
  const searchTerm = req.query.searchTerm;
  const result = await searchQuestion(searchTerm);
  res.status(200).json({ result: result.data.questionSearch.edges[0].answer. });
}
