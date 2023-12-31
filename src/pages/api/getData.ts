import { Lambda } from "aws-sdk";
import { NextApiRequest, NextApiResponse } from "next";

console.log("Credentials");
console.log(process.env.AWS_ACCESS_KEY_ID);
console.log(process.env.AWS_SECRET_ACCESS_KEY);

const lambda = new Lambda({
  region: "us-east-1",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  lambda.invoke(
    {
      FunctionName:
        "LambdaInAVpcStack-LambdaInAVpcStackgetDataLambda1E-33sG563OFj2H",
      Payload: JSON.stringify({}),
    },
    (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({ data });
      }
    }
  );
};
