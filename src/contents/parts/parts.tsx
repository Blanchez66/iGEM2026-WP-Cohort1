export function Parts() {
  const pdfSrc = `${import.meta.env.BASE_URL}pdfs/Parts.pdf`;
  const mainChainDnaSrc = `${import.meta.env.BASE_URL}pdfs/${encodeURIComponent("Plasmid for main chain.dna")}`;
  const visualizationSuicideDnaSrc = `${import.meta.env.BASE_URL}pdfs/${encodeURIComponent("Plasmid for Visualization and Suicide(1.0).dna")}`;

  return (
    <div className="mt-4">
      <h2>PDF</h2>
      <iframe
        src={pdfSrc}
        title="Parts.pdf"
        style={{ width: "100%", height: "900px", border: "1px solid #ddd" }}
      />
      <div className="mt-3">
        <div className="mb-2">
          Download{" "}
          <a href={mainChainDnaSrc} download aria-label="Download Plasmid for main chain.dna">Plasmid for main chain.dna 🔗</a>
        </div>
        <div>
          Download{" "}
          <a href={visualizationSuicideDnaSrc} download aria-label="Download Plasmid for Visualization and Suicide(1.0).dna">Plasmid for Visualization and Suicide(1.0).dna 🔗</a>
        </div>
      </div>
    </div>
  );
}
