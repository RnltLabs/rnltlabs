export function NeuralNetworkBackground() {
  return (
    <div className="absolute inset-0 -top-[10%] -left-[10%] -right-[10%] -bottom-[10%] opacity-20 animate-networkFloat pointer-events-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 1000"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1" />
          </filter>
        </defs>
        <g>
          {/* Irregular distributed nodes */}
          <circle cx="87" cy="134" r="3" fill="#cbd5e0" opacity="0.8" />
          <circle cx="234" cy="78" r="4" fill="#3b82f6" opacity="0.9" />
          <circle cx="156" cy="267" r="3" fill="#cbd5e0" opacity="0.7" />
          <circle cx="342" cy="189" r="5" fill="#3b82f6" opacity="1" filter="url(#glow)" />
          <circle cx="423" cy="298" r="3" fill="#cbd5e0" opacity="0.8" />
          <circle cx="278" cy="376" r="4" fill="#22c55e" opacity="0.9" />
          <circle cx="512" cy="143" r="3" fill="#cbd5e0" opacity="0.7" />
          <circle cx="389" cy="456" r="4" fill="#3b82f6" opacity="0.9" />
          <circle cx="634" cy="234" r="3" fill="#cbd5e0" opacity="0.8" />
          <circle cx="567" cy="389" r="5" fill="#22c55e" opacity="1" filter="url(#glow)" />
          <circle cx="723" cy="156" r="3" fill="#cbd5e0" opacity="0.7" />
          <circle cx="456" cy="567" r="4" fill="#3b82f6" opacity="0.9" />
          <circle cx="812" cy="278" r="3" fill="#cbd5e0" opacity="0.8" />
          <circle cx="678" cy="498" r="4" fill="#3b82f6" opacity="0.9" />
          <circle cx="934" cy="367" r="5" fill="#3b82f6" opacity="1" filter="url(#glow)" />
          <circle cx="789" cy="423" r="3" fill="#cbd5e0" opacity="0.7" />
          <circle cx="1045" cy="234" r="4" fill="#22c55e" opacity="0.9" />
          <circle cx="867" cy="567" r="3" fill="#cbd5e0" opacity="0.8" />
          <circle cx="1123" cy="445" r="4" fill="#3b82f6" opacity="0.9" />
          <circle cx="978" cy="678" r="3" fill="#cbd5e0" opacity="0.7" />
          <circle cx="1234" cy="345" r="5" fill="#22c55e" opacity="1" filter="url(#glow)" />
          <circle cx="1089" cy="589" r="3" fill="#cbd5e0" opacity="0.8" />
          <circle cx="1345" cy="234" r="4" fill="#3b82f6" opacity="0.9" />
          <circle cx="1178" cy="723" r="3" fill="#cbd5e0" opacity="0.7" />
          <circle cx="1423" cy="456" r="4" fill="#cbd5e0" opacity="0.8" />
          <circle cx="1289" cy="812" r="3" fill="#22c55e" opacity="0.8" />
          <circle cx="1512" cy="567" r="4" fill="#3b82f6" opacity="0.9" />
          <circle cx="145" cy="423" r="3" fill="#cbd5e0" opacity="0.7" />
          <circle cx="267" cy="534" r="4" fill="#3b82f6" opacity="0.9" />
          <circle cx="89" cy="678" r="3" fill="#cbd5e0" opacity="0.8" />
          <circle cx="378" cy="623" r="5" fill="#3b82f6" opacity="1" filter="url(#glow)" />
          <circle cx="234" cy="789" r="3" fill="#cbd5e0" opacity="0.7" />
          <circle cx="489" cy="712" r="4" fill="#22c55e" opacity="0.9" />
          <circle cx="345" cy="867" r="3" fill="#cbd5e0" opacity="0.8" />
          <circle cx="598" cy="823" r="4" fill="#3b82f6" opacity="0.9" />
          <circle cx="456" cy="923" r="3" fill="#cbd5e0" opacity="0.7" />
          <circle cx="712" cy="634" r="5" fill="#22c55e" opacity="1" filter="url(#glow)" />
          <circle cx="567" cy="745" r="3" fill="#cbd5e0" opacity="0.8" />
          <circle cx="823" cy="712" r="4" fill="#3b82f6" opacity="0.9" />
          <circle cx="678" cy="856" r="3" fill="#cbd5e0" opacity="0.7" />
          <circle cx="934" cy="789" r="4" fill="#cbd5e0" opacity="0.8" />
          <circle cx="789" cy="912" r="3" fill="#22c55e" opacity="0.8" />
          <circle cx="1045" cy="823" r="4" fill="#3b82f6" opacity="0.9" />
          <circle cx="1156" cy="167" r="3" fill="#cbd5e0" opacity="0.7" />
          <circle cx="1267" cy="578" r="4" fill="#3b82f6" opacity="0.9" />
          <circle cx="1378" cy="689" r="3" fill="#cbd5e0" opacity="0.8" />
          <circle cx="1489" cy="790" r="5" fill="#3b82f6" opacity="1" filter="url(#glow)" />
          <circle cx="1323" cy="123" r="3" fill="#cbd5e0" opacity="0.7" />
          <circle cx="1456" cy="345" r="4" fill="#22c55e" opacity="0.9" />
          <circle cx="1567" cy="234" r="3" fill="#cbd5e0" opacity="0.8" />
          <circle cx="198" cy="198" r="4" fill="#3b82f6" opacity="0.9" />
          <circle cx="76" cy="345" r="3" fill="#cbd5e0" opacity="0.7" />
          <circle cx="298" cy="298" r="4" fill="#22c55e" opacity="0.9" />
          <circle cx="445" cy="89" r="3" fill="#cbd5e0" opacity="0.8" />
          <circle cx="589" cy="178" r="4" fill="#3b82f6" opacity="0.9" />
          <circle cx="701" cy="345" r="5" fill="#3b82f6" opacity="1" filter="url(#glow)" />
          <circle cx="845" cy="89" r="3" fill="#cbd5e0" opacity="0.7" />
          <circle cx="967" cy="234" r="4" fill="#22c55e" opacity="0.9" />
          <circle cx="1078" cy="345" r="3" fill="#cbd5e0" opacity="0.8" />
          <circle cx="1189" cy="456" r="4" fill="#3b82f6" opacity="0.9" />
          <circle cx="1290" cy="567" r="3" fill="#cbd5e0" opacity="0.7" />
          <circle cx="1401" cy="678" r="4" fill="#22c55e" opacity="0.9" />
          <circle cx="123" cy="567" r="3" fill="#cbd5e0" opacity="0.8" />
          <circle cx="345" cy="712" r="4" fill="#3b82f6" opacity="0.9" />
          <circle cx="567" cy="567" r="5" fill="#22c55e" opacity="1" filter="url(#glow)" />
          <circle cx="789" cy="789" r="3" fill="#cbd5e0" opacity="0.7" />
          <circle cx="901" cy="890" r="4" fill="#3b82f6" opacity="0.9" />
          <circle cx="1123" cy="901" r="3" fill="#cbd5e0" opacity="0.8" />
          <circle cx="1345" cy="890" r="4" fill="#22c55e" opacity="0.9" />
          <circle cx="1456" cy="123" r="3" fill="#cbd5e0" opacity="0.7" />
          <circle cx="167" cy="789" r="4" fill="#3b82f6" opacity="0.9" />
          <circle cx="489" cy="489" r="3" fill="#cbd5e0" opacity="0.8" />
          <circle cx="823" cy="456" r="5" fill="#3b82f6" opacity="1" filter="url(#glow)" />
          <circle cx="1234" cy="234" r="3" fill="#cbd5e0" opacity="0.7" />
          <circle cx="956" cy="123" r="4" fill="#22c55e" opacity="0.9" />
          <circle cx="623" cy="789" r="3" fill="#cbd5e0" opacity="0.8" />
          <circle cx="412" cy="167" r="4" fill="#3b82f6" opacity="0.9" />
          <circle cx="778" cy="234" r="3" fill="#cbd5e0" opacity="0.7" />
          <circle cx="1089" cy="89" r="4" fill="#22c55e" opacity="0.9" />
          <circle cx="234" cy="456" r="3" fill="#cbd5e0" opacity="0.8" />
          <circle cx="656" cy="678" r="4" fill="#3b82f6" opacity="0.9" />
          <circle cx="989" cy="567" r="5" fill="#3b82f6" opacity="1" filter="url(#glow)" />
          <circle cx="1412" cy="789" r="3" fill="#cbd5e0" opacity="0.7" />
          <circle cx="345" cy="345" r="4" fill="#22c55e" opacity="0.9" />
          <circle cx="778" cy="567" r="3" fill="#cbd5e0" opacity="0.8" />
          <circle cx="1123" cy="678" r="4" fill="#3b82f6" opacity="0.9" />
          <circle cx="456" cy="234" r="3" fill="#cbd5e0" opacity="0.7" />
          <circle cx="889" cy="345" r="4" fill="#22c55e" opacity="0.9" />
          <circle cx="1345" cy="456" r="3" fill="#cbd5e0" opacity="0.8" />
          <circle cx="234" cy="678" r="4" fill="#3b82f6" opacity="0.9" />
          <circle cx="678" cy="89" r="3" fill="#cbd5e0" opacity="0.7" />
          <circle cx="1089" cy="234" r="5" fill="#22c55e" opacity="1" filter="url(#glow)" />
          <circle cx="567" cy="456" r="3" fill="#cbd5e0" opacity="0.8" />
          <circle cx="989" cy="789" r="4" fill="#3b82f6" opacity="0.9" />
          <circle cx="1456" cy="567" r="3" fill="#cbd5e0" opacity="0.7" />
          <circle cx="123" cy="234" r="4" fill="#22c55e" opacity="0.9" />
          <circle cx="678" cy="345" r="3" fill="#cbd5e0" opacity="0.8" />
          <circle cx="1234" cy="123" r="4" fill="#3b82f6" opacity="0.9" />
          <circle cx="456" cy="789" r="3" fill="#cbd5e0" opacity="0.7" />
          <circle cx="889" cy="678" r="4" fill="#22c55e" opacity="0.9" />

          {/* Complex irregular connections */}
          <line x1="87" y1="134" x2="234" y2="78" stroke="#cbd5e0" strokeWidth="1" opacity="0.4" />
          <line x1="234" y1="78" x2="342" y2="189" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" />
          <line x1="156" y1="267" x2="278" y2="376" stroke="#cbd5e0" strokeWidth="1" opacity="0.4" />
          <line x1="342" y1="189" x2="423" y2="298" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" />
          <line x1="278" y1="376" x2="389" y2="456" stroke="#22c55e" strokeWidth="1.5" opacity="0.5" />
          <line x1="512" y1="143" x2="634" y2="234" stroke="#cbd5e0" strokeWidth="1" opacity="0.4" />
          <line x1="389" y1="456" x2="567" y2="389" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" />
          <line x1="567" y1="389" x2="678" y2="498" stroke="#22c55e" strokeWidth="1.5" opacity="0.5" />
          <line x1="723" y1="156" x2="812" y2="278" stroke="#cbd5e0" strokeWidth="1" opacity="0.4" />
          <line x1="678" y1="498" x2="789" y2="423" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" />
          <line x1="812" y1="278" x2="934" y2="367" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" />
          <line x1="934" y1="367" x2="1045" y2="234" stroke="#22c55e" strokeWidth="1.5" opacity="0.5" />
          <line x1="867" y1="567" x2="978" y2="678" stroke="#cbd5e0" strokeWidth="1" opacity="0.4" />
          <line x1="1045" y1="234" x2="1123" y2="445" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" />
          <line x1="1123" y1="445" x2="1234" y2="345" stroke="#22c55e" strokeWidth="1.5" opacity="0.5" />
          <line x1="1089" y1="589" x2="1178" y2="723" stroke="#cbd5e0" strokeWidth="1" opacity="0.4" />
          <line x1="1234" y1="345" x2="1345" y2="234" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" />
          <line x1="1345" y1="234" x2="1423" y2="456" stroke="#cbd5e0" strokeWidth="1" opacity="0.4" />
          <line x1="1289" y1="812" x2="1512" y2="567" stroke="#22c55e" strokeWidth="1.5" opacity="0.5" />
          <line x1="145" y1="423" x2="267" y2="534" stroke="#cbd5e0" strokeWidth="1" opacity="0.4" />
          <line x1="267" y1="534" x2="378" y2="623" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" />
          <line x1="378" y1="623" x2="489" y2="712" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" />
          <line x1="489" y1="712" x2="598" y2="823" stroke="#22c55e" strokeWidth="1.5" opacity="0.5" />
          <line x1="598" y1="823" x2="712" y2="634" stroke="#22c55e" strokeWidth="1.5" opacity="0.5" />
          <line x1="712" y1="634" x2="823" y2="712" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" />
          <line x1="823" y1="712" x2="934" y2="789" stroke="#cbd5e0" strokeWidth="1" opacity="0.4" />
          <line x1="934" y1="789" x2="1045" y2="823" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" />
          <line x1="342" y1="189" x2="567" y2="389" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
          <line x1="567" y1="389" x2="934" y2="367" stroke="#22c55e" strokeWidth="1" opacity="0.3" />
          <line x1="278" y1="376" x2="678" y2="498" stroke="#cbd5e0" strokeWidth="1" opacity="0.3" />
          <line x1="456" y1="567" x2="867" y2="567" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
          <line x1="378" y1="623" x2="712" y2="634" stroke="#22c55e" strokeWidth="1" opacity="0.3" />
          <line x1="234" y1="78" x2="512" y2="143" stroke="#cbd5e0" strokeWidth="1" opacity="0.3" />
          <line x1="634" y1="234" x2="1045" y2="234" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
          <line x1="789" y1="423" x2="1123" y2="445" stroke="#22c55e" strokeWidth="1" opacity="0.3" />
          <line x1="198" y1="198" x2="298" y2="298" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
          <line x1="445" y1="89" x2="589" y2="178" stroke="#cbd5e0" strokeWidth="1" opacity="0.3" />
          <line x1="589" y1="178" x2="701" y2="345" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
          <line x1="701" y1="345" x2="823" y2="456" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
          <line x1="823" y1="456" x2="989" y2="567" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
          <line x1="989" y1="567" x2="1123" y2="678" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
          <line x1="567" y1="567" x2="789" y2="789" stroke="#22c55e" strokeWidth="1" opacity="0.3" />
          <line x1="345" y1="345" x2="778" y2="567" stroke="#22c55e" strokeWidth="1" opacity="0.3" />
          <line x1="234" y1="456" x2="656" y2="678" stroke="#cbd5e0" strokeWidth="1" opacity="0.3" />
          <line x1="412" y1="167" x2="778" y2="234" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
          <line x1="778" y1="234" x2="1089" y2="89" stroke="#22c55e" strokeWidth="1" opacity="0.3" />
          <line x1="87" y1="134" x2="342" y2="189" stroke="#3b82f6" strokeWidth="0.8" opacity="0.25" />
          <line x1="156" y1="267" x2="567" y2="389" stroke="#cbd5e0" strokeWidth="0.8" opacity="0.25" />
          <line x1="423" y1="298" x2="934" y2="367" stroke="#22c55e" strokeWidth="0.8" opacity="0.25" />
          <line x1="512" y1="143" x2="1045" y2="234" stroke="#3b82f6" strokeWidth="0.8" opacity="0.25" />
          <line x1="389" y1="456" x2="978" y2="678" stroke="#cbd5e0" strokeWidth="0.8" opacity="0.25" />
          <line x1="723" y1="156" x2="1234" y2="345" stroke="#22c55e" strokeWidth="0.8" opacity="0.25" />
          <line x1="145" y1="423" x2="712" y2="634" stroke="#3b82f6" strokeWidth="0.8" opacity="0.25" />
          <line x1="267" y1="534" x2="823" y2="712" stroke="#cbd5e0" strokeWidth="0.8" opacity="0.25" />
          <line x1="89" y1="678" x2="1045" y2="823" stroke="#22c55e" strokeWidth="0.8" opacity="0.25" />
          <line x1="198" y1="198" x2="989" y2="567" stroke="#3b82f6" strokeWidth="0.8" opacity="0.25" />
          <line x1="445" y1="89" x2="1089" y2="234" stroke="#cbd5e0" strokeWidth="0.8" opacity="0.25" />
          <line x1="345" y1="712" x2="1345" y2="890" stroke="#22c55e" strokeWidth="0.8" opacity="0.25" />
        </g>
      </svg>
    </div>
  )
}
