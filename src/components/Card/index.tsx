import React from 'react'
import { View } from '@tarojs/components'
import classnames from 'classnames'
import styles from './index.module.scss'

interface CardProps {
  className?: string
  children: React.ReactNode
}

export default function Card(props: CardProps) {
  const { className, children } = props
  return <View className={classnames(styles.card, className)}>{children}</View>
}

