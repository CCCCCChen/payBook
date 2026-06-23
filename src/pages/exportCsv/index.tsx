import React, { useState } from 'react'
import { Picker, Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import dayjs from 'dayjs'
import Card from '@/components/Card'
import PrimaryButton from '@/components/PrimaryButton'
import { downloadCsv } from '@/services/export'
import styles from './index.module.scss'

function ExportCsvPage() {
  const [start, setStart] = useState(dayjs().startOf('month').format('YYYY-MM-DD'))
  const [end, setEnd] = useState(dayjs().format('YYYY-MM-DD'))
  const [loading, setLoading] = useState(false)

  const runExport = async () => {
    if (loading) return
    if (dayjs(start).isAfter(dayjs(end))) {
      Taro.showToast({ title: '开始日期不能晚于结束日期', icon: 'none' })
      return
    }
    setLoading(true)
    try {
      const tempFilePath = await downloadCsv(start, end)
      const saved = await Taro.saveFile({ tempFilePath })
      const filePath = saved.savedFilePath || tempFilePath
      try {
        await Taro.openDocument({ filePath, fileType: 'csv' })
      } catch (e) {
        console.error('[Export] openDocument failed', e)
        Taro.showToast({ title: '已导出（文件已保存）', icon: 'success' })
      }
    } catch (e) {
      console.error('[Export] export failed', e)
      Taro.showToast({ title: '导出失败', icon: 'none' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <View className={styles.container}>
      <Text className={styles.sectionTitle}>日期范围</Text>
      <Card>
        <View className={styles.section}>
          <Picker mode="date" value={start} onChange={(e) => setStart(e.detail.value)}>
            <View className={styles.picker}>
              <Text className={styles.pickerText}>开始：{start}</Text>
            </View>
          </Picker>
        </View>
        <View className={styles.section}>
          <Picker mode="date" value={end} onChange={(e) => setEnd(e.detail.value)}>
            <View className={styles.picker}>
              <Text className={styles.pickerText}>结束：{end}</Text>
            </View>
          </Picker>
        </View>
        <Text className={styles.tip}>导出的 CSV 为 UTF-8（带 BOM），Excel 打开不会乱码。</Text>
      </Card>

      <View className={styles.section}>
        <PrimaryButton text={loading ? '导出中…' : '开始导出'} disabled={loading} onClick={runExport} />
      </View>
    </View>
  )
}

export default ExportCsvPage

