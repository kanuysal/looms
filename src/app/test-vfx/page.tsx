import type { Metadata } from 'next';
import VFXHeroSection from '@/components/elements/VFXHeroSection';

export const metadata: Metadata = {
  title: 'VFX Test — INTERLOOMS',
};

export default function TestVFXPage() {
  return (
    <div style={{ margin: 0, padding: 0, backgroundColor: '#1a1a1a', minHeight: '100vh' }}>
      <VFXHeroSection />
    </div>
  );
}
