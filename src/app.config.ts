export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/statistics/index',
    'pages/budgets/index',
    'pages/mine/index',
    'pages/recurringTemplates/index',
    'pages/recurringEdit/index',
    'pages/pendingTransactions/index',
    'pages/exportCsv/index',
    'pages/addTransaction/index',
    'pages/transactions/index',
    'pages/transfer/index',
    'pages/budgetEdit/index'
  ],
  lazyCodeLoading: 'requiredComponents',
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTitleText: '轻记',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#4E5969',
    selectedColor: '#4A90D9',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/statistics/index',
        text: '统计'
      },
      {
        pagePath: 'pages/budgets/index',
        text: '预算'
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的'
      }
    ]
  }
})
