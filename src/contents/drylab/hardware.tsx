export function Hardware() {
  const pdfSrc = `${import.meta.env.BASE_URL}pdfs/Hardware.pdf`;

  return (
    <div className="row mt-4">
      <div className="col">
        <h2>PDF</h2>
        <iframe
          src={pdfSrc}
          title="Hardware.pdf"
          style={{ width: "100%", height: "900px", border: "1px solid #ddd" }}
        />
      </div>
    </div>
    
  );
}
