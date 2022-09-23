import React from 'react'

import styles from './spinner.module.scss'

export const Spinner = () => {
  return (
    <svg
      id="prefix__Layer_1"
      data-name="Layer 1"
      viewBox="0 0 894.46 894.46"
      className={styles.spinner}
    >
      <defs>
        {/* <style>{".prefix__cls-1{stroke:#fff;stroke-miterlimit:10}"}</style> */}
      </defs>
      <path
        // className="prefix__cls-1"
        d="M468.32 8.06l50.82 137.65-122.49-81.24L404.13.55zM331.58 23l90.86 115.21-141.59-39.38-12.64-63.09zM206.16 79.54l122 81.49-146.83 6.27-31.52-56.1zM104.33 172l141.23 39.8-137.72 51.37-47.31-43.62zM36.07 291.46l146.62-5.79-115.12 91.38L9.1 350.19zM8.06 426.14l137.65-50.81-81.24 122.48-63.92-7.48zM23 562.89L138.25 472 98.83 613.61l-63.09 12.64zM79.54 688.31l81.49-122 6.27 146.84-56.1 31.52zM172 790.13l39.8-141.23 51.34 137.72-43.62 47.31zM291.46 858.39l-5.79-146.62 91.38 115.12-26.86 58.47zM426.14 886.4l-50.81-137.65L497.81 830l-7.48 63.92zM562.89 871.42L472 756.21l141.59 39.42 12.64 63.1zM688.31 814.92l-122-81.49 146.84-6.26 31.52 56.1zM790.13 722.43l-141.23-39.8 137.72-51.33 47.31 43.61zM858.39 603l-146.62 5.79 115.12-91.38 58.47 26.86zM886.4 468.32l-137.65 50.82L830 396.65l63.92 7.48zM871.42 331.58l-115.21 90.86 39.42-141.59 63.1-12.64zM814.92 206.16l-81.49 122-6.26-146.85 56.1-31.52zM722.43 104.33l-39.8 141.23-51.33-137.72 43.61-47.31zM603 36.07l5.79 146.62-91.38-115.12L544.27 9.1z"
      />
    </svg>
  )
}