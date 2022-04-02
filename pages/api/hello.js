// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const searchTerm = req.query.searchTerm;
  res.status(200).json({ searchTerm });
}
