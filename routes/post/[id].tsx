import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { APIResponse} from "../../types.ts";
import Axios from "npm:axios";


export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, APIResponse>) => {
    const { id } = ctx.params; 
    const { data } = await Axios.get(`https://back-p5-y0e1.onrender.com/api/posts/${id}`,);
    return ctx.render(data);
  },
};

const Page = (props: PageProps<APIResponse>) => {
 
    return (
      <div>
 

      </div>
    );
  };

  export default Page;
  


