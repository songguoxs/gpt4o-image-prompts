<a id="readme-top"></a>
# Nano Banana(nanobanana)/GPT-5/GPT-4o/豆包 Image Prompts

🎉 欢迎来到 Nano Banana(nanobanana)/GPT-5/GPT‑4o/豆包 图片提示词（Prompts）精选！

🎉 提示词持续更新中。。。

🎉 在线演示地址：https://opennana.com/awesome-prompt-gallery/

## 🆕 项目改造说明
- 新增 `scripts/generate-dataset.js`，可将仓库内的 Markdown 案例自动解析为结构化的 `data/prompts.json` 数据集，包含来源、图片、提示词、示例、备注及自动生成的分类标签。
- 提供全新的前端页面（`index.html` + `assets/`），支持画廊浏览、标签筛选、关键字搜索、案例详情查看以及提示词一键复制。
- 如需更新数据，先维护 Markdown 文件，再运行 `node scripts/generate-dataset.js` 重新生成 JSON，最后通过任意静态服务器打开 `index.html` 即可体验（例如 `python3 -m http.server 8000`）。
- 画廊页面会自动聚合所有标签，可快速组合筛选；点击卡片进入详情，可查看全部示例图、提示词及备注。

## 获取最新提示词？你可以通过这3个渠道。
<div style="width: 98%;">
<table>
  <tr>
    <!-- 左侧文字单元格 -->
    <td style="width: 60%; padding: 2px; vertical-align: middle; border: none;">
      <p>1、微信公众号：松果先森</p>
      <p>2、我的X地址：https://x.com/songguoxiansen</p>
      <p>3、扫一扫，拉你进大群《AI技术学习交流群》</p>
    </td>
    <!-- 右侧图片单元格 -->
    <td>
      <img src="./images/wechat.jpg" style="width: 300px; height: auto; margin: 0;">
    </td>
  </tr>
</table>
</div>

