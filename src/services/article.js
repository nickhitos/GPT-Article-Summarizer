import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const articleApi = createApi({
	reducerPath: "articleApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://gpt-project-worker.nickhit3802.workers.dev/"
	}),
	endpoints: (builder) => ({
		getSummary: builder.query({
			query: (params) => `?url=${encodeURIComponent(params.articleUrl)}&length=3`
		}),
	}),
});

export const { useLazyGetSummaryQuery } = articleApi;
