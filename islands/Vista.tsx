import { useSignal } from "@preact/signals";
import { Data } from "../types.ts";

export default function VistaIsland({ posts }: Data) {
  const cambioVista = useSignal<boolean>(false);
  return (
    <div >
      <button onClick={() => (cambioVista.value = !cambioVista.value)}>
        {cambioVista.value ? "Lista" : "Cuadricula"}
      </button>
      <div class={cambioVista.value ? "container" : ""}>
        {posts.map((e) => (
          <div key={e._id} className={cambioVista.value ? "post" : ""}>
            {cambioVista.value && <img src={e.cover} />}
            Titulo: {e.title} Autor: {e.author} Likes: {e.likes} 
          </div>
        ))}
      </div>
    </div>
  );
}

