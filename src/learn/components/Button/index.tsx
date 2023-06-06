import clsx from 'clsx';

import styles from './Button.module.css';

export default function Button({ primary }: any) {
  const classes = clsx(styles.btn, {
    [styles.primary]: primary,
    'd-flex': true
  });

  return <button className={classes}>Click me!</button>;
}
