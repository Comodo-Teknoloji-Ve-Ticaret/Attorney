import React, { useState } from 'react';
import { Scale, Menu, X } from 'lucide-react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('anasayfa');

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // header height + extra padding
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
        setActiveSection(sectionId.replace('#', ''));
    };

    return (
        <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center space-x-3">
                        <Scale className="h-8 w-8 text-amber-400" />
                        <div>
                            <h1 className="text-xl font-bold"> Basak Ahısha</h1>
                            <p className="text-sm text-gray-300">Avukatlık Bürosu</p>
                        </div>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        <button 
                            onClick={() => scrollToSection('anasayfa')}
                            className={`relative py-2 px-1 transition-colors ${
                                activeSection === 'anasayfa' 
                                ? 'text-amber-400' 
                                : 'hover:text-amber-400'
                            } before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-amber-400 before:transform before:scale-x-0 before:transition-transform before:duration-300 ${
                                activeSection === 'anasayfa' 
                                ? 'before:scale-x-100' 
                                : 'hover:before:scale-x-100'
                            }`}
                        >
                            Ana Sayfa
                        </button>
                        <button 
                            onClick={() => scrollToSection('hakkimizda')}
                            className={`relative py-2 px-1 transition-colors ${
                                activeSection === 'hakkimizda' 
                                ? 'text-amber-400' 
                                : 'hover:text-amber-400'
                            } before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-amber-400 before:transform before:scale-x-0 before:transition-transform before:duration-300 ${
                                activeSection === 'hakkimizda' 
                                ? 'before:scale-x-100' 
                                : 'hover:before:scale-x-100'
                            }`}
                        >
                            Hakkımızda
                        </button>
                        <button 
                            onClick={() => scrollToSection('dundar-ai')}
                            className={`relative py-2 px-1 transition-colors ${
                                activeSection === 'dundar-ai' 
                                ? 'text-amber-400' 
                                : 'hover:text-amber-400'
                            } before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-amber-400 before:transform before:scale-x-0 before:transition-transform before:duration-300 ${
                                activeSection === 'dundar-ai' 
                                ? 'before:scale-x-100' 
                                : 'hover:before:scale-x-100'
                            }`}
                        >
                            Yapay Zeka'ya sor
                        </button>
                        <button 
                            onClick={() => scrollToSection('hizmetler')}
                            className={`relative py-2 px-1 transition-colors ${
                                activeSection === 'hizmetler' 
                                ? 'text-amber-400' 
                                : 'hover:text-amber-400'
                            } before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-amber-400 before:transform before:scale-x-0 before:transition-transform before:duration-300 ${
                                activeSection === 'hizmetler' 
                                ? 'before:scale-x-100' 
                                : 'hover:before:scale-x-100'
                            }`}
                        >
                            Hizmetlerimiz
                        </button>
                        <button 
                            onClick={() => scrollToSection('ekip')}
                            className={`relative py-2 px-1 transition-colors ${
                                activeSection === 'ekip' 
                                ? 'text-amber-400' 
                                : 'hover:text-amber-400'
                            } before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-amber-400 before:transform before:scale-x-0 before:transition-transform before:duration-300 ${
                                activeSection === 'ekip' 
                                ? 'before:scale-x-100' 
                                : 'hover:before:scale-x-100'
                            }`}
                        >
                            Ekibimiz
                        </button>
                        <button 
                            onClick={() => scrollToSection('iletisim')}
                            className={`relative py-2 px-1 transition-colors ${
                                activeSection === 'iletisim' 
                                ? 'text-amber-400' 
                                : 'hover:text-amber-400'
                            } before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-amber-400 before:transform before:scale-x-0 before:transition-transform before:duration-300 ${
                                activeSection === 'iletisim' 
                                ? 'before:scale-x-100' 
                                : 'hover:before:scale-x-100'
                            }`}
                        >
                            İletişim
                        </button>
                    </nav>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden pb-4">
                        <nav className="flex flex-col space-y-2">
                            <button onClick={() => scrollToSection('anasayfa')} 
                                className={`text-left py-2 px-4 transition-all duration-300 ${
                                    activeSection === 'anasayfa' 
                                    ? 'text-amber-400 bg-slate-800' 
                                    : 'hover:text-amber-400 hover:bg-slate-800'
                                }`}>
                                Ana Sayfa
                            </button>
                            <button onClick={() => scrollToSection('hakkimizda')} 
                                className={`text-left py-2 px-4 transition-all duration-300 ${
                                    activeSection === 'hakkimizda' 
                                    ? 'text-amber-400 bg-slate-800' 
                                    : 'hover:text-amber-400 hover:bg-slate-800'
                                }`}>
                                Hakkımızda
                            </button>
                            <button onClick={() => scrollToSection('dundar-ai')} 
                                className={`text-left py-2 px-4 transition-all duration-300 ${
                                    activeSection === 'dundar-ai' 
                                    ? 'text-amber-400 bg-slate-800' 
                                    : 'hover:text-amber-400 hover:bg-slate-800'
                                }`}>
                                 Yapay Zeka'ya Sor
                            </button>
                            <button onClick={() => scrollToSection('hizmetler')} 
                                className={`text-left py-2 px-4 transition-all duration-300 ${
                                    activeSection === 'hizmetler' 
                                    ? 'text-amber-400 bg-slate-800' 
                                    : 'hover:text-amber-400 hover:bg-slate-800'
                                }`}>
                                Hizmetlerimiz
                            </button>
                            <button onClick={() => scrollToSection('ekip')} 
                                className={`text-left py-2 px-4 transition-all duration-300 ${
                                    activeSection === 'ekip' 
                                    ? 'text-amber-400 bg-slate-800' 
                                    : 'hover:text-amber-400 hover:bg-slate-800'
                                }`}>
                                Ekibimiz
                            </button>
                            <button onClick={() => scrollToSection('iletisim')} 
                                className={`text-left py-2 px-4 transition-all duration-300 ${
                                    activeSection === 'iletisim' 
                                    ? 'text-amber-400 bg-slate-800' 
                                    : 'hover:text-amber-400 hover:bg-slate-800'
                                }`}>
                                İletişim
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
export default Header;