import type { ReactNode } from "react"

interface BaseHeaderProps {
    headerClassName: string
}

interface ListProps {
    children?: ReactNode
}

export const ListElement = (props: ListProps) => {
    return (
        <li className="hover:bg-slate-200 active:bg-slate-300 px-2 py-0.5 rounded-md">
            {props.children}
        </li>
    )
}

export const BaseHeader = (props: BaseHeaderProps) => {
    return (
        <header className={props.headerClassName + "prose prose-hr:mb-4 prose-a:text-sm prose-p:text-sm text-gray-700"}>
            <nav className="px-2 py-1">
                <ul className="flex justify-end gap-0.5">
                    <ListElement>
                        <a href="/">Home</a>
                    </ListElement>

                    <ListElement>
                        <a href="/about">About</a>
                    </ListElement>

                    <ListElement>
                        <a href="/posts">Posts</a>
                    </ListElement>

                    <ListElement>
                        <a href="/tags">Tags</a>
                    </ListElement>

                    <ListElement>
                        <a
                            href="https://github.com/gjtiquia/blog-website"
                            target="_blank"
                        >
                            GitHub
                        </a>
                    </ListElement>
                </ul>
            </nav>
            <hr />
        </header>
    )

}
