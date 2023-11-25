import React from 'react'

import styles from './section-header.module.css'

export default function SectionHeader({text}) {
  return (
    <h2 className={styles.title}><span>{text}</span></h2>
  )
}
