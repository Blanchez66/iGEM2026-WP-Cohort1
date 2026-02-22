export function Model() {
  const pdfSrc = `${import.meta.env.BASE_URL}pdfs/Model.pdf`;
  const codeSrc = `${import.meta.env.BASE_URL}pdfs/${encodeURIComponent("modelingcode.zip")}`;

  return (
    <div className="row mt-4">
      <div className="col">
        <h2>PDF</h2>
        <iframe
          src={pdfSrc}
          title="Model.pdf"
          style={{ width: "100%", height: "900px", border: "1px solid #ddd" }}
        />
      </div>
      <div className="mt-3">
        <h2>Links</h2>
        <div className="mb-2">
          Download{" "}
          <a href={codeSrc} download aria-label="Download modelingcode.zip">imodelingcode.zip 🔗</a>
        </div>
      </div>
    </div>
  );
}
