import { type SchemaTypeDefinition } from 'sanity'
import category from './schema/category'
import menus from './schema/menus'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, menus],
}
