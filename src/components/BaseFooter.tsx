import { ListElement } from "./BaseHeader"

interface BaseFooterProps {
    footerClassName: string
}

export const BaseFooter = (props: BaseFooterProps) => {
    return (
        <footer className={props.footerClassName + "prose prose-hr:mt-16 prose-hr:mb-0 prose-a:text-sm prose-p:text-sm text-gray-700"}>
            <hr />
            <div className="flex flex-col p-2">
                <nav className="px-2 py-1">
                    <ul className="flex flex-wrap justify-center gap-0.5">
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

                        <ListElement>
                            <a
                                href="https://blog-gjtiquia.sanity.studio/"
                                target="_blank"
                            >
                                Studio
                            </a>
                        </ListElement>
                    </ul>
                </nav>
                <div className="flex justify-center">
                    <p>GJ's Blog</p>
                </div>
                <div className="flex justify-end mt-2">
                    <p>
                        Developed by{" "}
                        <a
                            target="_blank"
                            href="https://gjtiquia.com"
                            className="font-bold hover:text-blue-800 hover:underline"
                        >
                            GJTiquia
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

