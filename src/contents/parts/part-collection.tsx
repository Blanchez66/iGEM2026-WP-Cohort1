export function PartCollection() {
  const pdfSrc = `${import.meta.env.BASE_URL}pdfs/Part-Collection.pdf`;

  return (
    <div className="row mt-4">
      <div className="col">
        <h2>PDF</h2>
        <iframe
          src={pdfSrc}
          title="Part-Collection.pdf"
          style={{ width: "100%", height: "900px", border: "1px solid #ddd" }}
        />
      </div>
    </div>
  );
}
