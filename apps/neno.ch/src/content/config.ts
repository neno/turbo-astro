import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    author: z.string(),
    date: z.string(),
    image: z.string(),
    title: z.string(),
  }),
});

const experiencesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    dating: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
  experiences: experiencesCollection,
};
