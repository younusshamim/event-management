import { useParams } from "react-router-dom";
import CreateEditEvent from "../Shared/CreateEditEvent";
import { useGetEventByIdQuery } from "../../services/eventApi";
import PageLoader from "../../components/PageLoader";
import ErrorMsg from "../../components/ErrorMsg";

const EditEvent = () => {
  const { id } = useParams();

  // query
  const { data, error, isLoading } = useGetEventByIdQuery(id);

  if (isLoading) return <PageLoader />;
  if (error) return <ErrorMsg />;

  return (
    <div>
      <CreateEditEvent eventData={data} editId={id} />
    </div>
  );
};

export default EditEvent;
