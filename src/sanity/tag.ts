import type { Slug } from "@sanity/types";
import groq from 'groq';
import { client } from './client';
import type { Post } from "./post";

export interface Tag {
    // Document
    _type: "tag";
    _createdAt: string;

    // Metadata
    name?: string;
    slug: Slug;
    description?: string
}

export async function getTag(tagRef: string): Promise<Tag> {
    return await client.fetch(
        groq`*[_type == "tag" && _id==$tagRef][0]`, { tagRef }
    );
}

export async function getTags(): Promise<Tag[]> {
    return await client.fetch(
        groq`*[_type == "tag"] | order(name asc)`
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