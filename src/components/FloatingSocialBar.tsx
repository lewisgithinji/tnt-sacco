import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

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
      icon: Twitter,
      color: "hover:bg-black",
      type: "lucide"
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
      icon: TikTokIcon,
      color: "hover:bg-black",
      type: "custom"
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