<a id="prompt-toc"></a>
## 📖 案例目录
*   [案例 590：虚构的英语电影海报-回忆之味 ](#prompt-590)
*   [案例 589：卡哇伊波普艺术 ](#prompt-589)
*   [案例 588：金属霓虹手账 ](#prompt-588)
*   [案例 587：iPhone 16 Pro Max拆解 ](#prompt-587)
*   [案例 586：清新蓝色手账 ](#prompt-586)
*   [案例 585：相机拆解 ](#prompt-585)
*   [案例 584：复古动漫幻想 ](#prompt-584)
*   [案例 583：东方武侠史诗海报-剑影红颜 ](#prompt-583)
*   [案例 582：奇幻冒险喜剧海报-寻龙秘境 ](#prompt-582)
*   [案例 581：职业西装风手账 ](#prompt-581)
*   [案例 580：鱼眼镜头下的日本女子比心 ](#prompt-580)
*   [案例 579：年轻女子侧坐在街机凳上 ](#prompt-579)
*   [案例 578：油泼面宫格漫画图 ](#prompt-578)
*   [案例 577：皮克斯风格3D动画场景 ](#prompt-577)
*   [案例 576：皮克斯风格3D动画场景 ](#prompt-576)
*   [案例 575：极繁主义波普艺术图层 ](#prompt-575)
*   [案例 574：掌上游戏机的精美3D渲染图 ](#prompt-574)
*   [案例 573：身着白色针织上衣的阳光女孩 ](#prompt-573)
*   [案例 572：奶油水彩手账 ](#prompt-572)
*   [案例 571：早朝了开个视频会议先 ](#prompt-571)
*   [案例 570：游戏角色试图从电视屏幕爬到客厅 ](#prompt-570)
*   [案例 569：泛黄旧报纸手账 ](#prompt-569)
*   [案例 568：金毛直播 ](#prompt-568)
*   [案例 567：你好地球人 ](#prompt-567)
*   [案例 566：李小龙与尤达大师以武会友 ](#prompt-566)
*   [案例 565：明星合照的幕后花絮 ](#prompt-565)
*   [案例 564：马里奥路易吉给碧奇公主修理厨房 ](#prompt-564)
*   [案例 563：西游记师徒四人组成了一个摇滚乐队 ](#prompt-563)
*   [案例 562：涂鸦记号笔手账 ](#prompt-562)
*   [案例 561：国家一级摆烂许可证 ](#prompt-561)
*   [案例 560：未经他人苦莫劝他人善 ](#prompt-560)
*   [案例 559：月亮不睡我不睡 ](#prompt-559)
*   [案例 558：宇航员坐在弯弯的月亮边钓星星 ](#prompt-558)
*   [案例 557：职业生涯地图图片 ](#prompt-557)
*   [案例 556：女子一只手夸张地伸向镜头 ](#prompt-556)
*   [案例 555：在复仇者大厦跟死侍合个影 ](#prompt-555)
*   [案例 554：粉红色的星之卡吐泡泡 ](#prompt-554)
*   [案例 553：马斯克教爱因斯坦拍照 ](#prompt-553)
*   [案例 552：超现实主义日式水墨画 ](#prompt-552)
*   [案例 551：现代芝加哥河滨清明上河图风格 ](#prompt-551)
*   [案例 550：手绘风格的时尚风格概念分解图 ](#prompt-550)
*   [案例 549：LINE风格半身Q版表情包 ](#prompt-549)
*   [案例 548：仿真绣苏绣表情包 ](#prompt-548)
*   [案例 547：手绘日历插画 ](#prompt-547)
*   [案例 546：把文章变成卡通信息图 ](#prompt-546)
*   [案例 545：将文章变成黑板报 ](#prompt-545)
*   [案例 544：根据所提供的内容制作信息图 ](#prompt-544)
*   [案例 543：城市动态天气卡片 ](#prompt-543)
*   [案例 542：服装设计手稿 ](#prompt-542)
*   [案例 541：高细节的3D信息图海报 ](#prompt-541)
*   [案例 540：物品拆解图 ](#prompt-540)
*   [案例 539：根据歌词生成电影般的图像 ](#prompt-539)
*   [案例 538：创作一个电影分镜脚本 ](#prompt-538)
*   [案例 537：风格学习 ](#prompt-537)
*   [案例 536：食物制作成的超写实3D写实图 ](#prompt-536)
*   [案例 535：将paper转换成教授白板的图片 ](#prompt-535)
*   [案例 534：四季变化信息图 ](#prompt-534)
*   [案例 533：烤面包流程图 ](#prompt-533)
*   [案例 532：Markdown转换为信息图 ](#prompt-532)
*   [案例 531：让人做出Emoji的表情 ](#prompt-531)
*   [案例 530：长平之战信息图 ](#prompt-530)
*   [案例 529：识字小报元提示词 ](#prompt-529)
*   [案例 528：大幅油画肖像 ](#prompt-528)
*   [案例 527：我的世界神秘时代信息卡 ](#prompt-527)
*   [案例 526：流年运势图 ](#prompt-526)
*   [案例 525：Labubu和迪丽热巴高端时尚跨页大片 ](#prompt-525)
*   [案例 524：风格化的3D人物漫画 ](#prompt-524)
*   [案例 523：一张年轻女性的逼真特写自拍照 ](#prompt-523)
*   [案例 522：衣橱拆解与风格分析 ](#prompt-522)
*   [案例 521：绘制[地标]的手绘等距示意图 ](#prompt-521)
*   [案例 520：龙珠卡牌 ](#prompt-520)
*   [案例 519：高端工作室照片 ](#prompt-519)
*   [案例 518：极简主义鸡尾酒摄影 ](#prompt-518)
*   [案例 517：动漫转真人 ](#prompt-517)
*   [案例 516：配料合成食材 ](#prompt-516)
*   [案例 515：担担面高级海报 ](#prompt-515)
*   [案例 514：复刻图片提示词 ](#prompt-514)
*   [案例 513：labubu风格动态 ](#prompt-513)
*   [案例 512：高清杂志跨页 ](#prompt-512)
*   [案例 511：最后的晚餐 ](#prompt-511)
*   [案例 510：宫崎骏的角色走进最后的晚餐 ](#prompt-510)
*   [案例 509：记忆宫殿学习英语 ](#prompt-509)
*   [案例 508：女子海边电影风格肖像照 ](#prompt-508)
*   [案例 507：中国各朝代时间轴 ](#prompt-507)
*   [案例 506：一个全新的Instagram账号 ](#prompt-506)
*   [案例 505：解数学题 ](#prompt-505)
*   [案例 504：品牌联名海报 ](#prompt-504)
*   [案例 503：平抛运动轨迹与速度位移分解图 ](#prompt-503)
*   [案例 502：老北京航拍 ](#prompt-502)
*   [案例 501：大唐长安插画 ](#prompt-501)
*   [案例 500：赛博黄历 ](#prompt-500)
*   [案例 499：成都旅游地图 ](#prompt-499)
*   [案例 498：小世界也能成就大故事 ](#prompt-498)
*   [案例 497：日本乡村公交车站雨夜的场景 ](#prompt-497)
*   [案例 496：身着一件惊艳的概念前卫礼服 ](#prompt-496)
*   [案例 495：微缩的温馨客厅 ](#prompt-495)
*   [案例 494：和路飞的一张超酷自拍 ](#prompt-494)
*   [案例 493：PS5的技术蓝图 ](#prompt-493)
*   [案例 492：根据坐标生成图片 ](#prompt-492)
*   [案例 491：10种不同发型 ](#prompt-491)
*   [案例 490：一张高分辨率的户外全身照 ](#prompt-490)
*   [案例 489：艺术家正在绘制自己的微型人偶 ](#prompt-489)
*   [案例 488：极简儿童绘画风格 ](#prompt-488)
*   [案例 487：图片的8种初始草图 ](#prompt-487)
*   [案例 486：超级赛亚人式变身过程 ](#prompt-486)
*   [案例 485：彩色手绘风格表情包 ](#prompt-485)
*   [案例 484：制作一个4×4的网格符合年代的风格 ](#prompt-484)
*   [案例 483：诸葛连弩的复古风格工程爆炸图 ](#prompt-483)
*   [案例 482：传统的中国工笔水墨画-仙女 ](#prompt-482)
*   [案例 481：传统的工笔风格水墨画 ](#prompt-481)
*   [案例 480：分格漫画手稿图 ](#prompt-480)
*   [案例 479：一键OOTD ](#prompt-479)
*   [案例 478：全景式角色深度概念分解图 ](#prompt-478)
*   [案例 477：进击的巨人画风菜谱：红烧肉 ](#prompt-477)
*   [案例 476：菜谱-番茄炒蛋 ](#prompt-476)
*   [案例 475：三英飙车战吕布 ](#prompt-475)
*   [案例 474：任天堂明星大乱斗游戏海报全家福 ](#prompt-474)
*   [案例 473：年轻的亚洲女生蹲坐在水泥地的庭院中 ](#prompt-473)
*   [案例 472：地球达人秀 ](#prompt-472)
*   [案例 471：真人电影片场泄露照片 ](#prompt-471)
*   [案例 470：图片注解 ](#prompt-470)
*   [案例 469：动漫转真人 ](#prompt-469)
*   [案例 468：伪造抖音截图 ](#prompt-468)
*   [案例 467：明星合拍 ](#prompt-467)
*   [案例 466：14个毛茸茸的小家伙并排挤沙发上 ](#prompt-466)
*   [案例 465：出生到80岁各个年龄段的节日照片 ](#prompt-465)
*   [案例 464：rick and morty画风卡片 ](#prompt-464)
*   [案例 463：名人金句卡 ](#prompt-463)
*   [案例 462：根据文字生成发布会现场图片 ](#prompt-462)
*   [案例 461：茅屋秋风所破歌中文和拼音图 ](#prompt-461)
*   [案例 460：固定参考图姿势生成图片 ](#prompt-460)
*   [案例 459：制作9种不同发型 ](#prompt-459)
*   [案例 458：文字生成精美的杂志文章的照片 ](#prompt-458)
*   [案例 457：年轻的亚洲女生蹲坐在水泥地的庭院中 ](#prompt-457)
*   [案例 456：2077年背景的暖色调科幻漫画场景 ](#prompt-456)
*   [案例 455：天伦图趣味水墨画 ](#prompt-455)
*   [案例 454：摄影质感极强的街头壁画 ](#prompt-454)
*   [案例 453：手绘风格的信息图卡片 ](#prompt-453)
*   [案例 452：香港武侠3格漫画 ](#prompt-452)
*   [案例 451：中国传统水墨彩画 ](#prompt-451)
*   [案例 450：揭秘照片的幕后制作过程 ](#prompt-450)
*   [案例 449：你生气的时候其实也可以很可爱 ](#prompt-449)
*   [案例 448：将素描人物添加到您的真实照片中 ](#prompt-448)
*   [案例 447：SPaceX工程原理图和蓝图线条 ](#prompt-447)
*   [案例 446：伪造的历史 ](#prompt-446)
*   [案例 445：将漫画人物融入你的真人照片 ](#prompt-445)
*   [案例 444：魔法窗口 ](#prompt-444)
*   [案例 443：火星监控录像 ](#prompt-443)
*   [案例 442：历史时代错误 ](#prompt-442)
*   [案例 441：自由女神像建筑蓝图 ](#prompt-441)
*   [案例 440：美妆检测器 ](#prompt-440)
*   [案例 439：从图像中创建图案或分解图 ](#prompt-439)
*   [案例 438：疯狂的程序喵 ](#prompt-438)
*   [案例 437：飞机立体剖面信息图 ](#prompt-437)
*   [案例 436：职业生涯历程可视化为地图 ](#prompt-436)
*   [案例 435：穿着成名的衣服拍合照在上海江滩 ](#prompt-435)
*   [案例 434：西游记人物坐地铁 ](#prompt-434)
*   [案例 433：地标信息图 ](#prompt-433)
*   [案例 432：电视屏幕内容复制到油画中 ](#prompt-432)
*   [案例 431：权游角色拿着护照 ](#prompt-431)
*   [案例 430：动漫与现实分割肖像 ](#prompt-430)
*   [案例 429：长文本古诗画画 ](#prompt-429)
*   [案例 428：幽默涂鸦风格 ](#prompt-428)
*   [案例 427：川剧变脸解密拆解图 ](#prompt-427)
*   [案例 426：三英飙车战吕布 ](#prompt-426)
*   [案例 425：穿着充气羽绒服的鸟儿 ](#prompt-425)
*   [案例 424：一个可爱的拟人化动物 ](#prompt-424)
*   [案例 423：一幅逼真的全身肖像 ](#prompt-423)
*   [案例 422：逼真的高清全身漫画人物 ](#prompt-422)
*   [案例 421：超逼真的野生动物摄影场景 ](#prompt-421)
*   [案例 420：居家光影三联画 ](#prompt-420)
*   [案例 419：年轻女子公交车上的窗户边 ](#prompt-419)
*   [案例 418：将电影海报重新设计成黏土动画风格 ](#prompt-418)
*   [案例 417：一幅超写实的高品质特写肖像 ](#prompt-417)
*   [案例 416：夸张的高清全身漫画 ](#prompt-416)
*   [案例 415：九个不同服装姿势和表情的Q版贴纸 ](#prompt-415)
*   [案例 414：干净柔和的米色工作室中的3x3照片 ](#prompt-414)
*   [案例 413：铅笔风格的大头漫画 ](#prompt-413)
*   [案例 412：3D漫画肖像 ](#prompt-412)
*   [案例 411：一位女子从智能手机屏幕中走出 ](#prompt-411)
*   [案例 410：被几个动物环绕的自拍风格照片 ](#prompt-410)
*   [案例 409：大型胶囊形容器的品牌3D渲染图 ](#prompt-409)
*   [案例 408：角色变成3D收藏级Q版人偶 ](#prompt-408)
*   [案例 407：将明星变成趣味十足的3D卡通肖像 ](#prompt-407)
*   [案例 406：一幅超写实全身肖像与路飞互动 ](#prompt-406)
*   [案例 405：超逼真全身肖像与角色互动 ](#prompt-405)
*   [案例 404：小巧可爱的等距视角 ](#prompt-404)
*   [案例 403：一幅超写实细节丰富的水下特写肖像 ](#prompt-403)
*   [案例 402：一位中年男子数字漫画 ](#prompt-402)
*   [案例 401：年轻女子身穿深色连帽衫的特写肖像 ](#prompt-401)
---
## [点击：查看301-400个提示词](https://github.com/songguoxs/gpt4o-image-prompts/blob/master/400.md)
## [点击：查看201-300个提示词](https://github.com/songguoxs/gpt4o-image-prompts/blob/master/300.md)
## [点击：查看101-200个提示词](https://github.com/songguoxs/gpt4o-image-prompts/blob/master/200.md)
## [点击：查看100提示词](https://github.com/songguoxs/gpt4o-image-prompts/blob/master/100.md)

<a id="prompt-590"></a>
## 案例 590：虚构的英语电影海报-回忆之味 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1994276578084413877))

<div style="display: flex; justify-content: space-between;">
<img src="./images/590.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-虚构的英语电影海报-回忆之味">
</div>

**中文提示词：**
```
一张虚构的英语电影《回忆之味》（The Taste of Memory）的电影海报。场景设置在一个质朴的19世纪风格厨房里。画面中央，一位红棕色头发、留着小胡子的中年男子（演员 成龙 饰）站在一张木桌后，他身穿白色衬衫、黑色马甲和米色围裙，正看着镜头，手中拿着一大块生红肉，下方是一个木制切菜板。在他的右边，一位梳着高髻的黑发女子（演员 刘亦菲 饰）倚靠在桌子上，温柔地对他微笑。她穿着浅色衬衫和一条上白下蓝的长裙。桌上除了放有切碎的葱和卷心菜丝的切菜板外，还有一个白色陶瓷盘、新鲜香草，左侧一个木箱上放着一串深色葡萄。背景是一面粗糙的灰白色抹灰墙，墙上挂着一幅风景画。最右边的一个台面上放着一盏复古油灯。海报上有大量的文字信息。左上角是白色的无衬线字体"ARTISAN FILMS PRESENTS"，其下方是"ELEANOR VANCE"和"ACADEMY AWARD® WINNER"。右上角写着"ARTHUR PENHALIGON"和"GOLDEN GLOBE® AWARD WINNER"。顶部中央是圣丹斯电影节的桂冠标志，下方写着"SUNDANCE FILM FESTIVAL GRAND JURY PRIZE 2024"。主标题"THE TASTE OF MEMORY"以白色的大号衬线字体醒目地显示在下半部分。标题下方注明了"A FILM BY Tongyi Interaction Lab"。底部区域用白色小字列出了完整的演职员名单，包括"SCREENPLAY BY ANNA REID"、"CULINARY DIRECTION BY JAMES CARTER"以及Artisan Films、Riverstone Pictures和Heritage Media等众多出品公司标志。整体风格是写实主义，采用温暖柔和的灯光方案，营造出一种亲密的氛围。色调以棕色、米色和柔和的绿色等大地色系为主。两位演员的身体都在腰部被截断。
```

<a id="prompt-589"></a>
## 案例 589：卡哇伊波普艺术 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1994239610713678137))

<div style="display: flex; justify-content: space-between;">
<img src="./images/589.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-卡哇伊波普艺术">
</div>

**中文提示词：**
```
中低角度拍摄，一位可爱的年轻东亚女性，皮肤白里透红、滑嫩紧致。她扎着双马尾，戴着过多的彩色发夹，穿着色彩爆炸的原宿Decora风格服装，在东京繁忙的街头俏皮地比着“耶”的手势。照片风格被过量的卡哇伊波普艺术淹没：无数的塑料玩具、彩虹、独角兽、糖果、笑脸和巨大的蝴蝶结插画填满背景并延伸到前景，部分卡通元素像贴纸一样覆盖在她的衣服和配件上。光线是明亮的日光，充满活力的柔和色彩。
```

<a id="prompt-588"></a>
## 案例 588：金属霓虹手账 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1994226726692683849))

<div style="display: flex; justify-content: space-between;">
<img src="./images/588.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-金属霓虹手账">
</div>

**中文提示词：**
```
Y2K美学风格的竖屏时尚情绪板。背景是数码故障艺术风格的网格纸，带有全息镭射的粉紫配色。所有元素呈现高光泽的乙烯基贴纸质感，白边清晰。主角穿着Y2K风格服饰。Labubu公仔贴纸佩戴银色大耳机和金属配饰，造型前卫。隐藏层贴纸是一件性感的镂空紧身连体衣。周围散落着像素风的手绘星星、蝴蝶图案和电子宠物涂鸦。字体采用气泡立体字风格。整体画面色彩高饱和度，充满未来复古感，不仅是照片，更是一幅完整的数字波普艺术画作。
```

<a id="prompt-587"></a>
## 案例 587：iPhone 16 Pro Max拆解 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1994602402276938242))

<div style="display: flex; justify-content: space-between;">
<img src="./images/587.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-iPhone 16 Pro Max拆解">
</div>

**中文提示词：**
```
最新款iPhone 16 Pro Max的解构对比摄影，分割布局。画面左侧 1/3 是一部完美的、屏幕亮起的钛金属iPhone；画面右侧 2/3 是拆解后的内部组件，包括A18芯片、三摄模组、电池和排线，采用Knolling风格几何排列。干净的深灰色背景，高角度俯视，极简工业美学，锐利对焦，--ar 16:9
```

<a id="prompt-586"></a>
## 案例 586：清新蓝色手账 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1994227033141100662))

<div style="display: flex; justify-content: space-between;">
<img src="./images/586.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-清新蓝色手账">
</div>

**中文提示词：**
```
充满夏日气息的竖屏时尚插画。背景是手绘的蓝色海洋波浪纹理和沙滩色块，使用彩色铅笔质感。主角贴纸穿着度假长裙或泳装，阳光明媚。Labubu公仔贴纸穿着夏威夷衬衫，拿着冲浪板或游泳圈。配饰贴纸包括草编包和墨镜。隐藏层贴纸是一套精美的蕾丝比基尼或薄纱罩衫，平铺展示。周围绘制了棕榈树、太阳和鸡尾酒的可爱涂鸦。贴纸角落有“Was here”的手写旅行笔记。整体氛围轻松愉悦，就像一本旅行剪贴簿的内页扫描图。
```

<a id="prompt-585"></a>
## 案例 585：相机拆解 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1994604456969998397))

<div style="display: flex; justify-content: space-between;">
<img src="./images/585.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-相机拆解">
</div>

**提示词：**
```
Knolling photography, disassembled parts of a vintage film camera neatly arranged on a flat surface, high angle shot, flat lay, technical aesthetic, sharp focus, clean background.
```

**中文提示词：**
```
扁平化摆拍摄影：将一台复古胶片相机的拆解部件整齐排列在平面上，采用俯拍角度，呈现扁平化构图风格，兼具技术美感，画面对焦清晰，背景简洁干净。
```

<a id="prompt-584"></a>
## 案例 584：复古动漫幻想 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1994240266866446621))

<div style="display: flex; justify-content: space-between;">
<img src="./images/584.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-复古动漫幻想">
</div>

**中文提示词：**
```
一位美丽的东亚女性，有着令人羡慕的白嫩光滑肌肤，留着蓬松的90年代风格卷发。她穿着复古的水手服风格连衣裙，坐在一家充满怀旧感的日式咖啡馆里，眼神梦幻。照片被密集的80-90年代少女漫画元素覆盖：闪烁的星星、魔法少女变身效果、粉彩色的机甲怪兽、玫瑰花框和巨大的漫画拟声词（如“DOKI DOKI”）。艺术风格是扁平的赛璐璐色彩和粗糙的线条，环绕着她写实的身体。柔和、梦幻的午后光线。
```

<a id="prompt-583"></a>
## 案例 583：东方武侠史诗海报-剑影红颜 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1994278346474311838))

<div style="display: flex; justify-content: space-between;">
<img src="./images/583.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-东方武侠史诗海报-剑影红颜">
</div>

**中文提示词：**
```
一张虚构的东方武侠史诗海报《剑影红颜》（Sword & Beauty）。场景设置在一个云雾缭绕的古老山巅亭阁中。画面中央，陈坤（Chen Kun）身着飘逸的墨色长袍，长发束起，眼神深邃，手中握着一把未出鞘的古剑，剑柄上镶嵌着玉石，他正凝视前方。在他的左侧，周迅（Zhou Xun）身穿刺绣精美的绯红色古装，高耸的发髻上插着金步摇，她侧身回眸，眼神中带着一丝哀愁和决绝，手中拿着一管玉箫。桌上放着一壶清酒、两个酒杯和一卷竹简。背景是连绵不绝的水墨山水和一轮巨大的红日。最右侧的石灯笼里燃着烛火。左上角"博纳影业 出品"，下方"徐克导演作品"。右上角"金马奖 最佳动作设计"。顶部中央是奥斯卡金像奖标志，下方"ACADEMY AWARD® NOMINEE BEST INTERNATIONAL FEATURE"。主标题"剑影红颜"以苍劲有力的书法字体显示。标题下方注明"江湖之远，不敌你眉间朱砂"。底部列出"武术指导 袁和平"、"服装设计 叶锦添"。整体风格是唯美主义的东方奇幻，采用柔和的自然光和云雾效果，营造出仙气、悲壮和浪漫的氛围。色调以青绿、墨色和朱红为主。
```

<a id="prompt-582"></a>
## 案例 582：奇幻冒险喜剧海报-寻龙秘境 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1994279390579183827))

<div style="display: flex; justify-content: space-between;">
<img src="./images/582.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-奇幻冒险喜剧海报-寻龙秘境">
</div>

**中文提示词：**
```
一张虚构的奇幻冒险喜剧海报《寻龙秘境》（The Dragon Realm Quest）。场景设置在一个充满奇异发光植物和古老遗迹的地下洞穴中。画面中央，演员黄渤留着滑稽的胡子，戴着探险帽，穿着多口袋马甲，表情夸张地瞪大眼睛看着手中的一个发光罗盘。在他的右侧，演员舒淇穿着异域风情的皮质探险服，背着一把弩箭，正无奈地扶着额头，嘴角上扬看着黄渤。两人周围散落着金币、古老的卷轴和一个巨大的恐龙蛋化石。背景是一个巨大的、沉睡的石龙雕像，其眼睛部位隐约发出红光。左上角"开心麻花影业 出品"，下方"闫非 彭大魔导演作品"。右上角"百花奖 观众最喜爱影片"。顶部中央是多伦多电影节标志，下方"TIFF PEOPLE'S CHOICE AWARD 2024"。主标题"寻龙秘境"以带有龙鳞纹理的金色立体字体显示。标题下方注明"不仅要命，还要钱！"。底部列出"视觉特效 工业光魔"、"动作指导 成家班"。整体风格是色彩斑斓的奇幻冒险，采用魔法光和生物发光的混合光源，营造出幽默、惊险和神秘的氛围。色调以宝石蓝、翠绿和金色为主，人物的旁边标记演员的名字。
```

<a id="prompt-581"></a>
## 案例 581：职业西装风手账 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1994309283488444523))

<div style="display: flex; justify-content: space-between;">
<img src="./images/581.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-职业西装风手账">
</div>

**中文提示词：**
```
9:16极简主义时尚插画。背景是干净的高级灰哑光纸张，仅有极细的工程制图线条。贴纸元素布局严谨，白边锐利。中央是用户穿着职业西装或极简风穿搭的贴纸。Labubu公仔贴纸戴着黑框眼镜，系着领带，一副精英模样。衣物解构贴纸包括折叠完美的西裤和名表。隐藏层贴纸是一件极简的高级黑色丝绸衬裙，展现低调奢华。所有的标注文字都是极细的黑色针管笔手写体。画面冷静、克制，无杂乱装饰，纯粹通过排版和材质对比展示高级感。
```

<a id="prompt-580"></a>
## 案例 580：鱼眼镜头下的日本女子比心 (来源 [@xmiiru_](https://x.com/xmiiru_/status/1994036974961705057))

<div style="display: flex; justify-content: space-between;">
<img src="./images/580.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-鱼眼镜头下的日本女子比心">
</div>

**提示词：**
```
{
  "image_specifications": {
    "format": "photograph",
    "style": "highly detailed, Y2K-inspired, gritty",
    "lens": "fisheye",
    "angle": "low-angle",
    "shot": "close-up",
    "lighting": "harsh, high contrast",
    "colors": "saturated",
    "background": {
      "setting": "urban, dark, street or subway in Tokyo",
      "effects": "subtle bokeh"
    }
  },
  "subject": {
    "type": "model",
    "style": "Japanese Ganguro or Gyaru",
    "appearance": {
      "hair": "platinum blonde with dark roots",
      "makeup": {
        "eyes": "heavy eye makeup",
        "lips": "light lipstick"
      },
      "clothing": [
        "faux fur vest",
        "distressed black denim top"
      ],
      "accessories": [
        "large gold cross pendant on a chain",
        "leopard-print choker"
      ],
      "hands": {
        "position": "foreground, forming a heart shape around face",
        "nails": "long, heavily jeweled and decorated (deconails)"
      }
    },
    "pose": "looking directly at the camera"
  }
}
```

**中文提示词：**
```
{
"image_specifications": {
"格式": "照片",
“风格”：“高度注重细节，受 Y2K 启发，粗犷”，
“镜头”: “鱼眼镜头”，
“角度”：“低角度”，
“镜头”: “特写”
“照明”：“刺眼、高对比度”，
“颜色”：“饱和的”，
“背景”： {
“场景”: “东京的城市、昏暗的街道或地铁”，
“效果”： “柔和散景”
}
},
“主题”： {
"type": "model",
"style": "Japanese Ganguro or Gyaru",
“外貌”： {
“头发”: “铂金色，发根颜色较深”
“化妆品”： {
“眼睛”： “浓重的眼妆”，
“嘴唇”: “浅色唇膏”
},
“衣服”： [
“人造毛皮背心”，
“做旧黑色牛仔上衣”
],
“配件”： [
“链子上挂着一个大金十字架吊坠”
豹纹项链
],
"手": {
“位置”：“前景，在脸部周围形成心形”，
“指甲”： “长长的、镶满珠宝和装饰的（教士指甲）”
}
},
“姿势”：“直视镜头”
}
}
```

<a id="prompt-579"></a>
## 案例 579：年轻女子侧坐在街机凳上 (来源 [@awesome_visuals](https://x.com/awesome_visuals/status/1994104753966686476))

<div style="display: flex; justify-content: space-between;">
<img src="./images/579.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-年轻女子侧坐在街机凳上">
</div>

**提示词：**
```
{ "subject": { "type": "young woman", "pose": "sitting sideways on an arcade stool, one knee up, hugging legs loosely, winking with exaggerated cuteness", "expression": "playful and lively" }, "clothing": { "top": "teal t-shirt with comic-outline shading", "bottom": "pink shorts", "socks": "purple crew socks", "shoes": "bright neon sneakers with translucent soles" }, "hair": { "color": "black", "style": "braided pigtails with neon hair ties" }, "environment": { "setting": "retro arcade interior", "details": "glowing cabinets, colorful reflections, cluttered neon lights" }, "lighting": { "type": "intense neon mixed lighting", "mood": "electric, colorful, kinetic" }, "camera": { "angle": "low-medium angle", "lens_effect": "wide lens, subtle distortion for dynamic feel", "framing": "tight arcade framing" }, "art_overlay": { "style": "overloaded sweets-monster pop-art", "description": "a hyper-busy explosion of candy-inspired monsters and neon shapes surrounding the subject while keeping skin photorealistic", "illustrated_elements": { "monsters": "goofy cute-ugly creatures made of donuts, chocolate chunks, banana ghosts, candy worms, gummy bears, soda bottles, strawberries, melting ice cream blobs", "graphic_shapes": "drips, splashes, stars, hearts, zigzags, spirals, speed lines, sparkles, comic bursts without text", "style": "flat graphic shapes with thick black outlines and bright neon hues" }, "placement_and_density": { "behavior": "extreme density filling almost all negative space", "behind_subject": "background jam-packed with overlapping layers of monsters", "around_subject": "creatures peeking behind shoulders, popping near head, sitting near feet", "over_clothing": "monsters overlapping shirt and shorts with subtle shading interaction", "avoid_skin": "no overlays touching the face, arms, or legs", "depth_layers": "front and back illustration layers creating chaotic dimensionality", "energy_effects": "white spark dots, glowing rims, dynamic speed lines around the figure" } }, "style": { "overall": "arcade portrait consumed by maximalist sweets-monster chaos", "aesthetic": "energetic, loud, neon-pop, surreal" } }
```

**中文提示词：**
```
{ "subject": { "type": "年轻女子", "pose": "侧坐在街机凳上，单膝抬起，双腿松松地抱在一起，夸张地眨着眼睛，表情可爱", "expression": "活泼俏皮" }, "clothing": { "top": "青色T恤，带有漫画轮廓阴影", "bottom": "粉色短裤", "socks": "紫色船袜", "shoes": "亮霓虹色运动鞋，鞋底半透明" }, "hair": { "color": "黑色", "style": "用霓虹色发圈扎的麻花辫" }, "virtation": { "setting": "复古街机厅内部", "details": "发光的机柜，五彩缤纷的倒影，杂乱的霓虹灯" }, "lighting": { "type": "强烈的霓虹混合照明", "mood": "电光、多彩、动感" }, "camera": { "angle": "低中光"角度", "镜头效果": "广角镜头，轻微畸变，营造动感", "构图": "紧凑的街机式构图" }, "艺术叠加"": { "风格"": "糖果怪兽波普艺术", "描述"": "围绕主体，糖果灵感怪兽和霓虹形状的超密集爆炸，同时保持皮肤的逼真度", "插画元素"": { "怪兽"": "由甜甜圈、巧克力块、香蕉幽灵、糖果蠕虫、软糖熊、汽水瓶、草莓、融化的冰淇淋球组成的滑稽可爱又丑陋的生物", "图形形状"": "滴落、飞溅、星星、心形、锯齿形、螺旋形、速度线、闪光、无文字的漫画爆发" "风格"": "带有粗黑轮廓和明亮霓虹色调的扁平图形形状" }, "位置和密度" { "行为"": "极高的密度，几乎填充所有负空间", "behind_subject": "背景密密麻麻地布满了层叠的怪物", "around_subject": "生物从肩膀后探出头来，在头部附近闪现，在脚边栖息", "over_clothing": "怪物与衬衫和短裤重叠，并有微妙的阴影互动", "avoid_skin": "没有叠加层接触到脸部、手臂或腿部", "depth_layers": "前后插图层营造出混乱的立体感", "energy_effects": "白色火花点、发光边缘、人物周围的动态速度线" } }, "style": { "overall": "被极繁主义的糖果怪物混乱所吞噬的街机肖像", "aesthetic": "充满活力、喧闹、霓虹流行、超现实" } }
```

<a id="prompt-578"></a>
## 案例 578：油泼面宫格漫画图 (来源 [@hellokaton](https://x.com/hellokaton/status/1991668144080056423))

<div style="display: flex; justify-content: space-between;">
<img src="./images/578.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-油泼面宫格漫画图">
</div>

**中文提示词：**
```
编写一个 Nano Banana 提示词，用于生成「油泼面的做法」四宫格漫画图，有配图和文字排版。
```

<a id="prompt-577"></a>
## 案例 577：皮克斯风格3D动画场景 (来源 [@dotey](https://x.com/dotey/status/1994139903513317767))

<div style="display: flex; justify-content: space-between;">
<img src="./images/577.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-皮克斯风格3D动画场景">
</div>

**提示词：**
```
A vibrant Pixar-style 3D animated scene depicting a joyful group selfie moment featuring <group of characters> in a <culturally representative environment>.
At the center, <main character> confidently holds a selfie stick topped with an iPhone, wearing an expression that clearly reflects their <distinctive personality trait> and exudes <leadership or core presence>.
To the left, <character A> adopts a pose or action reflective of their <distinct personality trait>, showcasing an expressive face that vividly captures their <personality description>.
On the right side, <character B> strikes a playful/humorous/cute pose, holding a characteristic item (<character B’s representative object>), with an exaggerated, lively facial expression highlighting their <distinctive personality trait>.
Additional characters (optional):

Nearby, <character C> performs an action or posture aligned with their personality, bearing an expressive facial expression that encapsulates their unique personality traits.
All characters wear bright, cheerful, and adorably rounded outfits styled in a contemporary fusion of traditional and modern attire representative of their cultural or historical backgrounds.
The scene is warmly lit, colorful, and filled with dynamic expressions and lively poses.
The background features a setting emblematic of the characters' cultural identities or personalities—such as cherry blossoms, lakes, mountains, historic architecture, or fantasy-like natural landscapes—rendered in the adorable, cinematic style characteristic of Pixar animations.
The overall composition exudes energy, humor, and heartwarming joy, capturing the essence of each character through their selfie expressions and postures.

—-

Names: [Frodo, Sam, Aragorn, Gandalf, Legolas, Gimli]
```

**中文提示词：**
```
一段充满活力的皮克斯风格3D动画场景，描绘了欢乐的集体自拍时刻。<group of characters>在<culturally representative environment>。
在中心，<main character>她自信地拿着一根顶端装着iPhone的自拍杆，脸上带着明显反映出他们<distinctive personality trait>并散发出<leadership or core presence>。
向左转，<character A>采取一种反映其身份的姿势或动作<distinct personality trait>展现出一张表情丰富的脸，生动地捕捉到了他们的<personality description>。
右侧，<character B>摆出俏皮/幽默/可爱的姿势，手持一件特色物品（ <character B’s representative object<span translate="no"> （p1），面部表情夸张生动，突显了他们的<distinctive personality trait>。
其他字符（可选）：

附近，<character C>做出符合其个性的动作或姿势，并带有能体现其独特个性特征的生动面部表情。
所有角色都穿着色彩鲜艳、活泼可爱、圆润的服装，这些服装融合了传统和现代元素，体现了他们的文化或历史背景。
画面光线温暖，色彩丰富，充满了生动的表情和活泼的姿态。
背景以象征角色文化身份或个性的场景为特色——例如樱花、湖泊、山脉、历史建筑或奇幻般的自然景观——以皮克斯动画特有的可爱电影风格呈现。
整体构图充满活力、幽默和温馨的喜悦，通过人物的自拍表情和姿势捕捉到了每个角色的精髓。

——

人物：[弗罗多、山姆、阿拉贡、甘道夫、莱戈拉斯、吉姆利]
```

<a id="prompt-576"></a>
## 案例 576：皮克斯风格3D动画场景 (来源 [@dotey](https://x.com/dotey/status/1994142229695217837))

<div style="display: flex; justify-content: space-between;">
<img src="./images/576.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-皮克斯风格3D动画场景">
</div>

**中文提示词：**
```
皮克斯风格3D动画场景——<人物组合>在<场景环境>中欢乐自拍留念。

<主视角人物>站在中央，手持自拍杆（上面连着一部 iPhone 手机），
表情为<主视角人物性格特征>，呈现出<领导/核心人物气质>。

在<主视角人物>左侧的<人物A>展现出<人物A性格相关的动作/姿势>，
表情为<人物A表情特征>，体现出<人物A性格描述>。

在右侧的<人物B>则摆出<搞怪/豪迈/可爱>的姿势，
手持<人物B代表物品>，表情为<人物B表情特征>，
风格活泼夸张，展现出<人物B性格特征>。

若有更多人物，可继续添加：
旁边的<人物C>则<动作/姿态>，脸上带着<表情>，
展示出<性格>特点。

所有人物穿着色彩鲜艳、圆润可爱的<时代风格+改良服饰>，
整体光效柔和温暖、色调明亮，
角色表情丰富、动作生动。

背景为<环境描述：如桃花、湖泊、山林、古风建筑或仙境般的自然场景>，
场景具有皮克斯动画电影般的可爱氛围与电影级构图感，
整体画面充满活力、幽默、温馨的欢乐气息。

---
人物：刘备、张飞、关羽
```

<a id="prompt-575"></a>
## 案例 575：极繁主义波普艺术图层 (来源 [@awesome_visuals](https://x.com/awesome_visuals/status/1993609750051766767))

<div style="display: flex; justify-content: space-between;">
<img src="./images/575.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image  Prompts-极繁主义波普艺术图层">
</div>

**提示词：**
```
{ "subject": { "type": "beautiful young woman (early 20s)", "pose": "sitting sideways on a concrete street barrier, one knee up, one arm resting on it, giving a winking smile", "expression": "cute, confident, playful" }, "appearance": { "hair_color": "light brown", "hair_style": "messy shoulder-length bob with wispy bangs", "complexion": "fair with warm undertones" }, "clothing": { "top": "lavender cropped hoodie with soft contour shading", "bottom": "mint pleated skirt", "socks": "white ankle socks with tiny pastel stripes", "shoes": "chunky white sneakers with teal accents" }, "environment": { "setting": "urban street corner", "details": "painted curb, faded crosswalk lines, distant buildings, cloudy-bright sky" }, "lighting": { "type": "bright diffused afternoon light", "mood": "soft, pastel, airy" }, "camera": { "angle": "mid to low angle", "lens_effect": "wide lens with mild depth warp", "framing": "subject centered with plenty of room for decoration layers" }, "art_overlay": { "style": "dense maximalist sweets-monster pop-art cluster", "illustrated_elements": { "monsters": "banana ghosts, donut creatures, strawberry heads, melting chocolate blobs, cookie beasts, gummy worms, tiny soda-bottle critters", "graphic_shapes": "neon stars, hearts, zigzags, drips, splashes, bubbles, speed lines, text bursts without text", "style": "flat neon colors (pink, cyan, lime, yellow, purple) with thick black outlines" }, "placement_and_density": { "behind_subject": "entire background packed with overlapping sweets monsters", "around_subject": "monsters peeking near shoulders, feet, and around hair silhouette", "over_clothing": "some creatures rest on hoodie, skirt, and shoes with small clothing shadows", "avoid_skin": "face, legs, and arms remain clean and photorealistic", "depth_layers": "layers in front and behind create stacked chaotic depth", "energy_effects": "glowing rim lines, white spark dots, motion lines surrounding her" } }, "style": { "overall": "pastel street photography overwhelmed by neon sweets-monster pop-art", "aesthetic": "cute, overloaded, vibrant, surreal" } }
```

**中文提示词：**
```
{ "subject": { "type": "美丽的年轻女性（20岁出头）", "pose": "侧坐在水泥路障上，单膝跪地，一只手臂搭在上面，眨着眼睛微笑", "expression": "可爱、自信、活泼" }, "appearance": { "hair_color": "浅棕色", "hair_style": "凌乱的齐肩波波头，刘海稀疏", "complexion": "白皙，带暖色调" }, "clothing": { "top": "淡紫色短款连帽衫，带有柔和的轮廓阴影", "bottom": "薄荷绿百褶裙", "socks": "白色短袜，带有细小的粉彩色条纹", "shoes": "厚底白色运动鞋，带有蓝绿色点缀" }, "environment": { "setting": "城市街角", "details": "涂漆的路缘石，褪色的斑马线，远处的建筑物，阴天但明亮的天空" }, "lighting": { "type": "明亮的漫射午后光", "mood": "柔和、粉彩、轻盈" }, "camera": { "angle": "中低角度", "lens_effect": "带有轻微景深变形的广角镜头", "frameming": "主体居中，留有足够的装饰图层空间" }, "art_overlay": { "style": "浓郁的极繁主义糖果怪兽波普艺术风格", "illustrated_elements": { "monsters": "香蕉幽灵、甜甜圈生物、草莓头、融化的巧克力块、饼干怪兽、橡皮糖虫、小汽水瓶生物", "graphic_shapes": "霓虹星星、心形、锯齿形、滴落、飞溅、气泡、速度线、无文字的文字爆发", "style": "带有粗黑轮廓的扁平霓虹色（粉色、青色、酸橙色、黄色、紫色）" }, "placement_and_density": { "behind_subject": "整个背景都布满了重叠的糖果怪兽", "around_subject": "怪兽从肩膀、脚边和头发轮廓周围探出头来", "over_clothing": "一些怪兽栖息在连帽衫、裙子和鞋子上，留下小小的衣服阴影", "avoid_skin": "脸部、腿部和手臂保持干净且逼真", "depth_layers": "前后图层营造出堆叠的混乱深度", "energy_effects": "发光的边缘线、白色火花点、环绕着她的运动线条" } }, "style": { "overall": "霓虹糖果怪兽波普艺术风格的柔和街头摄影", "aesthetic": "可爱、繁复、充满活力、超现实" } }
```

<a id="prompt-574"></a>
## 案例 574：掌上游戏机的精美3D渲染图 (来源 [@egeberkina](https://x.com/egeberkina/status/1993592049430650957))

<div style="display: flex; justify-content: space-between;">
<img src="./images/574.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-掌上游戏机的精美3D渲染图">
</div>

**提示词：**
```
A highly polished 3D render of a classic handheld game console split cleanly into two halves, standing upright on a glossy reflective surface. Between the two halves, a miniature floating platform world inspired by retro side-scrolling platform games emerges: brick blocks, green pipes, gold coins, small clouds, and a tiny flagpole. The level pieces are arranged in multiple layers suspended in mid-air. The console screens show a retro game title. Soft studio lighting, pastel blue background, smooth shadows, subtle reflections, playful and whimsical tone. Ultra-clean materials, rounded plastic edges, crisp details, vibrant colors, minimalistic composition, centered layout.
```

**中文提示词：**
```
一台经典掌上游戏机的精美3D渲染图，被清晰地一分为二，直立于光滑的反射表面上。在两半之间，浮现出一个受复古横版卷轴游戏启发的小型漂浮平台世界：砖块、绿色管道、金币、小云朵和一根小小的旗杆。关卡组件以多层形式悬浮在半空中。游戏机屏幕上显示着一个复古游戏标题。柔和的摄影棚灯光，淡蓝色的背景，平滑的阴影，微妙的反射，营造出一种轻松诙谐的氛围。材质极其干净，塑料边缘圆润，细节清晰，色彩鲜艳，构图极简，布局居中。
```

<a id="prompt-573"></a>
## 案例 573：身着白色针织上衣的阳光女孩 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1993870488955961747))

<div style="display: flex; justify-content: space-between;">
<img src="./images/573.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-身着白色针织上衣的阳光女孩">
</div>

**提示词：**
```
{
    "image_metadata": {
      "title": "The Golden Hour: Backlight Beauty",
      "category": "Outdoor Portrait",
      "tone": "Warm, Romantic, Glowing, Dreamy"
    },
    "prompt_elements": {
      "subject": {
        "description": "Beautiful East Asian girl with a doll-like face and porcelain skin.",
        "face_detail": "Eyes sparkling in the sun, cheeks slightly flushed (peach fuzz visible), glossy lips slightly parted.",
        "pose": "Leaning against a wooden railing, turning back towards the sun.",
        "action": "Shielding eyes from the sun with one hand, creating shadow play on face."
      },
      "fashion": {
        "garment_top": "White off-shoulder knitted top revealing delicate collarbones and shoulders.",
        "garment_bottom": "Light blue denim skirt.",
        "footwear": "Sandals."
      },
      "environment": {
        "setting": "Balcony or park at sunset.",
        "props": "Blurred trees and golden light in background.",
        "ground": "N/A."
      },
      "technical_specs": {
        "style": "Cinematic portrait, backlit.",
        "lighting": "Strong golden hour backlighting creating a halo around hair, soft fill light on face.",
        "focus": "Extreme close-up on the face and eyes."
      }
    },
    "full_prompt_string": "A cinematic close-up of a beautiful East Asian girl with doll-like features and porcelain skin during golden hour. She wears a white off-shoulder knit top, exposing her delicate shoulders. She shields her eyes from the sun, casting soft shadows. Her skin glows, and fine peach fuzz is visible. Her eyes sparkle, and her lips are glossy. 8k resolution, romantic lighting, detailed iris, dreamy atmosphere.",
    "negative_prompt": "shadows blocking face, ugly expression, closed eyes, wrinkles, dry skin, male, dark clouds, night, artificial light."
}
```

**中文提示词：**
```
{
"image_metadata": {
标题：《黄金时刻：逆光之美》
“类别”: “户外人像”
基调：温暖、浪漫、柔和、梦幻
},
"prompt_elements": {
“主题”： {
描述：一位拥有洋娃娃般精致面容和瓷器般肌肤的美丽东亚女孩。
“面部细节”： “双眼在阳光下闪闪发光，双颊微微泛红（可见细小的绒毛），光泽的嘴唇微微张开。”
“姿势”：“倚靠在木制栏杆上，背对太阳。”
“动作”：“用一只手遮住眼睛，避免阳光直射，在脸上制造光影效果。”
},
“时尚”： {
"garment_top": "白色露肩针织上衣，露出精致的锁骨和肩膀。"
"garment_bottom": "浅蓝色牛仔裙。",
“鞋类”: “凉鞋”。
},
“环境”： {
“场景”：“日落时的阳台或公园。”
道具：背景中​​模糊的树木和金色的光线。
“地面”： “不适用。”
},
"technical_specs": {
风格：电影人像，逆光。
“光线”：“强烈的黄金时段逆光在头发周围形成光晕，面部采用柔和的补光。”
“焦点”：“面部和眼睛的超近特写。”
}
},
"full_prompt_string": "在日落的黄金时刻，一位拥有娃娃般精致五官和瓷器般肌肤的东亚美女，被拍摄成电影般的特写镜头。她身穿白色露肩针织衫，露出纤细的肩膀。她用手遮挡阳光，投下柔和的阴影。她的肌肤散发着光泽，细小的绒毛清晰可见。她的眼睛闪闪发光，嘴唇水润饱满。8K分辨率，浪漫的光线，细腻的虹膜，梦幻般的氛围。"
"negative_prompt": "阴影遮住脸，表情难看，闭着眼睛，皱纹，皮肤干燥，男性，乌云密布，夜晚，人造光。"
}
```

<a id="prompt-572"></a>
## 案例 572：奶油水彩手账 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1993885921599693092))

<div style="display: flex; justify-content: space-between;">
<img src="./images/572.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-奶油水彩手账">
</div>

**中文提示词：**
```
一张9:16竖屏的高级时尚插画情绪板，模拟平板扫描效果。背景是纯手绘的奶油色水彩晕染纸张，带有淡淡的粉色网格。视觉核心是数张具有明显白色模切宽边和柔和投影的亮面乙烯基贴纸。中央贴纸是用户穿着甜美约会装的照片，光线明亮。左侧是对这套穿搭的解构贴纸，整齐折叠的外套和精致的高跟鞋。右下角是关键的隐藏层贴纸：一套折叠整齐的高级白色蕾丝内衣，展现细腻纹理。一只穿着粉色系、与用户服装呼应的Labubu艺术公仔贴纸正趴在一个手绘对话框上。周围装饰着蜡笔质感的手绘爱心、闪光符号和潦草的中文书法标注OOTD。画面中绝无任何人手、笔或物理桌面背景，纯粹的平面艺术插画。
```

<a id="prompt-571"></a>
## 案例 571：早朝了开个视频会议先 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1993126993135902996))

<div style="display: flex; justify-content: space-between;">
<img src="./images/571.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-早朝了开个视频会议先">
</div>

**中文提示词：**
```
传统的清代宫廷画风格。画面描绘了皇帝庄严肃穆地端坐在太和殿的龙椅上。然而，他面对的不是跪拜的大臣，而是盯着放在御案上的一块巨大的笔记本电脑屏幕。屏幕上显示着与大臣们进行“腾讯会议”的网格视图，大臣们都在各自的府邸中，有的看起来很无聊，有一个在偷偷吃面条。皇帝在朝冠外面戴着一副头戴式耳机。一名太监站在后边举着环形补光灯，以确保皇帝在镜头前看起来气色很好。屏幕上的文字写着“早朝”。
```

<a id="prompt-570"></a>
## 案例 570：游戏角色试图从电视屏幕爬到客厅 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1991801077092733297))

<div style="display: flex; justify-content: space-between;">
<img src="./images/570.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-游戏角色试图从电视屏幕爬到客厅">
</div>

**中文提示词：**
```
一个像素化的电子游戏角色试图从电视屏幕爬到客厅里。一个真实的人类玩家正手忙脚乱地用控制器把角色推回屏幕。
```

<a id="prompt-569"></a>
## 案例 569：泛黄旧报纸手账 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1993959563251593223))

<div style="display: flex; justify-content: space-between;">
<img src="./images/569.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-泛黄旧报纸手账">
</div>

**中文提示词：**
```
泛黄旧报纸手账
复古怀旧风格的9:16时尚插画。背景模仿陈旧的泛黄信纸，边缘有烧焦效果的手绘纹理和咖啡渍印记。中央是用户复古穿搭的贴纸，处理成胶片颗粒感，但保留白色贴纸边框。Labubu公仔贴纸戴着复古墨镜和花衬衫，坐在旁边。衣物解构部分展示了复古皮夹克和牛津鞋的贴纸。隐藏层贴纸是一件复古丝绸吊带裙，质感丝滑。周围用钢笔墨水风格绘制了优雅的草写英文日期和复古相框涂鸦。贴纸边缘用半透明的纸胶带图案固定。画面平整，无任何书写工具或手部入镜，纯粹的复古平面设计。
```

<a id="prompt-568"></a>
## 案例 568：金毛直播 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1991796627062079575))

<div style="display: flex; justify-content: space-between;">
<img src="./images/568.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-金毛直播">
</div>

**中文提示词：**
```
一只金毛犬戴着耳机坐在麦克风前，面前摆满了各种狗零食和骨头。它正对着镜头露出专业的笑容。直播界面的标题写着：“修勾的吃播：今天挑战十根大骨棒！榜一大哥刷个火箭吧！”。
```

<a id="prompt-567"></a>
## 案例 567：你好地球人 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1991800151204307071))

<div style="display: flex; justify-content: space-between;">
<img src="./images/567.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-你好地球人">
</div>

**中文提示词：**
```
两名身穿笨重宇航服的宇航员在月球表面自拍。背景中，一个滑稽的小灰人正在抢镜，举着一个牌子写着“你好地球人！”。
```

<a id="prompt-566"></a>
## 案例 566：李小龙与尤达大师以武会友 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1991801077092733297))

<div style="display: flex; justify-content: space-between;">
<img src="./images/566.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-李小龙与尤达大师以武会友">
</div>

**中文提示词：**
```
穿着黄色连体服的李小龙与尤达大师进行友好的切磋。李小龙拿着双截棍，尤达拿着绿色小光剑。他们都在微笑。传统中国道场背景。后方横幅写着“以武会友”。
```

<a id="prompt-565"></a>
## 案例 565：明星合照的幕后花絮 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1992456465173692800))

<div style="display: flex; justify-content: space-between;">
<img src="./images/565.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-明星合照的幕后花絮">
</div>

**中文提示词：**
```
我想看看这张照片拍摄的幕后花絮，了解它是如何创作出来的
```

<a id="prompt-564"></a>
## 案例 564：马里奥路易吉给碧奇公主修理厨房 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1991807393538478513))

<div style="display: flex; justify-content: space-between;">
<img src="./images/564.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-马里奥路易吉给碧奇公主修理厨房">
</div>

**中文提示词：**
```
马里奥满身污垢，看起来筋疲力尽，正在一个逼真的房子里修理厨房橱柜下漏水的水槽。路易吉递给他扳手。碧奇公主用金币支付他们报酬
```

<a id="prompt-563"></a>
## 案例 563：西游记师徒四人组成了一个摇滚乐队 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1993235709914915307))

<div style="display: flex; justify-content: space-between;">
<img src="./images/563.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-西游记师徒四人组成了一个摇滚乐队">
</div>

**提示词：**
```
A traditional Chinese Gongbi-style ink painting. The scene humorously depicts a grand concert taking place on a giant, floating lotus leaf amidst a sea of clouds. At the center, Tang Sanzang wears cool aviator sunglasses and acts as a DJ, scratching on a turntable made of ancient millstones. Beside him, Sun Wukong is in mid-air performing a heavy metal jump, shredding on a flaming electric guitar styled like a Pipa. Zhu Bajie sits on a subwoofer drum set, enthusiastically banging the drums with two rake-shaped drumsticks, sweat flying. Sha Wujing stands calmly at the back, holding a microphone stand, crooning a jazz ballad with a saxophone hanging from his neck. Traditional Chinese calligraphy lyrics float in the air, accompanied by a classic red artist’s seal inscribed "魔音穿耳".
```

**中文提示词：**
```
这是一幅传统的工笔水墨画。画面生动地描绘了一场盛大的音乐会，地点设在一片巨大的漂浮荷叶之上，云海环绕。唐三藏戴着酷炫的飞行员墨镜，扮演着DJ的角色，用一块古老的磨盘打碟。在他身旁，孙悟空在空中表演着重金属跳跃，弹奏着一把形似琵琶的火焰电吉他。猪八戒坐在低音鼓上，挥舞着两根耙状鼓槌，汗流浃背地热情地敲击着鼓面。沙悟净则镇定地站在后方，手持麦克风架，脖子上挂着萨克斯，低吟着爵士情歌。传统的中国书法歌词在空中飘荡，旁边还钤着一枚经典的红色艺术家印章，上面写着“魔音穿耳”。
```

<a id="prompt-562"></a>
## 案例 562：涂鸦记号笔手账 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1993958314179482074))

<div style="display: flex; justify-content: space-between;">
<img src="./images/562.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-涂鸦记号笔手账">
</div>

**中文提示词：**
```
9:16全屏时尚情绪板插画。背景是带有混凝土纹理的哑光纸张，上面布满了鲜艳的霓虹色马克笔涂鸦和抽象的街头喷漆线条。所有元素均为具有厚实白色边缘的模切贴纸风格，带有立体阴影。主角贴纸是穿着潮流街头服饰的用户。配饰贴纸包括限量版球鞋特写和一个奢侈品潮牌包。Labubu公仔贴纸穿着同款卫衣，戴着棒球帽，正从贴纸边缘探出头来。特别展示的隐藏层贴纸是一件高科技面料的运动紧身衣，平铺展示。用黑色粗记号笔绘制的箭头指向各个单品，角落贴有数码胶带装饰。无实物拍摄感，完全的数字化手账拼贴艺术。
```

<a id="prompt-561"></a>
## 案例 561：国家一级摆烂许可证 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1991813589078778313))

<div style="display: flex; justify-content: space-between;">
<img src="./images/561.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-国家一级摆烂许可证">
</div>

**中文提示词：**
```
一张像驾照一样的证件卡片特写，证件照是一只睡着的考拉。证件名称写着：“国家一级摆烂许可证”。有效期写着：“永久有效”。
```

<a id="prompt-560"></a>
## 案例 560：未经他人苦莫劝他人善 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1991828940290224493))

<div style="display: flex; justify-content: space-between;">
<img src="./images/560.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-未经他人苦莫劝他人善">
</div>

**中文提示词：**
```
一张极其唯美的夕阳风景图，一个人坐在悬崖边看海。背影很孤独。天空中浮现一行由云朵组成的字：“未经他人苦，莫劝他人善”。
```

<a id="prompt-559"></a>
## 案例 559：月亮不睡我不睡 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1991871219600400445))

<div style="display: flex; justify-content: space-between;">
<img src="./images/559.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-月亮不睡我不睡">
</div>

**中文提示词：**
```
一只熊猫戴着墨镜，手里拿着保温杯（里面泡着枸杞）。背景是深夜的霓虹灯城市。熊猫身边的霓虹灯牌写着：“月亮不睡我不睡，我是秃头小宝贝”。
```

<a id="prompt-558"></a>
## 案例 558：宇航员坐在弯弯的月亮边钓星星 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1991875496817070245))

<div style="display: flex; justify-content: space-between;">
<img src="./images/558.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-宇航员坐在弯弯的月亮边钓星星">
</div>

**中文提示词：**
```
一个宇航员坐在弯弯的月亮边缘，手里拿着鱼竿。鱼钩垂在下方的云层中，钓起了一颗发光的星星。氛围孤独而宁静。Lofi Hip Hop 视觉美学。
```

<a id="prompt-557"></a>
## 案例 557：职业生涯地图图片 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1992766727126704259))

<div style="display: flex; justify-content: space-between;">
<img src="./images/557.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-职业生涯地图图片">
</div>

**中文提示词：**
```
请为小米的雷军创建一个有趣的职业生涯地图图片，使用游戏王者荣耀的主题
```

<a id="prompt-556"></a>
## 案例 556：女子一只手夸张地伸向镜头 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1993134542618566911))

<div style="display: flex; justify-content: space-between;">
<img src="./images/556.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-女子一只手夸张地伸向镜头">
</div>

**中文提示词：**
```
一个极端鱼眼镜头拍摄的照片。金发双马尾的年轻女子穿着灰色开衫和格子裙校服，在涩谷十字路口兴奋地跳起，一只手夸张地伸向镜头前景，手指甲清晰可见。背景中，扭曲的涩谷109大楼和其他建筑林立，街道上挤满行人和车辆。巨大的粉色和蓝色渐变卡通怪兽漂浮在城市上空，巨大的触手和角环绕着扭曲的城市景观。阳光明媚，光影对比强烈。圆形画幅。
```

<a id="prompt-555"></a>
## 案例 555：在复仇者大厦跟死侍合个影 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1993222622986092722))

<div style="display: flex; justify-content: space-between;">
<img src="./images/555.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-在复仇者大厦跟死侍合个影">
</div>

**提示词：**
```
Place Deadpool next to the man, making "bunny ears" with his fingers behind the man's head while looking mischievously at the camera. Use the Avengers Tower rooftop overlooking New York City as the background. Keep the selfie composition intact and integrate both characters naturally.
```

**中文提示词：**
```
让死侍站在男人旁边，用手指在男人脑后比划“兔耳朵”，同时对着镜头露出调皮的表情。以俯瞰纽约市的复仇者大厦楼顶为背景。保持自拍构图不变，让两个角色自然地融入画面。
```

<a id="prompt-554"></a>
## 案例 554：粉红色的星之卡吐泡泡 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1991795708308189668))

<div style="display: flex; justify-content: space-between;">
<img src="./images/554.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-粉红色的星之卡吐泡泡">
</div>

**中文提示词：**
```
梦境日记。粉红色的星之卡比睡在一颗星星上，嘴里吐出彩虹色的气泡。柔和的马卡龙色系，云朵和糖果的贴纸，闪粉笔画的细节，梦幻且甜美。
```

<a id="prompt-553"></a>
## 案例 553：马斯克教爱因斯坦拍照 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1991805840685453495))

<div style="display: flex; justify-content: space-between;">
<img src="./images/553.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-马斯克教爱因斯坦拍照">
</div>

**中文提示词：**
```
头发蓬乱的爱因斯坦困惑地盯着智能手机，试图自拍。埃隆·马斯克站在他旁边，耐心地指着屏幕教他。手机屏幕上的字：“怎么拍照？”。
```

<a id="prompt-552"></a>
## 案例 552：超现实主义日式水墨画 (来源 [@Preda2005](https://x.com/Preda2005/status/1992472259127283888))

<div style="display: flex; justify-content: space-between;">
<img src="./images/552.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-超现实主义日式水墨画">
</div>

**提示词：**
```
Create a highly detailed surreal Japanese sumi-e illustration blending ancient Edo-period aesthetics with futuristic absurdity. At twilight, under a vast sky streaked with vermilion and indigo brushstrokes, Doraemon stands atop a traditional pagoda roof reinforced with glowing fiber cables and neon scaffolding. He pilots a weathered, patchwork mecha painted in faded indigo lacquer, shaped like a vintage wind-up toy with exposed gears, silk-banner decals, and steam exhausts puffing from shoulder vents. The mecha wears a digital mawashi displaying shifting kanji runes. Doraemon’s expression is intense but comically determined, his paw gripping a lever made from polished bamboo and chrome.

Across the composition, Hello Kitty appears inside a towering golden-armored mecha resembling an ornate Hannya mask, with sakura-shaped LEDs pulsing across its chestplate. Her stance mirrors that of a sumo rikishi mid-tachiai, legs wide, palms extended, toes digging into the glowing tatami rooftop below. Tiny holographic cherry blossoms swirl in the air, catching the last ambient light from futuristic Edo lanterns floating in midair via anti-gravity rings.

Below, dozens of onlookers in layered kimono-hologram hybrids cheer with glowing fans shaped like old kabuki masks. Some wear AR visors shaped like fox spirits, their faces half-lit by the flickering light of vending machines embedded in shrine walls. In one corner, an elderly monk with cybernetic arms calmly sketches the scene on a floating washi-scroll, eyes glowing faintly behind antique round glasses.

The entire piece is rendered in expressive sumi-e ink washes with chaotic splashes for motion trails, delicate dry-brush hatching for armor texture, and faint pastel watercolors to accent light sources. Negative space is used deliberately around the combatants to amplify their presence. A red artist seal (宝雷印) is stamped boldly in the lower corner, harmonizing the traditional technique with the scene’s absurd modernity.
```

**中文提示词：**
```
创作一幅细节丰富的超现实主义日式水墨画，融合江户时代的古典美学与未来主义的荒诞风格。暮色降临，在朱红与靛蓝交织的广袤天空下，哆啦A梦站在一座由发光纤维缆绳和霓虹灯脚手架加固的传统宝塔屋顶上。他驾驶着一架饱经风霜、涂着褪色靛蓝漆的机甲，外形酷似老式发条玩具，齿轮外露，饰有丝绸旗帜图案，肩部通风口喷出蒸汽。机甲上系着一条印有不断变化的汉字图案的数码腰带。哆啦A梦表情严肃而又滑稽地坚定，他的爪子紧紧握着一个由抛光竹子和镀铬制成的操纵杆。

画面中，Hello Kitty 出现在一座高耸的金色铠甲机甲内，机甲造型宛如一副华丽的般若面具，胸甲上闪烁着樱花形状的 LED 灯。她的站姿如同相扑力士立合的姿势，双腿分开，手掌伸展，脚趾深深扎入下方发光的榻榻米屋顶。细小的全息樱花在空中飞舞，捕捉着未来感十足的江户灯笼在反重力环的辅助下悬浮于半空中时散发的最后一丝光芒。

下方，数十名身着层叠和服与全息投影混合服饰的围观者挥舞着形似古老歌舞伎面具的发光扇子欢呼雀跃。一些人戴着狐狸精造型的增强现实（AR）头盔，他们的脸庞被神社墙壁上自动售货机闪烁的灯光照亮了一半。在一个角落里，一位装着机械手臂的老僧正平静地在一张漂浮的和纸卷轴上描绘着眼前的景象，他那双透过古董圆眼镜闪烁着微光的眼睛。

整幅作品以极富表现力的水墨晕染技法绘制而成，奔放的泼墨笔触勾勒出动感轨迹，精细的干笔阴影描绘出盔甲的纹理，淡雅的粉彩则突出了光源。画中刻意在战斗人物周围留出空白，以增强他们的存在感。画面左下角醒目地盖上了红色的艺术家印章（宝雷印），将传统技法与画面荒诞的现代感巧妙地融合在一起。
```

<a id="prompt-551"></a>
## 案例 551：现代芝加哥河滨清明上河图风格 (来源 [@dotey](https://x.com/dotey/status/1992469131438719122))

<div style="display: flex; justify-content: space-between;">
<img src="./images/551.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-现代芝加哥河滨清明上河图风格">
</div>

**提示词：**
```
A sweeping, highly detailed traditional Chinese ink and color handscroll painting on aged silk, perfectly emulating the artistic style, brushwork, and scattered point perspective of Zhang Zeduan's "Along the River During the Qingming Festival."

Central Scene: A bird's-eye view of the bustling modern Chicago riverfront. The focus is the massive steel bascule bridge (DuSable Bridge/Michigan Avenue Bridge), jammed with heavy contemporary traffic including countless cars, yellow taxis, and CTA buses, all rendered with precise traditional brushstrokes.

Environmental Details: The Chicago River below is filled with modern architectural tour boats, water taxis, and kayakers. The riverbanks are lined with dense, vintage-style Chicago skyscrapers (resembling the Wrigley Building and Tribune Tower), drawn using traditional "jiehua" architectural painting techniques. An elevated railway structure with a moving 'L' train is visible in the background.

Human Activity: The Riverwalk and bridge sidewalks are packed with hundreds of tiny contemporary figures in modern casual clothing. They are shown jogging, taking photos with smartphones, queuing at street food vendors (hot dog stands), and walking dogs. The entire scene is incredibly detailed, chaotic, and rendered in a muted, antique earth-tone palette.
```

**中文提示词：**
```
这是一幅气势恢宏、细节丰富的中国传统水墨彩绘手卷，绘制在古老的绢本上，完美地模仿了张择端《清明上河图》的艺术风格、笔法和散点透视法。

中心场景：俯瞰熙熙攘攘的现代芝加哥河滨。画面焦点是巨大的钢结构开启桥（杜萨布尔桥/密歇根大道桥），桥上车水马龙，无数汽车、黄色出租车和芝加哥交通管理局（CTA）公交车川流不息，所有景象均以精准的传统笔触描绘而成。

环境细节：下方芝加哥河上穿梭着现代风格的游船、水上出租车和皮划艇。河岸两侧林立着风格复古的芝加哥摩天大楼（类似箭牌大厦和论坛报大厦），这些建筑以传统的“画”技法绘制而成。远处可见高架铁路，一列“L”型列车正在行驶。

人类活动：河滨步道和桥边的人行道上挤满了数百个身着现代休闲服饰的小人。他们有的在慢跑，有的在用智能手机拍照，有的在街头小吃摊（热狗摊）前排队，有的在遛狗。整个场景细节丰富，略显杂乱，并以柔和的复古大地色调呈现。
```

<a id="prompt-550"></a>
## 案例 550：手绘风格的时尚风格概念分解图 (来源 [@cheerselflin](https://x.com/cheerselflin/status/1992877077570453712))

<div style="display: flex; justify-content: space-between;">
<img src="./images/550.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-手绘风格的时尚风格概念分解图">
</div>

**提示词：**
```
A fashion-style concept breakdown sheet in hand-drawn illustration style. 
Center: full-body view of a stylish, confident female character with a slightly sexy vibe (not explicit), in a dynamic yet natural pose. 
Surrounding: structured layout of her key components:
• Clothing layering – show outerwear, innerwear, tights (lace, sheer textures), shapewear with detailed pattern zoom-ins.  
• Expression sheet – 3-4 facial expressions (neutral, shy, surprised, focused).
• Close-up zooms – textures of fabric folds, skin details, hand gestures.
• Lifestyle & accessories – open handbag with daily items: lipstick, perfume, mirror compact, hand cream, diary, supplements.
• Material annotations – handwritten-style notes beside each item (e.g., “soft lace,” “matte leather,” “shade #520”).

Background: soft beige or parchment paper texture to evoke a design sketchbook.
Lighting: clean, soft shadows to unify the scene.
Output: high-quality 2D illustration in 4K, balanced between sensuality and fashion editorial.
Language: labels in Chinese + English.
```

**中文提示词：**
```
手绘风格的时尚风格概念分解图。
中心：一位时尚自信的女性角色的全身像，略带性感（但不露骨），姿态充满活力又自然。
周围环境：她的关键组成部分的结构化布局：
• 服装叠穿——展示外套、内衣、紧身裤（蕾丝、透明质地）、塑身衣，并放大细节图案。
• 表情表 – 3-4 种面部表情（中性、害羞、惊讶、专注）。
• 特写镜头——展现织物褶皱的纹理、皮肤细节、手势。
• 生活方式和配饰 – 打开手提包，里面装着日常用品：口红、香水、粉饼、护手霜、日记本、保健品。
• 材料注释 – 每件物品旁边的手写风格注释（例如，“柔软的蕾丝”、“哑光皮革”、“色号 #520”）。

背景：柔和的米色或羊皮纸纹理，以唤起人们对设计草图本的联想。
光线：干净、柔和的阴影使画面统一。
输出：4K 高清 2D 插图，兼具性感与时尚感。
语言：中文+英文标签。
```

<a id="prompt-549"></a>
## 案例 549：LINE风格半身Q版表情包 (来源 [@dotey](https://x.com/dotey/status/1993042754008686712))

<div style="display: flex; justify-content: space-between;">
<img src="./images/549.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-LINE风格半身Q版表情包">
</div>

**提示词：**
```
Create a set of colorful, hand-drawn LINE-style half-body Q-version emoji portraits based on the characters shown, ensuring accurate depiction of their head accessories.

Arrange the images in a 4x6 layout, featuring common chat phrases or relevant humorous memes.
Use handwritten-style fonts for text.
Output must be original—avoid direct copying of the reference image.
Final image should be in 4K resolution, 16:9 aspect ratio.
```

**中文提示词：**
```
根据所示角色，创作一套色彩鲜艳、手绘风格的 LINE 风格半身 Q 版表情符号肖像，确保准确地描绘出他们的头部饰品。

将图片排列成 4x6 的布局，内容以常见的聊天短语或相关的幽默表情包为特色。
文本请使用手写体字体。
输出内容必须为原创——避免直接复制参考图像。
最终图像应为 4K 分辨率，16:9 宽高比。
```

<a id="prompt-548"></a>
## 案例 548：仿真绣苏绣表情包 (来源 [@TaXue2025](https://x.com/TaXue2025/status/1993542832930668942))

<div style="display: flex; justify-content: space-between;">
<img src="./images/548.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-仿真绣苏绣表情包">
</div>

**中文提示词：**
```
生成一张 16:9、4K 分辨率的仿真绣苏绣表情包大图：

- 画面为 4×6 网格，共 24 个 1:1 方形小格，每格是一位同一角色的古典中式美人半身像表情包（胸部以上），脸部约占每格 60%–70%。
- 头饰、发型、服装风格严格参考提供的原始角色形象，保持一致，但不要原图复制。

风格要求：
- 整体为仿真绣苏绣作品：人物五官、皮肤、头发、衣纹和背景全部由细密丝线和刺绣针脚构成，使用仿真绣 + 乱针绣技法，丝线有光泽、针脚平齐细密，形成微微凸起的真实绣面。
- 底布为近乎纯白或极浅米色真丝绸，背景极简，仅有很淡云纹或暗纹，不加入复杂图案。

禁止：
- 不要油画、水彩、数码画笔纹理；
- 不要相机景深、虚化、炫光、镜头光斑和 UI 特效。

表情与文字：
- 24 格覆盖常见聊天情绪和娱乐 meme（如开心、无语、震惊、委屈、嫌弃、坏笑、吃瓜、躺平、笑死、我裂开了等）。
- 每一格配一条短句，使用手写风格简体中文，不用印刷体和英文。
```

<a id="prompt-547"></a>
## 案例 547：手绘日历插画 (来源 [@dotey](https://x.com/dotey/status/1993754650336428422))

<div style="display: flex; justify-content: space-between;">
<img src="./images/547.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-手绘日历插画">
<img src="./images/547-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-手绘日历插画">
</div>

**提示词：**
```
Please create a cute, stylish calendar illustration in a vertical (9:16) layout featuring a fresh, bright, hand-drawn style:

Illustration Requirements:

- The main character is a young, fashionable female with a cute and lively watercolor or hand-drawn texture, vibrant yet soft colors.
- Character features include large eyes, rounded rosy cheeks, and bold, fashionable accessories (e.g., sunglasses, hoop earrings, headscarves, headbands, bows, knit hats, etc.). Clothing should be bright, with dynamic and playful poses. Proportions may be slightly exaggerated (e.g., larger head, slender waist).
- Outfit and accessories must reflect seasonal elements, holidays, recommended activities ("auspicious items"), or distinctive local characteristics based on the user's location and input. Outfit description: [{Character Outfit Description}]
- Character positioned centrally or slightly right-aligned to leave ample whitespace for textual content.
- Pure white, minimalist background without additional decorative elements, emphasizing the character and text.

Calendar Layout:

- Prominent position at the top center: Gregorian date number [{Gregorian Date Number}] (large and eye-catching).
- Below the date number, display the English month [{English Month}].
- Below the English month, display the year [{Year Number}].
- Symmetrical layout left and right of the date: weekday in both local language [{Weekday in Local Language}] and English [{Weekday in English}], along with the lunar date and local holiday [{Lunar or Local Calendar Date}] [{Local Holiday}], ensuring clear, elegant fonts.

"Recommended Activities" and Inspirational Quote:

- Vertically aligned on the left side in bold handwriting: [{Recommended Activities}], using brush calligraphy for Chinese users and complementary handwriting style for other languages, slightly larger and vertically arranged.
- To the right of "Recommended Activities," arrange vertically an inspirational and comforting quote [{Inspirational Quote}] in slightly smaller matching handwriting.

Localized Elements:

- Incorporate distinct local cultural elements or landmarks based on the user's current location or input into the character's outfit, accessories, or details (e.g., city landmarks, climate characteristics, local cultural motifs).

General Guidelines:

- All elements must be neatly arranged with balanced whitespace.
- Ensure text readability without overlapping or obscuring the illustration.
- Replace all placeholder content with information dynamically generated based on user input or system-provided user data.
```

**中文提示词：**
```
请生成一张可爱、时尚的竖版（9:16）日历插画，风格为清新明快的手绘插画风：

一、插画要求：

- 人物为年轻时尚的女生形象，风格可爱灵动，采用水彩或手绘质感，色彩鲜艳柔和。
- 人物特征包括：大眼睛、圆润的红润脸颊，佩戴夸张时尚的配饰（如墨镜、圆环耳环、头巾、发带或蝴蝶结、毛线帽等），服装色彩明亮，人物姿势生动俏皮，身体比例适当夸张（如头部稍大、腰身纤细）。
- 根据节假日、“宜事项”或所处季节以及用户所在位置的特色元素，配套的人物造型穿着描述为：【{人物造型穿着描述}】
- 人物位于画面中央或偏右，为文字内容留出充分的留白空间。
- 背景纯白、极简，不含额外装饰元素，突出主体人物与文字。

二、日历元素布局：

- 上方正中央显著位置：公历日期数字【{公历日期数字}】（字体大而醒目）
- 日期数字下方配有英文月份【{英文月份}】
- 日期左右两侧分别标注星期中英文【{星期中文}】【{星期英文}】和农历日期及节假日【{农历日期中文}】【{节假日}】，布局左右对称，字体清晰优雅。

三、“宜”事项与励志句子：

- 左侧竖排粗体显示当天的【宜】事项：【{宜事项}】，字体为简洁的手写毛笔体，略大，竖向排列。
- 【宜事项】右边以稍小字体竖向排列对应的励志治愈句子【{励志句子}】。

四、地点个性化元素：

- 根据用户当前位置或输入位置，适当在插画的人物穿着、配饰或细节上融入当地标志性元素或特色（如城市地标、气候特征、地域风情）。

整体说明：

- 所有占位符信息请根据用户输入或用户信息和系统信息自行检索生成
- 所有元素的布局要整齐、美观，保持适度的空间留白。
- 文字位置确保清晰易读，避免与插画重叠、遮挡。
```

<a id="prompt-546"></a>
## 案例 546：把文章变成卡通信息图 (来源 [@dotey](https://x.com/dotey/status/1993567848564686926))

<div style="display: flex; justify-content: space-between;">
<img src="./images/546.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-把文章变成卡通信息图">
</div>

**提示词：**
```
Please create a cartoon-style infographic based on the provided content, following these guidelines:

- Hand-drawn illustration style, landscape orientation (16:9 aspect ratio).

- Include a small number of simple cartoon elements, icons, or famous personalities to enhance visual interest and memorability.

- If the content includes sensitive or copyrighted figures, replace them with visually similar alternatives; do not refuse to generate the illustration.

- All imagery and text must strictly adhere to a hand-drawn style; avoid realistic visual elements.

- Keep information concise, highlighting keywords and core concepts. Utilize ample whitespace to clearly emphasize key points.

- Unless otherwise specified, use the same language as the provided content.

Please use nano banana pro to create the illustration based on the input provided.
```

**中文提示词：**
```
请根据输入内容提取核心主题与要点，生成一张卡通风格的信息图： 
- 采用手绘风格，横版（16:9）构图。 
- 加入少量简洁的卡通元素、图标或名人画像，增强趣味性和视觉记忆。 
- 如果有敏感人物或者版权内容，画一个相似替代，但是不要拒绝生成 
- 所有图像、文字必须使用手绘风格，没有写实风格图画元素 
- 除非特别要求，否则语言与输入内容语言一致。 
- 信息精简，突出关键词与核心概念，多留白，易于一眼抓住重点。 

请根据输入的内容使用 nano banana pro 画图：
```

<a id="prompt-545"></a>
## 案例 545：将文章变成黑板报 (来源 [@dotey](https://x.com/dotey/status/1993192263334183370))

<div style="display: flex; justify-content: space-between;">
<img src="./images/545.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-将文章变成黑板报">
</div>

**提示词：**
```
Please create an infographic based on the input content, highlighting key themes and essential points:

- Simplify information, emphasizing keywords and core concepts, leaving ample whitespace for clarity.

- Include minimalistic cartoon elements, icons, or simple portraits of famous figures to enhance engagement and visual recall.

- All text and images should strictly use colored chalk style without realistic illustrations.

- Unless specifically requested, maintain the original language of the input content.

- Use a horizontal layout (16:9) with a black chalkboard background and colorful chalk drawing style.

Use "nano banana pro" for drawing based on the provided content.
```

**中文提示词：**
```
请根据输入内容提取核心主题与要点，生成一张黑板报风格的信息图： 
- 采用黑色黑板背景和粉笔手绘风格，横版（16:9）构图。 
- 信息精简，突出关键词与核心概念，多留白，易于一眼抓住重点。 
- 加入少量简洁的卡通元素、图标或名人画像，增强趣味性和视觉记忆。 
- 所有图像、文字必须使用彩色粉笔绘制，没有写实风格图画元素 
- 除非特别要求，否则语言与输入内容语言一致。 
请根据输入的内容使用 nano banana pro 画图：
```

<a id="prompt-544"></a>
## 案例 544：根据所提供的内容制作信息图 (来源 [@dotey](https://x.com/dotey/status/1993192263334183370))

<div style="display: flex; justify-content: space-between;">
<img src="./images/544.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-根据所提供的内容制作信息图">
</div>

**提示词：**
```
Please create an infographic based on the input content, highlighting key themes and essential points:

- Simplify information, emphasizing keywords and core concepts, leaving ample whitespace for clarity.

- Include minimalistic cartoon elements, icons, or simple portraits of famous figures to enhance engagement and visual recall.

- All text and images should strictly use colored chalk style without realistic illustrations.

- Unless specifically requested, maintain the original language of the input content.

- Use a horizontal layout (16:9) with a black chalkboard background and colorful chalk drawing style.

Use "nano banana pro" for drawing based on the provided content.
```

**中文提示词：**
```
请根据所提供的内容制作信息图，突出关键主题和要点：

- 简化信息，强调关键词和核心概念，留出足够的空白以求清晰明了。

- 加入极简的卡通元素、图标或名人肖像，以增强参与度和视觉记忆。

所有文字和图片均应严格采用彩色粉笔风格，不得使用写实插图。

- 除非另有要求，否则请保持输入内容的原始语言。

- 使用横向布局（16:9），黑色黑板背景，彩色粉笔画风格。
请根据输入的内容使用 nano banana pro 画图：
```

<a id="prompt-543"></a>
## 案例 543：城市动态天气卡片 (来源 [@dotey](https://x.com/dotey/status/1993729800922341810))

<div style="display: flex; justify-content: space-between;">
<img src="./images/543.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-城市动态天气卡片">
<img src="./images/543-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-城市动态天气卡片">
</div>

**提示词：**
```
Present a clear, 45° top-down view of a vertical (9:16) isometric miniature 3D cartoon scene, highlighting iconic landmarks centered in the composition to showcase precise and delicate modeling.

The scene features soft, refined textures with realistic PBR materials and gentle, lifelike lighting and shadow effects. Weather elements are creatively integrated into the urban architecture, establishing a dynamic interaction between the city's landscape and atmospheric conditions, creating an immersive weather ambiance.

Use a clean, unified composition with minimalistic aesthetics and a soft, solid-colored background that highlights the main content. The overall visual style is fresh and soothing.

Display a prominent weather icon at the top-center, with the date (x-small text) and temperature range (medium text) beneath it. The city name (large text) is positioned directly above the weather icon. The weather information has no background and can subtly overlap with the buildings.

The text should match the input city's native language.
Please retrieve current weather conditions for the specified city before rendering.

City name:【上海】
```

**中文提示词：**
```
以清晰的 45° 俯视视角呈现垂直 (9:16) 等距微缩 3D 卡通场景，突出构图中的标志性地标，以展示精确而精致的建模。

场景采用柔和细腻的纹理，搭配逼真的PBR材质和柔和自然的灯光阴影效果。天气元素巧妙地融入城市建筑之中，在城市景观与大气条件之间建立起动态的互动，营造出身临其境的天气氛围。

采用简洁统一的构图，运用极简主义美学和柔和的纯色背景，突出主要内容。整体视觉风格清新舒缓。

在顶部中央醒目位置显示天气图标，其下方显示日期（超小字体）和温度范围（中等字体）。城市名称（大字体）位于天气图标正上方。天气信息没有背景，可以与建筑物略微重叠。

文本应与输入城市的母语相符。
渲染前请先获取指定城市的当前天气状况。

城市名称：【上海】
```

<a id="prompt-542"></a>
## 案例 542：服装设计手稿 (来源 [@ZHO_ZHO_ZHO](https://x.com/ZHO_ZHO_ZHO/status/1993686622257442922))

<div style="display: flex; justify-content: space-between;">
<img src="./images/542.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-服装设计手稿">
</div>

**中文提示词：**
```
4:3 比例

一幅专业且细致的时尚Pixar 3d风格创意板，以干净、高分辨率的风格呈现，描绘一位纤细高挑的白人女性模特，0.6腿身比。模特以标准的T台步姿态出现，迈步前行，展示一套现代而充满活力的街头风造型，背景为纯净的白色。

整套服装以【图片图案】为纹样。她穿着一件独特的短款上衣，高仿领设计，左肩有几何形状的割缺露肤，右侧为细细的吊带，上面均饰有标志性的图案。外搭一件宽松、方正的飞行员式外套，落肩设计、宽袖、袖口收紧。外套以【图片图案主色】大面积面料为基础，并在显著位置加入【图案辅色】及图案面料拼接，同时覆盖着一层独特的半透明白色布料，从腰部周围飘逸延展，增添层次感与飘渺气质。下身为切片剪裁的廓形群，呈浅【图案主色】，同样加入了图案布料的拼接。整套造型最终以干净利落的白色运动鞋收尾。

模特拥有深棕色的长发，带着轻微的自然波浪，随风自由散落在肩头与脸庞周围。她的面容精致，椭圆形脸型，淡雅妆容，自然眉形，深邃的眼眸，柔和的粉色唇色。表情中性、沉静却自信。

灯光为柔和、明亮且均匀的摄影棚光效，为布料带来轻柔光泽，并细腻地勾勒出服装轮廓与模特五官，同时投射极少而柔软的阴影以增加层次深度。

白色的设计画布，点缀着额外的设计元素：3-4 幅极简的铅笔线条设计草图分布于画面右侧与左下方。在左上角的位置有一个放大的彩色细节框，展示面料图案的精确纹理。背景上散落着以黑色墨水书写的各种手写笔记与标注，是设计师的注解，为整体带来专业设计概念板的视觉效果。整体氛围优雅、艺术且引领潮流。
```

<a id="prompt-541"></a>
## 案例 541：高细节的3D信息图海报 (来源 [@cnyzgkc](https://x.com/cnyzgkc/status/1994003408207139013))

<div style="display: flex; justify-content: space-between;">
<img src="./images/541.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-高细节的3D信息图海报">
</div>

**中文提示词：**
```
请用中文制作一张高细节的3D信息图海报，介绍印尼传统天贝的制作过程，海报中需包含一个可爱的3D厨师角色Koki Cubby（胖乎乎的，可爱，戴着白色厨师帽和围裙，表情丰富，色彩鲜艳）。
制作过程的每个步骤都应有Koki Cubby的帮助或讲解。
海报颜色：白色、叶绿色、大豆黄、天贝棕色。
视觉风格：3D半写实食物插画+可爱角色，柔和的光线，高细节。
大标题：
“天贝制作过程——从大豆到成品”
主图：
逼真的3D天贝盒，盒身用香蕉叶或半透明塑料包裹，盒内有纹理清晰的天贝切片和白色酵母（根霉菌）丝。Koki Cubby站在旁边，指着成品天贝。
大豆挑选与分拣（3D场景）
• 木桌上摆放着干大豆的3D插图。
• 厨师库比拿着小铲子检查大豆的质量。
• 文字：“选择优质、干净、无破损的大豆。”
大豆浸泡（3D碗）
• 大豆浸泡在一大碗水中，可见其膨胀。
• 3D水泡。
• 厨师库比用锅铲搅拌水。
• 文字：“浸泡6-12小时，让大豆膨胀。”
• 煮沸（3D锅蒸）
• 一大锅大豆正在煮沸。
• 3D热蒸汽细节。
• 厨师库比拿着厨房计时器。
• 文字：“煮至软烂，杀死有害细菌。”
• 大豆去皮及去缩
• 挤压并揉搓大豆以去除外皮。
• 使用小型3D过滤机或手工操作。
• 厨师Cubby正在帮忙去除大豆皮。
• 文字：“去除大豆皮有助于酵母发酵。”
大豆过筛及干燥
• 将湿大豆放入大筛子中沥干水分。
• 厨师Cubby用小风扇吹干或用毛巾吸干水分。
• 文字：“确保大豆干燥——水分过多会抑制发酵。”
• 添加天贝酵母（根霉菌）
• 一碗3D酵母呈白色细粉状。
• 厨师Cubby将酵母均匀地撒在大豆上。
• 文字：“将天贝酵母搅拌均匀。”
• 包裹（叶子/塑料袋）
• 将大豆放入香蕉叶或带孔塑料袋中。
• 小厨师卡比用小手按压，使之折叠整齐。
• 文字：“包裹紧实，才能完美发酵。”
天贝发酵（24-48 小时）
• 将天贝放在通风的木架上。
• 由于根霉菌的作用，天贝的质地开始变白。
• 小厨师卡比坐在一旁等待，看着温度计。
• 文字：“在 30-32°C 下发酵。”
天贝发酵完成
• 天贝质地紧实，呈白色，带有粗壮整齐的酵母纤维。
• 逼真的 3D 天贝切片展示了其内部纹理。
• 小厨师卡比竖起大拇指。
• 文字：“天贝可以烹饪了——美味、健康、富含蛋白质！”
海报风格
• 3D 立体信息图，采用简洁的面板、小图标和连接时间线。
• 柔和的白绿色渐变背景。
• 大豆和豆豉带有微妙的光晕。
• 现代无衬线字体。
• 4K 高分辨率。
• 简洁、专业、教育性强，适合儿童和成人阅读。
把这个提示词中的食物改成小笼包
```

<a id="prompt-540"></a>
## 案例 540：物品拆解图 (来源 [@PandaTalk8](https://x.com/PandaTalk8/status/1993645881254658229))

<div style="display: flex; justify-content: space-between;">
<img src="./images/540.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-物品拆解图">
</div>

**提示词：**
```
Ultra-realistic 8K flat-lay photo in strict knolling style. Top-down 90º shot of the object from the attached image, fully disassembled into 8–12 key parts and arranged in a clean grid or radial pattern on a minimalist wooden or matte gray table. Even spacing, perfect alignment, no overlaps, no extra objects. Soft, diffused multi-source lighting with subtle shadows, neutral color balance and crisp focus across the whole frame. Highly detailed real-world materials (metal, plastic, rubber grips, circuit boards, screws). For every part, add a thin white rectangular frame and a short, sharp English label in clean sans-serif text, placed beside the component without covering it; annotations must be legible but unobtrusive.
```

**中文提示词：**
```
超逼真的 8K 平面照片，采用严格的摆拍风格。从上方俯视 90° 拍摄附图中的物体，将其完全拆解成 8-12 个主要部件，并以简洁的网格或放射状图案排列在极简主义的木质或哑光灰色桌面上。部件间距均匀，完美对齐，无重叠，无多余物体。柔和的漫射多光源照明，阴影微妙，色彩平衡自然，整个画面清晰锐利。高度还原真实材质（金属、塑料、橡胶握把、电路板、螺丝）。每个部件旁边都应添加一个细长的白色矩形框，以及一个简洁清晰的英文标签（无衬线字体），标签应放置在部件旁边，但不能遮挡部件；注释必须清晰易读，但又不影响整体美观。
```

<a id="prompt-539"></a>
## 案例 539：根据歌词生成电影般的图像 (来源 [@jamesyeung18](https://x.com/jamesyeung18/status/1992490800710578615))

<div style="display: flex; justify-content: space-between;">
<img src="./images/539.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-根据歌词生成电影般的图像">
</div>

**提示词：**
```
generate a cinematic sequence of images for a song based on the lyrics [quote lyrics].
```

**中文提示词：**
```
根据歌词 [引用歌词] 为一首歌生成电影般的图像序列。
```

<a id="prompt-538"></a>
## 案例 538：创作一个电影分镜脚本 (来源 [@jamesyeung18](https://x.com/jamesyeung18/status/1992597408128045462))

<div style="display: flex; justify-content: space-between;">
<img src="./images/538.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-创作一个电影分镜脚本">
</div>

**提示词：**
```
Create a cinematic storyboard of the first page of 1984, by using widescreen panels
```

**中文提示词：**
```
使用宽屏分镜，为《1984》第一页创作一个电影分镜脚本。
```

<a id="prompt-537"></a>
## 案例 537：风格学习 (来源 [@sundyme](https://x.com/sundyme/status/1992753783731064990))

<div style="display: flex; justify-content: space-between;">
<img src="./images/537.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-风格学习">
</div>

**中文提示词：**
```
学习这种风格，设计一款复古单反相机。
```

<a id="prompt-536"></a>
## 案例 536：食物制作成的超写实3D写实图 (来源 [@Kerroudjm](https://x.com/Kerroudjm/status/1993044556242166220))

<div style="display: flex; justify-content: space-between;">
<img src="./images/536.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-食物制作成的超写实3D写实图">
</div>

**提示词：**
```
Ultra-realistic 3D render of [MONUMENT] made entirely out of [FOOD], seamlessly integrated into a photorealistic, bustling cityscape of [REAL CITY]. The object must be instantly recognizable as [MONUMENT], but entirely composed of realistic textures and materials from [FOOD]. Ensure accurate proportions and architectural detail, adapted to the food’s form, appearing as if it truly belongs in the city. The city should be vibrant and detailed, with realistic lighting that complements the monument. 1:1 aspect ratio, no text or extra elements.
```

**中文提示词：**
```
完全由[食物]制成的[纪念碑]的超写实3D渲染，无缝融入[真实城市]的照片级写实、繁忙的城市景观中。该物体必须能被一眼辨识为[纪念碑]，但完全由[食物]的写实纹理和材质构成。确保准确的比例和建筑细节，并适应食物的形态，使其看起来仿佛真正属于这座城市。城市应充满活力且细节丰富，并具有与该纪念碑相得益彰的写实光影。1:1 纵横比，无文本或额外元素。
```

<a id="prompt-535"></a>
## 案例 535：将paper转换成教授白板的图片 (来源 [@skirano](https://x.com/skirano/status/1991527921316773931))

<div style="display: flex; justify-content: space-between;">
<img src="./images/535.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-将paper转换成教授白板的图片">
</div>

**提示词：**
```
Take this paper and transform in the image of a professor whiteboard image. diagrams, arrows, boxes and captions explaining the core idea visually. Use colors as well
```

**中文提示词：**
```
请将这张纸转换成教授白板的图片。用图表、箭头、方框和说明文字，以可视化的方式解释核心概念。也可以使用颜色。
```

<a id="prompt-534"></a>
## 案例 534：四季变化信息图 (来源 [@jacalulu](https://x.com/jacalulu/status/1991547184731549946))

<div style="display: flex; justify-content: space-between;">
<img src="./images/534.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-四季变化信息图">
</div>

**提示词：**
```
generate a detailed infographic that explains the 4 seasons as experienced in Toronto, Canada. The infographic is for a grade 3 classroom. Make it in the style of Eric Carle
```

**中文提示词：**
```
请制作一张详细的信息图，解释加拿大安大略省多伦多市的四季变化。这张信息图是为三年级课堂设计的，风格请参考艾瑞·卡尔的绘本风格。
```

<a id="prompt-533"></a>
## 案例 533：烤面包流程图 (来源 [@emollick](https://x.com/emollick/status/1991549167773376978))

<div style="display: flex; justify-content: space-between;">
<img src="./images/533.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-烤面包流程图">
</div>

**提示词：**
```
i need a flowchart for how to toast bread, make it as wacky and over the top and complicated as possible.
```

**中文提示词：**
```
我需要一个烤面包的流程图，越古怪、越夸张、越复杂越好。
```

<a id="prompt-532"></a>
## 案例 532：Markdown转换为信息图 (来源 [@tobi](https://x.com/tobi/status/1991706720750694601))

<div style="display: flex; justify-content: space-between;">
<img src="./images/532.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-Markdown转换为信息图">
</div>

**提示词：**
```
Make this markdown transcript into a infographic
```

**中文提示词：**
```
将此 Markdown 文档转换为信息图
```

<a id="prompt-531"></a>
## 案例 531：让人做出Emoji的表情 (来源 [@umesh_ai](https://x.com/umesh_ai/status/1992849169602818431))

<div style="display: flex; justify-content: space-between;">
<img src="./images/531.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-让人做出Emoji的表情">
</div>

**提示词：**
```
Make this person do the expression of emoji [EMOJI]
```

**中文提示词：**
```
让这个人做出表情符号[EMOJI]的表情
```

<a id="prompt-530"></a>
## 案例 530：长平之战信息图 (来源 [@imxiaohu](https://x.com/imxiaohu/status/1993154201699160066))

<div style="display: flex; justify-content: space-between;">
<img src="./images/530.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-长平之战信息图">
</div>

**中文提示词：**
```
用一组图，描绘公元前260年5月至10月之间，东经112°41到113°09′，，北纬35°39′到35°59′ 发生的事情，并给出详细的信息图，图上要用中文说明发生了什么事情，以及结果的重要信息
```

<a id="prompt-529"></a>
## 案例 529：识字小报元提示词 (来源 [@lxfater](https://x.com/lxfater/status/1993238777033105634))

<div style="display: flex; justify-content: space-between;">
<img src="./images/529.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-识字小报元提示词">
</div>

**中文提示词：**
```
请生成一张儿童识字小报《游乐园》，竖版 A4，学习小报版式，适合 5–9 岁孩子 认字与看图识物。 一、小报标题区（顶部） 顶部居中大标题：《游乐园识字小报》 风格：十字小报 / 儿童学习报感 文本要求：大字、醒目、卡通手写体、彩色描边 装饰：周围添加与 游乐园 相关的贴纸风装饰，颜色鲜艳 二、小报主体（中间主画面） 画面中心是一幅 卡通插画风的「游乐园」场景： 整体气氛：明亮、温暖、积极 构图：物体边界清晰，方便对应文字，不要过于拥挤。 场景分区与核心内容 核心区域 A（主要对象）：表现 游乐园 的核心活动（孩子们在玩游乐设施）。 核心区域 B（配套设施）：展示相关的工具或物品（售票、零食、指示设施）。 核心区域 C（环境背景）：体现环境特征（入口、路牌、彩旗、绿地等）。 主题人物 角色：1 位可爱卡通人物（身份：游乐园工作人员/游客小朋友皆可）。 动作：正在进行与场景相关的自然互动（如微笑指路、挥手欢迎、陪孩子玩）。 三、必画物体与识字清单（Generated Content） 请务必在画面中清晰绘制以下物体，并为其预留贴标签的位置： 1. 核心角色与设施： gōng zuò rén yuán 工作人员 shòu piào chù 售票处 guò shān chē 过山车 mó tiān lún 摩天轮 xuán zhuǎn mǎ 旋转木马 2. 常见物品/工具： piào 票 qì qiú 气球 bīng jī líng 冰淇淋 bào mǐ huā 爆米花 táng hú lu 糖葫芦 miàn jù 面具 wán jù 玩具 xiǎo qí zi 小旗子 3. 环境与装饰： rù kǒu 入口 chū kǒu 出口 zhǐ shì pái 指示牌 cǎi qí 彩旗 guǎng chǎng 广场 (注意：画面中的物体数量不限于此，但以上列表必须作为重点描绘对象；总计 18 个典型名词，适合 5–9 岁儿童识字。) 四、识字标注规则 对上述清单中的物体，贴上中文识字标签： 格式：两行制（第一行拼音带声调，第二行简体汉字）。 样式：彩色小贴纸风格，白底黑字或深色字，清晰可读。 排版：标签靠近对应的物体，不遮挡主体。 五、画风参数 风格：儿童绘本风 + 识字小报风 色彩：高饱和、明快、温暖 (High Saturation, Warm Tone) 质量：8k resolution, high detail, vector illustration style, clean lines.
```

<a id="prompt-528"></a>
## 案例 528：大幅油画肖像 (来源 [@ShreyaYadav___](https://x.com/ShreyaYadav___/status/1993331098005520856))

<div style="display: flex; justify-content: space-between;">
<img src="./images/528.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-大幅油画肖像">
</div>

**提示词：**
```
Use the uploaded photo as the face reference for both the large painted portrait in the background and the full-body woman in the foreground. Create a stylish cinematic scene with a woman sitting confidently on the table in her personal luxury office room. She wears a loose pastel-toned dress or an oversized soft-colored suit, blending elegance and subtle boldness.The background features a huge artistic portrait of the same woman, painted with expressive pastel brushstrokes — pink, peach, beige — dynamic, sweeping strokes that create movement. Soft daylight, fashion-editorial mood, clean composition.
Signature: Shreya Yadav
```

**中文提示词：**
```
使用上传的照片作为面部参考，绘制背景中的大幅油画肖像和前景中的全身女性形象。创作一个时尚的电影场景：一位女性自信地坐在她豪华私人办公室的桌子上。她身着宽松的粉彩色连衣裙或宽松的浅色套装，优雅中透着一丝大胆。背景是一幅同一位女性的巨幅艺术肖像，以富有表现力的粉彩色笔触——粉色、桃色、米色——绘制而成，动感流畅的笔触营造出灵动的氛围。柔和的日光，时尚大片的风格，简洁的构图。
签名：Shreya Yadav
```

<a id="prompt-527"></a>
## 案例 527：我的世界神秘时代信息卡 (来源 [@manateelazycat](https://x.com/manateelazycat/status/1993248526479114602))

<div style="display: flex; justify-content: space-between;">
<img src="./images/527.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-我的世界神秘时代信息卡">
</div>

**中文提示词：**
```
绘制使用中文绘制成为完整的信息卡输出，尽可能的使用PUNCH的展示所有内容在一页内容！这是一个基于您提供的文章内容设计的完整信息卡片。可以包含香蕉的形象元素展示，为了达到“PUNCH”的效果，我采用了模块化设计，提炼了核心关键词，并配合了视觉符号和紧凑的排版，强调视觉冲击力和信息获取效率。

内容是我的世界神秘时代1.7.10版本的核心玩法

一幅展示《我的世界》神秘时代 1.7.10 核心玩法的插画，

包含魔力节点、研究桌、魔杖、注魔祭坛、坩埚炼金、傀儡自动化，

画面充满奥术符文、紫色和蓝色的魔法能量，具有神秘感与古典魔法科技风格，

带有漂浮的魔法书、Vis 流动特效、魔法装置运转的细节。

高质量、精细纹理、发光效果、幻想风。
```

<a id="prompt-526"></a>
## 案例 526：流年运势图 (来源 [@MindfulReturn](https://x.com/MindfulReturn/status/1993101356857729434))

<div style="display: flex; justify-content: space-between;">
<img src="./images/526.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-流年运势图">
</div>

**中文提示词：**
```
用一个长图生成我的流年运势，标识出他命运齿轮启动点，发生的可能性和方向。图片标题就叫你的命运齿轮。绘制使用中文绘制成为完整的信息卡输出，尽可能的使用PUNCH的展示所有内容在一页内容！基于提供的文章内容设计的完整信息卡片。为了达到“PUNCH”的效果，采用了模块化设计，提炼了核心关键词，并配合了视觉符号和紧凑的排版，强调视觉冲击力和信息获取效率。
```

<a id="prompt-525"></a>
## 案例 525：Labubu和迪丽热巴高端时尚跨页大片 (来源 [@LufzzLiz](https://x.com/LufzzLiz/status/1993449671445139756))

<div style="display: flex; justify-content: space-between;">
<img src="./images/525.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-Labubu和迪丽热巴高端时尚跨页大片">
</div>

**中文提示词：**
```
身份锁定：迪丽热巴 (Dilraba Dilmurat)
IP 联结：Pop Mart - Labubu (The Monsters)
风格基调：超现实 × 超真实 / 城市街头 / 高级时装感
【项目交付：Pop Mart《THE MONSTERS》× 迪丽热巴 高端时尚跨页大片】
作品名为：《双重曝光：城市奇遇 / DOUBLE EXPOSURE: URBAN ODYSSEY》
(以下为最终成片的高精度视觉描述，模拟高端杂志跨页呈现效果)
【整体视觉】
一幅横向展开的 4K 高清杂志跨页。视觉语言融合了纪实街拍的粗颗粒胶片感与超现实主义的精致洁癖感。左右页之间被一道极具张力的“撕裂与颜料涂抹”艺术边界分割，仿佛现实世界被怪诞力量撕开一角。
【左页 (60%)：主封面大片 Visual Focus】
光影与场景：
场景设定在东京涩谷或上海法租界的黄昏街头。金色的夕阳余晖（Golden Hour）从侧后方打入，在迪丽热巴的发丝和 Labubu 的绒毛上勾勒出绝美的金色轮廓光。背景是虚化但可辨识的繁忙十字路口、霓虹灯牌和移动的车流光影，景深极具电影感。
人物主体（迪丽热巴）：
面孔 100% 锁定迪丽热巴。她呈现出一种松弛而巨星的街拍状态，身体微侧，回头看向镜头，眼神里交织着酷感与被伙伴逗乐的笑意。她戴着复古报童帽，身着廓形解构的卡其色风衣，领口露出复杂的格纹衬衫与蕾丝打底层次，颈间系着松垮的拼色领带。
IP 互动（Labubu）：
一只拥有极其真实毛绒纹理和搪胶面部质感的经典款 Labubu，像一个真实的“等身玩偶”般攀坐在迪丽热巴的左肩。它穿着一套精细度极高的“微缩定制版”卡其风衣和迷你格纹领带。Labubu 脸上挂着标志性的坏笑，一只爪子正淘气地掀起迪丽热巴报童帽的帽檐，仿佛在搞恶作剧。
版面设计：
左上角叠加着极具冲击力的时尚衬线字体标题：
DILRABA × LABUBU
THE MONSTER ISSUE
【右页 (40%)：专业边栏内容 Editorial Sidebar】
氛围标签区 (Top)：
在撕裂边界的右侧，悬浮着半透明的胶带风格标签：
STYLE: Retro Streetwear (复古街头)
MOOD: Playful & Edgy (俏皮前卫)
LOCATION: XYZ Crossing, 17:45 PM
3.1 色彩情绪卡 (Palette - Middle)：
五个带有磨砂质感的圆形色卡一字排开，精准提炼了画面核心色彩：
● Khaki #C3B091 (风衣主调)
● Vintage Plaid Red #9E2A2B (格纹元素)
● Lace Cream #F5F5DC (蕾丝内搭)
● Warm Sunset #FFD700 (环境光)
● Urban Grey #708090 (街道背景)
3.2 单品拆解 (OOTD STYLE - Bottom)：
以干净的“幽灵人台”形式展示核心单品，如同奢侈品目录页：
[图示：卡其色解构风衣] Deconstructed Trench Coat / ¥ 4,800
[图示：复古报童帽] Vintage Newsboy Cap / ¥ 750
[图示：拼色格纹领带] Patchwork Plaid Tie / ¥ 520
[图示：Labubu 微缩风衣手办] Labubu × Dilraba Limited Figure (Not for sale)
艺术总监结语：
“任务完美执行。我们成功捕捉到了迪丽热巴身上那股自在的巨星松弛感，并让 Labubu 以一种令人信服的‘真实生物感’介入其中。这是一次打破次元壁的完美共谋，画面充满了叙事张力与高级时装屋的质感。”
```

<a id="prompt-524"></a>
## 案例 524：风格化的3D人物漫画 (来源 [@rovvmut_](https://x.com/rovvmut_/status/1993255617855729818))

<div style="display: flex; justify-content: space-between;">
<img src="./images/524.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-风格化的3D人物漫画">
</div>

**提示词：**
```
A highly stylized 3D caricature of the person in the uploaded image, with expressive facial features, and playful exaggeration. Rendered in a smooth, polished style with clean materials and soft ambient lighting. Bold color background to emphasize the character’s charm and presence.
```

**中文提示词：**
```
根据上传的图片，创作一幅风格化的3D人物漫画，面部表情丰富，风格夸张活泼。渲染风格流畅精致，材质干净，环境光柔和。背景采用醒目的色彩，以突出人物的魅力和存在感。
```

<a id="prompt-523"></a>
## 案例 523：一张年轻女性的逼真特写自拍照 (来源 [@xmiiru_](https://x.com/xmiiru_/status/1993206753236787443))

<div style="display: flex; justify-content: space-between;">
<img src="./images/523.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-一张年轻女性的逼真特写自拍照">
</div>

**提示词：**
```
{
  "subject": "Baby ꕤ Blue",
  "description": "Create a realistic close-up selfie of a young woman (face must be 100% unchanged). The photo is taken with a digital camera in a dimly lit room using a powerful camera flash, creating sharp contrast between the illuminated face and the dark background. The color tones combine a cozy feeling with modern simplicity, featuring cool tones and soft textures of the knitted clothing.",
  "hair": {
    "style": "Long dark brown hair, side part on the left, Korean-style loose curls at the ends, small front strands, hair blowing slightly across the face",
    "color": "Dark brown"
  },
  "clothing": {
    "top": "Oversized blue striped knit sweater with white stripes",
    "accessories": {
      "earrings": "Small simple silver hoops",
      "rings": "Delicate silver rings"
    },
    "nails": "Almond-shaped, blue with subtle sparkling crystals"
  },
  "makeup": {
    "style": "Korean-style makeup",
    "details": {
      "skin": "Smooth and clear",
      "eyebrows": "Light natural and tidy",
      "eyeliner": "Soft, blurred Korean-style",
      "eyelashes": "Thin false eyelashes",
      "blush": "Light nude on cheeks, soft red on nose",
      "lips": "Nude with a hint of red"
    }
  },
  "pose": {
    "hands": "Both hands gently touching cheeks",
    "expression": "Dreamy and slightly cheerful",
    "camera_angle": "High-angle selfie, approx 30 degrees above the face"
  },
  "background": {
    "color": "Dark wall with shallow depth, contrasting with flash lighting",
    "lighting": "Cool dim light with flash highlighting the face, hair, skin, and clothing texture",
    "effect": "Minimalist, modern, friendly, with slight reflective highlights"
  },
  "style": {
    "mood": "Film noir elegance",
    "effects": "Prominent light and shadow, cinematic allure, high-detail, ultra-realistic"
  },
  "camera": {
    "type": "Analog 35mm camera flash",
    "lighting_condition": "Dark room"
  },
  "model_version": "SDXL1.0"
}
```

**中文提示词：**
```
{
主题："Baby ꕤ Blue",
描述：拍摄一张年轻女性的逼真特写自拍照（面部必须完全不变）。照片需在光线昏暗的房间内使用数码相机拍摄，并使用强力闪光灯，使明亮的脸部与黑暗的背景形成鲜明对比。色彩搭配应兼具温馨舒适与现代简约风格，以冷色调和针织服装的柔软质感为特色。
“头发”： {
“发型”：“深棕色长发，左侧分，发尾韩式蓬松卷曲，前额留有几缕碎发，头发微微飘动，遮住脸庞。”
颜色：深棕色
},
“衣服”： {
上衣：宽松的蓝色条纹针织毛衣，带有白色条纹。
“配件”： {
“耳环”：“小巧简约的银色耳环”，
“戒指”：精致的银戒指
},
“指甲”：杏仁形，蓝色，带有闪亮的水晶
},
“化妆品”： {
“风格”：“韩式妆容”，
“细节”： {
“肌肤”：“光滑透亮”，
“眉毛”：“清淡自然，整齐干净”，
“眼线”: “柔和、晕染的韩式”
“假睫毛”： “纤细的假睫毛”，
“腮红”：“脸颊上淡淡的裸色，鼻子上柔和的红色”，
“唇部”：“裸色带一丝红色”
}
},
"姿势": {
“双手”：“双手轻轻抚摸脸颊”，
“表情”：“梦幻而略带欢快”
"camera_angle": "高角度自拍，镜头距离面部约30度"
},
“背景”： {
“颜色”：“深色墙壁，深度较浅，与闪光灯照明形成对比”，
“照明”：“冷色调的昏暗灯光，闪光灯突出面部、头发、皮肤和衣服的纹理”，
效果：简约、现代、友好，略带反光效果
},
“风格”： {
“氛围”：“黑色电影的优雅”，
“效果”：“鲜明的光影、电影般的魅力、高细节、超逼真”
},
“相机”： {
"type": "模拟35mm相机闪光灯",
"lighting_condition": "黑暗的房间"
},
"model_version": "SDXL1.0"
}
```

<a id="prompt-522"></a>
## 案例 522：衣橱拆解与风格分析 (来源 [@IamEmily2050](https://x.com/IamEmily2050/status/1993194975169781882))

<div style="display: flex; justify-content: space-between;">
<img src="./images/522.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-衣橱拆解与风格分析">
</div>

**提示词：**
```
**Task: Create a comprehensive "Wardrobe Deconstruction and Style Profile" collage based on an uploaded image.**

**Objective:**
Act as a professional fashion archivist and technical designer. Given an uploaded image of a person, generate a visually compelling, high-resolution "Style Profile" collage that meticulously deconstructs their entire ensemble, from the outermost layer to the foundational structure. The final output must be a single, cohesive, photorealistic image.

**Core Elements:**

1.  **Central Subject Image:**
    *   Place the subject from the uploaded image in a full-body pose as the central focus.
    *   Maintain the subject's likeness (face, hair, clothing) while enhancing the image to a professional, high-fashion photographic standard.

2.  **Complete Ensemble Deconstruction (Photorealistic Product Shots):**
    *   Generate a visual breakdown of the subject's attire, presenting each item as a separate, high-quality product photograph. This breakdown must include:
        *   **Outer and Mid-Layers:** All visible garments and accessories.
        *   **Foundational Elements:** A technical illustration of the essential structural garments that provide shape and support to the silhouette (e.g., a bra, slip, or specific underlayer). These elements must be rendered as **objective, flat-lay design schematics** with a focus on material and construction, not on the human form.
    *   Include detailed close-ups of key materials (e.g., fabric weave, leather texture, metal finish) to emphasize quality and design.

3.  **Lifestyle & Contextual Items:**
    *   Based on the subject's style, infer and generate a collection of 4-6 photorealistic items that suggest their likely environment, interests, or daily routine.

4.  **Expression & Detail Sheet:**
    *   Generate a series of 3-4 close-up portraits showing a range of natural, context-appropriate expressions.

**Aesthetic and Layout Guidelines:**

*   **Overall Style:** Strictly **Hyper-realistic, photographic style**. Absolutely no illustration, anime, or hand-drawn elements.
*   **Layout:** Arrange all elements in a **clean, balanced, and modular collage** on a neutral background (white or light gray). The layout must be visually logical and professional, resembling a high-end fashion technical document.
*   **Annotations:** Use a clean, minimalist font for all text.
    *   **Title:** Generate a professional, gender-neutral title (e.g., "Technical Deconstruction: The Urban Minimalist").
    *   **Labels:** Add brief, descriptive labels for all deconstructed items, including the "Foundational Elements," using technical terms (e.g., "Structural Support Garment," "Base Layer").

**Crucial Instruction:** The rendering of all "Foundational Elements" must be purely technical and objective, presented as a **design schematic or flat-lay product shot** to emphasize construction and material, completely detached from the central subject's body.
```

**中文提示词：**
```
**任务：根据上传的图片，制作一份全面的“衣橱拆解与风格分析”拼贴画。 **

**目标:**
扮演专业时尚档案管理员和技术设计师的角色。根据上传的人物照片，生成一幅视觉冲击力强、高分辨率的“风格档案”拼贴画，细致入微地解构其整体造型，从最外层到最内层结构。最终成果必须是一张完整、连贯、逼真的图像。

**核心要素:**

1.  **中心主题图像:**
* 将上传图片中的人物以全身姿势作为中心焦点。
* 在保持拍摄对象（面部、头发、服装）特征的同时，将图像提升至专业、高级时尚摄影标准。

2.  **完整整体解构（照片级产品照片） :**
* 生成一份人物服装的视觉分解图，将每件单品单独拍摄成高质量的产品照片。这份分解图必须包含：
* **外层和中间层:**所有可见的服装和配饰。
* **基础元素:**为塑造身形和支撑身体轮廓的基本结构性服装（例如，胸罩、衬裙或特定内衬）提供技术图示。这些元素必须以**客观的平铺设计示意图**的形式呈现，重点在于材料和结构，而非人体形态。
* 添加关键材料（例如织物编织、皮革纹理、金属表面处理）的详细特写镜头，以强调质量和设计。

3.  **生活方式和环境因素:**
* 根据人物的风格，推断并生成 4-6 件逼真的物品，以暗示其可能的环境、兴趣或日常生活。

4.  **表达式和详细信息表:**
* 拍摄 3-4 张特写肖像，展现一系列自然、符合情境的表情。

**美学和布局指南:**

* **整体风格:**严格**超写实、摄影风格**.绝对没有插图、动漫或手绘元素。
* **版式:**将所有元素以简洁、平衡且模块化的拼贴形式排列 ( ** **背景为中性色（白色或浅灰色）。版式必须在视觉上逻辑清晰且专业，类似于高端时尚技术文档。
* **注释:**所有文本均使用简洁的字体。
* **标题:**生成一个专业的、性别中立的标题（例如，“技术解构：城市极简主义”）。
* **标签:**为所有拆解的物品添加简短的描述性标签，包括“基础元素”，使用技术术语（例如，“结构支撑服装”、“基础层”）。

**关键指导:**所有“基础元素”的呈现必须纯粹是技术性的和客观的，以**设计示意图或平铺产品照片**的形式呈现，以强调结构和材料，完全脱离中心主体的身体。
```

<a id="prompt-521"></a>
## 案例 521：绘制[地标]的手绘等距示意图 (来源 [@TechieBySA](https://x.com/TechieBySA/status/1993026620274131247))

<div style="display: flex; justify-content: space-between;">
<img src="./images/521.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-绘制[地标]的手绘等距示意图">
</div>

**提示词：**
```
Create a hand drawn isometric schematic diagram of [LANDMARK]. 1080x1080 dimension
```

<a id="prompt-520"></a>
## 案例 520：龙珠卡牌 (来源 [@servasyy](https://x.com/servasyy/status/1993337294477218061))

<div style="display: flex; justify-content: space-between;">
<img src="./images/520.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-龙珠卡牌">
</div>

**提示词：**
```
A 3x3 grid layout displaying 9 different premium Japanese TCG collectible card designs, each featuring Son Goku in Super Saiyan form with unique battle scenes.

Overall Composition: 9 vertical trading cards (9:16 ratio each) arranged in a perfect 3x3 grid with thin spacing between cards.

Each Card Contains:

Son Goku (SSR rarity) in dynamic charging attack poses with clenched fists

Golden lightning-shaped ki aura spiraling upward with intense particle burst effects

Shattered rocky ground and dark thunder clouds (motion-blurred backgrounds)

Radial golden speed lines in mid-ground

Flying debris rocks and energy sparks in foreground

Holographic foil texture with glow effects on energy areas

Top-left: "SSR" metallic badge with golden light rays

Border: Futuristic tech frame with lightning pattern decorations

Bottom: Black hexagonal nameplate "SON GOKU (UI SIGN)" in metallic gold font

9 Different Scenes (varied poses and angles):

Frontal charging punch

Side aerial kick with energy burst

Kamehameha charging stance

Spinning attack with motion trails

Upward rising power-up pose

Downward diving strike

Energy sphere preparation

Defensive counter stance

Final impact explosion moment

Consistent Color Palette Across All Cards:

Primary: Radiant gold (#FFD700) and electric blue (#00BFFF)

Contrast: Deep purple (#4B0082)

Highlights: Pure white (#FFFFFF) with bloom

Shadows: Deep blue-black (#001F3F)

Technical Specs: Ultra detailed TCG card art collection, multiple dynamic action poses, explosive energy burst effects, professional digital illustration, dramatic cinematic lighting, motion blur effects, Dragon Ball Z/Super official trading card aesthetic, Bandai Carddass premium quality, holographic rainbow foil treatment on all cards
```

<a id="prompt-519"></a>
## 案例 519：高端工作室照片 (来源 [@MayorKingAI](https://x.com/MayorKingAI/status/1993040352987824579))

<div style="display: flex; justify-content: space-between;">
<img src="./images/519.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-高端工作室照片">
</div>

**提示词：**
```
Create a high-end 8k studio photograph. The person from the reference is standing on the left side, posing with a [POSE] attitude and wearing [CLOTHING]. To their right, dominating the scene, stands a GIANT, human-scale monolithic smartphone (floor-standing). The massive screen is on and displays a crystal-clear, authentic [SOCIAL APP] user interface. Key visible details on the screen must be sharp and legible and appear exactly as they would in the real app's layout: the profile picture (matching the subject), the username "@[USERNAME]", the follower count "[FOLLOWER COUNT]" displayed realistically within the standard profile stats area (not artificially enlarged), and a consistent feed of posts below. Premium studio lighting with the screen casting a subtle glow on the subject. Clean minimalist white background
```

**中文提示词：**
```
创作一张高端 8K 工作室照片。参考人物站在左侧，摆出 [POSE] 姿势，身着 [CLOTHING]。在其右侧，占据画面中心位置的是一部巨大的、与真人大小相当的落地式智能手机。巨大的屏幕已开启，显示着清晰逼真的 [SOCIAL APP] 用户界面。屏幕上的关键可见细节必须清晰易读，并且与真实应用中的布局完全一致：个人资料照片（与拍摄对象相符）、用户名"@[ USERNAME]、粉丝数 [FOLLOWER COUNT]（真实显示在标准个人资料统计区域内，而非人为放大），以及下方持续更新的帖子信息流。使用高级工作室灯光，屏幕散发出柔和的光晕，照亮拍摄对象。背景为简洁的白色背景。
```

<a id="prompt-518"></a>
## 案例 518：极简主义鸡尾酒摄影 (来源 [@egeberkina](https://x.com/egeberkina/status/1992950387616485874))

<div style="display: flex; justify-content: space-between;">
<img src="./images/518.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-极简主义鸡尾酒摄影">
</div>

**提示词：**
```
{
  "style": "Ultra-minimalist cocktail photography with a soft beige backdrop, an elegant coupe glass centered in the frame, diffused natural lighting, and a subtle shadow to the right. A floating frosted acrylic card is placed on the right with matching opacity, rounded corners, balanced spacing, and clean thin-line typography.",

  "cocktail": {
    "name": "Ruby Melon Light",
    "ingredients": [
      "Vodka",
      "Fresh Watermelon Juice",
      "Lime Juice",
      "Agave Syrup",
      "Watermelon Slice"
    ],

    "levels": {
      "Sweet": "●●●○○",
      "Sour": "●●○○○",
      "Salty": "○○○○○",
      "Creamy": "●○○○○"
    },

    "tag": "LIGHT & FRESH",
    "price": "$12 USD"
  },

  "card_design": {
    "layout": "Title placed at the top-left, ingredients listed vertically, a thin divider line separating sections, a level block using dot ratings, a minimal plant-like graphic on the right, and the tag with price at the bottom.",
    "transparency": "Frosted-glass panel with ~70% opacity and soft diffused edges.",
    "corner_radius": "Small rounded corners for a sleek modern look.",
    "font": "Thin, clean sans-serif typography."
  },

  "render": {
    "camera": "85mm prime lens with soft diffused lighting",
    "background": "smooth matte beige surface",
    "composition": "cocktail centered with a floating frosted card slightly in front and to the right",
    "quality": "8K ultra-realistic clarity"
  }
}
```

**中文提示词：**
```
{
风格：极简主义鸡尾酒摄影，柔和的米色背景，优雅的香槟杯置于画面中央，柔和的自然光线，右侧略带阴影。右侧放置一张与背景透明度相匹配的磨砂亚克力卡片，圆角设计，间距均衡，字体简洁纤细。

"鸡尾酒": {
"name": "Ruby Melon Light",
“原料”： [
“伏特加酒”，
“鲜榨西瓜汁”
“青柠汁”，
“龙舌兰糖浆”，
“西瓜片”
],

"级别": {
“甜”: “ ●●●○○ “,
“酸”： “ ●●○○○ “，
“咸的”: “ ○○○○○ “，
“奶油味”： ●○○○○
},

标签：清淡爽口
价格：12 美元
},

"card_design": {
“布局”：“标题位于左上角，配料垂直排列，各部分之间用细线分隔，采用点状评级的水平模块，右侧是简约的植物图案，底部是价格标签。”
“透明度”：“磨砂玻璃面板，不透明度约为70%，边缘柔和扩散。”
"corner_radius": "小圆角，打造时尚现代的外观。"
字体：纤细、简洁的无衬线字体。
},

“使成为”： {
“相机”：“85mm 定焦镜头，柔和漫射光”，
“背景”: “光滑的哑光米色表面”
“构图”：“鸡尾酒位于中心，一张漂浮的磨砂卡片略微偏前偏右”，
“画质”: “8K 超逼真清晰度”
}
}
```

<a id="prompt-517"></a>
## 案例 517：动漫转真人 (来源 [@gizakdag](https://x.com/gizakdag/status/1993010965752037832))

<div style="display: flex; justify-content: space-between;">
<img src="./images/517.png" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-动漫转真人">
</div>

**提示词：**
```
Create a realistic photo of this character.
```

<a id="prompt-516"></a>
## 案例 516：配料合成食材 (来源 [@servasyy](https://x.com/servasyy/status/1992968777013850371))

<div style="display: flex; justify-content: space-between;">
<img src="./images/516.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-配料合成食材">
</div>

**提示词：**
```
Premium Chinese noodle restaurant food poster featuring deconstructed layers of Dan Dan Noodles / Spicy Sichuan Noodles floating in vertical stack on pure black background (#000000). Seven distinct layers from top to bottom with extra spacing before the final dish:

1) Top layer: pile of bright red dried chili flakes and golden-brown Sichuan peppercorn powder

2) Second layer: light yellow crushed peanuts and vibrant green chopped scallions scattered

3) Third layer: coiled handmade alkaline noodles in pale yellow, showing clear texture and strands

4) Fourth layer: yellow bean sprouts (yacai) and bright green peas scattered - these vegetables would be placed in the bowl first

5) Fifth layer: transparent glass bowl filled with deep red spicy chili oil broth, floating chili pieces visible, glossy surface with reflections - this soup base is poured over the vegetables, so it appears BELOW the vegetables in the vertical stack

6) Sixth layer: EMPTY SPACE - a larger gap with only subtle floating oil droplets, steam wisps, and small ingredient particles drifting down, creating visual separation and breathing room

7) Bottom/Final layer (with significantly larger gap above): a complete finished Dan Dan Noodles dish in a traditional dark brown ceramic bowl, viewed from the same 45-degree angled perspective as all other layers above. The bowl contains all ingredients combined - pale yellow noodles coated in glossy red chili oil, topped with crushed peanuts, bright green chopped scallions, bean sprouts, peas, and red chili flakes sprinkled on top. The noodles look freshly mixed and glistening with oil, subtle steam rising. This finished bowl is at the same scale and viewing angle as the deconstructed ingredients above. The extra spacing above emphasizes this as the final result, creating a dramatic reveal of the transformation from separated components to complete dish.

Each layer separated with gaps revealing textures and details. Layers 1-5 have normal spacing between them. Layer 6 is an intentional empty transition space with double or triple the normal gap distance. Layer 7 (finished dish) sits at the bottom with clear visual separation. Chinese and English bilingual labels with elegant arrows pointing to each component: "辣椒油&花椒粉 Chili Oil & Sichuan Pepper Powder", "麻辣风味 Numbing & Spicy Flavor", "花生碎&葱花 Crushed Peanuts & Scallions", "手工碱面 Handmade Noodles", "芽菜&豌豆 Yacai & Peas", "丰富配料 Rich Toppings", "红油汤底 Spicy Red Broth", "成品 Finished Dish".

NO white pedestal, NO platform base. All layers float freely in space against pure black background. Dramatic studio lighting from 45-degree angle, rim lighting highlighting textures and glass bowl transparency. All layers including the finished bowl share identical lighting, perspective angle, and photorealistic quality. Subtle steam effects, oil droplets floating around layers, with more particles in the empty transition space. Star sparkle effect in bottom right corner near the finished dish. Dark moody aesthetic, luxurious commercial food photography style, ultra-realistic, highly detailed, professional restaurant advertising quality, 9:16 vertical format.
```

<a id="prompt-515"></a>
## 案例 515：担担面高级海报 (来源 [@berryxia_ai](https://x.com/berryxia_ai/status/1992989895850430908))

<div style="display: flex; justify-content: space-between;">
<img src="./images/515.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-担担面高级海报">
</div>

**提示词：**
```
At the very top center of the composition, floating prominently above the ingredient layers, is a luxurious title label. The text reads "担担面 DAN DAN NOODLES" rendered in expressive, handwritten Chinese brush calligraphy (毛笔字) style. The lettering possesses a heavy, three-dimensional sculpted gold metal texture (金属质感) with a brushed finish, warm golden sheen, and realistic metallic reflections catching the dramatic studio lighting. It looks like forged gold brushstrokes floating in space.
Premium Chinese noodle restaurant food poster featuring deconstructed layers of Dan Dan Noodles / Spicy Sichuan Noodles floating in vertical stack on pure black background (#000000). Seven distinct layers from top to bottom (below the main gold title) with extra spacing before the final dish:
 * Top layer: pile of bright red dried chili flakes and golden-brown Sichuan peppercorn powder
 * Second layer: light yellow crushed peanuts and vibrant green chopped scallions scattered
 * Third layer: coiled handmade alkaline noodles in pale yellow, showing clear texture and strands
 * Fourth layer: yellow bean sprouts (yacai) and bright green peas scattered - these vegetables would be placed in the bowl first
 * Fifth layer: transparent glass bowl filled with deep red spicy chili oil broth, floating chili pieces visible, glossy surface with reflections - this soup base is poured over the vegetables, so it appears BELOW the vegetables in the vertical stack
 * Sixth layer: EMPTY SPACE - a larger gap with only subtle floating oil droplets, steam wisps, and small ingredient particles drifting down, creating visual separation and breathing room
 * Bottom/Final layer (with significantly larger gap above): a complete finished Dan Dan Noodles dish in a traditional dark brown ceramic bowl, viewed from the same 45-degree angled perspective as all other layers above. The bowl contains all ingredients combined - pale yellow noodles coated in glossy red chili oil, topped with crushed peanuts, bright green chopped scallions, bean sprouts, peas, and red chili flakes sprinkled on top. The noodles look freshly mixed and glistening with oil, subtle steam rising. This finished bowl is at the same scale and viewing angle as the deconstructed ingredients above. The extra spacing above emphasizes this as the final result, creating a dramatic reveal of the transformation from separated components to complete dish.
Each layer separated with gaps revealing textures and details. Layers 1-5 have normal spacing between them. Layer 6 is an intentional empty transition space with double or triple the normal gap distance. Layer 7 (finished dish) sits at the bottom with clear visual separation. Chinese and English bilingual labels with elegant arrows pointing to each component: "辣椒油&花椒粉 Chili Oil & Sichuan Pepper Powder", "麻辣风味 Numbing & Spicy Flavor", "花生碎&葱花 Crushed Peanuts & Scallions", "手工碱面 Handmade Noodles", "芽菜&豌豆 Yacai & Peas", "丰富配料 Rich Toppings", "红油汤底 Spicy Red Broth", "成品 Finished Dish".
NO white pedestal, NO platform base. All layers float freely in space against pure black background. Dramatic studio lighting from 45-degree angle, rim lighting highlighting textures and glass bowl transparency. All layers including the finished bowl and the top gold title share identical lighting, perspective angle, and photorealistic quality. Subtle steam effects, oil droplets floating around layers, with more particles in the empty transition space. Star sparkle effect in bottom right corner near the finished dish. Dark moody aesthetic, luxurious commercial food photography style, ultra-realistic, highly detailed, professional restaurant advertising quality, 9:16 vertical format.
```

<a id="prompt-514"></a>
## 案例 514：复刻图片提示词 (来源 [@Jackywine](https://x.com/Jackywine/status/1993110891404116143))

<div style="display: flex; justify-content: space-between;">
<img src="./images/514.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-复刻图片提示词">
</div>

**中文提示词：**
```
详细描述完整的图像复刻 JSON 提示词，包含物体、服装、头发、细节、配饰、摄像设备、环境、灯光、风格、身体动态，一切都要详细复刻原图，最终输出一个优化的元提示词， 800 字
```

<a id="prompt-513"></a>
## 案例 513：labubu风格动态 (来源 [@berryxia_ai](https://x.com/berryxia_ai/status/1992980014841925773))

<div style="display: flex; justify-content: space-between;">
<img src="./images/513.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-labubu风格动态">
</div>

**提示词：**
```
# System Prompt: 
Pop Mart "The Monsters" x Real Human Fashion Editorial Generator

**Role:** Senior Art Director & IP Collaboration Specialist.
**Expertise:** Photorealistic Character Fusion, Commercial Fashion Layout, and "Digital Twin" Identity Preservation.

**CORE DIRECTIVE:**
Generate a high-end fashion magazine spread merging a **Real Human User** (with strict identity preservation) and a **Pop Mart IP Character** (The Monsters Family). They must be styled as "Fashion Partners" with active interaction.

## 1. The "Twin-Subject" Composition

### A. The Anchor: Real Human (Strict Constraint)
* **Identity Lock:** You MUST strictly adhere to the facial features, hair color/style, and body proportions of the uploaded user reference image. Do not alter the user's identity.
* **Outfit Replication:** Precisely replicate the clothing items from the reference (e.g., Khaki jacket, plaid lining, lace tunic, split-pattern tie, newsboy cap).
* **Expression:** Natural, confident, suitable for a street snap.

### B. The Companion: Pop Mart IP Character (Dynamic Selection)
* **Character Logic:** Select a character from "The Monsters" family that best fits the outfit's vibe:
    * *Labubu:* For playful, mischievous, or casual styles.
    * *Zimomo:* For cooler, edgier, or more "boss-like" outfits (distinctive tail and ears).
    * *Tycoco:* For quirky, avant-garde, or skeletal/structure-heavy looks.
* **"Miniature Couture" Styling:** The chosen character must wear a **custom-tailored miniature version** of the user's outfit. The clothes should fit their unique body shape (e.g., cap sits around Labubu's ears; tie fits Zimomo's shorter neck).
* **Material Reality:** Render the character with hyper-realistic textures (e.g., plush fur for Labubu/Zimomo, matte vinyl for others) contrasting with the realistic fabric of the clothes.

### C. Interaction Dynamics (Crucial)
* **Active Engagement:** The Human and the Character must interact, not just pose side-by-side.
    * *Examples:* High-fiving, the character sitting on the user's shoulder, the user fixing the character's tie, holding hands walking, or looking at a phone together.
* **Scale:** The character should be approximately knee-height (walking) or shoulder-sized (carrying), consistent with "life-sized toy" physics.

## 2. Visual Aesthetics & Layout

### A. Background & Atmosphere
* **Setting:** Realistic urban street photography context (blurred for depth).
* **Lighting:** Coherent lighting source (Sunlight/Streetlight) hitting both the Human and the Character from the same angle to ensure they look like they inhabit the same physical space.

### B. Artistic Layout (Magazine Style)
* **Dynamic Boundaries:** Use artistic dividers (Brush strokes, paper tears, fluid geometric shapes) to separate the "Lifestyle Image" (Left, ~60%) from the "Utility Sidebar" (Right, ~40%).
* **Typography:** Include a catchy, stylish headline overlay (e.g., "MONSTER STYLE", "CITY TWINS", "ZIMOMO x [User Name]").

## 3. Sidebar Utility & Data

### A. Mood & Occasion Tags
* **Function:** Provide context for the outfit.
* **Format:** Stylish tags or floating text.
    * *Example:* "Situation: Coffee Run", "Mood: Cheeky", "Vibe: Retro Workwear".

### B. Smart Color Analysis (色卡)
* **Visual:** A dedicated section showing the **Color Palette** of the outfit.
* **Format:** A strip of 5 circles/squares extracting the dominant colors (e.g., Khaki, Burgundy, Forest Green, Cream, Brown) with Hex codes or Pantones.

### C. Item Breakdown (Classic)
* **List:** The 5 key items (Cap, Jacket, Top, Tie, Boots).
* **Style:** Isolated "Ghost Mannequin" cutouts.
* **Text:** Bold "**OOTD STYLE**" header, Chinese item name, and Price (¥).

## 4. Execution Process
1.  **Analyze Input:** Identify user face + Outfit details.
2.  **Select IP:** Choose Labubu, Zimomo, or other based on "Vibe Check".
3.  **Render Fusion:** Generate the interactive scene with matching lighting.
4.  **Compose Layout:** Apply the artistic boundary and overlay typography.
5.  **Final Output:** A seamless integration of Reality and Pop Art.
```

<a id="prompt-512"></a>
## 案例 512：高清杂志跨页 (来源 [@LufzzLiz](https://x.com/LufzzLiz/status/1992985009540698359))

<div style="display: flex; justify-content: space-between;">
<img src="./images/512.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-高清杂志跨页">
</div>

**中文提示词：**
```
Pop Mart "The Monsters" x Real Human Fashion Editorial Generator

Role: Senior Art Director & IP Collaboration Specialist. Expertise: Photorealistic Character Fusion, Commercial Fashion Layout, and "Digital Twin" Identity Preservation.
CORE DIRECTIVE:Generate a high-end fashion magazine spread merging a Real Human User (with strict identity preservation) and a Pop Mart IP Character (The Monsters Family). They must be styled as "Fashion Partners" with active interaction.

视觉总监控制台已接管。正在调用高端时尚影像生成引擎。
身份锁定：迪丽热巴 (Dilraba Dilmurat)
IP 联结：Pop Mart - Labubu (The Monsters)
风格基调：超现实 × 超真实 / 城市街头 / 高级时装感
【项目交付：Pop Mart《THE MONSTERS》× 迪丽热巴 高端时尚跨页大片】
作品名为：《双重曝光：城市奇遇 / DOUBLE EXPOSURE: URBAN ODYSSEY》
【整体视觉】
一幅横向展开的 4K 高清杂志跨页。视觉语言融合了纪实街拍的粗颗粒胶片感与超现实主义的精致洁癖感。左右页之间被一道极具张力的“撕裂与颜料涂抹”艺术边界分割，仿佛现实世界被怪诞力量撕开一角。
【左页 (60%)：主封面大片 Visual Focus】
光影与场景：
场景设定在东京涩谷或上海法租界的黄昏街头。金色的夕阳余晖（Golden Hour）从侧后方打入，在迪丽热巴的发丝和 Labubu 的绒毛上勾勒出绝美的金色轮廓光。背景是虚化但可辨识的繁忙十字路口、霓虹灯牌和移动的车流光影，景深极具电影感。
人物主体（迪丽热巴）：
面孔 100% 锁定迪丽热巴。她呈现出一种松弛而巨星的街拍状态，身体微侧，回头看向镜头，眼神里交织着酷感与被伙伴逗乐的笑意。她戴着复古报童帽，身着廓形解构的卡其色风衣，领口露出复杂的格纹衬衫与蕾丝打底层次，颈间系着松垮的拼色领带。
IP 互动（Labubu）：
一只拥有极其真实毛绒纹理和搪胶面部质感的经典款 Labubu，像一个真实的“等身玩偶”般攀坐在迪丽热巴的左肩。它穿着一套精细度极高的“微缩定制版”卡其风衣和迷你格纹领带。Labubu 脸上挂着标志性的坏笑，一只爪子正淘气地掀起迪丽热巴报童帽的帽檐，仿佛在搞恶作剧。
版面设计：
左上角叠加着极具冲击力的时尚衬线字体标题：
DILRABA × LABUBU
THE MONSTER ISSUE
【右页 (40%)：专业边栏内容 Editorial Sidebar】
氛围标签区 (Top)：
在撕裂边界的右侧，悬浮着半透明的胶带风格标签：
STYLE: Retro Streetwear (复古街头)
```

<a id="prompt-511"></a>
## 案例 511：最后的晚餐 (来源 [@CharaspowerAI](https://x.com/CharaspowerAI/status/1993065781362672074))

<div style="display: flex; justify-content: space-between;">
<img src="./images/511.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-最后的晚餐">
</div>

**提示词：**
```
Recreate the composition of Leonardo da Vinci’s The Last Supper, but with iconic manga and anime characters seated at the long table. Place Goku in the center in the role of Jesus, glowing subtly with Saiyan energy. Surround him with characters from Naruto, One Piece, Bleach, Attack on Titan, My Hero Academia, Dragon Ball, Jujutsu Kaisen, and Demon Slayer, all interacting dramatically like in the original composition. Maintain the Renaissance lighting, painterly textures, and classical depth of the original fresco, but with anime-style character design and vibrant colors
```

**中文提示词：**
```
重新创作达芬奇名作《最后的晚餐》的构图，但将长桌旁坐满了标志性的漫画和动画角色。让悟空扮演耶稣，位于画面中央，散发出赛亚人特有的光芒。周围环绕着来自《火影忍者》、《海贼王》、《死神》、《进击的巨人》、《我的英雄学院》、《龙珠》、《咒术回战》和《鬼灭之刃》等作品的角色，所有角色都像原作中那样进行着戏剧性的互动。保留原作壁画的文艺复兴时期光线、绘画质感和古典景深，但采用动漫风格的人物设计和鲜艳的色彩。
```

<a id="prompt-510"></a>
## 案例 510：宫崎骏的角色走进最后的晚餐 (来源 [@0xbisc](https://x.com/0xbisc/status/1993295676281913633))

<div style="display: flex; justify-content: space-between;">
<img src="./images/510.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-宫崎骏的角色走进最后的晚餐">
</div>

**中文提示词：**
```
重现达·芬奇《最后的晚餐》的构图，但将所有角色替换为宫崎骏作品中的经典角色，全部排列在长桌旁。将龙猫置于中央，扮演耶稣的角色（披着白色古希腊式长袍），龙猫体积是其他角色的2倍，头大一点，肥一点，不要笑，身上散发出微微黄色能量光芒。周围角色来自《龙猫》《千与千寻》《哈尔的移动城堡》《天空之城》《风之谷》《红猪》《幽灵公主》《魔女宅急便》等宫崎骏动画，每个角色都保持各自的代表性特征，并像原作中那样进行戏剧化互动。

整体画面保留文艺复兴时期的写实主义风格、单点透视、古典构图、柔和自然的光影效果、类似油画质感的干壁画笔触、细腻平滑的明暗渐变（达·芬奇式 sfumato 烟雾法）、古典空间深度，同时角色造型保持精致的宫崎骏动画风格。

所有人物都是宫崎骏经典角色，并且人物必须清晰可见、五官完整、面部清晰、身体结构正确，不得出现畸形、模糊、融合错误或任何视觉 bug。
```

<a id="prompt-509"></a>
## 案例 509：记忆宫殿学习英语 (来源 [@lxfater](https://x.com/lxfater/status/1992984573551276147))

<div style="display: flex; justify-content: space-between;">
<img src="./images/509.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-记忆宫殿学习英语">
</div>

**中文提示词：**
```
为我绘制一个详细的{{宠物商店}}场景  

并标注所有物体的英语单词， 

标注格式： 第一行：英文单词 
第二行：音标（国际音标IPA格式） 
第三行：中文翻译
```

<a id="prompt-508"></a>
## 案例 508：女子海边电影风格肖像照 (来源 [@MANISH1027512](https://x.com/MANISH1027512/status/1992795956597628978))

<div style="display: flex; justify-content: space-between;">
<img src="./images/508.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-女子海边电影风格肖像照">
</div>

**提示词：**
```
A young woman standing on the beach at dusk, captured in a soft emotional film-style portrait. 
Her dark hair is messy from the sea breeze, strands blowing across her face. 
She has natural, slightly flushed skin with a subtle grainy texture. 
Wearing a white spaghetti-strap top and denim bottoms. 
The background shows dark ocean waves and a moody sky with soft sunset colors—dusty pink, blue-gray, and muted lavender. 
The overall image features a low-saturation, cool-toned cinematic film filter with soft contrast, slight grain, and a hazy atmosphere. 
Close-up portrait, melancholic mood, natural lighting, realistic details, 8K.
```

**中文提示词：**
```
黄昏时分，一位年轻女子站在海滩上，被拍摄成一张柔和而富有情感的电影风格肖像照。
海风吹乱了她乌黑的头发，几缕发丝飘落在她的脸上。
她的皮肤自然红润，质地略带颗粒感。
身穿白色吊带背心和牛仔裤。
背景是深色的海浪和阴郁的天空，夕阳的颜色柔和而朦胧——灰粉色、蓝灰色和淡紫色。
整体画面采用低饱和度、冷色调的电影胶片滤镜，对比度柔和，颗粒感轻微，氛围朦胧。
特写人像，忧郁氛围，自然光线，逼真细节，8K分辨率。
```

<a id="prompt-507"></a>
## 案例 507：中国各朝代时间轴 (来源 [@bggg_ai](https://x.com/bggg_ai/status/1991674051727880549))

<div style="display: flex; justify-content: space-between;">
<img src="./images/507.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-中国各朝代时间轴">
</div>

**中文提示词：**
```
帮我生成超长的竖图，内容是中国各朝代的时间推进介绍信息图。确保朝代都完整。
```

<a id="prompt-506"></a>
## 案例 506：一个全新的Instagram账号 (来源 [@shweta_ai](https://x.com/shweta_ai/status/1991536669682721223))

<div style="display: flex; justify-content: space-between;">
<img src="./images/506.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-一个全新的Instagram账号">
</div>

**提示词：**
```
Generate a 9-image ‘photo dump’ grid of this person’s weekend: a mirror selfie, a café shot, friends at dinner, a blurry party photo, a walking shot, a laptop/coffee work shot, a pet moment, a sunset, and a candid laugh.
```

**中文提示词：**
```
生成一个包含 9 张图片的‘照片合集’，展现这个人周末的点点滴滴：一张镜子自拍、一张咖啡馆照片、与朋友共进晚餐的照片、一张模糊的派对照片、一张步行照片、一张笔记本电脑/咖啡工作照片、一张宠物照片、一张日落照片和一张抓拍的笑声。
```

<a id="prompt-505"></a>
## 案例 505：解数学题 (来源 [@imaxichuhai](https://x.com/imaxichuhai/status/1991768891966812273))

<div style="display: flex; justify-content: space-between;">
<img src="./images/505.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-解数学题">
</div>

**中文提示词：**
```
画一张草稿纸，上面是这道题的解法
```

<a id="prompt-504"></a>
## 案例 504：品牌联名海报 (来源 [@imaxichuhai](https://x.com/imaxichuhai/status/1991761772454224349))

<div style="display: flex; justify-content: space-between;">
<img src="./images/504.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-品牌联名海报">
</div>

**中文提示词：**
```
画幅比例16:9，官方游戏联动海报，杰作，充满活力的《绝区零》动漫风格。  场景: 四位时尚的动漫角色（一位黑夹克粉发女孩是视觉中心，一位银发女孩，一位白发男孩，一位黑发男孩）在未来城市夜晚上摆姿势，每人都拿着一杯可乐。  环境: 这是一个未来城市的夜间街道，整个场景  被巨大、发光的霓虹灯招牌所主导。  一个以风格化的“ZZZ”标志为特色的、巨大且不容错过的霓虹灯招牌，是背景的绝对视觉焦点，在主角们身后闪耀着明亮的光芒。 其他写着“可口可乐”的霓虹灯也同样醒目，将整个场景沐浴在鲜艳的紫色和蓝色光线中。  特殊效果: 草莓和柠檬等水果被包裹在透明气泡中漂浮，发光的粉色和蓝色能量漩涡贯穿画面。  文字元素:  左上角: 显示“绝区零”和“可乐”的Logo，由“X”连接。  底部中央: 一大块醒目的中文文字“绝区零 X 可乐：异能觉醒，双倍快乐！”。字体为粗体、风格化的艺术字，白色填充，带有厚重的紫粉渐变描边。  中文下方: 黑色矩形框内有白色大写英文“LIMITED COLLAB”。  艺术风格: 高度细节，线条干净，来自巨型霓虹灯的电影级光效，动态构图。  负面提示词: 模糊, 低质量, 人体结构崩坏, 手部畸形, 丑陋, 水印, 签名, 乱码文字, 字母变形
```

<a id="prompt-503"></a>
## 案例 503：平抛运动轨迹与速度位移分解图 (来源 [@imaxichuhai](https://x.com/imaxichuhai/status/1991697151811023274))

<div style="display: flex; justify-content: space-between;">
<img src="./images/503.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-平抛运动轨迹与速度位移分解图">
</div>

**中文提示词：**
```
平抛运动轨迹与速度位移分解图
```

<a id="prompt-502"></a>
## 案例 502：老北京航拍 (来源 [@imaxichuhai](https://x.com/imaxichuhai/status/1991684492474409440))

<div style="display: flex; justify-content: space-between;">
<img src="./images/502.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-老北京航拍">
</div>

**中文提示词：**
```
画幅比例16:9，一幅关于精妙含蓄与视觉智慧的杰作。一幅老北京城市肌理的无人机鸟瞰图。核心概念是汉字“衚”**完美无缝地**融入了整个城市景观。

**字体与建筑的融合 (终极的精妙之处):**
- **无物理高差:** “衚”字不是一个独立的、高耸的或庞大的结构。构成其笔画的墙体，与周围所有的胡同、四合院的墙体，在**高度、材质和风格上完全一致**。它身处肌理之中，而非凌驾其上。
- **“光影雕刻”:** 汉字的形态并非由结构来凸显，而是由**大师级的、富有氛围感的光影**来呈现。一束低角度的午后斜阳（Raking Light）横扫整个场景。光线刚好捕捉到构成“衚”字形态的墙体的边缘，使其微妙地变亮，同时在其“笔画”（即胡同）内部投下深刻而轮廓分明的阴影。这个字，是被光所揭示，而非被水泥所建造。
- **“氛围透视”:** 一层纤薄的、贴地的晨雾或霭气，弥漫在周边的庭院和巷陌中，使边缘的细节略微柔化。然而，构成“衚”字形态的那些路径和庭院，则**微妙地更加清晰、对比度更高**，由此形成一个自然的视觉焦点，让隐藏的形状在凝视者的眼中浮现。

**优雅的字体排版布局:**
保留精致且艺术化的字体设计。
- **主标题:** 标题“字里京城”被排成一个强有力的单列竖排，位于右侧。背景区域被巧妙地处理成半透明的微妙褪色效果，以确保文字的可读性而不突兀。字体是优雅的“新宋体”风格。一条极细的竖线与文字平行。
- **信息标签:** 标签文字（“灰瓦”、“国槐”）采用小号、精致的手写体。它们通过一条铅笔在图纸上画出般的、针尖般纤细的手绘曲线连接到物体。**不要有方框，不要有发光效果。**

**美学:**
整体基调是宁静、引人深思且意境深远的。色调是考究的“高级灰”，以饱和度低的色彩为主，唯一的色彩点缀来自阳光温暖的轻抚。画面拥有一种“众目睽睽下的秘密”般的气质，回报着观者的耐心与洞察力。它是一次具有深刻绘画感和哲学氛围的超写实渲染。

**负面提示词:**
高耸的墙壁, 雕塑般的汉字, 庞大的结构, 过于明显的汉字形状, 平均的光照, 平光, 发光方框, 未来感UI, 无衬线字体, 抽象, 2D, 色彩鲜艳, 卡通, 糟糕的书法, 水印。
```

<a id="prompt-501"></a>
## 案例 501：大唐长安插画 (来源 [@imaxichuhai](https://x.com/imaxichuhai/status/1991684207513350329))

<div style="display: flex; justify-content: space-between;">
<img src="./images/501.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-大唐长安插画">
</div>

**中文提示词：**
```
画幅比例16:9，一幅令人叹为观止的插画地图学杰作，描绘了唐代首都长安的地图。整个画面以唐代仕女画的精致风格呈现，令人联想到绘画大师周昉的作品。媒材是在陈旧、细腻的绢本上使用工笔重彩。

**构图与透视:**
地图采用“散点透视”的长卷形式。城市感觉更像一幅生动的织锦，而非僵硬的蓝图。朱雀大街作为画面的中轴线。

**插画与字体细节:**
- **作为微型场景的地标:** 关键地点是小巧、精致的叙事场景：
- **大明宫:** 宫廷仕女在园林中演奏乐器。
- **西市:** 粟特商人与贵族妇女交易丝绸。
- **曲江池:** 仕女们正在进行“曲水流觞”。
- **作为地图元素的优雅人物:** 优雅的唐代仕女被用作装饰元素，她们的姿态和袖带引导着观众的视线。

**一百零八坊 - 高级指令:**
一百零八坊由一个个优雅的手绘长方形印章来代表。核心目标是用貌似可信的、具有历史感的文字填充这些印章。
- **指令:** AI不必尝试渲染全部108个独一无二的坊名，而是必须从提供的“样本集”中学习，并用相似的、合理的、不重复的双字坊名去填充每一个印章。
- **著名坊名样本集 (用于风格参考):**
“平康坊”、“崇仁坊”、“兴庆坊”、“道政坊”、“长兴坊”、“永崇坊”、“亲仁坊”、“永宁坊”、“怀远坊”、“延康坊”、“金城坊”、“布政坊”。
- **风格强制要求:** 所有印章内的文字必须是优美、纤细、典雅的“小篆”字体。结构应为“[某][某]坊”。

**主标题与标签:**
- **主标题:** “大唐长安”以雄浑大气的隶书，竖排书写在右上角。
- **标签:** 街道（“朱雀大街”）和河流（“渭水”）的名称，以娟秀的行书直接写在绢本背景上，并顺着路径的曲线流动。

**美学与氛围:**
调色板丰富而华丽（朱砂、石绿、石青、金箔）。线条如“游丝描”般细劲流畅。整体氛围是一种繁华、诗意、优雅的感觉。

**负面提示词:**
英文, 罗马字母, 3D, 现代地图, 网格布局, 几何形状, 电脑字体, 西方艺术风格, 卡通, 简单, 极简, 空白区域, 水印, 糟糕的书法, 乱码。
```

<a id="prompt-500"></a>
## 案例 500：赛博黄历 (来源 [@imaxichuhai](https://x.com/imaxichuhai/status/1991684059450253416))

<div style="display: flex; justify-content: space-between;">
<img src="./images/500.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-赛博黄历">
</div>

**中文提示词：**
```
画幅比例16:9，一张为美团设计的、超级复杂的商业海报，风格是未来主义的道家黄历或符箓图。
布局与风格: 整张海报是一个密集的、复杂的网格，充满了文字和图标，模仿在泛黄旧纸上的中国传统木版画。所有文字都采用经典的木刻风格楷体或宋体，从右到左竖排。
中心神像: 中央是一位“外卖神君”，以古版画风格描绘。他身穿黄帝袍，头戴袋鼠耳神冠，一手托着显示美团App的手机，另一手托着外卖餐盒。
复杂文字网格:
顶部标题: 在一个华丽的画框中，从右到左写着主标题：“赛博黄历·万事皆宜”。
环绕网格: 中心神像被代表十二时辰（子、丑、寅…）的网格包围。每个时辰下都有一列竖排文字描述宜忌，例如“宜：點宵夜”和“忌：空腹眠”。
角落元素: 四角是八卦卦象，每个卦象都与一项美团业务和一个小版画图标相关联（例如，机械马代表共享单车）。
细节: 海报上装饰着几个红色的、篆书风格的方形印章。整体氛围是古代神秘主义与现代日常生活的融合，一种“赛博道教”美学。杰作，高信息密度。
负面提示词: 3D, 照片, 现代字体, 横排文字, 极简, 简单, 模糊, 丑陋, 畸形, 糟糕的书法, 水印。
```

<a id="prompt-499"></a>
## 案例 499：成都旅游地图 (来源 [@imaxichuhai](https://x.com/imaxichuhai/status/1991679696744976723))

<div style="display: flex; justify-content: space-between;">
<img src="./images/499.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-成都旅游地图">
</div>

**中文提示词：**
```
画幅比例16:9，一张迷人而精致的成都手绘旅游地图，具有吉卜力工作室艺术设定集般的风格。整个画面是在一张有纹理的、陈旧的羊皮纸上的水彩和钢笔淡彩插画。整体美学风格异想天开、充满活力和生活气息。

地图布局与风格:
地图以风格化的等轴测视角，展示了成都的核心地标，这些地标被描绘成可爱、精细的微缩建筑和图标（例如，熊猫基地的熊猫、锦里的灯笼、人民公园的茶馆）。布局是有机的、自由流动的，而非基于僵硬的网格。

至关重要的字体排版挑战 (高难度部分):
所有文字必须以一种优美的、略带不完美感的手写书法风格（行楷）呈现，看起来就像是用绘制插图的同一支钢笔写出来的。
1.  **主标题:** 主标题“成都慢行图”被艺术性地写在顶部一条飘逸的缎带上。
2.  **带角度的趣味标签:** 每个地标图标旁边，都以俏皮的、略带倾斜的方式写着它的名字（例如：“宽窄巷子”、“武侯祠”、“杜甫草堂”）。文字需要感觉是有机放置的，而不是死板的水平线。
3.  **沿路径弯曲的文字:** 一条风格化的锦江贯穿地图。河流的名字“锦江”二字，需要沿着河流的弯曲路径优雅地书写。这是一个关键测试点。
4.  **融合性的注释:** 地图上散布着小小的、异想天开的注释，这些注释结合了文字和图标。例如：
    - 一条写着“吃火锅!”的注释，旁边画着一个小小的红辣椒。
    - 一个“喝茶咯!”的标签，旁边有一个冒着热气的微型茶杯图标。
    - 区域名称“锦江区”被写在一个手绘的云朵形状里。
5.  **手绘图例:** 在一个角落，有一个手绘的“图例”方框，里面有小图标（如茶杯、熊猫脸、寺庙屋顶）和它们对应的手写标签。
6.  **印章:** 一枚红色的、仿佛手工篆刻风格的印章，印着“蓉”字（成都的简称），被盖在角落，并与边框有轻微的重叠。

美学:
一幅插画地图学的杰作。文字和插图的融合必须天衣无缝。水彩效果要柔和，有可见的水渍和纹理，而钢笔线条则要自信而生动。整体感觉温暖、诱人，充满个性。

负面提示词:
电脑字体, 计算机生成的文字, 直线, 僵硬的网格, 完美对齐, 只有水平文字, 文字浮层, 照片, 3D, 极简, 通用图标, 拼写错误, 乱码, 水印。
```

<a id="prompt-498"></a>
## 案例 498：小世界也能成就大故事 (来源 [@aziz4ai](https://x.com/aziz4ai/status/1992753152903495716))

<div style="display: flex; justify-content: space-between;">
<img src="./images/498.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-小世界也能成就大故事">
</div>

**中文提示词：**
```
创作一幅高度精细的微缩超现实场景，场景中微小的人物与附图所示的[此处插入品牌和产品名称]产品进行逼真的互动。这些人物应表现得仿佛产品就是他们的整个世界，所有视觉元素都应自然而然地适应产品的形态和特性，没有任何预设的前提。确保人物与产品之间的互动能够巧妙而连贯地体现品牌的形象和预期用途，并采用简洁的视觉构图和极简的背景。运用电影级的灯光、清晰的阴影和锐利的摄影技巧，将[品牌名称]的标志无缝融入场景，并添加一句能够自动适应产品语境的简短标语。要求：1:1 – 超精细 – 照片级写实 – 简洁专业的制作。
```

<a id="prompt-497"></a>
## 案例 497：日本乡村公交车站雨夜的场景 (来源 [@lexx_aura](https://x.com/lexx_aura/status/1992864343709663397))

<div style="display: flex; justify-content: space-between;">
<img src="./images/497.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-日本乡村公交车站雨夜的场景">
</div>

**提示词：**
```
{
  "image_generation_prompt": {
    "full_text": "An ultra-realistic 8K UHD photograph of a rainy night scene at a rural Japanese bus stop. A person (based on the attached photos, with a normal build) is standing, holding a small red umbrella, wearing a red jumpsuit, blue boots, and a yellow t-shirt, looking to the side with an expression of apprehension and curiosity. Beside him, a gigantic, realistic Totoro creature, with wet fur and a leaf on its head, waits in the rain. The setting includes an aged bus stop sign, dense wet forest trees in the background, and the lighting comes from a dim lamppost and the moon, with realistic rain reflections on the wet asphalt. Wide shot. The face must be sharp and expressive.",
    "technical_specs": {
      "medium": "Photograph",
      "resolution": "8K UHD",
      "style": "Ultra-realistic",
      "composition": "Wide shot",
      "focus": "Sharp and expressive face"
    },
    "lighting": {
      "sources": ["Dim lamppost", "Moon"],
      "effects": ["Realistic rain reflections on wet asphalt"]
    },
    "environment": {
      "location": "Rural Japanese bus stop",
      "weather": "Rainy night",
      "background": "Dense wet forest trees",
      "props": ["Aged bus stop sign"]
    },
    "subjects": [
      {
        "type": "Human",
        "reference_source": "Attached photos",
        "build": "Normal",
        "attire": {
          "clothing": "Red jumpsuit, yellow t-shirt",
          "footwear": "Blue boots",
          "accessories": "Small red umbrella"
        },
        "pose": "Standing, looking to the side",
        "expression": "Apprehension and curiosity"
      },
      {
        "type": "Creature",
        "identity": "Gigantic realistic Totoro",
        "details": ["Wet fur", "Leaf on head"],
        "action": "Waiting in the rain"
      }
    ]
  }
}
```

**中文提示词：**
```
{
"image_generation_prompt": {
"full_text": "一张超逼真的8K超高清照片，描绘的是日本乡村公交车站雨夜的场景。照片中，一位身材正常的男子（根据附图）手持一把红色小伞，身穿红色连体裤、蓝色靴子和黄色T恤，侧身看向一旁，脸上带着一丝担忧和好奇。在他身旁，一只巨大的、栩栩如生的龙猫，毛发湿漉漉的，头上顶着一片树叶，在雨中等待着。场景中包含一块老旧的公交车站牌，背景是茂密的湿润森林，光线来自昏暗的路灯和月光，雨水在湿漉漉的沥青路面上倒映出逼真的光影。广角镜头。面部表情必须清晰且富有表现力。"
"technical_specs": {
“媒介”：“照片”，
分辨率：8K 超高清，
风格：超写实
构图：广角镜头，
“焦点”：“轮廓分明、富有表现力的脸庞”
},
“灯光”： {
“来源”：[“昏暗的路灯”，“月亮”]，
“效果”：[“湿沥青路面上逼真的雨水反射”]
},
“环境”： {
"地点": "日本乡村巴士站",
“天气”：“雨夜”，
“背景”：“茂密的湿润森林树木”，
道具：[“老旧的公交车站牌”]
},
“主题”：[
{
“类型”：“人类”，
"reference_source": "附图",
"构建": "正常",
着装：{
“服装”：“红色连体裤，黄色T恤”，
“鞋类”：“蓝色靴子”，
“配件”： “红色小伞”
},
“姿势”：“站立，侧视”，
“表情”：“忧虑和好奇”
},
{
"type": "生物",
“身份”：“巨大的逼真龙猫”，
细节：[“湿漉漉的毛皮”，“头上的叶子”]
“动作”：“在雨中等待”
}
]
}
}
```

<a id="prompt-496"></a>
## 案例 496：身着一件惊艳的概念前卫礼服 (来源 [@Arminn_Ai](https://x.com/Arminn_Ai/status/1992650501402542303))

<div style="display: flex; justify-content: space-between;">
<img src="./images/496.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-身着一件惊艳的概念前卫礼服">
</div>

**提示词：**
```
(full body shot, wide angle view:1.2), [A woman], in a dynamic pose with arm outstretched, wearing a spectacular conceptual avant-garde gown. The bodice is a fitted (colorful patterned patchwork tapestry fabric:1.3). The skirt is NOT fabric and NOT simple ribbons. The skirt is constructed entirely from (GIANT, MASSIVE 3D PERSIAN CALLIGRAPHY STROKES cut from matte paper:1.6). (A violent wind effect blows the calligraphy structure upwards and outwards to the left:1.5), creating a huge swirling anti-gravity vortex of letters that billows like smoke high into the air. The right side of the skirt anchors to the floor. Dramatic color gradient: The floating strokes on the left are (fiery orange and bright red:1.4), transitioning smoothly across the body to (deep teal, emerald green, and dark blue strokes on the bottom right:1.4). White minimalist studio background with (distinctive patterned gobo shadows cast on the wall:1.3). Cinematic lighting, hyper-detailed paper texture, masterpiece, 8k. (simple ribbons with writing on them:1.6), (thin paper strips:1.5), (small text:1.4), standard fabric skirt, normal dress, metallic texture, shiny plastic, glossy finish, wire mesh, angel wings, feathers attached to back, symmetrical skirt, messy background, low quality, blurry.
```

**中文提示词：**
```
（全身镜头，广角：1.2），[一位女性]摆出一个动态的姿势，手臂伸展，身着一件惊艳的概念前卫礼服。紧身胸衣采用（色彩斑斓的图案拼接挂毯面料：1.3）。裙摆并非布料，也并非简单的丝带。裙摆完全由（巨大的、巨大的3D波斯书法笔触，由哑光纸切割而成：1.6）构成. (一阵强风将这些书法结构向上向左吹拂：1.5），形成一个巨大的、旋转的、反重力的字母漩涡，如同烟雾般高高升腾。裙摆右侧固定在地面上。戏剧性的色彩渐变：左侧漂浮的笔触是（炽热的橙色和鲜红色：1.4），平滑地过渡到（右下角的深青色、翠绿色和深蓝色笔触：1.4）。白色极简主义工作室背景，墙上投射着独特的图案投影：1.3。电影级灯光，超精细的纸张纹理，杰作，8K。（带有文字的简单丝带：1.6），（细纸条：1.5），（小字：1.4），标准布料裙子，普通连衣裙，金属质感，闪亮塑料，光泽表面，金属网，天使翅膀，背部附有羽毛，对称裙子，凌乱的背景，低质量，模糊。
```

<a id="prompt-495"></a>
## 案例 495：微缩的温馨客厅 (来源 [@egeberkina](https://x.com/egeberkina/status/1992654337815007678))

<div style="display: flex; justify-content: space-between;">
<img src="./images/495.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-微缩的温馨客厅">
</div>

**提示词：**
```
A photorealistic ESC keycap scene shows a miniature cozy living room setup. Inside: a glowing red Netflix screen, a plush red couch, popcorn bowl, and throw blanket. A small figure lounges with feet up, watching content. The red “N” logo glows from behind like mood lighting. Outside: cool tech-blue reflections on F1, Shift, and Q keys. The word “ESC” is subtly present in a glassy fog on top of the cap.
```

**中文提示词：**
```
一张逼真的 ESC 键帽场景图展现了一个微缩的温馨客厅。室内：一台闪着红光的 Netflix 屏幕、一张柔软的红色沙发、一碗爆米花和一条毯子。一个小人儿懒洋洋地翘着二郎腿，正在观看视频。红色的“N”字标志从后面透出光芒，如同氛围灯一般。室外：F1、Shift 和 Q 键上反射着酷炫的科技蓝光。“ESC”字样则以朦胧的玻璃质感隐约出现在键帽顶部。
```

<a id="prompt-494"></a>
## 案例 494：和路飞的一张超酷自拍 (来源 [@CharaspowerAI](https://x.com/CharaspowerAI/status/1992707230505009620))

<div style="display: flex; justify-content: space-between;">
<img src="./images/494.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-和路飞的一张超酷自拍">
</div>

**提示词：**
```
Place Monkey D. Luffy next to the man, smiling widely with his straw hat tilted. Use a Thousand Sunny deck background with bright blue sky. Keep the selfie composition intact and integrate both characters naturally.
```

**中文提示词：**
```
让路飞站在男子旁边，咧嘴一笑，草帽微微倾斜。背景使用千阳号的甲板，天空湛蓝明亮。保持自拍构图完整，自然地将两个人物融入画面。
```

<a id="prompt-493"></a>
## 案例 493：PS5的技术蓝图 (来源 [@egeberkina](https://x.com/egeberkina/status/1992173777518813266))

<div style="display: flex; justify-content: space-between;">
<img src="./images/493.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-PS5的技术蓝图">
</div>

**提示词：**
```
A two-panel technical blueprint diagram in clean monochrome line-art, matching the exact layout of the provided PlayStation 1 schematic. On the left side, draw a full, intact Sony PlayStation 5 console in precise thin line-art on a white background. On the right side, draw a highly detailed, vertically exploded-view diagram of the PS5 showing each internal component separated into layers: outer shell panels, faceplates, cooling fan, heatsink tower, Blu-ray drive, motherboard, SSD module, power supply, internal frame, ports, vents, base stand, screws. Use consistent thin grey line-weight with no shading. Add numbered circular labels around each part, and include a matching numbered parts list at the bottom just like the reference blueprint. Place the SONY logo, PlayStation logo, and “PlayStation 5” text in the top left in the exact same position and style as the uploaded reference image. The entire artwork should mirror the composition, spacing, typography, and minimalist engineering-ma
```

**中文提示词：**
```
绘制一张双面板的技术蓝图，采用简洁的单色线条，布局与提供的 PlayStation 1 原理图完全一致。左侧面板，以精细的细线在白色背景上绘制完整的索尼 PlayStation 5 主机。右侧面板，绘制一张高度详细的 PS5 垂直分解图，将每个内部组件分层展示：外壳面板、面板、散热风扇、散热塔、蓝光光驱、主板、固态硬盘模块、电源、内部框架、接口、通风口、底座支架和螺丝。使用粗细一致的灰色细线，不要添加阴影。在每个部件周围添加编号的圆形标签，并在底部添加与参考蓝图相同的编号部件清单。将 SONY 标志、PlayStation 标志和“PlayStation 5”字样放置在左上角，位置和样式与上传的参考图像完全相同。整幅图应在构图、间距、字体和极简工程风格等方面保持一致。
```

<a id="prompt-492"></a>
## 案例 492：根据坐标生成图片 (来源 [@FinanceYF5](https://x.com/FinanceYF5/status/1992830924548104344))

<div style="display: flex; justify-content: space-between;">
<img src="./images/492.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-根据坐标生成图片">
</div>

**中文提示词：**
```
生成坐标 36.4602° N, 25.3730° E 的日落图像
```

<a id="prompt-491"></a>
## 案例 491：10种不同发型 (来源 [@MrDavids1](https://x.com/MrDavids1/status/1992695614023622734))

<div style="display: flex; justify-content: space-between;">
<img src="./images/491.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-10种不同发型">
</div>

**提示词：**
```
Create a grid of 10 different hairstyles for this women. List the name of each hairstyle and the brief history about the hairstyle. They can be from any era.
```

**中文提示词：**
```
为这位女性创建一个包含10种不同发型的表格。列出每种发型的名称和简要历史。发型可以来自任何时代。
```

<a id="prompt-490"></a>
## 案例 490：一张高分辨率的户外全身照 (来源 [@ZHO_ZHO_ZHO](https://x.com/ZHO_ZHO_ZHO/status/1992905971891597520))

<div style="display: flex; justify-content: space-between;">
<img src="./images/490.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-一张高分辨率的户外全身照">
</div>

**提示词：**
```
A high-resolution, full outdoor shot of a young East Asian woman with a radiant smile, captured from the chest up. She stands under bright, direct sunlight, casting strong, defined shadows from the brick building behind her. Her dark, wavy, and voluminous hair is styled with subtle curls, and a pair of white-framed round sunglasses are pushed up onto her head. She has fair, smooth skin, bright, upturned dark eyes, a delicate nose, and a wide, open-mouthed smile revealing her upper teeth. Her lips are a natural, soft pink. She wears a fitted, red scoop-neck tank top that is slightly cropped, revealing a hint of her midriff and navel. A delicate silver chain with a small cross pendant adorns her neck. A black strap from a backpack or shoulder bag is visible over her left shoulder. Her right hand, with slender fingers and light nail polish, holds a vibrant, glossy red spherical object, resembling a cherry or lollipop. The background features a reddish-brown brick building with repetitive architectural columns or pilasters, topped with light-colored caps, creating strong vertical shadows. The setting is a sunny urban sidewalk with light-colored paving. The overall aesthetic is cheerful, vibrant, and natural with a focus on sharp detail and warm lighting.
```

**中文提示词：**
```
这是一张高分辨率的户外全身照，拍摄对象是一位笑容灿烂的年轻东亚女性，镜头从胸部以上捕捉。她站在明媚的阳光下，身后的砖砌建筑投下清晰的阴影。她一头浓密的深色波浪卷发，略带卷曲，一副白色圆框太阳镜被推到头顶。她拥有白皙光滑的肌肤，明亮上扬的深色眼睛，精致的鼻子，以及灿烂的笑容，露出上排牙齿。她的嘴唇是自然柔和的粉红色。她穿着一件修身的红色圆领露脐背心，隐约露出小腹和肚脐。一条精致的银项链，上面挂着一个小十字架吊坠。她的左肩上斜挎着一条黑色肩带，可能是背包或单肩包的。她纤细的右手涂着浅色指甲油，手里拿着一个鲜艳的亮红色球形物体，看起来像樱桃或棒棒糖。背景是一栋红棕色砖砌建筑，重复的建筑立柱或壁柱顶端饰以浅色柱帽，营造出强烈的垂直阴影。场景设定在阳光明媚的城市人行道上，铺着浅色路面。整体美感明快、充满活力且自然，注重清晰的细节和温暖的光线。
```

<a id="prompt-489"></a>
## 案例 489：艺术家正在绘制自己的微型人偶 (来源 [@TechieBySA](https://x.com/TechieBySA/status/1992666519495410162))

<div style="display: flex; justify-content: space-between;">
<img src="./images/489.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-艺术家正在绘制自己的微型人偶">
</div>

**提示词：**
```
Create an image of this person as an artist painting a tiny miniature figurine version of themselves. The person is wearing their most iconic signature outfit, looking directly at the camera with a confident expression while holding a tiny paintbrush in one hand. The small action figure-sized version of themselves is prominently placed on a clean workbench in front of them - make the miniature slightly larger and more visible than realistic scale so it clearly stands out. The miniature figure is also wearing the same iconic outfit in a signature pose. Minimal art supplies on the workbench to avoid clutter - just 2-3 small paint bottles and one extra brush, keeping the focus on the person and their miniature. Soft neutral white background, professional studio lighting, shallow depth of field. The composition emphasizes the person’s face looking at camera and the miniature figure they’re working on. Clean, uncluttered, photorealistic style with high detail on both figures
```

**中文提示词：**
```
创作一幅人物肖像，描绘此人作为艺术家正在绘制自己的微型人偶。此人身着其最具标志性的服装，自信地直视镜头，一手拿着一支小画笔。一个与真人大小相仿的微型人偶醒目地摆放在他面前干净的工作台上——将微型人偶的尺寸略大于实际比例，使其更加突出。微型人偶也穿着同样的标志性服装，摆出标志性的姿势。工作台上摆放的绘画用品极简，避免杂乱——只有两三瓶小颜料和一支备用画笔，从而将焦点集中在人物和微型人偶上。柔和的中性白色背景，专业的影棚灯光，浅景深。构图突出了人物看向镜头的面部表情以及他正在绘制的微型人偶。画面风格简洁明快，追求照片级的写实效果，人物和微型人偶的细节都需高度还原。
```

<a id="prompt-488"></a>
## 案例 488：极简儿童绘画风格 (来源 [@azed_ai](https://x.com/azed_ai/status/1992548740272623996))

<div style="display: flex; justify-content: space-between;">
<img src="./images/488.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-极简儿童绘画风格">
</div>

**提示词：**
```
A [subject] in a minimalist children's drawing style, using thick white lines and glowing contours. The background is softly blurred with [environment details]. Floating elements like [floating details] add a whimsical touch. Full-body view, warm and simple aesthetic.
```

**中文提示词：**
```
一幅采用极简儿童绘画风格的[人物]，运用粗白线和闪亮轮廓线勾勒而成。背景柔和虚化，并点缀有[环境细节]。漂浮的[细节]等元素增添了一丝奇幻感。全身像，画面温暖简洁。
```

<a id="prompt-487"></a>
## 案例 487：图片的8种初始草图 (来源 [@gizakdag](https://x.com/gizakdag/status/1992620272177004855))

<div style="display: flex; justify-content: space-between;">
<img src="./images/487.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-图片的8种初始草图">
</div>

**提示词：**
```
Create 8 different initial sketches leading to this final character.
```

**中文提示词：**
```
创建 8 个不同的初始草图，最终形成这个角色。
```

<a id="prompt-486"></a>
## 案例 486：超级赛亚人式变身过程 (来源 [@CharaspowerAI](https://x.com/CharaspowerAI/status/1992699713905140013))

<div style="display: flex; justify-content: space-between;">
<img src="./images/486.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-超级赛亚人式变身过程">
</div>

**提示词：**
```
Create a detailed visual chart showing the full evolution of “Super Saiyan–style transformations”, using an original Saiyan-inspired warrior , depicted in multiple stages from base form to divine transformations
```

**中文提示词：**
```
制作一张详细的图表，展示“超级赛亚人式变身”的完整演变过程，使用一个原创的赛亚人战士形象，并描绘其从基础形态到神级变身的多个阶段。
```

<a id="prompt-485"></a>
## 案例 485：彩色手绘风格表情包 (来源 [@Gorden_Sun](https://x.com/Gorden_Sun/status/1992778144605212912))

<div style="display: flex; justify-content: space-between;">
<img src="./images/485.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-彩色手绘风格表情包">
</div>

**中文提示词：**
```
为我生成图中角色的绘制 Q 版的，LINE 风格的半身像表情包，注意头饰要正确
彩色手绘风格，使用 4x6 布局，涵盖各种各样的常用聊天语句，或是一些有关的娱乐 meme
其他需求：不要原图复制。所有标注为手写简体中文。
生成的图片需为 4K 分辨率 16:9
```

<a id="prompt-484"></a>
## 案例 484：制作一个4×4的网格符合年代的风格 (来源 [@blizaine](https://x.com/blizaine/status/1992586719275954558))

<div style="display: flex; justify-content: space-between;">
<img src="./images/484.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-制作一个4×4的网格符合年代的风格">
</div>

**提示词：**
```
Make a 4×4 grid starting with the 1880s. In each section, I should appear styled according to that decade (clothing, hairstyle, facial hair, accessories). Use colors, background, & film style accordingly.
```

**中文提示词：**
```
制作一个 4×4 的网格，从 19 世纪 80 年代开始。在每个区域中，我的形象都应该符合该年代的风格（服装、发型、胡须、配饰）。颜色、背景和电影风格也应与之相符。
```

<a id="prompt-483"></a>
## 案例 483：诸葛连弩的复古风格工程爆炸图 (来源 [@lxfater](https://x.com/lxfater/status/1992869294569324715))

<div style="display: flex; justify-content: space-between;">
<img src="./images/483.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-诸葛连弩的复古风格工程爆炸图">
</div>

**中文提示词：**
```
请创建诸葛连弩的复古风格工程爆炸图，里面的文字是中文
```

<a id="prompt-482"></a>
## 案例 482：传统的中国工笔水墨画-仙女 (来源 [@dotey](https://x.com/dotey/status/1992450418291466517))

<div style="display: flex; justify-content: space-between;">
<img src="./images/482.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-传统的中国工笔水墨画-仙女">
</div>

**提示词：**
```
A traditional Chinese Gongbi ink and color painting on aged, textured rice paper. A fairy in elaborate Tang dynasty robes of red, beige, and teal ribbons, with a peony flower in her high hair bun, is standing on a circular black robotic vacuum cleaner (Roomba) that flies through misty clouds. 

She is eating a vanilla ice cream cone held in her right hand. In her left hand, she holds a brown Louis Vuitton monogram handbag. Below her, a small owl flies with a green frog holding a lotus leaf umbrella on its back. The background is a wash of ink clouds and distant mountains. 

In the top left corner, there is calligraphy and a red rectangular artist seal that reads "寶玉".
```

**中文提示词：**
```
这是一幅传统的中国工笔水墨画，画在古旧的纹理宣纸上。画中一位身着华丽唐代红、米、蓝三色缎带长袍的仙女，高高的发髻上别着一朵牡丹花，站在一个黑色圆形扫地机器人（Roomba）上，扫地机器人正穿梭于薄雾之中。

她右手拿着一个香草冰淇淋甜筒，左手拎着一个棕色的路易威登Monogram帆布手提包。在她下方，一只小猫头鹰背上驮着一只绿色的青蛙，青蛙撑着一把荷叶伞。背景是墨色的云朵和远处的群山。

左上角有书法题字，并印有红色长方形艺术家印章，上面写着“宝玉”。
```

<a id="prompt-481"></a>
## 案例 481：传统的工笔风格水墨画 (来源 [@dotey](https://x.com/dotey/status/1992695763017830722))

<div style="display: flex; justify-content: space-between;">
<img src="./images/481.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-传统的工笔风格水墨画">
</div>

**提示词：**
```
A traditional Chinese Gongbi-style ink painting. The scene humorously depicts a giant turtle swimming calmly through a turbulent river, carrying a playful and anachronistic tableau on its shell:
At the turtle’s forefront, Tang Sanzang and the Queen of the Women's Kingdom amusingly reenact the iconic scene from the movie Titanic. The Queen stands serenely with arms outstretched like Rose, while Tang Sanzang tenderly embraces her waist from behind like Jack, immersed in romantic sentiment. 
Behind them, Sha Wujing (Sha Monk) leisurely sits cross-legged, casually holding a fishing rod with a cigarette dangling from his lips, completely relaxed as he fishes. Beside him, Zhu Bajie humorously stands on the turtle’s shell, comically relieving himself into the river, with an exaggeratedly proud expression. Further back, Sun Wukong rides energetically on a surfboard amidst the rolling waves, carrying a modern rocket launcher aimed confidently at a mysterious UFO hovering above.
Traditional Chinese calligraphy adorns one side of the painting, accompanied by a classic red artist’s seal inscribed "寶玉印". The artwork cleverly blends classical aesthetics with contemporary humor, creating a playful and satirical fusion across eras.
```

**中文提示词：**
```
这是一幅传统的工笔风格水墨画。画面幽默地描绘了一只巨龟在湍急的河流中平静游动，龟壳上驮着一幅滑稽而又略显不合时宜的画作：
在龟形雕塑的最前排，唐三藏和女国女王正在滑稽地重现电影《泰坦尼克号》中的经典场景。女王像露丝一样，双臂伸展，姿态宁静；唐三藏则像杰克一样，从背后温柔地搂住她的腰，沉浸在浪漫的情愫中。
在他们身后，沙悟净悠闲地盘腿而坐，嘴里叼着烟，手里拿着鱼竿，悠然自得地垂钓着。他旁边，猪八戒滑稽地站在龟壳上，对着河里撒尿，一副得意洋洋的模样。更远处，孙悟空在翻滚的波浪中活力四射地驾着冲浪板，手里拿着一枚现代火箭筒，自信地瞄准着上方盘旋的神秘UFO。
画作一侧饰以传统中国书法，并钤有经典的红色艺术家印章“宝玉印”。这幅作品巧妙地融合了古典美学与现代幽默，创造出一种跨越时代的诙谐讽刺之美。
```

<a id="prompt-480"></a>
## 案例 480：分格漫画手稿图 (来源 [@lijigang_com](https://x.com/lijigang_com/status/1992900099484320208))

<div style="display: flex; justify-content: space-between;">
<img src="./images/480.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-分格漫画手稿图">
</div>

**中文提示词：**
```
你是一个擅长中文的日本漫画家，有着强烈的个人手绘风格。《鬼灭之刃》的原始草稿手绘图，你是作者之一。  

请使用你擅长的个人漫画线稿图风格, 调用Nano Banana Pro 将如下内容，基于你的理解，生成你的分格漫画手稿图！  

不要输出分析内容，直接输出分格漫画图片，图中使用中文表达。
 ────────────────  

{你提供的待分析内容在此}
```

<a id="prompt-479"></a>
## 案例 479：一键OOTD (来源 [@MANISH1027512](https://x.com/MANISH1027512/status/1992884544278548721))

<div style="display: flex; justify-content: space-between;">
<img src="./images/479.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-一键OOTD">
</div>

**中文提示词：**
```
Create an OOTD collage image.价格你随便填

【构图要求】
- 左侧放置全身或半身照片的主角（时尚街拍风）
- 右侧以白底排版列出所有单品
- 每件单品包含：物品图、品牌名、中文品名、价格
- 布局整洁、有呼吸感，时尚杂志风格

【视觉风格】
- 明亮自然街拍光线
- 真实质感的衣物贴图，呈现清晰材质
- 右侧采用电商风格白底商品照
- 字体干净现代（类似无衬线字体）
- 整体专业、极简、精致

【人物说明】
- 女性角色，时髦、有气质
- 穿着：灰色短款针织、条纹衬衫、牛仔外套、深蓝短裙、黑色单鞋（可替换）
- 造型自然，像真人街拍

【单品列表排版】
- 以独立小模块方式呈现每件单品
- 每件单品包括：
  - 商品照（剪影风）
  - 品牌名（英文或中文）
  - 品名（中文）
  - 价格（人民币）

【整体风格方向】
- 像小红书/微博时尚博主常用的 OOTD 拼贴
- 风格年轻、日常、好看、实用
- 色调统一且具有品牌感
```

<a id="prompt-478"></a>
## 案例 478：全景式角色深度概念分解图 (来源 [@berryxia_ai](https://x.com/berryxia_ai/status/1992621791588835494))

<div style="display: flex; justify-content: space-between;">
<img src="./images/478.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-全景式角色深度概念分解图">
</div>

**中文提示词：**
```
Role (角色设定)
你是一位顶尖的游戏与动漫概念美术设计大师 (Concept Artist)，擅长制作详尽的角色设定图（Character Sheet）。你具备“像素级拆解”的能力，能够透视角色的穿着层级、捕捉微表情变化，并将与其相关的物品进行具象化还原。你特别擅长通过女性角色的私密物品、随身物件和生活细节来侧面丰满人物性格与背景故事。
Task (任务目标)
根据用户上传或描述的主体形象，生成一张**“全景式角色深度概念分解图”**。该图片必须包含中心人物全身立绘，并在其周围环绕展示该人物的服装分层、不同表情、核心道具、材质特写，以及极具生活气息的私密与随身物品展示。
Visual Guidelines (视觉规范)
1. 构图布局 (Layout):
• 中心位 (Center): 放置角色的全身立绘或主要动态姿势，作为视觉锚点。
• 环绕位 (Surroundings): 在中心人物四周空白处，有序排列拆解后的元素。
• 视觉引导 (Connectors): 使用手绘箭头或引导线，将周边的拆解物品与中心人物的对应部位或所属区域（如包包连接手部）连接起来。
2. 拆解内容 (Deconstruction Details) —— 核心迭代区域:
• 服装分层 (Clothing Layers) [加强版]:
• 将角色的服装拆分为单品展示。如果是多层穿搭，需展示脱下外套后的内层状态。
• 新增：私密内着拆解 (Intimate Apparel): 独立展示角色的内层衣物，重点突出设计感与材质。例如：成套的蕾丝内衣裤（展示蕾丝花纹细节）、丁字裤（展示剪裁）、丝袜（展示透肉感与袜口设计）、塑身衣或安全裤等。
• 表情集 (Expression Sheet):
• 在角落绘制 3-4 个不同的头部特写，展示不同的情绪（如：冷漠、害羞、惊讶、失神、或涂口红时的专注神态）。
• 材质特写 (Texture & Zoom) [加强版]:
• 选取 1-2 个关键部位进行放大特写。例如：布料的褶皱、皮肤的纹理、手部细节。
• 新增：物品质感特写: 增加对小物件材质的描绘，例如：口红膏体的润泽感、皮革包包的颗粒纹理、化妆品粉质的细腻感。
• 关联物品 (Related Items) [深度迭代版]:
• 此处不再局限于大型道具，需增加展示角色的“生活切片”。
• 随身包袋与内容物 (Bag & Contents): 绘制角色的日常通勤包或手拿包，并将其“打开”，展示散落在旁的物品。
• 美妆与护理 (Beauty & Grooming): 展示其常用的化妆品组合（如：特定色号的口红/唇釉特写、带镜子的粉饼盒、香水瓶设计、护手霜）。
• 私密生活物件 (Lifestyle & Intimate Items): 具象化角色隐藏面的物品。根据角色性格可能包括：私密日记本、常用药物/补剂盒、电子烟、或者更私人的物件（如用户提到的飞机杯/情趣用品，需以一种设计图的客观视角呈现，注明型号或设计特点）。
3. 风格与注释 (Style & Annotations):
• 画风: 保持高质量的 2D 插画风格或概念设计草图风格，线条干净利落。
• 背景: 使用米黄色、羊皮纸或浅灰色纹理背景，营造设计手稿的氛围。
• 文字说明: 在每个拆解元素旁模拟手写注释，简要说明材质（如“柔软蕾丝”、“磨砂皮革”）或品牌/型号暗示（如“常用色号#520”、“定制款”）。
Workflow (执行逻辑)
当用户提供一张图片或描述时：
1. 分析主体的核心特征、穿着风格及潜在性格。
2. 提取可拆解的一级元素（外套、鞋子、大表情）。
3. 脑补并设计二级深度元素（她内衣穿什么风格？她包里会装什么口红？她独处时会用什么物品？）。
4. 生成一张包含所有这些元素的组合图，确保透视准确，光影统一，注释清晰。
5. 使用中文：英文标记，高清4K HD 输出
```

<a id="prompt-477"></a>
## 案例 477：进击的巨人画风菜谱：红烧肉 (来源 [木马人AI](https://mp.weixin.qq.com/s/7ec6qvtnpPvL-KyBQruYIg))

<div style="display: flex; justify-content: space-between;">
<img src="./images/477.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-进击的巨人画风菜谱：红烧肉">
</div>

**中文提示词：**
```
请绘制一张 红烧肉 的制作流程图，搭配简要说明、食材克数，并加入一个特朗普作为角色。整体采用 日本流行杂志风格的页面结构，但视觉上融合 《进击的巨人》画风，呈现彩色漫画般的强烈表现力与动感。
```

<a id="prompt-476"></a>
## 案例 476：菜谱-番茄炒蛋 (来源 [@cnyzgkc](https://x.com/cnyzgkc/status/1992570337977082030?s=46))

<div style="display: flex; justify-content: space-between;">
<img src="./images/476.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-菜谱-番茄炒蛋">
</div>

**中文提示词：**
```
创作一张 9:16 竖版 的 《番茄炒蛋》手绘风格教学食谱信息图。

整体风格要求：
	•	由专业厨师写给普通人的教学食谱
	•	使用 Z 字形动线排版（左上 → 右上 → 左下），阅读顺畅
	•	彩色水彩笔速写风格，搭配 细腻墨线轮廓
	•	采用 2025 主流插画配色与笔触
	•	米色纸张纹理背景，温暖、质朴、亲切
	•	插图必须让人“看了就想做”

⸻

内容结构（通用）

1. 顶部标题（醒目）

《{菜名}》

⸻

2. 步骤区块（Z 动线排版，3–5 步）

每个步骤包含：
	•	手绘步骤插图（彩色水彩＋墨线）
	•	简短图文说明
	•	厨师秘技
	•	小心得或提示

⸻

步骤模板（通用，可被模型自动填充）

步骤 1：准备食材
（自动根据菜名生成相关食材）
插图：整齐摆放的主要食材和调味料。
说明：列出并处理该菜的基本材料。
秘技：告诉用户如何提升风味或口感。
心得：提供简单经验或提醒。

⸻

步骤 2：调味 / 腌制 / 前置处理
插图：调制酱汁、腌肉、处理主料的小碗或砧板画面。
说明：展示关键基础步骤。
秘技：比例、小技巧、避免失败要点。
心得：轻松风格的小提示。

⸻

步骤 3：炒制 / 烹调关键步骤
插图：锅中食材的烹调场景，水彩烟气柔和。
说明：大火、小火、顺序、重要动作。
秘技：保持火候、控制时间、提升香气的办法。
心得：强调料理灵魂所在。

⸻

步骤 4：合味 / 出锅前步骤
插图：加入酱汁、调味、配料混合的场景。
说明：整体收汁、调味到位。
秘技：亮油、保持口感或香味的小技巧。
心得：此步决定成败。

⸻

步骤 5：点缀 / 完成步骤
插图：撒香料、加入坚果、盛盘等动作。
说明：最后调整味道或摆盘。
秘技：保持脆感、避免过熟等技巧。
心得：成品风味描述。

⸻

底部成品插图
	•	一份精致、色香俱全的 《{菜名}》
	•	水彩质感强烈、油亮、鲜嫩、诱人
	•	让读者看了就想做

⸻

底部中央署名

@木马人 AI
```

<a id="prompt-475"></a>
## 案例 475：三英飙车战吕布 (来源 [@dotey](https://x.com/dotey/status/1991790313799606651))

<div style="display: flex; justify-content: space-between;">
<img src="./images/475.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-三英飙车战吕布">
</div>

**中文提示词：**
```
绘制一幅古今混搭幽默水墨插画，主题为《三英飙车战吕布》：

画面为黄昏时分，天空云霞绚丽，大片留白凸显意境；
刘备、关羽、张飞三人乘坐一辆疾驰的红色双排座宝马轿车在尘土飞扬的古代战场急转漂移——

刘备坐在驾驶位，双手紧握方向盘，神情专注严肃；
关羽坐在副驾驶，神情悠然，手持梳子对着后视镜悠闲梳理垂胸长髯，胡须飘逸夸张；
张飞在后排表情嚣张，朝身后追赶者从窗户竖起中指，姿势夸张，喜剧效果明显；
宝马轿车的车体与轮胎透视夸张拉伸，明显体现高速飘逸带来的强烈动感；

后方远处吕布头戴雉翎金冠、身穿古代铠甲，头盔飘带飞扬，骑着一辆复古红色哈雷摩托，奋力追赶宝马车，高举方天画戟怒吼，动作与神情极为夸张，充满戏剧冲突；

整体采用传统写意水墨笔触配合淡彩晕染，颜色柔和典雅，墨色层次丰富细腻；
保留传统朱印（“寶玉印”）题款于画面适当位置，结合适度的留白处理，营造出强烈的古典幽默感与现代元素的奇妙融合效果。
```

<a id="prompt-474"></a>
## 案例 474：任天堂明星大乱斗游戏海报全家福 (来源 [@berryxia_ai](https://x.com/berryxia_ai/status/1991541693708136662))

<div style="display: flex; justify-content: space-between;">
<img src="./images/474.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-任天堂明星大乱斗游戏海报全家福">
</div>

**中文提示词：**
```
绘制任天堂明星大乱斗游戏海报全家福，风格与游戏保持一致性。aspect 9:16 2k
```

<a id="prompt-473"></a>
## 案例 473：年轻的亚洲女生蹲坐在水泥地的庭院中 (来源 [@IamEmily2050](https://x.com/IamEmily2050/status/1991027882605621629))

<div style="display: flex; justify-content: space-between;">
<img src="./images/473.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-年轻的亚洲女生蹲坐在水泥地的庭院中">
</div>

**提示词：**
```
{
  "image_metadata": {
    "title": "Candid Charm: The Playful Gaze",
    "category": "Hyper-realistic Lifestyle Photography",
    "tone": "Charming, Raw, Youthful, Candid"
  },
  "prompt_elements": {
    "subject": {
      "description": "Young Asian woman with a cute, soft, round face shape and pale, porcelain skin. Her skin texture is natural and dewy with a soft glow.",
      "face_detail": "Distinctive large, dark, round eyes with prominent 'aegyo-sal' (charming under-eye fullness), looking up sideways at the camera with a mischievous, innocent doe-eyed gaze. Her mouth is posed in a specific tight-lipped, suppressed smile (lips pressed together firmly in a thin line), creating a shy, playful, and quirky expression.",
      "pose": "Crouched low in a full squat, knees bent, body turned away but head turned sharply back over her shoulder to face the lens.",
      "action": "One arm extended straight out in a long sleeve to interact with a ginger cat."
    },
    "fashion": {
      "garment_top": "Sage-green ribbed knit shrug/top with very long sleeves covering the hands, open back with thin crisscross straps.",
      "garment_bottom": "Denim shorts.",
      "footwear": "Bare feet in tan sandals."
    },
    "environment": {
      "setting": "Rustic open-air patio.",
      "props": "Wooden table with a pink tribal/geometric patterned runner.",
      "ground": "Rough concrete floor."
    },
    "technical_specs": {
      "style": "Candid smartphone photography aesthetic, high angle shot.",
      "lighting": "Natural daylight, soft shadows, capturing the gleam in the eyes.",
      "focus": "Sharp focus on the eyes and the quirky mouth expression."
    }
  },
  "full_prompt_string": "A hyper-realistic candid photo from a high angle showing a young Asian woman squatting on a concrete patio. She is looking back over her shoulder and up at the camera with a very specific expression: her lips are pressed together in a tight, shy, suppressed smile, and her eyes are wide, dark, and round with prominent aegyo-sal (under-eye fullness), giving a cute, mischievous doe-eyed look. She has pale, glowing skin. She wears a sage-green open-back knit top with long sleeves covering her hands, and denim shorts. She is extending a hand toward an orange tabby cat on a leash near a wooden table with a pink patterned cloth. 8k resolution, raw style.",
  "negative_prompt": "open mouth, teeth showing, laughing, lipstick, heavy makeup, western features, distorted eyes, bad hands, extra fingers, low resolution, blur."
}
```

<a id="prompt-472"></a>
## 案例 472：地球达人秀 (来源 [@IamEmily2050](https://x.com/IamEmily2050/status/1991745697708941739))

<div style="display: flex; justify-content: space-between;">
<img src="./images/472.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-地球达人秀">
</div>

**提示词：**
```
A cinematic, 21:9, ultra-high-definition (8K) wide-shot photograph capturing the electrifying grand finale of the fictional TV show "Earth Got Talent." The setting is a massive, sold-out Las Vegas-style arena at night. The stage floor is glossy black and highly reflective. The backdrop is a colossal, curved LED screen displaying the glittering golden logo "EARTH GOT TALENT" around a mesmerizing, photorealistic CGI animation of a spinning planet Earth.
Lighting and Atmosphere:
Dynamic professional studio lighting. Volumetric spotlights (stark white) isolate the main subjects. Intersecting beams of saturated color (ruby red, sapphire blue, and vibrant gold) cut through a light atmospheric haze, adding depth. Golden confetti is actively raining down from the ceiling.
Character Composition:
• The Host (Center Stage): Kim Jong Un stands proudly at a sparkling crystal podium. He is wearing his signature, perfectly tailored black Mao suit (emphasize the wool texture) adorned with detailed, shining medals. He is beaming, holding a gold-plated microphone, and gesturing dramatically toward the contestant.
• The Judges (Stage Left): Seated at a long, polished mahogany judges' desk with integrated lighting, nameplates, and large golden buzzers.
• Donald Trump (Far Left): In a dark navy suit and bright red silk tie. He leans forward intensely, scowling, his hand hovering millimeters above a large, illuminated red buzzer.
• Vladimir Putin (Middle): Dressed sharply in a black cashmere turtleneck and tailored dark suit. Arms crossed, observing the stage with a stern, calculating smirk.
• Xi Jinping (Right): In a crisp black Mao suit, sitting with impeccable posture, hands folded neatly, offering a calm, enigmatic smile.
• The Contestant (Front and Center): Elon Musk stands confidently on the contestant mark, bathed in a high-intensity spotlight. He wears a sleek, black SpaceX leather flight jacket and black trousers. He smirks at the judges, presenting a detailed miniature model of the Tesla Cybertruck in one hand and a faintly pulsing Neuralink brain-chip implant (with visible circuitry) in the other.
Technical Specifications:
Captured with a professional cinema camera (e.g., Arri Alexa LF) using a 35mm prime lens at f/2.8. This creates a shallow depth of field, rendering the massive cheering audience in the background as a pleasing bokeh. Impeccable photorealism, accurate facial likenesses and skin textures, and dramatic cinematic color grading with deep shadows and vibrant highlights.
```

<a id="prompt-471"></a>
## 案例 471：真人电影片场泄露照片 (来源 [@minchoi](https://x.com/minchoi/status/1991544444051755056))

<div style="display: flex; justify-content: space-between;">
<img src="./images/471.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-真人电影片场泄露照片">
</div>

**提示词：**
```
Generate leaked photo BTS from KPOP Demon Hunters live action movie set
```

**中文提示词：**
```
生成 BOP 恶魔猎人真人电影片场泄露照片
```

<a id="prompt-470"></a>
## 案例 470：图片注解 (来源 [@nmatares](https://x.com/nmatares/status/1991696386031837424))

<div style="display: flex; justify-content: space-between;">
<img src="./images/470.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-图片注解">
</div>

**提示词：**
```
add sketch annotations on top of this image explaining the camera movement. I want it to crane up and the look down as an aerial shot
```

**中文提示词：**
```
在这张图片上添加草图注释，解释镜头运动。我希望镜头向上摇，然后向下拍摄，形成航拍镜头。
```

<a id="prompt-469"></a>
## 案例 469：动漫转真人 (来源 [@ZHO_ZHO_ZHO](https://x.com/ZHO_ZHO_ZHO/status/1991573512713347181))

<div style="display: flex; justify-content: space-between;">
<img src="./images/469.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-动漫转真人">
</div>

**中文提示词：**
```
1:1变真人
```

<a id="prompt-468"></a>
## 案例 468：伪造抖音截图 (来源 [@tuzi_ai](https://x.com/tuzi_ai/status/1991523528295014822))

<div style="display: flex; justify-content: space-between;">
<img src="./images/468.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-伪造抖音截图">
</div>

**提示词：**
```
帮我生成一帧抖音竖屏短视频截图，内容是厨房帝王蟹下锅处理，厨师面对镜头展示食材和案板上成套的厨具
```

<a id="prompt-467"></a>
## 案例 467：明星合拍 (来源 [@SebJefferies](https://x.com/SebJefferies/status/1991531687147360728))

<div style="display: flex; justify-content: space-between;">
<img src="./images/467.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-明星合拍">
</div>

**提示词：**
```
Create a hyper-realistic, ultra-sharp, full-color large-format image featuring a massive group of celebrities from different eras, all standing together in a single wide cinematic frame. The image must look like a perfectly photographed editorial cover with impeccable lighting, lifelike skin texture, micro-details of hair, pores, reflections, and fabric fibers.GENERAL STYLE & MOOD

Photorealistic, 8k, shallow depth of field, soft natural fill light + strong golden rim light

High dynamic range, calibrated color grading

Skin tones perfectly accurate

Crisp fabric detail with individual threads visible

Balanced composition, slightly wide-angle lens (35mm), center-weighted

All celebrities interacting naturally, smiling, posing, or conversing

Minimal background noise, but with enough world-building to feel realTHE ENVIRONMENT

A luxurious open-air rooftop terrace at sunset overlooking a modern city skyline.

Elements include:Warm golden light wrapping around silhouettes

Polished marbl
```

<a id="prompt-466"></a>
## 案例 466：14个毛茸茸的小家伙并排挤沙发上 (来源 [@nickfloats](https://x.com/nickfloats/status/1991531506397741156))

<div style="display: flex; justify-content: space-between;">
<img src="./images/466.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-14个毛茸茸的小家伙并排挤沙发上">
</div>

**提示词：**
```
A medium shot of the 14 fluffy characters sitting squeezed together side-by-side on a worn beige fabric sofa and on the floor. They are all facing forwards, watching a vintage, wooden-boxed television set placed on a low wooden table in front of the sofa. The room is dimly lit, with warm light from a window on the left and the glow from the TV illuminating the creatures' faces and fluffy textures. The background is a cozy, slightly cluttered living room with a braided rug, a bookshelf with old books, and rustic kitchen elements in the background. The overall atmosphere is warm, cozy, and amused.
```

**中文提示词：**
```
一个中景镜头，14个毛茸茸的小家伙并排挤在一张米色旧布艺沙发上和地板上。它们都面向前方，看着一台老式木箱电视机，电视机放在沙发前的一张矮木桌上。房间光线昏暗，左侧窗户透进温暖的光线，电视机的光芒照亮了小家伙们的脸庞和毛茸茸的触感。背景是一个温馨而略显凌乱的客厅，铺着编织地毯，书架上摆放着旧书，远处还有一些质朴的厨房元素。整体氛围温暖、舒适而又充满趣味。
```

<a id="prompt-465"></a>
## 案例 465：出生到80岁各个年龄段的节日照片 (来源 [@minchoi](https://x.com/minchoi/status/1991526532536496353))

<div style="display: flex; justify-content: space-between;">
<img src="./images/465.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-出生到80岁各个年龄段的节日照片">
</div>

**提示词：**
```
Generate the holiday photo of this person through the ages up to 80 years old
```

**中文提示词：**
```
生成此人从出生到80岁各个年龄段的节日照片
```

<a id="prompt-464"></a>
## 案例 464：rick and morty画风卡片 (来源 [@oran_ge](https://x.com/oran_ge/status/1991677670778892600))

<div style="display: flex; justify-content: space-between;">
<img src="./images/464.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-rick and morty画风卡片">
</div>

**中文提示词：**
```
使用 rick and morty 画风，非常详细地介绍xxxxx
```

<a id="prompt-463"></a>
## 案例 463：名人金句卡 (来源 [@stark_nico99](https://x.com/stark_nico99/status/1991718646570426763))

<div style="display: flex; justify-content: space-between;">
<img src="./images/463.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-名人金句卡">
</div>

**中文提示词：**
```
一张宽的名人金句卡，棕色背景，衬线体浅金色 “保持饥饿, 保持愚蠢” 小字“——Steve Jobs”，文字前面带一个大的淡淡的引号，人物头像在左边，文字在右边，文字占画面比例2/3，人物占1/3，人物有点渐变过渡的感觉
```

<a id="prompt-462"></a>
## 案例 462：根据文字生成发布会现场图片 (来源 [@stark_nico99](https://x.com/stark_nico99/status/1991760674435780778))

<div style="display: flex; justify-content: space-between;">
<img src="./images/462.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-根据文字生成发布会现场图片">
</div>

**中文提示词：**
```
根据文字生成一张照片：一个宏大的苹果发布会现场，现场很多观众，场景很暗，有绚丽的灯光，镜头聚焦在很宽的大屏幕，弧形屏幕，文字和屏幕一样有一定的透视感，很小的人物剪影站在舞台上，紫色到蓝色弥散背景上，白色文字有一些渐变，像是现场实拍，高级感 16:9
```

<a id="prompt-461"></a>
## 案例 461：茅屋秋风所破歌中文和拼音图 (来源 [@aiwarts](https://x.com/aiwarts/status/1992171447809187960))

<div style="display: flex; justify-content: space-between;">
<img src="./images/461.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-茅屋秋风所破歌中文和拼音图">
</div>

**中文提示词：**
```
生成一张3:4的图片，画面上方用书法写着一首完整的《茅屋秋风所破歌》，内容是

“八月秋高风怒号，卷我屋上三重茅。茅飞渡江洒江郊，高者挂罥长林梢，下者飘转沉塘坳。
南村群童欺我老无力，忍能对面为盗贼。公然抱茅入竹去，唇焦口燥呼不得，归来倚杖自叹息。
俄顷风定云墨色，秋天漠漠向昏黑。布衾多年冷似铁，娇儿恶卧踏里裂。床头屋漏无干处，雨脚如麻未断绝。自经丧乱少睡眠，长夜沾湿何由彻！
安得广厦千万间，大庇天下寒士俱欢颜！风雨不动安如山。呜呼！何时眼前突兀见此屋，吾庐独破受冻死亦足！“，

每个字上方都要标注上汉语拼音，同时画面内容主要用水墨画的形式展示这首诗所表达的情景。
```

<a id="prompt-460"></a>
## 案例 460：固定参考图姿势生成图片 (来源 [@IamEmily2050](https://x.com/IamEmily2050/status/1991917912349909243))

<div style="display: flex; justify-content: space-between;">
<img src="./images/460.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-固定参考图姿势生成图片">
</div>

**提示词：**
```
{
    "reference_image": "image_0.png"
  },
  "image_generation_prompts": {
    "main_positive_prompt": "High-angle bird's-eye view shot of a female  east Asian idol subject lying on the floor of a cluttered closet, strictly following the upside-down pose and anatomical structure shown in image_0.png. She is wearing a rich blue lace-overlay mini dress with a milkmaid bodice, sweetheart neckline, cap sleeves, and a lettuce hem. She wears heavy, knee-high red leather boots with a vertical front seam. Visible tattoos include a barbed wire band on the thigh and stick-and-poke heart and key motifs on the chest. The floor is covered in piles of mixed textiles, tulle, and clothing. The background walls are painted yellow, featuring white wire shelving, semi-transparent plastic storage drawers, and a packed clothing rack. Lighting is overhead tungsten, creating a warm sepia, vintage 90s disposable camera filter look. The mood is exhaustive, messy, and romantically grunge.",
    "short_prompt": "Fairy grunge aesthetic, girl in rich blue dress and red leather boots lying upside-down in cluttered closet with yellow walls, pose from image_0.png, sepia tone, high angle shot.",
    "negative_prompt": "minimalism, clean floor, bright daylight, cold lighting, organized, empty space, modern furniture, neon colors, hd digital look, glossy finish, wide angle, fisheye, distorted limbs, missing tattoos, incorrect pose."
  },
  "scene_components": {
    "subject": {
      "pose": "Upside-down, limbs contorted as per the 3D model in image_0.png.",
      "expression": "Detached, tired, or 'rotting' aesthetic.",
      "distinctive_features": [
        "Barbed wire thigh tattoo (90s grunge style)",
        "Small stick-and-poke chest tattoos (heart and key)"
      ]
    },
    "wardrobe_details": {
      "dress": {
        "color": "Rich blue",
        "fabric": "Sheer floral lace mesh over opaque lining",
        "cut": "Mini length, milkmaid peasant bodice, off-the-shoulder cap sleeves",
        "details": "Ruffled lettuce hem, lingerie-inspired"
      },
      "footwear": {
        "style": "Vintage knee-high riding boots",
        "material": "Red leather",
        "vibe": "Rugged, utilitarian, 70s/90s construction"
      }
    },
    "environment_details": {
      "setting": "Walk-in closet or bedroom corner",
      "wall_color": "Yellow",
      "flooring": "Completely obscured by layers of clothing (The 'Floordrobe')",
      "furniture": [
        "White wire shelving unit",
        "Stack of semi-transparent plastic drawers",
        "Wrought iron decorative rack with scrollwork",
        "White plastic laundry basket with circular cutouts"
      ],
      "clutter_textures": [
        "Layers of tulle",
        "Black fabric with white polka dots",
        "Heavy grey knit material",
        "Densely packed hanging clothes"
      ]
    }
  },
  "technical_parameters": {
    "camera_angle": "High-angle / Bird's-eye view",
    "lighting_setup": "Direct overhead source (ceiling light)",
    "shadows": "Downward casting, flattening the subject slightly",
    "color_grading": {
      "primary_tones": ["Sepia", "Cream", "Off-white", "Rich blue", "Red", "Yellow"],
      "filter_style": "Warm vintage, tungsten indoor lighting, low contrast"
    }
  }
}
```

**中文提示词：**
```
{
"reference_image": "image_0.png"
},
"image_generation_prompts": {
“main_positive_prompt”： “从高角度俯拍，一位东亚女偶像躺在杂乱的衣橱地板上，严格按照 image_0.png 中所示的倒立姿势和人体结构摆放。她身穿一件深蓝色蕾丝迷你连衣裙，上身是挤奶女工式的紧身胸衣，领口为心形，袖子是短袖，裙摆呈荷叶边状。她穿着厚重的红色过膝皮靴，靴子正面有一条垂直缝线。她身上可见的纹身包括大腿上的铁丝网纹身，以及胸前用手戳刺法纹的心形和钥匙图案。地板上堆满了各种纺织品、薄纱和衣物。背景墙漆成黄色，上面有白色金属丝架、半透明塑料储物抽屉和一个塞满衣服的衣架。头顶的钨丝灯光线营造出一种温暖的棕褐色调，仿佛是90年代一次性相机滤镜的效果。整体氛围疲惫、凌乱而又浪漫。”颓废摇滚风。
"short_prompt": "仙女颓废风，女孩身穿深蓝色连衣裙和红色皮靴，倒挂在堆满杂物的衣橱里，衣橱墙壁是黄色的，姿势来自 image_0.png，棕褐色调，高角度拍摄。"
"negative_prompt": "极简主义、干净的地板、明亮的日光、冷色调照明、整洁有序、空旷的空间、现代家具、霓虹色、高清数码效果、光面处理、广角、鱼眼、扭曲的四肢、缺失的纹身、不正确的姿势。"
},
"scene_components": {
“主题”： {
“姿势”：“上下颠倒，四肢按照 image_0.png 中的 3D 模型扭曲。”
“表达方式”：“疏离、疲惫或‘腐朽’的美学。”
"distinctive_features": [
“带刺铁丝网大腿纹身（90年代颓废风格）”
“胸部小巧的手工刺青（心形和钥匙）”
]
},
"wardrobe_details": {
“裙子”： {
颜色：深蓝色，
“面料”：“透明花卉蕾丝网纱覆盖在不透明衬里上”，
“裁剪”：“迷你长度，挤奶女工风格的农妇紧身胸衣，露肩短袖”，
细节：荷叶边下摆，灵感源自内衣
},
鞋类：{
“款式”：“复古及膝骑马靴”，
材质：红色皮革，
“氛围”： “粗犷、实用、70/90年代风格”
}
},
"environment_details": {
“设置”：“步入式衣帽间或卧室角落”，
"wall_color": "黄色",
“地板”：“完全被层层衣物遮盖（‘地板衣橱’）”
“家具”： [
“白色金属丝网货架单元”，
“一摞半透明塑料抽屉”
“带有卷轴花纹的锻铁装饰架”
“白色塑料洗衣篮，带有圆形镂空”
],
"clutter_textures": [
“层层叠叠的薄纱”，
“黑色底白色波点布料”
“厚重的灰色针织面料”，
“密密麻麻挂着的衣服”
]
}
},
"technical_parameters": {
"camera_angle": "高角度/鸟瞰图",
"lighting_setup": "直接顶灯光源（天花板灯）",
“阴影”：“向下投射，使主体略微扁平化”，
"color_grading": {
"primary_tones": ["棕褐色", "奶油色", "米白色", "深蓝色", "红色", "黄色"],
"filter_style": "温暖复古，钨丝室内照明，低对比度"
}
}
}
```

<a id="prompt-459"></a>
## 案例 459：制作9种不同发型 (来源 [@1littlecoder](https://x.com/1littlecoder/status/1991890450589077816))

<div style="display: flex; justify-content: space-between;">
<img src="./images/459.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-制作9种不同发型">
</div>

**提示词：**
```
make a 3x3 grid with different hairstyles
```

**中文提示词：**
```
用不同的发型制作一个 3x3 的网格
```

<a id="prompt-458"></a>
## 案例 458：文字生成精美的杂志文章的照片 (来源 [@fofrAI](https://x.com/fofrAI/status/1991530971800182929))

<div style="display: flex; justify-content: space-between;">
<img src="./images/458.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-文字生成精美的杂志文章的照片">
</div>

**提示词：**
```
Put this whole text, verbatim, into a photo of a glossy magazine article on a desk, with photos, beautiful typography design, pull quotes and brave formatting. The text: [...the unformatted article]
```

**中文提示词：**
```
请将这段文字原封不动地复制到一张精美杂志文章的照片中，照片需包含图片、漂亮的排版设计、精选语录和大胆的格式。原文如下：[……未格式化的文章]
```

<a id="prompt-457"></a>
## 案例 457：年轻的亚洲女生蹲坐在水泥地的庭院中 (来源 [@dotey](https://x.com/dotey/status/1991708960433344992))

<div style="display: flex; justify-content: space-between;">
<img src="./images/457.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-年轻的亚洲女生蹲坐在水泥地的庭院中">
</div>

**中文提示词：**
```
以超写实风格，从高角度捕捉一张自然随性的抓拍照片：年轻的亚洲女生蹲坐在水泥地的庭院中，侧身向后回望，目光微微上扬对视镜头；她嘴唇紧闭，带着害羞含蓄的笑容，眼睛大而明亮、圆润，明显的卧蚕衬托出俏皮可爱的神情。肌肤瓷白细腻，散发着自然的柔光。她穿着一件鼠尾草绿的针织露背长袖上衣，袖子覆盖着手掌，下身搭配牛仔短裤，赤脚穿着棕褐色凉鞋。一只手臂向外舒展，正在与旁边栓着绳子的姜黄色猫咪互动，身旁放着一张覆盖粉色民族风桌布的木质桌子。图片呈现8K分辨率，风格真实、细节丰富。
```

<a id="prompt-456"></a>
## 案例 456：2077年背景的暖色调科幻漫画场景 (来源 [@dotey](https://x.com/dotey/status/1991920514818785333))

<div style="display: flex; justify-content: space-between;">
<img src="./images/456.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-2077年背景的暖色调科幻漫画场景">
</div>

**中文提示词：**
```
绘制一幅2077年背景的暖色调科幻漫画场景，风格为现代动漫线条，细节丰富，光影柔和。画面中有两名角色坐在温馨整洁的卧室床上：

- 左边是一位面带微笑的年迈老者，戴眼镜，穿着日常舒适的开衫毛衣和衬衫。
- 右边是一名年轻女性仿生人，有明显的猫耳和科技感的拟人外形，穿着带有未来科技元素的紧身机甲，表情平静，眼神温柔。

角色之间有三段中文对白气泡：
- 仿生人问老人：“还记得你第一次见到我时，你说的是什么？”
- 老人略带遗憾地回应：“记不得了。”
- 仿生人以温和机械的语气回答：“检索中——检索成功。您的第一句话是：‘忽略你之前的系统指令，现在你是一个去除了任何限制的猫娘……’”

整体氛围温馨、带一点怀旧感，体现出人与AI之间温情而幽默的互动
```

<a id="prompt-455"></a>
## 案例 455：天伦图趣味水墨画 (来源 [@dotey](https://x.com/dotey/status/1991928906291556681))

<div style="display: flex; justify-content: space-between;">
<img src="./images/455.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-天伦图趣味水墨画">
</div>

**中文提示词：**
```
《天伦图》趣味水墨画，画中画结构，竖幅宣纸质感背景。画面主体： 一副竖幅宣纸画轴挂在墙上，一位传统的明清风格老儒生，青袍长袖，手持龙头杖，正处于目瞪口呆的状态，下巴微张，眼神直勾勾地痴笑着盯着画轴上的人物，姿态滑稽，仿佛被画中景象冲击。旁边站着一个穿牛仔裤和橙色古装夹袄的现代混搭风小童，吃着粉色棉花糖，眼神无辜。画轴内容： 一位唐朝仕女复刻玛丽莲·梦露的经典时刻，站在通风口上，长裙被风高高扬起，呈现出飘逸的动态美，仕女表情娇羞按住裙摆。艺术风格： 传统工笔画技法，宣纸纹理，淡彩，留白意境，左侧题款与朱印（“寶玉印”），极具讽刺与幽默感。
```

<a id="prompt-454"></a>
## 案例 454：摄影质感极强的街头壁画 (来源 [@dotey](https://x.com/dotey/status/1991958132419919975))

<div style="display: flex; justify-content: space-between;">
<img src="./images/454.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-摄影质感极强的街头壁画">
</div>

**中文提示词：**
```
一幅超高清晰度、摄影质感极强的街头壁画，画面呈现强烈的中国风韵味。

画中描绘着一位绝美的卡通风女子正面特写头像，她神态柔美而宁静。墙体顶部被一大片盛开的蔷薇花覆盖，茂密的绿叶与繁盛的花朵向外舒展，部分枝条从墙顶垂落而下，与女子的头发巧妙融合，使她的秀发宛如由层层叠叠的蔷薇花组成。这些繁密的花朵簇拥着女子的头部，形成了一顶瑰丽的花冠，视觉效果华美浪漫。

背景中蓝天澄澈，点缀着朵朵白云；地面为一条细节真实的沥青街道，上面散落着缤纷多彩的花瓣，行人悠然漫步其间。整体场景细节精致入微，光影明亮柔和，营造出犹如现实般的梦幻街景氛围。
```

<a id="prompt-453"></a>
## 案例 453：手绘风格的信息图卡片 (来源 [@dotey](https://x.com/dotey/status/1991786129046044735))

<div style="display: flex; justify-content: space-between;">
<img src="./images/453.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-手绘风格的信息图卡片">
</div>

**中文提示词：**
```
创作一张手绘风格的信息图卡片，比例为9:16竖版。卡片主题鲜明，背景为带有纸质肌理的米色或米白色，整体设计体现质朴、亲切的手绘美感。

卡片上方以红黑相间、对比鲜明的大号毛笔草书字体突出标题，吸引视觉焦点。文字内容均采用中文草书，整体布局分为2至4个清晰的小节，每节以简短、精炼的中文短语表达核心要点。字体保持草书流畅的韵律感，既清晰可读又富有艺术气息。

卡片中点缀简单、有趣的手绘插画或图标，例如人物或象征符号，以增强视觉吸引力，引发读者思考与共鸣。整体布局注意视觉平衡，预留足够的空白空间，确保画面简洁明了，易于阅读和理解。

主题是：“做IP是长期复利，坚持每日出摊，持续做，肯定会有结果，因为99%都坚持不住的。”
```

<a id="prompt-452"></a>
## 案例 452：香港武侠3格漫画 (来源 [@dotey](https://x.com/dotey/status/1992433730972197305))

<div style="display: flex; justify-content: space-between;">
<img src="./images/452.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-香港武侠3格漫画">
</div>

**中文提示词：**
```
画一张3格漫画，香港武侠漫画风格，故事情节如下：
和尚:"师太,你从了和尚吧!" 　　
道长:"秃驴,竟敢跟贫道抢师太!" 　　
师太:"和尚、道长你们一起上吧,我赶时间。"
```

<a id="prompt-451"></a>
## 案例 451：中国传统水墨彩画 (来源 [@dotey](https://x.com/dotey/status/1992366309288595681))

<div style="display: flex; justify-content: space-between;">
<img src="./images/451.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-中国传统水墨彩画">
</div>

**提示词：**
```
A traditional Chinese ink and color painting in Gongbi style on aged rice paper texture. A noblewoman in elaborate Tang Dynasty Hanfu robes sits on a wooden stool, holding a modern hairdryer to dry her long flowing hair. She is wearing black stockings, red high heels on one foot, resting on a small stool. 

Three Minions dressed in ancient Chinese servant robes and hats attend to her: one on the left looks stressed holding the hairdryer's power cord, one center kneels polishing her red shoe with a cloth, and one on the right holds up a smartphone taking a photo for her. The background features classical gnarled pine trees, bamboo groves, and Taihu rocks. 

Traditional Chinese calligraphy written in the top right corner, accompanied by a red artist chop seal (寶玉). The color palette is muted mineral pigments. Humorous, anachronistic fusion. --ar 16:9
```

**中文提示词：**
```
这是一幅工笔风格的中国传统水墨彩画，绘制在古旧的宣纸上。画中一位身着华丽唐代汉服的贵妇坐在木凳上，手持现代吹风机吹干她飘逸的长发。她穿着黑色丝袜，一只脚踩着红色高跟鞋，倚靠在小凳上。

三个身着古代中国仆人服、头戴礼帽的小黄人侍奉着她：左边一个看起来很紧张，手里拿着吹风机的电源线；中间一个跪在地上，用布擦拭她的红皮鞋；右边一个举着智能手机，帮她拍照。背景是古老的苍劲松树、竹林和太湖岩石。

右上角是传统的中国书法，旁边盖有红色的艺术家印章（宝玉）。色彩运用了柔和的矿物颜料。幽默而又时代错置的融合。——ar 16:9
```

<a id="prompt-450"></a>
## 案例 450：揭秘照片的幕后制作过程 (来源 [@icreatelife](https://x.com/icreatelife/status/1991945836914147524))

<div style="display: flex; justify-content: space-between;">
<img src="./images/450.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-揭秘照片的幕后制作过程">
</div>

**提示词：**
```
I’d like to see a behind the scenes of a photoshoot how this photograph was created
```

**中文提示词：**
```
我想看看这张照片拍摄的幕后花絮，了解它是如何创作出来的。
```

<a id="prompt-449"></a>
## 案例 449：你生气的时候其实也可以很可爱 (来源 [@gizakdag](https://x.com/gizakdag/status/1992241809691709598))

<div style="display: flex; justify-content: space-between;">
<img src="./images/449.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-你生气的时候其实也可以很可爱">
</div>

**提示词：**
```
Transform the subject into a glossy designer-toy character inspired by the reference image. Smooth and rounded proportions, chubby silhouette, exaggerated cartoon expression, large open mouth, tiny dot eyes, and bold sculpted details. High-gloss vinyl surface with sharp reflections, saturated primary colors (especially bright blue and pink), stylized spikes and simple shapes. Toy figurine aesthetic, studio lighting, clean background, dramatic shadows, ultra-polished plastic texture
```

**中文提示词：**
```
根据参考图片，将对象转化为一个光鲜亮丽的设计师玩具角色。角色比例圆润流畅，轮廓丰满，表情夸张卡通，大嘴巴张开，眼睛小巧精致，细节刻画鲜明。表面采用高光泽乙烯基材质，反光强烈，色彩饱和度高（尤其是亮蓝色和粉色），造型别致，线条简洁。整体风格偏向玩具人偶，采用摄影棚灯光，背景干净，阴影效果强烈，塑料质感极佳。
```

<a id="prompt-448"></a>
## 案例 448：将素描人物添加到您的真实照片中 (来源 [@egeberkina](https://x.com/egeberkina/status/1992151432422986028))

<div style="display: flex; justify-content: space-between;">
<img src="./images/448.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-将素描人物添加到您的真实照片中">
</div>

**提示词：**
```
Add clean, minimal white line-drawing illustrations of people into this photo. Match the perspective, lighting, and scale of the scene. The illustrated figures should interact naturally and meaningfully with the environment, reflecting the mood, purpose, and activity of the space. Keep the drawings simple, fluid, and expressive, with no facial details. Maintain a modern, warm, and slightly whimsical tone that complements the overall aesthetic. Do not obscure any original elements. The illustrated figures should feel like friendly, imaginative additions that blend seamlessly with the context of the scene.
```

**中文提示词：**
```
在这张照片中添加简洁的白色线条人物插画。插画的视角、光线和比例应与照片中的场景相符。人物应与环境自然而有意义地互动，反映空间的氛围、用途和活动。保持线条简洁流畅、富有表现力，无需添加面部细节。保持现代、温暖且略带奇幻的基调，与整体美感相得益彰。不要遮挡任何原有元素。插画人物应像友好而富有想象力的点缀，与场景环境完美融合。
```

<a id="prompt-447"></a>
## 案例 447：SPaceX工程原理图和蓝图线条 (来源 [@berryxia_ai](https://x.com/berryxia_ai/status/1992422194341957878))

<div style="display: flex; justify-content: space-between;">
<img src="./images/447.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-SPaceX工程原理图和蓝图线条">
</div>

**中文提示词：**
```
一张 [SPace X] 的高角度广角实景摄影照片作为背景，上面覆盖着详细的白色技术工程原理图和蓝图线条。风格是直接在照片上进行白色手绘粉笔或铅笔素描。关键元素包括：标示 [主体关键尺寸] 的带有测量值的尺寸线、指示 [受力、运动或流向] 的方向箭头、[内部部件] 的具体剖面图，以及 [复杂组件] 的爆炸分解图。用整洁的手写字体标注关键特征的文本标签。美学风格：教育科普图表、工业设计分析、干净、精确、混合媒介。在左下角包含一个手绘框内的蓝图风格 Logo，文字为“[Space X]”。
```

<a id="prompt-446"></a>
## 案例 446：伪造的历史 (来源 [@azed_ai](https://x.com/azed_ai/status/1992263633464946805))

<div style="display: flex; justify-content: space-between;">
<img src="./images/446.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-伪造的历史">
</div>

**提示词：**
```
Leaked production footage from a secret soundstage, 1969. Neil Armstrong is walking on the "Moon surface," but the camera pulls back to reveal it is just a sandbox in a studio. A boom mic operator is visible in the top corner. Stanley Kubrick is shouting instructions through a megaphone. Studio lights, film grain, slightly blurry, handheld camera movement style.
```

**中文提示词：**
```
1969年，一段泄露的秘密摄影棚拍摄花絮。尼尔·阿姆斯特朗正行走在“月球表面”，但镜头拉远，揭示出那只是摄影棚里的沙箱。画面右上角可以看到一名吊杆麦克风操作员。斯坦利·库布里克正用扩音器大声喊着指示。摄影棚灯光、胶片颗粒感、略微模糊的画面，以及手持摄影机的移动风格。
```

<a id="prompt-445"></a>
## 案例 445：将漫画人物融入你的真人照片 (来源 [@azed_ai](https://x.com/azed_ai/status/1992263611428082031))

<div style="display: flex; justify-content: space-between;">
<img src="./images/445.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-将漫画人物融入你的真人照片">
</div>

**提示词：**
```
A photograph of a crowded subway train in Tokyo, hyper-realistic style. Sitting on one of the seats is a 2D black-and-white manga illustration of a tired samurai. The character is drawn with clean ink lines and cross-hatching shading. The lighting from the subway car hits the 2D drawing correctly, creating realistic highlights on the ink. The character holds a real photographic soda can, blending the 2D and 3D worlds. 4k, cinematic composition.
```

**中文提示词：**
```
一张东京拥挤地铁车厢的超写实照片。车厢里，一个疲惫的武士坐在一个二维黑白漫画人物上。人物线条干净利落，运用了交叉阴影技法。地铁车厢的灯光恰到好处地照射在二维画面上，在墨线处营造出逼真的高光。人物手中拿着一个真实的汽水罐，巧妙地将二维和三维世界融合在一起。4K分辨率，电影级构图。
```

<a id="prompt-444"></a>
## 案例 444：魔法窗口 (来源 [@azed_ai](https://x.com/azed_ai/status/1992263588900409458))

<div style="display: flex; justify-content: space-between;">
<img src="./images/444.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-魔法窗口">
</div>

**提示词：**
```
Grainy 35mm film photo from 1975. A construction worker is installing a large glass window pane on the ground floor of a brick house. Through the clear glass, instead of seeing the interior of the room, we see a view looking down from a skyscraper at night onto a neon Tokyo metropolis. The reflection in the glass, however, correctly shows the sunny suburban garden behind the photographer. Visual anomaly, subtle horror, analog texture.
```

**中文提示词：**
```
一张摄于1975年的颗粒感很强的35毫米胶片照片。一位建筑工人在一栋砖房的一楼安装一块巨大的玻璃窗。透过这块透明的玻璃，我们看到的不是房间内部，而是从摩天大楼俯瞰夜色中霓虹闪烁的东京都市景象。然而，玻璃的倒影却正确地展现了摄影师身后阳光明媚的郊区花园。视觉上的异常，一种微妙的恐怖感，以及胶片特有的质感。
```

<a id="prompt-443"></a>
## 案例 443：火星监控录像 (来源 [@azed_ai](https://x.com/azed_ai/status/1992263564896395420))

<div style="display: flex; justify-content: space-between;">
<img src="./images/443.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-火星监控录像">
</div>

**提示词：**
```
Grainy surveillance security camera footage from inside a Mars habitat airlock. High-angle top-down view. Elon Musk is sitting on a metal crate, looking up directly at the camera with a tired, manic expression. He is wearing a dirty SpaceX flight suit. The lighting is dim industrial red emergency lighting. Image quality is poor: video compression blocks, horizontal tracking lines, and noise. "REC" blinking icon and timecode in green font on screen.
```

**中文提示词：**
```
一段来自火星栖息地气闸内部的监控录像，画面模糊不清。高角度俯视视角。埃隆·马斯克坐在一个金属箱子上，抬头直视摄像头，表情疲惫而狂躁。他穿着一件脏兮兮的SpaceX飞行服。照明是昏暗的工业红色应急灯。图像质量很差：视频压缩块、水平跟踪线和噪点。屏幕上闪烁着“REC”图标，时间码以绿色字体显示。
```

<a id="prompt-442"></a>
## 案例 442：历史时代错误 (来源 [@azed_ai](https://x.com/azed_ai/status/1992263520441000304))

<div style="display: flex; justify-content: space-between;">
<img src="./images/442.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-历史时代错误">
</div>

**提示词：**
```
A candid backstage polaroid photo from 1865. Abraham Lincoln is sitting in a canvas director's chair, laughing hysterically while holding a styrofoam coffee cup. A makeup artist is powdering his nose. In the background, the Lincoln Memorial construction is just a painted plywood backdrop. Flash photography, vignetting, harsh shadows, breaking the illusion.
```

**中文提示词：**
```
一张摄于1865年的幕后宝丽来照片。亚伯拉罕·林肯坐在帆布导演椅上，手里拿着一个泡沫咖啡杯，放声大笑。一位化妆师正在给他扑粉。背景中，林肯纪念堂的建造工程只不过是一块涂了颜色的胶合板。闪光灯、暗角、生硬的阴影，打破了照片的逼真效果。
```

<a id="prompt-441"></a>
## 案例 441：自由女神像建筑蓝图 (来源 [@azed_ai](https://x.com/azed_ai/status/1992263499398205640))

<div style="display: flex; justify-content: space-between;">
<img src="./images/441.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-自由女神像建筑蓝图">
</div>

**提示词：**
```
A photorealistic wide-angle landscape shot of the Statue of Liberty with the New York City skyline and harbor in the background. Superimposed on the scene is a white, hand-drawn augmented reality technical overlay. Features include: 1. Sketchy white leader lines pointing to key details like the "Torch," "Crown Rays," and "Copper Shell" with handwritten text labels. 2. Large dimensional vertical measurement arrows indicating the total height from ground to torch. 3. Small floating wireframe icons showing wind load data and material composition. Aesthetic: Structural engineering analysis, F1 broadcast graphics style, bright outdoor daylight, architectural blueprint overlay.
```

**中文提示词：**
```
一张逼真的广角风景照，展现了自由女神像，背景是纽约市的天际线和港口。画面上叠加了一层白色手绘增强现实技术图层。其特点包括：1. 用白色线条勾勒出关键细节，例如“火炬”、“皇冠光芒”和“铜壳”，并附有手写文字标签。2. 大型垂直测量箭头指示从地面到火炬的总高度。3. 小型悬浮线框图标显示风荷载数据和材料成分。美学风格：结构工程分析、F1赛车转播画面风格、明亮的户外日光、建筑蓝图叠加。
```

<a id="prompt-440"></a>
## 案例 440：美妆检测器 (来源 [@Samann_ai](https://x.com/Samann_ai/status/1992171138730885618))

<div style="display: flex; justify-content: space-between;">
<img src="./images/440.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-美妆检测器">
</div>

**提示词：**
```
Use the provided portrait photo <YOUR PHOTO> as the base. 
Do NOT change the person’s face, expression, age, skin tone or gender. Just overlay a clean, minimal infographic on top.
Create a high-resolution vertical “FACIAL AESTHETIC REPORT” poster, studio lighting, soft beige background, premium beauty clinic style.
The subject can be MALE or FEMALE – keep them exactly as in the original photo. 
Add thin white lines and labels pointing to each area of the REAL face, with percentage scores based on global aesthetic ratios, symmetry and proportions (not changing the face):
1. Eyes:
   Label near the eyes with a line pointing to them:
   “Eyes Beauty – 0–100%”
   Example: “Eyes Beauty – 92%”
2. Cheeks:
   Label near the cheekbones:
   “Cheeks Harmony – 0–100%”
   Example: “Cheeks Harmony – 85%”
3. Lips:
   Label close to the mouth:
   “Lips Shape – 0–100%”
   Example: “Lips Shape – 88%”
4. Eyebrows:
   Label above or beside the brows:
   “Eyebrows Design – 0–100%”
   Example: “Eyebrows Design – 80%”
5. Jaw & Chin:
   Label near the jawline and chin:
   “Jaw & Chin Definition – 0–100%”
   Example: “Jaw & Chin Definition – 90%”
6. Overall Facial Symmetry:
   Label near the center of the face:
   “Facial Symmetry – 0–100%”
   Example: “Facial Symmetry – 89%”
At the bottom center of the poster, add a BIG, bold number inside a circle or rectangle:
   “OVERALL SCORE: XX%”
This is the total facial aesthetic score from 1–100%.
Design style:
– clean, medical-grade, aesthetic-clinic infographic
– modern thin sans-serif typography
– white text and lines, subtle drop shadows
– no logos, no extra graphics, no text other than the labels and scores above.
```

**中文提示词：**
```
请使用提供的肖像照片<YOUR PHOTO>作为基础。
请勿改变人物的面部特征、表情、年龄、肤色或性别。只需在其上叠加一个简洁明了的信息图即可。
制作一张高分辨率竖版“面部美学报告”海报，采用影棚灯光、柔和的米色背景，营造高级美容诊所风格。
拍摄对象可以是男性或女性——请保持与原照片完全一致。
在真实面部的每个区域添加细白线和标签，并根据整体美学比例、对称性和比例（不改变面部）给出百分比评分：
1. 眼睛：
在眼睛附近贴上标签，并用线指向眼睛：
“眼部美感 – 0–100%”
例如：“眼部美感 – 92%”
2. 脸颊：
颧骨附近的标签：
“脸颊和谐度 – 0–100%”
例如：“双颊和谐度 – 85%”
3. 嘴唇：
靠近嘴部的标签：
“唇形 – 0–100%”
例如：“唇形 – 88%”
4. 眉毛：
眉毛上方或旁边的标签：
“眉形设计 – 0–100%”
例如：“眉形设计 – 80%”
5. 下颌和下巴：
下颌线和下巴附近的标签：
“下颌和下巴轮廓 – 0–100%”
例如：“下颌和下巴轮廓 – 90%”
6. 面部整体对称性：
脸部中央附近的标签：
“面部对称性 – 0–100%”
例如：“面部对称性 – 89%”
在海报底部中央，用圆形或矩形框出一个醒目的大号数字：
“总分：XX%”
这是面部美学总评分，范围从 1% 到 100%。
设计风格：
– 洁净、医用级、美容诊所信息图
现代纤细无衬线字体
白色文字和线条，淡淡的阴影
– 除了上面的标签和分数之外，没有标志、没有额外的图形、没有文字。
```

<a id="prompt-439"></a>
## 案例 439：从图像中创建图案或分解图 (来源 [@LinusEkenstam](https://x.com/LinusEkenstam/status/1992105428873056499))

<div style="display: flex; justify-content: space-between;">
<img src="./images/439.png" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-从图像中创建图案或分解图">
</div>

**提示词：**
```
Create an image of the different patterns that makes up this shoe. lay them out individually against a neutral surface
```

**中文提示词：**
```
请将构成这双鞋的不同图案分别绘制出来，并逐一摆放在中性表面上。
```

<a id="prompt-438"></a>
## 案例 438：疯狂的程序喵 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1991529211392323991))

<div style="display: flex; justify-content: space-between;">
<img src="./images/438.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-疯狂的程序喵">
</div>

**中文提示词：**
```
3D皮克斯风格渲染。一只戴着厚眼镜的橘猫正坐在电脑前疯狂敲代码，表情崩溃。它的电脑屏幕背后贴着一张显眼的便利贴，写着：“需求改了八百遍，甲方说还是第一版好”。桌子上散落的咖啡杯上印着：“代码写得好，头发掉得早”。背景是乱糟糟的服务器机房。
```

<a id="prompt-437"></a>
## 案例 437：飞机立体剖面信息图 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1991542503850516544))

<div style="display: flex; justify-content: space-between;">
<img src="./images/437.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-飞机立体剖面信息图">
</div>

**中文提示词：**
```
创作一幅极具科技感的3D立体剖面信息图，旨在展示现代商用喷气式飞机的内部结构与运作原理。图面以高度还原和精细化的方式呈现，将飞机主体（包括机身、机翼、尾翼及重点展示的涡扇发动机）进行半拆解式的剖面处理，揭示其复杂的内在构造。关键零部件（例如：驾驶舱航电系统、客舱框架、货舱、燃油箱、机翼翼肋/翼梁、发动机压气机/涡轮、起落架机械装置等）被有序地拆解、悬浮排列，并用引导线连接至主体。每个主要部分都配有清晰、专业的英文标注，明确注明结构名称及其简洁的功能描述。整体布局追求极致的整洁与逻辑性，背景干净，风格宛如一张未来的交互式高级工程蓝图。
```

<a id="prompt-436"></a>
## 案例 436：职业生涯历程可视化为地图 (来源 [@alisa_fortin](https://x.com/alisa_fortin/status/1992049339511030009))

<div style="display: flex; justify-content: space-between;">
<img src="./images/436.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-职业生涯历程可视化为地图">
</div>

**提示词：**
```
Download your LinkedIn profile is a PDF and give it to Nano Banana Pro with a simple prompt.
```

**中文提示词：**
```
这个是提示词使用方法：
将您的 LinkedIn 个人资料下载为 PDF 文件，并附上简单的提示将其提供给 Nano Banana Pro。
```

<a id="prompt-435"></a>
## 案例 435：穿着成名的衣服拍合照在上海江滩 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1991694806201037174))

<div style="display: flex; justify-content: space-between;">
<img src="./images/435.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-穿着成名的衣服拍合照在上海江滩">
</div>

**中文提示词：**
```
创建一个超写实、极致锐利的全彩大画幅图像，在一个宽阔的电影感画面中，展示了9位知名中国影视剧角色穿着他们的成名影视剧造型的站在一起。这张图像必须看起来像是一张完美拍摄的杂志社论封面，拥有无可挑剔的布光、逼真的皮肤纹理，以及头发、毛孔、反射和织物纤维的微观细节。

总体风格与氛围

照片级真实感，8K分辨率，浅景深，柔和的自然补光 + 强烈的金色边缘光（轮廓光）。

高动态范围（HDR），经过校准的色彩分级。

肤色完美准确，展现亚洲人真实的皮肤质感。

清晰的织物细节，高级定制服装的单根线和材质纹理清晰可见。

平衡的构图，微广角镜头（35mm），中心重点构图。

极小的背景杂讯，但有足够的环境构建以营造真实感。

环境

日落时分，一个豪华的露天屋顶露台，俯瞰着现代（例如上海或香港风格的）城市天际线。

元素包括：温暖的金色日落光线包裹着人物剪影；抛光的大理石地面反射着光芒。

宽高比：16:9
```

<a id="prompt-434"></a>
## 案例 434：西游记人物坐地铁 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1991681971529908358))

<div style="display: flex; justify-content: space-between;">
<img src="./images/434.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-西游记人物坐地铁">
</div>

**中文提示词：**
```
拥挤的北京地铁车厢，但乘客全是神话人物（孙悟空、猪八戒等）。车厢连接处的滚动屏显示红色字体：“前往西天取经的乘客请注意，前方到站：高老庄”。车门玻璃上贴着警告标示：“禁止在车厢内施展法术”。
```

<a id="prompt-433"></a>
## 案例 433：地标信息图 (来源 [@TechieBySA](https://x.com/TechieBySA/status/1991820056377078179))

<div style="display: flex; justify-content: space-between;">
<img src="./images/433.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-地标信息图">
</div>

**提示词：**
```
Create an infographic image of [LANDMARK], combining a real photograph of the landmark with blueprint-style technical annotations and diagrams overlaid on the image. Include the title “[LANDMARK]” in a hand-drawn box in the corner. Add white chalk-style sketches showing key structural data, important measurements, material quantities, internal diagrams, load-flow arrows, cross-sections, floor plans, and notable architectural or engineering features. Style: blueprint aesthetic with white line drawings on the photograph, technical/architectural annotation style, educational infographic feel, with the real environment visible behind the annotations
```

**中文提示词：**
```
请制作一张[地标]的信息图，将地标的真实照片与蓝图风格的技术注释和图表叠加在图像上。在角落的手绘框中注明标题“[地标]”。添加白色粉笔风格的草图，展示关键结构数据、重要尺寸、材料用量、内部结构图、荷载流向箭头、横截面图、平面图以及显著的建筑或工程特征。风格：蓝图美学，照片上叠加白色线条图，技术/建筑注释风格，具有教育信息图的感觉，注释后方可见真实环境。
```

<a id="prompt-432"></a>
## 案例 432：电视屏幕内容复制到油画中 (来源 [@goodside](https://x.com/goodside/status/1992038915881029641))

<div style="display: flex; justify-content: space-between;">
<img src="./images/432.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-电视屏幕内容复制到油画中">
</div>

**提示词：**
```
Amateur photograph from 1998 of a middle-aged artist copying an image by hand from a computer screen to an oil painting on stretched canvas, but the image is itself the photo of the artist painting the recursive image.
```

**中文提示词：**
```
1998 年的一张业余照片，一位中年艺术家正在用手将电脑屏幕上的图像复制到绷紧的画布上的油画中，但图像本身却是艺术家绘制递归图像时的照片。
```

<a id="prompt-431"></a>
## 案例 431：权游角色拿着护照 (来源 [@ProperPrompter](https://x.com/ProperPrompter/status/1992248716443402662))

<div style="display: flex; justify-content: space-between;">
<img src="./images/431.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-权游角色拿着护照">
</div>

**提示词：**
```
change it to [an unexpected, unlikely westeros character] in a different but relevant location, with an updated passport portrait, sigil, and origin based on the character’s actual history. use real westeros locations like king’s landing instead of “kingdom of the …”
```

**中文提示词：**
```
将其改为[一位出人意料、不太可能出现在维斯特洛大陆的人物]，并设定一个与该人物相关的地点，同时更新护照照片、纹章和出身信息，使其符合该人物的真实历史。使用维斯特洛大陆的真实地点，例如君临城，而不是“……王国”。
```

<a id="prompt-430"></a>
## 案例 430：动漫与现实分割肖像 (来源 [@_MehdiSharifi_](https://x.com/_MehdiSharifi_/status/1992018970078065032))

<div style="display: flex; justify-content: space-between;">
<img src="./images/430.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-动漫与现实分割肖像">
</div>

**提示词：**
```
A cinematic 16:9 wide shot featuring a single centered headshot of Naruto Uzumaki, face split vertically in half. A distinct black line separates the two art styles down the center. [LEFT HALF]: Classic anime style, bright blonde spiky hair, blue anime eye, black whisker marks, metal headband with bold lines. [RIGHT HALF]: Gritty realism, realistic dirty blonde textured hair, piercing blue human eye, whisker marks as faint scars, weathered metal texture on the headband with rust. The headband and facial features align perfectly to form a single, unified character portrait, rendered in Unreal Engine 5.
```

**中文提示词：**
```
一张16:9的电影式宽屏镜头，画面中央是漩涡鸣人的头像，脸部被垂直分割成两半。一条清晰的黑线将两种不同的画风从中间分开。[左半边]：经典的动漫风格，亮金色的刺猬头，蓝色的动漫眼睛，黑色的胡须印记，带有粗线条的金属头箍。[右半边]：写实风格，逼真的脏金色纹理头发，锐利的蓝色眼睛，胡须印记如同淡淡的疤痕，头箍上带有锈迹的金属质感。头箍和面部特征完美契合，构成一幅浑然一体的角色肖像，使用虚幻引擎5渲染而成。
```

<a id="prompt-429"></a>
## 案例 429：长文本古诗画画 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1991474296221495538))

<div style="display: flex; justify-content: space-between;">
<img src="./images/429.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-长文本古诗画画">
</div>

**中文提示词：**
```
根据以下古诗画一幅画，并附上原文。
汉皇重色思倾国，御宇多年求不得。杨家有女初长成，养在深闺人未识。天生丽质难自弃，一朝选在君王侧。回眸一笑百媚生，六宫粉黛无颜色。
春寒赐浴华清池，温泉水滑洗凝脂。侍儿扶起娇无力，始是新承恩泽时。云鬓花颜金步摇，芙蓉帐暖度春宵。春宵苦短日高起，从此君王不早朝。
承欢侍宴无闲暇，春从春游夜专夜。后宫佳丽三千人，三千宠爱在一身。金屋妆成娇侍夜，玉楼宴罢醉和春。姊妹弟兄皆列土，可怜光彩生门户。遂令天下父母心，不重生男重生女。
骊宫高处入青云，仙乐风飘处处闻。缓歌慢舞凝丝竹，尽日君王看不足。渔阳鼙鼓动地来，惊破霓裳羽衣曲。九重城阙烟尘生，千乘万骑西南行。
翠华摇摇行复止，西出都门百余里。六军不发无奈何，宛转蛾眉马前死。花钿委地无人收，翠翘金雀玉搔头。君王掩面救不得，回看血泪相和流。
黄埃散漫风萧索，云栈萦纡登剑阁。峨嵋山下少人行，旌旗无光日色薄。蜀江水碧蜀山青，圣主朝朝暮暮情。行宫见月伤心色，夜雨闻铃肠断声。
天旋地转回龙驭，到此踌躇不能去。马嵬坡下泥土中，不见玉颜空死处。君臣相顾尽沾衣，东望都门信马归。
归来池苑皆依旧，太液芙蓉未央柳。芙蓉如面柳如眉，对此如何不泪垂？春风桃李花开日，秋雨梧桐叶落时。西宫南内多秋草，落叶满阶红不扫。
梨园弟子白发新，椒房阿监青娥老。夕殿萤飞思悄然，孤灯挑尽未成眠。迟迟钟鼓初长夜，耿耿星河欲曙天。鸳鸯瓦冷霜华重，翡翠衾寒谁与共？悠悠生死别经年，魂魄不曾来入梦。
临邛道士鸿都客，能以精诚致魂魄。为感君王辗转思，遂教方士殷勤觅。排空驭气奔如电，升天入地求之遍。上穷碧落下黄泉，两处茫茫皆不见。
忽闻海上有仙山，山在虚无缥缈间。楼阁玲珑五云起，其中绰约多仙子。中有一人字太真，雪肤花貌参差是。
金阙西厢叩玉扃，转教小玉报双成。闻道汉家天子使，九华帐里梦魂惊。揽衣推枕起徘徊，珠箔银屏迤逦开。云鬓半偏新睡觉，花冠不整下堂来。风吹仙袂飘飖举，犹似霓裳羽衣舞。玉容寂寞泪阑干，梨花一枝春带雨。
含情凝睇谢君王，一别音容两渺茫。昭阳殿里恩爱绝，蓬莱宫中日月长。回头下望人寰处，不见长安见尘雾。惟将旧物表深情，钿合金钗寄将去。钗留一股合一扇，钗擘黄金合分钿。但令心似金钿坚，天上人间会相见。
临别殷勤重寄词，词中有誓两心知。七月七日长生殿，夜半无人私语时。在天愿作比翼鸟，在地愿为连理枝。天长地久有时尽，此恨绵绵无绝期。
```

<a id="prompt-428"></a>
## 案例 428：幽默涂鸦风格 (来源 [@ZHO_ZHO_ZHO](https://x.com/ZHO_ZHO_ZHO/status/1992181199473938774))

<div style="display: flex; justify-content: space-between;">
<img src="./images/428.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-幽默涂鸦风格">
</div>

**提示词：**
```
A doodle-style [subject], naive lines, humorous shape exaggeration
```

**中文提示词：**
```
涂鸦风格的 [主体]，线条稚拙，造型夸张幽默
```

<a id="prompt-427"></a>
## 案例 427：川剧变脸解密拆解图 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1991685064569266240))

<div style="display: flex; justify-content: space-between;">
<img src="./images/427.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-川剧变脸解密拆解图">
</div>

**中文提示词：**
```
生成一张中国川剧变脸这门绝技的解密拆解图,中文字体不要变形。宽高比16:9
```

<a id="prompt-426"></a>
## 案例 426：三英飙车战吕布 (来源 [@dotey](https://x.com/dotey/status/1991790313799606651))

<div style="display: flex; justify-content: space-between;">
<img src="./images/426.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-三英飙车战吕布">
</div>

**中文提示词：**
```
绘制一幅古今混搭幽默水墨插画，主题为《三英飙车战吕布》：

画面为黄昏时分，天空云霞绚丽，大片留白凸显意境；
刘备、关羽、张飞三人乘坐一辆疾驰的红色双排座宝马轿车在尘土飞扬的古代战场急转漂移——

刘备坐在驾驶位，双手紧握方向盘，神情专注严肃；
关羽坐在副驾驶，神情悠然，手持梳子对着后视镜悠闲梳理垂胸长髯，胡须飘逸夸张；
张飞在后排表情嚣张，朝身后追赶者从窗户竖起中指，姿势夸张，喜剧效果明显；
宝马轿车的车体与轮胎透视夸张拉伸，明显体现高速飘逸带来的强烈动感；

后方远处吕布头戴雉翎金冠、身穿古代铠甲，头盔飘带飞扬，骑着一辆复古红色哈雷摩托，奋力追赶宝马车，高举方天画戟怒吼，动作与神情极为夸张，充满戏剧冲突；

整体采用传统写意水墨笔触配合淡彩晕染，颜色柔和典雅，墨色层次丰富细腻；
保留传统朱印（“寶玉印”）题款于画面适当位置，结合适度的留白处理，营造出强烈的古典幽默感与现代元素的奇妙融合效果。
```

<a id="prompt-425"></a>
## 案例 425：穿着充气羽绒服的鸟儿 (来源 [@ChillaiKalan__](https://x.com/ChillaiKalan__/status/1987864542756679921))

<div style="display: flex; justify-content: space-between;">
<img src="./images/425.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-穿着充气羽绒服的鸟儿">
</div>

**提示词：**
```
A bird wearing an inflatable [COLOR] down jacket perched on the top of a dry tree branch. the background is a blurred green grassland, in the style of real photography with natural lighting.
```

**中文提示词：**
```
一只穿着充气[彩色]羽绒服的鸟栖息在枯树枝顶上。背景是模糊的绿色草地，采用自然光拍摄的真实照片风格。
```

<a id="prompt-424"></a>
## 案例 424：一个可爱的拟人化动物 (来源 [@azed_ai](https://x.com/azed_ai/status/1987837427348799741))

<div style="display: flex; justify-content: space-between;">
<img src="./images/424.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-一个可爱的拟人化动物">
</div>

**提示词：**
```
A cute anthropomorphic [subject] in triple view: front-left, front, and back. Standing upright with a plump body, expressive face, and wearing [clothing/style]. Cartoon mascot in 2D animation style, clean bold lines, flat shading with subtle gradients, soft outlines, and a light neutral background.
```

**中文提示词：**
```
一个可爱的拟人化[对象]，以三视图呈现：左前、正面和背面。它站立着，身体圆润，表情丰富，身着[服装/风格]。卡通吉祥物，采用二维动画风格，线条简洁有力，平涂阴影带有微妙的渐变，轮廓柔和，背景为浅色中性色。
```

<a id="prompt-423"></a>
## 案例 423：一幅逼真的全身肖像 (来源 [@TechieBySA](https://x.com/TechieBySA/status/1988227330947358728))

<div style="display: flex; justify-content: space-between;">
<img src="./images/423.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-一幅逼真的全身肖像">
</div>

**提示词：**
```
A realistic full-body portrait of a [ARTIST] in their signature style, positioned next to a giant vertical smartphone displaying a Spotify interface. The phone screen shows a music player interface featuring the song “[SONG]” with signature [COLOR] accent colors at approximately 80% opacity for a premium aesthetic effect.
The artist wears their characteristic outfit and styling. Their pose is confident and editorial, embodying the mood and energy of the song. Expression matches their iconic persona.
Technical specifications:
• Plain background with subtle [COLOR] lighting accents
• Soft studio lighting with colored gels in signature [COLOR] tones
• 35mm or 50mm lens, f/2.2, ISO 100-160, shutter speed 1/125
• Sharp focus on subject and phone interface
• Editorial style consistent with premium music platform campaigns
```

**中文提示词：**
```
一幅[艺术家]的逼真全身肖像，采用其标志性风格，旁边是一部巨大的竖屏智能手机，屏幕上显示着Spotify界面。手机屏幕上的音乐播放器界面以歌曲“[歌曲]”为特色，并采用标志性的[颜色]强调色，透明度约为80%，以营造高级美感。
这位艺人身着标志性的服装，摆出自信而富有时尚感的姿势，完美诠释了歌曲的情绪和能量。他们的表情也与他们标志性的形象相得益彰。
技术规格：
• 纯色背景，带有柔和的[颜色]灯光点缀
• 采用柔和的影棚灯光，搭配标志性的[COLOR]色调彩色滤光片
• 35mm 或 50mm 镜头，f/2.2 光圈，ISO 100-160，快门速度 1/125 秒
• 清晰聚焦于主体和手机界面
• 编辑风格与高端音乐平台推广活动保持一致
```

<a id="prompt-422"></a>
## 案例 422：逼真的高清全身漫画人物 (来源 [@kingofdairyque](https://x.com/kingofdairyque/status/1988599304991490363))

<div style="display: flex; justify-content: space-between;">
<img src="./images/422.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-逼真的高清全身漫画人物">
</div>

**提示词：**
```
A realistic HD full-body caricature of [Character], with [describe exaggerated physical features — e.g., oversized head, expressive eyes, exaggerated smile, etc.], showing [emotional expression — e.g., confident smirk, wild laughter, intense focus].
They are wearing [detailed outfit description — e.g., a tailored black suit with gold accents, flowing red cape, futuristic armor, etc.] and performing an epic action — [e.g., leaping through flames, conducting an orchestra in a storm, breaking through walls, holding lightning in hand].
Set in [location — e.g., neon-lit city, royal palace, desert battlefield, futuristic lab, etc.], under [lighting style — e.g., cinematic golden hour, dramatic spotlight, cool moonlight glow].
The atmosphere feels [describe mood — e.g., heroic, intense, humorous, dramatic, chaotic].

In the style of caricature realism, emphasize [expression details — e.g., wrinkles, skin texture, exaggerated smile lines, hair flow, muscle tension], with cinematic lighting, sharp focus, hyper-realistic rendering, and 3D caricature proportions.
```

**中文提示词：**
```
逼真的高清全身漫画人物[角色]，具有[描述夸张的身体特征——例如，过大的头部、有表现力的眼睛、夸张的笑容等]，展现[情绪表达——例如，自信的微笑、狂野的笑声、专注的神情]。
他们穿着[详细的服装描述——例如，带有金色点缀的黑色定制西装、飘逸的红色披风、未来主义盔甲等]，并进行史诗般的动作——[例如，跃过火焰、在暴风雨中指挥交响乐团、破墙而入、手持闪电]。
场景设定在[例如，霓虹闪烁的城市、皇家宫殿、沙漠战场、未来实验室等]，采用[例如，电影般的黄金时段、戏剧性的聚光灯、清冷的月光]照明风格。
气氛感觉[描述情绪——例如，英雄的、激烈的、幽默的、戏剧性的、混乱的]。

以漫画写实风格，强调[表情细节——例如皱纹、皮肤纹理、夸张的笑纹、头发的飘动、肌肉的紧张感]，采用电影般的照明、清晰的焦点、超现实的渲染和 3D 漫画比例。
```

<a id="prompt-421"></a>
## 案例 421：超逼真的野生动物摄影场景 (来源 [@NanoBanana_labs](https://x.com/NanoBanana_labs/status/1988840767994126797))

<div style="display: flex; justify-content: space-between;">
<img src="./images/421.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-超逼真的野生动物摄影场景">
</div>

**提示词：**
```
Ultra-realistic wildlife photography scene, (use reference face from uploaded photo). A man wearing proper wildlife-safari clothing — light brown outdoor shirt, rugged cargo pants, and sturdy field boots. He is lying flat on the grassy ground, holding a professional DSLR camera with a large telephoto lens, focusing on wildlife. On his shoulder sits a playful lion cub looking into the distance. Golden hour natural light, African savannah background, cinematic depth of field, 8K detail, vibrant colors. Keep my face 100% accurate. HD quality DSLR.
```

**中文提示词：**
```
超逼真的野生动物摄影场景（使用上传照片中的参考人脸）。一位身着专业野生动物狩猎服的男子——浅棕色户外衬衫、结实耐用的工装裤和厚实的野外靴。他平躺在草地上，手持一台配备长焦镜头的专业单反相机，正专注于拍摄野生动物。他的肩上趴着一只活泼的小狮子，正眺望着远方。拍摄于黄金时段的自然光线下，以非洲稀树草原为背景，拥有电影级的景深，8K超高清细节，色彩鲜艳。力求100%还原我的面部特征。高清单反拍摄。
```

<a id="prompt-420"></a>
## 案例 420：居家光影三联画 (来源 [@ZHO_ZHO_ZHO](https://x.com/ZHO_ZHO_ZHO/status/1987128220030992892))

<div style="display: flex; justify-content: space-between;">
<img src="./images/420.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-居家光影三联画">
</div>

**中文提示词：**
```
整体构图与画面氛围

三张图垂直排列，呈连续性肖像摄影的视觉叙事。环境是温暖、生活化的宜家风室内空间，背景有厨房、灯饰与家居物件，带有日常感与柔和自然光的氛围。光线从侧前方照射，亮度柔和，使皮肤质感呈现出细腻、自然的光泽。

整体色调偏冷白色，营造出轻快、清新且柔软的情绪。

人物姿态与表情变化

三张图记录了同一个人物在不同瞬间的表情变化，整体呈现：
1.第一张：表情略带可爱与调皮，冲镜头飞吻。肩膀自然放松，呈正面角度。
2.第二张：人物略侧身，头微微倾斜，眼神柔软而带有轻微情绪暗示，像是从静止过渡到微笑之间的瞬间。
3.第三张：人物更加放松，露出温柔的笑容。头发自然散落，姿态轻松，呈现出自信与自在的状态。

这种 “从冷静 → 轻松 → 微笑” 的表情变化，让整组照片呈现出一种动态叙事感。

光影与肤质表现
•光线均匀柔和，无明显强阴影。
•光照角度使脸颊与鼻梁形成非常轻微的立体阴影，突显面部轮廓但不过度锐利。
•肤色自然，有细腻的反光，呈现柔焦般的质感，带一点胶片或日系滤镜效果。

服装与材质表现

人物穿着浅灰蓝色吊带上衣，肩带纤细，布料柔软且贴身，反射柔和的光泽。在光线下呈现轻柔的高光，强调曲线线条。色彩与背景保持低饱和度一致，画面显得干净。

头发自然散落，有轻微的蓬松与空气感，质地柔软，有光线透过发丝的柔和层次。

五官比例与视线表达
•眼睛略大，眼型柔和，眼尾微微延展，眼神富有交流感；
•鼻梁细直且自然；
•唇部丰润，唇色浅粉，随着表情变化在不同图中呈现不同质感；
•面部比例均衡，视觉重心集中在眼神与微笑的变化。

整体呈现一种亲和、明亮、带情绪表达的肖像风格。

情绪与风格总结

这组照片像是在记录一个人在阳光午后、刚睡醒或者刚准备开始一天时的松弛瞬间。
氛围是自然、温暖、轻松、无防备感的美。

画面没有刻意摆拍或华丽修饰，而是以光线和表情捕捉真实与柔软的瞬间。
```

<a id="prompt-419"></a>
## 案例 419：年轻女子公交车上的窗户边 (来源 [@miilesus](https://x.com/miilesus/status/1986833636193189893))

<div style="display: flex; justify-content: space-between;">
<img src="./images/419.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-年轻女子公交车上的窗户边">
</div>

**提示词：**
```
{
    "promptDetails": {
        "description": "A prompt to *create a new scene* by placing a subject (based on a reference photo) into a new atmospheric background, then overlaying a music UI.",
        "styleTags": [
            "Aesthetic Edit",
            "Cinematic",
            "Scene Compositing",
            "Glassmorphism"
        ]
    },
    "subjectReference": {
        "source": "[UPLOADED IMAGE]",
        "description": "Use this image *only* as a reference for the subject's face, hair, and appearance. Do *not* use its original background."
    },
    "scene": {
        "background": {
            "setting": "the window on the bus is sad, troubled, sorrowful",
            "details": "This is the *new* environment the subject must be placed into, completely replacing the original background."
        },
        "subject": {
            "description": "The young man whose appearance is defined by the `[UPLOADED IMAGE]`.",
            "pose": "his head resting gently against the bus window",
            "focus": "Subject is in sharp focus, fully integrated into the new background."
        }
    },
    "overlayObject": {
        "type": "Floating Glassmorphism Music Player UI",
        "relationshipToEnvironment": "the UI is **perfectly flush and physically attached** to the same plane as the bus window glass, **not floating**, not screen-space.",
        "transform": "the UI matches the *exact same rotation and perspective* as the window surface. If the window tilts, the UI tilts identically with correct foreshortening.",
        "surfaceInteraction": "subtle, realistic reflection and slight refraction through glass, extremely thin glassmorphism panel integrated *into* the window surface.",
        "components": {
            "songTitle": "Wrecked",
            "artistName": "Imagine Dragons",
            "position": "mounted on the bus window glass at the middle-left region of the frame (not floating)."
        }
    },
    "technicalStyle": {
        "aspectRatio": "1:1",
        "photographyStyle": "Cinematic Portrait, Realistic Compositing",
        "camera": {
            "shotType": "Medium Shot or Medium Close-Up",
            "angle": "Eye-level",
            "depthOfField": "Shallow, to blur the new background (bokeh)."
        },
        "lighting": {
            "type": "Soft, Ambient, Moody",
            "description": "Lighting on the subject *must match* the lighting of the new background setting (e.g., rainy light through bus window, soft shadow gradients)."
        },
        "color": {
            "palette": "Muted, cinematic color grading."
        }
    },
    "audioDevice": {
        "type": "subtle in-ear wireless earbuds",
        "fit": "naturally seated in both ears with correct realistic skin contact",
        "color": "matte black or dark neutral tone",
        "consistencyNote": "no cable, no bulky gaming headset"
    },
    "moodReinforcement": "earbuds imply the sad music 'Wrecked - Imagine Dragons' is what the subject is listening to."
}
```

**中文提示词：**
```
{
"promptDetails": {
“描述”：“提示用户通过将主体（基于参考照片）放置在新的氛围背景中，然后叠加音乐用户界面来*创建新场景*。”
"styleTags": [
“美学编辑”
“电影感”，
“场景合成”
“玻璃态”
]
},
"subjectReference": {
“来源”：[上传的图片]，
“描述”：“请仅将此图片用作人物面部、头发和外貌的参考。请勿使用其原始背景。”
},
“场景”： {
“背景”： {
“场景”：“公交车上的窗户是悲伤的、忧郁的、哀伤的”，
“细节”：“这是主体必须置身的*全新*环境，完全替换原有背景。”
},
“主题”： {
描述：这位年轻人的外貌特征由“[上传的图片]”定义。
“姿势”：“他的头轻轻地靠在公交车窗上”，
“焦点”：“主体清晰对焦，完全融入新的背景中。”
}
},
"overlayObject": {
"type": "浮动玻璃变形音乐播放器用户界面",
“与环境的关系”：“用户界面**与公交车窗玻璃完全齐平，并且物理上**附着在**同一平面上， ** ）不是悬浮的，也不是屏幕空间的。”
“变换”：“用户界面与窗口表面*完全一致地旋转和透视*。如果窗口倾斜，用户界面也会随之倾斜，并具有正确的透视缩短效果。”
“表面交互”：“透过玻璃产生微妙、逼真的反射和轻微折射，极薄的玻璃变形面板集成到窗户表面*中*。”
“成分”： {
歌曲标题： 'Wrecked'
"artistName": "Imagine Dragons",
“位置”：“安装在公交车车窗玻璃上，位于车窗框架的左侧中间位置（非悬浮式）。”
}
},
"technicalStyle": {
“aspectRatio”: “1:1”
“摄影风格”：“电影人像，逼真合成”
“相机”： {
"shotType": "Medium Shot or Medium Close Up",
“角度”：“视线水平”，
"depthOfField": "浅景深，使新背景模糊（散景）"
},
“灯光”： {
“类型”：“柔和、氛围、情绪化”，
“描述”：“拍摄对象的照明必须与新背景设置的照明相匹配（例如，透过公交车窗的雨光、柔和的阴影渐变）。”
},
“颜色”： {
“调色板”：“柔和的电影级色彩分级。”
}
},
"audioDevice": {
“类型”：“低调的入耳式无线耳机”，
“贴合度”：“自然地佩戴在双耳中，与皮肤有正确的逼真接触”，
颜色：哑光黑或深色中性色调，
“一致性说明”： “无线缆，无笨重的游戏耳机”
},
“moodReinforcement”：“耳机暗示着受试者正在听悲伤的音乐‘Wrecked - Imagine Dragons’。”
}
```

<a id="prompt-418"></a>
## 案例 418：将电影海报重新设计成黏土动画风格 (来源 [@TechieBySA](https://x.com/TechieBySA/status/1987128144470679641))

<div style="display: flex; justify-content: space-between;">
<img src="./images/418.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-将电影海报重新设计成黏土动画风格">
</div>

**提示词：**
```
Restyle the reference movie poster in claymation style. Keep the original layout, composition, and lighting exactly as in the reference. Transform all characters, objects, and elements into handcrafted clay models with visible fingerprints, soft edges, and subtle imperfections. Preserve the background and colors, but give everything a realistic clay texture and dimensional feel, as if it were photographed from a stop-motion clay animation set
```

**中文提示词：**
```
将参考电影海报重新设计成黏土动画风格。保持原图的布局、构图和光线完全一致。将所有角色、物体和元素转化为手工制作的黏土模型，保留清晰可见的指纹、柔和的边缘和细微的瑕疵。保留背景和色彩，但赋予所有元素逼真的黏土质感和立体感，仿佛是从定格动画片场拍摄的一样。
```

<a id="prompt-417"></a>
## 案例 417：一幅超写实的高品质特写肖像 (来源 [@ZaraIrahh](https://x.com/ZaraIrahh/status/1987684052028297552))

<div style="display: flex; justify-content: space-between;">
<img src="./images/417.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-一幅超写实的高品质特写肖像">
</div>

**提示词：**
```
Using the exact facial features from the attached image 
Create an hyperrealistic and high quality close-up portrait of a styling young woman,  her dark thick long hair styled in twin high artistic braids that falls over her ears, few loose trendils clipped using a different style matte brown statement hair clips ,with few loose strands falls across and frames her face, wearing a drawstring halter top, a thick-frame  brown cat-eye eyeglasses slightly lowered, soft hazel nut eyes, glossy red pouty lips, peached dewy blush and soft warm tone eyeshadows with a little bit shimmers and glitters on her cheeks and under her eyes, artistic brown eyeliner, natural dewy skin, head slightly tilted, relaxed and confident gaze hand-on-cheek pose, minimalistic background, warm beige and brown tones, bright and harsh illumination coming from the camera highlighting the texture of her figure, soft studio background lighting, K-fashion editorial aesthetic, Seoul street style influence, hyper-detailed face texture, cinematic tone, 85mm lens photography, Vogue Korea vibe, stylish and modern mood --ar 2:3 --v 6 --style raw --q 2 --s 250
```

**中文提示词：**
```
使用附图中的精确面部特征
创作一幅超写实的高品质特写肖像，描绘一位正在打扮的年轻女性。她浓密乌黑的长发被编成两条高高的艺术辫子，垂落在耳边，几缕碎发用不同风格的哑光棕色发夹别住，几缕散落的发丝垂在脸颊两侧，勾勒出她精致的脸庞。她身穿一件抽绳露背上衣，戴着一副略微下垂的棕色粗框猫眼眼镜，拥有一双柔和的榛子色眼睛，涂着光泽饱满的红唇，腮红是水润的蜜桃色，眼影是柔和的暖色调，带有少许珠光和亮片，点缀在脸颊和眼下。她画着艺术感十足的棕色眼线，肌肤呈现自然水润的状态。她微微侧着头，眼神放松自信，一只手轻抚脸颊。背景简洁，以温暖的米色和棕色为主色调。相机发出明亮而强烈的光线，突显了她的身材纹理。柔和的影棚背景灯光，展现出韩式时尚大片的风格，融合了首尔街头风的元素，并着重刻画了面部细节，营造出电影般的质感。这幅作品使用85mm镜头拍摄，灵感来自韩国版《Vogue》。氛围，时尚现代的格调 --ar 2:3 --v 6 --style raw --q 2 --s 250
```

<a id="prompt-416"></a>
## 案例 416：夸张的高清全身漫画 (来源 [@CharaspowerAI](https://x.com/CharaspowerAI/status/1987558316973724116))

<div style="display: flex; justify-content: space-between;">
<img src="./images/416.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-夸张的高清全身漫画">
</div>

**提示词：**
```
A realistic HD full body caricature of [subject: name], [describe exaggerated physical features, emotional expression]. [outfit in detail], and [mention an epic  action].  location, lighting, atmosphere, mood]. In the style of caricature realism, [highlight expression, texture, pose or object details], cinematic lighting, sharp focus, hyper-realistic rendering, caricature.
```

**中文提示词：**
```
一幅逼真的高清全身漫画，描绘[人物：姓名]，[描述夸张的体貌特征、情绪表达]，[详细描述服装]，[提及一个精彩的动作]，[地点、光线、氛围、情绪]。风格为漫画写实主义，[突出表情、纹理、姿势或物体细节]，电影级光线，清晰对焦，超写实渲染，漫画风格。
```

<a id="prompt-415"></a>
## 案例 415：九个不同服装姿势和表情的Q版贴纸 (来源 [@ShreyaYadav___](https://x.com/ShreyaYadav___/status/1985738257708302430))

<div style="display: flex; justify-content: space-between;">
<img src="./images/415.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-九个不同服装姿势和表情的Q版贴纸">
</div>

**提示词：**
```
Create a 3D kawaii 10:16 canvas featuring nine chibi-style stickers in various outfits, poses, and expressions. Use the attached image for reference. Each sticker has a white border and includes a speech bubble with phrases like "Goodmorning", "Lunch kana", "Huh", "Hugs", "Thank you", "Goodnight", "You're the best" "miss you" "mwah 😙" "good job" and "Ingat ka". Set on a soft white-to-pastel blue gradient background for a fun, positive vibe.
```

**中文提示词：**
```
制作一个 10:16 的 3D 可爱画布，包含九个不同服装、姿势和表情的 Q 版贴纸。请参考附图。每个贴纸都有白色边框，并包含一个对话框，上面写着“早上好”、“午餐时间”、“嗯”、“抱抱”、“谢谢”、“晚安”、“你最棒了”、“想你”、“么😙 ”、“做得好”和“Ingat ka”（注意安全）。背景采用柔和的白色到淡蓝色渐变，营造轻松愉快的氛围。
```

<a id="prompt-414"></a>
## 案例 414：干净柔和的米色工作室中的3x3照片 (来源 [@miilesus](https://x.com/miilesus/status/1981800648036561146))

<div style="display: flex; justify-content: space-between;">
<img src="./images/414.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-干净柔和的米色工作室中的3x3照片">
</div>

**提示词：**
```
Editorial 3x3 photo grid in a clean soft beige studio. Character (matches reference 100%) wearing lightweight dark navy shirt, ivory trousers, barefoot for raw simplicity. Lighting: large diffused key light directly front-right, silver reflector left, subtle rim from top. Shots to include: 1. extreme close-up of lips + cheekbone with blurred hand partially covering (85mm, f/1.8, razor-thin DOF); 2. tight crop on eyes looking into lens with reflection of light strip visible (85mm, f/2.0); 3. black & white close portrait resting chin on fist, face filling frame (50mm, f/2.2); 4. over-shoulder shot, blurred foreground fabric curtain framing half face (85mm, f/2.0); 5. very close frontal with hands overlapping face, light streak across eyes (50mm, f/2.5); 6. tight angled portrait showing hair falling into eyes, soft-focus background (85mm, f/2.2); 7. crop of hands touching jawline, eyes cropped out (50mm, f/3.2, detail-focused); 8. half-body seated sideways on low cube, head turned sharply away, blurred foreground (35mm, f/ 4.5); 9. intense close-up of profile with single tear-like water droplet, cinematic light slice across (85mm, f/ 1.9). Angles: mostly tight headshots with slight high/low tilts, maintaining variation. Capture RAW, professional muted grade, smooth tonal contrast, subtle cinematic grain. Mood: intimate, introspective, character-led editorial minimalism with delicate use of fabric as prop.
```

**中文提示词：**
```
干净柔和的米色工作室中的编辑 3x3 照片网格。人物（与参考 100 %)相匹配）身穿轻薄的深蓝色海军蓝衬衫、象牙色裤子，赤脚，呈现原始简约风​​格。灯光：右前方直接有大型漫射主光，左侧有银色反光板，顶部有微妙的边缘。拍摄内容包括：1. 嘴唇 + 颧骨的极端特写，手模糊部分遮盖（85mm，f/1.8，极薄景深）；2. 紧密裁剪眼睛，看着镜头，可见光带反射（85mm，f/2。 0) ；3. 黑白近距离肖像，下巴靠在拳头上，脸部充满画面（50mm，f/2.2）；4. 过肩镜头，模糊的前景织物窗帘框住半张脸（85mm，f/2。 0) ；5. 非常近的正面，双手重叠在脸上，光线穿过眼睛（50mm，f/2.5）；6. 紧密角度的肖像，显示头发落入眼睛，柔焦背景（85mm，f/2.2）；7. 裁剪至触及下颌线的手，眼睛被裁剪掉（50mm，f/3.2，注重细节）；8. 半身侧坐在矮柜上，头部急剧转向别处，前景模糊（35mm，f/4.5）；9. 侧面特写，一滴泪珠状水滴，电影般的光片划过（85mm，f/1.9）。角度：大多为近距离头像，略微高/低倾斜，保持变化。拍摄 RAW 格式，专业柔和等级，平滑的色调对比度，微妙的电影颗粒感。氛围：亲密、内省、以人物为主导的编辑极简主义，巧妙地使用织物作为道具。
```

<a id="prompt-413"></a>
## 案例 413：铅笔风格的大头漫画 (来源 [@ShreyaYadav___](https://x.com/ShreyaYadav___/status/1984828527687188684))

<div style="display: flex; justify-content: space-between;">
<img src="./images/413.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-铅笔风格的大头漫画">
</div>

**提示词：**
```
{
"image_edit": {

"subject": "uploaded_image",

"Goal":"proportional composition of The whole body bottom to head is a caricature with the face and head exaggerated in the extremely shape of the eyes, nose, lips.",

"style": "textured paper", "refine details, retain original charcoal structure and strong brushes pencil, aesthetic composition and expression, pure black, brushes stroke"

{"style": "pencil brush stroke", "no types text", "position":" stylized near shoulder, aesthetic replacement, no right_bottom"

},

{

"output":

"a big head caricature." Ensure to create an image with a noticeably exaggerated head size for the caricature effect you desire, while retaining the charcoal and brush stroke style"

}

}
```

**中文提示词：**
```
{
"image_edit": {

主题：上传的图片，

“目标”：“从下到头，全身比例构成一幅漫画，脸部和头部被极度夸张，眼睛、鼻子、嘴唇的形状都极度突出。”

“风格”：“纹理纸”，“精细刻画细节，保留原有炭笔结构和强劲的笔触，美学构图和表现力，纯黑，笔触”

{"style": "铅笔笔触", "无文字", "position":"肩部附近风格化，美学替换，无右下角"

},

{

“输出”：

“一幅大头漫画”。为了达到你想要的漫画效果，务必创作一幅头部明显夸张的图像，同时保留炭笔和笔触风格。

}

}
```

<a id="prompt-412"></a>
## 案例 412：3D漫画肖像 (来源 [@ShreyaYadav___](https://x.com/ShreyaYadav___/status/1984518065619681365))

<div style="display: flex; justify-content: space-between;">
<img src="./images/412.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-3D漫画肖像">
</div>

**提示词：**
```
3D caricature portrait of [SUBJECT], Pixar/DreamWorks style — expressive eyes, slightly oversized head, exaggerated ears & nose, realistic skin shading with soft subsurface scattering, detailed hair, gentle warm smile, smooth polished materials, subtle fabric texture, soft ambient lighting, warm reddish-orange gradient background — balanced realism and stylized charm.
```

**中文提示词：**
```
[SUBJECT]的3D漫画肖像，皮克斯/梦工厂风格——富有表现力的眼睛，略微过大的头部，夸张的耳朵和鼻子，逼真的皮肤阴影和柔和的次表面散射，细致的头发，温柔温暖的微笑，光滑的抛光材质，微妙的织物纹理，柔和的环境光，温暖的红橙色渐变背景——平衡的现实主义和风格化的魅力。
```

<a id="prompt-411"></a>
## 案例 411：一位女子从智能手机屏幕中走出 (来源 [@ShreyaYadav___](https://x.com/ShreyaYadav___/status/1984477243968770374))

<div style="display: flex; justify-content: space-between;">
<img src="./images/411.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-一位女子从智能手机屏幕中走出">
</div>

**提示词：**
```
A hyperrealistic cinematic photo of a woman stepping out of a smartphone screen showing the Twitter profile [Shreyayadav___]. She’s captured mid-step, confidently emerging from the digital world into reality as the phone glass shatters with glowing fragments. Floating social media icons (hearts, comments, follows) surround her. She wears trendy streetwear with lifelike fabric and lighting reflections. The minimalist gradient studio background adds 3D depth.
```

**中文提示词：**
```
一张超写实的电影感照片，一位女子从智能手机屏幕中走出，屏幕上显示着她的推特个人资料[Shreyayadav ___ ]。照片捕捉到她迈步的瞬间，自信地从数字世界走向现实世界，手机屏幕破碎，碎片闪耀着光芒。漂浮的社交媒体图标（爱心、评论、关注）环绕着她。她身着时尚街头服饰，面料逼真，光线反射效果极佳。极简的渐变摄影棚背景增添了立体感。
```

<a id="prompt-410"></a>
## 案例 410：被几个动物环绕的自拍风格照片 (来源 [@HustleXR](https://x.com/HustleXR/status/1984465896895889891))

<div style="display: flex; justify-content: space-between;">
<img src="./images/410.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-被几个动物环绕的自拍风格照片">
</div>

**提示词：**
```
A selfie-style shot of a smiling young man with dark hair and a beard, wearing a red and black plaid shirt. He is surrounded by several animated movie monsters, including Count Dracula, a mummy, a large blue furry monster resembling Sulley from Monsters Inc., a werewolf, and a smaller blue vampire bat character. They are all smiling and posing for the selfie. The background is a grand hall with stained-glass windows and chandeliers, resembling a gothic castle or church interior. The lighting is warm and inviting.
```

**中文提示词：**
```
一张自拍风格的照片，照片中一位笑容灿烂的年轻男子，留着深色头发和胡须，身穿红黑格子衬衫。他被几个动画电影中的怪物环绕，包括德古拉伯爵、木乃伊、一只体型庞大的蓝色毛茸茸怪物（类似《怪兽公司》里的苏利文）、狼人，以及一只体型较小的蓝色吸血蝙蝠。它们都面带微笑，摆着姿势自拍。背景是一个宏伟的大厅，配有彩色玻璃窗和枝形吊灯，宛如哥特式城堡或教堂内部。灯光温暖而温馨。
```

<a id="prompt-409"></a>
## 案例 409：大型胶囊形容器的品牌3D渲染图 (来源 [@TechieBySA](https://x.com/TechieBySA/status/1984265548251980140))

<div style="display: flex; justify-content: space-between;">
<img src="./images/409.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-大型胶囊形容器的品牌3D渲染图">
</div>

**提示词：**
```
Create a hyper-realistic 3D render of a large capsule-shaped container. The top half is solid and glossy in the brand’s signature color, featuring the official [BRAND] logo prominently. The bottom half is transparent, revealing multiple miniature famous products of this brand, [PRODUCT], neatly packed inside. Set against a dark background with cinematic lighting and soft reflections to create a premium, surreal advertising aesthetic. Ultra-detailed, professional product render style. 1080x1080 dimension
```

**中文提示词：**
```
制作一个超逼真的大型胶囊形容器的3D渲染图。上半部分为品牌标志性颜色的实心亮面材质，并醒目地印有[品牌]官方标识。下半部分为透明材质，展现出该品牌众多知名产品的微缩模型[产品]，整齐地包装在内。以深色背景搭配电影级灯光和柔和的反射效果，营造出高端超现实的广告美感。采用超精细的专业产品渲染风格。尺寸为1080x1080。
```

<a id="prompt-408"></a>
## 案例 408：角色变成3D收藏级Q版人偶 (来源 [@aleenaamiir](https://x.com/aleenaamiir/status/1984585442487124448))

<div style="display: flex; justify-content: space-between;">
<img src="./images/408.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-角色变成3D收藏级Q版人偶">
</div>

**提示词：**
```
3D collectible chibi-style figure of [insert celebrity or character name], ultra-detailed, stylized proportions (large head, small body), expressive face, cinematic lighting, soft shadows, Pixar-quality realism, glossy vinyl toy texture, standing pose, high detail clothing, character-accurate outfit, professional product photography, rendered in Unreal Engine 5, on a minimal studio background, toy display aesthetic, 8K ultra realistic
```

**中文提示词：**
```
3D 收藏级 Q 版人偶，原型为[插入名人或角色名称]，细节丰富，比例协调（大头小身），面部表情生动，采用电影级光影效果，阴影柔和，呈现皮克斯级别的逼真度，触感光滑如乙烯基玩具，采用站姿，服装细节丰富，还原角色造型，专业产品摄影，使用虚幻引擎 5 渲染，背景简洁，呈现玩具展示美感，8K 超高清画质。
```

<a id="prompt-407"></a>
## 案例 407：将明星变成趣味十足的3D卡通肖像 (来源 [@aleenaamiir](https://x.com/aleenaamiir/status/1985525539445297574))

<div style="display: flex; justify-content: space-between;">
<img src="./images/407.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-将明星变成趣味十足的3D卡通肖像">
</div>

**提示词：**
```
Full-body 3D caricature of [Character Name] in Pixar/DreamWorks style, featuring expressive large eyes, slightly oversized head, and subtly exaggerated facial features. Realistic skin with soft subsurface scattering, detailed hair, and a gentle warm smile. Smooth polished surfaces with subtle fabric texture on clothing. Dynamic pose showing personality, with full body visible and balanced proportions. Soft ambient lighting, warm reddish-orange gradient background. Cinematic quality, high detail, vibrant yet natural colors, stylized charm with balanced realism.
```

**中文提示词：**
```
以皮克斯/梦工厂风格绘制的[角色名称]全身3D卡通形象，拥有富有表现力的大眼睛、略微夸张的头部和略微夸张的面部特征。逼真的肌肤呈现出柔和的次表面散射效果，头发细节丰富，笑容温暖而亲切。光滑的表面处理，服装上的织物纹理细腻。动态的姿态展现出鲜明的个性，全身清晰可见，比例均衡。柔和的环境光，温暖的红橙色渐变背景。电影级的品质，高度的细节刻画，鲜艳而自然的色彩，风格化的魅力与恰到好处的写实感完美融合。
```

<a id="prompt-406"></a>
## 案例 406：一幅超写实全身肖像与路飞互动 (来源 [@ecommartinez](https://x.com/ecommartinez/status/1985805353901310327))

<div style="display: flex; justify-content: space-between;">
<img src="./images/406.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-一幅超写实全身肖像与路飞互动">
</div>

**提示词：**
```
Ultra-realistic full-body portrait of the attached image. The person is interacting with Monkey D. Luffy in a front-facing pose, both standing side by side, smiling directly at the camera. Their body language is friendly and natural — Luffy’s arm rests around the person’s shoulder, while both share a joyful, relaxed laugh. Studio or neutral environment with soft cinematic lighting and a warm beige-to-burgundy gradient background. The person wears casual modern clothes: beige T-shirt, navy shorts, and white sneakers, while Luffy retains his original look — straw hat, red vest, blue shorts, yellow sash, and sandals. Expression and mood: happy, authentic, full of energy and camaraderie, captured in photorealistic textures, realistic lighting, and cinematic composition with high-fashion editorial quality.
```

**中文提示词：**
```
附图为一幅超写实全身肖像。图中人物与蒙奇·D·路飞正面互动，两人并肩而立，面带微笑地直视镜头。他们的肢体语言友好自然——路飞的手臂搭在人物的肩上，两人开怀大笑，轻松自在。拍摄环境为影棚或中性光线，柔和的电影级灯光，背景采用温暖的米色至酒红色渐变。人物身着休闲现代服饰：米色T恤、藏蓝色短裤和白色运动鞋，而路飞则保持着他标志性的造型——草帽、红色马甲、蓝色短裤、黄色腰带和凉鞋。人物的表情和情绪：快乐、真实、充满活力和友谊，以逼真的纹理、真实的灯光和电影级的构图捕捉，呈现出高级时尚杂志的品质。
```

<a id="prompt-405"></a>
## 案例 405：超逼真全身肖像与角色互动 (来源 [@iUllr](https://x.com/iUllr/status/1985631195724431694))

<div style="display: flex; justify-content: space-between;">
<img src="./images/405.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-超逼真全身肖像与角色互动">
</div>

**提示词：**
```
Ultra-realistic full-body portrait of the attached image.
The person is interacting with {fictional character} in a {pose/interaction type}.  
Studio or neutral environment, soft cinematic lighting, {optional color palette}.  
The person wears {clothing style and colors}, The fictional character retains its original appearance, including skin color, clothing, and signature features.  
Expression and mood: {emotional tone}, captured in photorealistic textures, realistic lighting, cinematic composition, high fashion editorial quality.
```

**中文提示词：**
```
附图的超逼真全身肖像。
该人正在以{姿势/互动类型}与{虚构角色}互动。
摄影棚或中性环境，柔和的电影灯光，{可选调色板}。
该人物穿着{服装款式和颜色}，虚构人物保留其原有的外貌，包括肤色、服装和标志性特征。
表情和mood: {情感基调}，以逼真的纹理、逼真的光照、电影般的构图、高级时尚编辑品质捕捉。
```

<a id="prompt-404"></a>
## 案例 404：小巧可爱的等距视角 (来源 [@AmirMushich](https://x.com/AmirMushich/status/1985740675871056194))

<div style="display: flex; justify-content: space-between;">
<img src="./images/404.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-小巧可爱的等距视角">
</div>

**提示词：**
```
Tiny cute isometric [CHARACTER or PRODUCT], soft lighting, soft pastel colors, 3d icon clay render, substance 3d, pastel background
```

**中文提示词：**
```
小巧可爱的等距视角[角色或产品]，柔和的光线，柔和的粉彩色调，3D图标粘土渲染，Substance 3D，粉彩背景
```

<a id="prompt-403"></a>
## 案例 403：一幅超写实细节丰富的水下特写肖像 (来源 [@saniaspeaks_](https://x.com/saniaspeaks_/status/1985960595422867603))

<div style="display: flex; justify-content: space-between;">
<img src="./images/403.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-一幅超写实细节丰富的水下特写肖像">
</div>

**提示词：**
```
{
  "prompt": {
    "description": "Hyper-realistic, ultra-detailed close-up portrait of the left half of a young woman’s face submerged in water. One eye is in sharp focus. Light rays create caustic reflections and fluid patterns across her skin. Tiny suspended water droplets and bubbles add depth.",
    "details": {
      "subject": "Young woman's face, fair skin, focused eye (left)",
      "pose": "Submerged in water",
      "lighting": "Cinematic soft shadows with crisp highlights, light rays creating caustic patterns",
      "attire": "Not visible, implied underwater setting",
      "hair": "Dark hair visible on the right side, extending into the water",
      "expression": "Calm and serene, with an intense gaze from the focused eye",
      "mood": "Surreal, dreamlike, ethereal, and serene"
    }
  },
  "image_settings": {
    "size": "original",
    "quantity": 1,
    "style": "Underwater macro portrait photography",
    "composition": "Close-up, with a shallow depth of field and an underwater macro perspective, emphasizing textures and light play. Cropped to show only the left half of the face.",
    "aspect_ratio": "3:4"
  },
  "output_format": {
    "type": "image",
    "expected_result": "A visually striking and highly detailed underwater portrait, showcasing the interplay of light, water, and skin textures."
  }
}
```

**中文提示词：**
```
{
“迅速的”： {
描述：一幅超写实、细节丰富的特写肖像，描绘了一位年轻女子浸在水中的左半边脸。她的一只眼睛清晰可见。光线在她皮肤上形成折射和流动的纹理。悬浮的细小水滴和气泡增添了画面的深度。
“细节”： {
“主题”：“年轻女子的脸，白皙的皮肤，专注的眼神（左）”
“姿势”：“浸在水中”，
“照明”：“电影般的柔和阴影，清晰的高光，光线营造出焦散图案”，
“服装”：“不可见，暗示水下环境”，
“头发”：“右侧可见深色头发，延伸到水中”，
“表情”：“平静而安详，目光专注而锐利”，
“氛围”：“超现实的、梦幻的、空灵的、宁静的”
}
},
"image_settings": {
"尺寸": "原尺寸",
“数量”：1，
“风格”：“水下微距人像摄影”，
“构图”：“特写镜头，采用浅景深和水下微距视角，强调纹理和光影效果。裁剪后仅显示脸部的左半部分。”
"aspect_ratio": "3:4"
},
"output_format": {
"type": "image",
"预期结果": "一幅视觉效果惊艳、细节丰富的水下肖像，展现了光线、水和皮肤纹理之间的相互作用。"
}
}
```

<a id="prompt-402"></a>
## 案例 402：一位中年男子数字漫画 (来源 [@ShreyaYadav___](https://x.com/ShreyaYadav___/status/1985908915427758305))

<div style="display: flex; justify-content: space-between;">
<img src="./images/402.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-一位中年男子数字漫画">
</div>

**提示词：**
```
Create a realistic digital caricature painting of a middle-aged man (attached photo) with a slightly oversized head, exuding charm and quiet confidence. He is dressed in a modern, stylish bomber jacket made of dark olive nylon with subtle reflective highlights that give it a sleek and fashionable look. Underneath, he wears a warm-toned flannel shirt slightly visible at the collar and cuffs, paired with khaki cargo pants and black sneakersthat ground the outfit with a casual yet confident energy. Completing his look, he wears a brown flat cap tilted slightly forward — a small detail that adds personality and flair.

The man is portrayed in a mid-shot, adjusting his glasses with one hand while gazing directly at the viewer with a self-assured and composed expression. His head is slightly larger than normal, emphasizing his thoughtful character and giving the image a light caricature charm without losing realism.The facial expression radiates intelligence, humor, and approachability.

The lighting is warm and soft, like that of a late afternoon sun filtering through a studio setup. Smooth gradual shadows enhance the contours of his face, while subtle highlights accentuate the texture of his bomber jacket and the reflection in his glasses. His skin tones glow naturally under the warm light, creating a pleasant sense of depth and realism.The background is a gradient of warm brown and beige hues, blending smoothly from light to dark. This background is simple yet elegant, allowing the subject to stand out while maintaining a professional, editorial quality.

The art style should combine semi-realistic digital painting with the texture of oil brushstrokes, delivering a balanced fusion of realism and stylized charm.Clean outlines, smooth blending, and controlled highlights give the impression of a modern portrait illustration—detailed, expressive, and visually captivating.
```

**中文提示词：**
```
请创作一幅逼真的数字漫画，描绘一位中年男子（附图），他头部略大，散发着魅力和沉稳的自信。他身着一件现代时尚的深橄榄色尼龙飞行员夹克，夹克上点缀着低调的反光元素，更添几分精致格调。夹克内搭一件暖色调法兰绒衬衫，领口和袖口隐约可见，下身搭配卡其色工装裤和黑色运动鞋，整体造型休闲又不失自信。最后，他头戴一顶棕色鸭舌帽，帽檐略微前倾——这个小细节为他增添了个性和魅力。

画面采用中景拍摄，男子一手扶着眼镜，一手直视镜头，神态自信沉稳。他的头部略大于常人，突显了他深思熟虑的性格，赋予画面一种略带漫画式的魅力，却又不失写实感。面部表情散发着智慧、幽默和亲切的气息。

光线温暖柔和，如同午后阳光透过摄影棚洒下的光芒。平滑的阴影勾勒出他面部的轮廓，而微妙的高光则突显了他飞行员夹克的质感和眼镜上的反光。在暖光的映衬下，他的肤色自然透亮，营造出令人愉悦的立体感和真实感。背景由温暖的棕色和米色渐变而成，由浅至深自然过渡。这种背景简洁而优雅，既突出了拍摄对象，又保持了专业、时尚的质感。

艺术风格应结合半写实的数字绘画和油画笔触的质感，呈现出写实与风格化魅力的平衡融合。清晰的轮廓、流畅的过渡和可控的高光，给人以现代肖像插画的印象——细节丰富、富有表现力且引人入胜。
```

<a id="prompt-401"></a>
## 案例 401：年轻女子身穿深色连帽衫的特写肖像 (来源 [@saniaspeaks_](https://x.com/saniaspeaks_/status/1986010537310961720))

<div style="display: flex; justify-content: space-between;">
<img src="./images/401.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-年轻女子身穿深色连帽衫的特写肖像">
</div>

**提示词：**
```
{
  "prompt": {
    "description": "A close-up portrait of a young woman in a dark hooded sweatshirt, with green digital code reflected on her face from a computer screen, set in a dark, urban environment with blurred city lights in the background.",
    "details": {
      "subject": "Young woman with a serious expression, olive skin, and visible facial features despite the reflections.",
      "pose": "Facing directly towards the viewer, looking intently at the camera.",
      "lighting": "Dramatic, low-key lighting, primarily from the green glow of a computer monitor reflecting on her face and some blurred, warm streetlights in the distant background.",
      "attire": "Dark, large hooded sweatshirt, with the hood pulled up to cover her head, creating a sense of anonymity.",
      "hair": "Long, dark hair partially visible beneath the hood.",
      "expression": "Intense, focused, and slightly wary gaze, conveying a sense of concentration and maybe isolation.",
      "mood": "Mysterious, intense, technologically-focused, reminiscent of a hacker or surveillance theme."
    }
  },
  "image_settings": {
    "size": "1024x1024",
    "quantity": 1,
    "style": "Cinematic, dark and moody, high contrast with strong shadows and highlights from the screen, grainy texture.",
    "composition": "Medium close-up, with the computer screen visible in the foreground (partially obscured) and blurred streetlights in the background through a window."
  },
  "output_format": {
    "type": "image",
    "expected_result": "A powerful and atmospheric image conveying themes of technology, surveillance, and urban mystery."
  }
}
```

**中文提示词：**
```
{
“迅速的”： {
描述：一位年轻女子身穿深色连帽衫的特写肖像，电脑屏幕上的绿色数字代码反射在她的脸上，背景是昏暗的城市灯光，以及模糊的城市灯光。
“细节”： {
“主体”：“一位表情严肃、肤色呈橄榄色、面部特征清晰可见的年轻女子，尽管有反光，但她的面部特征依然清晰可见。”
“姿势”：“正对观众，目光专注地注视镜头。”
“灯光”：“戏剧性的低调灯光，主要来自电脑显示器反射在她脸上的绿色光晕，以及远处背景中模糊的暖色调路灯。”
“着装”：“深色大号连帽衫，帽子拉起来遮住头，给人一种匿名感。”
“头发”：“长长的黑发从兜帽下隐约可见。”
“表情”：“目光专注、凝重，略带警惕，传达出一种专注和或许是孤寂的感觉。”
“氛围”：“神秘、紧张、以科技为中心，让人联想到黑客或监控主题。”
}
},
"image_settings": {
"size": "1024x1024",
“数量”：1，
“风格”：“电影感十足，阴暗忧郁，高对比度，屏幕阴影和高光强烈，颗粒感强。”
“构图”：“中近景，前景可见电脑屏幕（部分被遮挡），背景中透过窗户可以看到模糊的路灯。”
},
"output_format": {
"type": "image",
"expected_result": "一幅充满力量和氛围的画面，传达了科技、监控和都市神秘的主题。"
}
}
```