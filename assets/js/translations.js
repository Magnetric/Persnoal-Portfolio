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
            description: "<strong><u>Data Scientist/Engineer</u></strong> with <strong><u>4+ years</u></strong> of experience in analytics, business intelligence, and IT solutions. Skilled in transforming complex data into actionable insights across industries including supply chain, logistics, and port operations. Expertise in <strong><u>statistical analysis</u></strong>, <strong><u>data pipelines</u></strong>, <strong><u>modeling</u></strong>, <strong><u>machine learning</u></strong>, and <strong><u>visualization</u></strong>. <span class=\"description-break\"></span>Combining technical proficiency with business acumen, I design scalable solutions that enhance decision-making and deliver measurable impact.",
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
                bullet1: "Improved estimated ready-for-pickup times for freight using historical data analysis.",
                bullet2: "Developed Power BI dashboards to visualize, monitor and track operations at Ports and Terminals, which have been in continuous use for over two years.",
                bullet3: "Applied Causal Impact Analysis to evaluate and confirm the benefits of a pricing model."
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
            tracktrace: {
                title: "Track & Trace Dashboard",
                description: "Under the demand of manager, I independently designed and developed a Power BI dashboard to monitor port operations and efficiency at multiple granularities (daily, weekly, monthly). Led the full development cycle, including <strong><u>data extraction via SQL</u></strong>, <strong><u>data cleaning with Python/Power Query</u></strong>, and <strong><u>data modeling/visualization in Power BI</u></strong>. Engaged stakeholders to refine requirements and iteratively improved the solution based on feedback. Deployed the dashboard to production, creating the first centralized tool for port performance monitoring.<br> <br>The dashboard has been actively used for <strong><u>over 1.5 years</u></strong>, delivering significant value by enhancing operational visibility and decision-making."
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
                description: "Independently built a <strong><u>AWS-cloud-powered photography website</u></strong> from scratch, combining personal passion with full-stack development practice to showcase both creative work and technical skills.",
                bullet1: "Frontend: Designed and deployed a fully responsive website using <strong><u>HTML5</u></strong>, <strong><u>CSS3</u></strong>, and <strong><u>JavaScript</u></strong>, featuring interactive galleries, animations, map integration, and 360° panoramic view.",
                bullet2: "Backend: Built a serverless architecture on AWS including <strong><u>API Gateway (REST APIs)</u></strong>, <strong><u>AWS Lambda (Python)</u></strong>, S3 (storage), DynamoDB (NoSQL DB), and SES (automated emails).",
                bullet3: "Implemented photo processing pipeline with automatic compression, WebP conversion, and thumbnail generation to optimize performance and user experience."
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
            description: "<strong><u>数据科学家/工程师</u></strong>，拥有<strong><u>4年以上</u></strong>分析、商业智能和IT解决方案经验。擅长将复杂数据转化为可操作的见解，涵盖供应链、物流和港口运营等行业。在<strong><u>统计分析</u></strong>、<strong><u>数据管道</u></strong>、<strong><u>建模</u></strong>、<strong><u>机器学习</u></strong>和<strong><u>可视化</u></strong>方面具有专业知识。<span class=\"description-break\"></span>结合技术熟练度和商业敏锐度，我设计可扩展的解决方案，增强决策能力并带来可衡量的影响。",
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
                bullet1: "使用历史数据分析改进了货运的预计提货时间。",
                bullet2: "开发了Power BI仪表板来可视化、监控和跟踪港口和码头的运营，已持续使用超过两年。",
                bullet3: "应用因果影响分析来评估和确认定价模型的效益。"
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
            tracktrace: {
                title: "跟踪与追踪仪表板",
                description: "在经理的需求下，我独立设计并开发了一个Power BI仪表板，用于监控港口运营和效率，支持多个粒度级别（日、周、月）。主导了完整的开发周期，包括<strong><u>通过SQL进行数据提取</u></strong>、<strong><u>使用Python/Power Query进行数据清洗</u></strong>，以及<strong><u>在Power BI中进行数据建模/可视化</u></strong>。与利益相关者合作完善需求，并根据反馈迭代改进解决方案。将仪表板部署到生产环境，创建了首个港口性能监控的集中化工具。<br> <br>该仪表板已持续使用<strong><u>超过1.5年</u></strong>，通过增强运营可视性和决策能力带来显著价值。"
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
                description: "独立构建了一个<strong><u>AWS云驱动的摄影网站</u></strong>，从零开始，结合个人热情和全栈开发实践，展示创意作品和技术技能。",
                bullet1: "前端：设计并部署了一个完全响应式的网站，使用<strong><u>HTML5</u></strong>、<strong><u>CSS3</u></strong>和<strong><u>JavaScript</u></strong>，具有交互式画廊、动画、地图集成和360°全景视图功能。",
                bullet2: "后端：在AWS上构建了无服务器架构，包括<strong><u>API Gateway（REST API）</u></strong>、<strong><u>AWS Lambda（Python）</u></strong>、S3（存储）、DynamoDB（NoSQL数据库）和SES（自动邮件）。",
                bullet3: "实现了照片处理管道，具有自动压缩、WebP转换和缩略图生成功能，以优化性能和用户体验。"
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
            description: "<strong><u>Data Scientist/Engineer</u></strong> med <strong><u>4+ års</u></strong> erfarenhet inom analys, business intelligence och IT-lösningar. Skicklig på att omvandla komplex data till handlingsbara insikter över branscher inklusive supply chain, logistik och hamnoperationer. Expertis inom <strong><u>statistisk analys</u></strong>, <strong><u>datapipelines</u></strong>, <strong><u>modellering</u></strong>, <strong><u>maskininlärning</u></strong> och <strong><u>visualisering</u></strong>. <span class=\"description-break\"></span>Genom att kombinera teknisk skicklighet med affärsmässighet designar jag skalbara lösningar som förbättrar beslutsfattande och levererar mätbar påverkan.",
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
                bullet1: "Förbättrade beräknade ready-for-pickup tider för frakt genom historisk dataanalys.",
                bullet2: "Utvecklade Power BI-dashboard för att visualisera, övervaka och spåra operationer vid hamnar och terminaler, som har använts kontinuerligt i över två år.",
                bullet3: "Tillämpade Causal Impact Analysis för att utvärdera och bekräfta fördelarna med en prismodell."
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
                description: "Byggde självständigt en <strong><u>AWS-molnbaserad fotografiwebbplats</u></strong> från grunden, kombinerade personlig passion med fullstack-utvecklingspraxis för att visa både kreativt arbete och tekniska färdigheter.",
                bullet1: "Frontend: Designade och distribuerade en helt responsiv webbplats med <strong><u>HTML5</u></strong>, <strong><u>CSS3</u></strong> och <strong><u>JavaScript</u></strong>, med interaktiva gallerier, animationer, kartintegration och 360° panoramavy.",
                bullet2: "Backend: Byggde en serverless-arkitektur på AWS inklusive <strong><u>API Gateway (REST API:er)</u></strong>, <strong><u>AWS Lambda (Python)</u></strong>, S3 (lagring), DynamoDB (NoSQL DB) och SES (automatiserade e-postmeddelanden).",
                bullet3: "Implementerade en fotobearbetningspipeline med automatisk komprimering, WebP-konvertering och miniatyrgenerering för att optimera prestanda och användarupplevelse."
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
            description: "<strong><u>Data Scientist/Engineer</u></strong> mit <strong><u>4+ Jahren</u></strong> Erfahrung in Analyse, Business Intelligence und IT-Lösungen. Geschickt in der Transformation komplexer Daten in umsetzbare Erkenntnisse über Branchen hinweg, einschließlich Supply Chain, Logistik und Hafenoperationen. Expertise in <strong><u>statistischer Analyse</u></strong>, <strong><u>Datenpipelines</u></strong>, <strong><u>Modellierung</u></strong>, <strong><u>Maschinellem Lernen</u></strong> und <strong><u>Visualisierung</u></strong>. <span class=\"description-break\"></span>Durch die Kombination von technischer Kompetenz mit Geschäftsverständnis entwickle ich skalierbare Lösungen, die die Entscheidungsfindung verbessern und messbare Auswirkungen erzielen.",
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
                bullet1: "Verbesserte geschätzte Abholzeiten für Fracht durch historische Datenanalyse.",
                bullet2: "Entwickelte Power BI-Dashboards zur Visualisierung, Überwachung und Verfolgung von Operationen in Häfen und Terminals, die seit über zwei Jahren kontinuierlich genutzt werden.",
                bullet3: "Wendete Causal Impact Analysis an, um die Vorteile eines Preismodells zu bewerten und zu bestätigen."
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
                description: "Baute eigenständig eine <strong><u>AWS-Cloud-gestützte Fotografie-Website</u></strong> von Grund auf, kombinierte persönliche Leidenschaft mit Full-Stack-Entwicklungspraxis, um sowohl kreative Arbeit als auch technische Fähigkeiten zu präsentieren.",
                bullet1: "Frontend: Entwarf und deployte eine vollständig responsive Website mit <strong><u>HTML5</u></strong>, <strong><u>CSS3</u></strong> und <strong><u>JavaScript</u></strong>, mit interaktiven Galerien, Animationen, Kartenintegration und 360°-Panoramablick.",
                bullet2: "Backend: Erstellte eine serverlose Architektur auf AWS einschließlich <strong><u>API Gateway (REST APIs)</u></strong>, <strong><u>AWS Lambda (Python)</u></strong>, S3 (Speicher), DynamoDB (NoSQL DB) und SES (automatisierte E-Mails).",
                bullet3: "Implementierte eine Fotobearbeitungspipeline mit automatischer Komprimierung, WebP-Konvertierung und Thumbnail-Generierung zur Optimierung von Leistung und Benutzererfahrung."
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
            description: "<strong><u>Data Scientist/Engineer</u></strong> met <strong><u>4+ jaar</u></strong> ervaring in analyse, business intelligence en IT-oplossingen. Bedreven in het transformeren van complexe data naar uitvoerbare inzichten over industrieën heen, inclusief supply chain, logistiek en havenoperaties. Expertise in <strong><u>statistische analyse</u></strong>, <strong><u>datapijplijnen</u></strong>, <strong><u>modellering</u></strong>, <strong><u>machine learning</u></strong> en <strong><u>visualisatie</u></strong>. <span class=\"description-break\"></span>Door technische vaardigheid te combineren met zakelijk inzicht, ontwerp ik schaalbare oplossingen die besluitvorming verbeteren en meetbare impact leveren.",
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
                bullet1: "Verbeterde geschatte ready-for-pickup tijden voor vracht door historische data-analyse.",
                bullet2: "Ontwikkelde Power BI-dashboards om operaties in havens en terminals te visualiseren, monitoren en volgen, die al meer dan twee jaar continu in gebruik zijn.",
                bullet3: "Toegepaste Causal Impact Analysis om de voordelen van een prijsmodel te evalueren en bevestigen."
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
                description: "Bouwde onafhankelijk een <strong><u>AWS-cloud-aangedreven fotografiewebsite</u></strong> vanaf nul, combineerde persoonlijke passie met full-stack ontwikkelingspraktijk om zowel creatief werk als technische vaardigheden te tonen.",
                bullet1: "Frontend: Ontworpen en gedeployed een volledig responsieve website met <strong><u>HTML5</u></strong>, <strong><u>CSS3</u></strong> en <strong><u>JavaScript</u></strong>, met interactieve galerijen, animaties, kaartintegratie en 360° panoramisch uitzicht.",
                bullet2: "Backend: Gebouwd een serverloze architectuur op AWS inclusief <strong><u>API Gateway (REST APIs)</u></strong>, <strong><u>AWS Lambda (Python)</u></strong>, S3 (opslag), DynamoDB (NoSQL DB) en SES (geautomatiseerde e-mails).",
                bullet3: "Geïmplementeerd een fotobewerkingspijplijn met automatische compressie, WebP-conversie en thumbnail-generatie om prestaties en gebruikerservaring te optimaliseren."
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
