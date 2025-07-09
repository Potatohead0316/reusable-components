import { apiSlice } from './apiSliceConfig';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getList: builder.query({
      query: () => ({
        url: 'task/list',
        method: 'GET',
      }),
      providesTags: ['Task']
    }),
    moveTask: builder.mutation({
      query: (body) => ({
        url: 'task/move-task',
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Task']
    }),
  }),
});

export const { useGetListQuery, useMoveTaskMutation } = authApi;
