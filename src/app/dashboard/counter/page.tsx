import { CartCounter } from "@/app/shopping-cart/componentes";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Counter Page',
  description: 'Pagina del contador'
}


export default function CounterPage() {




  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span className="font-serif text-xl italic mb-6 underline leading-9">Productos en el carrito</span>

      <CartCounter value={20}/>

    </div>
  );
}