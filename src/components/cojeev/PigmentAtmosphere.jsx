import React from 'react';

export function PigmentAtmosphere() {
  return (
    <div className="v-pigment-stage" aria-hidden="true">
      {/* Organic drifting pigment clouds (Cojeev atmosphere) */}
      <div 
        className="v-pigment-blob"
        style={{
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, #B75940 0%, rgba(183,89,64,0) 70%)',
          top: '-120px',
          right: '-80px',
          animationDuration: '22s'
        }}
      />
      <div 
        className="v-pigment-blob"
        style={{
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, #462542 0%, rgba(70,37,66,0) 70%)',
          bottom: '10%',
          left: '-150px',
          animationDuration: '28s',
          animationDelay: '-6s'
        }}
      />
      <div 
        className="v-pigment-blob"
        style={{
          width: '420px',
          height: '420px',
          background: 'radial-gradient(circle, #D98838 0%, rgba(217,136,56,0) 70%)',
          top: '40%',
          right: '15%',
          animationDuration: '20s',
          animationDelay: '-10s'
        }}
      />
    </div>
  );
}
