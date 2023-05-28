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

export async function getTag(tagRef: string): Promise<Tag> {
    return await client.fetch(
        groq`*[_type == "tag" && _id==$tagRef][0]`, { tagRef }
    );
}

export async function getTags(): Promise<Tag[]> {
    return await client.fetch(
        groq`*[_type == "tag"]`
    );
}

export async function getPostTags(post: Post): Promise<Tag[]> {
    // Returns dummy resolved promise with empty array if the post has no tags
    if (!post.tags) return Promise.resolve([]);

    const getTagsAsync = post.tags.map(async (tag) => {
        const tagRef = tag._ref;
        return await getTag(tagRef);
    });

    // Wait until all concurrent async tasks have completed
    return await Promise.all(getTagsAsync);
}

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

export interface Tag {
    // Document
    _type: "tag";
    _createdAt: string;

    // Metadata
    name?: string;
    slug: Slug;
    description?: string
}

