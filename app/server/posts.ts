import {client} from '@/sanity/lib/client';
import { GlobalErrorMessage } from 'sanity';

export async function getPosts(){
    const query = `*[_type == "post"]`;
    const data = await client.fetch(query);
    return data;
}