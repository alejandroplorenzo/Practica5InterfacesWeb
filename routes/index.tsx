import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { APIResponse } from "../types.ts";
import Axios from "npm:axios";
import Vista from "../islands/Vista.tsx";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, APIResponse>) => {
    const { data } = await Axios.get("https://back-p5-y0e1.onrender.com/api/posts/",);
    return ctx.render(data);
  },
};

const Page = (props: PageProps<APIResponse>) => {
  return (
    <div>
      <Vista {...props.data.data} />

      {/* {props.data.data.posts.map((e) => {
        return (
          <li key={e._id}>
            Titulo: {e.title} 
            Autor: {e.author} 
            Likes: {e.likes}
          </li>
        );
      })} */}
    </div>
  );
};
export default Page;