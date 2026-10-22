import { NavLink } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { NAV_ITEMS } from '../utils/nav'

function BottomNavLink({ to, label, Icon }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium transition-colors duration-150 ${
          isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-ink-soft)]'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <Icon size={20} strokeWidth={isActive ? 2.25 : 1.75} />
          <span className="truncate max-w-[4.5rem]">{label}</span>
        </>
      )}
    </NavLink>
  )
}

/** Thanh điều hướng dưới cùng trên mobile, 4 tab truy cập nhanh. */
export default function BottomNav() {
  const { t } = useLang()
  return (
    <nav
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[var(--color-bg)] border-t border-[var(--color-border)] pb-[env(safe-area-inset-bottom)]"
      aria-label="Điều hướng chính"
    >
      <div className="grid grid-cols-4">
        {NAV_ITEMS.map(({ to, key, icon }) => (
          <BottomNavLink key={to} to={to} label={t(`nav.short.${key}`)} Icon={icon} />
        ))}
      </div>
    </nav>
  )
}
