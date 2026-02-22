export function Hardware() {
  const pdfSrc = `${import.meta.env.BASE_URL}pdfs/Hardware.pdf`;
  const cppSrc = `${import.meta.env.BASE_URL}pdfs/${encodeURIComponent("iGEM1-Hardware.cpp")}`;
  const pySrc = `${import.meta.env.BASE_URL}pdfs/${encodeURIComponent("iGEM1-Hardware.py")}`;
  const videoSrc = `${import.meta.env.BASE_URL}video/${encodeURIComponent("爆炸图.mp4")}`;

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
        <h2>Links</h2>
        <div className="mb-2">
          Download{" "}
          <a href={cppSrc} download aria-label="Download iGEM1-Hardware.cpp">iGEM1-Hardware.cpp 🔗</a>
        </div>
        <div>
          Download{" "}
          <a href={pySrc} download aria-label="Download iGEM1-Hardware.py">iGEM1-Hardware.py 🔗</a>
        </div>
      </div>
      <div className="mt-4">
        <h2>Video</h2>
        <video controls style={{ width: "100%", border: "1px solid #ddd" }}>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </div>
    
  );
}
