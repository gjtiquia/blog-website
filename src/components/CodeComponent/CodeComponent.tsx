import type { Props, TypedObject } from "astro-portabletext/types"
import Refractor from 'react-refractor'
import js from 'refractor/lang/javascript'
import ts from 'refractor/lang/typescript'

// import './prism.css' // Source: https://github.com/PrismJS/prism/blob/gh-pages/themes/prism.css
// import './prism-dark.css' // Source: https://github.com/PrismJS/prism/blob/gh-pages/themes/prism-dark.css
import './prism-vsc-dark-plus.css' // Source: https://github.com/PrismJS/prism-themes/blob/master/themes/prism-vsc-dark-plus.css

// Required to register the languages individually to reduce bundle size
Refractor.registerLanguage(js);
Refractor.registerLanguage(ts);

interface CodeNode extends TypedObject {
    code?: string,
    language?: string
}

export const CodeComponent = (props: Props<TypedObject>) => {
    const codeNode: CodeNode = props.node;

    return (
        <div className="">
            <Refractor
                language={codeNode.language ? codeNode.language : ""}
                value={codeNode.code ? codeNode.code : ""}
            />
        </div>
    )
}