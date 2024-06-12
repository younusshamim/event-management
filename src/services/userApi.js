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
    isSession: build.query({
      query(userId) {
        return {
          url: `/check-session/${userId}`,
          method: "GET",
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useCreateUserMutation, useLoginMutation, useIsSessionQuery } =
  userApi;
