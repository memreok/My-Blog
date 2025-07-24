import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BlogList from "./BlogList";
import { Link } from 'react-router-dom';


import ben from './assets/ben.jpg';
import ScrollToTopButton from "./ScroolToTopButton";

function Home() {


    return (
        <>
            <Header />

            <div className="min-h-screen relative mt-0 container mx-auto p-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                <div className="flex justify-center">
                    <img
                        src={ben}
                        alt="Vesikalık Fotoğraf"
                        className="rounded-full w-40 h-40 shadow-lg"
                    />
                </div>


                <div>
                    <h1 className="text-3xl font-bold mb-4">Merhaba, ben Mehmet Emre Ök!</h1>
                    <p className="text-white-700 mb-2 text-lg">
                        Bilgisayar mühendisliği öğrencisi ve teknoloji tutkunu bir geliştiriciyim. Yazılım geliştirme, siber güvenlik ve veri bilimi alanlarında çalışıyorum. Projelerimi <a href="https://github.com/memreok" target='_blank' className="hover:text-gray-400  items-center text-blue-600">Github</a> sayfamda yayınlıyorum.
                    </p>
                    <p className="text-white-700 text-lg">
                        <Link to="/blog" className="hover:text-gray-600  items-center text-blue-600">
                            Blog yazılarımda</Link> yazılım konularında deneyimlerimi ve öğrendiklerimi paylaşıyorum. Yeni şeyler öğrenmek ve paylaşmak benim için büyük bir tutku. ( Çok yakında sizlerle..)
                    </p>
                    <p className="text-white-700 text-xg font-bold my-4" >
                        Eğitim Hayatım
                    </p>
                    <p className="text-white-700 text-lg">
                        Ortaöğretimim sırasıyla Atatürk İlkokulu, Çanakkale Şehitleri Ortaokul ve Mehmet Doğan Fen Lisesinde geçti. 2023 yılında Mehmet Doğan Fen Lisesinden 1. olarak mezun oldum ve aynı yılda Bartın Üniversitesi Bilgisayar Mühendisliği bölümüne başladım. Şu anda 2. sınıf ögrencisiyim.
                    </p>

                    <p className="text-white-700 text-lg font-serif text-right p-5">Son Düzenleme : 08/02/2025</p>

                </div>


                <div>
                    <BlogList />
                </div>
            </div>
            <Footer />
            <ScrollToTopButton />
        </>
    );
}

export default Home;
