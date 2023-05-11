interface BaseFooterProps {
    footerClassName: string
}

export const BaseFooter = (props: BaseFooterProps) => {
    return (
        <footer className={props.footerClassName}>
            <div className="flex flex-col p-2">
                <div className="flex justify-center">
                    <p>GJ's Blog</p>
                </div>
                <div className="flex justify-end">
                    <p>
                        Developed by{" "}
                        <a
                            target="_blank"
                            href="https://gjtiquia.com"
                            className="font-bold hover:text-blue-500 hover:underline"
                        >
                            GJTiquia
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

