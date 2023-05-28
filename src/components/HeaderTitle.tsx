interface HeaderTitleProps {
    title: string;
    className?: string;
}

export const HeaderTitle = ({ title, className }: HeaderTitleProps) => {
    return (
        <div className={`prose dark:prose-invert ${className}`}>
            <h1>{title}</h1>
        </div>
    )
}