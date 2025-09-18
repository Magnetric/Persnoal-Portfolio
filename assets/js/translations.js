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
                bullet3: "<strong><u>3. Unloading Duration Optimization</u></strong><br><strong>3.1 Deck and Subsection</strong><br>• Current deck-level grouping is too coarse; unloading times vary within a deck.<br>• Further divide decks into ~6 subsections (front/middle/rear × left/right).<br>• Smaller variance within subsections improves Estimated RPT accuracy.<br>• While zone-level averages provide a baseline, unloading times need also be adjusted for the vessel's time of arrival, which significantly impacts the unloading time.<br><br><strong>3.2 Subsection Trade-off</strong><br>• Too large → high variance, low accuracy.<br>• Too small → sparse data, risk of overfitting, higher operational complexity.<br>• Optimal size determined through analysis and simulation.",
                bullet4: "<strong><u>4. Accuracy vs. Effectiveness</u></strong><br>Estimated RPT is an interval, Real RPT a time point. Accuracy means the Real RPT falls within the interval. Expanding the interval improves accuracy but reduces prediction effectiveness. Different ports adopt tailored accuracy targets and interval widths."
            },
            tracktrace: {
                title: "Power BI-Based Port Operations Monitoring System",
                description: "At the request of management, I designed and developed a Power BI Operations Monitoring System to provide multi-dimensional analysis of port efficiency (daily, weekly, monthly, as well as vessel-level and port-level granularities). This was the department's first centralized performance monitoring tool, enabling data-driven and real-time operational management. The dashboard later served as the foundation for multiple spin-off projects that further improved port efficiency.",
                keycontributions: "Key Contributions and Technical Details:",
                bullet1: "<strong><u>Data Integration & Extraction:</u></strong><br>• Wrote complex SQL queries to extract vessel arrival/departure, loading/unloading, gate operations, and trailer movement data.<br>• Built automated ETL pipelines using Python scripts and Power Query for bulk data ingestion, cleaning, and transformation. Tasks included filling missing timestamps, validating voyage IN/OUT sequences, deduplication, and outlier handling.<br>• Applied Python for advanced ETL logic, such as irregular timestamp conversion and batch correction of abnormal voyages.",
                bullet2: "<strong><u>Data Modeling:</u></strong><br>• Designed a star schema in Power BI, separating fact tables (shipping operations, port activities) from dimension tables (vessel, port, date, weekday).<br>• Created key DAX measures, including unloading/loading efficiency, average port turnaround time (PT), and gate exit rate.",
                bullet3: "<strong><u>Visualization & Analytics:</u></strong><br>• Sailing Level Report: monitored unloading/loading ratios and time consumption for individual voyages.<br>• Port Level Report: aggregated efficiency at the port level, with time-series comparisons and trend analysis.<br>• Trend Charts: visualized efficiency changes over time, supporting anomaly detection and KPI monitoring.<br>• Delivered interactive slicers (by vessel, port, date) to support flexible, ad-hoc analysis by operations teams.",
                bullet4: "<strong><u>Deployment & Optimization:</u></strong><br>• Deployed to Power BI Service with scheduled auto-refresh (twice daily).<br>• Reduced data refresh time by ~40% through SQL pre-aggregation and Power Query optimization.<br>• Built a usage monitoring report to track user adoption and continuously improve functionality.",
                bullet5: "<strong><u>Impact:</u></strong><br>• System has been running reliably for over 2 years, becoming the department's core operational tool.<br>• Significantly improved operational visibility and decision-making efficiency compared to fragmented legacy reports.<br>• Enabled effective monitoring of loading/unloading efficiency and gate processes, uncovering multiple issues that led to follow-up optimization projects."
            },
            thesis: {
                title: "Master's Thesis – Economic and Environmental Impacts of Dry Ports and Triangulation Transport on the Empty Container Repositioning Problem",
                description: "This thesis focused on the Empty Container Repositioning (ECR) problem within Sweden's inland container transport network, assessing the economic and environmental impacts of introducing dry ports and adopting triangulation transport strategies. Using the case of Gothenburg Port and Eskilstuna Dry Port, the study developed an agent-based discrete-event simulation model in AnyLogic to compare multiple scenarios with and without dry ports and different repositioning strategies.",
                keycontributions: "Key Contributions & Technical Details",
                bullet1: "<strong><u>Research Design & Data Collection</u></strong><br>• Conducted a systematic literature review covering container logistics, ECR strategies, and intermodal transport.<br>• Collected case data from importers/exporters and calibrated it against historical transport records.<br>• Defined key variables including container flows, transport costs, and CO₂ emission factors (train vs. truck).",
                bullet2: "<strong><u>Simulation Modeling</u></strong><br>• Built four scenarios in AnyLogic:<br>&nbsp;&nbsp;&nbsp;◦ With Dry Port: Introduces a dry port as an inland consolidation node to relieve seaport congestion and optimize ECR.<br>&nbsp;&nbsp;&nbsp;◦ Without Dry Port: Baseline case where all containers move directly between the seaport and customers without inland terminals.<br>&nbsp;&nbsp;&nbsp;◦ With Dry Port + Triangulation: Uses triangulation strategies under the dry port model, assigning import containers directly to export shipments to reduce empty repositioning.<br>&nbsp;&nbsp;&nbsp;◦ With Dry Port + Street-turn: Applies a street-turn strategy under the dry port model, where import containers are reused immediately by exporters, minimizing storage and repositioning needs.<br>• Combined Agent-Based Modeling (ABM) for network actors (shipping lines, ports, customers) with Discrete-Event Simulation (DES) for facility-level operations.<br>• Incorporated stochastic parameters (e.g., demand fluctuations, transport time variability) to improve realism.",
                bullet3: "<strong><u>Analysis & Results</u></strong><br>• Introducing a dry port reduced inland transport costs by ~62–66% and CO₂ emissions by ~71–79%.<br>• Adding triangulation strategies provided further reductions (~25–27% in costs, ~7–10% in emissions) and significantly decreased the share of empty container movements.<br>• The street-turn strategy also produced benefits but was less effective than triangulation.",
                bullet4: "<strong><u>Impact</u></strong><br>• Demonstrated the strategic value of dry ports in lowering inland transport costs and emissions.<br>• Provided quantitative insights for sustainable intermodal transport planning in Sweden.<br>• Advanced simulation methodology by combining ABM and DES with stochastic variables, improving both realism and applicability in logistics research."
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
                bullet3: "<strong><u>3. 卸货时长优化</u></strong><br><strong>3.1 甲板与子分区</strong><br>• 当前甲板级分组过于粗糙；同一甲板内卸货时间存在差异。<br>• 进一步将甲板划分为约6个子分区（前/中/后 × 左/右）。<br>• 子分区内较小方差提高Estimated RPT准确性。<br>• 虽然区域级平均值提供了基准，但卸货时间还需要根据船舶到港时间进行调整，这对卸货时间有显著影响。<br><br><strong>3.2 子分区权衡</strong><br>• 过大 → 高方差，低准确性。<br>• 过小 → 数据稀疏，过拟合风险，操作复杂性增加。<br>• 通过分析和仿真确定最优尺寸。",
                bullet4: "<strong><u>4. 准确性与有效性</u></strong><br>Estimated RPT是区间，Real RPT是时间点。准确性意味着Real RPT落在区间内。扩大区间提高准确性但降低预测有效性。不同港口采用定制化的准确性目标和区间宽度。"
            },
            tracktrace: {
                title: "基于Power BI的港口运营监控系统",
                description: "应管理层要求，我设计并开发了一个Power BI运营监控系统，提供港口效率的多维度分析（日、周、月，以及船舶级和港口级粒度）。这是部门首个集中化性能监控工具，实现了数据驱动和实时运营管理。该仪表板后来成为多个衍生项目的基础，进一步改善了港口效率。",
                keycontributions: "关键贡献和技术细节：",
                bullet1: "<strong><u>数据集成与提取：</u></strong><br>• 编写复杂的SQL查询来提取船舶到达/离开、装卸、闸门操作和拖车移动数据。<br>• 使用Python脚本和Power Query构建自动化ETL管道，用于批量数据摄取、清洗和转换。任务包括填充缺失时间戳、验证航次进出序列、去重和异常值处理。<br>• 应用Python进行高级ETL逻辑，如不规则时间戳转换和异常航次的批量修正。",
                bullet2: "<strong><u>数据建模：</u></strong><br>• 在Power BI中设计星型模式，将事实表（航运运营、港口活动）与维度表（船舶、港口、日期、星期）分离。<br>• 创建关键DAX度量，包括装卸效率、平均港口周转时间（PT）和闸门出口率。",
                bullet3: "<strong><u>可视化与分析：</u></strong><br>• 航行级报告：监控单个航次的装卸比例和时间消耗。<br>• 港口级报告：在港口级别汇总效率，包括时间序列比较和趋势分析。<br>• 趋势图表：可视化效率随时间的变化，支持异常检测和KPI监控。<br>• 提供交互式切片器（按船舶、港口、日期），支持运营团队的灵活、临时分析。",
                bullet4: "<strong><u>部署与优化：</u></strong><br>• 部署到Power BI Service，安排自动刷新（每日两次）。<br>• 通过SQL预聚合和Power Query优化，将数据刷新时间减少约40%。<br>• 构建使用监控报告，跟踪用户采用情况并持续改进功能。",
                bullet5: "<strong><u>影响：</u></strong><br>• 系统已可靠运行超过2年，成为部门核心运营工具。<br>• 与分散的传统报告相比，显著改善了运营可视性和决策效率。<br>• 实现了装卸效率和闸门流程的有效监控，发现了多个问题，导致后续优化项目。"
            },
            thesis: {
                title: "硕士论文 – 干港和三角运输对空集装箱重新定位问题的经济和环境影响",
                description: "本论文专注于瑞典内陆集装箱运输网络中的空集装箱重新定位（ECR）问题，评估引入干港和采用三角运输策略的经济和环境影响。以哥德堡港和埃斯基尔斯图纳干港为案例，研究开发了一个基于代理的离散事件仿真模型，使用AnyLogic比较有和没有干港以及不同重新定位策略的多种情景。",
                keycontributions: "关键贡献与技术细节",
                bullet1: "<strong><u>研究设计与数据收集</u></strong><br>• 进行了系统性文献综述，涵盖集装箱物流、ECR策略和多式联运。<br>• 从进出口商收集案例数据，并根据历史运输记录进行校准。<br>• 定义了关键变量，包括集装箱流量、运输成本和CO₂排放因子（火车与卡车）。",
                bullet2: "<strong><u>仿真建模</u></strong><br>• 在AnyLogic中构建了四种情景：<br>&nbsp;&nbsp;&nbsp;◦ 有干港：引入干港作为内陆整合节点，缓解海港拥堵并优化ECR。<br>&nbsp;&nbsp;&nbsp;◦ 无干港：基准案例，所有集装箱在海港和客户之间直接移动，无内陆终端。<br>&nbsp;&nbsp;&nbsp;◦ 有干港+三角运输：在干港模型下使用三角运输策略，将进口集装箱直接分配给出口运输以减少空集装箱重新定位。<br>&nbsp;&nbsp;&nbsp;◦ 有干港+街转：在干港模型下应用街转策略，进口集装箱立即被出口商重复使用，最小化存储和重新定位需求。<br>• 将网络参与者（航运公司、港口、客户）的基于代理建模（ABM）与设施级操作的离散事件仿真（DES）相结合。<br>• 纳入随机参数（如需求波动、运输时间变异性）以提高真实性。",
                bullet3: "<strong><u>分析与结果</u></strong><br>• 引入干港将内陆运输成本降低约62-66%，CO₂排放降低约71-79%。<br>• 添加三角运输策略提供了进一步减少（成本约25-27%，排放约7-10%），并显著减少了空集装箱移动的比例。<br>• 街转策略也产生了效益，但效果不如三角运输。",
                bullet4: "<strong><u>影响</u></strong><br>• 证明了干港在降低内陆运输成本和排放方面的战略价值。<br>• 为瑞典可持续多式联运规划提供了量化洞察。<br>• 通过将ABM和DES与随机变量相结合，推进了仿真方法论，提高了物流研究的真实性和适用性。"
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
                bullet3: "<strong><u>3. Lossningstidsoptimering</u></strong><br><strong>3.1 Däck och underavdelning</strong><br>• Nuvarande däcknivågruppering är för grov; lossningstider varierar inom ett däck.<br>• Dela upp däck ytterligare i ~6 underavdelningar (fram/mitten/bak × vänster/höger).<br>• Mindre variation inom underavdelningar förbättrar Estimated RPT-noggrannhet.<br>• Även om zonnivågenomsnitt ger en baslinje, behöver lossningstiderna också justeras för fartygets ankomsttid, vilket påverkar lossningstiden avsevärt.<br><br><strong>3.2 Underavdelningskompromiss</strong><br>• För stor → hög variation, låg noggrannhet.<br>• För liten → gles data, risk för överanpassning, högre operativ komplexitet.<br>• Optimal storlek bestäms genom analys och simulering.",
                bullet4: "<strong><u>4. Noggrannhet vs. Effektivitet</u></strong><br>Estimated RPT är ett intervall, Real RPT en tidpunkt. Noggrannhet innebär att Real RPT faller inom intervallet. Utvidgning av intervallet förbättrar noggrannhet men minskar prediktions-effektiviteten. Olika hamnar antar skräddarsydda noggrannhetsmål och intervallbredder."
            },
            tracktrace: {
                title: "Power BI-baserat Hamnoperationsövervakningssystem",
                description: "På begäran av ledningen designade och utvecklade jag ett Power BI Operations Monitoring System för att tillhandahålla flerdimensionell analys av hamneffektivitet (daglig, veckovis, månadsvis, samt fartygsnivå och hamnnivå granularitet). Detta var avdelningens första centraliserade prestandaövervakningsverktyg, vilket möjliggjorde datadriven och realtidsoperativ förvaltning. Dashboarden fungerade senare som grund för flera spinoff-projekt som ytterligare förbättrade hamneffektiviteten.",
                keycontributions: "Nyckelbidrag och tekniska detaljer:",
                bullet1: "<strong><u>Dataintegration & Extraktion:</u></strong><br>• Skrev komplexa SQL-frågor för att extrahera fartygsankomst/avgång, lastning/lossning, portoperationer och släpvagnsdata.<br>• Byggde automatiserade ETL-pipelines med Python-skript och Power Query för bulkdataingång, rengöring och transformation. Uppgifter inkluderade att fylla i saknade tidsstämplar, validera resa IN/UT-sekvenser, deduplicering och outlier-hantering.<br>• Applicerade Python för avancerad ETL-logik, såsom oregelbunden tidsstämpelkonvertering och batchkorrigering av abnormala resor.",
                bullet2: "<strong><u>Datamodellering:</u></strong><br>• Designade en stjärnschema i Power BI, separerade fakttabeller (sjöfartsoperationer, hamnaktiviteter) från dimensionstabeller (fartyg, hamn, datum, veckodag).<br>• Skapade nyckelmått i DAX, inklusive lossnings/lastningseffektivitet, genomsnittlig hamnomloppstid (PT) och portexitrate.",
                bullet3: "<strong><u>Visualisering & Analys:</u></strong><br>• Sailing Level Report: övervakade lossnings/lastningsförhållanden och tidsförbrukning för individuella resor.<br>• Port Level Report: aggregerade effektivitet på hamnnivå, med tidsseriejämförelser och trendanalys.<br>• Trenddiagram: visualiserade effektivitetsförändringar över tid, stödde anomalidetektering och KPI-övervakning.<br>• Levererade interaktiva slicers (efter fartyg, hamn, datum) för att stödja flexibel, ad-hoc-analys av operationsteam.",
                bullet4: "<strong><u>Distribution & Optimering:</u></strong><br>• Distribuerade till Power BI Service med schemalagd auto-uppdatering (två gånger dagligen).<br>• Reducerade datauppdateringstid med ~40% genom SQL-pre-aggregation och Power Query-optimering.<br>• Byggde en användningsövervakningsrapport för att spåra användaradoption och kontinuerligt förbättra funktionalitet.",
                bullet5: "<strong><u>Påverkan:</u></strong><br>• Systemet har kört tillförlitligt i över 2 år och blivit avdelningens kärnoperativa verktyg.<br>• Förbättrade avsevärt operativ synlighet och beslutsfattandeeffektivitet jämfört med fragmenterade äldre rapporter.<br>• Möjliggjorde effektiv övervakning av lastnings/lossningseffektivitet och portprocesser, upptäckte flera problem som ledde till uppföljande optimeringsprojekt."
            },
            thesis: {
                title: "Masteruppsats – Ekonomiska och miljömässiga effekter av torrhamnar och trianguleringstransport på problemet med ompositionering av tomma containrar",
                description: "Denna uppsats fokuserade på problemet med ompositionering av tomma containrar (ECR) inom Sveriges inlandskontainertransportnätverk, bedömande av de ekonomiska och miljömässiga effekterna av att introducera torrhamnar och anta trianguleringstransportstrategier. Med fallet Göteborgs hamn och Eskilstuna torrhamn utvecklade studien en agentbaserad diskret händelsesimuleringsmodell i AnyLogic för att jämföra flera scenarier med och utan torrhamnar och olika ompositioneringsstrategier.",
                keycontributions: "Nyckelbidrag och tekniska detaljer",
                bullet1: "<strong><u>Forskningsdesign & Datainsamling</u></strong><br>• Genomförde en systematisk litteraturgenomgång som täcker containerlogistik, ECR-strategier och intermodal transport.<br>• Samlade fallstudiedata från importörer/exportörer och kalibrerade det mot historiska transportregister.<br>• Definierade nyckelvariabler inklusive containerflöden, transportkostnader och CO₂-utsläppsfaktorer (tåg vs lastbil).",
                bullet2: "<strong><u>Simuleringsmodellering</u></strong><br>• Byggde fyra scenarier i AnyLogic:<br>&nbsp;&nbsp;&nbsp;◦ Med torrhamn: Introducerar en torrhamn som en inlandskonsolideringsnod för att lindra hamnkongestion och optimera ECR.<br>&nbsp;&nbsp;&nbsp;◦ Utan torrhamn: Baslinjefall där alla containrar rör sig direkt mellan hamnen och kunder utan inlandsterminaler.<br>&nbsp;&nbsp;&nbsp;◦ Med torrhamn + Triangulering: Använder trianguleringsstrategier under torrhamnmodellen, tilldelar importcontainrar direkt till exportförsändelser för att minska tom ompositionering.<br>&nbsp;&nbsp;&nbsp;◦ Med torrhamn + Street-turn: Tillämpar en street-turn-strategi under torrhamnmodellen, där importcontainrar omedelbart återanvänds av exportörer, minimerar lagring och ompositioneringsbehov.<br>• Kombinerade Agentbaserad modellering (ABM) för nätverksaktörer (rederier, hamnar, kunder) med diskret händelsesimulering (DES) för anläggningsnivåoperationer.<br>• Inkorporerade stokastiska parametrar (t.ex. efterfrågefluktuationer, transporttidsvariabilitet) för att förbättra realism.",
                bullet3: "<strong><u>Analys & Resultat</u></strong><br>• Introduktion av en torrhamn minskade inlandstransportkostnader med ~62–66% och CO₂-utsläpp med ~71–79%.<br>• Tillägg av trianguleringsstrategier gav ytterligare minskningar (~25–27% i kostnader, ~7–10% i utsläpp) och minskade avsevärt andelen av tomma containerrörelser.<br>• Street-turn-strategin producerade också fördelar men var mindre effektiv än triangulering.",
                bullet4: "<strong><u>Påverkan</u></strong><br>• Demonstrerade det strategiska värdet av torrhamnar för att sänka inlandstransportkostnader och utsläpp.<br>• Tillhandahöll kvantitativa insikter för hållbar intermodal transportplanering i Sverige.<br>• Förbättrade simuleringsmetodik genom att kombinera ABM och DES med stokastiska variabler, förbättrande både realism och tillämplighet inom logistikforskning."
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
                bullet3: "<strong><u>3. Entladezeit-Optimierung</u></strong><br><strong>3.1 Deck und Unterteilung</strong><br>• Aktuelle Deck-Level-Gruppierung ist zu grob; Entladezeiten variieren innerhalb eines Decks.<br>• Weitere Aufteilung der Decks in ~6 Unterteilungen (vorne/mitte/hinten × links/rechts).<br>• Kleinere Varianz innerhalb der Unterteilungen verbessert die Estimated RPT-Genauigkeit.<br>• Während Zonen-Level-Durchschnitte eine Grundlinie bieten, müssen Entladezeiten auch für die Ankunftszeit des Schiffes angepasst werden, was die Entladezeit erheblich beeinflusst.<br><br><strong>3.2 Unterteilungs-Kompromiss</strong><br>• Zu groß → hohe Varianz, niedrige Genauigkeit.<br>• Zu klein → spärliche Daten, Überanpassungsrisiko, höhere operative Komplexität.<br>• Optimale Größe durch Analyse und Simulation bestimmt.",
                bullet4: "<strong><u>4. Genauigkeit vs. Effektivität</u></strong><br>Estimated RPT ist ein Intervall, Real RPT ein Zeitpunkt. Genauigkeit bedeutet, dass Real RPT innerhalb des Intervalls liegt. Erweiterung des Intervalls verbessert die Genauigkeit, reduziert aber die Vorhersageeffektivität. Verschiedene Häfen übernehmen maßgeschneiderte Genauigkeitsziele und Intervallbreiten."
            },
            tracktrace: {
                title: "Power BI-basiertes Hafenoperationsüberwachungssystem",
                description: "Auf Anforderung des Managements habe ich ein Power BI Operations Monitoring System entwickelt, um mehrdimensionale Analysen der Hafeneffizienz zu liefern (täglich, wöchentlich, monatlich, sowie auf Schiffsebene und Hafenebene). Dies war das erste zentralisierte Leistungsüberwachungstool der Abteilung, das datengetriebenes und echtzeitbetriebliches Management ermöglichte. Das Dashboard diente später als Grundlage für mehrere Spin-off-Projekte, die die Hafeneffizienz weiter verbesserten.",
                keycontributions: "Schlüsselbeiträge und technische Details:",
                bullet1: "<strong><u>Datenintegration & Extraktion:</u></strong><br>• Schrieb komplexe SQL-Abfragen zur Extraktion von Schiffsankunft/-abfahrt, Be-/Entlade-, Toroperationen und Trailer-Bewegungsdaten.<br>• Baute automatisierte ETL-Pipelines mit Python-Skripten und Power Query für Bulk-Datenerfassung, -bereinigung und -transformation. Aufgaben umfassten das Ausfüllen fehlender Zeitstempel, Validierung von Reise IN/OUT-Sequenzen, Deduplizierung und Ausreißerbehandlung.<br>• Wendete Python für erweiterte ETL-Logik an, wie unregelmäßige Zeitstempelkonvertierung und Batch-Korrektur abnormaler Reisen.",
                bullet2: "<strong><u>Datenmodellierung:</u></strong><br>• Entwarf ein Stern-Schema in Power BI, trennte Faktentabellen (Schifffahrtsoperationen, Hafenaktivitäten) von Dimensionstabellen (Schiff, Hafen, Datum, Wochentag).<br>• Erstellte wichtige DAX-Maße, einschließlich Entlade-/Beladeeffizienz, durchschnittliche Hafenumschlagszeit (PT) und Tor-Ausgangsrate.",
                bullet3: "<strong><u>Visualisierung & Analytik:</u></strong><br>• Sailing Level Report: überwachte Entlade-/Beladeverhältnisse und Zeitverbrauch für einzelne Reisen.<br>• Port Level Report: aggregierte Effizienz auf Hafenbene mit Zeitreihenvergleichen und Trendanalysen.<br>• Trenddiagramme: visualisierten Effizienzänderungen über die Zeit, unterstützten Anomalieerkennung und KPI-Überwachung.<br>• Lieferte interaktive Slicer (nach Schiff, Hafen, Datum) zur Unterstützung flexibler, Ad-hoc-Analysen durch Operations-Teams.",
                bullet4: "<strong><u>Bereitstellung & Optimierung:</u></strong><br>• Bereitgestellt auf Power BI Service mit geplanter Auto-Aktualisierung (zweimal täglich).<br>• Reduzierte Datenaktualisierungszeit um ~40% durch SQL-Pre-Aggregation und Power Query-Optimierung.<br>• Erstellte einen Nutzungsüberwachungsbericht zur Verfolgung der Benutzeradoption und kontinuierlichen Verbesserung der Funktionalität.",
                bullet5: "<strong><u>Auswirkung:</u></strong><br>• System läuft seit über 2 Jahren zuverlässig und wurde zum Kern-Operationstool der Abteilung.<br>• Verbesserte erheblich die operative Transparenz und Entscheidungsfindungseffizienz im Vergleich zu fragmentierten Legacy-Berichten.<br>• Ermöglichte effektive Überwachung von Belade-/Entladeeffizienz und Torprozessen, deckte mehrere Probleme auf, die zu Folgeoptimierungsprojekten führten."
            },
            thesis: {
                title: "Masterarbeit – Wirtschaftliche und ökologische Auswirkungen von Trockenhäfen und Triangulationstransport auf das Problem der Leercontainer-Umpositionierung",
                description: "Diese Arbeit konzentrierte sich auf das Problem der Leercontainer-Umpositionierung (ECR) innerhalb Schwedens Binnencontainer-Transportnetzwerk, bewertend die wirtschaftlichen und ökologischen Auswirkungen der Einführung von Trockenhäfen und der Annahme von Triangulationstransportstrategien. Unter Verwendung des Falls Göteborg Hafen und Eskilstuna Trockenhafen entwickelte die Studie ein agentenbasiertes diskretes Ereignissimulationsmodell in AnyLogic, um mehrere Szenarien mit und ohne Trockenhäfen und verschiedenen Umpositionierungsstrategien zu vergleichen.",
                keycontributions: "Schlüsselbeiträge und technische Details",
                bullet1: "<strong><u>Forschungsdesign & Datensammlung</u></strong><br>• Führte eine systematische Literaturübersicht durch, die Containerlogistik, ECR-Strategien und intermodalen Transport abdeckt.<br>• Sammelte Falldaten von Importeuren/Exporteuren und kalibrierte sie gegen historische Transportaufzeichnungen.<br>• Definierte Schlüsselvariablen einschließlich Containerflüssen, Transportkosten und CO₂-Emissionsfaktoren (Zug vs. LKW).",
                bullet2: "<strong><u>Simulationsmodellierung</u></strong><br>• Erstellte vier Szenarien in AnyLogic:<br>&nbsp;&nbsp;&nbsp;◦ Mit Trockenhafen: Führt einen Trockenhafen als Binnenkonsolidierungsknoten ein, um Hafenstauungen zu entlasten und ECR zu optimieren.<br>&nbsp;&nbsp;&nbsp;◦ Ohne Trockenhafen: Basisfall, bei dem alle Container direkt zwischen dem Hafen und Kunden ohne Binnenterminals bewegen.<br>&nbsp;&nbsp;&nbsp;◦ Mit Trockenhafen + Triangulation: Verwendet Triangulationsstrategien unter dem Trockenhafenmodell, ordnet Importcontainer direkt Exportsendungen zu, um leere Umpositionierung zu reduzieren.<br>&nbsp;&nbsp;&nbsp;◦ Mit Trockenhafen + Street-turn: Wendet eine Street-turn-Strategie unter dem Trockenhafenmodell an, bei der Importcontainer sofort von Exporteuren wiederverwendet werden, Lager- und Umpositionierungsbedürfnisse minimierend.<br>• Kombinierte Agentenbasierte Modellierung (ABM) für Netzwerkakteure (Reedereien, Häfen, Kunden) mit diskreter Ereignissimulation (DES) für anlagenspezifische Operationen.<br>• Integrierte stochastische Parameter (z.B. Nachfrageschwankungen, Transportzeitvariabilität), um Realismus zu verbessern.",
                bullet3: "<strong><u>Analyse & Ergebnisse</u></strong><br>• Die Einführung eines Trockenhafens reduzierte Binnentransportkosten um ~62–66% und CO₂-Emissionen um ~71–79%.<br>• Das Hinzufügen von Triangulationsstrategien bot weitere Reduzierungen (~25–27% in Kosten, ~7–10% in Emissionen) und verringerte erheblich den Anteil der Leercontainerbewegungen.<br>• Die Street-turn-Strategie brachte auch Vorteile, war aber weniger effektiv als Triangulation.",
                bullet4: "<strong><u>Auswirkung</u></strong><br>• Demonstrierte den strategischen Wert von Trockenhäfen bei der Senkung von Binnentransportkosten und Emissionen.<br>• Bietet quantitative Erkenntnisse für nachhaltige intermodale Transportplanung in Schweden.<br>• Erweiterte Simulationsmethodik durch Kombination von ABM und DES mit stochastischen Variablen, verbessernd sowohl Realismus als auch Anwendbarkeit in der Logistikforschung."
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
                bullet3: "<strong><u>3. Lossingstijd-optimalisatie</u></strong><br><strong>3.1 Dek en Onderverdeling</strong><br>• Huidige dek-niveau groepering is te grof; lossingstijden variëren binnen een dek.<br>• Verdere verdeling van dekken in ~6 onderverdelingen (voor/midden/achter × links/rechts).<br>• Kleinere variantie binnen onderverdelingen verbetert Estimated RPT-nauwkeurigheid.<br>• Hoewel zone-niveau gemiddelden een basislijn bieden, moeten lossingstijden ook worden aangepast voor de aankomsttijd van het schip, wat de lossingstijd aanzienlijk beïnvloedt.<br><br><strong>3.2 Onderverdeling Trade-off</strong><br>• Te groot → hoge variantie, lage nauwkeurigheid.<br>• Te klein → schaarse data, risico op overfitting, hogere operationele complexiteit.<br>• Optimale grootte bepaald door analyse en simulatie.",
                bullet4: "<strong><u>4. Nauwkeurigheid vs. Effectiviteit</u></strong><br>Estimated RPT is een interval, Real RPT een tijdstip. Nauwkeurigheid betekent dat Real RPT binnen het interval valt. Uitbreiding van het interval verbetert nauwkeurigheid maar vermindert voorspellingseffectiviteit. Verschillende havens nemen op maat gemaakte nauwkeurigheidsdoelen en intervalbreedten aan."
            },
            tracktrace: {
                title: "Power BI-gebaseerd Havenoperationsmonitoringsysteem",
                description: "Op verzoek van het management heb ik een Power BI Operations Monitoring System ontworpen en ontwikkeld om multidimensionale analyse van havenefficiëntie te bieden (dagelijks, wekelijks, maandelijks, evenals scheepsniveau en havenniveau granulariteit). Dit was het eerste gecentraliseerde prestatiemonitoring-tool van de afdeling, waardoor data-gedreven en real-time operationeel beheer mogelijk werd. Het dashboard diende later als basis voor meerdere spin-off projecten die havenefficiëntie verder verbeterden.",
                keycontributions: "Belangrijkste bijdragen en technische details:",
                bullet1: "<strong><u>Dataintegratie & Extractie:</u></strong><br>• Schreef complexe SQL-query's om scheepsankomst/vertrek, laden/lossen, poortoperaties en trailerbewegingsgegevens te extraheren.<br>• Bouwde geautomatiseerde ETL-pijplijnen met Python-scripts en Power Query voor bulkdatainvoer, -reiniging en -transformatie. Taken omvatten het invullen van ontbrekende tijdstempels, valideren van reis IN/UIT-sequenties, deduplicatie en outlierbehandeling.<br>• Paste Python toe voor geavanceerde ETL-logica, zoals onregelmatige tijdstempelconversie en batchcorrectie van abnormale reizen.",
                bullet2: "<strong><u>Datamodellering:</u></strong><br>• Ontwierp een sterrenschema in Power BI, scheidde feitentabellen (scheepvaartoperaties, havenactiviteiten) van dimensietabellen (schip, haven, datum, weekdag).<br>• Creëerde belangrijke DAX-maten, inclusief lossings/ladingsefficiëntie, gemiddelde havenomlooptijd (PT) en poortuitgangspercentage.",
                bullet3: "<strong><u>Visualisatie & Analyse:</u></strong><br>• Sailing Level Report: monitorde lossings/ladingsverhoudingen en tijdsverbruik voor individuele reizen.<br>• Port Level Report: aggregeerde efficiëntie op havenniveau, met tijdreeksvergelijkingen en trendanalyse.<br>• Trendgrafieken: visualiseerde efficiëntieveranderingen over tijd, ondersteunde anomaliedetectie en KPI-monitoring.<br>• Leverde interactieve slicers (per schip, haven, datum) om flexibele, ad-hoc-analyse door operationsteams te ondersteunen.",
                bullet4: "<strong><u>Implementatie & Optimalisatie:</u></strong><br>• Geïmplementeerd naar Power BI Service met geplande automatische vernieuwing (twee keer per dag).<br>• Verminderde gegevensvernieuwingstijd met ~40% door SQL-pre-aggregatie en Power Query-optimalisatie.<br>• Bouwde een gebruiksmonitoringsrapport om gebruikersadoptie bij te houden en functionaliteit continu te verbeteren.",
                bullet5: "<strong><u>Impact:</u></strong><br>• Systeem draait al meer dan 2 jaar betrouwbaar en is het kernoperationele tool van de afdeling geworden.<br>• Verbeterde aanzienlijk operationele zichtbaarheid en besluitvormingsefficiëntie vergeleken met gefragmenteerde legacy-rapporten.<br>• Maakte effectieve monitoring van lading/lossingefficiëntie en poortprocessen mogelijk, onthulde meerdere problemen die leidden tot vervolgoptimalisatieprojecten."
            },
            thesis: {
                title: "Master Thesis – Economische en milieueffecten van droge havens en triangulatievervoer op het probleem van lege containerherpositionering",
                description: "Deze scriptie richtte zich op het probleem van lege containerherpositionering (ECR) binnen het binnenlandse containertransportnetwerk van Zweden, waarbij de economische en milieueffecten van de introductie van droge havens en de adoptie van triangulatievervoerstrategieën werden beoordeeld. Met het geval van Göteborg Haven en Eskilstuna Droge Haven ontwikkelde de studie een agent-gebaseerd discrete event simulatiemodel in AnyLogic om meerdere scenario's met en zonder droge havens en verschillende herpositioneringsstrategieën te vergelijken.",
                keycontributions: "Belangrijkste bijdragen en technische details",
                bullet1: "<strong><u>Onderzoeksdesign & Datacollectie</u></strong><br>• Voerde een systematische literatuurreview uit die containerlogistiek, ECR-strategieën en intermodaal vervoer omvat.<br>• Verzamelde gevalstudiedata van importeurs/exporteurs en kalibreerde deze tegen historische transportrecords.<br>• Definieerde sleutelvariabelen inclusief containerstromen, transportkosten en CO₂-emissiefactoren (trein vs vrachtwagen).",
                bullet2: "<strong><u>Simulatiemodellering</u></strong><br>• Bouwde vier scenario's in AnyLogic:<br>&nbsp;&nbsp;&nbsp;◦ Met Droge Haven: Introduceert een droge haven als binnenlandse consolidatieknoop om zeehavenverstopping te verlichten en ECR te optimaliseren.<br>&nbsp;&nbsp;&nbsp;◦ Zonder Droge Haven: Baseline geval waarbij alle containers direct tussen de zeehaven en klanten bewegen zonder binnenlandse terminals.<br>&nbsp;&nbsp;&nbsp;◦ Met Droge Haven + Triangulatie: Gebruikt triangulatiestrategieën onder het droge havenmodel, wijst importcontainers direct toe aan exportzendingen om lege herpositionering te verminderen.<br>&nbsp;&nbsp;&nbsp;◦ Met Droge Haven + Street-turn: Past een street-turn strategie toe onder het droge havenmodel, waarbij importcontainers onmiddellijk door exporteurs worden hergebruikt, opslag- en herpositioneringsbehoeften minimaliserend.<br>• Combineerde Agent-Gebaseerde Modellering (ABM) voor netwerkactoren (rederijen, havens, klanten) met Discrete Event Simulatie (DES) voor faciliteitsniveau operaties.<br>• Incorporeerde stochastische parameters (bijv. vraagfluctuaties, transporttijdvariabiliteit) om realisme te verbeteren.",
                bullet3: "<strong><u>Analyse & Resultaten</u></strong><br>• Introductie van een droge haven verminderde binnenlandse transportkosten met ~62–66% en CO₂-emissies met ~71–79%.<br>• Toevoeging van triangulatiestrategieën bood verdere reducties (~25–27% in kosten, ~7–10% in emissies) en verminderde aanzienlijk het aandeel van lege containermovements.<br>• De street-turn strategie bracht ook voordelen maar was minder effectief dan triangulatie.",
                bullet4: "<strong><u>Impact</u></strong><br>• Demonstreerde de strategische waarde van droge havens bij het verlagen van binnenlandse transportkosten en emissies.<br>• Bood kwantitatieve inzichten voor duurzame intermodale transportplanning in Zweden.<br>• Bevorderde simulatietmethodologie door ABM en DES te combineren met stochastische variabelen, verbeterend zowel realisme als toepasbaarheid in logistiek onderzoek."
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
