import { Post, Tag, formatDate } from "@src/sanity";

interface PostCardProps {
    post: Post;
    tags: Tag[]
}

export const PostCard = ({ post, tags }: PostCardProps) => {
    return (
        <li>
            <a href={`/post/${post.slug.current}`}>
                <div className="bg-slate-100 hover:bg-slate-200 active:bg-slate-300 p-4 rounded-md">
                    <div className="flex flex-col gap-2">

                        <p className="font-bold text-lg mb-1">
                            {post.title}
                        </p>

                        <p className="text-slate-600 text-sm">
                            {formatDate(post.publishedAt)}
                        </p>

                        <div className="flex gap-2">
                            {tags.map((tag) => (
                                <p className="bg-slate-400 text-slate-50 px-3 py-1 text-xs rounded-full">
                                    {tag.name}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </a>
        </li>
    );
}