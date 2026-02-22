export function Hardware() {
  const pdfSrc = `${import.meta.env.BASE_URL}pdfs/Hardware.pdf`;
  const cppSrc = `${import.meta.env.BASE_URL}pdfs/${encodeURIComponent("iGEM1-Hardware.cpp")}`;
  const pySrc = `${import.meta.env.BASE_URL}pdfs/${encodeURIComponent("iGEM1-Hardware.py")}`;

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
      <div className="mt-3">
        <div className="mb-2">
          Download{" "}
          <a href={cppSrc} download aria-label="Download iGEM1-Hardware.cpp">iGEM1-Hardware.cpp 🔗</a>
        </div>
        <div>
          Download{" "}
          <a href={pySrc} download aria-label="Download iGEM1-Hardware.py">iGEM1-Hardware.py 🔗</a>
        </div>
      </div>
    </div>
    
  );
}
