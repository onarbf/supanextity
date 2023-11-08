import { getPosts } from "@/app/server/posts"
import PostsListItem from "./posts-list-item";

export default async function PostsList(){
    const posts = await getPosts();


    return(
    <div>
        {posts.map((post)=>{
            return <PostsListItem post={post} key={post._id}/>
        })}
        </div>)
} 