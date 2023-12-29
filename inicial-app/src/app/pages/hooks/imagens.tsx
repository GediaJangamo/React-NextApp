import ImagemAleatoria from "@/app/components/hooks/ImagemAleatoria"

export default function PaginaImagem() {
    return (
        <div className="flex justify-center gap-5 bg-purple-600 ">
            <ImagemAleatoria />
            <ImagemAleatoria />
            <ImagemAleatoria />

        </div>
    )
}