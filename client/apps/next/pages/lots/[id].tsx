import { LotScreen } from "app/features/home/LotScreen";
import { GeneralLayout } from "app/GeneralLayout";

// @ts-ignore
LotScreen.getLayout = (page) => {
  return <GeneralLayout>{page}</GeneralLayout>;
};

export default LotScreen;
