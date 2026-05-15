const icons = {
  tool: (
    <path d="m14.7 6.3 3-3a4.2 4.2 0 0 1-5.4 5.4l-6.5 6.5a2.3 2.3 0 1 0 3 3l6.5-6.5a4.2 4.2 0 0 1 5.4-5.4l-3 3-3-3Z" />
  ),
  drone: (
    <>
      <path d="M9 12h6m-3-3v6" />
      <path d="M5 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm14 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM5 13a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm14 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      <path d="M7.2 7.2 10 10m6.8-2.8L14 10m-6.8 6.8L10 14m6.8 2.8L14 14" />
    </>
  ),
  spark: (
    <>
      <path d="M12 2v5m0 10v5M2 12h5m10 0h5" />
      <path d="m5 5 3.5 3.5M15.5 15.5 19 19m0-14-3.5 3.5M8.5 15.5 5 19" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3m0 14v3M2 12h3m14 0h3" />
    </>
  ),
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M10 3v4m4-4v4m-4 10v4m4-4v4M3 10h4m-4 4h4m10-4h4m-4 4h4" />
    </>
  ),
  rocket: (
    <>
      <path d="M14 4c2.8.4 4.6 2.2 5 5l-7.5 7.5-4-4L14 4Z" />
      <path d="M9 15 6.5 18.5 5 17l3.5-2.5m.5-5L5 9l4-4 .5 4m5.5 6.5L15 20l4-4-4.5-.5" />
    </>
  ),
};

function ServiceIcon({ name }) {
  return (
    <svg className="service-icon" aria-hidden="true" viewBox="0 0 24 24">
      {icons[name]}
    </svg>
  );
}

export default ServiceIcon;
