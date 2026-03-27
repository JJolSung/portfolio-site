export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: "#0a0a0a",
          color: "#e5e5e5",
          fontFamily: "system-ui, sans-serif",
          margin: 0,
        }}
      >
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1 style={{ fontSize: "4rem", fontWeight: 700, marginBottom: "0.5rem" }}>
            404
          </h1>
          <p style={{ color: "#737373", marginBottom: "2rem" }}>Page not found</p>
          <a
            href="/en"
            style={{
              color: "#c8f542",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            }}
          >
            Go to homepage
          </a>
        </div>
      </body>
    </html>
  );
}
