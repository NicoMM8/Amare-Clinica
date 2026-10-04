"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, ArrowDown } from "lucide-react";

export function OptionWheel({
  items = [],
  selectedIndex = 0,
  onSelectionChange,
  presentation = "arc",
  side = "left",
  className = "",
  style = {}
}) {
  const containerRef = React.useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      if (selectedIndex < items.length - 1 && onSelectionChange) {
        onSelectionChange(selectedIndex + 1);
      }
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      if (selectedIndex > 0 && onSelectionChange) {
        onSelectionChange(selectedIndex - 1);
      }
    }
  };

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleNativeWheel = (e) => {
      // Ignore mostly horizontal scrolls (like trackpad back/forward)
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      // Throttle slightly to prevent flying through options too fast
      if (Math.abs(e.deltaY) > 10) {
        if (e.deltaY > 0 && selectedIndex < items.length - 1) {
          e.preventDefault();
          onSelectionChange?.(selectedIndex + 1);
        } else if (e.deltaY < 0 && selectedIndex > 0) {
          e.preventDefault();
          onSelectionChange?.(selectedIndex - 1);
        }
      }
    };

    el.addEventListener("wheel", handleNativeWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleNativeWheel);
  }, [selectedIndex, items.length, onSelectionChange]);

  const activeItem = items[selectedIndex] || items[0];

  const goUp = () => {
    if (selectedIndex > 0) onSelectionChange?.(selectedIndex - 1);
  };
  const goDown = () => {
    if (selectedIndex < items.length - 1) onSelectionChange?.(selectedIndex + 1);
  };

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      role="listbox"
      aria-activedescendant={activeItem?.id}
      className={`v-wheel v-wheel--${presentation} v-wheel--${side} ${className}`.trim()}
      onKeyDown={handleKeyDown}
      style={{
        display: "flex",
        flexDirection: "column",
        background: "var(--color-canvas, #FBF8F4)",
        borderRadius: "var(--r-2xl, 24px)",
        border: "1px solid var(--border-subtle, rgba(35,18,33,0.12))",
        boxShadow: "0 12px 32px rgba(35, 18, 33, 0.08)",
        outline: "none",
        overflow: "hidden",
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        ...style
      }}
    >
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '24px 32px 0', fontSize: '13px', color: 'var(--color-ink-secondary, #574F52)' }}>
        <span>Selecciona un área</span>
        <span>{String(selectedIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span>
      </div>

      {/* Main Wheel Area */}
      <div style={{ position: 'relative', height: '360px', display: 'flex', alignItems: 'center' }}>
        
        {/* Left SVG Dial */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '140px', overflow: 'hidden' }}>
          <svg viewBox="0 0 100 300" style={{ width: '100%', height: '100%' }}>
            {/* Outer dotted track */}
            <path d="M 100 0 A 150 150 0 0 0 100 300" fill="none" stroke="var(--border-subtle, rgba(35,18,33,0.12))" strokeWidth="1" strokeDasharray="4 4" />
            {/* Inner solid track */}
            <path d="M 80 0 A 120 120 0 0 0 80 300" fill="none" stroke="var(--border-subtle, rgba(35,18,33,0.12))" strokeWidth="1" />
            {/* Yellow indicator block */}
            <path d="M -50 40 A 110 110 0 0 0 -50 260 L 50 260 A 110 110 0 0 1 50 40 Z" fill="#F3ECE2" />
            
            {/* Center tick and dot */}
            <line x1="80" y1="150" x2="95" y2="150" stroke="var(--color-ink-secondary, #574F52)" strokeWidth="1" />
            <circle cx="95" cy="150" r="3" fill="#F5D867" />
            
            {/* Arrow pointing right */}
            <path d="M 105 150 L 115 150 M 110 145 L 115 150 L 110 155" fill="none" stroke="var(--color-ink-primary, #1C1819)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* Other ticks */}
            <line x1="65" y1="100" x2="80" y2="100" stroke="var(--border-subtle, rgba(35,18,33,0.12))" strokeWidth="1" transform="rotate(-20 80 150)" />
            <line x1="65" y1="200" x2="80" y2="200" stroke="var(--border-subtle, rgba(35,18,33,0.12))" strokeWidth="1" transform="rotate(20 80 150)" />
          </svg>
        </div>

        {/* Rolling Options */}
        <div style={{ position: 'relative', left: '160px', flex: 1, height: '100%' }}>
          <AnimatePresence initial={false}>
            {items.map((item, index) => {
              const distance = index - selectedIndex;
              const absDistance = Math.abs(distance);
              
              // Only render items close to the selected index
              if (absDistance > 2) return null;

              // Calculate 3D transforms
              const yOffset = distance * 65; // pixels
              const rotateX = distance * 25; // degrees
              const scale = 1 - (absDistance * 0.1);
              const opacity = 1 - (absDistance * 0.4);
              const isSelected = distance === 0;

              return (
                <motion.div
                  key={item.id}
                  onClick={() => onSelectionChange?.(index)}
                  initial={{ opacity: 0, y: distance > 0 ? 100 : -100 }}
                  animate={{ 
                    opacity: opacity, 
                    y: yOffset, 
                    rotateX: rotateX,
                    scale: scale,
                    zIndex: isSelected ? 10 : 5 - absDistance
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    marginTop: '-28px', // half of height
                    left: 0,
                    width: 'calc(100% - 40px)',
                    cursor: 'pointer',
                    transformOrigin: 'left center',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 24px',
                    borderRadius: 'var(--r-pill, 999px)',
                    background: isSelected ? 'var(--color-plum-100, #F3EAF1)' : 'transparent',
                    color: isSelected ? 'var(--color-plum-900, #1C1819)' : 'var(--color-ink-secondary, #574F52)',
                  }}
                >
                  <span style={{ 
                    fontSize: isSelected ? '28px' : '24px', 
                    fontWeight: isSelected ? 600 : 500,
                    fontFamily: 'var(--font-sans)',
                    letterSpacing: '-0.02em'
                  }}>
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Area */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '24px 32px',
        borderTop: '1px dashed var(--border-subtle, rgba(35,18,33,0.12))',
        background: 'rgba(255, 255, 255, 0.4)'
      }}>
        
        {/* Up Button */}
        <button 
          onClick={goUp}
          disabled={selectedIndex === 0}
          style={{
            width: '48px', height: '48px', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '1px solid var(--border-subtle)',
            background: 'transparent',
            cursor: selectedIndex === 0 ? 'default' : 'pointer',
            opacity: selectedIndex === 0 ? 0.3 : 1,
            transition: 'all 0.2s'
          }}
        >
          <ArrowUp size={20} color="var(--color-ink-primary)" />
        </button>

        {/* Content (Description or RenderDetail) */}
        <div style={{ flex: 1, padding: '0 24px', textAlign: 'center' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeItem.renderDetail ? (
                 activeItem.renderDetail(activeItem)
              ) : (
                <p style={{ fontSize: '15px', color: 'var(--color-ink-primary, #1C1819)' }}>
                  {activeItem.description}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Down Button */}
        <button 
          onClick={goDown}
          disabled={selectedIndex === items.length - 1}
          style={{
            width: '48px', height: '48px', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: 'none',
            background: 'var(--color-clay, #B75940)', // Match the blue in the screenshot but with brand colors
            cursor: selectedIndex === items.length - 1 ? 'default' : 'pointer',
            opacity: selectedIndex === items.length - 1 ? 0.3 : 1,
            transition: 'all 0.2s',
            boxShadow: '0 4px 12px rgba(183, 89, 64, 0.2)'
          }}
        >
          <ArrowDown size={20} color="#FFFFFF" />
        </button>

      </div>
    </div>
  );
}

export default function Demo() {
  return null;
}

