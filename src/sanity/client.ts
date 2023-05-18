// Reference: https://github.com/sanity-io/sanity-template-astro-clean/blob/main/app/src/utils/sanity.ts

import { createClient, type ClientConfig, type SanityReference } from '@sanity/client'
import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug } from "@sanity/types";
import groq from 'groq'

const config: ClientConfig = {
    projectId: 'lmoctsz6',
    dataset: 'production',
    useCdn: false, // set to `false` to bypass the edge cache if you want to ensure fresh data
    apiVersion: '2023-05-18', // use current date (YYYY-MM-DD) to target the latest API version
}

export const client = createClient(config)

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

export async function getAuthor(authorRef: string): Promise<Author> {
    return await client.fetch(
        groq`*[_type == "author" && _id==$authorRef][0]`, { authorRef }
    );
}

export async function getAuthors(): Promise<Author[]> {
    return await client.fetch(
        groq`*[_type == "author"]`
    );
}

export interface Post {
    // Document
    _type: "post";
    _createdAt: string;

    // Metadata
    title?: string;
    slug: Slug;
    author?: SanityReference; // Commented because this is reference type
    mainImage?: ImageAsset;
    // categories: Category[]; // Commented because this is reference type // TODO : Change to tags
    publishedAt?: string;

    // Content
    body: PortableTextBlock[];
}

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

// TODO : Change to tags
export interface Category {
    // Document
    _type: "category";
    _createdAt: string;

    // Metadata
    title?: string;
    description?: string;
}

