const fs = require('fs');

const retinaMetaAndCss = `
    <!-- Retina-Ready & HiDPI Industrial Display Compliance (ISO 9241-307) -->
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <meta name="display-density" content="retina-ready, 2x, 3x, 4k-uhd" />
    <meta name="compliance-ergonomics" content="ISO 9241-307 Class I Ergonomics & High-Contrast Industrial Readability Compliant" />

    <style>
      /* Retina & HiDPI Subpixel Optimization */
      html, body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
      }
      img, svg, .image, .logo, .emblem {
        image-rendering: -webkit-optimize-contrast;
        image-rendering: crisp-edges;
      }
      svg path, svg circle, svg rect, svg line {
        shape-rendering: geometricPrecision;
        vector-effect: non-scaling-stroke;
      }
      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        .retina-crisp {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      }

      /* Use-Cases Interactive Simulator Styles */
      .usecase-nav-btn {
        background: #141418;
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 8px;
        padding: 16px 20px;
        color: #a1a1aa;
        text-align: left;
        cursor: pointer;
        transition: all 0.25s ease;
        width: 100%;
        display: block;
      }
      .usecase-nav-btn:hover {
        border-color: rgba(255, 23, 145, 0.4);
        background: #191920;
        color: #ffffff;
      }
      .usecase-nav-btn.active {
        background: #1e1e26;
        border-color: #ff1791;
        box-shadow: 0 0 25px rgba(255, 23, 145, 0.2);
        color: #ffffff;
      }
      .usecase-pane {
        display: none;
        animation: fadeIn 0.3s ease-in-out;
      }
      .usecase-pane.active {
        display: block;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(6px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .step-pill {
        cursor: pointer;
        padding: 8px 14px;
        border-radius: 6px;
        border: 1px solid rgba(255,255,255,0.1);
        background: #19191e;
        color: #a1a1aa;
        font-size: 0.8rem;
        transition: all 0.2s ease;
      }
      .step-pill.active {
        border-color: #ff1791;
        background: rgba(255,23,145,0.15);
        color: #ffffff;
        font-weight: 700;
      }
      .kiosk-btn {
        min-height: 52px;
        font-size: 1.1rem;
        font-weight: 700;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(255,255,255,0.15);
        background: #25252d;
        color: #ffffff;
        cursor: pointer;
        transition: all 0.15s ease;
      }
      .kiosk-btn:active {
        transform: scale(0.97);
        background: #ff1791;
      }
      .kiosk-clock-card {
        background: #0f0f13;
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 8px;
        padding: 16px;
        text-align: center;
      }
      .dag-node {
        background: #191920;
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 8px;
        padding: 14px 18px;
        position: relative;
        transition: all 0.3s ease;
      }
      .dag-node.highlight-nominal {
        border-color: #10b981;
        box-shadow: 0 0 20px rgba(16, 185, 129, 0.25);
      }
      .dag-node.highlight-rework {
        border-color: #f59e0b;
        box-shadow: 0 0 20px rgba(245, 158, 11, 0.25);
      }
      .dag-node.highlight-scrap {
        border-color: #ff1791;
        box-shadow: 0 0 20px rgba(255, 23, 145, 0.25);
      }
    </style>
`;

