export async function POST(req: Request) {
  const body = await req.text();
  console.log('post body', body)

  return new Response(JSON.stringify({ received: true }));
}

export async function GET(req: Request) {
  const body = await req.text();
  console.log('get body', body)

  return new Response(JSON.stringify({ received: true }));
}
