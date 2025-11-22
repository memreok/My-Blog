import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTopButton from './ScroolToTopButton';


const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);


function ProjectsPage() {
    const projects = [
        {
            title: "VulnTrack - Güvenlik Açığı Takip Simülatörü",
            description: "Bu uygulama, bir yazılım geliştirme ekibi veya siber güvenlik birimi için tasarlanmış bir Güvenlik Açığı Takip Sistemi Simülatörüdür (VulnTrack). Projenin temel amacı, bir yazılım ürünündeki veya sistemdeki güvenlik açıklarının (zafiyetlerin) keşfedildiği andan kapatıldığı ana kadar olan tüm yaşam döngüsünü düzenli bir şekilde yönetmektir.",
            technologies: ["PHP", "Laravel", "MySQL"],
            features: [
                "Güvenlik açıklarının detaylı kaydı ve yönetimi",
                "Kullanıcı rolleri (geliştirici, analist, yönetici)",
                "Zafiyet önem derecesi, durumu ve türünün takibi",
                "Kullanıcılara zafiyet atama (assign) ve takip",
                "Etiketler (Tags) ile zafiyet sınıflandırma (XSS, SQL Injection vb.)",
                "Ekip içi iş birliği için yorum sistemi",
                "Tüm değişiklikler için aktivite kaydı (Activity Log)"
            ],
            githubLink: "https://github.com/memreok/vulntrack"
        },
        {
      title: "OBSAP - Otobüs Bileti Satın Alma Platformu",
      description: "Otobüs bileti satış süreçlerini dijitalleştiren; Admin, Firma Yetkilisi ve Son Kullanıcı olmak üzere 3 farklı rol mekanizmasına sahip kapsamlı bir web uygulaması. Docker üzerinde çalışan bir proje.",
      technologies: ["PHP", "SQLite", "Docker", "Tailwind CSS", "RBAC"],
      features: [
          "Rol Bazlı Yetkilendirme (RBAC): Session tabanlı güvenli oturum yönetimi ve yetki kontrolü.",
          "Admin Paneli: Sistemdeki tüm firmaların, firma yetkililerinin ve kuponların merkezi yönetimi.",
          "Firma Paneli: Firmaların kendi seferlerini oluşturması, bilet satışlarını analiz etmesi ve gelir takibi yapması.",
          "Kullanıcı Deneyimi: Görsel koltuk seçimi (dolu/boş/koridor), bilet satın alma, iptal etme ve profil yönetimi.",
          "Altyapı: Docker Compose ile izole edilmiş, hızlı kurulum ve çalıştırma ortamı."
      ],
      githubLink: "https://github.com/memreok/bilet-satin-alma-obsap"
        },  
        {
            title: "The Password Game",
            description: "Bu projenin temel amacı, kullanıcılara eğlenceli bir senaryo üzerinden güçlü ve karmaşık şifreler oluşturmanın önemini kavratmaktır. Geleneksel şifreleme yöntemlerinin yetersiz kalabildiği günümüzde, kullanıcıları yaratıcı ve zorlu şifreler oluşturmaya teşvik ederek çevrimiçi güvenlik bilincini artırmayı hedeflemektedir.",
            technologies: ["PHP", "MySQL"],
            features: [
                "Oyundaki kuralları en kısa sürede tamamlayarak şifre oluşturmanız beklenmektedir.",
                "Kullanıcılara eğlenceli bir vakit sunmayı hedeflerken aynı zamanda şifre güvenliği bilinci kazandırmaya çalışılmıştır."
            ],
            githubLink: "https://github.com/memreok/thepasswordgame"
        }

    ];

    return (
        <div className="bg-gray-900 text-white">
            <Header />
            <main className="container mx-auto min-h-screen px-6 py-10">
                <h1 className="text-4xl font-bold mb-12 text-center">🚀 Projelerim</h1>

                <div className="flex flex-col gap-12">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 transform hover:scale-105 transition-transform duration-300">
                            <h2 className="text-2xl md:text-3xl font-bold text-teal-400 mb-3">{project.title}</h2>
                            <p className="text-gray-300 mb-4">{project.description}</p>

                            <div className="mb-4">
                                <strong className="font-semibold">Kullanılan Teknolojiler:</strong>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="bg-gray-700 text-teal-300 text-sm font-medium px-3 py-1 rounded-full">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <strong className="font-semibold">Öne Çıkan Özellikler:</strong>
                                <ul className="list-disc list-inside mt-2 space-y-2 text-gray-400">
                                    {project.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-lg mt-6 transition-colors duration-300"
                            >
                                <GitHubIcon />
                                GitHub'da Görüntüle
                            </a>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
            <ScrollToTopButton />
        </div>
    );
}

export default ProjectsPage;