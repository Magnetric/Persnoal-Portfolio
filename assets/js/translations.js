// Language translations for the portfolio website
const translations = {
    en: {
        // Navigation
        nav: {
            home: "Home",
            skills: "Skills",
            experience: "Experience",
            education: "Education",
            projects: "Projects",
            interest: "Interest"
        },
        lang: {
            en: "EN",
            zh: "中文",
            sv: "SV",
            de: "DE",
            nl: "NL"
        },
        // Hero Section
        hero: {
            name: "Hao Xu",
            subtitle: "Data Scientist/Engineer | IT Professional | Supply Chain Analytics",
            description: "<strong><u>Data Scientist/Engineer</u></strong> with <strong><u>4+ years</u></strong> of experience in analytics, business intelligence, and IT solutions. Skilled in transforming complex data into actionable insights across industries including supply chain, logistics, and port operations. Expertise in <strong><u>statistical analysis</u></strong>, <strong><u>data pipelines</u></strong>, <strong><u>modeling</u></strong>, <strong><u>machine learning</u></strong>, and <strong><u>visualization</u></strong>.",
            info: {
                age: "1998 • <span id=\"current-age\">27</span> years old",
                gender: "Male",
                degree: "Master's Degree",
                experience: "4+ years experience",
                location: "Gothenburg, Sweden",
                languages: "Chinese (Native) • English (Fluent)"
            },
            contact: {
                email: "Email",
                linkedin: "LinkedIn",
                phone: "Phone",
                wechat: "WeChat"
            }
        },
        // Skills Section
        skills: {
            title: "Technical Skills",
            category1: "Data Analytics & Data Science",
            category2: "Data Engineering & Development",
            category3: "Visualization & BI"
        },
        // Experience Section
        experience: {
            title: "Professional Experience",
            stena: {
                title: "Data Scientist",
                company: "Stena Line",
                description: "Primarily focus on end-to-end business data analysis — from data extraction and processing to visualization and reporting — to optimize operational processes and enhance decision-making. Some projects such as:",
                bullet1: "Improved the accuracy of Estimated Ready for Pick-up Time by integrating real-time ETA updates and applying a zone-based unloading model, while balancing prediction precision with terminal yard efficiency.",
                bullet2: "Designed a charging system for trailers that stayed at the port for a long time before picked up, to increase revenue and reduce the port congestion.",
                bullet3: "Developed Power BI dashboards to visualize, monitor and track operations at Ports and Terminals, which have been in continuous use for over two years.",
                bullet4: "Applied Causal Impact Analysis to evaluate and confirm the benefits of a pricing model."
            },
            chalmers: {
                title: "Research Assistant (Data Analyst)",
                company: "Chalmers University of Technology",
                description: "Primarily focused on analyzing changes in delivery patterns and customer behavior during COVID-19, providing actionable insights for logistics and retail. Worked on end-to-end research projects — from data collection and modeling to visualization and reporting.",
                bullet1: "Investigated changes in delivery patterns and customer behavior during COVID-19.",
                bullet2: "Conducted data collection, modeling, analysis, and visualization (in Python and Tableau).",
                bullet3: "Confirmed post-pandemic shifts in spending and online shopping trends."
            },
            midea: {
                title: "Supply Chain Planner (Intern)",
                company: "Midea Property Group",
                description: "Primarily engaged in supply chain planning and operations support, with a focus on demand forecasting, inventory analysis, and logistics coordination. Assisted in end-to-end planning workflows to improve supply chain efficiency.",
                bullet1: "Conducted demand forecasting and inventory analysis to support supply chain planning, improving forecast accuracy and reducing stock imbalances across multiple business units.",
                bullet2: "Performed market analysis on procurement categories, identifying and evaluating potential suppliers to optimize cost, quality, and lead time, supporting strategic sourcing decisions."
            }
        },
        // Education Section
        education: {
            title: "Education",
            master: {
                degree: "Master of Science",
                major: "Supply Chain Management",
                university: "Chalmers University of Technology",
                location: "Gothenburg, Sweden"
            },
            bachelor: {
                degree: "Bachelor of Engineering",
                major: "Industrial Engineering",
                university: "South China University of Technology",
                location: "Guangzhou, China"
            },
            erasmus: {
                degree: "Erasmus Exchange",
                major: "Operations Management and Logistics",
                university: "Eindhoven University of Technology",
                location: "Eindhoven, Netherlands"
            }
        },
        // Projects Section
        projects: {
            title: "Featured Projects",
            estimatedrpt: {
                title: "Estimated Ready for Pick-up Time (Estimated RPT) Optimization",
                description: "Led the optimization of Estimated Ready for Pick-up Time (Estimated RPT) prediction accuracy through systematic problem decomposition and innovative solution implementation. The project focused on improving both ETA (Estimated Time of Arrival) and unloading duration predictions to enhance terminal operations and customer satisfaction.",
                bullet1: "<strong><u>1. Problem Breakdown</u></strong><br>Estimated RPT = ETA + Unloading Duration. Improving accuracy requires optimizing both parts.<br>• ETA: Highly uncertain, influenced by route, weather, and vessel speed, often with deviations of several hours.<br>• Unloading Duration: Large vessels take 6–10 hours to unload, creating significant gaps between the first and last Real RPT.",
                bullet2: "<strong><u>2. ETA Optimization</u></strong><br>• Use Stena Line's offshore real-time ETA system via API integration.<br>• Refresh ETA at key stages: departure, hourly during voyage, and upon arrival.",
                bullet3: "<strong><u>3. Unloading Duration Optimization</u></strong><br><strong>3.1 Deck and Subsection</strong><br>• Current deck-level grouping is too coarse; unloading times vary within a deck.<br>• Further divide decks into ~6 subsections (front/middle/rear × left/right).<br>• Smaller variance within subsections improves Estimated RPT accuracy.<br><br><strong>3.2 Subsection Trade-off</strong><br>• Too large → high variance, low accuracy.<br>• Too small → sparse data, risk of overfitting, higher operational complexity.<br>• Optimal size determined through analysis and simulation.",
                bullet4: "<strong><u>4. Accuracy vs. Effectiveness</u></strong><br>Estimated RPT is an interval, Real RPT a time point. Accuracy means the Real RPT falls within the interval. Expanding the interval improves accuracy but reduces prediction effectiveness. Different ports adopt tailored accuracy targets and interval widths."
            },
            tracktrace: {
                title: "Track & Trace Dashboard",
                description: "Under the demand of manager, I independently designed and developed a Power BI dashboard to monitor port operations and efficiency at multiple granularities (daily, weekly, monthly). Led the full development cycle, including <strong><u>data extraction via SQL</u></strong>, <strong><u>data cleaning with Python/Power Query</u></strong>, and <strong><u>data modeling/visualization in Power BI</u></strong>. Engaged stakeholders to refine requirements and iteratively improved the solution based on feedback. Deployed the dashboard to production, creating the first centralized tool for port performance monitoring.<br> <br>The dashboard has been actively used for <strong><u>over 2 years</u></strong>, delivering significant value by enhancing operational visibility and decision-making."
            },
            thesis: {
                title: "Master Thesis – Supply Chain & Logistics",
                subtitle: "Assessing the Economic and Environmental Effects of Dry Port and Triangulation Transport on the Empty Container Repositioning Problem",
                bullet1: "Conducted research on empty container repositioning (ECR) in Sweden's inland container logistics, focusing on economic and environmental impacts of dry ports and triangulation transport.",
                bullet2: "Built three <strong><u>Agent-based Discrete-event Simulation Models</u></strong> using AnyLogic with real operational data: (1) with dry port, (2) without dry port, (3) with dry port plus triangulation. Simulated container flows, costs, and CO₂ emissions to evaluate efficiency and sustainability.",
                bullet3: "Results showed dry ports reduced transport costs by <strong><u>66.36%</u></strong> and emissions by <strong><u>78.86%</u></strong>; triangulation further decreased costs by <strong><u>25.12%</u></strong> and emissions by <strong><u>7.85%</u></strong>."
            },
            photography: {
                title: "Full-Stack Serverless Photography Portfolio Website",
                description: "As one of my passions, I have always wanted to create a personal website for photography, and now, it is completed. This website is more than just a static gallery — it's an interactive, cloud-powered platform showcasing my photos while demonstrating my end-to-end full-stack development skills.",
                bullet1: "<strong><u>🎨 Frontend</u></strong><br>I designed and implemented a fully responsive, modern web application using HTML5 | CSS3 | JavaScript ES6+, featuring:<br>1. Interactive Photo Gallery with smooth animations, lazy loading, and intuitive navigation<br>2. 360° Spherical Panoramic View using Pannellum.js for immersive experiences<br>3. Photo Rating System with 5-star ratings and cloud synchronization<br>4. Leaflet.js Map Integration displaying geographic footprints with year-based filtering<br>5. Smart Image Processing with automatic WebP conversion and thumbnail generation<br>6. User Engagement Tools including email subscription and social media integration",
                bullet2: "<strong><u>⚙️ Backend (Serverless on AWS)</u></strong><br>Built a highly scalable, cost-efficient serverless architecture on AWS:<br>1. Amazon API Gateway — RESTful API endpoints with CORS configuration and request validation<br>2. AWS Lambda (Python) — Business logic including: Gallery and photo management with CRUD operations; Advanced image processing using Pillow library; Direct S3 upload using presigned URLs (bypassing 10MB API Gateway limit); Photo rating system with device-based user identification, etc<br>3. Amazon S3 — Optimized photo storage with WebP format and intelligent tiering<br>4. Amazon DynamoDB — Three-table NoSQL architecture for galleries, photos, and ratings<br>5. AWS Lambda Layers — Pre-built layers for Pillow and requests libraries<br>6. Performance Optimization: WebP format conversion (95% quality originals, 40% thumbnails); Parallel photo processing and uploads; Automatic thumbnail generation with smart dimensions; Metadata synchronization between S3 and DynamoDB"
            }
        },
        // Interest Section
        interest: {
            title: "Interests & Hobbies",
            traveling: {
                title: "Traveling",
                description: "The essence of my love for traveling lies in a deep curiosity and passion for the world. Experiencing diverse natural landscapes, learning about different lifestyles and local cultures makes me feel that the world is truly wonderful, authentic, and full of life."
            },
            photography: {
                title: "Photography",
                description: "I believe everything eventually fades away — nothing can truly be kept except memories. Memories are the only things that are real and uniquely ours. That's why I love using my lens to capture the beauty of the world, making those memories clearer and longer-lasting."
            },
            hiking: {
                title: "Hiking & Nature",
                description: "I am someone who deeply loves nature. In modern cities, where we live surrounded by concrete and steel, hiking and camping offer the best and most accessible way to reconnect with the natural world."
            },
            reading: {
                title: "Reading & Learning",
                description: "Reading and learning share the same essence as traveling: both are explorations of the world driven by curiosity. To me, the true sign of aging is not years, but losing the ability to learn new knowledge, embrace new ideas, and refresh one's perspectives."
            }
        }
    },
    zh: {
        // Navigation
        nav: {
            home: "首页",
            skills: "技能",
            experience: "经验",
            education: "教育",
            projects: "项目",
            interest: "兴趣"
        },
        lang: {
            en: "EN",
            zh: "中文",
            sv: "SV",
            de: "DE",
            nl: "NL"
        },
        // Hero Section
        hero: {
            name: "许浩",
            subtitle: "数据科学家/工程师 | IT专业人士 | 供应链分析",
            description: "<strong><u>数据科学家/工程师</u></strong>，拥有<strong><u>4年以上</u></strong>分析、商业智能和IT解决方案经验。擅长将复杂数据转化为可操作的见解，涵盖供应链、物流和港口运营等行业。在<strong><u>统计分析</u></strong>、<strong><u>数据管道</u></strong>、<strong><u>建模</u></strong>、<strong><u>机器学习</u></strong>和<strong><u>可视化</u></strong>方面具有专业知识。",
            info: {
                age: "1998年 • <span id=\"current-age\">27</span>岁",
                gender: "男",
                degree: "理学硕士",
                experience: "4年以上经验",
                location: "哥德堡，瑞典",
                languages: "中文（母语）• 英语（流利）"
            },
            contact: {
                email: "邮箱",
                linkedin: "领英",
                phone: "电话",
                wechat: "微信"
            }
        },
        // Skills Section
        skills: {
            title: "技术技能",
            category1: "数据分析与数据科学",
            category2: "数据工程与开发",
            category3: "可视化与商业智能"
        },
        // Experience Section
        experience: {
            title: "专业经验",
            stena: {
                title: "数据科学家",
                company: "Stena Line",
                description: "主要专注于端到端商业数据分析——从数据提取和处理到可视化和报告——以优化运营流程并增强决策能力。一些项目包括：",
                bullet1: "通过集成实时ETA更新和应用基于区域的卸载模型，提高了预计提货时间的准确性，同时平衡了预测精度与终端堆场效率。",
                bullet2: "为长期滞留在港口未提货的拖车设计了一套收费系统，以增加收入并减少港口拥堵。",
                bullet3: "开发了Power BI仪表板来可视化、监控和跟踪港口和码头的运营，已持续使用超过两年。",
                bullet4: "应用因果影响分析来评估和确认定价模型的效益。"
            },
            chalmers: {
                title: "研究助理（数据分析师）",
                company: "查尔姆斯理工大学",
                description: "主要专注于分析COVID-19期间配送模式和客户行为的变化，为物流和零售提供可操作的见解。从事端到端研究项目——从数据收集和建模到可视化和报告。",
                bullet1: "调查了COVID-19期间配送模式和客户行为的变化。",
                bullet2: "进行数据收集、建模、分析和可视化（使用Python和Tableau）。",
                bullet3: "确认了疫情后支出和在线购物趋势的转变。"
            },
            midea: {
                title: "供应链规划师（实习生）",
                company: "美的置业集团",
                description: "主要参与供应链规划和运营支持，专注于需求预测、库存分析和物流协调。协助端到端规划工作流程以提高供应链效率。",
                bullet1: "进行需求预测和库存分析以支持供应链规划，提高预测准确性并减少多个业务单元的库存不平衡。",
                bullet2: "对采购类别进行市场分析，识别和评估潜在供应商以优化成本、质量和交付时间，支持战略采购决策。"
            }
        },
        // Education Section
        education: {
            title: "教育背景",
            master: {
                degree: "理学硕士",
                major: "供应链管理",
                university: "查尔姆斯理工大学",
                location: "哥德堡，瑞典"
            },
            bachelor: {
                degree: "工学学士",
                major: "工业工程",
                university: "华南理工大学",
                location: "广州，中国"
            },
            erasmus: {
                degree: "伊拉斯谟交换项目",
                major: "运营管理与物流",
                university: "埃因霍温理工大学",
                location: "埃因霍温，荷兰"
            }
        },
        // Projects Section
        projects: {
            title: "精选项目",
            estimatedrpt: {
                title: "优化 Estimated Ready for Pick-up Time (Estimated RPT)",
                description: "通过系统化问题拆解和创新解决方案实施，领导了预计提货时间（Estimated RPT）预测准确率的优化项目。该项目专注于改进ETA（预计到港时间）和卸货时长预测，以提升终端运营和客户满意度。",
                bullet1: "<strong><u>1. 问题拆解</u></strong><br>Estimated RPT = ETA + 预计卸货时间。提高准确率需要同时优化这两个部分。<br>• ETA：高度不确定，受航线、天气和船速影响，经常出现数小时的偏差。<br>• 卸货时长：大型货轮需要6-10小时卸货，导致首批与尾批Real RPT之间存在显著差距。",
                bullet2: "<strong><u>2. ETA优化</u></strong><br>• 通过API集成使用Stena Line offshore实时ETA系统。<br>• 在关键阶段刷新ETA：出发时、航行途中每小时、到港时。",
                bullet3: "<strong><u>3. 卸货时长优化</u></strong><br><strong>3.1 甲板与子分区</strong><br>• 当前甲板级分组过于粗糙；同一甲板内卸货时间存在差异。<br>• 进一步将甲板划分为约6个子分区（前/中/后 × 左/右）。<br>• 子分区内较小方差提高Estimated RPT准确性。<br><br><strong>3.2 子分区权衡</strong><br>• 过大 → 高方差，低准确性。<br>• 过小 → 数据稀疏，过拟合风险，操作复杂性增加。<br>• 通过分析和仿真确定最优尺寸。",
                bullet4: "<strong><u>4. 准确性与有效性</u></strong><br>Estimated RPT是区间，Real RPT是时间点。准确性意味着Real RPT落在区间内。扩大区间提高准确性但降低预测有效性。不同港口采用定制化的准确性目标和区间宽度。"
            },
            tracktrace: {
                title: "跟踪与追踪仪表板",
                description: "在经理的需求下，我独立设计并开发了一个Power BI仪表板，用于监控港口运营和效率，支持多个粒度级别（日、周、月）。主导了完整的开发周期，包括<strong><u>通过SQL进行数据提取</u></strong>、<strong><u>使用Python/Power Query进行数据清洗</u></strong>，以及<strong><u>在Power BI中进行数据建模/可视化</u></strong>。与利益相关者合作完善需求，并根据反馈迭代改进解决方案。将仪表板部署到生产环境，创建了首个港口性能监控的集中化工具。<br> <br>该仪表板已持续使用<strong><u>超过2年</u></strong>，通过增强运营可视性和决策能力带来显著价值。"
            },
            thesis: {
                title: "硕士论文 – 供应链与物流",
                subtitle: "评估干港和三角运输对空集装箱重新定位问题的经济和环境影响",
                bullet1: "对瑞典内陆集装箱物流中的空集装箱重新定位（ECR）进行研究，重点关注干港和三角运输的经济和环境影响。",
                bullet2: "使用AnyLogic构建了三个<strong><u>基于代理的离散事件仿真模型</u></strong>，使用真实运营数据：（1）有干港，（2）无干港，（3）有干港加三角运输。模拟集装箱流动、成本和CO₂排放，评估效率和可持续性。",
                bullet3: "结果显示干港将运输成本降低了<strong><u>66.36%</u></strong>，排放降低了<strong><u>78.86%</u></strong>；三角运输进一步将成本降低了<strong><u>25.12%</u></strong>，排放降低了<strong><u>7.85%</u></strong>。"
            },
            photography: {
                title: "全栈无服务器摄影作品集网站",
                description: "作为我的爱好之一，我一直想创建一个个人摄影网站，现在它已经完成了。这个网站不仅仅是一个静态画廊——它是一个交互式的、云驱动的平台，展示我的照片，同时展示我的端到端全栈开发技能。",
                bullet1: "<strong><u>🎨 前端</u></strong><br>我设计并实现了一个完全响应式的现代Web应用程序，使用HTML5 | CSS3 | JavaScript ES6+，具有以下功能：<br>1. 交互式照片画廊，具有流畅动画、懒加载和直观导航<br>2. 使用Pannellum.js的360°球形全景视图，提供沉浸式体验<br>3. 照片评分系统，具有5星评分和云同步<br>4. Leaflet.js地图集成，显示地理足迹和按年份过滤<br>5. 智能图像处理，具有自动WebP转换和缩略图生成<br>6. 用户参与工具，包括邮件订阅和社交媒体集成",
                bullet2: "<strong><u>⚙️ 后端（AWS无服务器）</u></strong><br>在AWS上构建了高度可扩展、成本效益高的无服务器架构：<br>1. Amazon API Gateway — 具有CORS配置和请求验证的RESTful API端点<br>2. AWS Lambda（Python）— 业务逻辑包括：画廊和照片管理与CRUD操作；使用Pillow库的高级图像处理；使用预签名URL的直接S3上传（绕过10MB API Gateway限制）；基于设备的用户识别照片评分系统等<br>3. Amazon S3 — 使用WebP格式和智能分层的优化照片存储<br>4. Amazon DynamoDB — 用于画廊、照片和评分的三表NoSQL架构<br>5. AWS Lambda Layers — Pillow和requests库的预构建层<br>6. 性能优化：WebP格式转换（95%质量原图，40%缩略图）；并行照片处理和上传；具有智能尺寸的自动缩略图生成；S3和DynamoDB之间的元数据同步"
            }
        },
        // Interest Section
        interest: {
            title: "兴趣与爱好",
            traveling: {
                title: "旅行",
                description: "我对旅行的热爱源于对世界深深的好奇心和热情。体验不同的自然景观，了解不同的生活方式和当地文化，让我感受到世界真正美好、真实且充满活力。"
            },
            photography: {
                title: "摄影",
                description: "我相信一切最终都会消逝——除了记忆，没有什么能真正保留。记忆是唯一真实且独特属于我们的东西。这就是为什么我喜欢用镜头捕捉世界的美，让那些记忆更清晰、更持久。"
            },
            hiking: {
                title: "徒步与自然",
                description: "我是一个深深热爱自然的人。在现代城市中，我们被混凝土和钢铁包围，徒步和露营提供了重新连接自然世界的最佳和最便捷的方式。"
            },
            reading: {
                title: "阅读与学习",
                description: "阅读和学习与旅行有着相同的本质：两者都是由好奇心驱动的世界探索。对我来说，真正衰老的标志不是岁月，而是失去学习新知识、接受新想法和刷新视角的能力。"
            }
        }
    },
    sv: {
        // Navigation
        nav: {
            home: "Hem",
            skills: "Färdigheter",
            experience: "Erfarenhet",
            education: "Utbildning",
            projects: "Projekt",
            interest: "Intressen"
        },
        lang: {
            en: "EN",
            zh: "中文",
            sv: "SV",
            de: "DE",
            nl: "NL"
        },
        // Hero Section
        hero: {
            name: "Hao Xu",
            subtitle: "Data Scientist/Engineer | IT Professional | Supply Chain Analytics",
            description: "<strong><u>Data Scientist/Engineer</u></strong> med <strong><u>4+ års</u></strong> erfarenhet inom analys, business intelligence och IT-lösningar. Skicklig på att omvandla komplex data till handlingsbara insikter över branscher inklusive supply chain, logistik och hamnoperationer. Expertis inom <strong><u>statistisk analys</u></strong>, <strong><u>datapipelines</u></strong>, <strong><u>modellering</u></strong>, <strong><u>maskininlärning</u></strong> och <strong><u>visualisering</u></strong>.",
            info: {
                age: "1998 • <span id=\"current-age\">27</span> år gammal",
                gender: "Man",
                degree: "Master of Science",
                experience: "4+ års erfarenhet",
                location: "Göteborg, Sverige",
                languages: "Kinesiska (Modersmål) • Engelska (Flytande)"
            },
            contact: {
                email: "E-post",
                linkedin: "LinkedIn",
                phone: "Telefon",
                wechat: "WeChat"
            }
        },
        // Skills Section
        skills: {
            title: "Tekniska Färdigheter",
            category1: "Dataanalys & Data Science",
            category2: "Data Engineering & Utveckling",
            category3: "Visualisering & BI"
        },
        // Experience Section
        experience: {
            title: "Professionell Erfarenhet",
            stena: {
                title: "Data Scientist",
                company: "Stena Line",
                description: "Fokuserar främst på end-to-end affärsdataanalys — från dataextraktion och bearbetning till visualisering och rapportering — för att optimera operativa processer och förbättra beslutsfattande. Några projekt som:",
                bullet1: "Förbättrade noggrannheten av beräknade ready-for-pickup tider genom att integrera realtids-ETA-uppdateringar och tillämpa en zonsbaserad lossningsmodell, samtidigt som prediktionsprecision balanseras med terminalgårdseffektivitet.",
                bullet2: "Designade ett debiteringssystem för släpvagnar som stannade kvar i hamnen under lång tid innan de hämtades, för att öka intäkterna och minska hamnkongestionen.",
                bullet3: "Utvecklade Power BI-dashboard för att visualisera, övervaka och spåra operationer vid hamnar och terminaler, som har använts kontinuerligt i över två år.",
                bullet4: "Tillämpade Causal Impact Analysis för att utvärdera och bekräfta fördelarna med en prismodell."
            },
            chalmers: {
                title: "Forskningsassistent (Dataanalytiker)",
                company: "Chalmers tekniska högskola",
                description: "Fokuserade främst på att analysera förändringar i leveransmönster och kundbeteende under COVID-19, och gav handlingsbara insikter för logistik och detaljhandel. Arbetade med end-to-end forskningsprojekt — från datainsamling och modellering till visualisering och rapportering.",
                bullet1: "Undersökte förändringar i leveransmönster och kundbeteende under COVID-19.",
                bullet2: "Genomförde datainsamling, modellering, analys och visualisering (i Python och Tableau).",
                bullet3: "Bekräftade post-pandemiska förändringar i utgiftsmönster och online-shopping trender."
            },
            midea: {
                title: "Supply Chain Planner (Praktikant)",
                company: "Midea Property Group",
                description: "Engagerade främst i supply chain-planering och operationsstöd, med fokus på efterfrågeprognoser, lageranalys och logistikkoordinering. Bistod i end-to-end planeringsarbetsflöden för att förbättra supply chain-effektivitet.",
                bullet1: "Genomförde efterfrågeprognoser och lageranalys för att stödja supply chain-planering, förbättrade prognosnoggrannhet och minskade lagerobalanser över flera affärsenheter.",
                bullet2: "Utförde marknadsanalys på inköpskategorier, identifierade och utvärderade potentiella leverantörer för att optimera kostnad, kvalitet och leveranstid, vilket stödde strategiska inköpsbeslut."
            }
        },
        // Education Section
        education: {
            title: "Utbildning",
            master: {
                degree: "Master of Science",
                major: "Supply Chain Management",
                university: "Chalmers tekniska högskola",
                location: "Göteborg, Sverige"
            },
            bachelor: {
                degree: "Bachelor of Engineering",
                major: "Industriell Teknik",
                university: "South China University of Technology",
                location: "Guangzhou, Kina"
            },
            erasmus: {
                degree: "Erasmus Exchange",
                major: "Operations Management and Logistics",
                university: "Eindhoven University of Technology",
                location: "Eindhoven, Nederländerna"
            }
        },
        // Projects Section
        projects: {
            title: "Utvalda Projekt",
            estimatedrpt: {
                title: "Optimering av Estimated Ready for Pick-up Time (Estimated RPT)",
                description: "Ledde optimeringen av Estimated Ready for Pick-up Time (Estimated RPT) prediktionsnoggrannhet genom systematiskt problemuppdelning och innovativa lösningsimplementationer. Projektet fokuserade på att förbättra både ETA (Estimated Time of Arrival) och lossningstidsprognoser för att förbättra terminaloperationer och kundnöjdhet.",
                bullet1: "<strong><u>1. Problemuppdelning</u></strong><br>Estimated RPT = ETA + Lossningstid. Förbättring av noggrannhet kräver optimering av båda delar.<br>• ETA: Hög osäkerhet, påverkas av rutt, väder och fartygshastighet, ofta med avvikelser på flera timmar.<br>• Lossningstid: Stora fartyg tar 6–10 timmar att lossa, vilket skapar betydande skillnader mellan första och sista Real RPT.",
                bullet2: "<strong><u>2. ETA-optimering</u></strong><br>• Använd Stena Lines offshore realtids-ETA-system via API-integration.<br>• Uppdatera ETA vid nyckelsteg: avgång, timvis under resan och vid ankomst.",
                bullet3: "<strong><u>3. Lossningstidsoptimering</u></strong><br><strong>3.1 Däck och underavdelning</strong><br>• Nuvarande däcknivågruppering är för grov; lossningstider varierar inom ett däck.<br>• Dela upp däck ytterligare i ~6 underavdelningar (fram/mitten/bak × vänster/höger).<br>• Mindre variation inom underavdelningar förbättrar Estimated RPT-noggrannhet.<br><br><strong>3.2 Underavdelningskompromiss</strong><br>• För stor → hög variation, låg noggrannhet.<br>• För liten → gles data, risk för överanpassning, högre operativ komplexitet.<br>• Optimal storlek bestäms genom analys och simulering.",
                bullet4: "<strong><u>4. Noggrannhet vs. Effektivitet</u></strong><br>Estimated RPT är ett intervall, Real RPT en tidpunkt. Noggrannhet innebär att Real RPT faller inom intervallet. Utvidgning av intervallet förbättrar noggrannhet men minskar prediktions-effektiviteten. Olika hamnar antar skräddarsydda noggrannhetsmål och intervallbredder."
            },
            tracktrace: {
                title: "Track & Trace Dashboard",
                description: "På chefens begäran designade och utvecklade jag självständigt en Power BI-dashboard för att övervaka hamnoperationer och effektivitet på flera granularitetsnivåer (daglig, veckovis, månadsvis). Ledde hela utvecklingscykeln, inklusive <strong><u>dataextraktion via SQL</u></strong>, <strong><u>datarengöring med Python/Power Query</u></strong> och <strong><u>datamodellering/visualisering i Power BI</u></strong>. Engagerade intressenter för att förfina krav och förbättrade lösningen iterativt baserat på feedback. Distribuerade dashboarden till produktion och skapade det första centraliserade verktyget för hamnprestandaövervakning.<br> <br>Dashboarden har använts aktivt i <strong><u>över 1,5 år</u></strong> och levererat betydande värde genom att förbättra operativ synlighet och beslutsfattande."
            },
            thesis: {
                title: "Masteruppsats – Supply Chain & Logistik",
                subtitle: "Bedömning av ekonomiska och miljömässiga effekter av torrhamn och trianguleringstransport på problemet med tomma containrar",
                bullet1: "Genomförde forskning om ompositionering av tomma containrar (ECR) i Sveriges inlandskontainerlogistik, med fokus på ekonomiska och miljömässiga effekter av torrhamnar och trianguleringstransport.",
                bullet2: "Byggde tre <strong><u>agentbaserade diskreta händelsesimuleringsmodeller</u></strong> med AnyLogic med verkliga operativa data: (1) med torrhamn, (2) utan torrhamn, (3) med torrhamn plus triangulering. Simulerade containerflöden, kostnader och CO₂-utsläpp för att utvärdera effektivitet och hållbarhet.",
                bullet3: "Resultaten visade att torrhamnar minskade transportkostnaderna med <strong><u>66,36%</u></strong> och utsläppen med <strong><u>78,86%</u></strong>; triangulering minskade kostnaderna ytterligare med <strong><u>25,12%</u></strong> och utsläppen med <strong><u>7,85%</u></strong>."
            },
            photography: {
                title: "Full-Stack Serverless Fotografi Portfolio Webbplats",
                description: "Som en av mina passioner har jag alltid velat skapa en personlig webbplats för fotografi, och nu är den färdig. Denna webbplats är mer än bara en statisk galleri — det är en interaktiv, molndriven plattform som visar mina foton samtidigt som den demonstrerar mina end-to-end fullstack-utvecklingsfärdigheter.",
                bullet1: "<strong><u>🎨 Frontend</u></strong><br>Jag designade och implementerade en helt responsiv, modern webbapplikation med HTML5 | CSS3 | JavaScript ES6+, med följande funktioner:<br>1. Interaktivt fotogalleri med smidiga animationer, lazy loading och intuitiv navigation<br>2. 360° sfärisk panoramavy med Pannellum.js för immersiva upplevelser<br>3. Fotorankningssystem med 5-stjärniga rankningar och molnsynkronisering<br>4. Leaflet.js kartintegration som visar geografiska fotavtryck med år-baserad filtrering<br>5. Smart bildbehandling med automatisk WebP-konvertering och miniatyrgenerering<br>6. Användarengagemangverktyg inklusive e-postprenumeration och sociala medier-integration",
                bullet2: "<strong><u>⚙️ Backend (Serverless på AWS)</u></strong><br>Byggde en mycket skalbar, kostnadseffektiv serverless-arkitektur på AWS:<br>1. Amazon API Gateway — RESTful API-endpoints med CORS-konfiguration och begäran-validering<br>2. AWS Lambda (Python) — Affärslogik inklusive: Galleri- och fotohantering med CRUD-operationer; Avancerad bildbehandling med Pillow-biblioteket; Direkt S3-uppladdning med försignerade URL:er (kringgår 10MB API Gateway-gräns); Fotorankningssystem med enhetsbaserad användaridentifiering, etc<br>3. Amazon S3 — Optimerad fotolagring med WebP-format och intelligent tiering<br>4. Amazon DynamoDB — Tre-tabell NoSQL-arkitektur för gallerier, foton och rankningar<br>5. AWS Lambda Layers — Förbyggda lager för Pillow och requests-bibliotek<br>6. Prestandaoptimering: WebP-formatskonvertering (95% kvalitet original, 40% miniatyrer); Parallell fotobearbetning och uppladdningar; Automatisk miniatyrgenerering med smarta dimensioner; Metadatasynkronisering mellan S3 och DynamoDB"
            }
        },
        // Interest Section
        interest: {
            title: "Intressen & Hobbyer",
            traveling: {
                title: "Resor",
                description: "Kärnan i min kärlek till resor ligger i en djup nyfikenhet och passion för världen. Att uppleva olika naturlandskap, lära sig om olika livsstilar och lokala kulturer får mig att känna att världen verkligen är underbar, autentisk och full av liv."
            },
            photography: {
                title: "Fotografi",
                description: "Jag tror att allt till slut bleknar bort — ingenting kan verkligen behållas utom minnen. Minnen är de enda saker som är verkliga och unikt våra. Det är därför jag älskar att använda mitt objektiv för att fånga världens skönhet, vilket gör dessa minnen tydligare och mer bestående."
            },
            hiking: {
                title: "Vandring & Natur",
                description: "Jag är någon som djupt älskar naturen. I moderna städer, där vi lever omgivna av betong och stål, erbjuder vandring och camping det bästa och mest tillgängliga sättet att återansluta till den naturliga världen."
            },
            reading: {
                title: "Läsning & Lärande",
                description: "Läsning och lärande delar samma essens som resor: båda är utforskningar av världen drivna av nyfikenhet. För mig är det verkliga tecknet på åldrande inte år, utan att förlora förmågan att lära sig ny kunskap, omfamna nya idéer och uppdatera ens perspektiv."
            }
        }
    },
    de: {
        // Navigation
        nav: {
            home: "Startseite",
            skills: "Fähigkeiten",
            experience: "Erfahrung",
            education: "Ausbildung",
            projects: "Projekte",
            interest: "Interessen"
        },
        lang: {
            en: "EN",
            zh: "中文",
            sv: "SV",
            de: "DE",
            nl: "NL"
        },
        // Hero Section
        hero: {
            name: "Hao Xu",
            subtitle: "Data Scientist/Engineer | IT Professional | Supply Chain Analytics",
            description: "<strong><u>Data Scientist/Engineer</u></strong> mit <strong><u>4+ Jahren</u></strong> Erfahrung in Analyse, Business Intelligence und IT-Lösungen. Geschickt in der Transformation komplexer Daten in umsetzbare Erkenntnisse über Branchen hinweg, einschließlich Supply Chain, Logistik und Hafenoperationen. Expertise in <strong><u>statistischer Analyse</u></strong>, <strong><u>Datenpipelines</u></strong>, <strong><u>Modellierung</u></strong>, <strong><u>Maschinellem Lernen</u></strong> und <strong><u>Visualisierung</u></strong>.",
            info: {
                age: "1998 • <span id=\"current-age\">27</span> Jahre alt",
                gender: "Männlich",
                degree: "Master of Science",
                experience: "4+ Jahre Erfahrung",
                location: "Göteborg, Schweden",
                languages: "Chinesisch (Muttersprache) • Englisch (Fließend)"
            },
            contact: {
                email: "E-Mail",
                linkedin: "LinkedIn",
                phone: "Telefon",
                wechat: "WeChat"
            }
        },
        // Skills Section
        skills: {
            title: "Technische Fähigkeiten",
            category1: "Datenanalyse & Data Science",
            category2: "Data Engineering & Entwicklung",
            category3: "Visualisierung & BI"
        },
        // Experience Section
        experience: {
            title: "Berufserfahrung",
            stena: {
                title: "Data Scientist",
                company: "Stena Line",
                description: "Fokussiere hauptsächlich auf End-to-End-Geschäftsdatenanalyse — von Datenextraktion und -verarbeitung bis hin zu Visualisierung und Berichterstattung — um operative Prozesse zu optimieren und die Entscheidungsfindung zu verbessern. Einige Projekte wie:",
                bullet1: "Verbesserte die Genauigkeit der geschätzten Abholzeiten durch Integration von Echtzeit-ETA-Updates und Anwendung eines zonenbasierten Entlademodells, wobei Vorhersagegenauigkeit mit Terminal-Hofeffizienz ausbalanciert wurde.",
                bullet2: "Entwickelte ein Abrechnungssystem für Anhänger, die lange Zeit im Hafen blieben, bevor sie abgeholt wurden, um Einnahmen zu steigern und Hafenstaus zu reduzieren.",
                bullet3: "Entwickelte Power BI-Dashboards zur Visualisierung, Überwachung und Verfolgung von Operationen in Häfen und Terminals, die seit über zwei Jahren kontinuierlich genutzt werden.",
                bullet4: "Wendete Causal Impact Analysis an, um die Vorteile eines Preismodells zu bewerten und zu bestätigen."
            },
            chalmers: {
                title: "Forschungsassistent (Datenanalytiker)",
                company: "Chalmers University of Technology",
                description: "Fokussierte hauptsächlich auf die Analyse von Veränderungen in Liefermustern und Kundenverhalten während COVID-19 und lieferte umsetzbare Erkenntnisse für Logistik und Einzelhandel. Arbeitete an End-to-End-Forschungsprojekten — von Datensammlung und -modellierung bis hin zu Visualisierung und Berichterstattung.",
                bullet1: "Untersuchte Veränderungen in Liefermustern und Kundenverhalten während COVID-19.",
                bullet2: "Führte Datensammlung, Modellierung, Analyse und Visualisierung durch (in Python und Tableau).",
                bullet3: "Bestätigte post-pandemische Verschiebungen in Ausgabemustern und Online-Shopping-Trends."
            },
            midea: {
                title: "Supply Chain Planner (Praktikant)",
                company: "Midea Property Group",
                description: "Engagierte sich hauptsächlich in Supply Chain-Planung und Operationsunterstützung mit Fokus auf Nachfrageprognosen, Lagerbestandsanalyse und Logistikkoordination. Unterstützte End-to-End-Planungsworkflows zur Verbesserung der Supply Chain-Effizienz.",
                bullet1: "Führte Nachfrageprognosen und Lagerbestandsanalysen durch, um die Supply Chain-Planung zu unterstützen, verbesserte die Prognosegenauigkeit und reduzierte Lagerbestandsungleichgewichte über mehrere Geschäftseinheiten hinweg.",
                bullet2: "Durchführte Marktanalysen für Beschaffungskategorien, identifizierte und bewertete potenzielle Lieferanten, um Kosten, Qualität und Lieferzeit zu optimieren und strategische Beschaffungsentscheidungen zu unterstützen."
            }
        },
        // Education Section
        education: {
            title: "Ausbildung",
            master: {
                degree: "Master of Science",
                major: "Supply Chain Management",
                university: "Chalmers University of Technology",
                location: "Göteborg, Schweden"
            },
            bachelor: {
                degree: "Bachelor of Engineering",
                major: "Industrietechnik",
                university: "South China University of Technology",
                location: "Guangzhou, China"
            },
            erasmus: {
                degree: "Erasmus Exchange",
                major: "Operations Management and Logistics",
                university: "Eindhoven University of Technology",
                location: "Eindhoven, Niederlande"
            }
        },
        // Projects Section
        projects: {
            title: "Ausgewählte Projekte",
            estimatedrpt: {
                title: "Estimated Ready for Pick-up Time (Estimated RPT) Optimierung",
                description: "Leitete die Optimierung der Estimated Ready for Pick-up Time (Estimated RPT) Vorhersagegenauigkeit durch systematische Problemzerlegung und innovative Lösungsimplementierung. Das Projekt konzentrierte sich auf die Verbesserung sowohl der ETA (Estimated Time of Arrival) als auch der Entladezeit-Vorhersagen zur Verbesserung der Terminaloperationen und Kundenzufriedenheit.",
                bullet1: "<strong><u>1. Problemzerlegung</u></strong><br>Estimated RPT = ETA + Entladezeit. Verbesserung der Genauigkeit erfordert Optimierung beider Teile.<br>• ETA: Hoch unsicher, beeinflusst von Route, Wetter und Schiffsgeschwindigkeit, oft mit Abweichungen von mehreren Stunden.<br>• Entladezeit: Große Schiffe benötigen 6–10 Stunden zum Entladen, was erhebliche Unterschiede zwischen der ersten und letzten Real RPT schafft.",
                bullet2: "<strong><u>2. ETA-Optimierung</u></strong><br>• Nutzung von Stena Lines Offshore-Echtzeit-ETA-System über API-Integration.<br>• ETA-Aktualisierung in Schlüsselphasen: Abfahrt, stündlich während der Fahrt und bei Ankunft.",
                bullet3: "<strong><u>3. Entladezeit-Optimierung</u></strong><br><strong>3.1 Deck und Unterteilung</strong><br>• Aktuelle Deck-Level-Gruppierung ist zu grob; Entladezeiten variieren innerhalb eines Decks.<br>• Weitere Aufteilung der Decks in ~6 Unterteilungen (vorne/mitte/hinten × links/rechts).<br>• Kleinere Varianz innerhalb der Unterteilungen verbessert die Estimated RPT-Genauigkeit.<br><br><strong>3.2 Unterteilungs-Kompromiss</strong><br>• Zu groß → hohe Varianz, niedrige Genauigkeit.<br>• Zu klein → spärliche Daten, Überanpassungsrisiko, höhere operative Komplexität.<br>• Optimale Größe durch Analyse und Simulation bestimmt.",
                bullet4: "<strong><u>4. Genauigkeit vs. Effektivität</u></strong><br>Estimated RPT ist ein Intervall, Real RPT ein Zeitpunkt. Genauigkeit bedeutet, dass Real RPT innerhalb des Intervalls liegt. Erweiterung des Intervalls verbessert die Genauigkeit, reduziert aber die Vorhersageeffektivität. Verschiedene Häfen übernehmen maßgeschneiderte Genauigkeitsziele und Intervallbreiten."
            },
            tracktrace: {
                title: "Track & Trace Dashboard",
                description: "Auf Anforderung des Managers habe ich eigenständig ein Power BI-Dashboard entwickelt, um Hafenoperationen und Effizienz auf mehreren Granularitätsebenen (täglich, wöchentlich, monatlich) zu überwachen. Leitete den gesamten Entwicklungszyklus, einschließlich <strong><u>Datenextraktion über SQL</u></strong>, <strong><u>Datenbereinigung mit Python/Power Query</u></strong> und <strong><u>Datenmodellierung/Visualisierung in Power BI</u></strong>. Arbeitete mit Stakeholdern zusammen, um Anforderungen zu verfeinern und verbesserte die Lösung iterativ basierend auf Feedback. Deployte das Dashboard in die Produktion und schuf das erste zentralisierte Tool für die Hafenleistungsüberwachung.<br> <br>Das Dashboard wird seit <strong><u>über 1,5 Jahren</u></strong> aktiv genutzt und liefert erheblichen Wert durch verbesserte operative Transparenz und Entscheidungsfindung."
            },
            thesis: {
                title: "Masterarbeit – Supply Chain & Logistik",
                subtitle: "Bewertung der wirtschaftlichen und ökologischen Auswirkungen von Trockenhäfen und Triangulationstransport auf das Problem der Leercontainer-Umpositionierung",
                bullet1: "Führte Forschung zur Leercontainer-Umpositionierung (ECR) in Schwedens Binnencontainer-Logistik durch, mit Fokus auf wirtschaftliche und ökologische Auswirkungen von Trockenhäfen und Triangulationstransport.",
                bullet2: "Erstellte drei <strong><u>agentenbasierte diskrete Ereignissimulationsmodelle</u></strong> mit AnyLogic unter Verwendung realer operativer Daten: (1) mit Trockenhafen, (2) ohne Trockenhafen, (3) mit Trockenhafen plus Triangulation. Simulierte Containerflüsse, Kosten und CO₂-Emissionen zur Bewertung von Effizienz und Nachhaltigkeit.",
                bullet3: "Ergebnisse zeigten, dass Trockenhäfen die Transportkosten um <strong><u>66,36%</u></strong> und die Emissionen um <strong><u>78,86%</u></strong> reduzierten; Triangulation verringerte die Kosten weiter um <strong><u>25,12%</u></strong> und die Emissionen um <strong><u>7,85%</u></strong>."
            },
            photography: {
                title: "Full-Stack Serverless Fotografie Portfolio Website",
                description: "Als eine meiner Leidenschaften wollte ich schon immer eine persönliche Website für Fotografie erstellen, und jetzt ist sie fertig. Diese Website ist mehr als nur eine statische Galerie — es ist eine interaktive, cloud-betriebene Plattform, die meine Fotos präsentiert und gleichzeitig meine End-to-End Full-Stack-Entwicklungsfähigkeiten demonstriert.",
                bullet1: "<strong><u>🎨 Frontend</u></strong><br>Ich entwarf und implementierte eine vollständig responsive, moderne Webanwendung mit HTML5 | CSS3 | JavaScript ES6+, mit folgenden Funktionen:<br>1. Interaktive Fotogalerie mit flüssigen Animationen, Lazy Loading und intuitiver Navigation<br>2. 360° Sphärische Panoramaansicht mit Pannellum.js für immersive Erfahrungen<br>3. Fotobewertungssystem mit 5-Sterne-Bewertungen und Cloud-Synchronisation<br>4. Leaflet.js Kartenintegration mit geografischen Fußabdrücken und jahresbasierter Filterung<br>5. Intelligente Bildverarbeitung mit automatischer WebP-Konvertierung und Thumbnail-Generierung<br>6. Benutzerengagement-Tools einschließlich E-Mail-Abonnement und Social Media-Integration",
                bullet2: "<strong><u>⚙️ Backend (Serverless auf AWS)</u></strong><br>Erstellte eine hochskalierbare, kosteneffiziente serverlose Architektur auf AWS:<br>1. Amazon API Gateway — RESTful API-Endpunkte mit CORS-Konfiguration und Request-Validierung<br>2. AWS Lambda (Python) — Geschäftslogik einschließlich: Galerie- und Fotomanagement mit CRUD-Operationen; Erweiterte Bildverarbeitung mit Pillow-Bibliothek; Direkte S3-Uploads mit vorzeichen-URLs (umgeht 10MB API Gateway-Limit); Fotobewertungssystem mit gerätebasierter Benutzeridentifikation, etc<br>3. Amazon S3 — Optimierte Fotolagerung mit WebP-Format und intelligentem Tiering<br>4. Amazon DynamoDB — Drei-Tabellen NoSQL-Architektur für Galerien, Fotos und Bewertungen<br>5. AWS Lambda Layers — Vorgefertigte Layer für Pillow und Requests-Bibliotheken<br>6. Leistungsoptimierung: WebP-Format-Konvertierung (95% Qualität Originale, 40% Thumbnails); Parallele Fotobearbeitung und Uploads; Automatische Thumbnail-Generierung mit intelligenten Dimensionen; Metadaten-Synchronisation zwischen S3 und DynamoDB"
            }
        },
        // Interest Section
        interest: {
            title: "Interessen & Hobbys",
            traveling: {
                title: "Reisen",
                description: "Das Wesen meiner Reiseliebe liegt in einer tiefen Neugier und Leidenschaft für die Welt. Das Erleben verschiedener Naturlandschaften, das Lernen über verschiedene Lebensstile und lokale Kulturen lässt mich spüren, dass die Welt wirklich wunderbar, authentisch und voller Leben ist."
            },
            photography: {
                title: "Fotografie",
                description: "Ich glaube, dass alles schließlich verblasst — nichts kann wirklich behalten werden außer Erinnerungen. Erinnerungen sind die einzigen Dinge, die real und einzigartig uns gehören. Deshalb liebe ich es, meine Linse zu benutzen, um die Schönheit der Welt einzufangen und diese Erinnerungen klarer und länger anhaltend zu machen."
            },
            hiking: {
                title: "Wandern & Natur",
                description: "Ich bin jemand, der die Natur zutiefst liebt. In modernen Städten, wo wir von Beton und Stahl umgeben leben, bieten Wandern und Camping den besten und zugänglichsten Weg, sich wieder mit der natürlichen Welt zu verbinden."
            },
            reading: {
                title: "Lesen & Lernen",
                description: "Lesen und Lernen teilen das gleiche Wesen wie Reisen: beide sind Erkundungen der Welt, getrieben von Neugier. Für mich ist das wahre Zeichen des Alterns nicht Jahre, sondern die Fähigkeit zu verlieren, neues Wissen zu lernen, neue Ideen zu umarmen und die eigenen Perspektiven zu erneuern."
            }
        }
    },
    nl: {
        // Navigation
        nav: {
            home: "Home",
            skills: "Vaardigheden",
            experience: "Ervaring",
            education: "Opleiding",
            projects: "Projecten",
            interest: "Interesses"
        },
        lang: {
            en: "EN",
            zh: "中文",
            sv: "SV",
            de: "DE",
            nl: "NL"
        },
        // Hero Section
        hero: {
            subtitle: "Data Scientist/Engineer | IT Professional | Supply Chain Analytics",
            description: "<strong><u>Data Scientist/Engineer</u></strong> met <strong><u>4+ jaar</u></strong> ervaring in analyse, business intelligence en IT-oplossingen. Bedreven in het transformeren van complexe data naar uitvoerbare inzichten over industrieën heen, inclusief supply chain, logistiek en havenoperaties. Expertise in <strong><u>statistische analyse</u></strong>, <strong><u>datapijplijnen</u></strong>, <strong><u>modellering</u></strong>, <strong><u>machine learning</u></strong> en <strong><u>visualisatie</u></strong>.",
            info: {
                age: "1998 • <span id=\"current-age\">27</span> jaar oud",
                gender: "Man",
                degree: "Master of Science",
                experience: "4+ jaar ervaring",
                location: "Göteborg, Zweden",
                languages: "Chinees (Moedertaal) • Engels (Vloeiend)"
            },
            contact: {
                email: "E-mail",
                linkedin: "LinkedIn",
                phone: "Telefoon",
                wechat: "WeChat"
            }
        },
        // Skills Section
        skills: {
            title: "Technische Vaardigheden",
            category1: "Data Analyse & Data Science",
            category2: "Data Engineering & Ontwikkeling",
            category3: "Visualisatie & BI"
        },
        // Experience Section
        experience: {
            title: "Werkervaring",
            stena: {
                title: "Data Scientist",
                company: "Stena Line",
                description: "Focuseer voornamelijk op end-to-end zakelijke data-analyse — van data-extractie en -verwerking tot visualisatie en rapportage — om operationele processen te optimaliseren en besluitvorming te verbeteren. Enkele projecten zoals:",
                bullet1: "Verbeterde de nauwkeurigheid van geschatte ready-for-pickup tijden door het integreren van realtime ETA-updates en het toepassen van een zone-gebaseerd lossingsmodel, waarbij voorspellingsprecisie wordt gebalanceerd met terminal-efficiëntie.",
                bullet2: "Ontwierp een factureringssysteem voor trailers die lang in de haven bleven voordat ze werden opgehaald, om de inkomsten te verhogen en havencongestie te verminderen.",
                bullet3: "Ontwikkelde Power BI-dashboards om operaties in havens en terminals te visualiseren, monitoren en volgen, die al meer dan twee jaar continu in gebruik zijn.",
                bullet4: "Toegepaste Causal Impact Analysis om de voordelen van een prijsmodel te evalueren en bevestigen."
            },
            chalmers: {
                title: "Onderzoeksassistent (Data-analist)",
                company: "Chalmers University of Technology",
                description: "Focuste voornamelijk op het analyseren van veranderingen in leveringspatronen en klantgedrag tijdens COVID-19, en gaf actiegerichte inzichten voor logistiek en retail. Werkte aan end-to-end onderzoeksprojecten — van dataverzameling en modellering tot visualisatie en rapportage.",
                bullet1: "Onderzocht veranderingen in leveringspatronen en klantgedrag tijdens COVID-19.",
                bullet2: "Voerde dataverzameling, modellering, analyse en visualisatie uit (in Python en Tableau).",
                bullet3: "Bevestigde post-pandemische verschuivingen in uitgavenpatronen en online-shopping trends."
            },
            midea: {
                title: "Supply Chain Planner (Stagiair)",
                company: "Midea Property Group",
                description: "Hield zich voornamelijk bezig met supply chain-planning en operationsondersteuning, met focus op vraagprognoses, voorraadanalyse en logistieke coördinatie. Assisteerde bij end-to-end planningsworkflows om supply chain-efficiëntie te verbeteren.",
                bullet1: "Voerde vraagprognoses en voorraadanalyses uit om supply chain-planning te ondersteunen, verbeterde prognosenauwkeurigheid en verminderde voorraadonevenwichtigheden over meerdere bedrijfseenheden.",
                bullet2: "Voerde marktanalyses uit voor inkoopcategorieën, identificeerde en evalueerde potentiële leveranciers om kosten, kwaliteit en levertijd te optimaliseren en strategische inkoopbeslissingen te ondersteunen."
            }
        },
        // Education Section
        education: {
            title: "Opleiding",
            master: {
                degree: "Master of Science",
                major: "Supply Chain Management",
                university: "Chalmers University of Technology",
                location: "Göteborg, Zweden"
            },
            bachelor: {
                degree: "Bachelor of Engineering",
                major: "Industriële Techniek",
                university: "South China University of Technology",
                location: "Guangzhou, China"
            },
            erasmus: {
                degree: "Erasmus Exchange",
                major: "Operations Management and Logistics",
                university: "Eindhoven University of Technology",
                location: "Eindhoven, Nederland"
            }
        },
        // Projects Section
        projects: {
            title: "Uitgelichte Projecten",
            estimatedrpt: {
                title: "Estimated Ready for Pick-up Time (Estimated RPT) Optimalisatie",
                description: "Leidde de optimalisatie van Estimated Ready for Pick-up Time (Estimated RPT) voorspelningsnauwkeurigheid door systematische probleemontleding en innovatieve oplossingsimplementatie. Het project richtte zich op het verbeteren van zowel ETA (Estimated Time of Arrival) als lossingstijd-voorspellingen om terminaloperaties en klanttevredenheid te verbeteren.",
                bullet1: "<strong><u>1. Probleemontleding</u></strong><br>Estimated RPT = ETA + Lossingstijd. Verbetering van nauwkeurigheid vereist optimalisatie van beide delen.<br>• ETA: Hoog onzeker, beïnvloed door route, weer en vaartuigsnelheid, vaak met afwijkingen van meerdere uren.<br>• Lossingstijd: Grote schepen hebben 6–10 uur nodig om te lossen, wat aanzienlijke verschillen tussen de eerste en laatste Real RPT creëert.",
                bullet2: "<strong><u>2. ETA-optimalisatie</u></strong><br>• Gebruik van Stena Lines offshore realtime ETA-systeem via API-integratie.<br>• ETA-vernieuwing in sleutelfasen: vertrek, uurlijks tijdens de reis en bij aankomst.",
                bullet3: "<strong><u>3. Lossingstijd-optimalisatie</u></strong><br><strong>3.1 Dek en Onderverdeling</strong><br>• Huidige dek-niveau groepering is te grof; lossingstijden variëren binnen een dek.<br>• Verdere verdeling van dekken in ~6 onderverdelingen (voor/midden/achter × links/rechts).<br>• Kleinere variantie binnen onderverdelingen verbetert Estimated RPT-nauwkeurigheid.<br><br><strong>3.2 Onderverdeling Trade-off</strong><br>• Te groot → hoge variantie, lage nauwkeurigheid.<br>• Te klein → schaarse data, risico op overfitting, hogere operationele complexiteit.<br>• Optimale grootte bepaald door analyse en simulatie.",
                bullet4: "<strong><u>4. Nauwkeurigheid vs. Effectiviteit</u></strong><br>Estimated RPT is een interval, Real RPT een tijdstip. Nauwkeurigheid betekent dat Real RPT binnen het interval valt. Uitbreiding van het interval verbetert nauwkeurigheid maar vermindert voorspellingseffectiviteit. Verschillende havens nemen op maat gemaakte nauwkeurigheidsdoelen en intervalbreedten aan."
            },
            tracktrace: {
                title: "Track & Trace Dashboard",
                description: "Op verzoek van de manager heb ik onafhankelijk een Power BI-dashboard ontworpen en ontwikkeld om havenoperaties en efficiëntie te monitoren op meerdere granulariteitsniveaus (dagelijks, wekelijks, maandelijks). Leidde de volledige ontwikkelingscyclus, inclusief <strong><u>data-extractie via SQL</u></strong>, <strong><u>data-reiniging met Python/Power Query</u></strong> en <strong><u>data-modellering/visualisatie in Power BI</u></strong>. Betrok belanghebbenden om vereisten te verfijnen en verbeterde de oplossing iteratief op basis van feedback. Deployde het dashboard naar productie en creëerde het eerste gecentraliseerde hulpmiddel voor havenprestatiebewaking.<br> <br>Het dashboard wordt al <strong><u>meer dan 1,5 jaar</u></strong> actief gebruikt en levert aanzienlijke waarde op door operationele zichtbaarheid en besluitvorming te verbeteren."
            },
            thesis: {
                title: "Master Thesis – Supply Chain & Logistiek",
                subtitle: "Beoordeling van de economische en milieueffecten van droge havens en triangulatievervoer op het probleem van lege containerherpositionering",
                bullet1: "Voerde onderzoek uit naar lege containerherpositionering (ECR) in de binnenlandse containerlogistiek van Zweden, met focus op economische en milieueffecten van droge havens en triangulatievervoer.",
                bullet2: "Bouwde drie <strong><u>agent-gebaseerde discrete event simulatiemodellen</u></strong> met AnyLogic met echte operationele gegevens: (1) met droge haven, (2) zonder droge haven, (3) met droge haven plus triangulatie. Simuleerde containerstromen, kosten en CO₂-emissies om efficiëntie en duurzaamheid te evalueren.",
                bullet3: "Resultaten toonden aan dat droge havens de transportkosten met <strong><u>66,36%</u></strong> en emissies met <strong><u>78,86%</u></strong> verminderden; triangulatie verminderde de kosten verder met <strong><u>25,12%</u></strong> en emissies met <strong><u>7,85%</u></strong>."
            },
            photography: {
                title: "Full-Stack Serverless Fotografie Portfolio Website",
                description: "Als een van mijn passies wilde ik altijd al een persoonlijke website voor fotografie maken, en nu is het voltooid. Deze website is meer dan alleen een statische galerij — het is een interactief, cloud-aangedreven platform dat mijn foto's toont terwijl het mijn end-to-end full-stack ontwikkelingsvaardigheden demonstreert.",
                bullet1: "<strong><u>🎨 Frontend</u></strong><br>Ik ontwierp en implementeerde een volledig responsieve, moderne webapplicatie met HTML5 | CSS3 | JavaScript ES6+, met de volgende functies:<br>1. Interactieve Fotogalerij met vloeiende animaties, lazy loading en intuïtieve navigatie<br>2. 360° Sferisch Panoramisch Uitzicht met Pannellum.js voor meeslepende ervaringen<br>3. Fotobewertingssysteem met 5-sterrenbeoordelingen en cloudsynchronisatie<br>4. Leaflet.js Kaartintegratie met geografische voetafdrukken en jaar-gebaseerde filtering<br>5. Slimme Afbeeldingsverwerking met automatische WebP-conversie en thumbnail-generatie<br>6. Gebruikersengagement Tools inclusief e-mailabonnement en social media-integratie",
                bullet2: "<strong><u>⚙️ Backend (Serverless op AWS)</u></strong><br>Gebouwd een zeer schaalbare, kosteneffectieve serverloze architectuur op AWS:<br>1. Amazon API Gateway — RESTful API-endpoints met CORS-configuratie en request-validatie<br>2. AWS Lambda (Python) — Bedrijfslogica inclusief: Galerij- en fotobeheer met CRUD-operaties; Geavanceerde beeldverwerking met Pillow-bibliotheek; Directe S3-uploads met vooraf ondertekende URLs (omzeilt 10MB API Gateway-limiet); Fotobewertingssysteem met apparaat-gebaseerde gebruikersidentificatie, etc<br>3. Amazon S3 — Geoptimaliseerde fotolagering met WebP-formaat en intelligente tiering<br>4. Amazon DynamoDB — Drie-tabel NoSQL-architectuur voor galerijen, foto's en beoordelingen<br>5. AWS Lambda Layers — Vooraf gebouwde lagen voor Pillow en requests-bibliotheken<br>6. Prestatie-optimalisatie: WebP-formaat conversie (95% kwaliteit originelen, 40% thumbnails); Parallelle fotobewerking en uploads; Automatische thumbnail-generatie met slimme dimensies; Metadata-synchronisatie tussen S3 en DynamoDB"
            }
        },
        // Interest Section
        interest: {
            title: "Interesses & Hobby's",
            traveling: {
                title: "Reizen",
                description: "De essentie van mijn liefde voor reizen ligt in een diepe nieuwsgierigheid en passie voor de wereld. Het ervaren van diverse natuurlijke landschappen, leren over verschillende levensstijlen en lokale culturen doet me voelen dat de wereld werkelijk wonderbaarlijk, authentiek en vol leven is."
            },
            photography: {
                title: "Fotografie",
                description: "Ik geloof dat alles uiteindelijk vervaagt — niets kan echt worden bewaard behalve herinneringen. Herinneringen zijn de enige dingen die echt en uniek van ons zijn. Daarom hou ik ervan mijn lens te gebruiken om de schoonheid van de wereld vast te leggen, waardoor die herinneringen duidelijker en langer durend worden."
            },
            hiking: {
                title: "Wandelen & Natuur",
                description: "Ik ben iemand die diep van de natuur houdt. In moderne steden, waar we leven omringd door beton en staal, bieden wandelen en kamperen de beste en meest toegankelijke manier om opnieuw verbinding te maken met de natuurlijke wereld."
            },
            reading: {
                title: "Lezen & Leren",
                description: "Lezen en leren delen dezelfde essentie als reizen: beide zijn verkenningen van de wereld gedreven door nieuwsgierigheid. Voor mij is het ware teken van veroudering niet jaren, maar het verliezen van het vermogen om nieuwe kennis te leren, nieuwe ideeën te omarmen en iemands perspectieven te vernieuwen."
            }
        }
    }
};
