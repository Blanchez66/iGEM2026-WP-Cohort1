export function HumanPractices() {
  const pdfSrc = `${import.meta.env.BASE_URL}pdfs/Best Integrated Human Practices.pdf`;

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
