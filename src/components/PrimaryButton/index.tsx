import React from 'react'
import { Button } from '@tarojs/components'
import classnames from 'classnames'
import styles from './index.module.scss'

interface PrimaryButtonProps {
  text: string
  disabled?: boolean
  size?: 'md' | 'sm'
  onClick?: () => void
}

export default function PrimaryButton(props: PrimaryButtonProps) {
  const { text, disabled, onClick, size = 'md' } = props
  return (
    <Button
      className={classnames(styles.btn, disabled && styles.btnDisabled, size === 'sm' && styles.btnSmall)}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </Button>
  )
}

