import { json } from '@sveltejs/kit';
import { comments } from '$lib/data';

export function GET({ params }) {
  return json(comments[params.id] ?? []);
}

export async function POST({ params, request }) {
  const { comment } = await request.json();
  comments[params.id] = comments[params.id] ?? [];
  comments[params.id].push(comment)
  return json({ success: true });
}