const useCasesSectionHtml = `
      <!-- Section: Three Industrial Realities (Interactive Floor Proof) -->
      <section class="shock-section pt-6 pb-6 bg-color black" id="use-cases" style="border-top: 1px solid rgba(255,255,255,0.08); border-bottom: 1px solid rgba(255,255,255,0.08);">
        <div class="container">
          
          <!-- Section Title Header -->
          <div class="row mb-5 text-center">
            <div class="col-12">
              <span class="badge px-3 py-1 mb-2" style="background: rgba(255,23,145,0.15); color: #ff1791; border: 1px solid #ff1791; font-size: 0.75rem; letter-spacing: 1.5px; text-transform: uppercase; font-weight: 800;">
                <i class="fas fa-play-circle me-1"></i> Interactive Floor Proof · Three Physical Realities
              </span>
              <h2 class="title text-style-4 text-white">
                <span class="text-1 text-outline white-75">Three Physical Realities. </span>
                <span class="text-2 text-italic white">One Conserved <mark class="animated-underline tertiary">Sub-Ledger</mark>.</span>
              </h2>
              <p class="text-muted" style="max-width: 820px; margin: 0 auto; font-size: 1.05rem;">
                Experience the live operational mechanics generic ERPs abandon. Test multi-stage job-work mass balance, simulate dual-clock machine breakdown isolation on a glove-safe kiosk, and toggle dynamic routing DAG branches in real time.
              </p>
            </div>
          </div>

          <!-- Usecase Tab Buttons Grid -->
          <div class="row g-3 mb-4">
            <div class="col-12 col-md-4">
              <button type="button" class="usecase-nav-btn active" id="btn-usecase-1" onclick="switchUsecase(1)">
                <div class="d-flex align-items-center justify-content-between mb-1">
                  <span class="badge" style="background: rgba(255,23,145,0.25); color: #ff1791; font-size: 0.7rem; font-weight: 800;">USECASE 01</span>
                  <i class="fas fa-scissors text-muted"></i>
                </div>
                <h4 class="text-white mb-1" style="font-size: 1.05rem; font-weight: 700;">Subcontracting &amp; Denim Proof</h4>
                <div class="text-muted" style="font-size: 0.8rem;">Section 143 · Rule 55 Challans · Progressive Costing</div>
              </button>
            </div>
            <div class="col-12 col-md-4">
              <button type="button" class="usecase-nav-btn" id="btn-usecase-2" onclick="switchUsecase(2)">
                <div class="d-flex align-items-center justify-content-between mb-1">
                  <span class="badge" style="background: rgba(255,23,145,0.25); color: #ff1791; font-size: 0.7rem; font-weight: 800;">USECASE 02</span>
                  <i class="fas fa-tablet-screen-button text-muted"></i>
                </div>
                <h4 class="text-white mb-1" style="font-size: 1.05rem; font-weight: 700;">Glove-Safe Shop-Floor Kiosk</h4>
                <div class="text-muted" style="font-size: 0.8rem;">Dual-Clock Labor · Downtime Isolation · Offline Sync</div>
              </button>
            </div>
            <div class="col-12 col-md-4">
              <button type="button" class="usecase-nav-btn" id="btn-usecase-3" onclick="switchUsecase(3)">
                <div class="d-flex align-items-center justify-content-between mb-1">
                  <span class="badge" style="background: rgba(255,23,145,0.25); color: #ff1791; font-size: 0.7rem; font-weight: 800;">USECASE 03</span>
                  <i class="fas fa-diagram-project text-muted"></i>
                </div>
                <h4 class="text-white mb-1" style="font-size: 1.05rem; font-weight: 700;">Living Routing DAG</h4>
                <div class="text-muted" style="font-size: 0.8rem;">Dynamic QA Branches · Rework Loops · Scrap Salvage</div>
              </button>
            </div>
          </div>

          <!-- Usecase Display Containers -->
          <div class="p-4 p-md-5 rounded" style="background: #141418; border: 1px solid rgba(255,23,145,0.25); box-shadow: 0 10px 40px rgba(0,0,0,0.8);">
            
            <!-- ========================================== -->
            <!-- USECASE 1: THE DENIM PROOF (Subcontracting) -->
            <!-- ========================================== -->
            <div class="usecase-pane active" id="pane-usecase-1">
              <div class="d-flex flex-wrap align-items-center justify-content-between pb-3 mb-4" style="border-bottom: 1px solid rgba(255,255,255,0.08);">
                <div>
                  <span class="text-white fw-bold" style="font-size: 1.15rem;">Live Lot Fixture: #LOT-DNM-201 (Denim 14oz Heavy Fabric)</span>
                  <div class="text-muted" style="font-size: 0.85rem;">Target: 300 Pairs across 5 Work Centers &amp; External Dyeing Subcontractor</div>
                </div>
                <!-- Step Pills -->
                <div class="d-flex gap-2 mt-2 mt-md-0">
                  <button type="button" class="step-pill active" id="pill-step-1" onclick="setDenimStep(1)">1. Inward Gate</button>
                  <button type="button" class="step-pill" id="pill-step-2" onclick="setDenimStep(2)">2. Mass Balance</button>
                  <button type="button" class="step-pill" id="pill-step-3" onclick="setDenimStep(3)">3. Subcontractor Dispatch</button>
                  <button type="button" class="step-pill" id="pill-step-4" onclick="setDenimStep(4)">4. Cost Rollup</button>
                </div>
              </div>

              <!-- Denim Step 1: Inward Gate & Quarantine -->
              <div class="denim-substep" id="denim-step-1">
                <div class="row g-4 align-items-center">
                  <div class="col-12 col-lg-7">
                    <h4 class="text-white mb-2" style="font-size: 1.1rem;">Raw Material Arrival &amp; 3-Way Quarantine Gate</h4>
                    <p class="text-muted mb-3" style="font-size: 0.92rem;">
                      Under traditional software, stock is either blindly marked available or lost in Excel quarantine notes. In TsukiFlow, arrival generates a quarantined sub-ledger state pending digital inspection.
                    </p>
                    <div class="p-3 rounded mb-3" style="background: #191920; border: 1px solid rgba(255,255,255,0.06);">
                      <div class="row g-2 text-white" style="font-size: 0.85rem;">
                        <div class="col-6"><span class="text-muted">PO Reference:</span> PO-2026-8812</div>
                        <div class="col-6"><span class="text-muted">Vendor:</span> Arvind Denim Mills</div>
                        <div class="col-6"><span class="text-muted">Item:</span> 14oz Indigo Denim Roll</div>
                        <div class="col-6"><span class="text-muted">Received Qty:</span> <strong>500.00 Meters</strong></div>
                        <div class="col-6"><span class="text-muted">Auxiliary:</span> 400 pcs Brass Zippers</div>
                        <div class="col-6"><span class="text-muted">Unit Inward Rate:</span> <strong>₹330.00 / meter</strong></div>
                      </div>
                    </div>
                    <div class="d-flex gap-2 align-items-center">
                      <button type="button" class="button outline white tertiary-hover" id="btn-approve-qa" onclick="approveQaGate()">
                        <span class="button-text white"><i class="fas fa-stamp me-1"></i> Verify CoA &amp; Release Gate</span>
                      </button>
                      <button type="button" class="button outline gray-50 tertiary-hover" onclick="setDenimStep(2)">
                        <span class="button-text white">Next: Mass Balance &rarr;</span>
                      </button>
                    </div>
                  </div>
                  <div class="col-12 col-lg-5">
                    <div class="p-4 rounded text-center" id="qa-gate-status-card" style="background: #101015; border: 2px solid #eab308;">
                      <div class="text-warning mb-2" id="qa-gate-icon"><i class="fas fa-shield-halved fa-2x"></i></div>
                      <h5 class="text-white mb-1" id="qa-gate-title">GATE STATUS: QUARANTINED</h5>
                      <p class="text-muted mb-0" id="qa-gate-desc" style="font-size: 0.85rem;">Material physically staged in quarantine bay. JWO staging locked until chemical CoA verification.</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Denim Step 2: Cutting & Inline Mass Conservation -->
              <div class="denim-substep d-none" id="denim-step-2">
                <div class="row g-4 align-items-center">
                  <div class="col-12 col-lg-7">
                    <h4 class="text-white mb-2" style="font-size: 1.1rem;">Floor Cutting &amp; Strict Mass Balance Engine</h4>
                    <p class="text-muted mb-3" style="font-size: 0.92rem;">
                      Database Law: <code>Issued = Consumed + Banked Remnants + Floor Scrap</code>. The system forbids impossible entries before bad numbers contaminate your ledger.
                    </p>
                    
                    <div class="row g-3 mb-3">
                      <div class="col-4">
                        <label class="form-label text-muted" style="font-size: 0.8rem;">Cut Fabric (Panels)</label>
                        <input type="number" id="input-mass-consumed" class="form-control text-white bg-dark" value="470" oninput="calculateMassBalance()" style="border-color: rgba(255,255,255,0.15);">
                        <small class="text-muted">470 m (300 pairs)</small>
                      </div>
                      <div class="col-4">
                        <label class="form-label text-muted" style="font-size: 0.8rem;">Banked Offcuts</label>
                        <input type="number" id="input-mass-offcuts" class="form-control text-white bg-dark" value="20" oninput="calculateMassBalance()" style="border-color: rgba(255,255,255,0.15);">
                        <small class="text-muted">20 m (Pocket SKU)</small>
                      </div>
                      <div class="col-4">
                        <label class="form-label text-muted" style="font-size: 0.8rem;">Floor Wastage</label>
                        <input type="number" id="input-mass-scrap" class="form-control text-white bg-dark" value="10" oninput="calculateMassBalance()" style="border-color: rgba(255,255,255,0.15);">
                        <small class="text-muted">10 m (End-bits)</small>
                      </div>
                    </div>

                    <div class="d-flex flex-wrap gap-2">
                      <button type="button" class="btn btn-sm btn-outline-danger" onclick="simulateMassError()">
                        <i class="fas fa-triangle-exclamation me-1"></i> Simulate SpreadSheet Error (+25m)
                      </button>
                      <button type="button" class="btn btn-sm btn-outline-success" onclick="resetMassBalance()">
                        <i class="fas fa-check me-1"></i> Auto-Balance (Database Constraint)
                      </button>
                      <button type="button" class="btn btn-sm btn-outline-light ms-auto" onclick="setDenimStep(3)">
                        Next: Subcontractor Dispatch &rarr;
                      </button>
                    </div>
                  </div>
                  <div class="col-12 col-lg-5">
                    <div class="p-4 rounded text-center" id="mass-balance-card" style="background: #101015; border: 2px solid #10b981;">
                      <div class="text-success mb-2" id="mass-balance-icon"><i class="fas fa-scale-balanced fa-2x"></i></div>
                      <h5 class="text-white mb-1" id="mass-balance-title">MASS BALANCE: 0.00m DELTA</h5>
                      <p class="text-white-75 mb-2" id="mass-balance-calc" style="font-size: 0.9rem;">500m Issued = 470m Cut + 20m Offcut + 10m Scrap</p>
                      <span class="badge bg-success text-white px-3 py-1" id="mass-balance-badge">DATABASE CONSTRAINT ENFORCED</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Denim Step 3: Subcontractor Dispatch (GST Section 143 & Rule 55) -->
              <div class="denim-substep d-none" id="denim-step-3">
                <div class="row g-4 align-items-center">
                  <div class="col-12 col-lg-7">
                    <h4 class="text-white mb-2" style="font-size: 1.1rem;">Subcontractor Dispatch &amp; GST Section 143 Watch</h4>
                    <p class="text-muted mb-3" style="font-size: 0.92rem;">
                      Dispatched cut panels must return within 1 year under Section 143 CGST, or they become taxable deemed supplies with Section 50 interest. TsukiFlow auto-issues Rule 55 delivery challans and arms the aging monitor.
                    </p>
                    <div class="p-3 rounded mb-3" style="background: #191920; border: 1px solid rgba(255,255,255,0.06);">
                      <div class="row g-2 text-white" style="font-size: 0.85rem;">
                        <div class="col-6"><span class="text-muted">Challan Ref:</span> <strong>R55-2026-0941</strong></div>
                        <div class="col-6"><span class="text-muted">Processor:</span> Apex Dyeing &amp; Finishing (Surat)</div>
                        <div class="col-6"><span class="text-muted">HSN Code:</span> 6203.42.00</div>
                        <div class="col-6"><span class="text-muted">Declared Valuation:</span> ₹1,14,000.00</div>
                        <div class="col-6"><span class="text-muted">Job Stage:</span> Pigment Dyeing &amp; Stone Wash</div>
                        <div class="col-6"><span class="text-muted">Shrinkage Band:</span> Contractual &plusmn;1.5%</div>
                      </div>
                    </div>
                    <div class="d-flex gap-2">
                      <button type="button" class="button outline white tertiary-hover" onclick="showChallanBadge()">
                        <span class="button-text white"><i class="fas fa-file-invoice me-1"></i> Print Statutory Rule 55</span>
                      </button>
                      <button type="button" class="button outline gray-50 tertiary-hover ms-auto" onclick="setDenimStep(4)">
                        <span class="button-text white">Next: Cost Rollup &rarr;</span>
                      </button>
                    </div>
                  </div>
                  <div class="col-12 col-lg-5">
                    <div class="p-4 rounded text-center" style="background: #101015; border: 2px solid #ff1791;">
                      <div class="text-primary mb-2" style="color: #ff1791 !important;"><i class="fas fa-clock fa-2x"></i></div>
                      <h5 class="text-white mb-1">SECTION 143 AGING CLOCK</h5>
                      <div class="text-white-75 mb-2" style="font-size: 1.25rem; font-family: monospace; font-weight: bold; color: #ff1791 !important;">
                        365 DAYS 00 HRS
                      </div>
                      <span class="badge px-3 py-1" style="background: rgba(255,23,145,0.2); color: #ff1791; border: 1px solid #ff1791;">
                        DEEMED-SUPPLY MONITOR ACTIVE
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Denim Step 4: Progressive Actual Costing Rollup -->
              <div class="denim-substep d-none" id="denim-step-4">
                <div class="row g-4 align-items-center">
                  <div class="col-12 col-lg-7">
                    <h4 class="text-white mb-2" style="font-size: 1.1rem;">Gate Return &amp; Progressive Actual Costing</h4>
                    <p class="text-muted mb-3" style="font-size: 0.92rem;">
                      Finished jeans return. The vendor service bill (300 pairs &times; ₹45 = ₹13,500) drafts automatically. Unit costs roll forward stage by stage down to the paisa.
                    </p>

                    <!-- Cost Breakdown Tree -->
                    <div class="p-3 rounded mb-3" style="background: #191920; border: 1px solid rgba(255,255,255,0.06);">
                      <div class="d-flex justify-content-between mb-1" style="font-size: 0.88rem;">
                        <span class="text-muted">1. Raw 14oz Denim Fabric:</span>
                        <span class="text-white font-monospace">₹330.00 / pair</span>
                      </div>
                      <div class="d-flex justify-content-between mb-1" style="font-size: 0.88rem;">
                        <span class="text-muted">2. Cutting Labor &amp; Machine Absorption:</span>
                        <span class="text-white font-monospace">₹50.00 / pair</span>
                      </div>
                      <div class="d-flex justify-content-between mb-1" style="font-size: 0.88rem;">
                        <span class="text-muted">3. Subcontractor Dyeing &amp; Wash Service:</span>
                        <span class="text-white font-monospace">₹45.00 / pair</span>
                      </div>
                      <div class="d-flex justify-content-between mb-1" style="font-size: 0.88rem;">
                        <span class="text-muted">4. Assembly, Stitching &amp; Zippers:</span>
                        <span class="text-white font-monospace">₹165.00 / pair</span>
                      </div>
                      <div class="d-flex justify-content-between pt-2 border-top border-secondary" style="font-size: 1rem; font-weight: 700;">
                        <span class="text-white">Final Actual Cost:</span>
                        <span style="color: #ff1791; font-family: monospace;">₹590.00 / pair</span>
                      </div>
                    </div>

                    <div class="d-flex gap-2 align-items-center">
                      <a href="#modal" data-bs-toggle="modal" data-bs-target="#modal" class="button outline white tertiary-hover">
                        <span class="button-text white"><i class="fas fa-play me-1"></i> Run Balance Test on Your Order</span>
                      </a>
                      <button type="button" class="btn btn-sm btn-outline-secondary" onclick="setDenimStep(1)">
                        <i class="fas fa-rotate-left me-1"></i> Restart Story
                      </button>
                    </div>
                  </div>
                  <div class="col-12 col-lg-5">
                    <div class="p-4 rounded text-center" style="background: #101015; border: 2px solid #ff1791;">
                      <div class="text-white-50 mb-1" style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px;">TOTAL PERIODIC LOT VALUE</div>
                      <div class="text-white mb-2" style="font-size: 2rem; font-family: monospace; font-weight: 800;">₹1,77,000.00</div>
                      <div class="text-muted mb-3" style="font-size: 0.82rem;">300 pairs &times; ₹590.00 · Balanced to the Paisa</div>
                      <span class="badge bg-dark text-white px-3 py-2 border border-secondary" style="font-family: monospace;">
                        <i class="fas fa-check-double text-success me-1"></i> TallyPrime TDL Port 9000 Synced
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <!-- ========================================== -->
            <!-- USECASE 2: GLOVE-SAFE KIOSK SIMULATOR       -->
            <!-- ========================================== -->
            <div class="usecase-pane" id="pane-usecase-2">
              <div class="row g-4 align-items-center">
                <div class="col-12 col-lg-6">
                  <div class="badge px-3 py-1 mb-2" style="background: rgba(255,23,145,0.2); color: #ff1791; border: 1px solid #ff1791; font-size: 0.75rem;">
                    SHOP-FLOOR TABLET TERMINAL
                  </div>
                  <h3 class="text-white mb-2" style="font-size: 1.25rem;">Glove-Friendly Touch Kiosk with Dual-Clock Labor</h3>
                  <p class="text-muted mb-3" style="font-size: 0.92rem;">
                    Traditional ERPs demand typing, so night-shift operators bypass them for paper travelers. TsukiFlow features 64px tactile touch targets, dual-clock downtime isolation, and an offline-first SQLite queue.
                  </p>

                  <div class="p-3 rounded mb-3" style="background: #191920; border: 1px solid rgba(255,255,255,0.06);">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <span class="text-white fw-bold">Active Station: CNC-CELL-04 (Pune)</span>
                      <span class="badge bg-success text-white">ONLINE SYNC</span>
                    </div>
                    <div class="text-muted mb-1" style="font-size: 0.85rem;">Assigned JWO: <strong>JWO-804 (Helical Gear Pinion)</strong></div>
                    <div class="text-muted" style="font-size: 0.85rem;">Signed Operator: <strong>Ramesh K. (PIN: 849201)</strong></div>
                  </div>

                  <!-- Dual Clock Demonstration -->
                  <div class="row g-2 mb-3">
                    <div class="col-6">
                      <div class="kiosk-clock-card">
                        <div class="text-muted" style="font-size: 0.75rem;">SHIFT ATTENDANCE</div>
                        <div class="text-white" id="clock-attendance" style="font-size: 1.35rem; font-family: monospace; font-weight: 700;">07:18:42</div>
                        <div class="text-success" style="font-size: 0.7rem;"><i class="fas fa-circle fa-xs me-1"></i> Running</div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="kiosk-clock-card" id="card-job-clock" style="border-color: rgba(255,23,145,0.3);">
                        <div class="text-muted" style="font-size: 0.75rem;">JOB DIRECT RUN CLOCK</div>
                        <div class="text-white" id="clock-job" style="font-size: 1.35rem; font-family: monospace; font-weight: 700; color: #ff1791 !important;">03:24:19</div>
                        <div id="job-clock-status" style="font-size: 0.7rem; color: #ff1791;"><i class="fas fa-play fa-xs me-1"></i> Active Direct Runtime</div>
                      </div>
                    </div>
                  </div>

                  <!-- Breakdown Toggle -->
                  <div class="mb-3">
                    <button type="button" class="btn btn-warning w-100 fw-bold py-2" id="btn-toggle-breakdown" onclick="toggleKioskBreakdown()">
                      <i class="fas fa-pause me-1"></i> Report Machine Breakdown (Tool Spindle Wear)
                    </button>
                    <div class="p-2 rounded mt-2 d-none" id="kiosk-downtime-alert" style="background: rgba(245, 158, 11, 0.15); border: 1px solid #f59e0b; font-size: 0.82rem; color: #fcd34d;">
                      <i class="fas fa-info-circle me-1"></i> <strong>Job Clock Frozen:</strong> Downtime hours charged directly to Plant Overhead Variance, protecting the unit manufacturing cost from artificial corruption.
                    </div>
                  </div>
                </div>

                <div class="col-12 col-lg-6">
                  <!-- Touchpad Tablet Simulation -->
                  <div class="p-4 rounded" style="background: #0f0f14; border: 2px solid rgba(255,255,255,0.15); box-shadow: inset 0 0 30px rgba(0,0,0,0.8);">
                    <div class="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom border-secondary">
                      <span class="text-white-50" style="font-size: 0.8rem; letter-spacing: 1px;">TOUCHSCREEN WORKER TERMINAL</span>
                      <span class="badge bg-dark text-muted" style="font-family: monospace;">64px GLOVE SAFE</span>
                    </div>

                    <!-- Input Counters -->
                    <div class="row g-3 mb-3">
                      <div class="col-6">
                        <label class="form-label text-white-75 mb-1" style="font-size: 0.85rem;">Good Units Finished</label>
                        <div class="d-flex align-items-center gap-2">
                          <button type="button" class="kiosk-btn px-3" onclick="adjustKioskGood(-1)">-</button>
                          <input type="text" id="kiosk-good-val" class="form-control text-center text-white bg-dark fw-bold" value="48" readonly="readonly" style="font-size: 1.25rem;">
                          <button type="button" class="kiosk-btn px-3" onclick="adjustKioskGood(1)">+</button>
                        </div>
                      </div>
                      <div class="col-6">
                        <label class="form-label text-white-75 mb-1" style="font-size: 0.85rem;">Scrap Offcuts</label>
                        <div class="d-flex align-items-center gap-2">
                          <button type="button" class="kiosk-btn px-3" onclick="adjustKioskScrap(-1)">-</button>
                          <input type="text" id="kiosk-scrap-val" class="form-control text-center text-white bg-dark fw-bold" value="2" readonly="readonly" style="font-size: 1.25rem;">
                          <button type="button" class="kiosk-btn px-3" onclick="adjustKioskScrap(1)">+</button>
                        </div>
                      </div>
                    </div>

                    <!-- Mass Check in Kiosk -->
                    <div class="p-2 rounded mb-3 text-center" style="background: #191920; font-size: 0.85rem;">
                      <span class="text-muted">Target Lot Batch: 50 pcs &nbsp;|&nbsp; </span>
                      <span class="text-success fw-bold" id="kiosk-mass-text">Balance: 48 Good + 2 Scrap = 50 pcs (100% OK)</span>
                    </div>

                    <!-- Big Touch Submit -->
                    <button type="button" class="kiosk-btn w-100" style="background: #ff1791; color: #000; font-weight: 800; min-height: 56px;" onclick="commitKioskShift()">
                      <i class="fas fa-check-to-slot me-2"></i> TAP TO SIGN &amp; COMMIT TO LEDGER
                    </button>

                    <!-- Offline Status -->
                    <div class="text-center mt-3 text-muted" style="font-size: 0.78rem;">
                      <i class="fas fa-shield me-1"></i> Transaction verified via SHA-256 operator token. Queued to local IndexedDB.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- ========================================== -->
            <!-- USECASE 3: LIVING ROUTING DAG & SCRAP      -->
            <!-- ========================================== -->
            <div class="usecase-pane" id="pane-usecase-3">
              <div class="row g-4 align-items-center">
                <div class="col-12 col-lg-5">
                  <div class="badge px-3 py-1 mb-2" style="background: rgba(255,23,145,0.2); color: #ff1791; border: 1px solid #ff1791; font-size: 0.75rem;">
                    DIRECTED ACYCLIC GRAPH TOPOLOGY
                  </div>
                  <h3 class="text-white mb-2" style="font-size: 1.25rem;">Routing as a Living DAG with Scrap Salvage</h3>
                  <p class="text-muted mb-3" style="font-size: 0.92rem;">
                    In rigid ERP software, process changes or QA rejections break the system and force manual spreadsheet overrides. TsukiFlow models production as a Directed Acyclic Graph where active lots keep their born-under routing.
                  </p>

                  <div class="text-white fw-bold mb-2" style="font-size: 0.9rem;">Test Production Disposition Gate:</div>
                  <div class="d-flex flex-column gap-2 mb-3">
                    <button type="button" class="btn btn-outline-success text-start active" id="dag-btn-pass" onclick="setDagMode('pass')">
                      <i class="fas fa-check-circle me-1"></i> <strong>1. Nominal QA Pass:</strong> Direct flow to Subcontractor Heat Treatment &rarr; FG
                    </button>
                    <button type="button" class="btn btn-outline-warning text-start" id="dag-btn-rework" onclick="setDagMode('rework')">
                      <i class="fas fa-rotate me-1"></i> <strong>2. QA Deviation:</strong> Closed-loop Rework Loop (Secondary Grinding)
                    </button>
                    <button type="button" class="btn btn-outline-danger text-start" id="dag-btn-scrap" onclick="setDagMode('scrap')">
                      <i class="fas fa-recycle me-1"></i> <strong>3. Rejection to Scrap:</strong> Valued Turnings Bank credits live WIP
                    </button>
                  </div>

                  <div class="p-3 rounded" style="background: #191920; border: 1px solid rgba(255,255,255,0.06); font-size: 0.85rem;">
                    <div class="text-muted mb-1">Active Topology State:</div>
                    <div class="text-white" id="dag-state-desc">
                      Nominal production path active. 100% yield expected at standard cycle time.
                    </div>
                  </div>
                </div>

                <div class="col-12 col-lg-7">
                  <!-- Visual Graph Canvas -->
                  <div class="p-4 rounded position-relative" style="background: #0d0d12; border: 1px solid rgba(255,255,255,0.12); min-height: 380px;">
                    <div class="d-flex justify-content-between mb-3 text-muted" style="font-size: 0.75rem; letter-spacing: 1px;">
                      <span>TOPOLOGY EXPLORER · VERSION 2.4 (AUDITED)</span>
                      <span id="dag-cost-meter" class="text-white font-monospace">STAGE COST: ₹420 &rarr; ₹610</span>
                    </div>

                    <!-- Visual Nodes Flow -->
                    <div class="d-flex flex-column gap-3">
                      
                      <!-- Node 1: Ingestion -->
                      <div class="dag-node" id="node-1">
                        <div class="d-flex justify-content-between">
                          <span class="text-white fw-bold"><i class="fas fa-cube text-muted me-2"></i>1. Raw Alloy Ingot (7075-T6)</span>
                          <span class="badge bg-dark text-muted font-monospace">GRN-881</span>
                        </div>
                        <div class="text-muted" style="font-size: 0.8rem;">Heat #HT-7701 born with MTR chemistry validation.</div>
                      </div>

                      <!-- Node 2: CNC Milling -->
                      <div class="dag-node" id="node-2">
                        <div class="d-flex justify-content-between">
                          <span class="text-white fw-bold"><i class="fas fa-gears text-muted me-2"></i>2. CNC 5-Axis Milling</span>
                          <span class="badge bg-dark text-muted font-monospace">STATION-CNC-04</span>
                        </div>
                        <div class="text-muted" style="font-size: 0.8rem;">Direct machine runtime: 0.42 hrs/unit. Kerf offcuts measured.</div>
                      </div>

                      <!-- Node 3: QA Gate -->
                      <div class="dag-node highlight-nominal" id="node-3">
                        <div class="d-flex justify-content-between">
                          <span class="text-white fw-bold"><i class="fas fa-microscope text-warning me-2"></i>3. Optical CMM Inspection Gate</span>
                          <span class="badge bg-success text-white" id="node-3-badge">CPK = 1.72 (PASSED)</span>
                        </div>
                        <div class="text-muted" style="font-size: 0.8rem;">100% dimensional scan against CAD tolerances.</div>
                      </div>

                      <!-- Node 4: Dynamic Disposition Target -->
                      <div class="dag-node" id="node-4">
                        <div class="d-flex justify-content-between">
                          <span class="text-white fw-bold" id="node-4-title"><i class="fas fa-truck-ramp-box text-success me-2"></i>4. Subcontractor Heat Treatment</span>
                          <span class="badge bg-dark text-white font-monospace" id="node-4-badge">RULE 55 DISPATCH</span>
                        </div>
                        <div class="text-muted" id="node-4-desc" style="font-size: 0.8rem;">Dispatched under statutory challan; Section 143 aging clock monitored.</div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- Bottom CTA & GitHub Anchor -->
          <div class="mt-4 p-3 rounded d-flex flex-wrap align-items-center justify-content-between" style="background: #141418; border: 1px solid rgba(255,255,255,0.08);">
            <div class="d-flex align-items-center mb-2 mb-md-0">
              <span class="badge bg-dark text-white px-3 py-2 me-3 border border-secondary" style="font-size: 0.75rem; letter-spacing: 1px;">
                <i class="fab fa-github me-1 text-primary" style="color: #ff1791 !important;"></i> OPEN REPOSITORY
              </span>
              <span class="text-muted" style="font-size: 0.88rem;">
                Full application in active development: <a href="https://github.com/Manash8666/TsukiFlow" target="_blank" rel="noopener noreferrer" class="text-white hover-underline"><u>github.com/Manash8666/TsukiFlow</u></a>
              </span>
            </div>
            <div class="d-flex gap-2">
              <a href="#modal" data-bs-toggle="modal" data-bs-target="#modal" class="button arrow-button next scheme-2 tertiary">
                <span class="arrow">
                  <span class="item"></span>
                  <span class="item"></span>
                </span>
                <span class="line"></span>
                <span class="text">SCHEDULE 30-DAY BALANCE TEST</span>
              </a>
            </div>
          </div>

        </div>
      </section>
`;

