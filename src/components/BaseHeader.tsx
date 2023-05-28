import { ReactNode, useEffect, useState } from "react"

// Reference: https://fontawesome.com/v6/docs/web/use-with/react/add-icons#add-individual-icons-explicitly
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
// import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons"

interface BaseHeaderProps {
    headerClassName: string
}

interface ListProps {
    children?: ReactNode
}

export const ListElement = (props: ListProps) => {
    return (
        <li className="hover:bg-slate-200 active:bg-slate-300 dark:hover:bg-gray-700 dark:active:bg-gray-600 px-2 py-0.5 rounded-md">
            {props.children}
        </li>
    )
}

export const BaseHeader = (props: BaseHeaderProps) => {
    const [isMounted, setIsMounted] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

    const handleClick = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <header className={props.headerClassName + "prose prose-hr:mb-4 dark:prose-hr:border-gray-700 prose-a:text-sm prose-p:text-sm text-gray-700 dark:text-gray-300"}>
            <nav className="px-2 py-1">
                <ul className="flex flex-wrap justify-end gap-0.5">
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
                        <button className="text-sm" onClick={handleClick}>
                            {isMounted
                                ? < FontAwesomeIcon icon={theme === "light" ? faSun : faMoon} />
                                : <div>{"···"}</div>
                            }
                        </button>
                    </ListElement>
                </ul>
            </nav>
            <hr />
        </header>
    )

}
