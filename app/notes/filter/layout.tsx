import { ReactNode } from 'react';
import css from './layout.module.css';

const TAGS = ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

interface FilterLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
}

export default function FilterLayout({ children, sidebar }: FilterLayoutProps) {
  return (
    <div className={css.filterContainer}>
      <aside className={css.sidebarSlot}>{sidebar}</aside>

      <main className={css.contentSlot}>{children}</main>
    </div>
  );
}
