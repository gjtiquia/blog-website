import type { Tag } from "@src/sanity"

export const TagListElement = ({ tag }: { tag: Tag }) => {
    return (
        <li>
            <a
                className="bg-slate-400 hover:bg-slate-500 active:bg-slate-600 text-slate-50 dark:bg-gray-500 dark:text-gray-200 dark:hover:bg-gray-400 dark:active:bg-gray-300 px-4 py-1 rounded-full"
                href={`/tag/${tag.slug.current}`}
            >
                {tag.name}
            </a>
        </li>
    );
}