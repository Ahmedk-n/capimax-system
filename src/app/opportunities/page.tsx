import Blog from "@/components/blogs/blog";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "Blog CapiMax - Investments  ",
};
const index = () => {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  )
}

export default index