import { HomeScreen } from "app/features/home/screen";
import { GeneralLayout } from "app/GeneralLayout";

// @ts-ignore
HomeScreen.getLayout = function getLayout(page) {
  return <GeneralLayout>{page}</GeneralLayout>;
};

export default HomeScreen;
