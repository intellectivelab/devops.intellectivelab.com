const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  title: 'Intellective Documentation',
  tagline: '', //found inside the hero banner 
  url: 'https://github.com/intellectivelab',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'intellectivelab', // Usually your GitHub org/user name.
  projectName: 'docs.intellective.com', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Unity Docs Logo',
        src: 'img/docs-logo-vector-small.svg',
        srcDark: 'img/docs-logo-vector-small-dark.svg',
      },
      items: [
        {
          position: 'left',
          label: 'What is Unity',
          items: [
            {
              label: 'Overview',
              to: '/docs/what-is-unity/unity-overview',
            },
            {
              label: 'Features',
              to: '/docs/what-is-unity/unity-features',
            },
            {
              label: 'Architecture Principles',
              to: '/docs/what-is-unity/unity-architecture-principles',
            },
            {
              label: 'Component Diagram',
              to: '/docs/what-is-unity/unity-component-diagram',
            },
          ],
        },
        {
          position: 'left',
          label: 'Products',
          items: [
            {
              label: 'Unity 8',
              to: 'docs/products/unity-8/u8-release-notes',
            },
            {
              label: 'Unity for Salesforce',
              to: 'docs/products/unity-salesforce/overview',
            },
            {
              label: 'Unity for nCino',
              to: 'docs/products/unity-for-ncino/overview',
            },
            {
              label: 'Unity for Dynamics',
              to: 'docs/products/unity-for-dynamics/unity-for-dynamics',
            },
            {
              label: 'Unity for ICN',
              to: 'docs/products/unity-for-icn/unity-for-icn',
            },
            {
              label: 'Interchange',
              to: 'docs/products/interchange/deployment',
            },
            {
              label: 'Enterprise Search',
              to: 'docs/products/enterprise-search/overview',
            }
          ],
        },
        {
          position: 'left',
          label: 'Unity Framework',
          items: [
            {
              label: 'Unity React',
              to: 'docs/frameworks/unity-react/overview',
            },
            {
              label: 'Unity ExtJS',
              to: 'docs/frameworks/unity-extjs/overview',
            },
          ],
        },
        {
          position: 'left',
          label: 'Release Notes',
          type: 'doc',
          docId: 'release-notes/overview', //create an md file/ js landing page for this
        },
        {
          position: 'left',
          label: 'Development',
          items: [
            {
              label: 'API',
              to: 'docs/development/unity-api/overview',
            },
            {
              label: 'Installation',
              to: 'docs/development/unity-installation/overview',
            },
            {
              label: 'Configuration',
              to: 'docs/development/unity-configuration/overview',
            },
          ],
        },
        {
          position: 'left',
          label: 'Learn',
          type: 'doc',
          docId: 'tutorials/overview'
        },
        {
          position: 'left',
          label: 'More',
          items: [
            {
              label: 'Storybook',
              href: 'https://docs.intellectivelab.com/storybook',  
              position: 'left',
            },
            {
              href: 'https://www.intellective.com/blog/', 
              label: 'Blog', 
              position: 'left',
            },
          ],
        },
        {
          href: '/contact-us',
          label: 'Contact Us',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [

        // -------------------------------------------------------------------------
        // ---- A working in-line Copyright footer object. 
        // ---- Does not look nice without in-line logo also there (See v4 mockup)
        // -------------------------------------------------------------------------
        // {
        //   items: [
        //     {
        //       html: `Copyright © ${new Date().getFullYear()} Intellective, Inc.`,
        //     },
        //   ]
        // },
        {
          items: [
            {
              label: 'Terms of Use',
              to: '/terms-of-use',
            },
          ],
        },
        {
          items: [
            {
              label: 'Contact Us',
              to: '/contact-us',
            },
          ],
        },
        // ------------------------------ Does not work ----------------------------
        // ----- An attempt to make an in-line logo similar to version 4 mockup
        // ----- that changes with the theme/color scheme. 
        // -----
        // ----- Possible Solution: creating a JSX override component for this  
        // ----- purpose -- if feasible. 
        // -------------------------------------------------------------------------
        // {
        //   items: [
        //     {
        //       logo: {
        //         alt: 'Unity Docs Logo',
        //         src: 'img/Intellective-Logo-Horiz-Primary-Light.svg',
        //         srcDark: 'img/Intellective-Logo-Horiz-Primary-Dark.svg',
        //         href: 'https://www.intellective.com/'
        //       },
        //     }
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Intellective, Inc.`,
      logo: {
        alt: 'Unity Docs Logo',
        src: 'img/Intellective-Logo-Horiz-Primary-Light.svg',
        srcDark: 'img/Intellective-Logo-Horiz-Primary-Dark.svg',
        href: 'https://www.intellective.com/'
      },
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/intellectivelabs/docs.intellectivelab.com/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    
    // Supposedly passes in scripts to be kept in <head>. However, scripts don't appear in app. 

    //Contact-Us script
    //Must be placed at HEAD otherwise it will not load the JIRA scripts required
    
    //Report bug collector
    {
      src: 
        'https://jira.intellective.com/s/d41d8cd98f00b204e9800998ecf8427e-CDN/n71z7c/810001/ed30881a1c0940ba1231758ef6f853f8/2.2.4.7/_/download/batch/com.atlassian.plugins.jquery:jquery/com.atlassian.plugins.jquery:jquery.js?collectorId=425badfe',
    },
    {
      src: 
        'https://jira.intellective.com/s/43b5bdc91be933d4dbff275f06cb0d49-T/n71z7c/810001/ed30881a1c0940ba1231758ef6f853f8/4.0.1/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en-US&collectorId=425badfe',
    },

    //Enhancement Request Collector
    {
      src: 
        'https://jira.intellective.com/s/d41d8cd98f00b204e9800998ecf8427e-CDN/n71z7c/810001/ed30881a1c0940ba1231758ef6f853f8/2.2.4.7/_/download/batch/com.atlassian.plugins.jquery:jquery/com.atlassian.plugins.jquery:jquery.js?collectorId=c5884de4',
    },
    {
      src: 
        'https://jira.intellective.com/s/43b5bdc91be933d4dbff275f06cb0d49-T/n71z7c/810001/ed30881a1c0940ba1231758ef6f853f8/4.0.1/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en-US&collectorId=c5884de4',
    },

    //Request Info Collector
    {
      src: 
        'https://jira.intellective.com/s/d41d8cd98f00b204e9800998ecf8427e-CDN/n71z7c/810001/ed30881a1c0940ba1231758ef6f853f8/2.2.4.7/_/download/batch/com.atlassian.plugins.jquery:jquery/com.atlassian.plugins.jquery:jquery.js?collectorId=3cfc946d',
    },
    {
      src: 
        'https://jira.intellective.com/s/43b5bdc91be933d4dbff275f06cb0d49-T/n71z7c/810001/ed30881a1c0940ba1231758ef6f853f8/4.0.1/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en-US&collectorId=3cfc946d',
    },
  ],
  plugins: [
    require.resolve('@cmfcmf/docusaurus-search-local')
  ],
};