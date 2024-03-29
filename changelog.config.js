module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: ['test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'style', 'ci', 'perf', 'release', 'version', 'revert'],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
  scopes: [],
  types: {
    chore: {
      description: '对构建过程或辅助工具和库的更新（不影响源代码）',
      emoji: '🧰',
      value: 'chore'
    },
    ci: {
      description: '对CI（持续集成服务）配置和脚本的更改',
      emoji: '🤖',
      value: 'ci'
    },
    docs: {
      description: '文档更新或修正',
      emoji: '📖',
      value: 'docs'
    },
    feat: {
      description: '新增特性或功能',
      emoji: '🌱',
      value: 'feat'
    },
    fix: {
      description: '修复Bug或问题',
      emoji: '✅',
      value: 'fix'
    },
    perf: {
      description: '代码性能优化',
      emoji: '🚀',
      value: 'perf'
    },
    refactor: {
      description: '代码重构，不包含新功能或修复',
      emoji: '🔨',
      value: 'refactor'
    },
    release: {
      description: '版本发布',
      emoji: '🎉',
      value: 'release'
    },
    style: {
      description: '代码风格或格式调整',
      emoji: '🎨',
      value: 'style'
    },
    test: {
      description: '增加或修改测试代码',
      emoji: '🔍',
      value: 'test'
    },
    version: {
      description: '仅版本号修改',
      emoji: '📦',
      value: 'version'
    },
    revert: {
      description: '回撤之前的提交',
      emoji: '⏪️',
      value: 'revert'
    }
  },
  messages: {
    type: '请选择提交的变更类型：',
    customScope: '指定此次变更的影响范围（可选）：',
    subject: '简短描述此次变更（必填）：',
    body: '提供更详细的变更说明（可选）：',
    breaking: '列出BREAKING CHANGE（可选）：',
    footer: '关联的问题或PR编号（例如：解决 #123，关闭 #456）（可选）：',
    confirmCommit: '确认以上提交信息？[y/n]',
  }
};
