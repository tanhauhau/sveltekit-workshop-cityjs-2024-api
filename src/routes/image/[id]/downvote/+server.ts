import { error, json } from '@sveltejs/kit';
import { data } from '$lib/data';

export function POST({ params }) {
  const paramsId = Number(params.id);
  const image = data.find(({ id }) => id === paramsId);
  if (!image) {
    throw error(404);
  }
  image.downvotes++;
  return json({ success: true });
}
