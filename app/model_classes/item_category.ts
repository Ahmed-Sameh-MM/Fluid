import { z } from "zod"

export const ItemCategorySchema = z.object({
  id: z.int(),
  name: z.string(),
})

export type ItemCategory = z.infer<typeof ItemCategorySchema>
