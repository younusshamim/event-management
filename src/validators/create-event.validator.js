import * as yup from "yup";

const createEventValidator = yup.object().shape({
  title: yup.string().required("Event title is required"),
  location: yup.string().required("Event location is required"),
  description: yup.string().required("Event description is required"),
  start: yup.string().required("Start date is required"),
  end: yup.string().required("End date is required"),
});

export default createEventValidator;
