interface BaseHeaderProps {
    headerClassName: string
}

export const BaseHeader = (props: BaseHeaderProps) => {
    return (
        <header className={props.headerClassName}>
            <nav className="p-2">
                <ul className="flex justify-end gap-4 text-sm sm:text-base">
                    <li>
                        <a href="/">Home</a>
                    </li>

                    <li>
                        <a href="/about">About</a>
                    </li>

                    <li>
                        <a href="/post">Posts</a>
                    </li>

                    <li>
                        <a href="/tags">Tags</a>
                    </li>

                    <li>
                        <a
                            href="https://github.com/gjtiquia/blog-website"
                            target="_blank"
                        >
                            GitHub
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )

}
