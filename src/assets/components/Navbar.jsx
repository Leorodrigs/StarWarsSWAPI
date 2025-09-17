import { useNavigate } from "react-router-dom"

export const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="fixed top-0 left-0 w-full z-40 bg-stone-900 backdrop-blur-lg">
            <div className="max-w-3xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a
                    className="text-xs md:text-xl bg-gradient-to-br from-amber-300 to-yellow-500 font-semibold text-stone-900 px-1 py-1 rounded shadow-md border border-amber-500 transition-all duration-300 cursor-pointer hover:shadow-lg hover:brightness-190 active:brightness-95"
                    onClick={() => navigate('/')}>
                        INÍCIO
                    </a>            
                
                    <a 
                    className="text-xs md:text-xl mr-5 bg-gradient-to-br from-amber-300 to-yellow-500 font-semibold text-stone-900 px-1 py-1 rounded shadow-md border border-amber-500 transition-all duration-300 cursor-pointer hover:shadow-lg hover:brightness-190 active:brightness-95"
                    onClick={() => navigate('/characters')}
                    >
                        PERSONAGENS
                    </a>
                </div>
            </div>
        </nav>
    )
}

