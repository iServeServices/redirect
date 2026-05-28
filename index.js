export default function handler(req, res) {
  const { url } = req;

  const map = {
    "/privacy-policy": "privacy-policy",
    "/terms-and-conditions": "terms-and-conditions",
    "/end-user-license-agreement": "end-user-license-agreement",
    "/csam": "csam",
  };

  if (map[url]) {
    return res.status(200).send(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta http-equiv="refresh" content="0; url=https://anonymoustoc.com/#${map[url]}" />
        </head>
        <body></body>
      </html>
    `);
  }

  return res.redirect("https://anonymoustoc.com");
}
