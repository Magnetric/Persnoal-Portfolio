# 网站文件结构优化建议

## 当前文件结构问题
1. **根目录文件过多** - 图片、图标等文件散落在根目录
2. **图片文件命名不规范** - 项目图片命名不统一
3. **重复文件** - 存在多个favicon文件
4. **大文件在根目录** - 个人照片文件过大且位置不当

## 优化后的文件结构

```
Portfolio/
├── index.html                    # 主HTML文件
├── assets/                       # 资源文件目录
│   ├── css/
│   │   └── styles.css           # 主样式文件
│   ├── js/
│   │   └── script.js            # 主脚本文件
│   ├── images/                   # 图片资源目录
│   │   ├── profile/             # 个人照片
│   │   │   ├── profile-main.jpg # 主要个人照片
│   │   │   └── profile-alt.jpg  # 备用个人照片
│   │   ├── projects/            # 项目图片
│   │   │   ├── project1/        # 项目1图片集
│   │   │   │   ├── project1-1.jpg
│   │   │   │   ├── project1-2.jpg
│   │   │   │   └── project1-3.jpg
│   │   │   ├── project2/        # 项目2图片集
│   │   │   │   ├── project2-1.png
│   │   │   │   ├── project2-2.png
│   │   │   │   └── project2-3.png
│   │   │   └── project3/        # 项目3图片集
│   │   │       ├── project3-1.jpg
│   │   │       ├── project3-2.jpg
│   │   │       └── project3-3.jpg
│   │   ├── icons/               # 图标文件
│   │   │   ├── favicon.png      # 网站图标
│   │   │   └── logo.png         # 网站Logo
│   │   └── misc/                # 其他图片
│   │       └── ok.png           # 其他图片文件
│   └── fonts/                   # 字体文件(如果需要)
├── docs/                         # 文档目录
│   ├── README.md                # 项目说明
│   ├── CHANGELOG.md             # 更新日志
│   └── file-structure.md        # 文件结构说明
├── .gitignore                   # Git忽略文件
└── package.json                 # 项目配置文件(可选)
```

## 文件重命名建议

### 项目图片重命名
- `Project1.x.jpg` → `project1-1.jpg`, `project1-2.jpg` 等
- `Project 2.x.png` → `project2-1.png`, `project2-2.png` 等  
- `Project 3.x.jpg` → `project3-1.jpg`, `project3-2.jpg` 等

### 个人照片重命名
- `profilePhoto.jpg` → `profile-main.jpg`
- `profilePhoto1.jpg` → `profile-alt.jpg`

## 优化步骤

### 第一步：创建目录结构
1. 创建 `assets/` 主资源目录
2. 创建 `assets/css/`, `assets/js/`, `assets/images/` 子目录
3. 创建 `assets/images/profile/`, `assets/images/projects/` 等子目录
4. 创建 `docs/` 文档目录

### 第二步：移动文件
1. 移动 `styles.css` 到 `assets/css/`
2. 移动 `script.js` 到 `assets/js/`
3. 移动图片文件到相应目录
4. 移动文档文件到 `docs/`

### 第三步：更新引用路径
1. 更新 `index.html` 中的CSS和JS引用路径
2. 更新图片引用路径
3. 测试所有功能正常

## 优势

1. **结构清晰** - 按文件类型和用途分类
2. **易于维护** - 相关文件集中管理
3. **便于部署** - 资源文件统一管理
4. **团队协作** - 文件组织更专业
5. **扩展性好** - 便于添加新功能模块

## 注意事项

1. 移动文件后需要更新所有引用路径
2. 建议使用相对路径引用资源
3. 图片文件建议进行适当压缩
4. 可以考虑使用构建工具自动化管理
