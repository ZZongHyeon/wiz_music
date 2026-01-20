import { footerNavList } from "./FooterNavList";

const FooterNav = () => {
  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-inner">
        {footerNavList.map((item, index) => {
          const Icon = item.icon;

          return (
            <a
              key={index}
              href={item.href}
              className="bottom-nav-item"
              target={item.blank ? "_blank" : undefined}
              rel={item.blank ? "noopener noreferrer" : undefined}
            >
              <Icon />
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default FooterNav;
