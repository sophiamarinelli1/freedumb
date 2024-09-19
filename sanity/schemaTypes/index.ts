import { type SchemaTypeDefinition } from "sanity";
import { post } from "../schemas/post";
import { intro } from "../schemas/intro";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [post, intro],
};
