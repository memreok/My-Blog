import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTopButton from './ScroolToTopButton';

function Contact() {
    return (
        <>
            <Header />
            <main className=" p-6 flex justify-center items-center h-screen">
                <section className=" bg-gray-600 shadow-md rounded-lg p-6 max-w-md text-center">
                    <h1 className="text-2xl font-bold text-gray-100 mb-4">İletişim Bilgileri</h1>
                    <p className="text-gray-200 mb-4">
                        Benimle e-mail veya LinkedIn üzerinden iletişim kurabilirsiniz.
                    </p>
                    <div className="space-y-4">
                        <div>
                            <h2 className="text-lg font-medium text-gray-300">Email</h2>
                            <a
                                href="mailto:iletisim@mehmetemreok.com"
                                className="text-blue-400 hover:underline"
                            >
                                iletisim@mehmetemreok.com
                            </a>
                        </div>
                        <div>
                            <h2 className="text-lg font-medium text-gray-300">LinkedIn</h2>
                            <a
                                href="https://www.linkedin.com/in/mehmet-emre-%C3%B6k-a6433620a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline"
                            >
                                https://www.linkedin.com/in/mehmet-emre-%C3%B6k-a6433620a/
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <ScrollToTopButton />
        </>
    );
}

export default Contact;
