// Reference: https://www.sanity.io/docs/image-url

import type { Image } from "@sanity/types";
import type { Props, TypedObject } from "astro-portabletext/types"
import { urlFor } from "@src/sanity";

export const ImageComponent = (props: Props<TypedObject>) => {
    const image = props.node as unknown as Image;
    const isNodeImage: boolean = image != null;

    return (isNodeImage ?
        (
            <RawImageComponent image={image} />
        ) : (
            <div></div>
        )
    )
}

export const RawImageComponent = ({ image }: { image?: Image }) => {
    if (!image) return (<div />)

    return (
        <img src={urlFor(image).auto("format").url()} alt={"Image"} />
    )
}