const interactiveJsScript = `
    <!-- Interactive Use-Cases State Machine Script -->
    <script>
      // 1. Usecase Main Tab Switcher
      function switchUsecase(tabIndex) {
        for (let i = 1; i <= 3; i++) {
          const btn = document.getElementById('btn-usecase-' + i);
          const pane = document.getElementById('pane-usecase-' + i);
          if (btn && pane) {
            if (i === tabIndex) {
              btn.classList.add('active');
              pane.classList.add('active');
            } else {
              btn.classList.remove('active');
              pane.classList.remove('active');
            }
          }
        }
      }

      // 2. Usecase 1 (Denim Proof) Sub-Step Controller
      function setDenimStep(stepIndex) {
        for (let i = 1; i <= 4; i++) {
          const pill = document.getElementById('pill-step-' + i);
          const stepDiv = document.getElementById('denim-step-' + i);
          if (pill && stepDiv) {
            if (i === stepIndex) {
              pill.classList.add('active');
              stepDiv.classList.remove('d-none');
            } else {
              pill.classList.remove('active');
              stepDiv.classList.add('d-none');
            }
          }
        }
      }

      function approveQaGate() {
        const card = document.getElementById('qa-gate-status-card');
        const icon = document.getElementById('qa-gate-icon');
        const title = document.getElementById('qa-gate-title');
        const desc = document.getElementById('qa-gate-desc');
        const btn = document.getElementById('btn-approve-qa');

        if (card && icon && title && desc) {
          card.style.borderColor = '#10b981';
          icon.className = 'text-success mb-2';
          icon.innerHTML = '<i class="fas fa-check-circle fa-2x"></i>';
          title.textContent = 'GATE STATUS: APPROVED & LOT SEEDED';
          title.className = 'text-success mb-1';
          desc.textContent = 'Lot #DNM-201 born with cryptographic parent hash. MTR test values matched. JWO authorization unlocked.';
          if (btn) {
            btn.innerHTML = '<span class="button-text white"><i class="fas fa-check me-1"></i> QA Gate Cleared</span>';
          }
        }
      }

      function calculateMassBalance() {
        const consumed = parseFloat(document.getElementById('input-mass-consumed')?.value || 0);
        const offcuts = parseFloat(document.getElementById('input-mass-offcuts')?.value || 0);
        const scrap = parseFloat(document.getElementById('input-mass-scrap')?.value || 0);
        const issued = 500;
        const total = consumed + offcuts + scrap;
        const delta = total - issued;

        const card = document.getElementById('mass-balance-card');
        const icon = document.getElementById('mass-balance-icon');
        const title = document.getElementById('mass-balance-title');
        const calc = document.getElementById('mass-balance-calc');
        const badge = document.getElementById('mass-balance-badge');

        if (delta === 0) {
          card.style.borderColor = '#10b981';
          icon.className = 'text-success mb-2';
          icon.innerHTML = '<i class="fas fa-scale-balanced fa-2x"></i>';
          title.textContent = 'MASS BALANCE: 0.00m DELTA';
          title.className = 'text-white mb-1';
          calc.textContent = \`500m Issued = \${consumed}m Cut + \${offcuts}m Offcut + \${scrap}m Scrap\`;
          badge.className = 'badge bg-success text-white px-3 py-1';
          badge.textContent = 'DATABASE CONSTRAINT ENFORCED';
        } else {
          card.style.borderColor = '#ef4444';
          icon.className = 'text-danger mb-2';
          icon.innerHTML = '<i class="fas fa-triangle-exclamation fa-2x"></i>';
          title.textContent = \`MASS DISCREPANCY: \${delta > 0 ? '+' : ''}\${delta.toFixed(2)}m\`;
          title.className = 'text-danger mb-1';
          calc.textContent = \`Issued 500m does NOT equal Allocated \${total}m\`;
          badge.className = 'badge bg-danger text-white px-3 py-1';
          badge.textContent = 'INVARIANT ABORT: ENTRY BLOCKED';
        }
      }

      function simulateMassError() {
        const consumedInput = document.getElementById('input-mass-consumed');
        if (consumedInput) {
          consumedInput.value = '495';
          calculateMassBalance();
        }
      }

      function resetMassBalance() {
        const c = document.getElementById('input-mass-consumed');
        const o = document.getElementById('input-mass-offcuts');
        const s = document.getElementById('input-mass-scrap');
        if (c && o && s) {
          c.value = '470';
          o.value = '20';
          s.value = '10';
          calculateMassBalance();
        }
      }

      function showChallanBadge() {
        alert('Statutory Rule 55 Challan R55-2026-0941 generated with digital signature! Dispatched to Apex Dyeing (Surat). Section 143 365-day clock running.');
      }

      // 3. Usecase 2 (Glove Kiosk) Clock Simulation
      let kioskBreakdownActive = false;
      let jobSeconds = 3 * 3600 + 24 * 60 + 19;
      let attendanceSeconds = 7 * 3600 + 18 * 60 + 42;

      setInterval(function() {
        attendanceSeconds++;
        const aHours = String(Math.floor(attendanceSeconds / 3600)).padStart(2, '0');
        const aMins = String(Math.floor((attendanceSeconds % 3600) / 60)).padStart(2, '0');
        const aSecs = String(attendanceSeconds % 60).padStart(2, '0');
        const attElem = document.getElementById('clock-attendance');
        if (attElem) attElem.textContent = \`\${aHours}:\${aMins}:\${aSecs}\`;

        if (!kioskBreakdownActive) {
          jobSeconds++;
          const jHours = String(Math.floor(jobSeconds / 3600)).padStart(2, '0');
          const jMins = String(Math.floor((jobSeconds % 3600) / 60)).padStart(2, '0');
          const jSecs = String(jobSeconds % 60).padStart(2, '0');
          const jobElem = document.getElementById('clock-job');
          if (jobElem) jobElem.textContent = \`\${jHours}:\${jMins}:\${jSecs}\`;
        }
      }, 1000);

      function toggleKioskBreakdown() {
        kioskBreakdownActive = !kioskBreakdownActive;
        const btn = document.getElementById('btn-toggle-breakdown');
        const alertBox = document.getElementById('kiosk-downtime-alert');
        const statusElem = document.getElementById('job-clock-status');
        const card = document.getElementById('card-job-clock');

        if (kioskBreakdownActive) {
          if (btn) {
            btn.className = 'btn btn-success w-100 fw-bold py-2';
            btn.innerHTML = '<i class="fas fa-play me-1"></i> Resume Production Run (Clear Breakdown)';
          }
          if (alertBox) alertBox.classList.remove('d-none');
          if (statusElem) {
            statusElem.innerHTML = '<i class="fas fa-pause fa-xs me-1"></i> FROZEN: DOWNTIME CHARGED TO OVERHEAD';
            statusElem.style.color = '#f59e0b';
          }
          if (card) card.style.borderColor = '#f59e0b';
        } else {
          if (btn) {
            btn.className = 'btn btn-warning w-100 fw-bold py-2';
            btn.innerHTML = '<i class="fas fa-pause me-1"></i> Report Machine Breakdown (Tool Spindle Wear)';
          }
          if (alertBox) alertBox.classList.add('d-none');
          if (statusElem) {
            statusElem.innerHTML = '<i class="fas fa-play fa-xs me-1"></i> Active Direct Runtime';
            statusElem.style.color = '#ff1791';
          }
          if (card) card.style.borderColor = 'rgba(255,23,145,0.3)';
        }
      }

      function adjustKioskGood(delta) {
        const elem = document.getElementById('kiosk-good-val');
        if (!elem) return;
        let v = parseInt(elem.value || 0) + delta;
        if (v < 0) v = 0;
        elem.value = v;
        updateKioskBalanceText();
      }

      function adjustKioskScrap(delta) {
        const elem = document.getElementById('kiosk-scrap-val');
        if (!elem) return;
        let v = parseInt(elem.value || 0) + delta;
        if (v < 0) v = 0;
        elem.value = v;
        updateKioskBalanceText();
      }

      function updateKioskBalanceText() {
        const g = parseInt(document.getElementById('kiosk-good-val')?.value || 0);
        const s = parseInt(document.getElementById('kiosk-scrap-val')?.value || 0);
        const textElem = document.getElementById('kiosk-mass-text');
        if (textElem) {
          const tot = g + s;
          if (tot === 50) {
            textElem.textContent = \`Balance: \${g} Good + \${s} Scrap = 50 pcs (100% OK)\`;
            textElem.className = 'text-success fw-bold';
          } else {
            textElem.textContent = \`Variance: \${tot} accounted vs 50 target (\${50 - tot} gap)\`;
            textElem.className = 'text-warning fw-bold';
          }
        }
      }

      function commitKioskShift() {
        const g = document.getElementById('kiosk-good-val')?.value || 48;
        const s = document.getElementById('kiosk-scrap-val')?.value || 2;
        alert(\`✓ Transaction Confirmed on CNC-CELL-04!\\n- Good: \${g} pcs logged to QA Bay\\n- Scrap: \${s} pcs alloy banked to scrap SKU\\n- Shift ledger committed to PostgreSQL with idempotent SQLite sync.\`);
      }

      // 4. Usecase 3 (Living Routing DAG) Mode Controller
      function setDagMode(mode) {
        const btnPass = document.getElementById('dag-btn-pass');
        const btnRework = document.getElementById('dag-btn-rework');
        const btnScrap = document.getElementById('dag-btn-scrap');

        const node3 = document.getElementById('node-3');
        const node3Badge = document.getElementById('node-3-badge');
        const node4 = document.getElementById('node-4');
        const node4Title = document.getElementById('node-4-title');
        const node4Badge = document.getElementById('node-4-badge');
        const node4Desc = document.getElementById('node-4-desc');
        const desc = document.getElementById('dag-state-desc');
        const meter = document.getElementById('dag-cost-meter');

        [btnPass, btnRework, btnScrap].forEach(b => b?.classList.remove('active'));

        if (mode === 'pass') {
          btnPass?.classList.add('active');
          node3.className = 'dag-node highlight-nominal';
          node3Badge.className = 'badge bg-success text-white';
          node3Badge.textContent = 'CPK = 1.72 (PASSED)';
          node4.className = 'dag-node';
          node4Title.innerHTML = '<i class="fas fa-truck-ramp-box text-success me-2"></i>4. Subcontractor Heat Treatment';
          node4Badge.textContent = 'RULE 55 DISPATCH';
          node4Badge.className = 'badge bg-dark text-white font-monospace';
          node4Desc.textContent = 'Dispatched under statutory challan; Section 143 aging clock monitored.';
          desc.textContent = 'Nominal production path active. 100% yield expected at standard cycle time.';
          meter.textContent = 'STAGE COST: ₹420 → ₹610';
        } else if (mode === 'rework') {
          btnRework?.classList.add('active');
          node3.className = 'dag-node highlight-rework';
          node3Badge.className = 'badge bg-warning text-dark';
          node3Badge.textContent = 'DIMENSIONAL DEVIATION (+0.04mm)';
          node4.className = 'dag-node highlight-rework';
          node4Title.innerHTML = '<i class="fas fa-arrows-spin text-warning me-2"></i>4. Secondary Grinding & Re-Honing Loop';
          node4Badge.textContent = 'CLOSED-LOOP REWORK';
          node4Badge.className = 'badge bg-warning text-dark font-monospace';
          node4Desc.textContent = 'Lot retains parent heat #HT-7701. +₹38.50 direct labor absorbed into lot cost without orphaned travelers.';
          desc.textContent = 'Routing DAG routes part into closed-loop corrective cycle. Zero manual spreadsheet surgery required.';
          meter.textContent = 'STAGE COST: ₹420 → ₹648.50 (ABSORBED)';
        } else if (mode === 'scrap') {
          btnScrap?.classList.add('active');
          node3.className = 'dag-node highlight-scrap';
          node3Badge.className = 'badge bg-danger text-white';
          node3Badge.textContent = 'METALLURGY VOID (REJECTED)';
          node4.className = 'dag-node highlight-scrap';
          node4Title.innerHTML = '<i class="fas fa-recycle text-primary me-2" style="color: #ff1791 !important;"></i>4. Alloy 7075-T6 Remnant Bank';
          node4Badge.textContent = 'SCRAP-AS-CURRENCY SKU';
          node4Badge.className = 'badge text-white font-monospace" style="background: #ff1791;';
          node4Desc.textContent = '14.2 kg offcut valued @ ₹130/kg = ₹1,846.00 salvage credit directly debited into live job WIP.';
          desc.textContent = 'Planned scrap is treated as a valued asset. Salvage realization offsets net unit cost for conforming parts.';
          meter.textContent = 'WIP CREDIT: -₹1,846.00 NET REALIZED';
        }
      }
    </script>
`;

