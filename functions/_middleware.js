export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname.endsWith('pages.dev')) {
    return new Response('Niet toegankelijk', { status: 403 });
  }
  return await context.next();
}
