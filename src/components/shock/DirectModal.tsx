'use client';

// ==============================================================================
// HYBRID STUDIOZ — DIRECT MODAL ("DARK & DIRECT" PROJECT INITIATOR)
// Global multi-step discovery modal triggered from Header, CTAs, and Pricing
// ==============================================================================

import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '@/content/site';

interface DirectModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function DirectModal({
  isOpen,
  onClose,
  preselectedService,
}: DirectModalProps) {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>(
    preselectedService ? [preselectedService] : ['Product & SaaS Design']
  );
  const [budget, setBudget] = useState('$25k - $50k');
  const [timeline, setTimeline] = useState('Within 1 Month');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    description: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [prevService, setPrevService] = useState(preselectedService);
  if (prevService !== preselectedService) {
    setPrevService(preselectedService);
    if (preselectedService) {
      setSelectedServices([preselectedService]);
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleService = (svc: string) => {
    setSelectedServices((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setStep(1);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
      {/* Dark backdrop blur */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#070913]/85 backdrop-blur-2xl transition-opacity animate-in fade-in duration-300"
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl bg-[#0b1020] border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.8)] animate-in zoom-in-95 duration-300">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 sm:px-8 py-5 bg-[#070913]">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#ff5e1a] animate-ping" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/70">
              Direct Discovery Brief // Step {step} of 2
            </span>
          </div>

          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Form Content */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="py-12 text-center animate-in zoom-in-95 duration-300">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#ff5e1a]/20 border border-[#ff5e1a]">
                <svg className="h-8 w-8 text-[#ff5e1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-3xl font-black uppercase text-white mb-2">
                Transmission Received
              </h3>
              <p className="font-sans text-sm text-white/60 max-w-md mx-auto">
                Our Principal Technologist will review your architecture specifications and reply within 4 business hours.
              </p>
            </div>
          ) : step === 1 ? (
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-3">
                Select Your Required Capabilities
              </h2>
              <p className="text-xs sm:text-sm text-white/60 font-sans mb-6">
                Tell us which layers of your product or brand need our specialized hybrid engineering.
              </p>

              {/* Service Selection Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {SITE_CONFIG.services.map((svc) => {
                  const isSelected = selectedServices.includes(svc.title);
                  return (
                    <button
                      key={svc.id}
                      type="button"
                      onClick={() => toggleService(svc.title)}
                      className={`flex items-center gap-3 p-4 rounded-xl text-left border transition-all duration-200 ${
                        isSelected
                          ? 'border-[#ff5e1a] bg-[#ff5e1a]/15 text-white shadow-lg shadow-[#ff5e1a]/20'
                          : 'border-white/10 bg-white/5 text-white/70 hover:border-white/20'
                      }`}
                    >
                      <div
                        className={`h-4 w-4 rounded-md border flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'border-[#ff5e1a] bg-[#ff5e1a] text-white'
                            : 'border-white/30'
                        }`}
                      >
                        {isSelected && (
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <span className="block font-display text-xs font-bold uppercase tracking-wide">
                          {svc.title}
                        </span>
                        <span className="block font-mono text-[10px] text-white/40">
                          {svc.category}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Budget Range Selector */}
              <div className="mb-8">
                <label className="block font-mono text-[11px] font-bold uppercase tracking-widest text-white/70 mb-3">
                  Estimated Capital Investment
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['$10k - $25k', '$25k - $50k', '$50k - $100k', '$100k+'].map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setBudget(tier)}
                      className={`py-3 px-2 rounded-lg text-center font-mono text-xs font-bold transition-all ${
                        budget === tier
                          ? 'bg-white text-[#070913] shadow-md'
                          : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step Navigation */}
              <div className="flex items-center justify-end gap-4 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#ff5e1a] to-[#e9449a] font-display text-xs font-black uppercase tracking-wider text-white shadow-xl shadow-[#ff5e1a]/25 hover:opacity-90 flex items-center gap-2"
                >
                  <span>Continue to Details</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-2">
                Project & Contact Blueprint
              </h2>
              <p className="text-xs sm:text-sm text-white/60 font-sans mb-6">
                Tell us about your venture, timeline, and primary architectural goals.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block font-mono text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Elena Vance"
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#ff5e1a] focus:outline-none focus:ring-1 focus:ring-[#ff5e1a]"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1.5">
                    Corporate Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="founder@enterprise.com"
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#ff5e1a] focus:outline-none focus:ring-1 focus:ring-[#ff5e1a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block font-mono text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="EchoWear Inc."
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#ff5e1a] focus:outline-none focus:ring-1 focus:ring-[#ff5e1a]"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1.5">
                    Target Launch Window
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full rounded-xl bg-[#070913] border border-white/10 px-4 py-3 text-sm text-white focus:border-[#ff5e1a] focus:outline-none"
                  >
                    <option>Within 2-4 Weeks (Sprint)</option>
                    <option>Within 1-2 Months</option>
                    <option>Q1 2027 Strategic Launch</option>
                    <option>Flexible / Exploratory</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-mono text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1.5">
                  Project Description & Requirements
                </label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Outline the core problem, desired WebGL/AI interactions, or brand ambitions..."
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#ff5e1a] focus:outline-none focus:ring-1 focus:ring-[#ff5e1a]"
                />
              </div>

              {/* Step Navigation */}
              <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="font-mono text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#ff5e1a] via-[#e9449a] to-[#6f4bff] font-display text-xs font-black uppercase tracking-wider text-white shadow-xl shadow-[#ff5e1a]/25 hover:opacity-90 flex items-center gap-2"
                >
                  <span>Submit Discovery Brief</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
