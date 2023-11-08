import { getTranslations } from "next-intl/server"

export default async function PostsListItem({post}){

    const t = await getTranslations('Index.Component.PostsList.PostsListItem')
    return (
    <div className="rounded-lg border p-4">
        <h3><span className="font-semibold">{t('title')}:</span> {post.title}</h3>
    </div>)
}