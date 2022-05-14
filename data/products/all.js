/* eslint-disable no-irregular-whitespace */
;({
  services: {
    'cloud-print': {
      name: 'Cloud Print',
      link: 'cloud-print',
      description: '更好的自助打印',
      icon: '/img/logo/cloud-print.png',
      useLink: 'https://print.keeer.net/?utm_source=www&utm_medium=uselink',
      introduction: `
      <strong>注：假期期间 Cloud Print 服务暂停。</strong>
      历经半年，Cloud Print 终于上线了。
      新版的 Cloud Print 由 KEEER 团队开发，RDFZ ICC 科技部运营，在连接 ICC Classroom WiFi 之后即可打印。于电脑端使用体验最佳。
      注意：使用时请勿触碰打印机、联供墨盒、服务器、显示屏、路由器等设备。请在打印时注意整理纸张。如遇卡纸故障请按打印机取消键，其他故障请联系 S2C6 霍岱宣或 S2C8 吴雨峻。本打印机采用联供墨盒，因此打印机可能会显示缺墨状态，请忽略。本打印机不适用于打印高质量海报，望周知。
      `,
      members: [
        { id: 'queue', works: [ 'design', 'develop' ] },
        { id: 'egamad', works: [ 'develop' ] },
        { id: 'alan', works: [ 'design', 'develop' ] },
        { id: 'indogent', works: [ 'arts' ] },
        { id: 'tom', works: [ 'hardware' ] },
        { id: 'andy', works: [ 'develop' ] },
        { id: 'welen', works: [ 'develop' ] },
        { id: 'emma', works: [ 'arts' ] },
      ],
    },
  },
  games: {
    'traps-n-roads': {
      name: 'Traps N\' Roads',
      link: 'traps-n-roads',
      description: 'KEEER 最早的游戏之一',
      icon: '/img/logo/light-square.jpg',
      useLink: 'javascript:;',
      introduction: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      `,
      members: [
        { id: 'egamad', works: [ 'develop' ] },
        { id: 'queue', works: [ 'design' ] },
      ],
    },
    crasher: {
      name: 'Crasher',
      link: 'crasher',
      description: '某种……赌博？',
      icon: '/img/logo/light-square.jpg',
      useLink: 'javascript:;',
      introduction: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      `,
      members: [
        { id: 'queue', works: [ 'design', 'develop', 'arts' ] },
      ],
    },
    256: {
      name: '256',
      link: 'https://about.keeer.net/256/?utm_source=www&utm_medium=uselink',
      description: 'Like 2048',
      icon: '/img/logo/light-square.jpg',
      members: [
        { id: 'alan', works: [ 'design', 'develop' ] },
      ],
      norender: true,
    },
    buildhome: {
      name: 'Buildhome',
      link: 'buildhome',
      description: '一个 GGJ 2019 作品',
      icon: '/img/logo/light-square.jpg',
      members: [
        { id: 'queue', works: [ 'design', 'develop' ] },
        { id: 'alan', works: [ 'design' ] },
        { id: 'indogent', works: [ 'design' ] },
      ],
      norender: true,
    },
  },
  tools: {
    gkavatar: {
      name: '高考头像生成',
      link: 'https://services.keeer.net/gkavatar/2022/?utm_source=www-uselink',
      description: '人大附中，高考加油！',
      icon: '/img/logo/gkavatar.jpg',
      members: [
        { id: 'alan', works: [ 'design', 'develop' ] },
      ],
      norender: true,
    },
  },
  labs: {
    vote: {
      name: 'Vote',
      link: 'vote',
      description: '通用的数据收集平台',
      icon: '/img/logo/vote.svg',
      useLink: 'https://vote-lab.keeer.net/?utm_source=www&utm_medium=uselink',
      introduction: `
      KEEER Vote 是一个正在开发中的多功能的数据收集平台。
      我们希望 Vote 是：
      __NOP__<ul>
        __NOP__<li class="reveal"><strong>美观的</strong>： 有比现有问卷工具更美观的默认 UI（用户界面）；</li>
        __NOP__<li class="reveal"><strong>可自定义的</strong>： 用户可以自定义更多表单主题里的参数（比如 UI 元素颜色等），也可以自己编写主题；</li>
        __NOP__<li class="reveal"><strong>可扩展的</strong>： 通过插件系统可以很容易地扩展现有功能，也可以自己编写脚本控制表单；</li>
        __NOP__<li class="reveal"><strong>用户友好的</strong>： 具有断点续填、自动填充等一系列改善用户体验的功能；</li>
        __NOP__<li class="reveal"><strong>开放的</strong>：使源代码和平台都有很高的开放性。</li>
      __NOP__</ul>
      <a href="https://k3r.run/v/3p">点击此处申请加入 Vote 内测。</a>
      `,
      members: [
        { id: 'alan', works: [ 'design', 'develop' ] },
        { id: 'andy', works: [ 'design', 'develop' ] },
      ],
    },
    sau: {
      name: '社联管理系统',
      link: 'https://sau-lab.keeer.net:20443/?utm_source=www&utm_medium=uselink',
      description: '给社联定制的信息化管理平台',
      icon: '/img/logo/light-square.jpg',
      members: [
        { id: 'alan', works: [ 'design', 'develop' ] },
      ],
      norender: true,
    },
  },
  meta: {
    kas: {
      name: '帐户系统',
      link: 'https://account.keeer.net/?utm_source=www&utm_medium=uselink',
      description: '一切 KEEER 服务的基石。',
      icon: '/img/logo/dark-square.jpg',
      members: [
        { id: 'queue', works: [ 'design', 'develop' ] },
        { id: 'egamad', works: [ 'develop' ] },
      ],
      norender: true,
    },
    www: {
      name: 'Old homes',
      link: 'www',
      description: '之前版本的 keeer.net',
      icon: '/img/logo/dark-square.jpg',
      useLink: '/',
      introduction: `
      KEEER 在此之前还有 3 个版本的主页，它们均已经被废弃并不再使用。处于保留历史的考虑，这些页面仍然在线，您可以点击下面的链接来浏览。
      __NOP__<ul>
        __NOP__<li><a href="https://about.keeer.net/">v1</a>：<a href="https://github.com/KEEER/about.keeer.net/commit/f048709563f1c058d05478e9a6085fece7432f12" target="_blank" rel="noopener">首次 commit</a> 在 2017 年 4 月 27 日，是 KEEER 最早版本的网站，当时的域名是 keeer.ml。采用 <a href="https://developers.google.com/gsuite/add-ons/guides/css" rel="noopener" target="_blank">来自 Google 的一份样式表</a>。</li>
        __NOP__<li>v2：没有写完就放弃了。采用 Polymer 框架。</li>
        __NOP__<li><a href="https://www-v3.keeer.net/">v3</a>：<a href="https://github.com/KEEER/www-v3/commit/c4fc5d2a027a251aa4aac1e7c937359fc15554e7" target="_blank" rel="noopener">首次 commit</a> 在 2019 年 1 月 8 日，用来取代 v1 和还没写完（且不知道什么时候才能写完）的 v2。采用极简设计，只有几个链接。</li>
      __NOP__</ul>
      当前您看到的是第 4 版。
      `,
      members: [
        { id: 'alan', works: [ 'design', 'develop' ] },
        { id: 'queue', works: [ 'design', 'develop' ] },
      ],
    },
  },
})
