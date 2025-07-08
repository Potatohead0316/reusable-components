import { apiSlice } from './apiSliceConfig';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    signupUser: builder.mutation({
      query: (userData) => ({
        url: 'auth/register',
        method: 'POST',
        body: userData,
      }),
    }),
    getUserById: builder.query({
      query: (id) => ({
        url: `auth/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useLoginUserMutation, useSignupUserMutation, useGetUserByIdQuery } = authApi;
