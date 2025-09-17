import { useNavigate } from "react-router-dom"

export const Home = () => {
    const navigate = useNavigate();

    return (
        <section
            id="home"
            className="w-full min-h-screen bg-stars min-h-screen flex items-center justify-center min-h-screen flex items-center justify-center ml-10rem relative">
                <div className="flex items-center h-16">    
                    <a 
                    className="bg-gradient-to-br from-amber-300 to-yellow-500 text-2xl md:text-5xl font-semibold text-stone-900 px-3 py-3 rounded shadow-md border border-amber-500 transition-all duration-300 cursor-pointer hover:shadow-lg hover:brightness-190 active:brightness-95"
                    onClick={() => navigate('/characters')}
                    >
                        PERSONAGENS
                    </a>
                </div>
        </section>
    )
}