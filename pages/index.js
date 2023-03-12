import Summary from "@/components/home/Summary";
import Work from "@/components/home/Work";
import Skills from "@/components/home/Skills";
import Education from "@/components/home/Edu";
import Lang from "@/components/home/Langs";
import Layout from "@/sections/Layout";
import Repos from "@/components/home/Repos";

export default function Home() {
  return (
    <>
      <Layout>
        <Summary />
        <Work />
        <Skills />
        <Repos />
        <Education />
        <Lang />
      </Layout>
    </>
  );
}
