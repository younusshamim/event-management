import * as yup from "yup";

const createEventValidator = yup.object().shape({
  title: yup.string().required("Event title is required"),
  location: yup.string().required("Event location is required"),
  description: yup.string().required("Event description is required"),
  start: yup.date().required("Start date is required"),
  end: yup.date().required("End date is required"),
});

export default createEventValidator;
