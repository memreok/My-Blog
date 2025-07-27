import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTopButton from './ScroolToTopButton';

function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        _gotcha: ''
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus(prevState => ({ ...prevState, submitting: true }));


        if (formData._gotcha) {

            console.log("Bot tespiti!");
            setFormStatus({ submitted: true, submitting: false, info: { error: false, msg: 'Mesajınız gönderildi.' } });
            return;
        }


        const dataToSend = {
            name: formData.name,
            email: formData.email,
            message: formData.message
        };


        const res = await fetch('https://go-smtp-service.onrender.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        });

        const responseData = await res.json();

        if (res.ok) {
            setFormStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: responseData.message }
            });
            setFormData({ name: '', email: '', message: '', _gotcha: '' });
        } else {
            setFormStatus({
                submitted: false,
                submitting: false,
                info: { error: true, msg: responseData.message || 'Bir hata oluştu.' }
            });
        }
    };

    return (
        <div className="bg-gray-900">
            <Header />
            <main className="container mx-auto min-h-screen flex flex-col justify-center items-center px-4 py-10">
                <div className="w-full max-w-lg bg-gray-800 shadow-xl rounded-lg p-6 md:p-8">
                    <h1 className="text-3xl font-bold text-white text-center mb-2">İletişime Geçin</h1>
                    <p className="text-gray-400 text-center mb-6">Aşağıdaki formu doldurarak bana ulaşabilirsiniz.</p>

                    <form onSubmit={handleSubmit}>

                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Ad Soyad</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                        </div>


                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">E-posta Adresi</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                        </div>


                        <input
                            type="text"
                            name="_gotcha"
                            value={formData._gotcha}
                            onChange={handleChange}
                            tabIndex={-1}
                            autoComplete="off"
                            className="hidden"
                        />


                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">Mesajınız</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            ></textarea>
                        </div>


                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={formStatus.submitting}
                                className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
                            >
                                {formStatus.submitting ? 'Gönderiliyor...' : 'Mesajı Gönder'}
                            </button>
                        </div>
                    </form>


                    {formStatus.info.msg && (
                        <p className={`text-center mt-4 ${formStatus.info.error ? 'text-red-500' : 'text-green-500'}`}>
                            {formStatus.info.msg}
                        </p>
                    )}
                </div>
            </main>
            <Footer />
            <ScrollToTopButton />
        </div>
    );
}

export default Contact;