import { ProcessesScreen } from "app/features/Processes/ProcessesScreen";
import { GeneralLayout } from "app/GeneralLayout";

// @ts-ignore
ProcessesScreen.getLayout = (page) => {
  return <GeneralLayout>{page}</GeneralLayout>;
};
export default ProcessesScreen;
