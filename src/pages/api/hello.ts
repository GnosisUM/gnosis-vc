// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let url = "https://fake-gnosis-6vow3jzj5-zulfathihanafi.vercel.app/gnosis";
  fetch(url, {
    mode: "no-cors",
  }).then((value) => {
    console.log("API", value);
    value.json().then((value2) => {
      res.status(200).json(value2)
    });
  });
  
}
