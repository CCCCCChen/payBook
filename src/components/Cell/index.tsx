import React from 'react'
import { Text, View } from '@tarojs/components'
import classnames from 'classnames'
import styles from './index.module.scss'

interface CellProps {
  title: string
  desc?: string
  rightText?: string
  onClick?: () => void
}

export default function Cell(props: CellProps) {
  const { title, desc, rightText, onClick } = props
  return (
    <View className={classnames(styles.cell, onClick && styles.tap)} onClick={onClick}>
      <View className={styles.left}>
        <Text className={styles.title}>{title}</Text>
        {!!desc && <Text className={styles.desc}>{desc}</Text>}
      </View>
      {!!rightText && (
        <View className={styles.right}>
          <Text>{rightText}</Text>
        </View>
      )}
    </View>
  )
}

