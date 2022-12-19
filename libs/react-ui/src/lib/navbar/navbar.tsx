// import styles from './navbar.module.css';

/* eslint-disable-next-line */
export interface NavbarProps {
  children: React.ReactNode;
  classes?: string;
}

export function Navbar(props: NavbarProps) {
  const { classes, children } = props;
  return <nav className={classes}>{children}</nav>;
}

export default Navbar;
