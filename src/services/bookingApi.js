import { api } from "./api";

const bookingApi = api.injectEndpoints({
  endpoints: (build) => ({
    createBooking: build.mutation({
      query(body) {
        return {
          url: `/bookings/create`,
          method: "POST",
          body: { ...body },
        };
      },
    }),
  }),

  overrideExisting: false,
});

export const { useCreateBookingMutation } = bookingApi;
