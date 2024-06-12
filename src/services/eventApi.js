import { api } from "./api";

const eventApi = api.injectEndpoints({
  endpoints: (build) => ({
    createEvent: build.mutation({
      query(body) {
        return {
          url: `/events/create`,
          method: "POST",
          body: { ...body },
        };
      },
    }),
    editEvent: build.mutation({
      query({ payload, editId }) {
        return {
          url: `/events/edit/${editId}`,
          method: "PUT",
          body: { ...payload },
        };
      },
    }),
    eventList: build.query({
      query(body) {
        return {
          url: `/events/list`,
          method: "POST",
          body: { ...body },
        };
      },
    }),
    getEventById: build.query({
      query(id) {
        return {
          url: `/events/list/${id}`,
          method: "GET",
        };
      },
    }),
  }),

  overrideExisting: false,
});

export const {
  useCreateEventMutation,
  useEditEventMutation,
  useEventListQuery,
  useGetEventByIdQuery,
} = eventApi;
