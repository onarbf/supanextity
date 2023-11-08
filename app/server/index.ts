import {client} from '@/sanity/lib/client';

export async function getPosts(){
    const query = `*[_type == "post"]`;
    const data = await client.fetch(query);
}