import { Link } from "react-router-dom";

function ButtonLink({ href, children, variant = "primary", className = "" }) {
  const classes = `button button--${variant} ${className}`.trim();
  const isRoute = href.startsWith("/");

  if (isRoute) {
    return (
      <Link className={classes} to={href}>
        <span>{children}</span>
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M5 12h13m-6-6 6 6-6 6" />
        </svg>
      </Link>
    );
  }

  return (
    <a className={classes} href={href}>
      <span>{children}</span>
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M5 12h13m-6-6 6 6-6 6" />
      </svg>
    </a>
  );
}

export default ButtonLink;
