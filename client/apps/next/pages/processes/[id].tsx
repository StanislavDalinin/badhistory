import { ProcessScreen } from "app/features/Processes/Process/ProcessScreen";
import { GeneralLayout } from "app/GeneralLayout";

// @ts-ignore
ProcessScreen.getLayout = (page) => <GeneralLayout>{page}</GeneralLayout>;

export default ProcessScreen;
