'use client';
import React from 'react';
import { useTranslation } from '@/provider/LanguageProvider';
import { LanguageType } from '@/data/translations';

const LanguageSwitcher = ({ dark = false }: { dark?: boolean }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { language, setLanguage } = useTranslation();
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const languages: { code: LanguageType; label: string; flag: string }[] = [
    { code: 'EN', label: 'EN', flag: '' },
    { code: 'ES', label: 'ES', flag: '' },
    { code: 'TR', label: 'TR', flag: '' }
  ];

  React.useEffect(() => {
    // Close dropdown on click outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLangChange = (code: LanguageType) => {
    setLanguage(code);
    setIsOpen(false);
  };

  const textColor = dark ? '#000' : '#fff';
  const dropdownBg = dark ? '#fff' : '#1a1a1a';
  const dropdownText = dark ? '#000' : '#fff';
  const hoverBg = dark ? '#f8f8f8' : '#262626';
  const borderColor = dark ? '#eee' : '#333';

  return (
    <div className="tp-header-lang-switcher p-relative" ref={dropdownRef} style={{ marginLeft: '10px' }}>
      <button 
        className="lang-toggle-btn d-flex align-items-center" 
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          background: 'transparent', 
          border: 'none', 
          color: textColor, 
          fontSize: '13px', 
          fontWeight: '600',
          cursor: 'pointer',
          padding: '5px 8px',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          transition: 'opacity 0.3s'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
      >
        <i className="fa-solid fa-globe" style={{ marginRight: '6px', fontSize: '12px' }}></i>
        {language}
        <i className={`fa-solid fa-chevron-down`} style={{ marginLeft: '5px', fontSize: '9px', transition: 'transform 0.3s', transform: isOpen ? 'rotate(180deg)' : 'none' }}></i>
      </button>

      {isOpen && (
        <div 
          className="lang-dropdown shadow-lg" 
          style={{ 
            position: 'absolute', 
            top: '100%', 
            right: '0', 
            backgroundColor: dropdownBg, 
            border: `1px solid ${borderColor}`,
            borderRadius: '6px',
            marginTop: '15px',
            minWidth: '130px',
            zIndex: 1000,
            overflow: 'hidden',
          }}
        >
          <ul style={{ listStyle: 'none', padding: '4px 0', margin: 0 }}>
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => handleLangChange(lang.code)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '10px 15px',
                    background: 'transparent',
                    border: 'none',
                    color: language === lang.code ? '#ff5a5f' : dropdownText,
                    fontSize: '13px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBg)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <span style={{ marginRight: '10px', fontSize: '16px' }}>{lang.flag}</span>
                  {lang.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
