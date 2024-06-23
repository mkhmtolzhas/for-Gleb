import Image from "next/future/image";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { FC } from "react";
import Icon from "../icon/icon.component";
import { SOCIAL_LINKS } from "../shared.constant";
import { ICONS_SIZE } from "./footer.constant";
import { SCROLL_DURATION } from "../shared.constant";

import logo from "../../resources/img/logo.webp";

const Footer: FC = () => (
  <div className="footer">
    <div className="footer__main">
      <div className="footer__main-part">
        <div className="footer__main-part-logo">
          <Image src={logo} alt="logo" width={64} height={64} />
        </div>
        <div className="footer__main-part-socials">
          <a href={SOCIAL_LINKS.TG}>
            <Icon name="tg" size={ICONS_SIZE} />
          </a>
          <a href={SOCIAL_LINKS.WA}>
            <Icon name="whatsapp" size={ICONS_SIZE} />
          </a>
          <a href={SOCIAL_LINKS.VK}>
            <Icon name="vk" size={ICONS_SIZE} />
          </a>
        </div>
        <p className="footer__main-part-copyright">(с) 2024 manicute</p>
      </div>
      <div className="footer__main-part">
        <h3>Главная</h3>
        <p>
          <ScrollLink
            to="services"
            spy={true}
            smooth={true}
            offset={0}
            duration={SCROLL_DURATION}
          >
            Прайс
          </ScrollLink>
        </p>
        <p>
          <ScrollLink
            to="gallery"
            spy={true}
            smooth={true}
            offset={0}
            duration={SCROLL_DURATION}
          >
            Галерея
          </ScrollLink>
        </p>
        <p>
          <ScrollLink
            to="contacts"
            spy={true}
            smooth={true}
            offset={0}
            duration={SCROLL_DURATION}
          >
            Контакты
          </ScrollLink>
        </p>
      </div>
    </div>
  </div>
);
export default Footer;
