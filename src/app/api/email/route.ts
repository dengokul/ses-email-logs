import mailer from "./mailer";
export async function POST(req: Request) {
  let res = {
    message: '',
    type: ''
  }
  const reqBody = await req.text();
  const eventData = JSON.stringify(reqBody);
  mailer({ eventData }).then(() => {
    res = { message: 'Message Sent Success', type: 'success' }

  }).catch(() => {
    res = { message: 'Message Sent Failed', type: 'error' }
  })

  return Response.json(res)
}

export async function GET() {
  // const body = await req.text();

  return new Response(JSON.stringify({ received: true }));
}