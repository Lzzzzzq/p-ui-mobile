export default {
  docList: [
    {
      name: '快速上手',
      path: '/docs/start',
      id: '/docs/start'
    }, {
      name: '定制主题',
      path: '/docs/theme',
      id: '/docs/theme'
    }, {
      name: 'Components',
      child: [
        {
          name: 'Layout',
          child: [
            {
              name: 'Flex flex布局',
              path: '/docs/flex',
              id: '/docs/flex'
            }, {
              name: 'WingBlank 两翼留白',
              path: '/docs/wing-blank',
              id: '/docs/wing-blank'
            }, {
              name: 'WhiteSpace 上下留白',
              path: '/docs/white-space',
              id: '/docs/white-space'
            }
          ]
        }, {
          name: 'General',
          child: [
            {
              name: 'Icon 图标',
              path: '/docs/icon',
              id: '/docs/icon'
            }, {
              name: 'Button 按钮',
              path: '/docs/button',
              id: '/docs/button'
            }, {
              name: 'Badge 徽标',
              path: '/docs/badge',
              id: '/docs/badge'
            }, {
              name: 'Switch 开关',
              path: '/docs/switch',
              id: '/docs/switch'
            }
          ]
        }, {
          name: 'Navigation',
          child: [
            {
              name: 'Drawer 抽屉',
              path: '/docs/drawer',
              id: '/docs/drawer'
            }, {
              name: 'Popover 气泡',
              path: '/docs/popover',
              id: '/docs/popover'
            }
          ]
        }, {
          name: 'Feedback',
          child: [
            {
              name: 'Toast 轻提示',
              path: '/docs/toast',
              id: '/docs/toast'
            }, {
              name: 'Modal 对话框',
              path: '/docs/modal',
              id: '/docs/modal'
            }, {
              name: 'ActionSheet 动作面板',
              path: '/docs/action-sheet',
              id: '/docs/action-sheet'
            }, {
              name: 'PullDown 下拉刷新',
              path: '/docs/pull-down',
              id: '/docs/pull-down'
            }
          ]
        }
      ]
    }
  ]
}
