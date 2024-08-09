import Tab from "@/app/(afterLogin)/home/_component/Tab";
import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";
import PostForm from "@/app/(afterLogin)/home/_component/PostForm";

const Home = () => {
  return (
    <main className="main">
        <TabProvider>
            <Tab />
            <PostForm />
        </TabProvider>
    </main>
  );
};

export default Home;
