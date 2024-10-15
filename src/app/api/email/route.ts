import request from "request";
import mailer from "./mailer";
export async function POST(req: Request) {
  const reqBody = await req.text();
  const eventData = JSON.stringify(reqBody);

  try {
    const res = await mailer({ eventData })
    return Response.json(res)
  } catch (error) {
    return Response.json(error)
  }

}

export async function GET() {
  // const body = await req.text();
  const event = { test: 'testevent' }
  request.post({
    headers: { 'content-type': 'application/json' },
    url: 'https://ses-email-logs.vercel.app',
    body: JSON.stringify(event)
  }, function (error) {
    console.log('error', error);
    // console.log('response', response);
    // console.log('body', body);
  });

  return new Response(JSON.stringify({ received: true }));
}