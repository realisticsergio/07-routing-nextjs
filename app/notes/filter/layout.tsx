import { ReactNode } from 'react';
import Link from 'next/link';
import css from './FilterLayout.module.css';

const TAGS = ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

interface FilterLayoutProps {
  children: ReactNode;
}

export default function FilterLayout({ children }: FilterLayoutProps) {
  return (
    <div className={css.filterContainer}>
      {/* Сайдбар рендериться тут напряму, як просив ментор */}
      <aside className={css.sidebarSlot}>
        <ul className={css.menuList}>
          <li className={css.menuItem}>
            <Link href="/notes/filter/all" className={css.menuLink}>
              All notes
            </Link>
          </li>
          {TAGS.map((tag) => (
            <li key={tag} className={css.menuItem}>
              <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <main className={css.contentSlot}>{children}</main>
    </div>
  );
}
