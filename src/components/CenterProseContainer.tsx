import type { ReactNode } from "react"

interface CenterProseContainerProps {
    children?: ReactNode
    className?: string
}

export const CenterProseContainer = (props: CenterProseContainerProps) => {
    return (
        <div className={"flex flex-col items-center " + props.className}>
            <div className={"w-full max-w-prose " + props.className}>
                {props.children}
            </div>
        </div>
    )
}