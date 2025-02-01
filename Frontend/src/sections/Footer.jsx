import { copyrightSign } from "../assets/icons";
import { footerLogo, KickCart_white_nobg } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col">
          <a href ='/'>
            <img src={KickCart_white_nobg} width={300} height={46} />
          </a>
          <p className="text-white-400 mt-6 text-base sm:max-w-sm font-montserrat leading-7">Get shoes ready for the new term at your doorstep. Find your perfect size. Get Rewards</p>
        
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map(icon => (
              <div key={icon.src} className="bg-white-400 rounded-full p-1.5 cursor-pointer">
                <img src={icon.src} alt={icon.alt} width={24} height={24}/>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map(footerLink => (
              <div key={footerLink.title}>
                <h4 className="text-white-400 font-palanquin text-2xl leading-normal font-medium mb-6">{footerLink.title}</h4>

                <ul>
                  {footerLink.links.map(link => (
                    <li key={link.name} className="mt-3 text-white-400 leading-normal hover:text-slate-gray font-montserrat text-base cursor-pointer">
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat">
          <img src={copyrightSign} alt="copyright sign" width={20} height={20} className="rounded-full" />
          <p>Copyright. All rights reserved</p>
        </div>

        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer;