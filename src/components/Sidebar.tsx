import "../app/globals.css";

const Sidebar = ({ setLanguage }: { setLanguage: (lang: string) => void }) => {
  const languages = [
    {
      name: "python",
      logo: "https://th.bing.com/th/id/OIP.scZtKzM0T-sPYZxYBAJvRAHaIO?rs=1&pid=ImgDetMain",
    },
    {
      name: "javascript",
      logo: "https://th.bing.com/th/id/OIP.A8veaTo5HsPq7HpTWmtCMQHaHa?rs=1&pid=ImgDetMain",
    },
    {
      name: "rust",
      logo: "https://th.bing.com/th/id/OIP.23qOFGvUvXW-4Y-4XBLmuAHaEK?rs=1&pid=ImgDetMain",
    },
    {
      name: "go",
      logo: "https://download.logo.wine/logo/Go_(programming_language)/Go_(programming_language)-Logo.wine.png",
    },
    {
      name: "php",
      logo: "https://www.liblogo.com/img-logo/ph424pa62-php-logo-php-logo-png.png",
    },
    {
      name: "cpp",
      logo: "https://logowik.com/content/uploads/images/911_c_logo.jpg",
    },
  ];

  return (
    <div className="h-full w-20 bg-gray-200 dark:bg-gray-800 flex flex-col items-center py-4">
      {languages.map((lang) => (
        <button
          key={lang.name}
          onClick={() => setLanguage(lang.name)}
          className="w-full py-2 text-sm hover:bg-gray-300 dark:hover:bg-gray-700 flex flex-col items-center"
        >
          <img
            src={lang.logo}
            alt={lang.name}
            className="w-10 h-10 mb-2" // Logo size with margin at the bottom
          />
          {lang.name.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
