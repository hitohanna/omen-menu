import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn, token } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token,
})


// ./src/utils/sanity/client.ts
// import 'server-only'

// import type { QueryParams } from '@sanity/client'
// import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId, useCdn, token } from '../env'

// // const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID // "pv8y60vp"
// // const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET // "production"
// // const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03'

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion, // https://www.sanity.io/docs/api-versioning
//   useCdn,
//   token,
// })

// const DEFAULT_PARAMS = {} as QueryParams
// const DEFAULT_TAGS = [] as string[]

// export async function sanityFetch<QueryResponse>({
//   query,
//   params = DEFAULT_PARAMS,
//   tags = DEFAULT_TAGS,
// }: {
//   query: string
//   params?: QueryParams
//   tags: string[]
// }): Promise<QueryResponse> {
//   return client.fetch<QueryResponse>(query, params, {
//     cache: 'force-cache',
//     next: {
//       //revalidate: 30, // for simple, time-based revalidation
//       tags, // for tag-based revalidation
//     },
//   })
// }


