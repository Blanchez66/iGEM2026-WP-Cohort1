
export function Description() {
  const pdfSrc = `${import.meta.env.BASE_URL}pdfs/Description.pdf`;


  return (
    <>
      <div className="row mt-4">
        <div className="col-lg-8">
          <h2>PDF</h2>
          <iframe
            src={pdfSrc}
            title="Description.PDF"
            style={{ width: "150%", height: "900px", border: "1px solid #ddd" }}
          />
        </div>
      </div>
    </>
  );
}
