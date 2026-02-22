export function HumanPractices() {
  const pdfSrc1 = `${import.meta.env.BASE_URL}pdfs/Best Integrated Human Practices.pdf`;
  const pdfSrc2 = `${import.meta.env.BASE_URL}pdfs/Human Practice.pdf`;

  return (
    <div className="row mt-4">
      <div className="col-12">
        <h2>PDF</h2>
        <h3>1</h3>
        <p>Best Integrated Human Practices</p>
        <iframe
          src={pdfSrc1}
          title="Best Integrated Human Practices.pdf"
          style={{ width: "100%", height: "900px", border: "1px solid #ddd" }}
        />
      </div>
      <div className="col-12 mt-4">
        <h3>2</h3>
        <p>The following document contains the specific design ideas for Human Practice and part of the expected Wiki presentation.</p>
        <iframe
          src={pdfSrc2}
          title="Human Practice.pdf"
          style={{ width: "100%", height: "900px", border: "1px solid #ddd" }}
        />
      </div>
    </div>
  );
}
