export function Description() {
  const pdfSrc = `${import.meta.env.BASE_URL}pdfs/Description.pdf`;
  return (
    <div className="mt-4">
      <h2>PDF</h2>
      <iframe
        src={pdfSrc}
        title="Description.PDF"
        style={{ width: "100%", height: "900px", border: "1px solid #ddd" }}
      />
    </div>
  );
}
