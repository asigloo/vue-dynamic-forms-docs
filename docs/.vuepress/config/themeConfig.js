module.exports = {
  repo: 'asigloo/vue-dynamic-forms-docs',
  editLinks: true,
  docsDir: 'docs',
  editLinkText: '',
  lastUpdated: false,
  logo: '/vue-dynamic-forms.png',
  nav: [
    {
      text: 'Guide',
      items: [
        { text: 'v3.x', link: '/v3/guide/' },
        { text: 'v2.x', link: '/v2/guide/' },
      ],
    },
    {
      text: 'Migration Guide',
      link: '/v3/guide/migration-guide',
    },
    {
      text: 'Plugin Repo',
      target: '_blank',
      link: 'https://github.com/asigloo/vue-dynamic-forms',
    },
    {
      text: 'Sandbox',
      target: '_blank',
      link: 'https://codesandbox.io/s/vue-dynamic-forms-ftzes',
    },
  ],
  sidebar: {
    /*     '/': [
      {
        title: 'Versions',
        children: [
          ['v2/guide/', 'v2.x'],
          ['v3/guide/', 'v3.x'],
        ],
      },
    ], */
    '/v2/': [
      {
        title: 'Getting Started',
        collapsable: false,
        children: [
          ['guide/install', 'Installation'],
          ['guide/usage', 'Usage'],
        ],
      },
      {
        title: 'API',
        collapsable: false,
        children: [
          ['guide/fields', 'Fields'],
          ['guide/props', 'Props'],
          ['guide/events', 'Events'],
          ['guide/models', 'Models'],
          ['guide/slots', 'Slots'],
        ],
      },
      {
        title: 'Theme & Styling',
        collapsable: true,
        children: [['guide/theming', 'Theming']],
      },
      {
        title: 'Validation',
        collapsable: true,
        children: [['guide/validation', 'Add validation']],
      },
      {
        title: 'Examples',
        collapsable: true,
        children: [
          ['guide/examples/phone-prefix-example', 'Phone Prefix'],
          ['guide/examples/thirdparty', 'Third-Party'],
        ],
      },
      {
        title: 'Advanced',
        collapsable: true,
        children: [['guide/netlify-forms', 'Netlify Forms']],
      },
    ],
    '/v3/': [
      {
        title: 'Getting Started 3.x',
        collapsable: false,
        children: [
          ['guide/install', 'Installation'],
          ['guide/usage', 'Usage'],
          ['guide/migration-guide', 'Migration Guide'],
        ],
      },
      {
        title: 'Theme & Styling',
        collapsable: true,
        children: [['guide/theming', 'Theming']],
      },
    ],
    /* '/guide/v2/': [
      {
        title: 'Getting Started',
        collapsable: false,
        children: [
          ['guide/v2/install', 'Installation'],
          ['guide/v2/usage', 'Usage'],
        ],
      },
      {
        title: 'API',
        collapsable: false,
        children: [
          ['guide/v2/fields', 'Fields'],
          ['guide/v2/props', 'Props'],
          ['guide/v2/events', 'Events'],
          ['guide/v2/models', 'Models'],
          ['guide/v2/slots', 'Slots'],
        ],
      },
      {
        title: 'Theme & Styling',
        collapsable: true,
        children: [['guide/v2/theming', 'Theming']],
      },
      {
        title: 'Validation',
        collapsable: true,
        children: [['guide/v2/validation', 'Add validation']],
      },
      {
        title: 'Examples',
        collapsable: true,
        children: [
          ['guide/v2/examples/phone-prefix-example', 'Phone Prefix'],
          ['guide/v2/examples/thirdparty', 'Third-Party'],
        ],
      },
      {
        title: 'Advanced',
        collapsable: true,
        children: [['guide/v2/netlify-forms', 'Netlify Forms']],
      },
    ], */
  },
};
