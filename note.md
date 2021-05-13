## Vuepress

### 现有项目安装

1. 

```
npm install -D vuepress

# 新建一个文件夹
mkdir docs

# 新建一个md文件
echo '# hello vuepress' > docs/README.md

# 开始写作
npx vuepress dev docs

```

2. 配置package.json

```
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs
  }
}
```

3. 开始写作

```
npm run docs:dev
```