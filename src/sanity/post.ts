import type { SanityReference } from '@sanity/client'
import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug } from "@sanity/types";
import groq from 'groq';
import { client } from './client';

export interface Post {
    // Document
    _type: "post";
    _createdAt: string;

    // Metadata
    title?: string;
    slug: Slug;
    author?: SanityReference;
    tags?: SanityReference[]; // TODO : Test if can get
    publishedAt?: string;

    // Content
    body: PortableTextBlock[];
}

export async function getPosts(): Promise<Post[]> {
    return await client.fetch(
        groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
    );
}

export async function getPost(slug: string): Promise<Post> {
    return await client.fetch(
        groq`*[_type == "post" && slug.current == $slug][0]`, { slug }
    );
}