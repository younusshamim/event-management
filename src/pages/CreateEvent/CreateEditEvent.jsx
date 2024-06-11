import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import createEventValidator from "../../validators/create-event.validator";
import PrimaryBtn from "../../components/PrimaryBtn";
import Textarea from "../../components/Textarea";

const CreateEditEvent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createEventValidator),
    //   defaultValues: country,
  });

  const onSubmit = async () => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-10 pb-20">
      <div className="grid grid-cols-2 gap-x-20 gap-y-5">
        <Input
          label="Event Title"
          placeholder="Write Event Title"
          {...register("title")}
          error={errors.title?.message}
        />
        <Input
          label="Event Location"
          placeholder="Write Event Location"
          {...register("location")}
          error={errors.location?.message}
        />
        <Textarea
          className="col-span-2"
          label="Event Description"
          placeholder="Write Event Description"
          {...register("description")}
          error={errors.description?.message}
        />
        <Input
          type="datetime-local"
          label="Start Date"
          {...register("start")}
          error={errors.start?.message}
        />
        <Input
          type="datetime-local"
          label="End Date"
          {...register("end")}
          error={errors.end?.message}
        />
      </div>

      <div className="my-10 flex justify-end">
        <PrimaryBtn className="w-52">Create Event</PrimaryBtn>
      </div>
    </form>
  );
};

export default CreateEditEvent;
