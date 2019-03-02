export default {
  docList: [
    {
      name: '快速上手',
      path: '/docs/start',
      id: '/docs/start'
    }, {
      name: '更新日志',
      path: '/docs/changeLog',
      id: '/docs/changeLog'
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
              path: '/docs/wingBlank',
              id: '/docs/wingBlank'
            }, {
              name: 'WhiteSpace 上下留白',
              path: '/docs/whiteSpace',
              id: '/docs/whiteSpace'
            }
          ]
        }, {
          name: 'Navigation',
          child: [
            {
              name: 'Drawer 抽屉',
              path: '/docs/drawer',
              id: '/docs/drawer'
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
            }
          ]
        }, {
          name: 'Feedback',
          child: [
            {
              name: 'Toast 轻提示',
              path: '/docs/toast',
              id: '/docs/toast'
            }
          ]
        }
      ]
    }
  ]
}
