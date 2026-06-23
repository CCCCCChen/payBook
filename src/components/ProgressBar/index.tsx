import React from 'react'
import { Text, View } from '@tarojs/components'
import classnames from 'classnames'
import styles from './index.module.scss'

interface ProgressBarProps {
  name: string
  sub?: string
  percent: number
  rightText?: string
  isOver?: boolean
}

export default function ProgressBar(props: ProgressBarProps) {
  const { name, sub, percent, rightText, isOver } = props
  const p = Math.max(0, Math.min(1, Number.isFinite(percent) ? percent : 0))
  return (
    <View className={styles.wrap}>
      <View className={styles.track}>
        <View className={classnames(styles.fill, isOver && styles.fillOver)} style={{ width: `${p * 100}%` }} />
      </View>
      <View className={styles.meta}>
        <View className={styles.metaLeft}>
          <Text className={styles.name}>{name}</Text>
          {!!sub && <Text className={styles.sub}>{sub}</Text>}
        </View>
        {!!rightText && (
          <View className={styles.right}>
            <Text>{rightText}</Text>
          </View>
        )}
      </View>
    </View>
  )
}

