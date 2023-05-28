import type { Props, TypedObject } from "astro-portabletext/types"

interface CodeNode extends TypedObject {
    code?: string,
    language?: string
}

export const CodeComponent = (props: Props<TypedObject>) => {
    const codeNode: CodeNode = props.node;

    return (
        <code>{codeNode.code}</code>
    )
}