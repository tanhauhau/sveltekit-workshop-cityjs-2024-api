import { json } from '@sveltejs/kit';
import { data } from '$lib/data.js';

export function GET() {
  return json(data)
}
