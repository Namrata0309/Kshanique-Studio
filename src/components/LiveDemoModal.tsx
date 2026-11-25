import {Monitor, Smartphone, X} from 'lucide-react';
import {useEffect, useState} from 'react';
import {DemoType} from '../data/studioData';
import {BirthdayDemo} from './demos/BirthdayDemo';
import {EngagementDemo} from './demos/EngagementDemo';
import {WeddingDemo} from './demos/WeddingDemo';

interface LiveDemoModalProps {
  activeDemo: DemoType | null;
  onSelectDemo: (demo: DemoType) => void;
  onClose: () => void;
  onOrderSimilar: (serviceName: string) => void;
}

const DEMO_TABS: {id: DemoType; label: string; packageName: string}[] = [
  {id: 'birthday', label: 'Birthday Experience', packageName: 'Birthday Website (₹999)'},
  {id: 'wedding', label: 'Wedding Experience', packageName: 'Wedding Website (₹2,499)'},
  {id: 'engagement', label: 'Engagement Experience', packageName: 'Engagement Invitation (₹599)'},
];

export function LiveDemoModal({
  activeDemo,
  onSelectDemo,
  onClose,
  onOrderSimilar,
}: LiveDemoModalProps) {
  const [viewportMode, setViewportMode] = useState<'desktop' | 'mobile'>('desktop');

  useEffect(() => {
    if (!activeDemo) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeDemo, onClose]);

  if (!activeDemo) return null;

  const currentTab = DEMO_TABS.find((t) => t.id === activeDemo) || DEMO_TABS[0];

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-[#292525]/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={`${currentTab.label} Live Preview`}
    >
      {/* Top Studio Preview Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#FFF9F3]/12 bg-[#292525] px-4 py-3 text-[#FFF9F3] sm:px-6">
        <div className="flex items-center gap-2 overflow-x-auto">
          {DEMO_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelectDemo(tab.id)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                activeDemo === tab.id
                  ? 'bg-[#672D3D] text-[#FFF9F3]'
                  : 'text-[#FFF9F3]/70 hover:bg-[#FFF9F3]/10 hover:text-[#FFF9F3]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          {/* Desktop / Mobile Switcher */}
          <div className="hidden items-center rounded-full border border-[#FFF9F3]/15 p-0.5 sm:flex">
            <button
              type="button"
              onClick={() => setViewportMode('desktop')}
              aria-label="Desktop preview"
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs transition-colors ${
                viewportMode === 'desktop'
                  ? 'bg-[#FFF9F3] text-[#292525]'
                  : 'text-[#FFF9F3]/70 hover:text-[#FFF9F3]'
              }`}
            >
              <Monitor className="h-3.5 w-3.5" />
              <span>Desktop</span>
            </button>
            <button
              type="button"
              onClick={() => setViewportMode('mobile')}
              aria-label="Mobile preview"
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs transition-colors ${
                viewportMode === 'mobile'
                  ? 'bg-[#FFF9F3] text-[#292525]'
                  : 'text-[#FFF9F3]/70 hover:text-[#FFF9F3]'
              }`}
            >
              <Smartphone className="h-3.5 w-3.5" />
              <span>Mobile</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOrderSimilar(currentTab.packageName);
            }}
            className="rounded-full bg-[#C6A36A] px-4 py-1.5 text-xs font-semibold text-[#292525] whitespace-nowrap transition-colors hover:bg-[#d8b780]"
          >
            Create Similar Design
          </button>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close live demo"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#FFF9F3]/20 text-[#FFF9F3] transition-colors hover:bg-[#FFF9F3]/10"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Scrollable Preview Viewport */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-6 lg:p-8">
        <div
          className={`mx-auto overflow-hidden rounded-2xl border border-[#FFF9F3]/15 bg-[#FFF9F3] shadow-2xl transition-all duration-300 ${
            viewportMode === 'mobile' ? 'max-w-[395px] rounded-[34px] border-[6px] border-[#1a1717]' : 'max-w-5xl'
          }`}
        >
          {activeDemo === 'birthday' && <BirthdayDemo />}
          {activeDemo === 'wedding' && <WeddingDemo />}
          {activeDemo === 'engagement' && <EngagementDemo />}
        </div>
      </div>
    </div>
  );
}
