import { Facebook, Instagram, Youtube } from "lucide-react";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";

export const FloatingSocialBar = () => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/TntSacco",
      icon: Facebook,
      color: "hover:bg-[#1877F2]",
      type: "lucide"
    },
    {
      name: "X",
      url: "https://x.com/Tnt_Sacco",
      icon: FaXTwitter,
      color: "hover:bg-black",
      type: "react-icon"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/tnt_sacco/",
      icon: Instagram,
      color: "hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F77737]",
      type: "lucide"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@tntsacco1478",
      icon: Youtube,
      color: "hover:bg-[#FF0000]",
      type: "lucide"
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@tnt.sacco",
      icon: FaTiktok,
      color: "hover:bg-black",
      type: "react-icon"
    }
  ];

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-3 shadow-2xl border border-gray-700/50">
        <div className="flex flex-col space-y-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${social.name}`}
                className={`
                  w-12 h-12 flex items-center justify-center rounded-xl
                  bg-gray-800 text-white
                  ${social.color}
                  hover:scale-110 hover:rotate-6
                  transition-all duration-300
                  group
                  focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-gray-900
                `}
              >
                <Icon className="w-6 h-6 group-hover:animate-pulse" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
