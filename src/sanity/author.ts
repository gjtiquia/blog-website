import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug } from "@sanity/types";
import type { Post } from './post';
import { client } from './client';
import groq from 'groq';

export interface Author {
    // Document
    _type: "author";
    _createdAt: string;

    // Metadata
    name?: string;
    slug: Slug;
    image?: ImageAsset;
    bio: PortableTextBlock[];
}

export async function getAuthor(post: Post): Promise<Author> {

    const authorRef = post.author ? post.author._ref : "";

    return await client.fetch(
        groq`*[_type == "author" && _id==$authorRef][0]`, { authorRef }
    );
}

export async function getAuthors(): Promise<Author[]> {
    return await client.fetch(
        groq`*[_type == "author"]`
    );
}