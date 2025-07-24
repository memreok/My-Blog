import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BlogList from "./BlogList";
import { Link } from 'react-router-dom';
import ScrollToTopButton from "./ScroolToTopButton";

function Home() {
    return (
        <>
            <Header />


            <div className="min-h-screen relative container mx-auto p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">


                <div className="md:col-span-2">
                    <h1 className="text-4xl font-bold mb-4 text-white">Merhaba, ben Mehmet Emre Ök!</h1>
                    <p className="text-gray-300 mb-4 text-lg">
                        Bilgisayar mühendisliği öğrencisi ve teknoloji tutkunu bir geliştiriciyim. Yazılım geliştirme ve siber güvenlik alanlarında çalışıyorum. Projelerimi <a href="https://github.com/memreok" target='_blank' rel="noopener noreferrer" className="text-blue-400 hover:underline">Github</a> sayfamda yayınlıyorum.
                    </p>
                    <p className="text-gray-300 text-lg">
                        Siber güvenlik dünyasına tutkuyla bağlıyım ve kariyerimi bu alanda, özellikle savunma stratejileri ve sistem güvenliği üzerine odaklanan Blue Team alanında şekillendirmeyi hedefliyorum. Güçlü bir savunmanın, birçok saldırıyı engelleyebileceğine inanıyorum.
                    </p>


                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                        İlgilendiğim Alanlar ve Yeteneklerim
                    </h2>
                    <p className="text-gray-300 text-lg mb-4">
                        Saldırı ve savunma odaklı bir bakış açısıyla aşağıdaki alanlarda bilgi ve deneyim sahibiyim:
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">🛡️ Siber Güvenlik Temelleri</h3>

                    <ul className="space-y-3 text-gray-300 list-inside">
                        <li className="flex items-start gap-x-3">
                            <span className="mt-1">✅</span>
                            <span><strong>Ağ Temelleri ve Güvenliği:</strong> TCP/IP, Firewall, IDS/IPS, VPN ve ağ trafiği analizi gibi konularda temel bilgiye sahibim.</span>
                        </li>
                        <li className="flex items-start gap-x-3">
                            <span className="mt-1">✅</span>
                            <span><strong>Web Uygulama Güvenliği:</strong> OWASP Top 10 zafiyetleri (XSS, SQL Injection vb.) ve bu zafiyetlere karşı alınacak önlemler konusunda bilgiliyim.</span>
                        </li>
                        <li className="flex items-start gap-x-3">
                            <span className="mt-1">✅</span>
                            <span><strong>Linux Temelleri ve Güvenliği:</strong> Linux sistemlerde yetkilendirme, güvenlik duvarı yapılandırması ve log yönetimi gibi temel güvenlik prensiplerine hakimim.</span>
                        </li>
                        <li className="flex items-start gap-x-3">
                            <span className="mt-1">✅</span>
                            <span><strong>Tersine Mühendislik ve Zararlı Yazılım Analizi:</strong> Zararlı yazılımların statik ve dinamik analizinin temellerini anlıyor ve assembly diline temel düzeyde aşinayım.</span>
                        </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">💻 Yazılım Geliştirme</h3>
                    <ul className="space-y-3 text-gray-300 list-inside">
                        <li className="flex items-start gap-x-3">
                            <span className="mt-1">▶️</span>
                            <span><strong>PHP & Laravel:</strong> Güçlü ve güvenli web uygulamaları geliştirmek için PHP ve Laravel çerçevesini etkin bir şekilde kullanıyorum. Özellikle MVC mimarisi ve ORM konularında deneyimliyim.</span>
                        </li>
                        <li className="flex items-start gap-x-3">
                            <span className="mt-1">▶️</span>
                            <span><strong>Veritabanı:</strong> MySQL, PostgreSQL</span>
                        </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">🔧 Araçlar ve Teknolojiler</h3>
                    <p className="text-gray-300">
                        Wireshark, Nmap, Metasploit (temel düzeyde), Burp Suite (temel düzeyde), Git & GitHub, Docker (temel düzeyde)
                    </p>

                    <p className="text-gray-300 text-lg mt-8">
                        <Link to="/blog" className="text-blue-400 hover:underline">
                            Blog yazılarımda
                        </Link> yazılım konularında deneyimlerimi ve öğrendiklerimi paylaşıyorum. Yeni şeyler öğrenmek ve paylaşmak benim için büyük bir tutku. (Çok yakında sizlerle..)
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                        Eğitim Hayatım
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Ortaöğretimim sırasıyla Atatürk İlkokulu, Çanakkale Şehitleri Ortaokul ve Mehmet Doğan Fen Lisesinde geçti. 2023 yılında Mehmet Doğan Fen Lisesinden 1. olarak mezun oldum ve aynı yılda Bartın Üniversitesi Bilgisayar Mühendisliği bölümüne başladım. Şu anda 3. sınıf ögrencisiyim.
                    </p>

                    <p className="text-gray-500 text-sm text-right mt-10">Son Düzenleme: 24/07/2025</p>
                </div>


                <div className="md:col-span-1">
                    <BlogList />
                </div>
            </div>
            <Footer />
            <ScrollToTopButton />
        </>
    );
}

export default Home;