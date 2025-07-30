import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

/**
 * @typedef {Object} WideLinkProps
 * @property {string} [to]
 * @property {string} [href]
 * @property {React.ReactNode} children
 * @property {string} [className]
 * @property {React.AnchorHTMLAttributes<HTMLAnchorElement> & React.ComponentPropsWithoutRef<typeof Link>} [props]
 */

/**
 * Stylized React Router Link `<Link>` or anchor `<a>` tag.
 *
 * If the `to` property is present, it is inferred this should be a Link.
 * If the `href` property is present, it is inferred this should be an
 * anchor. Only one of these properties should be defined.
 *
 * @param {WideLinkProps} props
 */
export default function WideLink({ to, href, children, className = "", ...props }) {
  const classes = twMerge(wideButtonClassNames, className);

  return to ? (
    <Link
      to={to}
      className={`${wideButtonClassNames} ${classes}`}
      {...props}
    >
      {children}
    </Link>
  ) : (
    <a
      href={href}
      className={`${wideButtonClassNames} ${classes}`}
      {...props}
    >
      {children}
    </a>
  );
}

export const wideButtonClassNames =
  "bg-dark-pink-button text-white rounded-md text-center py-1.5 hover:bg-transparent border border-dark-pink-button transition-colors duration-300 hover:text-dark-pink";
