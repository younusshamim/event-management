import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import createEventValidator from "../../validators/create-event.validator";
import PrimaryBtn from "../../components/PrimaryBtn";
import {
  useCreateEventMutation,
  useEditEventMutation,
} from "../../services/eventApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import getDefaultValues from "../EditEvent/form-utils";

const CreateEditEvent = ({ eventData, editId }) => {
  const user = useSelector((state) => state.auth.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createEventValidator),
    defaultValues: getDefaultValues(eventData ? eventData : undefined),
  });
  const navigate = useNavigate();
  const [createEvent, { isLoading: createLoading }] = useCreateEventMutation();
  const [editEvent, { isLoading: editLoading }] = useEditEventMutation();
  // data
  const loading = editLoading || createLoading;

  const onSubmit = async (data) => {
    try {
      if (editId) {
        const payload = {
          userId: user._id,
          ...data,
        };
        await editEvent({ payload, editId }).unwrap();
        toast.success("Event Edited Successfully");
        navigate("/");
      } else {
        const payload = {
          userId: user._id,
          ...data,
        };
        await createEvent(payload).unwrap();
        toast.success("Event Created Successfully");
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-10 pb-20">
      <div className="grid grid-cols-2 gap-x-20 gap-y-5">
        <label className="form-control w-full">
          <span className="label label-text">Event Title</span>
          <input
            {...register("title")}
            type="text"
            placeholder="Write Event Title"
            className="input input-bordered w-full"
          />
          {errors.title?.message && (
            <span className="label text-red-700 label-text-alt">
              {errors.title.message}
            </span>
          )}
        </label>

        <label className="form-control w-full">
          <span className="label label-text">Event Location</span>
          <input
            {...register("location")}
            type="text"
            placeholder="Write Event Location"
            className="input input-bordered w-full"
          />
          {errors.location?.message && (
            <span className="label text-red-700 label-text-alt">
              {errors.location.message}
            </span>
          )}
        </label>

        <label className="form-control col-span-2">
          <span className="label label-text">Event Description</span>
          <textarea
            {...register("description")}
            className="textarea textarea-bordered h-24"
            placeholder="Write Event Description"
          ></textarea>
          {errors.description?.message && (
            <span className="label text-red-700 label-text-alt">
              {errors.description.message}
            </span>
          )}
        </label>

        <label className="form-control w-full">
          <span className="label label-text">Start Date</span>
          <input
            {...register("start")}
            type="datetime-local"
            className="input input-bordered w-full"
          />
          {errors.start?.message && (
            <span className="label text-red-700 label-text-alt">
              {errors.start.message}
            </span>
          )}
        </label>

        <label className="form-control w-full">
          <span className="label label-text">End Date</span>
          <input
            {...register("end")}
            type="datetime-local"
            className="input input-bordered w-full"
          />
          {errors.end?.message && (
            <span className="label text-red-700 label-text-alt">
              {errors.end.message}
            </span>
          )}
        </label>
      </div>

      <div className="my-10 flex justify-end">
        <PrimaryBtn className="w-52" type="submit">
          {loading ? "Loading.." : editId ? "Edit Event" : "Create Event"}
        </PrimaryBtn>
      </div>
    </form>
  );
};

export default CreateEditEvent;
