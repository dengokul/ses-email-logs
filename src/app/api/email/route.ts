// import request from "request";
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

  try {
    const customHeaders = {
      "Content-Type": "application/json",
    }
    const eventData = { test_new: 'test' }
    /*global fetch*/
    const fetchRes = await fetch('https://ses-email-logs.vercel.app', {
      method: "POST",
      headers: customHeaders,
      body: JSON.stringify(eventData),
    });
    console.log('fetchRes', fetchRes)
    return Response.json(fetchRes)
  } catch (error) {
    console.log('catch error', error)
    return Response.json(error)
  }

  return new Response(JSON.stringify({ received: true }));
}