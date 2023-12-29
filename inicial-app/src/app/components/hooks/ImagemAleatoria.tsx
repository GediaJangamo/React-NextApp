import Image from "next/image"
import { useState } from "react"

export default function ImagemAleatoria() {

//   const [pesquisa, setPesquisa] = useState<string>('Abstract')
   
  

    function renderizarBotao(valor: string) {
        return (
            <button className={`px-4 py-2  bg-blue-600 rounded-md`}
            // onClick={()=> setPesquisa(valor)}
            >
                {valor}
            </button>
        )
    }

    return (
        <div className="flex flex-col gap-5 border border-gray-500 p-5 rounded-md">
            <Image src='https://source.unsplash.com/featured/300x300?' height={300} width={300} alt="imagem"/>

            <div className="flex gap-5 justify-between">
                {renderizarBotao('Estudar')}
                {renderizarBotao('Ler')}
                {renderizarBotao('Praticar')}
            </div>

        </div>
    )
}