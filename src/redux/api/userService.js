import { apiSlice } from './apiSlice';

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
  }),
});

export const { useLoginUserMutation, useSignupUserMutation } = authApi;
