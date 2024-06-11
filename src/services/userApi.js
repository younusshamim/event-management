import { api } from "./api";

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    createUser: build.mutation({
      query(body) {
        return {
          url: `/users`,
          method: "POST",
          body: { ...body },
        };
      },
    }),
    login: build.mutation({
      query(body) {
        return {
          url: `/users/login`,
          method: "POST",
          body: { ...body },
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useCreateUserMutation, useLoginMutation } = userApi;