// Read current public/tsukiflow.html
let html = fs.readFileSync('public/tsukiflow.html', 'utf8');

// 1. Inject Retina meta and CSS into <head> before </head>
if (!html.includes('Retina-Ready & HiDPI Industrial Display Compliance')) {
  html = html.replace('</head>', retinaMetaAndCss + '\n  </head>');
}

// 2. Add link to #use-cases in navigation menu grid
if (!html.includes('href="#use-cases"')) {
  html = html.replace(
    '<a href="#architecture" class="menu-grid-main-item menu-item">8-Stage Architecture</a>',
    '<a href="#architecture" class="menu-grid-main-item menu-item">8-Stage Architecture</a>\n                  <a href="#use-cases" class="menu-grid-main-item menu-item" style="color: #ff1791 !important;">Three Floor Proofs (Demo)</a>'
  );
}

// 3. Inject the Three Industrial Use-Cases section right after #architecture (after line with </section> for architecture)
if (!html.includes('id="use-cases"')) {
  const archEndMarker = '<!-- Section 4.6: One Ledger, Five Readings (Persona Perspectives) -->';
  if (html.includes(archEndMarker)) {
    html = html.replace(archEndMarker, useCasesSectionHtml + '\n\n      ' + archEndMarker);
  }
}

// 4. Update the compliance strip to mention Retina-Ready HiDPI Ergonomics
if (!html.includes('Retina-Ready HiDPI Ergonomic Standard')) {
  html = html.replace(
    'SOC 2 Type II Window Opened',
    'SOC 2 Type II Window Opened &nbsp;·&nbsp; Retina-Ready HiDPI Ergonomic Standard (ISO 9241-307)'
  );
}

// 5. Inject the Interactive JS Script before </body>
if (!html.includes('Interactive Use-Cases State Machine Script')) {
  html = html.replace('</body>', interactiveJsScript + '\n  </body>');
}

fs.writeFileSync('public/tsukiflow.html', html, 'utf8');
console.log('Successfully updated public/tsukiflow.html with Retina-Ready compliance and 3 interactive use cases! Length:', html.length);
