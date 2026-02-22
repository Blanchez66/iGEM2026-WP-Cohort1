import "./design.css";

const BASE = import.meta.env.BASE_URL;
const IMG = (name: string) => `${BASE}images/design/${name}.png`;

function Ref({ ids }: { ids: number[] }) {
  return (
    <sup>
      {ids.map((id) => (
        <a key={id} href={`#ref-${id}`} className="ref-link">
          [{id}]
        </a>
      ))}
    </sup>
  );
}

export function Design() {
  return (
    <div className="page">
      <div className="row mt-4">
        <div className="col-11">
          <h2>Background</h2>
          <p>
            Carbapenem-resistant <em>Acinetobacter baumannii</em> (CRAB), a globally recognized
            &quot;superbug&quot;, has emerged as a leading cause of life-threatening nosocomial
            infections, posing an unprecedented challenge to clinical anti-infection treatment and
            hospital infection control. As a Gram-negative non-fermenting bacterium with
            extraordinary environmental adaptability, CRAB can survive on dry surfaces for weeks
            and resist most common disinfectants, making it highly prone to nosocomial transmission
            and persistent colonization in intensive care units (ICUs) and other high-risk areas.<Ref ids={[1]} />
          </p>
          <p>
            CRAB infections are predominantly hospital-acquired, with no active invasive virulence
            structures—its invasion is entirely dependent on damaged host physical barriers (e.g.,
            surgical incisions, burn wounds, mucosal lesions from intubation) or direct mediation
            by medical invasive devices (e.g., central venous catheters, ventilator tubes). A mere
            10³~10⁵ CFU of CRAB is sufficient to achieve stable colonization in the host, and
            colonized strains can transform into pathogenic ones once the host&apos;s immunity
            declines, forming a hidden infection source in clinical settings. Its infection
            spectrum covers multiple critical sites, with pulmonary infections (VAP, 30-40%),
            bloodstream infections (CRBSI, 25-35%) and wound/soft tissue infections (15-20%)
            being the most common, accompanied by staggering mortality rates—up to 50-70% for
            bloodstream infections and 70-80% for meningitis, far exceeding that of common
            drug-sensitive bacterial infections. <Ref ids={[2]} />
          </p>
          <p>
            The clinical threat of CRAB stems from the synergistic effect of multidrug resistance
            and biofilm formation, coupled with its robust immune escape capabilities. CRAB harbors
            multiple drug resistance mechanisms including OXA-type carbapenemase production, outer
            membrane porin loss and efflux pump overexpression, rendering it resistant to almost
            all conventional antibiotics; its biofilm, constructed by extracellular polysaccharides
            (EPS), fibrin and lipoproteins, not only hinders the penetration of antibiotics and
            immune cells, but also increases bacterial drug resistance by 10-1000 times. Meanwhile,
            CRAB evades host immune clearance through multiple strategies: its capsular
            polysaccharide blocks phagocytosis by macrophages and neutrophils, outer membrane
            protein OmpA inhibits phagosome maturation, and secreted serine proteases inactivate
            the complement system, allowing it to persist in the host and develop from local
            colonization to systemic dissemination. <Ref ids={[1]} />
          </p>
          <p>
            Current clinical treatments for CRAB rely on combined antibiotic regimens such as
            sulbactam-durlobactam plus carbapenems or high-dose ampicillin-sulbactam combined with
            polymyxins. However, these strategies are plagued by severe limitations: high treatment
            costs (single course up to 15,000-20,000 RMB), significant adverse effects (e.g.,
            30-40% incidence of gastrointestinal reactions, nephrotoxicity), poor efficacy against
            specific strains (35-45% clinical cure rate for OXA-48-like carbapenemase-carrying
            CRAB), and reliance on specialized medical equipment (e.g., dedicated nebulizers for
            aerosolized colistin). Moreover, traditional antibiotics cannot specifically target
            CRAB biofilms, and the clearance of planktonic bacteria alone fails to eliminate the
            infection source, leading to frequent recurrence and the formation of a vicious cycle
            of infection and drug resistance transmission. <Ref ids={[3]} />
          </p>
          <p>
            Quorum sensing (QS), a cell-cell communication system mediated by N-acyl homoserine
            lactones (AHLs), is the core regulatory mechanism for CRAB biofilm formation and
            virulence factor expression, with 3-OH-C12-HSL as its primary QS signal molecule.
            Targeting and disrupting the CRAB QS system to inhibit biofilm formation and
            resensitize bacteria to antibiotics has become a promising anti-CRAB strategy,
            overcoming the inherent drawbacks of traditional antibiotic therapy. However, existing
            quorum quenching strategies face critical challenges in clinical translation: low
            targeting efficiency of quorum quenching enzymes at infection sites, insufficient
            signal amplification leading to weak quenching effects, inability to maintain sustained
            efficacy as AHL concentrations decrease, and lack of real-time visual monitoring of
            therapeutic outcomes. Additionally, the safety of engineered microbial chassis and the
            controllable clearance of therapeutic agents remain unresolved issues, restricting
            their clinical application in sensitive sites such as the lungs, bloodstream and
            wounds. <Ref ids={[3]} />
          </p>
          <p>
            Against this backdrop, we designed a smart, targeted and controllable quorum quenching
            system based on engineered <em>Escherichia coli</em> Nissle 1917 (EcN)—a safe and
            non-pathogenic probiotic chassis with excellent in vivo colonization capacity. By
            constructing a three-layer sensing-amplification-execution architecture, optimizing
            spatial targeting and positive feedback regulation, and developing infection
            site-specific visualization and safety control modules, our system achieves precise
            recognition, efficient degradation and real-time monitoring of CRAB&apos;s 3-OH-C12-HSL
            signal. Tailored delivery strategies for different CRAB infection sites (wounds, lungs,
            bloodstream, intestines) and a multi-level kill switch ensure the safety, targeting
            and sustainability of the therapeutic effect. This design provides a novel, efficient
            and safe synthetic biology-based solution for the clinical treatment of CRAB
            infections, breaking the bottleneck of traditional anti-CRAB therapy and opening up
            new avenues for combating multidrug-resistant bacterial biofilm infections. 
          </p>

          <h2>Detection</h2>
          <p>
            To enable rapid and simple detection of CRAB presence at sampling sites in hospital
            settings, and to distinguish between colonization and infection states, we plan to use
            colloidal gold immunochromatography combined with a visible light detection and
            analysis device. Our colloidal gold test strip comprises a sample pad, conjugate pad,
            test line 1 (T1), test line 2 (T2), control line (C) and absorbent pad, with the
            following specifications:
          </p>
          <p>
            The sample pad and conjugate pad are composed of glass fibers with different pore sizes
            to prevent clogging and filter out larger impurities (large molecular proteins,
            cellular debris, blood cells, etc.). <Ref ids={[4]} /> Gold-labeled antibodies are
            pre-sprayed onto the conjugate pad. The nitrate ester groups on the nitrocellulose
            membrane surface possess strong dipoles that form electrostatic attractions with the
            dipoles of protein peptide bonds, while PVC serves as a backing to increase mechanical
            strength. <Ref ids={[5]} />
          </p>

          <div className="img-wrap" style={{ maxWidth: "500px" }}>
            <img src={IMG("img1")} alt="Gold-Labeled Antibodies diagram" />
          </div>
          <p>
            <strong>Gold-Labeled Antibodies:</strong>
            <br />
            1. AbaR-gold nanoparticles (AuNPs)
            <br />
            2. Murine anti-OXA-23 monoclonal antibody D-gold nanoparticles
          </p>
          <div className="img-wrap" style={{ maxWidth: "500px" }}>
            <img src={IMG("img2")} alt="Gold-labeled antibodies detail" />
          </div>

          <p>
            <strong>T1 Line (Test Line 1):</strong> Sprayed with 3-OH-C12-HSL-BSA (N-acyl
            homoserine lactone-bovine serum albumin, which can be bound by AbaR)
            <br />
            <strong>T2 Line (Test Line 2):</strong> Sprayed with murine anti-OXA-23 monoclonal
            antibody C (OXA-23 was the most prevalent acquired carbapenemase gene detected in CRAB isolates from China, 
            representing 99% of cases <Ref ids={[6]} />.)
            <br />
            <strong>C Line (Control Line):</strong> Goat anti-mouse IgG
            <br />
            (Murine anti-OXA-23 monoclonal antibody C and D are two different types of oxa-23
            antibodies.)
          </p>
          <div className="img-wrap" style={{ maxWidth: "500px" }}>
            <img src={IMG("img3")} alt="Test line layout" />
          </div>

          <p>
            Samples are collected from different sites, individually preprocessed and lysed, then
            filtered on the sample pad before beginning chromatographic migration. At the
            conjugate pad, the two gold-labeled antibodies bind to 3-OH-C12-HSL and OXA-23,
            respectively, and then continue migrating. If the sample contains high concentrations
            of 3-OH-C12-HSL, upon reaching T1, the gold-labeled antibodies are already occupied
            by 3-OH-C12-HSL and cannot bind to the 3-OH-C12-HSL-BSA on the T line; thus, the
            nanogold shows minimal aggregation and presents little to no red line. The remaining
            sample continues migrating.
          </p>
          <div className="img-wrap" style={{ maxWidth: "500px" }}>
            <img src={IMG("img4")} alt="Chromatographic migration" />
          </div>

          <p>
            At T2, the gold-labeled antibody-OXA-23 complex is captured, presenting a red color.
            The remaining material then migrates to the C line, where the constant region of the
            gold-labeled antibody binds to goat anti-mouse IgG, showing red. If T2 and C lines are
            visible in the end, it indicates the presence of both <em>Acinetobacter baumannii</em>{" "}
            and carbapenemase-producing bacteria; if T1 shows color, it indicates low 3-OH-C12-HSL
            content. If the C line does not show color, the test strip is invalid.
          </p>
          <div className="img-wrap" style={{ maxWidth: "500px" }}>
            <img src={IMG("img5")} alt="T2 and C line result" />
          </div>

          <p>
            The color intensity of the T line can be measured and converted into grayscale values
            through algorithms, which can reflect the aggregation amount of nanogold. <Ref ids={[7]} />{" "}
            A visible light detection device is used to collect the colorimetric characterization of
            the colloidal gold test strip. Through pre-calibrated software programs, grayscale
            analysis is performed, and comparison fitting is conducted in the database to determine
            the presence of CRAB and its state (infection or colonization). (The original data for
            the database is provided by cooperating hospitals, including the ratios and relative
            contents of 3-OH-C12-HSL to OXA-23 in lysates of CRAB cultures from different states,
            different sites, and lesion sites of different patients.)
          </p>

          <h2>Route of Administration</h2>
          <h3>Pulmonary Tissue</h3>
          <p>
            We utilize CHEMS and DOPE to fabricate pH-sensitive liposomes <Ref ids={[8]} />,
            encapsulating PvdQ, zinc ions and other cofactors, as well as Beractant and other
            therapeutic agents. These liposomes are then nebulized and delivered into the
            patient&apos;s lungs. Upon aerosol deposition, the liposomes remain stable in the
            neutral-to-slightly-acidic environment of healthy lung tissue, while rapidly
            disintegrating in the acidic microenvironment of CRAB-infected foci to achieve
            site-specific drug release. <Ref ids={[9]} /> This enables PvdQ to effectively hydrolyze
            bacterial quorum sensing signal molecules AHL under weakly acidic conditions,
            compromising biofilm functionality and facilitating subsequent antibiotic therapy.
          </p>
          <div className="img-wrap" style={{ maxWidth: "500px" }}>
            <img src={IMG("img6")} alt="Pulmonary delivery" />
          </div>

          <h3>Bloodstream</h3>
          <p>
            Considering the fluid characteristics of blood and its role as a key site for innate
            immune responses, we select OMVs (outer membrane vesicles) as the delivery vehicle for
            blood administration. <Ref ids={[10]} /> To reduce the immunogenicity of artificially
            engineered OMVs, we plan to extract OMVs from the culture medium of{" "}
            <em>Escherichia coli</em> with LPS synthesis-related genes knocked out. We design lipid
            rafts composed of cholesterol and sphingolipids on the artificially constructed OMVs
            as the functional carrier moiety: the insertion of cholesterol renders lipid rafts with
            lower lipid membrane fluidity compared to other regions of the OMV membrane, enabling
            the stable immobilization of a series of specific proteins. <Ref ids={[11]} />
          </p>
          <p>
            The OMVs are engineered to carry targeting moieties for CRAB. Direct recognition of
            bacterial cells by targeting proteins is hindered by the presence of bacterial
            biofilms; thus, we leverage the characteristic of CRAB biofilm matrices being rich in
            negatively charged DNA. Referring to the 2022 research on protamines by Prabal K. Maiti
            and colleagues, we select dephosphorylated protamines as the targeting protein—their
            high positive charge allows for precise recognition of negatively charged CRAB biofilms
            in the blood microenvironment. <Ref ids={[12]} />
          </p>
          <p>
            Following the specific recognition of CRAB by the engineered OMVs, PvdQ enzymes, also
            anchored on the lipid rafts, catalyze the hydrolysis of N-acyl homoserine lactones
            (HSL), thereby achieving the downstream clearance of CRAB biofilms. Beyond the
            therapeutic delivery function, chromogenic substances are immobilized on the OMV
            surface to enable real-time monitoring of the therapeutic efficacy.
          </p>
          <div className="img-wrap" style={{ maxWidth: "500px" }}>
            <img src={IMG("img7")} alt="OMV delivery and targeting" />
          </div>

          <h3>Wound Infection</h3>
          <p>
            <strong>Challenge:</strong> Treating CRAB infections in wounds (burns, ulcers) requires
            overcoming irregular surface coverage and ensuring absolute biosafety (preventing
            engineered bacteria from entering the bloodstream).
          </p>
          <p>
            <strong>Our Solution:</strong> A Thermosensitive Double-Layer Hydrogel System that
            combines smart materials with core-shell encapsulation.
          </p>
          <h4>1. The Matrix: Thermosensitive &amp; Synergistic</h4>
          <p>
            We utilize a composite matrix of Pluronic F127, Quaternized Chitosan (QCS), and
            Carboxymethyl Cellulose (CMC). <Ref ids={[13, 14, 15, 16, 17, 18, 19]} />
          </p>
          <ul>
            <li>
              <strong>Thermo-Gelling:</strong> Liquid at room temperature (&lt;25°C) for deep
              penetration via spraying; instantly gels at body temperature (&gt;32°C) to form a
              conformal barrier. <Ref ids={[20]} />
            </li>
            <li>
              <strong>Active Defense:</strong> QCS provides broad-spectrum antimicrobial action by
              disrupting bacterial membranes, while CMC actively absorbs wound exudate to prevent
              tissue maceration.
            </li>
          </ul>
          <h4>2. The Fortress: Double-Layer Micro-Carriers <Ref ids={[21]} /> </h4>
          <p>
            To strictly prevent our engineered EcN from escaping into the
            bloodstream while allowing therapeutic enzymes to function, we developed a Core-Shell
            Micro-Encapsulation strategy.
          </p>
          <ul>
            <li>
              <strong>The Core (The Factory):</strong> Engineered EcN are encapsulated within an
              Alginate-Ca²⁺ hydrogel core. <Ref ids={[22]} /> To ensure survival during storage, we
              incorporated Trehalose, which forms a glass-like matrix during lyophilization to
              protect bacterial cell membranes. <Ref ids={[23]} />
            </li>
            <li>
              <strong>The Shell (The Armor):</strong> To solve the issue of micro-spheres rupturing
              during freeze-drying, we engineered an outer shell via Polyelectrolyte Complexation
              (PEC). The negatively charged alginate core is coated with positively charged QCS,
              forming a dense, robust membrane.
            </li>
            <li>
              <strong>Semi-Permeable Selectivity:</strong> This Core-Shell structure acts as a
              molecular sieve. It allows the free diffusion of small molecules—AHLs (input) can
              enter to trigger the circuit, and AiiA/Blue Pigment (output) can exit to treat the
              wound. However, the engineered bacteria (~1-2 μm) are physically trapped within the
              core, eliminating the risk of systemic escape.
            </li>
          </ul>
          <h4>3. The Delivery: Dual-Chamber &quot;Mix-at-Bedside&quot; System <Ref ids={[24]} /> </h4>
          <p>
            Stability is the bottleneck of live biotherapeutics. To decouple
            storage stability from clinical usability, we adopted a Dual-Chamber Prefilled Syringe
            system.
          </p>
          <ul>
            <li>
              <strong>Chamber A (Solid Phase):</strong> Contains the lyophilized Double-Layer
              Micro-Carriers. Keeping the bacteria in a dry, dormant state ensures long-term
              viability and prevents leakage of intracellular toxins during storage.
            </li>
            <li>
              <strong>Chamber B (Liquid Phase):</strong> Contains the F127-QCS-CMC precursor
              solution. Crucially, we pre-dissolve essential substrates here: L-Arabinose (to reset
              the kill-switch timer) and Glutamine (substrate for the BpsA visual reporter).
            </li>
            <li>
              <strong>Clinical Workflow:</strong> At the point of care, the physician pushes the
              plunger to mix the liquid solvent with the lyophilized powder. The microspheres
              rehydrate instantly within the closed system. The mixture is then sprayed onto the
              wound, where it gels upon contact. This design eliminates contamination risks
              associated with traditional reconstitution and ensures the therapy is fresh and
              active upon application.
            </li>
          </ul>
          <div className="img-wrap" style={{ maxWidth: "500px" }}>
            <img src={IMG("img8")} alt="Dual-chamber and core-shell system" />
          </div>

          <h2>Core Pathway</h2>
          <p>
            Our engineered <em>Escherichia coli</em> Nissle 1917 (EcN) chassis implements a
            three-layer sensing-amplification-execution architecture to detect and disarm
            Carbapenem-Resistant <em>Acinetobacter baumannii</em> biofilms <Ref ids={[25, 26]} />.
            The system specifically targets 3-OH-C12-HSL <Ref ids={[27]} />, the primary
            quorum-sensing <Ref ids={[28]} /> signal of CRAB, and employs a T7 RNA polymerase
            cascade for robust signal amplification.
          </p>
          <h3>Sensing Layer</h3>
          <p>
            We selected the AbaR-pAbaI regulatory system native to <em>A. baumannii</em>. AbaR is a
            LuxR-family transcription factor that binds 3-OH-C12-HSL with high specificity. Upon
            ligand binding, the AbaR-AHL complex activates pAbaI, the promoter driving the AbaI
            autoinducer synthase gene. Native pAbaI exhibits weak activity in <em>E. coli</em> due
            to non-optimal -35 and -10 region sequences. We therefore planned to design a synthetic
            hybrid promoter, pAbaI*, which preserves the AbaR binding site while replacing the
            bacterial promoter elements with <em>E. coli</em> consensus sequences. To arm the
            chassis for detection, AbaR is expressed by a constitutive weak promoter at low basal
            levels, ensuring the system remains sensitive yet inactive in the absence of CRAB.
          </p>
          <h3>Amplification Layer</h3>
          <p>
            Even with optimized pAbaI*, promoter strength remains insufficient for high-level
            expression of our effector enzyme. We therefore implemented a T7 RNA polymerase
            amplification cascade. pAbaI* drives expression of T7 RNAP, which then exclusively
            recognizes T7 promoters upstream of our effector genes. This orthogonal transcription
            system achieves over 100-fold signal amplification while minimizing interference with
            host metabolism. <Ref ids={[29, 30]} />
          </p>
          <h3>Execution Layer</h3>
          <p>
            For AHL degradation, we selected PvdQ acylase from <em>Pseudomonas aeruginosa</em>{" "}
            rather than the commonly used AiiA lactonase. Importantly, PvdQ demonstrates substrate
            preference for long-chain AHLs, making it particularly effective against 3-OH-C12-HSL.
            We will evaluate three secretion strategies: OmpA, PelB, and the HlyA type I secretion
            system, selecting based on empirical performance in our specific chassis and conditions.
          </p>
          <h3>System Optimization</h3>
          <h4>Spatial Enhancement</h4>
          <p>
            To solve the limitation that passive diffusion of engineered bacteria in complex in
            vivo environments leads to insufficient contact with CRAB microcolonies and reduced AHL
            sensing and degradation efficiency, we planned to design a targeted AHL chemotaxis
            modification strategy based on the native chemotaxis system of EcN. EcN has a complete
            and well-characterized chemotactic signal transduction pathway mediated by the Che
            family of proteins, which can sense chemical gradients in the environment and regulate
            flagellar movement to achieve directional chemotaxis. We modified the core
            chemoreceptor Tar of this pathway through chimeric receptor engineering, replacing the
            native ligand-binding domain (LBD) of Tar with the N-terminal AHL-binding domain of
            AbaR, while retaining the complete transmembrane helices TM1 and TM2 of Tar to ensure
            correct membrane localization of the chimeric receptor, and fully retaining the key
            methylation sites of Tar at E491, E493, E496, E502 and E505, which are modified by CheR
            and CheB to maintain the adaptive regulation mechanism of the chemotaxis system. The
            final chimeric receptor has the architecture of AbaR N-terminal AHL-binding domain
            linked to the Tar HAMP domain and C-terminal signal output domain. When the chimeric
            receptor binds to 3-OH-C12-HSL in the environment, it undergoes a conformational
            change, which in turn activates the downstream CheA kinase, triggers the complete
            chemotactic signal cascade, and drives the engineered bacteria to move directionally
            along the 3-OH-C12-HSL concentration gradient toward the CRAB biofilm, achieving active
            spatial targeting of the pathogen, improving the local concentration of engineered
            bacteria at the infection site, and enhancing the efficiency of AHL degradation and
            biofilm clearance. We will first validate the function of the chimeric receptor through
            plasmid-based expression in EcN, combined with soft agar chemotaxis assays to
            characterize its chemotactic performance.
          </p>
          <div className="img-wrap" style={{ maxWidth: "550px" }}>
            <img src={IMG("img9")} alt="Spatial enhancement and chemotaxis" />
          </div>

          <h4>Positive Feedback Loop Optimization</h4>
          <p>
            To ensure that the system can maintain sustained activation and stable expression of
            effector proteins even when the local 3-OH-C12-HSL concentration drops below the
            initial activation threshold after the start of AHL degradation, we designed a positive
            feedback loop based on the existing T7 amplification system to achieve bistable
            regulation of the circuit. In this optimized design, when the pAbaI promoter is
            activated by the AbaR-3-OH-C12-HSL complex, it drives the expression of T7 RNA
            polymerase as the core signal amplifier, and the expressed T7 RNA polymerase not only
            drives the high-level expression of the quorum quenching effector protein through the T7
            promoter, but also drives the expression of an additional copy of the AbaR
            transcription factor. This design forms a closed positive feedback loop: the initial
            activation of the circuit increases the intracellular concentration of AbaR, which in
            turn reduces the minimum 3-OH-C12-HSL concentration required for circuit activation,
            allowing the system to maintain a sustained activated state even when the local AHL
            concentration decreases with the degradation process. This bistable design can
            effectively filter the noise of the input signal, avoid the circuit being frequently
            switched on and off due to fluctuations in environmental signal concentration, and
            ensure the continuous and stable operation of the quorum quenching function, achieving
            thorough and sustained clearance of the CRAB quorum sensing signal. We will optimize the
            expression intensity of the additional AbaR copy by screening the RBS library, to
            maximize the hysteresis window between the activation threshold and the maintenance
            threshold of the circuit, while avoiding excessive metabolic burden on the chassis
            caused by overexpression of AbaR.
          </p>
          <h3>Complete System Working Logic</h3>
          <p>
            The complete working process of our system starts with the specific sensing of the CRAB
            quorum sensing signal. In the resting state, the engineered EcN constitutively expresses
            the AbaR transcription factor and the chimeric Tar-AbaR chemotaxis receptor,
            maintaining the ability to sense and target the pathogen. When the engineered bacteria
            are in the environment where CRAB exists, the chimeric receptor senses the 3-OH-C12-HSL
            gradient and drives the engineered bacteria to directionally move to the CRAB biofilm,
            enhancing the local enrichment of the therapeutic bacteria. At the same time,
            3-OH-C12-HSL enters the cell and binds to AbaR to form an activated complex, which
            turns on the pAbaI promoter to drive the expression of T7 RNA polymerase, triggering
            the signal amplification cascade. The amplified signal drives the high-level
            expression and extracellular secretion of the PvdQ quorum quenching enzyme, which
            specifically degrades the 3-OH-C12-HSL in the environment, blocking the quorum sensing
            process of CRAB, inhibiting the formation and maturation of biofilm, and resensitizing
            CRAB to antibiotics. Meanwhile, the positive feedback loop continuously supplements the
            intracellular AbaR level, maintaining the stable activation of the circuit even when the
            AHL concentration decreases, ensuring the continuous and thorough anti-biofilm effect.
            Together, these design elements create a smart therapeutic agent that specifically
            seeks, senses, and dismantles CRAB biofilm defenses through targeted quorum quenching.
          </p>
          <div className="img-wrap" style={{ maxWidth: "550px" }}>
            <img src={IMG("img10")} alt="Complete system working logic" />
          </div>

          <h2>Visualization</h2>
          <h3>Wound Infection</h3>
          <p>
            In addressing the challenge of wound infections, characterized by a site conducive to
            bacterial colonization and the necessity for long-term monitoring, we designed an
            engineered bacterial &quot;memory switch&quot; genetic circuit. This circuit
            incorporates the AbaR receptor system and a T7 RNA polymerase signal amplification
            module to ensure sensitive detection and efficient expression. The output module is
            organized as a [PvdQ]-[cI]-[Bxb1] <Ref ids={[31]} /> polycistronic operon. Recognizing
            that expression levels in a polycistronic structure typically decrease towards the
            distal end, we positioned the recombinase Bxb1 last, as it functions catalytically and
            requires only minimal quantities, whereas the therapeutic enzyme PvdQ <Ref ids={[32]} />,
            required in high amounts, is placed first. This natural gradient in expression
            precisely matches the functional requirements.
          </p>
          <p>
            Under elevated AHL concentrations, the system expresses PvdQ to degrade biofilm
            signals, while the co-expressed repressor protein cI tightly binds to the downstream
            promoter, inhibiting pigment gene transcription to ensure the wound dressing remains
            colorless. To enhance responsiveness to the therapeutic endpoint, the cI protein was
            modified with a degradation tag (e.g., ssrA tag) to shorten its half-life. Consequently,
            when AHL concentrations decline indicative of biofilm destruction, the sensing pathway
            shuts down and the modified cI protein degrades rapidly, relieving the inhibition on
            the flipped promoter and activating BpsA <Ref ids={[33]} /> pigment synthase to produce
            a bright blue pigment, intuitively signaling the completion of treatment.
          </p>
          <div className="img-row">
            <div className="img-item">
              <div className="img-wrap">
                <img src={IMG("img11")} alt="AHL high concentration" />
              </div>
              <p className="img-subcaption">elevated AHL concentrations</p>
            </div>
            <div className="img-item">
              <div className="img-wrap">
                <img src={IMG("img12")} alt="AHL low concentration" />
              </div>
              <p className="img-subcaption">reduced AHL concentrations</p>
            </div>
          </div>

          <h3>Pulmonary Infection</h3>
          <p>
            In the context of pulmonary infections, where the blood-air barrier complicates the
            delivery of live bacteria, we implemented an &quot;atomized enzyme-probe
            competition&quot; strategy. The core of this strategy lies in a refined enzyme kinetic
            competition mechanism: PvdQ enzyme possesses a significantly higher binding affinity
            for the natural substrate 3-OH-C12-HSL than for the chemical probe. During the initial
            stage of infection, biofilms release high concentrations of AHLs; according to
            Michaelis-Menten kinetics, the active sites of PvdQ are predominantly occupied by
            natural AHLs, prioritizing the therapeutic degradation of signals. At this stage, the
            probe remains intact due to competitive exclusion. Only when the biofilm is disrupted
            and AHL concentrations drop below a threshold does PvdQ shift its substrate
            preference to the probe, releasing a precursor that rapidly oxidizes to generate indigo
            blue <Ref ids={[34]} />.
          </p>
          <p>
            To overcome the risk of airway obstruction caused by hydrophobic crystallization
            associated with traditional indigo blue, we introduced sulfonic acid groups to the
            probe&apos;s chromogenic moiety. This specific chemical modification converts
            insoluble indigo blue into indigo carmine, a highly water-soluble derivative. This
            modified pigment tends to form a stable soluble colloid rather than large precipitates.
            This not only prevents physical blockage of the bronchioles but also facilitates
            uniform dispersion in sputum, allowing the pigment to be expectorated smoothly and
            providing a clear visual indication of successful biofilm clearance manifested as
            blue-colored sputum.
          </p>
          <div className="img-wrap" style={{ maxWidth: "450px" }}>
            <img src={IMG("img13")} alt="Pulmonary enzyme-probe competition" />
          </div>

          <h3>Bloodstream Infection</h3>
          <p>
            Addressing the complexities of bloodstream infections—characterized by rapid blood flow
            and susceptibility to interference—we developed an &quot;OMV-targeted delivery and
            prodrug probe&quot; system. We engineered Outer Membrane Vesicles (OMVs) to
            surface-display PvdQ enzyme and carry modified prodrug probes designed with a PEG
            shielding group and a peptide linker. In systemic circulation, the PEG chain creates
            steric hindrance that prevents PvdQ from accessing the probe <Ref ids={[35]} />,
            thereby eliminating background noise. Upon targeting the CRAB biofilm site, the
            biofilm-specific metalloprotease CpaA <Ref ids={[36]} /> cleaves the peptide linker and
            removes the shielding group, exposing the cleavage site. The system then operates on an
            enzyme kinetic competition logic similar to that of the pulmonary system: under high
            AHL concentrations, surface-displayed PvdQ preferentially degrades natural signal
            molecules to treat the infection; it is only when AHL concentrations decline that
            PvdQ cleaves the deshielded probe to release the red resorufin derivative. This
            metabolite is ultimately excreted via the kidneys, resulting in red urine and providing
            a real-time, non-invasive visual warning of the controlled state of the bloodstream
            infection.
          </p>
          <div className="img-row">
            <div className="img-item">
              <div className="img-wrap" style={{ maxWidth: "400px" }}>
                <img src={IMG("img14")} alt="Free state" />
              </div>
              <p className="img-subcaption">planktonic bacteria</p>
            </div>
            <div className="img-item">
              <div className="img-wrap" style={{ maxWidth: "330px" }}>
                <img src={IMG("img15")} alt="CRAB biofilm site" />
              </div>
              <p className="img-subcaption">within the CRAB biofilm</p>
            </div>
          </div>

          <h2>Kill Switch</h2>
          <p>
            Biocontainment represents a critical design priority for therapeutic bacteria. We
            engineered a multi-layered kill switch system combining toxin-antitoxin regulation and
            chemical inducibility to ensure complete elimination of our chassis after therapeutic
            action or upon external command.
          </p>
          <h3>System Architecture</h3>
          <p>
            The system employs the MazEF toxin-antitoxin module with inverted regulatory logic.
            MazF, an endoribonuclease, is expressed from two independent promoters: a weak
            constitutive promoter maintaining baseline toxin levels, and a doxycycline-inducible
            pTet-on promoter for rapid amplification. MazE, the labile antitoxin, is expressed by an
            arabinose-inducible pBAD promoter with optimized RBS strength. High arabinose
            concentration maintains MazE levels sufficient to neutralize MazF, allowing cell
            survival.
          </p>
          <h3>Automatic Timed Elimination</h3>
          <p>
            Hydrogel formulations are pre-mixed with high arabinose concentration. As cells
            metabolize arabinose, intracellular levels decline. When concentrations drop below the
            threshold required for MazE expression, the toxin-antitoxin balance shifts toward MazF
            activity, triggering programmed cell death. This creates an intrinsic countdown timer
            without requiring external intervention.
          </p>
          <h3>Manual Emergency Kill</h3>
          <p>
            Emergency termination capability addresses ICU scenarios requiring immediate bacterial
            clearance. Doxycycline administration induces pTet-on driven MazF amplification,
            overwhelming even residual MazE protection. This physician-controlled override functions
            independently of arabinose status, providing absolute biocontainment assurance.
          </p>

          <h2 id="reference">Reference</h2>
          <ol id="reference-list">
            <li id="ref-1">
              Congcong Liu,Kaichao Chen,Yuchen Wu,Ling Huang,Yinfei Fang,Jiayue Lu. Epidemiological and genetic characteristics of clinical carbapenem-resistant Acinetobacter baumannii strains collected countrywide from hospital intensive care units (ICUs) in China[J].Emerging Microbes & Infections , 17 Feb 2022 , https://doi.org/10.1080/22221751.2022.2093134
            </li>
            <li id="ref-2">
              Carmi Bartal, Kenneth V. I. Rolston & Lior Nesher. Carbapenem-resistantAcinetobacter baumannii:Colonization, Infection and Current TreatmentOptions. IsraelInfect Dis Ther (2022) 11:683–694 , https://doi.org/10.1007/s40121-022-00597-w
            </li>
            <li id="ref-3">
              Alina Iovleva, Vance G. Fowler Jr. & Yohei Doi.Treatment Approaches for Carbapenem‑Resistant Acinetobacter baumannii Infections,Vol.:(0123456789)Drugs (2025) 85:21–40 , https://doi.org/10.1007/s40265-024-02104-6
            </li>
            <li id="ref-4">
              Amadeo Sena-Torralba, Ruslán Álvarez-Diduk, Claudio Parolo, Andrew Piper, A. Merkoçi. Toward Next Generation Lateral Flow Assays: Integration of Nanomaterials [J]. Chemical Reviews,6 September 2022, 14881-14905 DOI:10.1021/acs.chemrev.1c01012
            </li>
            <li id="ref-5">
              Rishabh Gandotra (a), Feng-Chih Kuo (c), Mel S. Lee (d), Gwo-Bin Lee (a) (b). A paper-based aptamer-sandwich assay for detection of HNP 1 as a biomarker for periprosthetic joint infections on an integrated microfluidic platform [J]. Analytica Chimica Acta,15 November 2023, 341879
            </li>
            <li id="ref-6">
              Minggui Wang, Lizhao Ge etc. Clinical Outcomes and Bacterial Characteristics of Carbapenem-resistant Acinetobacter baumannii Among Patients From Different Global Regions [J].Observational Study 2024 Feb 17;78(2):248-258. DOI: 10.1093/cid/ciad556.
            </li>
            <li id="ref-7">
              Junqi Shen, Zhengyi Cai, Cheng Zhang, Xinyue Feng, Chenzhi Zhang, Huan Zhao, Chuanlin Yin, Bo Wang, Xiaoping Yu, Biao Zhang.Dual-Mode Quantitative Immunochromatographic Assay for Highly Sensitive On-Site Detection of Ciprofloxacin in Fish Products [J].Foods,2025 Mar 25;14(7):1132. DOI: 10.3390/foods14071132.
            </li>
            <li id="ref-8">
              Tsirogianni AG, Chountoulesi M, Pippa N. Recent Advances in pH-Responsive Liposomes: Lessons Learnt and New Directions in Nanomedicine Development. Materials (Basel). 2025 Sep 13;18(18):4295. doi: 10.3390/ma18184295. PMID: 41010139; PMCID: PMC12471921.
            </li>
            <li id="ref-9">
              Mahmoudzadeh M, Magarkar A, Koivuniemi A, Róg T, Bunker A. Mechanistic Insight into How PEGylation Reduces the Efficacy of pH-Sensitive Liposomes from Molecular Dynamics Simulations. Mol Pharm. 2021 Jul 5;18(7):2612-2621. doi: 10.1021/acs.molpharmaceut.1c00122. Epub 2021 Jun 6. PMID: 34096310; PMCID: PMC8289284.
            </li>
            <li id="ref-10">
              Peulen TO, Wilkinson KJ. Diffusion of nanoparticles in a biofilm. Environ Sci Technol. 2011 Apr 15;45(8):3367-73. doi: 10.1021/es103450g. Epub 2011 Mar 24. PMID: 21434601.
            </li>
            <li id="ref-11">
            Li J, Yu J, Song J, Zhang Y, Li N, Wang Z, Qin M, Zhao M, Zhang B, Huang R, Zhou S, Liu Y, He Z, Liu H, Dan Liu, Wang Y. Galloylated liposomes enable targeted drug delivery by overcoming protein corona shielding. Nat Commun. 2025 Aug 25;16(1):7926. doi: 10.1038/s41467-025-63198-4. PMID: 40854890; PMCID: PMC12378351.
            </li>
            <li id="ref-12">
              Chhetri KB, Jang YH, Lansac Y, Maiti PK. Effect of phosphorylation of protamine-like cationic peptide on the binding affinity to DNA. Biophys J. 2022 Dec 20;121(24):4830-4839. doi: 10.1016/j.bpj.2022.09.025. Epub 2022 Sep 26. PMID: 36168289; PMCID: PMC9808561.
            </li>
            <li id="ref-13">
              Qu J, Zhao X, Liang Y, Zhang T, Ma PX, Guo B. Antibacterial adhesive injectable hydrogels with rapid self-healing, extensibility and compressibility as wound dressing for joints skin wound healing. Biomaterials. 2018 Nov;183:185-199. doi: 10.1016/j.biomaterials.2018.08.044. Epub 2018 Aug 24. PMID: 30172244.
            </li>
            <li id="ref-14">
              Li S, Yang C, Li J, et al. Progress in Pluronic F127 Derivatives for Application in Wound Healing and Repair. Int J Nanomedicine. 2023;18:4485-4505. Published 2023 Aug 7. doi:10.2147/IJN.S418534
            </li>
            <li id="ref-15">
              Pelegrino MT, De Araujo Lima B, Do Nascimento MHM, Lombello CB, Brocchi M, Seabra AB. Biocompatible and Antibacterial Nitric Oxide-Releasing Pluronic F-127/Chitosan Hydrogel for Topical Applications. Polymers (Basel). 2018 Apr 18;10(4):452. doi: 10.3390/polym10040452. PMID: 30966487; PMCID: PMC6415216.
            </li>
            <li id="ref-16">
              Li S, Yang C, Li J, Zhang C, Zhu L, Song Y, Guo Y, Wang R, Gan D, Shi J, Ma P, Gao F, Su H. Progress in Pluronic F127 Derivatives for Application in Wound Healing and Repair. Int J Nanomedicine. 2023 Aug 7;18:4485-4505. doi: 10.2147/IJN.S418534. PMID: 37576462; PMCID: PMC10416793.
            </li>
            <li id="ref-17">
              Kaiting Cheng, Yiming Fang, Liang Bai, Feng Gui, Junchi Ma, Huimin Gao, Yadong Zhao, Xingtao Xu, Quaternized chitosan / Pluronic F127 thermosensitive hydrogel with high antibacterial properties for wound dressing, Progress in Natural Science: Materials International, Volume 33, Issue 5, 2023, Pages 581-592, ISSN 1002-0071, https://doi.org/10.1016/j.pnsc.2023.11.002.
            </li>
            <li id="ref-18">
              Huang A, Chen Y, Wu C. Wound Dressing Double-Crosslinked Quick Self-Healing Hydrogel Based on Carboxymethyl Chitosan and Modified Nanocellulose. Polymers (Basel). 2023 Aug 13;15(16):3389. doi: 10.3390/polym15163389. PMID: 37631446; PMCID: PMC10459649.
            </li>
            <li id="ref-19">
              Alven S, Aderibigbe BA. Chitosan and Cellulose-Based Hydrogels for Wound Management. Int J Mol Sci. 2020 Dec 18;21(24):9656. doi: 10.3390/ijms21249656. PMID: 33352826; PMCID: PMC7767230.
            </li>
            <li id="ref-20">
              Gilbert, C., Tang, TC., Ott, W. et al. Living materials with programmable functionalities grown from engineered microbial co-cultures. Nat. Mater. 20, 691–700 (2021). https://doi.org/10.1038/s41563-020-00857-5
            </li>
            <li id="ref-21">
            Łętocha, A., et al., Effect of Encapsulation of Lactobacillus casei in Alginate–Tapioca Flour Microspheres Coated with Different Biopolymers on the Viability of Probiotic Bacteria. ACS Applied Materials & Interfaces, 2024. 16(39): p. 52878-52893.
            </li>
            <li id="ref-22">
              Allen ME, Kamilova E, Monck C, et al. Engineered Bacteria as Living Biosensors in Dermal Tattoos. Adv Sci (Weinh). 2024;11(30):e2309509. doi:10.1002/advs.202309509
            </li>
            <li id="ref-23">
              Li S, Ji Y, Xue X, et al. Hierarchical biofilm models using sodium alginate beads containing bacteria embedded in a cellulose-chitosan hydrogel matrix. J Mater Chem B. 2025;13(12):3952-3958. Published 2025 Mar 20. doi:10.1039/d4tb02015d
            </li>
            <li id="ref-24">
              Anupam Chanda. Double chamber Devices and their advantages[J]. Journal of Addictive Disorders and Mental Health, 2022, 2(2): 1-9.
            </li>
            <li id="ref-25">
              Rumbo-Feal S, Gómez MJ, Gayoso C, Álvarez-Fraga L, Cabral MP, Aransay AM, Rodríguez-Ezpeleta N, Fullaondo A, Valle J, Tomás M, Bou G, Poza M. Whole transcriptome analysis of Acinetobacter baumannii assessed by RNA-sequencing reveals different mRNA expression profiles in biofilm compared to planktonic cells. PLoS One. 2013 Aug 30;8(8):e72968. doi: 10.1371/journal.pone.0072968. PMID: 24023660; PMCID: PMC3758355.
            </li>
            <li id="ref-26">
              Upmanyu K, Haq QMR, Singh R. Factors mediating Acinetobacter baumannii biofilm formation: Opportunities for developing therapeutics. Curr Res Microb Sci. 2022 Mar 28;3:100131. doi: 10.1016/j.crmicr.2022.100131. PMID: 35909621; PMCID: PMC9325880.
            </li>
            <li id="ref-27">
             Cui B, Peng G, Wang LE, Deng Y. Signaling in Acinetobacter baumannii: Quorum sensing and nucleotide second messengers. Comput Struct Biotechnol J. 2025 May 22;27:2168-2175. doi: 10.1016/j.csbj.2025.05.032. PMID: 40510767; PMCID: PMC12162036.
            </li>
            <li id="ref-28">
              Zhong S, He S. Quorum Sensing Inhibition or Quenching in Acinetobacter baumannii: The Novel Therapeutic Strategies for New Drug Development. Front Microbiol. 2021 Feb 1;12:558003. doi: 10.3389/fmicb.2021.558003. PMID: 33597937; PMCID: PMC7882596.
            </li>
            <li id="ref-29">
              Bokhove M, Nadal Jimenez P, Quax WJ, Dijkstra BW. The quorum-quenching N-acyl homoserine lactone acylase PvdQ is an Ntn-hydrolase with an unusual substrate-binding pocket. Proc Natl Acad Sci U S A. 2010 Jan 12;107(2):686-91. doi: 10.1073/pnas.0911839107. Epub 2009 Dec 22. PMID: 20080736; PMCID: PMC2818923.
            </li>
            <li id="ref-30">
              Vogel J, Jansen L, Setroikromo R, Cavallo FM, van Dijl JM, Quax WJ. Fighting Acinetobacter baumannii infections with the acylase PvdQ. Microbes Infect. 2022 Jun;24(4):104951. doi: 10.1016/j.micinf.2022.104951. Epub 2022 Feb 10. PMID: 35151875.
            </li>
            <li id="ref-31">
              Olorunniji FJ, McPherson AL, Rosser SJ, Smith MCM, Colloms SD, Stark WM. Control of serine integrase recombination directionality by fusion with the directionality factor. Nucleic Acids Res. 2017 Aug 21;45(14):8635-8645. doi: 10.1093/nar/gkx567. PMID: 28666339; PMCID: PMC5737554.
            </li>
            <li id="ref-32">
              M. Bokhove, P.N. Jimenez, W.J. Quax, & B.W. Dijkstra, The quorum-quenching N-acyl homoserine lactone acylase PvdQ is an Ntn-hydrolase with an unusual substrate-binding pocket, Proc. Natl. Acad. Sci. U.S.A. 107 (2) 686-691, https://doi.org/10.1073/pnas.0911839107IF: (2010).
            </li>
            <li id="ref-33">
              Brown AS, Calcott MJ, Collins VM, Owen JG, Ackerley DF. The indigoidine synthetase BpsA provides a colorimetric ATP assay that can be adapted to quantify the substrate preferences of other NRPS enzymes. Biotechnol Lett. 2020 Dec;42(12):2665-2671. doi: 10.1007/s10529-020-02972-4IF: 2.1 Q3 . Epub 2020 Jul 17. PMID: 32681380.
            </li>
            <li id="ref-34">
              Li, Z.; Lu, R.; Zhang, J.; Zhu, Y.; Mu, W. Recent Advances on Natural Pigment Indigoidine: Occurrence, Biosynthetic Approaches, and Applications. J. Agric. Food Chem. 2025, 73 (30), 18545–18560. DOI: 10.1021/acs.jafc.5c05724.
            </li>
            <li id="ref-35">
              O'Leary MK, Chen SS, Westblade LF, Alabi CA. Design of a PEGylated Antimicrobial Prodrug with Species-Specific Activation. Biomacromolecules. 2021 Feb 8;22(2):984-992. doi: 10.1021/acs.biomac.0c01695IF: 5.4 Q1 . Epub 2021 Jan 11. PMID: 33428376; PMCID: PMC8270352.
            </li>
            <li id="ref-36">
              Haurat MF, Scott NE, Di Venanzio G, Lopez J, Pluvinage B, Boraston AB, Ferracane MJ, Feldman MF.2020.The Glycoprotease CpaA Secreted by Medically Relevant Acinetobacter Species Targets Multiple O-Linked Host Glycoproteins. mBio11:10.1128/mbio.02033-20IF: 4.7 Q1 .https://doi.org/10.1128/mbio.02033-20IF: 4.7 Q1
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
