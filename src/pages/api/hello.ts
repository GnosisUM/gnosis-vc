// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let url = "http://127.0.0.1:8000/get_AI_rating";
  fetch(url, {
    method: "POST",
    body: JSON.stringify(
      {
        
        "startupList": [
          {
            "state_code": [2],
            "labels": [1],
            "first_funding_at": [286],
            "age_first_funding_year": [2.2493],
            "age_last_funding_year": [3.0027],
            "relationships": [3],
            "funding_rounds": [3],
            "funding_total_usd": [375000],
            "milestones": [3],
            "is_CA": [1],
            "is_NY": [0],
            "is_MA": [0],
            "is_TX": [0],
            "is_otherstate": [0],
            "category_code": [19],
            "is_software": [0],
            "is_web": [0],
            "is_mobile": [0],
            // 0	0	0	0	0	0	1	788	0	1	0	0	0	0	1	0
            "is_enterprise": [0],
            "is_advertising": [0],
            "is_gamesvideo": [0],
            "is_ecommerce": [0],
            "is_biotech": [0],
            "is_consulting": [0],
            "is_othercategory": [1],
            "object_id": [788],
            "has_VC": [0],
            "has_angel": [1],
            "has_roundA": [0],
            "has_roundB": [0],
            "has_roundC": [0],
            "has_roundD": [0],
            "avg_participants": [1],
            "is_top500": [0]
          }]
      }
    ),
    mode: "no-cors",
  }).then((value) => {
    console.log("API", value);
    value.json().then((value2) => {
      res.status(200).json(value2)
    });
  });

}
