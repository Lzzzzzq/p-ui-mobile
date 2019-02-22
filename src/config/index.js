export default {
  docList: [
    {
      name: '快速上手',
      path: '/docs',
      id: '/docs'
    }, {
      name: 'Components',
      child: [
        {
          name: 'Layout',
          child: [
            {
              name: 'WingBlank 两翼留白',
              path: '/docs/wingBlank',
              id: '/docs/wingBlank'
            }
          ]
        },
        {
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
