import {
  SiInstagram,
  SiSubstack,
  SiKofi,
  SiMedium,
  SiLinkedin,
  SiTiktok,
} from 'react-icons/si';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      subtitle: 'Connect + Share',
      url: 'https://www.instagram.com/kexin_han_/', // Add your Instagram URL
      icon: <SiInstagram size={24} />,
    },
    {
      name: 'TikTok',
      subtitle: 'Visual Journal',
      url: 'https://www.tiktok.com/@kinii.khaos', // Add your TikTok URL
      icon: <SiTiktok size={24} />,
    },
    {
      name: 'Substack',
      subtitle: 'Notes and Reflection',
      url: 'https://khaosbyk.substack.com/', // Add your Substack URL
      icon: <SiSubstack size={24} />,
    },
    {
      name: 'Ko-fi',
      subtitle: 'Support Me',
      url: 'https://ko-fi.com/khaosbyk', // Add your Ko-fi URL
      icon: <SiKofi size={24} />,
    },
    {
      name: 'Medium',
      subtitle: 'Deep Reads',
      url: 'https://medium.com/@kexin.han', // Add your Medium URL
      icon: <SiMedium size={24} />,
    },
    {
      name: 'LinkedIn',
      subtitle: 'Professional Profile',
      url: 'https://www.linkedin.com/in/kexinhan/', // Add your LinkedIn URL
      icon: <SiLinkedin size={24} />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-32 px-64">
        <div className="w-full text-center">
          <h1 className="text-5xl font-serif font-bold text-gray-800 mb-6">
            Let's Stay in Touch
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Let's stay connected. I share creative process, behind-the-scenes,
            curatorial reflections, and new work across different platforms. Pick
            your favorite space to join me.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white p-6 rounded-lg border border-gray-300 hover:border-black hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-gray-700 group-hover:text-black transition-colors duration-300">
                    {link.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 text-left">
                      {link.name}
                    </h2>
                    <p className="text-sm text-gray-500 text-left">
                      {link.subtitle}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 