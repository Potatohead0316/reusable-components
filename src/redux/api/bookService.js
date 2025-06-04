import { apiSlice } from './apiSlice';

export const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    bookList: builder.query({
      query: () => '/book/list-books',
      providesTags: ['book-list']
    }),

    findBook: builder.query({
      query: (id) => `/book/find-book/${id}`,
    }),

    addBook: builder.mutation({
      query: (bookData) => ({
        url: '/book/add-book',
        method: 'POST',
        body: bookData,
      }),
      invalidatesTags: ['book-list']
    }),

    updateBook: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/book/update-book/${id}`,
        method: 'PUT',
        body: updatedData,
      }),
      invalidatesTags: ['book-list']
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/book/delete-book/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['book-list']
    }),
  }),
});

export const {
  useBookListQuery,
  useFindBookQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;
