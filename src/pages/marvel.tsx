import { Content } from "../components/content";
import MainLayout from "../components/layouts";

const Marvel = () => {
  return (
    <MainLayout header={<h1>Header</h1>}>
      <Content />
    </MainLayout>
  );
};

export default Marvel;
