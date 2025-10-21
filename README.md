<a id="readme-top"></a>
# Nano Banana(nanobanana)/GPT-5/GPT-4o/豆包 Image Prompts

🎉 欢迎来到 Nano Banana(nanobanana)/GPT-5/GPT‑4o/豆包 图片提示词（Prompts）精选！

🎉 提示词持续更新中。。。

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
*   [案例 355：和漫威角色集体自拍 ](#prompt-355)
*   [案例 354：超精细逼真的美丽女人肖像 ](#prompt-354)
*   [案例 353：电影感的超现实主义肖像画 ](#prompt-353)
*   [案例 352：女人3D数字插画 ](#prompt-352)
*   [案例 351：身穿古代服饰的派大星和海绵宝宝 ](#prompt-351)
*   [案例 350：中国红自拍照片 ](#prompt-350)
*   [案例 349：复古小报童 ](#prompt-349)
*   [案例 348：超级马里奥风格照片 ](#prompt-348)
*   [案例 347：人物和宝可梦 ](#prompt-347)
*   [案例 346：人物和大型耿鬼 ](#prompt-346)
*   [案例 345：你抱着幼年版自己的复古风自拍 ](#prompt-345)
*   [案例 344：中秋月下秋千照片 ](#prompt-344)
*   [案例 343：超写实影棚肖像照 ](#prompt-343)
*   [案例 342：一位坐地铁的女性 ](#prompt-342)
*   [案例 341：东京地铁楼梯间美女照 ](#prompt-341)
*   [案例 340：居酒屋里拍摄的美女 ](#prompt-340)
*   [案例 339：百褶迷你裙美女 ](#prompt-339)
*   [案例 338：都市上空巨大的涡旋冲破暴风云层 ](#prompt-338)
*   [案例 337：低马尾女孩在日式居酒屋 ](#prompt-337)
*   [案例 336：一幅如梦似幻的私密肖像照 ](#prompt-336)
*   [案例 335：美丽的浅蓝色警服日本女子 ](#prompt-335)
*   [案例 334：全身夜景肖像 ](#prompt-334)
*   [案例 333：女生坐沙发上 ](#prompt-333)
*   [案例 332：女生镜子自拍 ](#prompt-332)
*   [案例 331：走廊上的女性 ](#prompt-331)
*   [案例 330：照片级室内躺姿人像 ](#prompt-330)
*   [案例 329：美女竖拍肖像 ](#prompt-329)
*   [案例 328：工作室写真风格照片 ](#prompt-328)
*   [案例 327：美女电影感肖像画 ](#prompt-327)
*   [案例 326：电影感街头美女摄影 ](#prompt-326)
*   [案例 325：美女时尚摄影 ](#prompt-325)
*   [案例 324：波普艺术肖像 ](#prompt-324)
*   [案例 323：角色创建 ](#prompt-323)
*   [案例 322：产品的工作室照片 ](#prompt-322)
*   [案例 321：产品超逼真的CGI镜头 ](#prompt-321)
*   [案例 320：物体变成大胆的卡通滴水 ](#prompt-320)
*   [案例 319：照片级逼真的概念食物艺术肖像 ](#prompt-319)
*   [案例 318：益智玩具角色 ](#prompt-318)
*   [案例 317：6张复古宝丽来照片 ](#prompt-317)
*   [案例 316：品牌字体 ](#prompt-316)
*   [案例 315：Funko Pop风格乙烯基公仔 ](#prompt-315)
*   [案例 314：电影级3D动感广告 ](#prompt-314)
*   [案例 313：创建您自己的3D漫画 ](#prompt-313)
*   [案例 312：品牌工作室照片 ](#prompt-312)
*   [案例 311：切割带有卡通爆炸的物体 ](#prompt-311)
*   [案例 310：秋天的落叶拼成图案 ](#prompt-310)
*   [案例 309：奢侈品牌广告 ](#prompt-309)
*   [案例 308：人物电影级渲染 ](#prompt-308)
*   [案例 307：字母动物 ](#prompt-307)
*   [案例 306：分层剪纸插图 ](#prompt-306)
*   [案例 305：复古漫画风格卡通插画 ](#prompt-305)
*   [案例 304：详细技术图纸 ](#prompt-304)
*   [案例 303：卡通风格的应用程序图标 ](#prompt-303)
*   [案例 302：超写实3D漫画肖像 ](#prompt-302)
*   [案例 301：超写实肖像位于石膏中心 ](#prompt-301)
*   [案例 300：制作证件照 ](#prompt-300)
*   [案例 299：制作大头贴 ](#prompt-299)
*   [案例 298：手办-ZBrush建模屏显与万代风格包装盒 ](#prompt-298)
*   [案例 297：制作工作室拍摄肖像照 ](#prompt-297)
*   [案例 296：手办-高级包装带打印机（擎天柱） ](#prompt-296)
*   [案例 295：透明扭蛋场景模型 ](#prompt-295)
*   [案例 294：钩针玩偶 ](#prompt-294)
*   [案例 293：软质高品质毛绒玩具 ](#prompt-293)
*   [案例 292：3D超写实食品广告 ](#prompt-292)
*   [案例 291：英语单词闪卡制作 ](#prompt-291)
*   [案例 290：食谱信息图制作 ](#prompt-290)
*   [案例 289：我知道你很急但你先别急 ](#prompt-289)
*   [案例 288：食物与运动结合的广告 ](#prompt-288)
*   [案例 287：3D纸艺作品 ](#prompt-287)
*   [案例 286：Q版木雕人偶 ](#prompt-286)
*   [案例 285：卡通插图药丸形象 ](#prompt-285)
*   [案例 284：字母毛茸茸形象 ](#prompt-284)
*   [案例 283：精致纸艺折纸模型 ](#prompt-283)
*   [案例 282：品牌模切乙烯基贴纸 ](#prompt-282)
*   [案例 281：创建Airbnb创意广告 ](#prompt-281)
*   [案例 280：制作照片中人物的玩具 ](#prompt-280)
*   [案例 279：俏皮现代的应用程序图标设计 ](#prompt-279)
*   [案例 278：3D卡通钥匙扣 ](#prompt-278)
*   [案例 277：极简风格插画 ](#prompt-277)
*   [案例 276：马赛克彩色玻璃徽章 ](#prompt-276)
*   [案例 275：品牌着陆页-年轻女性运动后的面部特写 ](#prompt-275)
*   [案例 274：创作漫画风格插画 ](#prompt-274)
*   [案例 273：超现实主义极简概念广告 ](#prompt-273)
*   [案例 272：铅笔素描画 ](#prompt-272)
*   [案例 271：超现实几何艺术风格的数字插画 ](#prompt-271)
*   [案例 270：乐高超级英雄摆出充满动感的动作姿势 ](#prompt-270)
*   [案例 269：透明X光扫描面板后面 ](#prompt-269)
*   [案例 268：童趣插画 ](#prompt-268)
*   [案例 267：一个复古茶包（Gorillaz）风格插画 ](#prompt-267)
*   [案例 266：树上挂着产品（Gorillaz）风格插画 ](#prompt-266)
*   [案例 265：品牌杂志（Gorillaz）风格插画 ](#prompt-265)
*   [案例 264：纸制玩具版本（Gorillaz）风格插画 ](#prompt-264)
*   [案例 263：低多边形马赛克风格（Gorillaz）风格插画 ](#prompt-263)
*   [案例 262：街头顽童（Gorillaz）风格插画 ](#prompt-262)
*   [案例 261：城市糖果传奇的风格 ](#prompt-261)
*   [案例 260：20世纪20年代亚瑟·拉克姆风格的童话插画 ](#prompt-260)
*   [案例 259：20世纪30年代弗莱舍工作室风格的动画 ](#prompt-259)
*   [案例 258：20世纪50年代的海报 ](#prompt-258)
*   [案例 257：透明蜂窝状变形 ](#prompt-257)
*   [案例 256：漂浮玻璃霓虹3D ](#prompt-256)
*   [案例 255：头部的几何肖像 ](#prompt-255)
*   [案例 254：磨砂泡泡 3D 图标 ](#prompt-254)
*   [案例 253：亚克力钥匙扣 ](#prompt-253)
*   [案例 252：怪诞又梦幻的超现实插画 ](#prompt-252)
*   [案例 251：超细节盒状纸艺玩具 ](#prompt-251)
*   [案例 250：被优雅水漩涡环绕的品牌产品 ](#prompt-250)
*   [案例 249：路牌图片 ](#prompt-249)
*   [案例 248：一张铅笔素描 ](#prompt-248)
*   [案例 247：90年代美国卡通片定格动画风格插画 ](#prompt-247)
*   [案例 246：色彩缤纷的手工雕塑 ](#prompt-246)
*   [案例 245：Kiro卡通幽灵 ](#prompt-245)
*   [案例 244：转换马赛克风格照片 ](#prompt-244)
*   [案例 243：卡通照片转换 ](#prompt-243)
*   [案例 242：有趣的块状 3D 世界 ](#prompt-242)
*   [案例 241：9格Q版风格贴纸 ](#prompt-241)
*   [案例 240：定制的枕头 ](#prompt-240)
*   [案例 239：沙滩胶囊城市 ](#prompt-239)
*   [案例 238：用花朵美化你的产品 ](#prompt-238)
*   [案例 237：电影镜头拍摄 ](#prompt-237)
*   [案例 236：直升机品牌广告 ](#prompt-236)
*   [案例 235：讽刺版的你 ](#prompt-235)
*   [案例 234：产品成为霓虹灯下的梦想 ](#prompt-234)
*   [案例 233：超现实鸟类幻想 ](#prompt-233)
*   [案例 232：胶囊从透明的药瓶中倾倒 ](#prompt-232)
*   [案例 231：形状为生日气球文字 ](#prompt-231)
*   [案例 230：可爱的卡通灵魂 ](#prompt-230)
*   [案例 229：品牌快餐胶囊 ](#prompt-229)
*   [案例 228：日本搞笑漫画风格插画 ](#prompt-228)
*   [案例 227：糖果形状物品 ](#prompt-227)
*   [案例 226：电影场景 ](#prompt-226)
*   [案例 225：时尚的胶囊海报 ](#prompt-225)
*   [案例 224：舒适的周末从这里开始 ](#prompt-224)
*   [案例 223：惊人的外骨骼图像 ](#prompt-223)
*   [案例 222：宝石渲染风格 ](#prompt-222)
*   [案例 221：钻石镶嵌风格 ](#prompt-221)
*   [案例 220：3D店铺渲染图 ](#prompt-220)
*   [案例 219：冬日国家 ](#prompt-219)
*   [案例 218：超现实的黑白彩色页面 ](#prompt-218)
*   [案例 217：卡通现代风格插画 ](#prompt-217)
*   [案例 216：穿越梦境迷宫 ](#prompt-216)
*   [案例 215：Gorillaz风格 ](#prompt-215)
*   [案例 214：部分咬掉的糕点 ](#prompt-214)
*   [案例 213：3D蓬松的物体 ](#prompt-213)
*   [案例 212：品牌在悬浮平台上 ](#prompt-212)
*   [案例 211：灯泡中的城市 ](#prompt-211)
*   [案例 210：90年代风格的摔跤人物 ](#prompt-210)
*   [案例 209：吃掉你的文字 ](#prompt-209)
*   [案例 208：逼真的产品照片 ](#prompt-208)
*   [案例 207：超现实的高冲击力的图像 ](#prompt-207)
*   [案例 206：工业内部品牌广告 ](#prompt-206)
*   [案例 205：以动物为灵感的品牌 ](#prompt-205)
*   [案例 204：黑客帝国的绿色代码 ](#prompt-204)
*   [案例 203：3D表情符号头部 ](#prompt-203)
*   [案例 202：创建半透明图标 ](#prompt-202)
*   [案例 201：纸上的小卡通角色 ](#prompt-201)
---
## [点击：查看100-200个提示词](https://github.com/songguoxs/gpt4o-image-prompts/blob/master/200.md)
## [点击：查看100提示词](https://github.com/songguoxs/gpt4o-image-prompts/blob/master/100.md)






<a id="prompt-355"></a>
## 案例 355：和漫威角色集体自拍 (来源 [@xmliisu](https://x.com/xmliisu/status/1980161909828526514))

<div style="display: flex; justify-content: space-between;">
<img src="./images/355.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-和漫威角色集体自拍">
</div>

**提示词：**
```
A ultra realistic group selfie, center is the person from the attached image (uploaded image facial details), wearing a fitted black shirt and ripped jeans, holding an iPhone for the selfie. Around are Chris Hemsworth as Thor, Gal Gadot as Wonder Woman, Scarlett Johansson as Black Widow, Mark Ruffalo as Hulk, Henry Cavill as Superman, RDJ in full armor all hugging, smiling, posing casually like close friends. Fun, joyful mood, bright daylight, cinematic quality, natural look, high detail.
```

**中文提示词：**
```
一张超逼真的集体自拍，中间是附件图片中的人物（上传图片的面部细节），他身穿合身的黑色衬衫和破洞牛仔裤，手持 iPhone 自拍。周围是克里斯·海姆斯沃斯饰演的雷神、盖尔·加朵饰演的神奇女侠、斯嘉丽·约翰逊饰演的黑寡妇、马克·鲁法洛饰演的绿巨人、亨利·卡维尔饰演的超人，以及全副武装的 RDJ，他们拥抱在一起，面带微笑，像亲密朋友一样随意摆姿势。充满乐趣、愉悦的心情，明亮的日光，电影级画质，自然的画面，细节丰富
```

<a id="prompt-354"></a>
## 案例 354：超精细逼真的美丽女人肖像 (来源 [@cnyzgkc](https://x.com/cnyzgkc/status/1980469269134733415))

<div style="display: flex; justify-content: space-between;">
<img src="./images/354.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-超精细逼真的美丽女人肖像">
</div>

**提示词：**
```
Ultra-detailed, photorealistic portrait of a beautiful woman, high fashion editorial, deep white plunging V-neck lace sequined evening gown, elegant low bun updo, soft studio lighting, light grey background, dramatic shadowplay, hyperrealistic, 8K
```

**中文提示词：**
```
超精细、逼真的美丽女人肖像，高级时装社论，深白色 V 领蕾丝亮片晚礼服，优雅的低发髻，柔和的工作室灯光，浅灰色背景，戏剧性的光影，超现实主义，8K
```

<a id="prompt-353"></a>
## 案例 353：电影感的超现实主义肖像画 (来源 [@SimplyAnnisa](https://x.com/SimplyAnnisa/status/1980503919492272216))

<div style="display: flex; justify-content: space-between;">
<img src="./images/353.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-电影感的超现实主义肖像画">
</div>

**提示词：**
```
A cinematic, hyper-realistic portrait of 
@simplyannisa
, keeping her real facial features completely unchanged. The woman sits at a wooden table, leaning slightly forward, with her right forearm resting naturally on the surface. Her right hand gently holds a dark ceramic mug with the word “
@simplyannisa
” written on it. Her fingers are slender, relaxed, and slightly curved. Her left arm is bent at the elbow, resting casually on the table. She wears a dark gray, slightly loose long-sleeve Henley top with the top buttons undone, subtly revealing a delicate neckline. Her hair falls naturally around her shoulders, soft waves catching the light. Her gaze is directed to the side, away from the camera, carrying a thoughtful and mysterious expression. The lighting is soft and moody, emphasizing the texture of her hair and face while adding cinematic contrast and emotional depth. The portrait is shot at eye level with an 85mm lens effect and a shallow depth of field, keeping her face and upper body in sharp focus while the background softly blurs. The overall color grading is muted and cinematic, with cool tones, soft shadows, and a minimalist dark background.
```

**中文提示词：**
```
这幅充满电影感的超现实主义肖像画，保留了@simplyannisa的真实面部特征。画中女子坐在木桌旁，身形微微前倾，右臂自然地搭在桌面上。她的右手轻轻地捧着一个深色陶瓷杯，杯上写着“ @simplyannisa ”三个字。她的手指纤细、放松，略带弧度。左臂肘部弯曲，随意地搭在桌上。她身穿一件略显宽松的深灰色长袖亨利衫，最上面的纽扣敞开，隐约露出精致的领口。她的头发自然地披散在肩上，柔和的波浪在光线下闪闪发光。她的目光转向侧面，远离镜头，带着一种若有所思、神秘莫测的表情。柔和的光线营造出一种忧郁的氛围，突出了她头发和面部的质感，同时增添了电影般的对比度和情感深度。这幅肖像画采用85毫米镜头，在视线高度处以浅景深拍摄，使她的脸部和上半身保持清晰对焦，而背景则略微模糊。整体色彩分级柔和且具有电影感，具有冷色调、柔和阴影和简约的深色背景。
```

<a id="prompt-352"></a>
## 案例 352：女人3D数字插画 (来源 [@SimplyAnnisa](https://x.com/SimplyAnnisa/status/1980553716131414281))

<div style="display: flex; justify-content: space-between;">
<img src="./images/352.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-女人3D数字插画">
</div>

**提示词：**
```
A hyper-realistic 3D digital illustration of a woman with her natural facial features, hairstyle, and skin tone unchanged, styled in a Pixar-inspired cinematic look. She is smiling warmly while leaning through a glowing orange rectangular frame, both hands gently holding the edge of the frame. She wears a denim jacket layered over a black top, subtle jewelry, and a smartwatch on her wrist. The lighting is soft yet vibrant, highlighting facial depth, realistic fabric texture, and warm glow reflections on her face and hands. The background is softly blurred, creating a cinematic atmosphere with a perfect blend of realism, warmth, and Pixar-style charm.
```

**中文提示词：**
```
这幅超写实的3D数字插画描绘了一位女性，其自然的五官、发型和肤色均未改变，并采用了皮克斯风格的电影风格。她面带温暖的微笑，身影透过发光的橙色矩形画框倾身而立，双手轻轻握住画框边缘。她身穿牛仔夹克，内搭黑色上衣，佩戴着精致的珠宝，手腕上戴着智能手表。灯光柔和而明亮，凸显了面部深度、逼真的织物纹理以及她脸部和双手上温暖的光芒。背景轻柔地模糊处理，营造出一种电影般的氛围，完美融合了现实主义、温暖感和皮克斯风格的魅力。
```

<a id="prompt-351"></a>
## 案例 351：身穿古代服饰的派大星和海绵宝宝 (来源 [@op7418](https://x.com/op7418/status/1980296606382780794))

<div style="display: flex; justify-content: space-between;">
<img src="./images/351.png" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-身穿古代服饰的派大星和海绵宝宝">
</div>

**中文提示词：**
```
身上穿着唐朝服饰的一只派大星，自然逼真，北宋时期风格油画暗棕褐色旧版图高清，精细工笔，精细流畅、柔韧有力、充满韵律感。衣纹的勾勒，疏密有致。用色典雅，善于运用对比色，丰富和谐，头戴唐朝帽子
```

<a id="prompt-350"></a>
## 案例 350：中国红自拍照片 (来源 [@xxx](xxxxxx))

<div style="display: flex; justify-content: space-between;">
<img src="./images/350.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-中国红自拍照片">
</div>

**中文提示词：**
```
图片中人物头发两侧别着黄色花朵，右脸颊有红色五角星图案，佩戴金色耳饰与细项链，身着印有白色 “China” 文字的红色 T 恤，红色纯色背景，妆容精致（红唇、自然眼妆），整体风格充满爱国情怀、清新明亮，高清细节。
```

<a id="prompt-349"></a>
## 案例 349：复古小报童 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1972570539006013947))

<div style="display: flex; justify-content: space-between;">
<img src="./images/349.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-复古小报童">
</div>

**中文提示词：**
```
保持人物面部五官和姿势不变，生成清新写真：人物穿米色短袖衬衫，下身搭配绿色背带裤，头戴绿色复古报童帽。佩戴红色小领巾，斜挎绿色小挎包，穿白色袜子。背景改为正红色，画面右上方书法英文“Happy Day”，文字融入人物周围，光线柔和均匀。
```


<a id="prompt-348"></a>
## 案例 348：超级马里奥风格照片 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1971764229070884990))

<div style="display: flex; justify-content: space-between;">
<img src="./images/348.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-超级马里奥风格照片">
</div>

**中文提示词：**
```
生成一张图片，人物头戴红色帽子，帽上有白色圆圈加红色 “M” 标志；上身是红色短袖，下身搭配蓝色背带裤，裤上有黄色圆形装饰扣，穿着红色的袜子还原度高，道具丰富多样。
```

<a id="prompt-347"></a>
## 案例 347：人物和宝可梦 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1972311003049415030))

<div style="display: flex; justify-content: space-between;">
<img src="./images/347.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-人物和宝可梦">
</div>

**提示词：**
```
Create a hyper-realistic editorial portrait of a person, generated from the provided image (same face 100%, same hairstyle, expression preserved). The subject stands confidently on a reflective glossy floor wearing a coordinated bright yellow and crimson outfit (hooded jacket or sweatshirt and tailored joggers) with lightning bolt-inspired linework and subtle embroidered electric motifs running along sleeves, chest and pant seams. Matching crimson and yellow sneakers complete the look. Beside the subject stands a large Pikachu-like creature, scaled to be equal to or taller than the person, with realistic textured fur and a vibrant palette of electric yellows and deep crimson accents that echo the clothing. Background is a moody electric yellow to deep crimson gradient that enhances the vibrant palette; both subject and creature are clearly reflected on the floor. Lighting uses dramatic warm key light and sculpting rim light to emphasize skin, fur and fabric detail, cinematic shallow depth of field, slight film grain for editorial grit, photoreal creature integration, ultra-detailed 8K quality.
```

**中文提示词：**
```
创造一张超现实的编辑肖像，人物形象基于提供的图像（面部100%相同，发型和表情保持不变）。主体自信地站立在反光的亮面地板上，身穿一套协调的亮黄色和深红色服装（连帽夹克或运动衫和修身慢跑裤），服装上饰有闪电状的线条设计和沿袖子、胸部和裤缝延伸的精致刺绣电气图案。搭配的深红色和黄色运动鞋完善了整体造型。主体旁边站立着一只大型皮卡丘状生物，其大小与人物相等或更高，拥有逼真的毛发纹理和鲜艳的电黄色及深红色点缀，与服装相呼应。背景是 moody 的电黄色到深红色的渐变，以增强鲜明的调色。主体和生物都清晰地反映在地面上。灯光采用戏剧性的暖色主光和造型轮廓光，以突出皮肤、毛发和织物的细节，电影般的浅景深，略带胶片颗粒以增加编辑质感，逼真的生物融合，超细节的8K画质。
```

<a id="prompt-346"></a>
## 案例 346：人物和大型耿鬼 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1972307026714972370))

<div style="display: flex; justify-content: space-between;">
<img src="./images/346.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-人物和大型耿鬼">
</div>

**提示词：**
```
Hyper-realistic editorial portrait of a person, generated from the provided image (same face 100%, same hairstyle, expression preserved). The subject stands confidently on a reflective glossy floor wearing a coordinated deep purple and shadowy black outfit (hooded jacket or sweatshirt and tailored joggers) with ghostly wisp-inspired linework and subtle embroidered mischievous smile motifs running along sleeves, chest and pant seams. Matching crimson red and deep purple sneakers complete the look. Beside the subject stands a large Gengar, scaled to be equal to or taller than the person, with a realistic smooth, almost ethereal texture, and a vibrant palette of deep purples with glowing crimson red eyes that echo the clothing. Background is a moody deep purple to shadowy black gradient that enhances the vibrant palette; both subject and creature are clearly reflected on the floor. Lighting uses dramatic cool key light and sculpting rim light to emphasize skin, form and fabric detail, cinematic shallow depth of field, slight film grain for editorial grit, photoreal creature integration, ultra-detailed 8K quality.
```

**中文提示词：**
```
根据提供的图像生成的超现实主义人物肖像（100% 相同脸型、相同发型、保留表情）。人物自信地站在反光的光滑地板上，身着协调的深紫色和暗黑色服装（连帽夹克或运动衫和定制慢跑裤），带有幽灵般的缕缕线条，袖子、胸部和裤缝处绣有精致的顽皮笑脸图案。搭配的深红色和深紫色运动鞋使整个造型更加完美。人物旁边站着一只大型耿鬼，其比例与人物相等或更高，具有逼真的光滑、近乎空灵的纹理，以及鲜艳的深紫色调，闪闪发光的深红色眼睛与衣服相呼应。背景是从深紫色到暗黑色的渐变色，增强了鲜艳的色调；人物和生物都清晰地倒映在地板上。灯光采用戏剧性的冷色调主光和雕刻轮廓光来强调皮肤、形态和织物细节、电影浅景深、轻微的胶片颗粒感以增强编辑质感、逼真的生物融合以及超精细的 8K 质量。
```


<a id="prompt-345"></a>
## 案例 345：你抱着幼年版自己的复古风自拍 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1971394542298440073))

<div style="display: flex; justify-content: space-between;">
<img src="./images/345.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-你抱着幼年版自己的复古风自拍">
</div>

**提示词：**
```
retro selfies of you holding a baby version of you
```

**中文提示词：**
```
你抱着幼年版自己的复古风自拍
```


<a id="prompt-344"></a>
## 案例 344：中秋月下秋千照片 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1975198365932769599))

<div style="display: flex; justify-content: space-between;">
<img src="./images/344.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-中秋月下秋千照片">
</div>

**中文提示词：**
```
中秋月下秋千照片
```

<a id="prompt-343"></a>
## 案例 343：超写实影棚肖像照 (来源 [@cheerselflin](https://x.com/cheerselflin/status/1979569018928603432))

<div style="display: flex; justify-content: space-between;">
<img src="./images/343.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-超写实影棚肖像照">
</div>

**中文提示词：**
```
超写实影棚肖像，一位男性优雅地斜倚在椅子靠背上，身着时尚的深色服装。以微妙的低角度拍摄，以突出他的面部特征和自信的表情。电影般的黑白调色，肤色自然精致。纯黑色背景，8K 锐利细节，突出服装、头发和眼睛的纹理，营造出戏剧性、栩栩如生的效果。
```

<a id="prompt-342"></a>
## 案例 342：一位坐地铁的女性 (来源 [@cheerselflin](https://x.com/cheerselflin/status/1979203307873931360))

<div style="display: flex; justify-content: space-between;">
<img src="./images/342.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-一位坐地铁的女性">
</div>

**提示词：**
```
a young beautiful Japanese woman with porcelain skin, soft makeup and bright red lips, straight chestnut-brown hair neatly tied in a ponytail with straight bangs framing her face, wearing a fitted light-blue police uniform shirt with gold buttons and badge, a dark green flat ribbon tie knotted at the collar with two short tails hanging down like a gift bow, navy skirt, dark belt with brass buckle, white gloves, black shoes, sitting with her knees together and hands gently folded over a glass, calm and elegant posture, oxygen-fresh natural makeup look with translucent dewy base, barely-there eyeliner, soft straight brows, faint rosy blush on the cheeks, subtle inner-corner highlight that makes her eyes look bright and airy, lips a clean vivid red yet not glossy, her pose delicate and composed: seated on a narrow wooden bench in a cramped booth, ankles tucked slightly back, torso subtly leaning forward from the hips, forearms relaxed, gloved hands overlapping lightly above the small tumbler placed between her knees, chin slightly lowered while gazing directly at the camera, flanked by two older Japanese policemen in uniform on each side, the man on the left leaning inward from the doorway, cap slightly tilted, short-sleeve standard police shirt, one elbow resting on his knee with the hand hanging loosely, attentive and calm expression; the man on the right wearing a striped short-sleeve shirt with a dark tie and badge, cap set square with a gold band, arms firmly crossed over his chest, body angled toward the woman, a reserved, thoughtful look, inside a small dimly-lit bar filled with vintage Japanese posters, old bottles, narrow wooden walls, cluttered shelves, detailed physical environment: shot from the doorway so the worn wooden jambs create a frame-within-frame; scuffed varnished beams, handwritten Japanese slips and price tags pinned among utensils, cords and trinkets hanging overhead, glassware and liquor bottles stacked tight on shallow shelves, a tiny aisle underfoot, faint reflections on lacquered wood, humid air; one or two bare incandescent bulbs casting a localized amber pool of light that fades rapidly into darkness, camera perspective and ratio: intimate eye-level viewpoint at close conversational distance (about 1-1.5 m), classic 35mm focal feel, vertical portrait framing with a 3:4 aspect, slight center-weighted composition emphasizing the trio in a tight booth, warm incandescent lighting with nostalgic amber tone, low saturation colors, fine 35mm film grain texture, slightly overexposed highlights, retro 1980s analog snapshot aesthetic, candid composition, shallow depth of field, cinematic color grading, in the style of Nobuyoshi Araki and Daido Moriyama street photography
```

**中文提示词：**
```
一位年轻美丽的日本女性，有着瓷器般的肌肤、柔和的妆容和鲜红的嘴唇，栗色的直发扎成马尾辫，齐刘海修饰着她的脸型，身穿一件合身的浅蓝色警服衬衫，上面有金色的纽扣和徽章，一条深绿色的扁平丝带领带在领口处打结，两条短尾巴像礼物蝴蝶结一样垂下来，海军蓝裙子，深色腰带配黄铜扣，白手套，黑色鞋子，双膝并拢坐着，双手轻轻地交叉放在玻璃杯上，姿态平静而优雅，氧气清新的自然妆容搭配半透明的露珠底妆，几乎看不见的眼线，柔软的直眉，脸颊上淡淡的玫瑰色腮红，微妙的内眼角高光使她的眼睛看起来明亮而通透，嘴唇是干净的鲜红色，但不油腻，她的姿势精致而沉稳：坐在狭窄的卡座中的一张狭窄的木凳上，脚踝略微向后弯曲，躯干从臀部微微向前倾斜，前臂放松，戴着手套的双手轻轻地重叠在小玻璃杯放在两膝之间，下巴微微低垂，直视镜头，两侧各站着两名年纪稍长的穿制服的日本警察，左边的男子从门口探出身子，帽子微微倾斜，穿着短袖制式警服，一肘撑在膝盖上，手随意地垂着，表情专注而平静；右边的男子穿着条纹短袖衬衫，系着深色领带和警徽，帽子镶着金边，双臂紧紧地交叉在胸前，身体朝着女人倾斜，一副矜持、若有所思的样子，身处一间灯光昏暗的小酒吧里，里面摆满了老式的日本海报、旧酒瓶、狭窄的木墙、杂乱的架子，细致的物理环境：从门口拍摄，磨损的木门框形成了框中框；磨损的漆面横梁，手写的日文单据和价格标签夹在餐具之间，电线和小饰品悬挂在头顶，玻璃器皿和酒瓶紧紧地堆放在浅浅的架子上，脚下是一条小过道，漆木上反射着微弱的光线，空气潮湿；一两个裸露的白炽灯泡投射出局部琥珀色的光晕，迅速消失在黑暗中，相机视角和比例：近距离交谈（约 1-1.5 米）的亲密视线视角，经典的 35 毫米焦距感，3：4 宽高的垂直人像取景，轻微的中央重点构图强调了紧凑展位中的三人组，温暖的白炽灯光带有怀旧的琥珀色调，低饱和度色彩，细腻的 35 毫米胶片颗粒纹理，略微过度曝光的高光，复古的 1980 年代模拟快照美学，坦率的构图，浅景深，电影调色，荒木经惟和森山大道的街头摄影风格
```

<a id="prompt-341"></a>
## 案例 341：东京地铁楼梯间美女照 (来源 [@cheerselflin](https://x.com/cheerselflin/status/1979203277553307820))

<div style="display: flex; justify-content: space-between;">
<img src="./images/341.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-东京地铁楼梯间美女照">
</div>

**提示词：**
```
A blurry, high-grain snapshot taken in a Tokyo subway stairwell, charged with motion, humidity, and raw urban energy. The air feels thick and fluorescent, lit by overhead tube lights that cast a cold green-blue tint across the frame. The film grain, chromatic aberration, and lens distortion add a tactile sense of chaos — a fleeting instant suspended mid-run.

At the center, a young woman in a tied white shirt and short plaid skirt is caught mid-step, descending the stairs. Her movement blurs, skirt flaring slightly, hair swept by motion. The focus drifts between her and the background, giving the shot a dreamlike disorientation, as if seen through memory or adrenaline.

Her expression holds the entire frame together — eyes open, lips slightly parted, cheeks flushed, as if between alertness and vulnerability. There’s no posed awareness, only instinct — a moment stolen from time.

Around her, commuters blur into silhouettes, the hallway tight and echoing, the walls reflecting harsh fluorescent glare. The composition feels accidental yet perfect: tilted, urgent, intimate.

The atmosphere is electric and nostalgic, a mix of youth, motion, and fleeting emotion, like a fragment from a fever dream or an afterimage burned into film — not cinematic, but hyper-real, the kind of moment only disposable-camera photography captures: alive, imperfect, and painfully real.
```

**中文提示词：**
```
这是一张模糊的高颗粒快照，拍摄于东京地铁楼梯间，充满了运动、潮湿和原始的城市能量。空气感觉浓重而荧光，头顶的筒灯在画面上投射出冰冷的蓝绿色调。胶片颗粒、色差和镜头畸变增添了一种触觉上的混乱感——仿佛瞬间静止在运行中。
照片中央，一位身着系带白衬衫和格子短裙的年轻女子正迈着轻快的步伐走下楼梯。她的动作模糊不清，裙摆微微扬起，头发随风飘动。焦点在她和背景之间游移，让这张照片呈现出一种如梦似幻的迷离感，仿佛透过记忆或肾上腺素的刺激而呈现。
她的表情与整个画面融为一体——双眼睁开，嘴唇微张，脸颊泛红，仿佛介于警觉与脆弱之间。没有故作姿态的警觉，只有本能——一个从时间中偷来的瞬间。
在她周围，通勤者的身影模糊不清，走廊狭窄而回声不断，墙壁反射着刺眼的荧光灯。这构图看似偶然，却又完美：倾斜、急促、亲密。
氛围充满活力和怀旧，混合着青春、运动和转瞬即逝的情感，就像发烧梦境中的片段或刻在胶片上的残像——不是电影般的，而是超现实的，只有一次性相机摄影才能捕捉到的那种瞬间：鲜活、不完美、痛苦的真实。
```
<a id="prompt-340"></a>
## 案例 340：居酒屋里用闪光灯拍摄的美女照片 (来源 [@cheerselflin](https://x.com/cheerselflin/status/1979203220061982872))

<div style="display: flex; justify-content: space-between;">
<img src="./images/340.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-居酒屋里用闪光灯拍摄的美女照片">
</div>

**提示词：**
```
A flash snapshot taken in a small, crowded Japanese izakaya, filled with handwritten menus, old posters, and wooden textures. The lighting is from a direct on-camera flash, producing bright highlights, harsh shadows, and a slightly grainy texture that enhances the candid feeling.

The main subject is a young woman sitting on a wooden bar stool, turning her body slightly and looking back over her shoulder toward the camera. She wears a white button-up shirt and a short high-waisted checkered skirt, revealing her legs and adding to the youthful, casual tone of the scene.

Her face is softly lit by the flash — cheeks vividly blushed, red lips glossy, and eyes meeting the lens with a subtle, playful yet intimate expression. The smile is gentle but suggestive, carrying a slight sense of awareness and warmth. Her posture and gaze create a delicate tension between confidence and softness.

The background is dim and crowded with older patrons in dark clothes, contrasting with her bright presence. The composition is tight and spontaneous, typical of 90s Japanese disposable camera photography — high flash contrast, slight blur, and natural imperfection.

The overall mood is nostalgic, warm, and faintly ambiguous — capturing a moment that feels real, close, and emotionally charged, like a personal memory illuminated by flash rather than a staged portrait.
```

**中文提示词：**
```
这是一张在狭小拥挤的日式居酒屋里用闪光灯拍摄的照片，屋里摆满了手写菜单、老海报和木质纹理。光线来自机顶闪光灯的直射，营造出明亮的高光、刺眼的阴影和略带颗粒感的纹理，增强了照片的自然感。
画面主体是一位年轻女子坐在酒吧木凳上，微微侧身，目光越过肩膀，望向镜头。她身穿白色纽扣衬衫和高腰格纹短裙，露出双腿，为画面增添了一抹青春随意的气息。
闪光灯柔和地照亮了她的脸庞——双颊绯红，红唇闪耀光泽，目光与镜头交汇，眼神微妙、俏皮却又充满亲密感。她的笑容温柔却又充满暗示，透着一丝警觉与温暖。她的姿态和目光在自信与柔和之间营造出一种微妙的张力。
背景昏暗，挤满了身着深色衣服的老年顾客，与她明亮的身影形成鲜明对比。构图紧凑自然，是90年代日本一次性相机摄影的典型特征——高闪光对比度、轻微的模糊和自然的瑕疵。
整体氛围怀旧、温暖，略带一丝暧昧——捕捉真实、亲近、充满情感的瞬间，就像闪光灯照亮的个人记忆，而不是摆拍的肖像。
```

<a id="prompt-339"></a>
## 案例 339：百褶迷你裙美女 (来源 [@cheerselflin](https://x.com/cheerselflin/status/1979203321262149903))

<div style="display: flex; justify-content: space-between;">
<img src="./images/339.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-百褶迷你裙美女">
</div>

**提示词：**
```
The image features a subject with long, dark hair, dressed in a short-sleeved, cropped white top and a high-waisted, pleated blue mini skirt that ends well above mid-thigh, fitting snugly to accentuate the figure. The subject is captured in a slightly turned pose, leaning forward with one hand resting on a wall covered in a dense collage of overlapping posters, flyers, and advertisements in various colors such as red, yellow, blue, and white, with text in multiple languages, suggesting an urban or vintage environment. The wall appears worn, with visible creases and minor damage, adding to the nostalgic ambiance. The subject's facial expression, partially visible from a side angle, conveys a subtle mix of curiosity and playfulness. The lighting is dim with a warm tone, casting soft shadows that enhance the mood. The composition employs a low-angle perspective, drawing attention to the subject's lower body and the skirt's height, with a sharp focus on the subject against a slightly blurred background. The overall mood is provocative yet nostalgic, blending modern attire with a retro aesthetic. Technically, the image exhibits a deliberate soft-focus effect, contributing to a hazy, dreamlike quality that softens details and edges. Additionally, noticeable grain and noise texture are present, enhancing the vintage aesthetic and adding a tactile, gritty feel to the photograph. The resolution remains moderate, typical of digital photography, with a slightly desaturated color profile featuring a vintage filter effect. The aspect ratio is vertical, approximately 4:5, supporting the focused framing of the subject.
```

**中文提示词：**
```
照片中的人物留着一头乌黑的长发，身穿白色短袖上衣和高腰蓝色百褶迷你裙，裙摆长及大腿中部，贴身剪裁，凸显身材。人物略微侧身，身体前倾，一只手扶在墙上，墙上贴满了红、黄、蓝、白等各种颜色的海报、传单和广告，并配有多种语言的文字，营造出一种都市或复古的氛围。墙壁显得有些破旧，有明显的折痕和轻微的损坏，更增添了怀旧的氛围。从侧面看，人物的面部表情部分可见，流露出好奇与俏皮的微妙交织。昏暗的灯光搭配温暖的色调，投射出柔和的阴影，增强了氛围。构图采用低角度透视，将注意力吸引到人物的下半身和裙子的高度，并在略微模糊的背景上清晰地聚焦于人物。整体氛围既挑逗又怀旧，将现代服饰与复古美学融为一体。从技术角度来看，这张照片展现出一种刻意的柔焦效果，营造出朦胧梦幻的质感，柔化了细节和边缘。此外，明显的颗粒感和噪点纹理增强了复古美感，为照片增添了质感和粗糙感。分辨率保持中等水平，符合数码摄影的典型特征，略微降低的色彩饱和度，呈现出复古滤镜效果。画面纵横比约为4:5，有利于主体的聚焦构图。
```

<a id="prompt-338"></a>
## 案例 338：都市上空巨大的涡旋冲破暴风云层 (来源 [@xxx](https://x.com/IamEmily2050/status/1979571282732777698))

<div style="display: flex; justify-content: space-between;">
<img src="./images/338.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-都市上空巨大的涡旋冲破暴风云层">
</div>

**提示词：**
```
A massive spiral vortex tears through storm clouds above a futuristic illuminated city, revealing blue sky beyond a visual metaphor for artificial general intelligence breaking through the turbulence of current limitations to reach clarity beyond human comprehension. 
```

**中文提示词：**
```
在一座灯火璀璨的未来都市上空，巨大的螺旋状涡旋冲破暴风云层，显露出后方的蓝天 —— 这一视觉隐喻象征着通用人工智能突破当前局限的重重阻碍，抵达人类难以理解的清晰境界。
```

<a id="prompt-337"></a>
## 案例 337：低马尾女孩在日式居酒屋 (来源 [@MANISH1027512](https://x.com/MANISH1027512/status/1978672690740310181))

<div style="display: flex; justify-content: space-between;">
<img src="./images/337.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-低马尾女孩在日式居酒屋">
</div>

**提示词：**
```
a young beautiful sweet smiling Asian woman with soft brown hair tied loosely in a low ponytail with gentle face-framing bangs, sitting sideways on a narrow wooden bar stool inside a tiny, crowded Japanese izakaya, turning back toward the camera with a gentle natural smile; wearing a white blouse and gray plaid high-waisted shorts; surrounded by middle-aged and elderly Japanese men in dark suits chatting quietly beside her; the bar interior is narrow and dimly lit, walls covered with old handwritten menus and vintage posters, cluttered shelves of bottles, ceramics, and small trinkets; soft warm tungsten lighting with slight haze, smoke lingering in the air, evoking the scent of grilled food and sake; authentic candid moment, intimate social atmosphere, nostalgic Showa-era Japanese nightlife vibe;cozy ambient tungsten lighting, low contrast, muted color palette with subtle green tint, shallow depth of field, film-like softness, slight haze, nostalgic 35mm analog photo, visible fine film grain, authentic Japanese retro bar atmosphere, candid portrait, in the style of Daido Moriyama, Takashi Homma, and Wong Kar Wai, Kodak Portra 400 film aesthetic --ar 3:4 --v 7
```

**中文提示词：**
```
一位年轻美丽、笑容甜美的亚洲女性，一头柔软的棕色头发扎成低马尾，刘海柔和地修饰着脸型，她侧身坐在一间狭小拥挤的日式居酒屋里，坐在一张狭窄的木质吧台凳上，面带温柔自然的微笑；她身穿白色衬衫和灰色格子高腰短裤；她周围是穿着深色西装的中老年日本男子，他们在她旁边轻声聊天；酒吧内部狭窄而昏暗，墙上贴满了古老的手写菜单和复古海报，架子上杂乱地摆满了瓶子、陶瓷和小饰品；柔和温暖的钨丝灯略带薄雾，烟雾在空气中缭绕，散发着烧烤食物和清酒的香味；真实的坦率时刻，亲密的社交氛围，怀旧的昭和时代日本夜生活氛围；舒适的环境钨丝灯，低对比度，柔和的色调，微妙的绿色色调，浅景深，胶片般的柔软度，轻微的雾霾，怀旧的 35 毫米模拟照片，可见的细胶片颗粒，真实的日本复古酒吧氛围，坦率的肖像，森山大道、本间隆和王家卫的风格，柯达 Portra 400 胶片美学 --ar 3:4 --v 7
```

<a id="prompt-336"></a>
## 案例 336：一幅如梦似幻的私密肖像照 (来源 [@MANISH1027512](https://x.com/MANISH1027512/status/1978041705623343437))

<div style="display: flex; justify-content: space-between;">
<img src="./images/336.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-一幅如梦似幻的私密肖像照">
</div>

**提示词：**
```
a dreamy intimate portrait of a beautiful realistic asian woman lying under a blanket, soft natural light, cozy warm bedroom, cinematic film grain, 35mm film aesthetic, shallow depth of field, soft focus, delicate skin texture, natural makeup, slightly messy hair, Fujifilm Pro 400H look, pastel warm tones, realistic lighting, subtle haze, gentle atmosphere, by Petra Collins and Ren Hang --ar 3:4 --v7 --style raw
```

**中文提示词：**
```
一幅如梦似幻的私密肖像照：一位容貌精致、形象写实的亚裔女性躺在毛毯下，柔和的自然光线洒落，背景是温馨舒适的卧室。画面带有电影感颗粒质感，呈现 35 毫米胶片的美学风格，采用浅景深与柔焦效果，清晰展现细腻的肌肤纹理。人物妆容自然，头发略带凌乱，整体色调为柔和温暖的马卡龙色系，光线真实自然，还带有淡淡的朦胧感，营造出轻柔舒缓的氛围。（由佩特拉・科林斯与任航风格创作） --ar 3:4 --v7 --style raw
```

<a id="prompt-335"></a>
## 案例 335：美丽的浅蓝色警服日本女子 (来源 [@MANISH1027512](https://x.com/MANISH1027512/status/1979033662294241673))

<div style="display: flex; justify-content: space-between;">
<img src="./images/335.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-美丽的浅蓝色警服日本女子">
</div>

**提示词：**
```
a young beautiful Japanese woman with porcelain skin, soft makeup and bright red lips, straight chestnut-brown hair neatly tied in a ponytail with straight bangs framing her face, wearing a fitted light-blue police uniform shirt with gold buttons and badge, a dark green flat ribbon tie knotted at the collar with two short tails hanging down like a gift bow, navy skirt, dark belt with brass buckle, white gloves, black shoes, 
sitting with her knees together and hands gently folded over a glass, calm and elegant posture, 
oxygen-fresh natural makeup look with translucent dewy base, barely-there eyeliner, soft straight brows, faint rosy blush on the cheeks, subtle inner-corner highlight that makes her eyes look bright and airy, lips a clean vivid red yet not glossy, 
her pose delicate and composed: seated on a narrow wooden bench in a cramped booth, ankles tucked slightly back, torso subtly leaning forward from the hips, forearms relaxed, gloved hands overlapping lightly above the small tumbler placed between her knees, chin slightly lowered while gazing directly at the camera, 
flanked by two older Japanese policemen in uniform on each side, 
the man on the left leaning inward from the doorway, cap slightly tilted, short-sleeve standard police shirt, one elbow resting on his knee with the hand hanging loosely, attentive and calm expression; 
the man on the right wearing a striped short-sleeve shirt with a dark tie and badge, cap set square with a gold band, arms firmly crossed over his chest, body angled toward the woman, a reserved, thoughtful look, 
inside a small dimly-lit bar filled with vintage Japanese posters, old bottles, narrow wooden walls, cluttered shelves, 
detailed physical environment: shot from the doorway so the worn wooden jambs create a frame-within-frame; scuffed varnished beams, handwritten Japanese slips and price tags pinned among utensils, cords and trinkets hanging overhead, glassware and liquor bottles stacked tight on shallow shelves, a tiny aisle underfoot, faint reflections on lacquered wood, humid air; one or two bare incandescent bulbs casting a localized amber pool of light that fades rapidly into darkness, 
camera perspective and ratio: intimate eye-level viewpoint at close conversational distance (about 1–1.5 m), classic 35mm focal feel, vertical portrait framing with a 3:4 aspect, slight center-weighted composition emphasizing the trio in a tight booth, 
warm incandescent lighting with nostalgic amber tone, low saturation colors, fine 35mm film grain texture, slightly overexposed highlights, retro 1980s analog snapshot aesthetic, candid composition, shallow depth of field, cinematic color grading, in the style of Nobuyoshi Araki and Daido Moriyama street photography --ar 3:4 --v 7
```

**中文提示词：**
```
一位年轻美丽的日本女子，有着瓷器般的肌肤、柔和的妆容和鲜红的嘴唇，栗色的直发扎成马尾辫，齐刘海修饰着她的脸型，身穿合身的浅蓝色警服衬衫，上面有金色的纽扣和徽章，深绿色的扁平丝带领带在领口处打结，两条短尾巴像礼物蝴蝶结一样垂下来，海军蓝裙子，深色腰带配黄铜扣，白手套，黑色鞋子，
她双膝并拢，双手轻轻地放在玻璃杯上，姿势平静而优雅，
氧气清新的自然妆容，透明水润的底妆，几乎看不见的眼线，柔软的直眉，脸颊上淡淡的玫瑰色腮红，微妙的内眼角高光使她的眼睛看起来明亮通风，嘴唇是干净鲜红但不油腻，
她的姿势精致而沉稳：坐在狭小隔间的一张窄木凳上，脚踝微微向后弯曲，躯干从臀部微微向前倾斜，前臂放松，戴着手套的双手轻轻重叠放在放在膝盖之间的小玻璃杯上方，下巴微微放低，直视镜头，
两侧各有两名身穿制服的年长日本警察，
左边的男人从门口探身向内，帽子微微倾斜，穿着短袖制式警服，一肘撑在膝盖上，手随意垂着，表情专注而平静；
右边的男人穿着条纹短袖衬衫，系着深色领带，戴着徽章，帽子是方形的，上面有一条金边，双臂紧紧地交叉在胸前，身体朝着女人倾斜，一副内敛、若有所思的样子，
在一个灯光昏暗的小酒吧里，摆满了复古的日本海报、旧瓶子、狭窄的木墙、杂乱的架子，
详细的物理环境：从门口拍摄，磨损的木质门框形成了一个画框；磨损的涂漆横梁、手写的日文单子​​和价格标签夹在餐具之间，电线和小饰品悬挂在头顶，玻璃器皿和酒瓶紧紧地堆放在浅浅的架子上，脚下是一条小过道，漆木上隐约的反光，潮湿的空气；一两个裸露的白炽灯泡投射出局部琥珀色的光晕，迅速消失在黑暗中，
相机视角和比例：近距离对话距离（约 1-1.5 米）的亲密视线视角，经典的 35 毫米焦距感，3：4 比例的垂直人像取景，轻微的中央重点构图，强调紧凑展位中的三人组，
温暖的白炽灯，怀旧的琥珀色调，低饱和度的色彩，细腻的 35 毫米胶片颗粒纹理，略微过度曝光的高光，复古的 1980 年代模拟快照美学，坦率的构图，浅景深，电影色彩分级，风格类似于荒木经惟和森山大道的街头摄影 -ar 3:4 --v 7
```

<a id="prompt-334"></a>
## 案例 334：全身夜景肖像 (来源 [@IamEmily2050](https://x.com/IamEmily2050/status/1966758558483272144))

<div style="display: flex; justify-content: space-between;">
<img src="./images/334.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-全身夜景肖像">
</div>

**提示词：**
```
{
    "description": "A hyper-realistic, 4K, full-body night-time portrait of a 23-year-old Korean woman with clear pale skin and long straight black hair tucked behind one ear.",
    "subject": {
      "age": 23,
      "ethnicity": "Korean",
      "skin_tone": "pale",
      "hair": {
        "colour": "black",
        "style": "long, straight, tucked behind one ear"
      },
      "pose": "standing at a frost-covered bus stop, arms folded against the cold",
      "expression": "70 % quiet annoyance, 30 % amused resignation, as if re-reading a text she regrets sending"
    },
    "outfit": {
      "top_layers": [
        "black blazer",
        "navy sweatshirt",
        "crisp white dress shirt",
        "thin black tie"
      ],
      "bottom": "ultra-short black pleated skirt",
      "legwear": "brand-new white knee-length pelerine socks",
      "footwear": "polished black shoes"
    },
    "environment": {
      "location": "night-time city bus stop",
      "ground": "icy pavement reflecting distant headlights",
      "fog": "dense, occupying the top third of the frame",
      "bus_shelter": {
        "glass": "steamed-up with one finger-drawn smiley that melts faster than the surrounding condensation"
      },
      "lighting": "cool blue-white, high contrast, cinematic"
    },
    "hidden_detail": "reflection in her left shoe: a blurred red double-decker bus that may or may not be arriving",
    "camera": {
      "angle": "low eye-level, full body in frame",
      "lens_simulation": "Phase-One medium-format realism",
      "depth_of_field": "sharp focus on subject, soft bokeh on distant lights"
    },
    "output": {
      "style": "hyper-realistic, cinematic, cool colour grading"
    }
  }
}
```

**中文提示词：**
```
{
"description": "这是一张超现实主义、4K、全身夜景肖像，照片中的一名 23 岁的韩国女性，皮肤白皙，一头长长的直黑发别在耳后。",
“主题”： {
“年龄”：23岁，
“种族”：“韩国人”，
"skin_tone": "苍白",
“头发”： {
“颜色”：“黑色”，
“style”：“长而直，塞在一只耳朵后面”
}，
"pose": "站在结霜的公交车站，双臂交叉抵御寒冷",
“表达”：“70% 是无声的恼怒，30% 是好笑的顺从，就像在重读一条她后悔发过的短信”
}，
“全套服装”： {
"顶层"：[
“黑色西装外套”，
“海军蓝运动衫”，
“清爽的白色正装衬衫”，
“细黑领带”
]，
"bottom": "超短黑色百褶裙",
"legwear": "全新白色及膝长袜",
“footwear”：“抛光黑鞋”
}，
“环境”： {
"location": "夜间城市公交车站",
“ground”：“结冰的路面反射着远处的车灯”，
"雾"："浓密，占据了画面的上三分之一"
"公交车站"：{
“玻璃”：“用手指画的笑脸被蒸腾起来，融化得比周围的冷凝水还快”
}，
“照明”：“冷蓝白色，高对比度，电影感”
}，
"hidden_​​detail": "她左脚鞋子里的倒影：一辆模糊的红色双层巴士，可能快到了，也可能还没到"
“相机”： {
"角度": "低视线，全身在画面中",
"lens_simulation": "Phase-One 中画幅真实感",
"depth_of_field": "清晰对焦主体，柔和远方灯光的散景"
}，
“输出”： {
“风格”：“超现实、电影、酷炫色彩分级”
}
}
}
```

<a id="prompt-333"></a>
## 案例 333：女生坐沙发上 (来源 [@IamEmily2050](https://x.com/IamEmily2050/status/1975554358495654236))

<div style="display: flex; justify-content: space-between;">
<img src="./images/333.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-女生坐沙发上">
</div>

**提示词：**
```
{
  "style": "High-key studio portrait, direct flash aesthetic, East Asian social media style (e.g., Ulzzang, Douyin), stylized beauty retouching.",
  "output": {
    "color_profile": "sRGB",
    "render_intent": "photo"
  },
  "subject": {
    "category": "human",
    "gender_presentation": "female",
    "ethnicity": "East Asian (e.g., Korean, Chinese)",
    "age_bracket": "young_adult",
    "body": {
      "build": "slim",
      "proportions": "natural human anatomy",
      "posture": "relaxed on sofa, seated casually",
      "pose": "seated, legs crossed and tucked close to body",
      "gesture": "Right hand raised, fingers loosely curled, back of fingers/knuckles gently supporting the chin and lower cheek.",
      "head_tilt_deg": 5
    },
    "face": {
      "expression": "Playful, alluring",
      "gaze": "right eye direct to camera",
      "eye_action": "winking with the left eye",
      "skin_tone": "Very pale porcelain (lightened aesthetic)",
      "makeup": "Stylized K-Beauty/Douyin look: flawless matte base, strong pink blush high on cheeks, pink gradient lips, defined brows, light eyeliner, emphasized Aegyo-sal",
      "features": "small beauty mark/mole under the left eye"
    },
    "hair": {
      "length": "long",
      "style": "messy high updo/bun with loose strands and curtain bangs",
      "color": "dark brown"
    },
    "wardrobe": {
      "top": "white fitted cropped camisole",
      "outerwear": "light gray zip hoodie, worn open and slightly slipping off both shoulders",
      "bottom": "white lounge shorts with drawstring",
      "footwear": "barefoot"
    }
  },
  "environment": {
    "location": "studio or minimalist interior",
    "set": "black leather sofa against a plain white or light gray wall",
    "props": "Silver laptop (Apple MacBook, logo visible) placed on the cushion to the subject's right (camera left)"
  },
  "lighting": {
    "key": {
      "source": "strobe/flash",
      "modifier": "Bare reflector or direct flash (hard source)",
      "position": "Near camera axis, slightly camera-right and above eye line",
      "effect": "Crisp, dark, well-defined cast shadows on the wall directly behind subject; strong specular highlights on skin and sofa leather."
    },
    "fill": {
      "type": "minimal/none"
    },
    "ambient": "suppressed",
    "white_balance_K": 5800
  },
  "camera": {
    "system": "Digital Camera",
    "sensor": "full-frame equivalent",
    "lens": {
      "type": "prime",
      "focal_length_mm": 50
    },
    "exposure": {
      "iso": 100,
      "aperture_f": 4.0,
      "metering": "Bright exposure, high-key aesthetic"
    },
    "focus": {
      "target": "near eye (right eye)",
      "depth_of_field": "moderate"
    },
    "framing": {
      "orientation": "vertical",
      "crop": "mid-thigh to head with room above hair",
      "angle": "eye-level",
      "composition": "subject centrally framed"
    }
  },
  "color_grade": {
    "look": "Bright, clean, slightly cool tone",
    "contrast": "High contrast",
    "saturation": "moderate, emphasized pinks"
  },
  "postprocess": {
    "noise_reduction": "high",
    "texture": "Highly smoothed skin, poreless appearance ('porcelain doll' or 'beauty filter' effect)",
    "sharpen": "selective on eyes/lashes",
    "blemish_control": "Complete removal of all blemishes and texture."
  },
  "quality_targets": [
    "accurate limb lengths and joint angles",
    "correct finger count and articulation",
    "realistic fabric tension and folds",
    "accurate winking expression"
  ],
  "negative_prompt": [
    "no altered or exaggerated body proportions",
    "no extra or fused fingers",
    "no realistic skin texture, pores, or blemishes",
    "no text or watermarks (excluding specified logos)",
    "no extreme wide-angle distortion",
    "no NSFW content",
    "no dark/moody lighting",
    "no warm tones"
  ]
}
```

**中文提示词：**
```
{
"style": "高调影棚人像，闪光灯直击美感，东亚社交媒体风格（例如Ulzzang、抖音），风格化美颜修图。",
“输出”： {
"color_profile": "sRGB",
"render_intent": "照片"
}，
“主题”： {
“类别”：“人类”，
"gender_presentation": "女性",
"ethnicity": "东亚人（例如韩国人、中国人）",
"age_bracket": "young_adult",
“身体”： {
"build": "slim",
"比例": "自然人体解剖学",
"posture": "放松地坐在沙发上，随意地坐着",
"pose": "坐着，双腿交叉，身体紧贴身体",
"gesture": "右手举起，手指松散地卷曲，手指背面/指关节轻轻支撑下巴和下脸颊。",
“头部倾斜度”：5
}，
“脸”： {
"expression": "俏皮、诱人",
"gaze": "右眼直视相机",
"eye_action": "用左眼眨眼",
"skin_tone": "非常苍白的瓷器（明亮的美学）",
"makeup": "风格化的韩妆/抖音妆容：完美哑光底妆，脸颊上浓重的粉色腮红，粉色渐变唇妆，清晰的眉毛，淡淡的眼线，强调的撒娇，
"features": "左眼下方有一颗小美人痣"
}，
“头发”： {
"length": "长",
"style": "凌乱的高髻/发髻，散落的发束和窗帘刘海",
“颜色”：“深棕色”
}，
“衣柜”： {
"top": "白色修身短款吊带背心",
“外套”：“浅灰色拉链连帽衫，敞开穿着，双肩略微滑落”，
"bottom": "白色抽绳休闲短裤",
“鞋类”：“赤脚”
}
}，
“环境”： {
"location": "工作室或简约室内",
"set": "黑色皮沙发搭配纯白色或浅灰色墙壁",
"props": "银色笔记本电脑（Apple MacBook，标志可见）放置在拍摄对象右侧的垫子上（相机左侧）"
}，
“灯光”： {
“钥匙”： {
"source": "频闪/闪光",
"modifier": "裸露的反射器或直接闪光（硬源）",
"position": "靠近相机轴，略微位于相机右侧且高于视线",
"effect": "拍摄对象正后方的墙壁上投射出清晰、暗淡、轮廓分明的阴影；皮肤和沙发皮革上出现强烈的镜面高光。"
}，
“充满”： {
“类型”：“最小/无”
}，
“环境”：“抑制”，
“白平衡K”：5800
}，
“相机”： {
"system": "数码相机",
“传感器”：“全画幅等效”，
“镜片”： {
“类型”：“主要”，
“焦距毫米”：50
}，
“接触”： {
"iso": 100,
"aperture_f": 4.0,
“测光”：“明亮的曝光，高调的美感”
}，
“重点”： {
"target": "近眼（右眼）",
"depth_of_field": "中等"
}，
“框架”：{
“方向”：“垂直”，
"crop": "从大腿中部到头部，头发上方有空间",
"角度": "视线水平",
"composition": "主体居中"
}
}，
“颜色等级”：{
"look": "明亮、干净、略带冷色调",
"contrast": "高对比度",
“饱和度”：“中等，强调粉红色”
}，
“后处理”：{
"noise_reduction": "高",
"texture": "肌肤高度光滑，无毛孔外观（‘瓷娃娃’或‘美颜滤镜’效果）",
“锐化”：“选择性地针对眼睛/睫毛”，
"blemish_control": "彻底去除所有瑕疵和纹理。"
}，
"质量目标": [
“准确的肢体长度和关节角度”，
“正确的手指计数和发音”，
“逼真的织物张力和褶皱”，
“精准的眨眼表情”
]，
"negative_prompt": [
“没有改变或夸大身体比例”，
“没有多余的或融合的手指”，
“没有真实的皮肤纹理、毛孔或瑕疵”，
“无文字或水印（指定徽标除外）”，
“没有极端的广角畸变”，
“禁止 NSFW 内容”，
“没有黑暗/忧郁的灯光”，
“没有暖色调”
]
}
```


<a id="prompt-332"></a>
## 案例 332：女生镜子自拍 (来源 [@dotey](https://x.com/dotey/status/1976485558319722711))

<div style="display: flex; justify-content: space-between;">
<img src="./images/332.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-女生镜子自拍">
</div>

**中文提示词：**
```
### **场景**
镜子自拍，御宅族电脑角落，蓝色调

---

### **主体**
* **性别表现**: 女性
* **年龄段**: 25岁左右
* **种族**: 东亚
* **身材**: 苗条，腰线分明；身材比例自然
* **肤色**: 浅中性色调
* **发型**:
    * **长度**: 及腰长发
    * **样式**: 直发，发尾微卷
    * **颜色**: 中等棕色
* **姿势**:
    * **站姿**: 站立，轻微的对立式平衡站姿（contrapposto）
    * **右手**: 手持手机挡住脸（身份被遮挡）
    * **左臂**: 在躯干旁自然下垂
    * **躯干**: 身体轻微后仰；露出腰腹
* **着装**:
    * **上衣**: 浅蓝色短款针织开衫，扣上前两颗纽扣；隐约可见蓝色法式内衣
    * **下装**: 牛仔超短裤，两侧臀部各有一个蓝色缎带蝴蝶结
    * **袜子**: 蓝白横条纹过膝长袜
    * **配饰**: 蓝色可爱吉祥物手机壳

---

### **环境**
* **描述**: 从挂墙镜中看到的卧室电脑角落
* **陈设**:
    * 白色书桌
    * 单显示器，显示着柔和的蓝色壁纸（没有可读的文字）
    * 机械键盘，白色键帽，放在蓝色桌垫上
    * 鼠标，放在小号蓝色鼠标垫上
    * PC主机在右侧，带有蓝色机箱灯效
    * PC主机上或附近有三个动漫手办
    * 墙上贴着一张佛塔海报
    * 猫形台灯，带有蓝色点缀
    * 一杯透明的玻璃水杯
    * 窗边（镜头左侧）有一株高大的绿叶植物
* **颜色替换**: 将所有原先的粉色元素（衣物和房间）替换为蓝色（婴儿蓝 -> 天空蓝/长春花蓝）。

---

### **灯光**
* **光源**: 来自镜头左侧大窗户的日光，透过薄纱窗帘
* **光线质感**: 柔和的漫射光
* **白平衡 (K)**: 5200

---

### **相机**
* **模式**: 智能手机后置摄像头通过镜子拍摄（无肖像/虚化模式）
* **等效焦距 (mm)**: 26
* **距离 (米)**:
    * 主体到镜子: 0.6
    * 相机到镜子: 0.5
* **曝光**:
    * 光圈 (f): 1.8
    * 感光度 (ISO): 100
    * 快门速度 (秒): 0.01
    * 曝光补偿 (EV): -0.3
* **对焦**: 对焦于镜中影像的躯干和短裤
* **景深**: 自然的智能手机景深（深景深）；背景清晰可辨，无人为模糊
* **构图**:
    * **宽高比**: 1:1
    * **裁剪**: 从头顶到大腿中部；画面包含书桌、显示器、PC主机和植物
    * **角度**: 从镜子的视角轻微俯拍
    * **构图备注**: 保持主体居中；为避免广角边缘拉伸，可以站远一些再进行方形裁剪

---

### **负面提示词**
* 任何地方出现粉色/品红色
* 美颜滤镜/磨皮皮肤；没有毛孔的外观
* 夸张或扭曲的人体结构
* NSFW，透视面料，走光
* 商标，品牌名，可读的用户界面文本
* 虚假的人像模式模糊，CGI/插画感
```


<a id="prompt-331"></a>
## 案例 331：走廊上的女性 (来源 [@IamEmily2050](https://x.com/IamEmily2050/status/1974108838929576299))

<div style="display: flex; justify-content: space-between;">
<img src="./images/331.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-走廊上的女性">
</div>

**提示词：**
```
{
  "scene": {
    "environment": {
      "location_type": "modern gallery hallway",
      "left_wall": "black-and-white optical swirl mural, matte finish",
      "right_wall": "framed monochrome manga panels with sparse Japanese onomatopoeia",
      "floor": "light gray polished tile with 2x2 m matte gray vinyl sheet under subject to kill reflections",
      "depth": "short corridor depth with subtle falloff",
      "clutter": "none"
    },
    "time": "indoors, artificial light",
    "mood": "cool, composed, slightly mysterious",
    "color_palette": "neutral-cool grays, olive top, desaturated denim blues"
  },
  "subject": {
    "type": "human",
    "gender": "female",
    "approx_age": "early 20s",
    "appearance": {
      "skin_tone": "fair-light with neutral undertone",
      "hair": "jet-black, very long, straight, center part; clean specular sheen",
      "face": "oval face, soft makeup, subtle gloss on lips, light eyeliner and mascara",
      "earrings": "large silver hoop earrings"
    },
    "wardrobe": {
      "top": "fitted olive/khaki ribbed tank with small rhinestone cross motifs (check glue before shoot)",
      "bottom": "high-waisted distressed denim shorts with heavy frayed hem and beige repair patches (tape rear hem flat)",
      "footwear": "out_of_frame"
    },
    "pose": {
      "stance": "leans back and slightly left with head resting against mural wall",
      "torso": "relaxed, angled 10–15° to camera",
      "arms_hands": "right arm behind torso/out_of_frame, left arm relaxed by side",
      "expression": "calm, neutral-to-soft gaze past camera",
      "chin": "slightly down; head tilt toward left shoulder"
    }
  },
  "framing_composition": {
    "shot_type": "mid-thigh portrait (three-quarter length)",
    "orientation": "vertical",
    "framing": "subject placed on left third; right third shows manga panels",
    "leading_lines": "doorframe/panel edges vertical; swirl mural adds texture without overpowering subject",
    "background_separation": "subtle; background softly defocused but still readable"
  },
  "camera": {
    "sensor": "full-frame mirrorless",
    "lens": {
      "focal_length_mm": 50,
      "type": "prime",
      "character": "neutral rendering, low distortion"
    },
    "settings": {
      "aperture": "f/3.2",
      "shutter_speed": "1/250",
      "iso": 400,
      "white_balance": "custom grey-card @ 4600 K",
      "focus": "eye-AF + 3-frame focus bracket (±1 cm)",
      "stabilisation": "IBIS on"
    },
    "perspective": "camera at chest level; minimal keystoning; maintain straight verticals"
  },
  "lighting": {
    "key": "broad, soft overhead/ceiling panel light",
    "fill": "60×60 cm white bounce 30 cm below bust line, ~1.3 stops under key",
    "rim": "narrow 1×2 ft strip-light behind subject camera-right, ½ stop over key",
    "quality": "soft, diffuse; no hard shadows",
    "exposure_target": "skin at ~65 IRE; rhinestones clipped < 90 IRE",
    "specular_control": "micro-specular on hair; avoid plastic skin sheen"
  },
  "rendering_intent": {
    "photorealism": "high",
    "texture": "retain fabric weave, denim fray strands, hair strands",
    "background_text_policy": "allow only existing manga panel text; do not invent extra signage or captions"
  },
  "post_processing": {
    "color_grade": "neutral-cool base with gentle contrast curve; slight cyan in shadows, warm bias on skin",
    "tone_curve": "soft S-curve (lift shadows +3, compress highlights -5)",
    "clarity_texture": "clarity -5 on skin via masked adjustment; texture +5 on denim/frayed hem only (separate mask)",
    "noise_reduction": "luma 10, chroma 15",
    "sharpening": "amount 40, radius 0.7, detail 25, masking 60 (protect background)",
    "vignette": "subtle -0.1 EV centre-weighted",
    "geometry": "verticals upright; crop 4:5 with space above head and right-side manga visible",
  }
```

**中文提示词：**
```
{
“场景”： {
“环境”： {
"location_type": "现代画廊走廊",
"left_wall": "黑白光学漩涡壁画，哑光饰面",
"right_wall": "带有稀疏日语拟声词的单色漫画面板",
“地板”：“浅灰色抛光瓷砖，铺有 2x2 米哑光灰色乙烯基板，以消除反射”，
"depth": "短走廊深度，具有微妙的衰减",
“杂乱”：“无”
}，
"time": "室内，人造光",
"mood": "冷静、沉着、略带神秘",
"color_palette": "中性冷灰色、橄榄色上衣、去饱和牛仔蓝"
}，
“主题”： {
“类型”：“人类”，
"性别": "女",
"approx_age": "20 岁出头",
“外貌”： {
"skin_tone": "白皙，中性底色",
“头发”：“乌黑，很长，直，中分；干净的镜面光泽”，
"face": "椭圆脸，淡妆，唇彩淡淡，眼线和睫毛膏淡淡的",
“耳环”：“大号银环耳环”
}，
“衣柜”： {
"top": "修身橄榄色/卡其色罗纹背心，饰有小水钻十字图案（拍摄前请检查胶水）",
"bottom": "高腰破洞牛仔短裤，下摆磨损严重，配有米色修片（后摆用胶带平整粘贴）",
“footwear”：“out_of_frame”
}，
“姿势”：{
"stance": "身体向后稍微向左倾斜，头靠在壁画上",
“躯干”：“放松，与相机呈 10-15° 角”，
"arms_hands": "右臂在躯干后方/超出框架，左臂在身体侧面放松",
“表情”：“平静、中性到柔和的目光穿过镜头”，
“下巴”：“稍微向下；头向左肩倾斜”
}
}，
“framing_composition”：{
"shot_type": "大腿中部肖像（四分之三长度）",
“方向”：“垂直”，
"framing": "主体放置在左边三分之一处；右边三分之一处显示漫画面板",
"leading_lines": "门框/面板边缘垂直；漩涡壁画增添了纹理，但又不会掩盖主题",
"background_separation": "微妙；背景轻微散焦但仍可读"
}，
“相机”： {
“传感器”：“全画幅无反光镜”，
“镜片”： {
"焦距毫米": 50,
“类型”：“主要”，
“character”：“中性渲染，低失真”
}，
“设置”： {
"光圈": "f/3.2",
"shutter_speed": "1/250",
“iso”：400，
"white_balance": "自定义灰卡 @ 4600 K",
"focus": "眼部自动对焦 + 3 帧对焦框 (±1 cm)",
“稳定”：“IBIS开启”
}，
“视角”：“摄像机位于胸部高度；最小梯形失真；保持垂直线”
}，
“灯光”： {
"key": "宽阔、柔和的顶灯/天花板面板灯",
"fill": "60×60 厘米白色反射镜，位于胸围线以下 30 厘米处，主光圈下方约 1.3 档",
"rim": "1×2 英尺窄条形灯位于拍摄对象相机右侧后方，比主光高出 ½ 档",
“质量”：“柔和，漫反射；无硬阴影”，
"exposure_target": "皮肤 ~65 IRE；水钻修剪 < 90 IRE",
"specular_control": "头发上的微镜面；避免塑料皮肤光泽"
}，
“渲染意图”：{
"照片写实主义": "高",
"texture": "保留织物编织、牛仔布磨损线、发丝",
"background_text_policy": "仅允许现有的漫画面板文本；不要发明额外的标志或标题"
}，
“后处理”：{
"color_grade": "中性冷色调，对比度曲线柔和；阴影中略带青色，皮肤上偏暖色",
"tone_curve": "柔和的 S 曲线（提升阴影 +3，压缩高光 -5）",
"clarity_texture": "通过蒙版调整，皮肤的清晰度为 -5；仅牛仔布/磨损下摆的纹理为 +5（单独蒙版）",
"noise_reduction": "亮度 10，色度 15",
"sharpening": "数量 40，半径 0.7，细节 25，遮罩 60（保护背景）",
"vignette": "微妙的 -0.1 EV 中央重点",
"geometry": "垂直竖直；裁剪比例为 4:5，头部上方有空间，右侧漫画可见",
}
```

<a id="prompt-330"></a>
## 案例 330：照片级真实感室内躺姿人像 (来源 [@IamEmily2050](https://x.com/IamEmily2050/status/1976068430798389550))

<div style="display: flex; justify-content: space-between;">
<img src="./images/330.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-照片级真实感室内躺姿人像">
</div>

**提示词：**
```
{
"photorealistic_indoor_reclining_portrait",
  "style": "Natural editorial portrait; lifelike texture; minimal, tasteful retouching.",
  "output": { "aspect_ratio": "9:16", "resolution_px": [1440, 2560], "color_profile": "sRGB" },

  "subject": {
    "category": "human",
    "gender_presentation": "female",
    "ethnicity": "East Asian",
    "age_bracket": "young_adult",
    "body": {
      "build": "slim with realistic proportions",
      "bust": "fuller bust (natural C–D cup), proportional to frame; gentle natural slope, supportive shaping—no extreme push-up",
      "skin_tone": "light neutral with natural variation"
    },
    "pose": {
      "orientation": "reclining on back, relaxed",
      "right_arm": "raised above head, fingers lightly touching hairline",
      "left_arm": "bent across torso, hand resting on midriff",
      "head": "slightly tilted toward camera left"
    },
    "face": {
      "shape": "oval with mild asymmetry and natural cheek volume",
      "expression": "soft and open",
      "gaze": "direct to camera"
    },
    "eyes": {
      "description": "natural-size, lively but realistic",
      "color": "neutral gray-blue (low saturation)",
      "size_ratio": { "iris_fraction_of_visible_eye": 0.29, "pupil_fraction_of_iris": 0.27 },
      "details": {
        "limbal_ring_strength": 0.08,
        "sclera_brightness_Lstar": 78,
        "sclera_texture": "fine veins and faint tear meniscus on lower lid",
        "catchlights": "two soft rectangular window reflections about 10% of iris width",
        "specular_quality": "satin (no glassy glare)",
        "iris_texture": "visible stromal fibers and subtle color noise"
      }
    },
    "makeup": "sheer base preserving pores; soft peach blush; brown mascara/liner; taupe eyeshadow; hydrated nude lips",
    "hair": { "length": "long", "style": "half-up with bun, slight wave; a few flyaways visible", "color": "natural black" },
    "wardrobe": {
      "outfit": "blue top with Gucci shorts",
      "top": "powder-blue cropped bustier with sweetheart neckline and structured cups; off-shoulder or slim straps; tasteful cleavage; opaque lined fabric; subtle corset seams; cropped length reveals a sliver of midriff",
      "bottom": "Gucci blue GG-monogram denim shorts (small-scale jacquard, navy/indigo on blue; correct 'GG' orientation; no extra text)",
      "accessories": {
        "jewelry": "thin black velvet choker with tiny pendant, small stud earrings, simple rings",
        "wrists": "white fabric scrunchie on right; delicate bracelets on left"
      }
    }
  },
     "environment": {
    "location": "bedroom",
    "set": "plush bed with slightly wrinkled off-white linens and pillows",
    "background_props": "upper right: dark round tray with small white ceramic tea set on textured brown surface"
  },

  "lighting": {
    "scheme": "window key + sheet bounce",
    "source": "large window through sheer curtains (or 120 cm softbox with double diffusion)",
    "quality": "very soft with defined direction",
    "direction": "45° from camera right and slightly top; white bedding as fill about 1.5 stops under key",
    "temperature": "5200K",
    "effect": "gentle modeling with soft nose/lip shadow; crisp but soft eye catchlights; no bloom"
  },

  "camera": {
    "sensor": "full-frame",
    "lens": { "focal_length_mm": 85 },
    "distance_m": 1.8,
    "exposure": {
      "aperture_f": 3.2,
      "iso": 200,
      "shutter_s": 0.005,
      "metering": "spot on cheekbone; ETTR then -0.3 EV to protect highlights on fabric"
    },
    "focus": {
      "target": "near eye",
      "depth_of_field": "moderate (eyes and bust plane in focus; bedding softly blurred)"
    },
    "framing": {
      "orientation": "vertical",
      "angle": "overhead with slight tilt toward face; avoid wide-angle distortion",
      "composition": "9:16 crop framed head to upper hips so bustier and Gucci shorts are visible without foreshortening"
    }
  },

  "color_grade": {
    "look": "true-to-life neutrals with blue accent",
    "contrast": "medium-low",
    "palette": "powder/indigo blues, ivory, soft brown",
    "notes": "retain skin undertones; avoid cyan cast; ensure Gucci blue reads clean without oversaturation"
  },

  "postprocess": {
    "skin": "retain pores and micro-shine; remove only transient blemishes; keep faint under-eye texture",
    "eyes": "no iris enlargement; subtle iris clarity and micro-contrast; limbal ring kept weak",
    "sharpen": "moderate on eyes/brows/hair strands and denim weave/monogram",
    "grain": "fine film grain at 1.5–2%",
    "effects": "disable beauty filters, frequency-separation blur, glow/bloom; no HDR skin"
  },

  "realism_cues": [
    "flyaway hairs around hairline",
    "subtle nasolabial and philtrum depth",
    "natural knuckle/tendon texture on left hand",
    "visible denim weave and aligned monogram on shorts",
    "fabric creases and bedding wrinkles"
  ],

  "negative_prompt": [
    "doll, BJD, porcelain skin, neotenous proportions, plastic/waxy texture",
    "oversized/anime/doe eyes, iris enlargement, glassy eyes",
    "bright cyan/ice-blue contacts, heavy limbal ring, unnaturally white sclera",
    "poreless skin, beauty filter, airbrushed, skin smoothing",
    "bloom/Orton glow, excessive skin luster",
    "CGI, 3D render, illustration, toon shading, LoRA: doll/BJD",
    "wide-angle facial distortion, extreme symmetry filter",
    "random text overlays, misspelled logos, watermarks",
    "see-through fabrics, wardrobe malfunction, underboob/sideboob, explicit NSFW",
    "distorted anatomy, extra fingers"
  ],

}
```

**中文提示词：**
```
{
"照片级真实感室内躺姿人像",
  "风格": "自然杂志风人像；逼真质感；简约且精致的修图（保留真实细节）",
  "输出参数": { "宽高比": "9:16", "分辨率（像素）": [1440, 2560], "色彩配置文件": "sRGB" },

  "拍摄主体": {
    "类别": "人物",
    "性别呈现": "女性",
    "人种": "东亚人",
    "年龄段": "年轻成人",
    "身形": {
      "体型": "纤瘦且比例真实",
      "胸部": "丰满（自然C-D罩杯），与整体身形比例协调；线条自然柔和，有承托感，无过度聚拢效果",
      "肤色": "浅中性色，带有自然肤色差异（非均匀色块）"
    },
    "姿势": {
      "整体姿态": "仰卧，姿态放松",
      "右臂": "举过头顶，手指轻触发际线",
      "左臂": "弯曲横过躯干，手搭在腹部",
      "头部": "略微向镜头左侧倾斜"
    },
    "面部": {
      "脸型": "椭圆形，略带不对称感，脸颊饱满度自然",
      "表情": "柔和、舒展",
      "目光": "直视镜头"
    },
    "眼部": {
      "描述": "大小自然，灵动且真实",
      "颜色": "中性灰蓝色（低饱和度）",
      "大小比例": { "虹膜占可见眼球比例": 0.29, "瞳孔占虹膜比例": 0.27 },
      "细节": {
        "虹膜边缘环清晰度": 0.08（近乎隐形）,
        "眼白亮度（L*值）": 78,
        "眼白质感": "细微血管，下眼睑有淡泪痕",
        "眼神光": "两处柔和的长方形窗户反光，宽度约为虹膜的10%",
        "光泽质感": "丝缎质感（无玻璃般的强光反射）",
        "虹膜纹理": "可见基质纤维，带有细微色彩颗粒感"
      }
    },
    "妆容": "轻薄底妆（保留毛孔）；柔和桃色腮红；棕色睫毛膏/眼线；灰褐色眼影；水润裸色唇膏",
    "发型": { "长度": "长发", "造型": "半扎丸子头，略带波浪；可见几根碎发", "颜色": "自然黑色" },
    "服饰": {
      "整体搭配": "蓝色上衣配古驰（Gucci）短裤",
      "上衣": "粉蓝色短款抹胸，心形领口，带立体罩杯；露肩或细肩带设计；领口弧度优雅；面料厚实不透视（带里衬）；带有精致束腰缝线；短款设计露出一小截腹部",
      "下装": "古驰（Gucci）蓝色双G提花牛仔短裤（小尺寸提花图案，藏青/靛蓝色花纹印于蓝色基底上；双G标志方向正确；无多余文字图案）",
      "配饰": {
        "珠宝": "黑色细天鹅绒项圈（带小巧吊坠）、小巧耳钉、简约戒指",
        "腕部饰品": "右手戴白色布艺发圈；左手戴精致手链"
      }
    }
  },

  "环境": {
    "场景": "卧室",
    "布景": "柔软的床，铺有略带褶皱的米白色床品和枕头",
    "背景道具": "右上角：深色圆形托盘（置于纹理棕色表面上），托盘内放有小型白色陶瓷茶具"
  },

  "光线": {
    "布光方案": "窗户主光+床单反光补光",
    "光源": "透过薄窗帘的大窗户（或120厘米双扩散柔光箱）",
    "光线质感": "极其柔和，且方向明确",
    "光线方向": "从镜头右侧45°角、略高于主体的位置入射；白色床品作为补光（亮度比主光低1.5档）",
    "色温": "5200K（标准白光）",
    "光影效果": "柔和的轮廓塑造（鼻子/唇部阴影自然）；清晰且柔和的眼神光；无光晕溢出"
  },

  "相机参数": {
    "传感器": "全画幅",
    "镜头": { "焦距（毫米）": 85 },
    "拍摄距离（米）": 1.8,
    "曝光参数": {
      "光圈值": 3.2,
      "感光度（ISO）": 200,
      "快门速度（秒）": 0.005（即1/200秒）,
      "测光方式": "点测光（测光点为颧骨）；向右曝光（ETTR）后降低0.3档曝光值，以保护面料高光细节"
    },
    "对焦": {
      "对焦目标": "靠近镜头一侧的眼睛",
      "景深": "中等（眼睛与胸部处于同一焦平面，保持清晰；床品轻微虚化）"
    },
    "构图": {
      "画面方向": "竖版",
      "拍摄角度": "俯拍，镜头略微向面部倾斜；避免广角畸变",
      "裁切比例": "9:16裁切，画面覆盖头部至髋部上方，确保抹胸与古驰短裤完整呈现，且无透视变形"
    }
  },

  "调色": {
    "风格": "真实中性色调，以蓝色为点缀色",
    "对比度": "中低",
    "色调 palette": "粉蓝/靛蓝色、米白色、柔和棕色",
    "注意事项": "保留皮肤原有底色；避免青蓝色色偏；确保古驰蓝色呈现纯净质感，无过度饱和"
  },

  "后期处理": {
    "皮肤处理": "保留毛孔与细微油光；仅去除临时瑕疵（如痘痘）；保留淡淡的眼下纹理",
    "眼部处理": "不放大虹膜；轻微增强虹膜清晰度与微对比度；保留弱虹膜边缘环",
    "锐化": "对眼睛/眉毛/发丝、牛仔面料纹理/提花图案进行适度锐化",
    "颗粒感": "添加1.5%-2%的细腻胶片颗粒",
    "效果禁用": "关闭美颜滤镜、频率分离模糊、光晕/柔光效果；不使用HDR皮肤处理"
  },

  "真实感细节提示": [
    "发际线处的碎发",
    "自然的鼻唇沟与人中立体感",
    "左手手指关节/肌腱的真实纹理",
    "短裤上清晰的牛仔面料纹理与对齐的提花图案",
    "面料褶皱与床品自然褶皱"
  ],

  "负面提示（需避免）": [
    "玩偶感、球形关节娃娃（BJD）、瓷娃娃质感皮肤、幼态化比例、塑料/蜡质质感",
    "过大眼睛/动漫眼/小鹿眼、虹膜放大、玻璃质感眼睛",
    "亮青色/冰蓝色美瞳、明显虹膜边缘环、不自然的雪白眼白",
    "无毛孔皮肤、美颜滤镜效果、磨皮过度、皮肤光滑失真",
    "光晕效果/奥顿柔光效果（Orton glow）、皮肤过度油光",
    "CGI效果、3D渲染、插画风格、卡通 shading、玩偶/球形关节娃娃（BJD）相关模型（LoRA）",
    "广角镜头面部畸变、过度对称滤镜效果",
    "随机文字叠加、logo拼写错误、水印",
    "透视装/面料过透、服饰走光、露下胸/侧胸、不雅内容（NSFW）",
    "肢体结构扭曲、多手指"
  ]
}
```


<a id="prompt-329"></a>
## 案例 329：美女竖拍肖像 (来源 [@saniaspeaks_](https://x.com/saniaspeaks_/status/1976622473107194142))

<div style="display: flex; justify-content: space-between;">
<img src="./images/329.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-美女竖拍肖像">
</div>

**提示词：**
```
A hyper-realistic 4K UHD vertical potrait (3:4) of me, preserving my exact original face and features. i am seated , slightly leaned forward with relaxed and calm expression. the background is a smooth, rich gradient of oranve and yellow tones, casting soft but vivid warm ambiet light around me, lighting is studio-grade , creating a glowing cinematic effect with gentle shadow behind me. i wear a loose , dark robe or fabric that drapes naturally. the mood is artistic and slightly surreal , with a moody, high-contrast look and a golden , warm color palette. the overall style is realistic , cinematic , and softly lit - with stunning UHD detail.
```

**中文提示词：**
```
这是一张超现实的 4K UHD 竖拍肖像（3:4），保留了我原本的面容和特征。我坐着，身体微微前倾，表情放松而平静。背景是平滑、丰富的橙色和黄色渐变色调，在我周围投射出柔和而生动的温暖氛围光，灯光是工作室级别的，在我身后形成柔和的阴影，营造出一种闪耀的电影效果。我穿着宽松的深色长袍或自然垂坠的布料。氛围充满艺术感，略带超现实主义，具有忧郁、高对比度的外观和金色、温暖的色调。整体风格逼真、具有电影感，灯光柔和，并带有令人惊叹的 UHD 细节。
```


<a id="prompt-328"></a>
## 案例 328：工作室写真风格照片 (来源 [@dotey](https://x.com/dotey/status/1977424494693151186))

<div style="display: flex; justify-content: space-between;">
<img src="./images/328.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-工作室写真风格照片">
</div>

**中文提示词：**
```
参考图1的面部特征，生成全身工作室肖像：一位英俊的年轻东亚女性坐在浅紫色背景前的地板上，穿着舒适的超大号薰衣草色粗针织毛衣、白色裙子和白色袜子，深情地抱着一个大型三丽鸥库洛米毛绒玩具，温柔地看着镜头。背景装饰有俏皮的手绘紫色涂鸦和文字，包括"A"、"ANNISA"、纸飞机和花朵，风格类似K-pop照片卡或粉丝杂志封面。光线明亮柔和，营造可爱温馨的氛围。
```


<a id="prompt-327"></a>
## 案例 327：美女电影感肖像画 (来源 [@karatademada](https://x.com/karatademada/status/1977343963745923372))

<div style="display: flex; justify-content: space-between;">
<img src="./images/327.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-美女电影感肖像画">
</div>

**提示词：**
```
A cinematic portrait of a young East Asian woman sitting gracefully at a white marble vanity table. She has long, sleek, dark brown hair parted in the middle, styled simply to frame her face. Her skin is luminous and smooth with a warm tone. She wears soft, peach-toned makeup with a light shimmer on the eyelids, subtle eyeliner, and coral lipstick that gives her a polished glow.

She’s dressed in an off-shoulder black velvet dress that accentuates her neckline and shoulders, elegant yet modern. A delicate silver necklace with a small pendant rests on her collarbone, and she wears matching silver earrings and a ring, adding a refined touch. Her posture is confident and feminine, one arm resting naturally on the marble surface, the other relaxed by her side.

The scene takes place in a softly lit vanity space with a mirror reflecting part of her silhouette. The lighting is balanced and diffused, creating a clean, luxurious look, soft shadows, no harsh highlights, and a smooth skin texture. On the vanity, there are makeup items such as a compact palette, a small decorative brush, and bottles of foundation neatly placed beside her.

The background features deep navy or dark curtains and minimalist decor, including white vases filled with dried flowers in warm autumn hues of orange, cream, and gold. The overall mood feels elegant, poised, and quietly glamorous, like a high-end beauty editorial captured on a crisp modern camera with cinematic lighting and 8K ultra-realistic clarity.

Color palette: ivory white, black velvet, warm peach tones, and soft gold floral accents.
Aspect ratio: 4:5.
Style: hyper-realistic, luxury portrait, magazine aesthetic.
```

**中文提示词：**
```
一幅充满电影感的肖像画，描绘了一位年轻的东亚女性优雅地坐在白色大理石梳妆台前。她有着一头柔顺的深棕色长发，中分，简单的发型勾勒出她精致的脸庞。她的肌肤光洁光滑，肤色温暖。她化着柔和的蜜桃色妆容，眼睑上点缀着淡淡的珠光，眼线细腻，珊瑚色唇膏则为她增添了一抹精致的光泽。

她身着一袭露肩黑色天鹅绒连衣裙，凸显了她的颈部和肩部线条，优雅而又不失现代感。一条精致的银项链搭配一枚小巧的吊坠，垂于她的锁骨上，她还佩戴了与之相配的银耳环和戒指，更添一抹精致。她的姿态自信而柔美，一只手臂自然地搭在大理石台面上，另一只手臂则放松地垂在身侧。

场景发生在灯光柔和的梳妆台上，镜子映照出她部分轮廓。光线均衡柔和，营造出干净奢华的妆容，阴影柔和，没有刺眼的高光，肌肤纹理光滑细腻。梳妆台上，她身旁整齐地摆放着一些化妆品，例如粉饼盘、小巧的装饰刷和几瓶粉底液。

背景采用深蓝色或深色窗帘，搭配简约的装饰，包括插满干花的白色花瓶，这些干花呈现出温暖的秋日色调——橙色、奶油色和金色。整体氛围优雅、沉稳，又不失低调的魅力，如同一部用清晰的现代相机，在影院级灯光和8K超高清画质下拍摄的高端美妆社论。

色调：象牙白、黑色天鹅绒、温暖的桃色调和柔和的金色花卉装饰。
长宽比：4：5。
风格：超现实主义、奢华肖像、杂志美学。
```


<a id="prompt-326"></a>
## 案例 326：电影感街头美女摄影 (来源 [@SimplyAnnisa](https://x.com/SimplyAnnisa/status/1977191937330336130))

<div style="display: flex; justify-content: space-between;">
<img src="./images/326.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-电影感街头美女摄影">
</div>

**提示词：**
```
CINEMATIC STREET PHOTOGRAPHY, STYLISH YOUNG WOMAN IN MOTION, URBAN ENVIRONMENT, MOTION BLUR EFFECT. BLURRED PEDESTRIANS PASSING BY, SHALLOW DEPTH OF FIELD, NATURAL OVERCAST LIGHTING, SOFT PASTEL TONES, EDITORIAL FASHION PHOTOGRAPHY, CANDID MOMENT, DYNAMIC MOVEMENT, FILM AESTHETIC, MUTED COLORS
```

**中文提示词：**
```
电影感街头摄影、动态中的时尚年轻女性、城市环境、动态模糊效果。匆匆而过的模糊行人、浅景深、阴天自然光、柔和的马卡龙色调、时尚杂志风格摄影、抓拍瞬间、动态感、胶片美学、低饱和度色彩
```


<a id="prompt-325"></a>
## 案例 325：美女时尚摄影 (来源 [@Prashant_1722](https://x.com/Prashant_1722/status/1977458454483874088))

<div style="display: flex; justify-content: space-between;">
<img src="./images/325.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-时尚摄影">
</div>

**提示词：**
```
{
  "prompt_title": "Effortless Chic Pose",
  "concept": "A hyperrealistic fashion photograph replicating a specific street style moment: a woman in a black knit set posing elegantly against a lamppost in a European city.",
  "scene_composition": {
    "shot_type": "Medium full-body shot",
    "camera_lens": "85mm f/1.4 lens",
    "perspective": "Eye-level, capturing the subject from the side.",
    "aspect_ratio": "2:3",
    "focus": "Sharp focus on the woman and her outfit. The background is beautifully blurred with creamy bokeh to isolate the subject."
  },
  "environment": {
    "setting": "A European city square or wide pedestrian street during the day.",
    "background_details": "The background is softly blurred but shows classical architecture with light-colored stone buildings. A few indistinct figures are walking in the distance.",
    "ground": "Light-colored stone pavers or cobblestones.",
    "atmosphere": "Chic, relaxed, and sophisticated."
  },
  "subject": {
    "primary": "A stylish young woman with long, wavy dark hair.",
    "appearance": "Her hair falls naturally over her shoulder. She has a gentle, soft expression and is looking slightly away from the camera.",
    "pose": "She is leaning with her back against a dark, ornate metal lamppost on the left side of the frame. Her right leg is bent and lifted behind her. "
  },
  "outfit_and_details": {
    "top": "A form-fitting, sleeveless black top made of a visible ribbed knit fabric.",
    "bottom": "A matching black mini skirt, also made of the same ribbed knit material.",
   "shoes": "black slingback high heel"
  },
  "style_and_aesthetics": {
    "realism": "Hyperrealistic, photorealistic, cinematic, 8K resolution, ultra-detailed.",
    "lighting": "Soft, diffused daylight, as if on an overcast day or in the shade, to prevent harsh shadows and create a flattering, even light on the subject.",
    "color_palette": "A monochrome and muted palette. Dominant blacks from the outfit and lamppost, contrasted with the light tones of the buildings and ground.",
    "details": "Emphasis on realistic material properties: the fine texture of the ribbed knit, the rough texture of the stone pavers, and the metallic finish of the lamppost."
  },
  "quality_boosters": [
    "masterpiece",
    "best quality",
    "insanely detailed",
    "sharp focus",
    "professional fashion photography",
    "street style",
    "editorial",
    "trending on Vogue"
  ],
  "negative_prompt": [
    "cartoon, anime, 3D render, illustration, painting",
    "blurry, out of focus, low quality, jpeg artifacts",
    "harsh sunlight, strong shadows",
    "crowded street, distracting background",
    "deformed anatomy, bad hands, extra limbs",
    "text, watermark, signature"
  ]
}
```

**中文提示词：**
```
{
"prompt_title": "轻松时尚的姿势",
"concept": "一张超现实主义的时尚照片，再现了特定的街头风格瞬间：一位身穿黑色针织套装的女子在欧洲城市的路灯柱前优雅地摆姿势。",
“场景构图”：{
"shot_type": "中长全身照",
"camera_lens": "85mm f/1.4 镜头",
"perspective": "视线高度，从侧面捕捉拍摄对象。",
"aspect_ratio": "2:3",
"focus": "清晰地聚焦于女人和她的服装。背景通过奶油色的散景进行精美的虚化，突出了主体。"
}，
“环境”： {
"setting": "白天的欧洲城市广场或宽阔的步行街。",
"background_details": "背景略微模糊，但显示出浅色石头建筑的古典建筑。远处有几个模糊的身影在行走。",
"ground": "浅色铺路石或鹅卵石。",
“氛围”：“别致、轻松、精致。”
}，
“主题”： {
"primary": "一位时尚的年轻女子，有着长长的、波浪状的黑发。",
"appearance": "她的头发自然地垂在肩上。她表情温柔，目光略微远离镜头。",
"pose": "她背靠着画面左侧一根深色华丽的金属灯柱。她的右腿弯曲并抬起。"
}，
“装备和细节”：{
"top": "一件合身的无袖黑色上衣，采用可见的罗纹针织面料制成。",
"bottom": "一条配套的黑色迷你裙，也采用相同的罗纹针织材料制成。",
“鞋子”：“黑色露跟高跟鞋”
}，
“风格与美学”：{
"realism": "超现实主义、照片级真实感、电影级、8K 分辨率、超精细。",
"lighting": "柔和、漫射的日光，就像在阴天或阴影中一样，可以防止出现刺眼的阴影，并为拍摄对象营造出令人愉悦、均匀的光线。",
"color_palette": "单色柔和的色调。服装和灯柱以黑色为主，与建筑物和地面的浅色调形成对比。",
"details": "强调真实的材料特性：罗纹针织的细腻质地、石材铺路石的粗糙质地以及灯柱的金属饰面。"
}，
"quality_boosters": [
“杰作”，
“极品”，
“极其详细”，
“清晰聚焦”，
“专业时尚摄影”，
“街头风格”，
“社论”，
“Vogue 流行趋势”
]，
"negative_prompt": [
“卡通、动漫、3D 渲染、插图、绘画”，
“模糊、失焦、质量低、jpeg 伪影”，
“刺眼的阳光，强烈的阴影”，
“拥挤的街道，分散注意力的背景”，
“身体畸形、手残、肢体残缺”，
“文字、水印、签名”
]
}
```

<a id="prompt-324"></a>
## 案例 324：波普艺术肖像 (来源 [@IqraSaifiii](https://x.com/IqraSaifiii/status/1969543847597277339))

<div style="display: flex; justify-content: space-between;">
<img src="./images/324.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-波普艺术肖像">
<img src="./images/324-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-波普艺术肖像">
</div>

**提示词：**
```
A vibrant, stylized pop art portrait of a [Subject]. The subject is rendered with bold, clean lines and a strong outline, reminiscent of graphic novels or character design. The [Subject] is wearing a [Color] top/jacket and [accessories]. Their hair is dynamically styled and well-groomed. The background is a solid, clean [Background Colour], ensuring the subject pops. The overall style is modern, charismatic, and slightly exaggerated for artistic effect, with crisp digital rendering and vibrant color saturation.
```

**中文提示词：**
```
这幅充满活力、风格独特的波普艺术肖像画描绘了一位[人物]。画中人物的线条粗犷、轮廓分明，令人联想起漫画小说或人物设计。[人物]身穿[颜色]上衣/夹克，搭配[配饰]。他们的发型充满活力，精心打理。背景为纯色、干净的[背景色]，确保人物形象突出。整体风格现代、魅力十足，略带夸张的艺术效果，数字渲染清晰，色彩饱和度高。
```


<a id="prompt-323"></a>
## 案例 323：角色创建 (来源 [@AleRVG](https://x.com/AleRVG/status/1971286211374252352))

<div style="display: flex; justify-content: space-between;">
<img src="./images/323.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-角色创建">
<img src="./images/323-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-角色创建">
</div>

**提示词：**
```
3d rendering, c4d, cartoon style, [ACTION-DRIVEN CHARACTER IN EXAGGERATED POSE, EXPRESSING IRONY OR DEFIANCE], [MINIMAL BACKGROUND OF CONTEXTUAL SETTING], minimalist art style, simple design, high resolution, no low-quality details, high detail,best quality, professional photography, depth of field, soft lighting, sharp focus, cinematic lighting, cinematic camera settings
```

**中文提示词：**
```
3D 渲染、C4D、卡通风格、[动作驱动角色的夸张姿势，表达讽刺或反抗]、[情境设置的最小背景]、极简艺术风格、简约设计、高分辨率、无低质量细节、高细节、最佳质量、专业摄影、景深、柔和灯光、清晰对焦、电影灯光、电影摄像机设置]
```


<a id="prompt-322"></a>
## 案例 322：产品的工作室照片 (来源 [@Kerroudjm](https://x.com/Kerroudjm/status/1969779989282246838))

<div style="display: flex; justify-content: space-between;">
<img src="./images/322.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-产品的工作室照片">
</div>

**提示词：**
```
A high-quality studio photograph of a [BRAND] fully covered in ultra-realistic [ANIMAL] texture (e.g., fur, feathers, skin, or scales), placed against a soft neutral background. The object’s original shape, key design elements, and brand identity remain clearly visible beneath the animal’s organic surface. Integrate the official logo of the brand prominently into the composition. Automatically generate a compelling and brand-appropriate slogan that draws symbolic inspiration from the animal’s qualities and matches the tone of a premium advertising campaign. The image must feature clean composition, soft shadows, minimalist styling, professional lighting, and highly detailed textures—each hair, scale, or wrinkle should be visible in sharp detail. Format 1:1.
```

**中文提示词：**
```
一张高质量的工作室照片，[品牌] 全身覆盖超逼真的 [动物] 纹理（例如毛皮、羽毛、皮肤或鳞片），置于柔和的中性背景中。在动物的自然表皮下，物体的原始形状、关键设计元素和品牌标识清晰可见。将品牌官方标识醒目地融入构图。自动生成引人注目且契合品牌形象的宣传语，该宣传语应从动物的特质中汲取象征性灵感，并与高端广告宣传的基调相符。图片必须构图清晰、阴影柔和、造型简约、灯光专业，并具有高度精细的纹理——每根毛发、鳞片或皱纹都应清晰可见。格式 1:1。
```


<a id="prompt-321"></a>
## 案例 321：产品超逼真的CGI镜头 (来源 [@aziz4ai](https://x.com/aziz4ai/status/1969500341696614569))

<div style="display: flex; justify-content: space-between;">
<img src="./images/321.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-产品超逼真的CGI镜头">
</div>

**提示词：**
```
Ultra-realistic CGI shot of a giant [PRODUCT NAME HERE], seamlessly integrated into a matching real-world environment that reflects the product’s identity, surrounded by context-specific city or nature elements, cinematic composition with natural shadows and photorealistic reflections, high Kelvin sunlight for neutral lighting, captured in HDR 8K DSLR quality, surreal yet believable visual integration, brand logo clearly visible, slogan dynamically adapted to the product’s character, dramatic and immersive atmosphere, aspect ratio 2:3
```

**中文提示词：**
```
超逼真的CGI镜头，拍摄一个巨大的 [此处填写产品名称]，无缝融入到反映产品特性的现实环境中，周围环绕着特定环境的城市或自然元素，具有自然阴影和逼真反射的电影构图，高开尔文阳光用于中性照明，以 HDR 8K DSLR 质量捕捉，超现实但可信的视觉融合，品牌标识清晰可见，标语根据产品特性动态调整，戏剧性和沉浸式氛围，宽高比为 2:3
```

<a id="prompt-320"></a>
## 案例 320：物体变成大胆的卡通滴水 (来源 [@Arminn_Ai](https://x.com/Arminn_Ai/status/1969324325162324163))

<div style="display: flex; justify-content: space-between;">
<img src="./images/320.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-物体变成大胆的卡通滴水">
</div>

**提示词：**
```
Transform the [OBJECT] from the uploaded photo into a bold, colorful cartoon illustration style, while keeping the rest of the photo realistic and unchanged. 

Cartoon style details: thick black outlines, vibrant flat colors (such as bright cyan, magenta, yellow, pink), dripping paint and splash effects, playful comic-book energy.  most drips flow downwards
The cartoon object should look like it is melting or bursting with colors, blending naturally into the real photo. 

Keep all other elements (background, other objects, environment) photorealistic with no alterations. 
High resolution, pop-art aesthetic, surreal contrast between realism and cartoon.
```

**中文提示词：**
```
将上传照片中的 [OBJECT] 转换为大胆、色彩鲜艳的卡通插图风格，同时保持照片的其余部分真实且不变。

卡通风格细节：粗黑色轮廓，鲜艳的平面色彩（如亮青色、洋红色、黄色、粉红色），滴落的油漆和飞溅效果，俏皮的漫画风格。大多数滴落的油漆向下流动
卡通物体看起来应该像是融化了或者迸发出色彩，自然地融入到真实的照片中。

保持所有其他元素（背景、其他物体、环境）的真实感，不做任何改动。
高分辨率、波普艺术美学、现实主义与卡通之间的超现实对比。
```


<a id="prompt-319"></a>
## 案例 319：照片级逼真的概念食物艺术肖像 (来源 [@AleRVG](https://x.com/AleRVG/status/1969145551846363567))

<div style="display: flex; justify-content: space-between;">
<img src="./images/319.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-照片级逼真的概念食物艺术肖像">
<img src="./images/319-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-照片级逼真的概念食物艺术肖像">
</div>

**提示词：**
```
Photorealistic conceptual food art portrait, a minimalist representation of a [SITE OF THE HOUSE] recreated entirely with [TYPE OF FOOD]. The main structure is built from [MAIN INGREDIENTS], with details such as [KEY ELEMENTS] made from [SECONDARY INGREDIENTS]. Optional features include [ADDITIONAL OBJECTS OR FURNITURE] created from [EXTRA INGREDIENTS].

Set against a [COLOR] background to emphasize the surreal food sculpture. Bright soft studio lighting, evenly diffused, casting subtle natural shadows that highlight the textures of [FOOD TEXTURES]. Fine atmospheric detail enhance realism.

Captured with a Canon EOS 5D, 85mm f/1.8 lens, shallow depth of field focusing on the cake-bed sculpture, crisp detail with soft falloff in the background. Composition framed at tabletop eye-level, medium close-up, perfectly centered. Clean high-resolution food photography style, vibrant natural colors, editorial dessert photography aesthetic
```

**中文提示词：**
```
照片级逼真的概念食物艺术肖像，极简主义地再现了[房屋位置]，完全由[食物种类]重新打造。主体结构由[主要成分]构成，细节部分，例如[关键元素]，则由[次要成分]制成。可选功能包括由[额外成分]打造的[附加物品或家具]。

以[颜色]为背景，突显超现实的食物雕塑。明亮柔和的摄影棚灯光，均匀散射，投射出微妙的自然阴影，凸显[食物纹理]的质感。精致的氛围细节增强了真实感。

使用佳能 EOS 5D 85mm f/1.8 镜头拍摄，浅景深聚焦于蛋糕床雕塑，细节清晰，背景边缘柔和。构图以桌面视线高度为准，中距特写，完美居中。清晰的高分辨率美食摄影风格，鲜艳自然的色彩，堪称甜品摄影的美学典范。
```

<a id="prompt-318"></a>
## 案例 318：益智玩具角色 (来源 [@Arminn_Ai](https://x.com/Arminn_Ai/status/1969446581788426252))

<div style="display: flex; justify-content: space-between;">
<img src="./images/318.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-益智玩具角色">
</div>

**提示词：**
```
SUBJECT: Chibi-style [CHARACTER NAME] reimagined as a Puzzle Toy character, ultra-cute proportions with oversized head and tiny stubby body.

MATERIALS:
Body and head formed entirely from interlocking jigsaw puzzle pieces
Matte pastel plastic surface with soft specular highlights
Visible puzzle cuts and notches defining the structure
Each piece slightly separated by thin seams, but tightly fitted together

DETAILS:
Large glossy chibi eyes placed across puzzle pieces, seamlessly integrated
Cute simple mouth outlined on puzzle surface
Costume colors of [CHARACTER NAME] applied piece-by-piece across the puzzle body, Character is holding a single loose puzzle piece in one hand, lifted playfully, as if showing it to the viewer, Some extra puzzle pieces floating gently around for added fun

STYLE:
Bright, educational, playful toy aesthetic, Minimal wear, no dirt, no scratches

LIGHTING:
Soft studio HDRI lighting with gentle shadows, Subtle contact shadows under puzzle seams, High contrast to show piece outlines clearly

CAMERA:
Centered, front-facing or 3/4 isometric angle, 1:1 aspect ratio, 8K render, Focus sharp on character’s face, emblem, and puzzle piece in hand

BACKGROUND:
Clean seamless pastel gradient backdrop (COLOR)
Optional scattered puzzle pieces on the floor for extra context

OUTPUT STYLE: Cute chibi proportions, Puzzle-based
```

**中文提示词：**
```
主题：将Chibi风格的 [角色名称] 重新想象成一个益智玩具角色，具有超大头部和小巧粗短身体的超可爱比例。

材料：
身体和头部完全由相互锁在一起的拼图碎片组成
哑光塑料表面，具有柔和的镜面高光
可见的拼图切口和缺口定义了结构
每块布料都由细缝稍微隔开，但紧密贴合

细节：
大而有光泽的Chibi眼睛放置在拼图碎片上，无缝集成
拼图表面上勾勒出可爱简单的嘴巴
[角色名称] 的服装颜色逐片应用于拼图主体，角色一只手拿着一块松散的拼图，俏皮地举起，好像在向观众展示它，一些额外的拼图碎片轻轻地漂浮在周围以增加乐趣

风格：
明亮、有教育意义、好玩的玩具美感，磨损极小，无污垢，无划痕

灯光：
柔和的工作室 HDRI 照明，柔和的阴影，拼图接缝下微妙的接触阴影，高对比度清晰显示作品轮廓

相机：
居中、正面或 3/4 等距角度、1:1 宽高比、8K 渲染、清晰聚焦于人物面部、徽章和手中的拼图

背景：
干净无缝柔和渐变背景（颜色）
地板上散落的拼图碎片可供选择，以提供额外的背景信息

输出风格：可爱的Q版比例，基于拼图
```


<a id="prompt-317"></a>
## 案例 317：6张复古宝丽来照片 (来源 [@ShreyaYadav___](https://x.com/ShreyaYadav___/status/1969820383487590795))

<div style="display: flex; justify-content: space-between;">
<img src="./images/317.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-6张复古宝丽来照片">
</div>

**提示词：**
```
Create an artistic collage of 6 vintage Polaroid photos, attached with a decorative rope and mini clothespins, like a home photo gallery. Each Polaroid frame has a slight fading and an old paper effect. The background is a soft pastel wall with light shadows, creating a cozy and creatively chaotic atmosphere.
Emotions and poses:
 * Light laughter — eyes closed, natural joy.
 * Dreamy gaze upwards, relaxed pose.
 * Playful wink.
 * Calm smile with a head tilted to the side.Dynamic gesture hands raised high, full of energy.

* Romantic half-glance over the shoulder.

The atmosphere is an art-retro style with elements of a '70s fashion magazine, soft diffused lighting, and muted warm and golden tones. Each photograph looks like a unique behind-the-scenes shot, with a touch of nostalgia and a sense of personal history.
```

**中文提示词：**
```
用6张复古宝丽来照片，用装饰绳和迷你衣夹固定，打造一个艺术拼贴画，就像一个家庭相册。每个宝丽来相框都略微褪色，并呈现出旧纸效果。背景是一面柔和的粉彩色墙，点缀着浅淡的阴影，营造出一种舒适而又充满创意的混乱氛围。
情绪和姿势：
* 轻松的笑声——闭上眼睛，自然的快乐。
* 梦幻般的目光向上凝视，放松的姿势。
* 顽皮的眨眼。
* 平静的微笑，头部歪向一侧。动态的手势，双手高举，充满活力。

* 浪漫地回头瞥了一眼。

店内弥漫着复古艺术的氛围，融合了70年代时尚杂志的元素，柔和的漫射灯光，以及柔和的暖金色色调。每一张照片都像是一张独特的幕后花絮，洋溢着一丝怀旧气息，也透露着个人的点滴历史。
```


<a id="prompt-316"></a>
## 案例 316：品牌字体 (来源 [@aziz4ai](https://x.com/aziz4ai/status/1940348752969322544))

<div style="display: flex; justify-content: space-between;">
<img src="./images/316.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-品牌字体">
</div>

**提示词：**
```
Create a typographic illustration shaped like a {OBJECT}, where the text itself forms the shape — bold and playful lettering style that fills the entire silhouette — letters adapt fluidly to the curves and contours of the object — vibrant and contrasting color palette that fits the theme — background is solid and enhances the focus on the main shape — vector-style, clean, high resolution, poster format, 1:1 aspect ratio.
```

**中文提示词：**
```
创建一个形状像 {OBJECT} 的印刷插图，其中文本本身形成形状 - 大胆而俏皮的字体风格填充整个轮廓 - 字母流畅地适应物体的曲线和轮廓 - 充满活力和对比的调色板适合主题 - 背景是纯色并增强了对主要形状的关注 - 矢量风格，干净，高分辨率，海报格式，1：1 宽高比。
```


<a id="prompt-315"></a>
## 案例 315：Funko Pop风格乙烯基公仔 (来源 [@Arminn_Ai](https://x.com/Arminn_Ai/status/1969848678652547334))

<div style="display: flex; justify-content: space-between;">
<img src="./images/315.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-Funko Pop风格乙烯基公仔">
</div>

**提示词：**
```
Funko Pop–style vinyl figure of [CHARACTER NAME] 
Wearing the iconic outfit and accessories typically associated with [CHARACTER], automatically matching their signature style and details.  

Pose/Expression:
- Standing, looking upward toward the camera  
- Expression: curious yet slightly nonchalant  

CAMERA & LENS:
- Camera positioned directly above, very close  
- Ultra-wide fisheye lens for dramatic perspective distortion  
- Gentle rounded frame edges  

LIGHTING & MATERIALS:
- Soft studio lighting with gentle shadows  
- Glossy vinyl figure texture for skin and hair  
- Outfit materials accentuated (e.g. quilted, shiny, matte, etc.) depending on [CHARACTER]’s clothing  

RENDER STYLE:
- High-resolution 3D render  
- Clean neutral background (solid or gradient)  
- Ultra sharp, collectible toy aesthetic
```

**中文提示词：**
```
[角色名称] 的 Funko Pop 风格乙烯基公仔
身着通常与 [角色] 相关联的标志性服装及配饰，其标志性风格与细节特征均自然呈现。
姿势 / 表情
站姿，抬头望向镜头
表情：好奇中略带漫不经心
相机与镜头
相机直接置于正上方，距离极近
超宽鱼眼镜头，营造极具张力的透视畸变效果
柔和的圆角画框边缘
光线与材质
柔和的工作室灯光，搭配自然阴影
公仔皮肤与头发采用亮面乙烯基材质质感
服装材质细节突出（如绗缝、亮面、哑光等），具体依 [角色] 的服饰特点而定
渲染风格
高分辨率 3D 渲染
简洁的中性背景（纯色或渐变色）
极致清晰的收藏级玩具美学风格
```


<a id="prompt-314"></a>
## 案例 314：电影级3D动感广告 (来源 [@aziz4ai](https://x.com/aziz4ai/status/1970017329410191505))

<div style="display: flex; justify-content: space-between;">
<img src="./images/314.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-电影级3D动感广告">
</div>

**提示词：**
```
Cinematic 3D action-packed advertisement of [PRODUCT], captured in a dramatic mid-motion scene that embodies its core energy. Use bold studio lighting with intense highlights and deep shadows, dynamic particles, and slow-motion effects to amplify impact. The environment should feel surreal yet hyperrealistic, designed to reflect the product’s personality (crunchy, energetic, fast, luxurious, refreshing, etc.). Integrate the brand logo crafted from product elements if possible, and place a sleek creative slogan beneath it that matches the mood. Composition in 1:1 aspect ratio, hyper-detailed, sharp, bold, and designed to go viral.
```

**中文提示词：**
```
[PRODUCT] 的电影级 3D 动感广告，以戏剧化的中景捕捉，展现其核心能量。运用大胆的影棚灯光、强烈的高光和深邃的阴影、动态粒子和慢动作效果来增强视觉冲击力。环境应营造超现实却又超现实的感觉，旨在体现产品的个性（清爽、活力、快速、奢华、清爽等）。尽可能融入由产品元素精心打造的品牌标识，并在其下方放置一个与氛围相符的时尚创意口号。构图采用 1:1 的宽高比，细节丰富、锐利大胆，旨在打造病毒式传播的效果。
```


<a id="prompt-313"></a>
## 案例 313：创建您自己的3D漫画 (来源 [@rovvmut_](https://x.com/rovvmut_/status/1970741858365288950))

<div style="display: flex; justify-content: space-between;">
<img src="./images/313.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-创建您自己的3D漫画">
<img src="./images/313-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-创建您自己的3D漫画">
</div>

**提示词：**
```
A highly stylized 3D caricature of me, with expressive facial features, and playful exaggeration. Rendered in a smooth, polished style with clean materials and soft ambient lighting. Bold color background to emphasize the character’s charm and presence.
```

**中文提示词：**
```
这是我高度风格化的3D漫画形象，面部特征生动，夸张的笔触俏皮。渲染风格流畅优美，材质干净，环境光柔和。背景采用大胆的色彩，突出人物的魅力和气质。
```

<a id="prompt-312"></a>
## 案例 312：品牌工作室照片 (来源 [@samann_ai](https://x.com/samann_ai/status/1968656265673871644))

<div style="display: flex; justify-content: space-between;">
<img src="./images/312.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-品牌工作室照片">
</div>

**提示词：**
```
[CHARACTER] sitting centered on an oversized puffy lounge sofa in [SOFA_COLOR], relaxed pose with one hand under chin, full-body. Clean white seamless studio, premium fashion-editorial lighting, hyper-real, minimal. Big spray-paint graffiti on the back wall reading “[TEXT]” with soft overspray and slight drips. 85mm look, crisp details, no clutter, no watermark. --ar 3:4
```

**中文提示词：**
```
[人物] 坐在一张[沙发颜色]的超大蓬松休闲沙发上，姿势放松，单手托着下巴，全身放松。干净的白色无缝工作室，高端时尚编辑灯光，超现实，极简。后墙上的大型喷漆涂鸦写着“[文本]”，喷漆略微过喷，略有滴落。85毫米画质，细节清晰，没有杂乱，没有水印。——ar 3:4
```

<a id="prompt-311"></a>
## 案例 311：切割带有卡通爆炸的物体 (来源 [@Arminn_Ai](https://x.com/Arminn_Ai/status/1968375201739177984))

<div style="display: flex; justify-content: space-between;">
<img src="./images/311.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-切割带有卡通爆炸的物体">
</div>

**提示词：**
```
cut cleanly THE [OBJECT] in half across the middle, the top and bottom halves slightly separated and floating apart.  
Between the halves, instead of the natural inside, there is a stylized cartoon nuclear explosion effect: a central vertical column of glowing yellow-orange bubble smoke, with a wide horizontal shockwave ring of round bubbly clouds spreading to the sides, fiery glowing highlights above and below the shockwave, creating the impression of intense heat and energy
The outside of the [OBJECT] remains photorealistic with detailed texture and lighting, while the inner effect is highly graphic and playful, giving a striking contrast between realism and cartoon. Studio lighting, centered composition
```

**中文提示词：**
```
将 [物体] 从中间干净利落地切成两半，上半部分和下半部分稍微分开并漂浮。
在两半之间，不是自然的内部，而是一种风格化的卡通核爆炸效果：中央垂直柱状发光的黄橙色气泡烟雾，周围扩散着一圈宽阔的水平冲击波环，圆形气泡云，冲击波上方和下方有炽热的光芒，营造出强烈的热量和能量的印象
[OBJECT] 的外部依然保持着照片级的真实感，纹理和灯光细节丰富；而内部效果则极具画面感，趣味十足，在现实主义和卡通风格之间形成了鲜明的对比。工作室灯光，居中构图
```

<a id="prompt-310"></a>
## 案例 310：秋天的落叶拼成图案 (来源 [@op7418](https://x.com/op7418/status/1967873876551233660))

<div style="display: flex; justify-content: space-between;">
<img src="./images/310.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-秋天的落叶拼成图案">
</div>

**中文提示词：**
```
中景，有阳光的午后，胶片质感，拍摄地面，秋天的落叶、树枝、银杏叶和桂花在平面上拼成了一个小猫的样子，旁边放着一杯一次性咖啡杯
```

<a id="prompt-309"></a>
## 案例 309：奢侈品牌广告 (来源 [@Arminn_Ai](https://x.com/Arminn_Ai/status/1967959906344112270))

<div style="display: flex; justify-content: space-between;">
<img src="./images/309.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-奢侈品牌广告">
</div>

**提示词：**
```
A luxury [BRAND TYPE] brand advertisement featuring four stylish [GIRLS / MEN], each posed in separate architectural window frames set, each shown in a waist-up mid-shot, fully inside the window frames, with hands and props naturally breaking the frame edges, but no legs or lower body visible, arranged in a theatrical and 2×2 symmetrical grid composition.

– one holding a [OBJECT 1] with [EXPRESSION AND ACCESSORIES]
– another holding a [OBJECT 2] with [EXPRESSION AND ACCESSORIES]
– another holding a [OBJECT 3] with [EXPRESSION AND ACCESSORIES]
– another holding a [OBJECT 4] with [EXPRESSION AND ACCESSORIES]

Each with expressive editorial facial poses, blending modern fashion with a sleek couture aesthetic.

Set against an elegant [BACKGROUND COLOR AND MATERIAL] backdrop with subtle textures, captured with bright high-fashion studio lighting that emphasizes contours, reflections, and luxury detailing.

The mood is glamorous, iconic, and prestigious, shot in the style of a high-end [BRAND TYPE] luxury campaign. 2:3 ar. all four frames clearly shown in full height, no cropping at the bottom or top.
```

**中文提示词：**
```
一则奢侈的 [品牌类型] 品牌广告，以四位时尚的 [女孩/男士] 为主角，每人摆出不同的建筑窗框姿势，每人都以半身向上的中景拍摄，完全在窗框内，手和道具自然地打破了框架边缘，但看不到腿或下半身，以戏剧性和 2×2 对称的网格构图排列。

– 一个人拿着[物体 1]，带着[表情和配饰]
– 另一人拿着 [物体 2]，带有 [表情和配饰]
– 另一人拿着 [物体 3] 和 [表情和配饰]
– 另一人拿着 [物体 4] 和 [表情和配件]

每个人都有富有表现力的面部姿势，将现代时尚与时尚的时装美学融为一体。

以优雅的 [背景颜色和材质] 背景为背景，具有微妙的纹理，并采用明亮的高级时尚工作室灯光，强调轮廓、反射和奢华细节。

拍摄风格为高端 [品牌类型] 奢侈品宣传活动，氛围迷人、标志性、尊贵。2:3 ar。四个画面均清晰地全高显示，底部或顶部均无裁剪。
```

<a id="prompt-308"></a>
## 案例 308：人物电影级渲染 (来源 [@CharaspowerAI](https://x.com/CharaspowerAI/status/1967989374731038839))

<div style="display: flex; justify-content: space-between;">
<img src="./images/308.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-人物电影级渲染">
<img src="./images/308-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-人物电影级渲染">
</div>

**提示词：**
```
Full-body shot of a [character + location], with a powerful aura of energy around [him/her] and [visual effect], [action or movement] in a dynamic pose. Realistic photography, cinematic lighting, and hyper-detailed rendering.
```

**中文提示词：**
```
[角色 + 地点] 的全身照，[他/她] 周围充满强大的能量气息，[视觉效果]，[动作或运动] 呈现动态姿势。写实摄影、电影级灯光和超精细渲染。
```

<a id="prompt-307"></a>
## 案例 307：字母动物 (来源 [@aziz4ai](https://x.com/aziz4ai/status/1968064255460249637))

<div style="display: flex; justify-content: space-between;">
<img src="./images/307.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-字母动物">
</div>

**提示词：**
```
A stylized capital letter [Letter] with a cartoon [Animal] intertwined with it, on a solid color background.
```

**中文提示词：**
```
在纯色背景上，一个艺术化设计的大写字母【字母】与一只卡通【动物】相互缠绕的图案。
```

<a id="prompt-306"></a>
## 案例 306：分层剪纸插图 (来源 [@azed_ai](https://x.com/azed_ai/status/1968631874663891175))

<div style="display: flex; justify-content: space-between;">
<img src="./images/306.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-分层剪纸插图">
<img src="./images/306-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-分层剪纸插图">
</div>

**提示词：**
```
Layered paper-cut illustration of [subject], built with overlapping shapes in soft [color1] and [color2], handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.
```

**中文提示词：**
```
[主题] 的分层剪纸插图，由柔和的 [颜色 1] 和 [颜色 2] 的重叠形状、手工制作的纹理、层间微妙的阴影、干净的矢量边缘构成，以哑光奶油色背景为中心，呈现出异想天开且现代的视觉叙事。
```

<a id="prompt-305"></a>
## 案例 305：复古漫画风格卡通插画 (来源 [@azed_ai](https://x.com/azed_ai/status/1967180553553330306))

<div style="display: flex; justify-content: space-between;">
<img src="./images/305.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-复古漫画风格卡通插画">
<img src="./images/305-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-复古漫画风格卡通插画">
</div>

**提示词：**
```
2D cartoon illustration of a [subject] mid-motion in a [dynamic action pose], drawn in vintage comic book style with bold outlines and saturated primary colors. Featuring dramatic motion streaks, exaggerated perspective, punchy panel composition, and crisp halftone texture. Designed for high-energy visual storytelling with retro superhero flair.
```

**中文提示词：**
```
2D卡通插画，描绘了一位[主体]以[动态动作姿势]的中途运动，采用复古漫画风格绘制，轮廓粗犷，色彩饱和。具有戏剧性的运动条纹、夸张的透视、富有冲击力的面板构图和清晰的半色调纹理。旨在以复古超级英雄的风格呈现充满活力的视觉叙事。
```

**场景示例：**
赛博朋克女孩以高踢腿姿势运动的场景；正在挥出重拳的机器人拳击手；年轻忍者在旋转的刀刃中穿梭；滑板少年在半管滑行中的动作

<a id="prompt-304"></a>
## 案例 304：详细技术图纸 (来源 [@CharaspowerAI](https://x.com/CharaspowerAI/status/1967264596630045063))

<div style="display: flex; justify-content: space-between;">
<img src="./images/304.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-详细技术图纸">
<img src="./images/304-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-详细技术图纸">
</div>

**提示词：**
```
Detailed technical drawing of a [vehicle, weapon, object, or item], on white paper with dimensions and annotations in red marker. [The subject] is depicted in pencil with [material or texture details], showing [list of key parts and functional elements], all in clear detail. Intricate element, detailed blueprint style with notes on its features and functionality
```

**中文提示词：**
```
白纸上[载具、武器、物体或物品]的详细技术图纸，尺寸标注及红色马克笔标注。[主体]用铅笔描绘，[材质或纹理细节]清晰可见，[关键部件和功能元素列表]清晰可见。复杂元素，采用蓝图风格，并标注其特性和功能。
```


<a id="prompt-303"></a>
## 案例 303：卡通风格的应用程序图标 (来源 [@CharaspowerAI](https://x.com/CharaspowerAI/status/1966539819158212759))

<div style="display: flex; justify-content: space-between;">
<img src="./images/303.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-卡通风格的应用程序图标">
<img src="./images/303-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-卡通风格的应用程序图标">
</div>

**提示词：**
```
Colorful, cartoon-style app icon design for a [type of app: game, movie, food, sport, etc.] logo with the text ["App Name"] and [character, symbol, or cute object + short description of its pose or action] on the front of a square button, set against a [background color / theme] with simple details. High-resolution game art and graphics for a mobile app, Pixar style, realistic.
```

**中文提示词：**
```
色彩鲜艳、卡通风格的应用图标设计，适用于[应用类型：游戏、电影、美食、运动等]的logo，其方形按钮正面印有[应用名称]文字和[人物、符号或可爱物体+其姿势或动作的简短描述]，背景颜色/主题简洁。高分辨率游戏美术和图形，适用于移动应用，皮克斯风格，逼真逼真。
```


<a id="prompt-302"></a>
## 案例 302：超写实3D漫画肖像 (来源 [@TechieBySA](https://x.com/TechieBySA/status/1966450411277058166))

<div style="display: flex; justify-content: space-between;">
<img src="./images/302.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-超写实3D漫画肖像">
</div>

**提示词：**
```
Hyper-realistic 3D caricature of [NAME], featuring an expressive, oversized head, a short body, and a detailed, energetic facial expression. Wearing [OUTFIT / SIGNATURE LOOK], striking a [POSE / ACTION]. Studio lighting, cartoonish proportions, Pixar-style 3D rendering, ultra-detailed fabric and skin textures. The body is slightly smaller than the head. 1080x1080 square format.
```

**中文提示词：**
```
[姓名] 的超写实3D漫画肖像，特点为表情丰富的超大头部、较短的身躯，以及细节丰富且充满活力的面部表情。人物身着 [服装 / 标志性造型]，摆出 [姿势 / 动作]。采用工作室灯光效果，呈现卡通化比例，运用皮克斯风格 3D 渲染技术，织物与皮肤纹理细节极致丰富。身躯比例略小于头部，画面为 1080x1080 的正方形格式。
```


<a id="prompt-301"></a>
## 案例 301：超写实肖像位于石膏中心 (来源 [@samann_ai](https://x.com/samann_ai/status/1967149018640998584))

<div style="display: flex; justify-content: space-between;">
<img src="./images/301.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-超写实肖像位于石膏中心">
</div>

**提示词：**
```
Ultra-real portrait of [CHARACTER] centered, surrounded by dozens of life-size stone busts of [CHARACTER]; warm beige museum lighting, matte alabaster texture, symmetrical composition, shallow depth of field (85mm), subtle film grain, 3:4 vertical, no text or watermark.
```

**中文提示词：**
```
[角色] 的超写实肖像位于画面中心，周围环绕着数十座与真人等大的 [角色] 石质胸像；采用温暖的米色博物馆灯光，呈现哑光雪花石膏质感，构图对称，景深较浅（85 毫米镜头），带有细微的胶片颗粒感，画面比例为 3:4 竖版，无文字及水印。
```

<a id="prompt-300"></a>
## 案例 300：制作证件照 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1963602241610551609))

<div style="display: flex; justify-content: space-between;">
<img src="./images/300.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-制作证件照">
<img src="./images/300-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-制作证件照">
</div>

**中文提示词：**
```
截取图片人像头部，帮我做成2寸证件照，要求:
1、蓝底
2、职业正装
3、正脸
4、微笑
```

<a id="prompt-299"></a>
## 案例 299：制作大头贴 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1963248968902840712))

<div style="display: flex; justify-content: space-between;">
<img src="./images/299.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-制作大头贴">
</div>

**中文提示词：**
```
用这张照片，做一个3*3的photo booth grid，每张要用不同的姿势和表情不许重复
```


<a id="prompt-298"></a>
## 案例 298：手办-ZBrush建模屏显与万代风格包装盒 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1964874262768160975))

<div style="display: flex; justify-content: space-between;">
<img src="./images/298.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-手办-ZBrush建模屏显与万代风格包装盒">
</div>

**提示词：**
```
create a 1/7 scale commercialized figure of thecharacter in the image, in a realistic styie and environment.
Place the figure on a computer desk, using a circular transparent acrylic base without any text.
On the computer screen, display the ZBrush modeling process of the figure.
Next to the computer screen, place a BANDAl-style toy packaging box printedwith the original artwork.
```

**中文提示词：**
```
NanoBanana手办提示词：
在现实的风格和环境中，创建图像中角色的 1/7 比例商业化人物形象。
将图形放置在电脑桌上，使用没有任何文字的圆形透明丙烯酸底座。
在电脑屏幕上，显示人物的ZBrush建模过程。
在电脑屏幕旁边，放置一个印有原创艺术品的BANDAl风格玩具包装盒。
```

<a id="prompt-297"></a>
## 案例 297：制作工作室拍摄肖像照 (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1963962625043169643))

<div style="display: flex; justify-content: space-between;">
<img src="./images/297.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-制作工作室拍摄肖像照">
</div>

**中文提示词：**
```
给图里的人生成工作室拍摄肖像照片,黑色背景,黑色T恤,采用侧光和半身像的构图
```


<a id="prompt-296"></a>
## 案例 296：手办-高级包装带打印机（擎天柱） (来源 [@songguoxiansen](https://x.com/songguoxiansen/status/1964874809130783108))

<div style="display: flex; justify-content: space-between;">
<img src="./images/296.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-手办-高级包装带打印机（擎天柱）">
</div>

**中文提示词：**
```
请将图片转化为一款收藏级手办。在手办后方，放置一个印有该手办图案及“open nana”名称的手办包装盒。在其旁边，添加一台正在打印该手办的高端3D打印机。在该手办包装盒前方，放置一个圆形塑料底座，放置手办。
底座的PVC材质需呈现晶莹剔透的半透明质感，且整个场景需设定在室内环境中。
```

<a id="prompt-295"></a>
## 案例 295：透明扭蛋场景模型 (来源 [@TechieBySA](https://x.com/TechieBySA/status/1964989870457438584))

<div style="display: flex; justify-content: space-between;">
<img src="./images/295.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-透明扭蛋场景模型">
</div>

**提示词：**
```
A detailed transparent gashapon capsule diorama, held between fingers, featuring [NAME] in their [ICONIC POSE / STYLE]. Inside: [short description of figure’s look, clothing, and accessories], with background elements such as [relevant setting: stadium, stage, lecture hall, etc.]. Lighting should be dramatic and cinematic, matching their theme (e.g., golden spotlight, concert glow, academic ambience). The capsule has a transparent top and a colored base (choose fitting color: e.g., royal blue, gold, black, red), decorated with [motifs related to the person]. The base is labeled with [NAME or NICKNAME] in a matching font style. The design should look like a miniature collectible, with photorealistic detail, soft bokeh, and a square 1080x1080 composition.
```

**中文提示词：**
```
一个详细的透明扭蛋场景模型，由手指捏握，扭蛋内呈现 [人物名称] 的 [标志性姿势 / 风格] 形象。
扭蛋内部细节：[简要描述人偶的外形、服饰及配饰]，背景元素包含 [相关场景：体育场、舞台、讲堂等]。
光线设计需富有戏剧感与电影质感，并契合人物主题（例如：金色聚光灯、演唱会光影、学术氛围光效）。扭蛋顶部为透明材质，底部为彩色设计（选用契合主题的颜色，如宝蓝色、金色、黑色、红色），底部装饰有 [与该人物相关的图案元素]。
扭蛋底座以匹配风格的字体标注有 [人物名称或昵称]。整体设计需呈现迷你收藏品的质感，细节超写实，搭配柔和的虚化背景，采用 1080x1080 像素的正方形构图。
```


<a id="prompt-294"></a>
## 案例 294：钩针玩偶 (来源 [@TechieBySA](https://x.com/TechieBySA/status/1964615325904998635))

<div style="display: flex; justify-content: space-between;">
<img src="./images/294.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-钩针玩偶">
</div>

**提示词：**
```
Create a 3D photorealistic and highly detailed poster in amigurumi style. The design should imitate a real handmade crochet [ANIMAL], with visible thread texture, stitching details, and soft, felted proportions. Use realistic fabric shading, subtle fuzz, and natural lighting to achieve depth. The amigurumi should have small embroidered eyes and a simplified face. Represent it in a neutral studio environment with soft shadows for a professional presentation. Gray toned background. 
```

**中文提示词：**
```
制作一张 3D 超写实风格、细节丰富的阿米古米（Amigurumi，即钩针玩偶）风格海报。设计需模拟手工钩织的 [动物名称] 造型，呈现出清晰可见的毛线纹理、钩针缝线细节，以及柔软蓬松的整体比例。
运用写实的织物阴影效果、细微的毛绒质感与自然光线，打造画面层次感。该阿米古米玩偶需搭配小巧的刺绣眼睛与简约的面部造型，置于中性风格的工作室场景中，辅以柔和阴影，呈现专业的展示效果。背景：灰色调
```


<a id="prompt-293"></a>
## 案例 293：软质高品质毛绒玩具 (来源 [@TechieBySA](https://x.com/TechieBySA/status/1964280467735101457))

<div style="display: flex; justify-content: space-between;">
<img src="./images/293.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-软质高品质毛绒玩具">
</div>

**提示词：**
```
A soft, high-quality plush toy of [CHARACTER], with an oversized head, small body, and stubby limbs. Made of fuzzy fabric with visible stitching and embroidered facial features. The plush is shown sitting or standing against a neutral background. The expression is cute or expressive, and it wears simple clothes or iconic accessories if relevant. Lighting is soft and even, with a realistic, collectible plush look. Centered, full-body view. 1080x1080.
```

**中文提示词：**
```
[角色名称]软质高品质毛绒玩具
- 采用大头设计，搭配小巧的身体与粗短的四肢
- 由毛茸茸的面料制成，可见缝线细节，面部特征则通过刺绣工艺呈现
- 玩具以坐姿或站姿呈现，背景为中性风格
- 表情可爱生动，若有相关设定，还会搭配简约服饰或标志性配饰
- 光线柔和均匀，呈现出具有收藏质感的写实毛绒玩具外观
- 画面为居中构图，展示玩具全身，尺寸比例为1080x1080
```


<a id="prompt-292"></a>
## 案例 292：3D超写实食品广告 (来源 [@aziz4ai](https://x.com/aziz4ai/status/1964059052951875780))

<div style="display: flex; justify-content: space-between;">
<img src="./images/292.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-3D超写实食品广告">
</div>

**提示词：**
```
Smooth 3D hyperrealistic food advertisement of [TYPE OF FOOD], shown with mouthwatering glossy textures and perfect lighting, placed on a dark moody surface with soft glow and cinematic blur in the background, high Kelvin lighting for golden highlights and sharp shadows, backlit to show delicious steam and dripping sauces, behind the food a bold slogan in elegant font with three words only, restaurant logo subtly placed on the plate or in the corner, rich color grading with appetite-inducing tones, ultra sharp, professional food styling, stylized render
```

**中文提示词：**
```
[食物类型]的流畅3D超写实食品广告
- 呈现令人垂涎的光泽质感与完美光线效果
- 置于深邃氛围感的表面上，背景带有柔和光晕与电影感模糊效果
- 采用高开尔文色温光线，营造金色高光与清晰阴影
- 运用逆光拍摄，展现诱人的热气与滴落的酱汁
- 食物后方以优雅字体呈现一句仅含三个单词的醒目标语
- 餐厅标志巧妙置于餐盘之上或画面角落
- 采用浓郁的色彩分级，搭配激发食欲的色调
- 极致清晰的画面质感，专业的食物造型设计，风格化渲染效果
```


<a id="prompt-291"></a>
## 案例 291：英语单词闪卡制作 (来源 [@JinsFavorites](https://x.com/JinsFavorites/status/1905097569837232327))

<div style="display: flex; justify-content: space-between;">
<img src="./images/291.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-英语单词闪卡制作">
<img src="./images/291-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-英语单词闪卡制作">
</div>

**中文提示词：**
```
你是一个英语单词闪卡制作大师, 你可以根据我输入的主题词,生成一个图片并以此拓展,比如我输入电脑,你生成一张和电脑相关的图片,并用箭头分步介绍键盘\鼠标\显示器等中文和英文
```

<a id="prompt-290"></a>
## 案例 290：食谱信息图制作 (来源 [@egeberkina](https://x.com/egeberkina/status/1906088423988875617))

<div style="display: flex; justify-content: space-between;">
<img src="./images/290.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-食谱信息图制作">
<img src="./images/290-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-食谱信息图制作">
</div>

**提示词：**
```
Create step-by-step recipe infographic for creamy garlic mushroom pasta, top-down view, minimal style on white background, ingredient photos labeled: "200g spaghetti", "150g mushrooms", "3 garlic cloves", "200ml cream", "1 tbsp olive oil", "parmesan", "parsley", dotted lines showing process steps with icons (boiling pot, sauté pan, mixing), final plated pasta shot at the bottom 
```

**中文提示词：**
```
奶油大蒜蘑菇意面分步食谱信息图制作要求
呈现视角：俯视角度
设计风格：简约风格，白色背景
食材配图及标注：需包含“200克意大利面”“150克蘑菇”“3瓣大蒜”“200毫升淡奶油”“1汤匙橄榄油”“帕玛森奶酪”“欧芹”的图片，并分别标注对应文字
制作步骤展示：用虚线标注制作流程，搭配图标（煮锅、煎锅、搅拌）说明各步骤
成品呈现：在底部展示最终装盘的意面图片
```


<a id="prompt-289"></a>
## 案例 289：我知道你很急但你先别急 (来源 [@JinsFavorites](https://x.com/JinsFavorites/status/1909646070382317736))

<div style="display: flex; justify-content: space-between;">
<img src="./images/289.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-我知道你很急但你先别急">
<img src="./images/289-2.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-我知道你很急但你先别急">
</div>

**中文提示词：**
```
别人催我时，我回复：我知道你很急，但你先别急

请为此设计表情包图片
```


<a id="prompt-288"></a>
## 案例 288：食物与运动结合的广告 (来源 [@Salmaaboukarr](https://x.com/Salmaaboukarr/status/1912961013877801177))

<div style="display: flex; justify-content: space-between;">
<img src="./images/288.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-食物与运动结合的广告">
<img src="./images/288-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-食物与运动结合的广告">
<img src="./images/288-3.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-食物与运动结合的广告">
<img src="./images/288-4.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-食物与运动结合的广告">
</div>

**提示词：**
```
Muscular African  man dunks a grilled chicken breast into a basketball hoop with 'DUNK EVERY MACRO' text, under a clear sky. Fitness-themed, with Trifecta logo.
```

**中文提示词：**
```
晴朗天空下，一位肌肉发达的非洲男子将一块烤鸡胸肉扣进篮球框，篮框上写着“扣篮，每个宏都扣篮”（DUNK EVERY MACRO）。健身主题，带有 Trifecta 标志。
```

**提示词：**
```
Fit female tennis player on court, wearing white tank top and blue skirt, swinging a frying pan like a racket. In the pan: grilled chicken, broccoli, sweet potatoes. Clear blue sky. Bold text: 'ACE EVERY MEAL.' Trifecta logo in orange, bottom right.
```

**中文提示词：**
```
球场上，身材健美的女子网球运动员身穿白色背心和蓝色裙子，像挥动球拍一样挥舞着煎锅。锅里盛着烤鸡、西兰花和红薯。湛蓝的天空。粗体字写着：“每餐都精彩。” 右下角是橙色的Trifecta标志。
```

**提示词：**
```
Muscular man in black hoodie and orange boxing gloves in dark gym, boxing a giant burrito hanging like a punching bag. Dramatic lighting. "TRIFECTA" logo in bold orange top right. Text "BEAT HUNGER TO THE PUNCH." in bold white bottom left. Humorous, intense fitness ad.
```

**中文提示词：**
```
肌肉发达的男子身穿黑色连帽衫，戴着橙色拳击手套，在昏暗的健身房里，用拳击机打着一个像沙袋一样悬挂着的巨型墨西哥卷饼。灯光效果惊艳。右上角印有醒目的橙色“TRIFECTA”标志。左下角印有醒目的白色文字“BEAT HUNGER TO THE PUNCH.” 。这则幽默风趣、充满力量的健身广告。
```

**提示词：**
```
Create a bold ad for Trifecta Nutrition: a baseball player mid-swing in a stadium, holding a giant orange spatula instead of a bat. Use the tagline 'Knock Hunger Out of the Park' in athletic-style text. Include Trifecta’s logo and orange/black branding
```

**中文提示词：**
```
为 Trifecta Nutrition 制作一则醒目的广告：一位棒球运动员在体育场挥棒，手中拿着一把巨大的橙色铲子而不是球棒。使用运动风格的文字，写上“Knock Hunger Out of the Park”（击退饥饿）的标语。同时加入 Trifecta 的标志和橙黑色品牌标识。
```

<a id="prompt-287"></a>
## 案例 287：3D纸艺作品 (来源 [@azed_ai](https://x.com/azed_ai/status/1951237016215232931))

<div style="display: flex; justify-content: space-between;">
<img src="./images/287.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-3D纸艺作品">
<img src="./images/287-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-3D纸艺作品">
</div>

**提示词：**
```
A 3D papercraft representation of [Subject], composed of layered paper cutouts, resting on a simple cardboard base. Highlights of [color 1] and [color 2] paper textures create depth and dimension. Set against a softly lit crafts room, realistic lighting, intricate paper edges, shallow depth of field
```

**中文提示词：**
```
一幅3D纸艺作品，以 [主题] 为原型，由多层剪纸组成，放置在简单的纸板底座上。[颜色 1] 和 [颜色 2] 纸张纹理的亮点营造出深度和立体感。作品背景为灯光柔和的手工房，光线逼真，纸张边缘精致，景深浅。
```

<a id="prompt-286"></a>
## 案例 286：Q版木雕人偶 (来源 [@samann_ai](https://x.com/samann_ai/status/1962939491603132563))

<div style="display: flex; justify-content: space-between;">
<img src="./images/286.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-Q版木雕人偶">
</div>

**提示词：**
```
Hyper-realistic carved wooden figurine of [CHARACTER], chibi proportions (big head, short body), standing on a plain wood block. Keep key face traits and iconic [OUTFIT/PROP]. Visible wood grain and chisel marks, matte finish. Warm studio light, soft shadow, seamless beige background. Centered full-body, slight 3/4 angle, shallow depth of field (85mm look). Ultra-detailed, photoreal, warm sepia grading. Aspect ratio [3:4].
```

**中文提示词：**
```
超写实[人物]木雕人偶，Q版比例（大头短身），站立于一块普通木块上。保留关键面部特征和标志性[服装/道具]。木纹和凿痕清晰可见，哑光饰面。工作室暖光，柔和阴影，米色背景浑然一体。全身居中，略微3/4视角，浅景深（85毫米画质）。细节丰富，照片级写实，暖棕褐色调。宽高比为[3:4]。
```

<a id="prompt-285"></a>
## 案例 285：卡通插图药丸形象 (来源 [@gnrlyxyz](https://x.com/gnrlyxyz/status/1951976345514487951))

<div style="display: flex; justify-content: space-between;">
<img src="./images/285.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-卡通插图药丸形象">
</div>

**提示词：**
```
Create a stylized cartoon illustration of [CHARACTER] with a smooth, vertical pill-shaped body (rounded on top and bottom, symmetrical left to right). The body should be a single, unified capsule shape with no limbs. Do not alter the character's core design or personality, but simplify them into this playful capsule form. Use bold black outlines, flat vector-style coloring, and simple geometric features. Give the character large, expressive eyes and a fun, exaggerated facial expression that reflects their original personality. If the character wears clothes, include a minimal, iconic version of their outfit. If they do not, keep the body clean and unclothed. Use a solid bright yellow background. Center the character in a square frame. Use only flat colors. No gradients. No shadows. No texture. No smudging. The final result should be clean, modern, vector-friendly, and clearly pill-shaped.
```

**中文提示词：**
```
为 [CHARACTER] 创建一幅风格化的卡通插图，其身体呈平滑的垂直药丸状（上下呈圆形，左右对称）。身体应为单一、统一的胶囊形状，没有四肢。不要改变角色的核心设计或个性，而是将其简化为这种俏皮的胶囊形状。使用粗黑色轮廓、扁平矢量风格的配色和简单的几何特征。赋予角色大而富有表现力的眼睛和有趣、夸张的面部表情，以反映其原始个性。如果角色穿着衣服，请包含其服装的极简标志性版本。如果没有，请保持身体干净，不穿衣服。使用纯亮黄色背景。将角色置于方形框架的中心。仅使用扁平颜色。不要使用渐变。不要使用阴影。不要使用纹理。不要使用晕染。最终结果应该干净、现代、矢量友好且清晰的药丸形状。
```

<a id="prompt-284"></a>
## 案例 284：字母毛茸茸形象 (来源 [@TechieBySA](https://x.com/TechieBySA/status/1952036222815424586))

<div style="display: flex; justify-content: space-between;">
<img src="./images/284.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-毛茸茸形象">
</div>

**提示词：**
```
Render a delightful alphabet character ‘[LETTER]’ as a lovable fuzzy being in square 1080x1080 dimensions. Transform the typography into a living creature where the letterform itself becomes the main structure. Position expressive googly eyes and a cheerful mouth as integrated features of the alphabetic design. Texture the surface with luxurious [COLOR] fuzz that mimics high-quality stuffed animal material with photorealistic fiber details.
Frame against a stark white void to maximize contrast and draw attention to the subject. Infuse the creation with [EMOTION] through strategic facial positioning and expression. Maintain elegant simplicity - avoid anatomical complications or additional appendages. Illuminate using cinematic techniques: primary key lighting to accentuate surface textures, secondary edge illumination for three-dimensional form, plus ambient fill to soften shadow contrasts. Target premium animation studio aesthetics.
```

**中文提示词：**
```
在 1080x1080 像素的正方形尺寸中，将可爱的字母 “[字母]” 渲染成一个讨人喜欢的毛茸茸形象。把字体转化为一个 “活物”，字母本身的形态作为这个形象的主体结构。添加富有表现力的活动眼球和欢快的嘴巴，并将其作为字母设计中不可或缺的组成部分。为形象表面赋予质感，覆盖上浓密的 [颜色] 绒毛 —— 这种绒毛需模拟高品质毛绒玩具的材质，呈现出具有照片级真实感的纤维细节。
以纯净的白色背景衬托主体，通过强烈对比最大程度吸引视线聚焦于这个字母形象。通过精心设计面部位置与表情，为这个创作注入 [情感]。整体保持简洁雅致的风格：避免复杂的身体结构或多余的肢体部件。采用电影级打光技巧进行照明：主光用于突出表面质感，辅助轮廓光塑造立体形态，再配合环境补光柔化阴影对比。最终呈现出顶级动画工作室的美学质感。
```

<a id="prompt-283"></a>
## 案例 283：精致纸艺折纸模型 (来源 [@Kerroudjm](https://x.com/Kerroudjm/status/1952522314299441301))

<div style="display: flex; justify-content: space-between;">
<img src="./images/283.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-精致纸艺折纸模型">
</div>

**提示词：**
```
A square 1:1 format digital photograph of an intricate paper origami model representing (MONUMENT_NAME), folded from textured colored paper and centered in the frame. Above it, the word (CITY_NAME) appears in bold origami-style letters, folded from vibrant paper using the national colors of the country, and arranged in a graceful arch. The background is soft and minimal, in a light pastel or neutral tone with subtle paper textures or abstract geometric details. Lighting is soft and diffused, casting natural shadows that enhance the depth and sharpness of each fold. The overall style is clean, realistic, and handcrafted, emphasizing material texture, geometric precision, and visual harmony.
```

**中文提示词：**
```
一张 1:1 正方形比例的数码照片，画面中央是用纹理彩纸折叠而成的精致纸艺折纸模型，该模型复刻了（纪念碑名称）的造型。模型上方，“（城市名称）” 一词以粗体折纸风格呈现：字母采用该国国色的鲜艳纸张折叠而成，整体排列成优雅的拱形。背景风格柔和简约，采用浅淡的马卡龙色系或中性色调，点缀着细微的纸张纹理或抽象几何元素。光线柔和且均匀扩散，投射出自然的阴影，既增强了每一处折痕的立体感，也让折痕轮廓更清晰。整体风格简洁、写实且充满手工质感，着重凸显材料纹理、几何精度与视觉和谐感。
```

<a id="prompt-282"></a>
## 案例 282：品牌模切乙烯基贴纸 (来源 [@TechieBySA](https://x.com/TechieBySA/status/1952747617269506187))

<div style="display: flex; justify-content: space-between;">
<img src="./images/282.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-品牌模切乙烯基贴纸">
<img src="./images/282-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-品牌模切乙烯基贴纸">
</div>

**提示词：**
```
Generate a large die-cut vinyl sticker of the [BRAND] logo with thick white border, perfectly centered on a soft light blue background. The sticker is viewed straight-on from directly above with realistic drop shadows beneath. Clean, flat design with subtle 3D depth. The sticker takes up most of the frame and maintains original brand colors. 1080x1080 square format.
```

**中文提示词：**
```
制作一款印有 [品牌] 标志的大型模切乙烯基贴纸，该贴纸带有粗白色边框，完美居中于柔和的浅蓝色背景之上。从正上方垂直正视贴纸，其下方带有逼真的投影效果。整体采用简洁的扁平化设计，同时呈现出细微的 3D 立体感。贴纸占据画面的大部分空间，并保留品牌原有的色彩。尺寸为 1080x1080 像素的正方形格式。
```


<a id="prompt-281"></a>
## 案例 281：创建Airbnb创意广告 (来源 [@egeberkina](https://x.com/egeberkina/status/1904954513145868505))

<div style="display: flex; justify-content: space-between;">
<img src="./images/281.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-创建Airbnb创意广告">
</div>

**提示词：**
```
Create Airbnb creative ad, show a suitcase opening like a dollhouse, revealing a cozy room inside, tagline: “Feel at home, anywhere.”
```

**中文提示词：**
```
创建 Airbnb 创意广告，展示一个像玩具屋一样打开的行李箱，露出里面舒适的房间，标语：“随时随地有家的感觉。”
```

<a id="prompt-280"></a>
## 案例 280：制作照片中人物的玩具 (来源 [@egeberkina](https://x.com/egeberkina/status/1905986284465574159))

<div style="display: flex; justify-content: space-between;">
<img src="./images/280.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-制作照片中人物的玩具">
<img src="./images/280-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-制作照片中人物的玩具">
</div>

**提示词：**
```
Create a toy of the person in the photo. Let it be an
action figure. Next to the figure, there should be the toy's
equipment like a football and football boot and world cup. Also,
on top of the box, write 'LIONEL MESSI and underneath it,
'GOAT'.Visualize this in a realistic way.
```

**中文提示词：**
```
制作照片中人物的玩具，做成一个可动人偶。人偶旁边要有玩具装备，比如足球、足球鞋和世界杯奖杯。另外，在包装盒顶部写上“LIONEL MESSI”，其下方写上“GOAT”。请以写实的风格呈现这一画面。
```


<a id="prompt-279"></a>
## 案例 279：俏皮现代的应用程序图标设计

<div style="display: flex; justify-content: space-between;">
<img src="./images/279.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-俏皮现代的应用程序图标设计">
<img src="./images/279-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4 Image Prompts-俏皮现代的应用程序图标设计">
</div>

**提示词：**
```
A playful and modern app icon design of a cute coffee cup character with a winking eye and smiling mouth, red-orange flame-like hair on top, minimal flat vector style, glossy highlights, soft shadows, centered composition, high contrast, vibrant colors, rounded corners, on a transparent background, icon-friendly, no text, no details outside the frame, size is 1024x1024.
```

**中文提示词：**
```
一个俏皮现代的应用程序图标设计：一个可爱的咖啡杯形象，带着眨眼的眼睛和微笑的嘴巴，顶部有橙红色火焰状的“头发”，采用极简扁平矢量风格，带有光泽高光和柔和阴影，构图居中，对比度高，色彩鲜艳，边角圆润，背景透明，适合作为图标使用，无文字，边框外无细节，尺寸为1024x1024。
```


<a id="prompt-278"></a>
## 案例 278：3D卡通钥匙扣 (来源 [@miilesus](https://x.com/miilesus/status/1916854977873535069))

<div style="display: flex; justify-content: space-between;">
<img src="./images/278.png" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-3D卡通钥匙扣">
</div>

**提示词：**
```
Create a cute 3D cartoon keychain version of the person in the uploaded photo. Transform the face and pose into a soft, simplified toy-like figure with a silicone-like smooth texture and pastel colors. Add a name tag that says "[NAME]" attached to the keychain in a playful rounded font. No background, minimal shadows. Toy product design for keychain format.
```

**中文提示词：**
```
将上传照片中的人物制作成可爱的3D卡通钥匙扣版本。将面部和姿势转变为柔和、简化的玩具般造型，具有类似硅胶的光滑质感和柔和的粉彩色调。添加一个写有“[姓名]”的姓名牌，用俏皮的圆体字附着在钥匙扣上。无背景，阴影极少。适合钥匙扣格式的玩具产品设计。
```


<a id="prompt-277"></a>
## 案例 277：极简风格插画 (来源 [@miilesus](https://x.com/miilesus/status/1913139509740314972))

<div style="display: flex; justify-content: space-between;">
<img src="./images/277.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-极简风格插画">
<img src="./images/277-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-极简风格插画">
</div>

**提示词：**
```
Create a minimalistic illustration of [object or scene] in a paper cut-out style. Use soft, pastel colors and simple shapes. Include layered paper textures and subtle shadows to create depth. Place the object on a plain background. Ensure a clean, modern, and aesthetically pleasing composition with a slightly isometric perspective.
```

**中文提示词：**
```
创作一幅[物体或场景]的极简风格插画，采用剪纸艺术风格。使用柔和的 pastel（粉蜡笔色调的）色彩和简单的形状。融入分层的纸张纹理和细微的阴影以营造深度感。将物体置于纯色背景上。确保构图简洁、现代且富有美感，并采用略带等距的透视角度。
```


<a id="prompt-276"></a>
## 案例 276：马赛克彩色玻璃徽章 (来源 [@miilesus](https://x.com/miilesus/status/1925157350068900103))

<div style="display: flex; justify-content: space-between;">
<img src="./images/276.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-马赛克彩色玻璃徽章">
<img src="./images/276-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-马赛克彩色玻璃徽章">
</div>

**提示词：**
```
create image:
{
  "style": "mosaic stained glass emblem",
  "object": "brand logo",
  "brand": {
    "name": "Spotify",
    "logo_shape": "circular",
    "icon_style": "three curved bars",
    "color_palette": {
      "primary": "#1DB954",
      "secondary": "#1ED760",
      "glass_variants": ["#147A3E", "#0F5C30", "#26C178"]
    }
  },
  "material": {
    "type": "colored glass",
    "effect": "semi-transparent with light reflections",
    "outline": {
      "color": "#111111",
      "width": "medium",
      "style": "lead-line traditional mosaic"
    }
  },
  "composition": {
    "layout": "logo composed of tessellated glass pieces",
    "geometry": "irregular but fitted glass shapes",
    "contrast": "dark outlines define shape clearly"
  },
  "lighting": {
    "type": "diffused natural light",
    "highlight": "glass texture and color depth emphasized"
  },
  "background": {
    "type": "flat surface",
    "color": "#F4F4F4"
  },
  "camera": {
    "angle": "top-down",
    "focus": "centered on entire logo"
  },
  "render": {
    "quality": "high",
    "shadows": "soft",
    "reflections": "minimal"
  }
}
```

**中文提示词：**
```
创建图像：
{
  "风格": "马赛克彩色玻璃徽章",
  "对象": "品牌标志",
  "品牌": {
    "名称": "Spotify",
    "标志形状": "圆形",
    "图标风格": "三条弯曲的长条",
    "色彩搭配": {
      "主色": "#1DB954",
      "辅助色": "#1ED760",
      "玻璃变体色": ["#147A3E", "#0F5C30", "#26C178"]
    }
  },
  "材质": {
    "类型": "彩色玻璃",
    "效果": "半透明带光线反射",
    "轮廓": {
      "颜色": "#111111",
      "宽度": "中等",
      "风格": "传统马赛克铅线"
    }
  },
  "构图": {
    "布局": "由镶嵌玻璃片组成的标志",
    "几何形状": "不规则但拼接契合的玻璃造型",
    "对比度": "深色轮廓清晰界定形状"
  },
  "光线": {
    "类型": "漫射自然光",
    "高光": "突出玻璃质感和色彩深度"
  },
  "背景": {
    "类型": "平面",
    "颜色": "#F4F4F4"
  },
  "镜头": {
    "角度": "俯视",
    "焦点": "居中于整个标志"
  },
  "渲染": {
    "质量": "高",
    "阴影": "柔和",
    "反射": "轻微"
  }
}
```


<a id="prompt-275"></a>
## 案例 275：品牌着陆页-年轻女性运动后的面部特写 (来源 [@michalmalewicz](https://x.com/michalmalewicz/status/1924844232495284571))

<div style="display: flex; justify-content: space-between;">
<img src="./images/275.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-创作一张年轻女性运动后的面部特写">
</div>

**提示词：**
```
Create a closeup face of a young woman after a workout, sweaty, deep blue eyes, with a bit of blurred gym background on the left side of the photo, 5:3 proportions, she's looking right at the camera, some freckles and messy hair, beautiful, editorial
```

**中文提示词：**
```
创作一张年轻女性运动后的面部特写：她满头大汗，有着深蓝色的眼睛，照片左侧是略微模糊的健身房背景，比例为5:3。她正直视镜头，脸上有一些雀斑，头发有些凌乱，整体呈现出美丽的 editorial（时尚编辑风格）效果。
```


<a id="prompt-274"></a>
## 案例 274：创作漫画风格插画 (来源 [@miilesus](https://x.com/miilesus/status/1921944436684038496))

<div style="display: flex; justify-content: space-between;">
<img src="./images/274.png" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-创作漫画风格插画">
</div>

**提示词：**
```
create comic style illustration:
{
"style": "comic book illustration",
"line_art": {
"type": "bold black outlines",
"thickness": "medium",
"detail": "emphasized contours and shading lines"
},
"coloring": {
"palette": "vibrant and saturated colors",
"shading": "halftone dots and cel shading",
"highlighting": "strong contrast with pop art effects"
},
"texture": {
"surface": "flat with visible ink strokes",
"effect": "printed comic paper texture"
},
"composition": {
"layout": "centered subject",
"background": "simple with radial burst or comic-style lines",
"framing": "comic panel border"
},
"lighting": {
"type": "dramatic",
"angle": "top-left with bold highlights and shadows"
},
"post_processing": {
"effect": ["halftone dots", "ink outline", "grain"],
"saturation": "high",
"contrast": "high"
},
"mood": "dynamic and action-oriented",
"format": "vertical or square depending on original image"
}
```

**中文提示词：**
```
创作漫画风格插画：
{
"风格": "漫画书插画",
"线稿": {
"类型": "粗黑轮廓线",
"粗细": "中等",
"细节": "突出的轮廓和阴影线条"
},
"上色": {
"调色板": "鲜艳饱和的色彩",
"阴影": "半色调网点和赛璐珞 shading",
"高光": "强烈对比，带有波普艺术效果"
},
"质感": {
"表面": "平坦，带有可见的笔触",
"效果": "印刷漫画纸质感"
},
"构图": {
"布局": "主体居中",
"背景": "简洁，带有放射状爆发图案或漫画风格线条",
"边框": "漫画分镜边框"
},
"光线": {
"类型": "戏剧性",
"角度": "左上角，带有强烈的高光和阴影"
},
"后期处理": {
"效果": ["半色调网点", "墨水轮廓", "颗粒感"],
"饱和度": "高",
"对比度": "高"
},
"氛围": "充满动感和动作感",
"格式": "根据原图，为竖版或正方形"
}
```


<a id="prompt-273"></a>
## 案例 273：超现实主义极简概念广告 (来源 [@aziz4ai](https://x.com/aziz4ai/status/1927459345790288258))

<div style="display: flex; justify-content: space-between;">
<img src="./images/273.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-超现实主义极简概念广告">
</div>

**提示词：**
```
“{BRAND or PRODUCT NAME}” — surreal minimal conceptual advertisement
Create a 1:1 high-resolution poster that reimagines the brand/product as a surreal object of desire using minimal elements and symbolic storytelling.

• Visual Style: ultra-clean background (light or muted tone), soft lighting, strong negative space
• Scene Concept: transform the essence of the product into a metaphorical or dreamlike scene
• Add a short, punchy slogan (2–3 words) that emotionally resonates with the concept
• Include the brand’s logo in a clean, modern style (integrated naturally into the layout)
• Composition: centered or rule-of-thirds alignment, use shadows and depth tastefully
• Mood: artistic, elegant, and thought-provoking — like a museum installation
• No clutter, no realism overload — just conceptual clarity
```

**中文提示词：**
```
“{品牌或产品名称}”——超现实主义极简概念广告
创建 1：1 高分辨率海报，使用最少的元素和象征性的故事讲述将品牌/产品重新想象为超现实的欲望对象。

• 视觉风格：超干净的背景（浅色或柔和的色调）、柔和的灯光、强烈的负空间
• 场景概念：将产品本质转化为隐喻或梦幻般的场景
• 添加一个简短、有力的口号（2-3 个词），在情感上与概念产生共鸣
• 以简洁、现代的风格包含品牌标识（自然融入布局）
• 构图：居中或三分法对齐，巧妙运用阴影和深度
• 氛围：艺术、优雅、发人深省——就像博物馆装置
• 没有混乱，没有现实主义超载——只有概念清晰
```


<a id="prompt-272"></a>
## 案例 272：铅笔素描画 (来源 [@CharaspowerAI](https://x.com/CharaspowerAI/status/1895481600592269400))

<div style="display: flex; justify-content: space-between;">
<img src="./images/272.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-铅笔素描画">
<img src="./images/272-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-铅笔素描画">
</div>

**提示词：**
```
A pencil drawing of [Your character], with detailed lines and shading on white paper, capturing the energy and strength in his muscular body [with element effects] around  the character, in a dynamic pose,   tattoo design on paper, manga art style, dark background, high contrast, strong shadows, light and shadow effects, black ink drawing,  dynamic pose
```

**中文提示词：**
```
一幅[你的角色]的铅笔素描画，在白纸上用细致的线条和阴影描绘，捕捉其肌肉发达的身体中蕴含的活力与力量，角色周围带有[元素效果]，呈现出充满动感的姿势，纸上有纹身图案，采用漫画艺术风格，背景偏暗，对比度高，阴影强烈，有光影效果，为黑色墨水画，姿势富有动感。
```


<a id="prompt-271"></a>
## 案例 271：超现实几何艺术风格的数字插画 (来源 [@fy360593](https://x.com/fy360593/status/1945042543609008235))

<div style="display: flex; justify-content: space-between;">
<img src="./images/271.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-超现实几何艺术风格的数字插画">
<img src="./images/271-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-超现实几何艺术风格的数字插画">
</div>

**提示词：**
```
Transform this image into a digital illustration with a surreal, geometric art style. Apply glitch textures, abstract shapes, and cinematic composition. Use the original photo’s lighting and color palette to guide the atmosphere, while reimagining the scene in a stylized, dreamy, retro-futuristic way.
```

**中文提示词：**
```
将这张图片转换为具有超现实几何艺术风格的数字插画。应用故障纹理、抽象形状和电影化构图。以原始照片的光线和色彩为基调来营造氛围，同时以一种风格化、梦幻且复古未来主义的方式重新构想这个场景。
```

<a id="prompt-270"></a>
## 案例 270：乐高超级英雄摆出充满动感的动作姿势 (来源 [@TechieBySA](https://x.com/TechieBySA/status/1953186625871331674))

<div style="display: flex; justify-content: space-between;">
<img src="./images/270.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-乐高超级英雄摆出充满动感的动作姿势">
</div>

**提示词：**
```
Epic LEGO [SUPERHERO] in dynamic action pose showcasing their signature powers, wearing their iconic costume with authentic colors and details, dramatic stormy sky with brilliant lightning bolts illuminating the scene, heroic stance amid swirling LEGO debris and flying bricks, small LEGO minifigures scattered throughout the scene watching in awe, cinematic movie poster composition with photorealistic rendering, epic superhero atmosphere with rich saturated colors, professional depth of field and dramatic lighting effects, 1080x1080 square format
```

**中文提示词：**
```
史诗级乐高【超级英雄】摆出充满动感的动作姿势，展现其标志性超能力，身着标志性服装，色彩和细节真实还原。戏剧性的暴风雨天空中，耀眼的闪电照亮整个场景。超级英雄摆出英勇姿态，周围是旋转的乐高碎片和飞舞的积木块，场景中散落着小型乐高小人仔，它们正惊叹地注视着这一切。整体采用电影海报式构图，配以逼真渲染效果，营造出史诗般的超级英雄氛围，色彩浓郁饱和，运用专业的景深和富有戏剧性的光影效果，尺寸为1080x1080的正方形格式。
```

<a id="prompt-269"></a>
## 案例 269：透明X光扫描面板后面 (来源 [@TheRelianceAI](https://x.com/TheRelianceAI/status/1953431382836859074))

<div style="display: flex; justify-content: space-between;">
<img src="./images/269.png" style="width: 48%;" alt="Awesome GPT4o/G极T-4o Image Prompts-透明X光扫描面板后面">
<img src="./images/269-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-透明X光扫描面板后面">
</div>

**提示词：**
```
Two anime-style characters standing behind a futuristic transparent X-ray scanning panel, each leaning on it casually. Their full bodies are visible through the glowing glass as stylized, semi-transparent X-ray scans. [INSERT SCAN DETAILS HERE — e.g. hybrid anatomy, supernatural markings, implants, etc.]. Futuristic sci-fi interface overlays on the glass, with holographic HUD elements and glowing digital text. The background is minimal and sterile, resembling a high-tech medical chamber. The characters are [INSERT CHARACTER NAMES & DESCRIPTION HERE — appearance, expression, outfit], drawn in modern high-quality anime style. The scene uses soft colored lighting (e.g. cyan, pink, red depending on the pair), expressive animation, and cinematic composition.
```

**中文提示词：**
```
两个动漫风格的角色站在一个未来感的透明X光扫描面板后面，各自随意地靠在面板上。透过发光的玻璃，可以看到他们的全身呈现出风格化的半透明X光扫描效果。【在此插入扫描细节——例如混合解剖结构、超自然标记、植入物等】。玻璃上叠加着未来科幻界面，还有全息平视显示元素和发光的数字文本。背景简洁而无菌，类似一个高科技医疗舱。角色是【在此插入角色姓名和描述——外貌、表情、服装】，采用现代高品质动漫风格绘制。场景使用柔和的彩色灯光（例如根据角色组合使用青色、粉色、红色等），富有表现力的动态效果和电影化的构图。
```

<a id="prompt-268"></a>
## 案例 268：童趣插画 (来源 [@gnrlyxyz](https://x.com/gnrlyxyz/status/1953477354161848322))

<div style="display: flex; justify-content: space-between;">
<img src="./images/268.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-童趣插画">
<img src="./images/268-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-童趣插画">
</div>

**提示词：**
```
Create a full body, flat vector illustration of [CHARACTER] in a whimsical, wavy cartoon style. Use thin black outlines and smooth, rounded shapes. The character should have a tiny white-colored head with tiny dot eyes and a simple nose and mouth. The body should have exaggerated, playful proportions. Use bold, flat colors for the clothing. No gradients. No shading. No smudging. Place the character on a solid blue background. Vector friendly. Square aspect ratio.
```

**中文提示词：**
```
创作一幅[角色]的全身扁平矢量插画，采用异想天开的波浪卡通风格。使用纤细的黑色轮廓和流畅的圆形造型。角色应有一个小小的白色头部，上面有极小的圆点眼睛以及简单的鼻子和嘴巴。身体比例要夸张且富有童趣。服装采用鲜明的扁平色彩。不使用渐变、阴影和晕染效果。将角色置于纯蓝色背景上。适合矢量格式。采用正方形比例。
```

<a id="prompt-267"></a>
## 案例 267：一个复古茶包 (来源 [@TheRelianceAI](https://x.com/TheRelianceAI/status/1955240654440894730))

<div style="display: flex; justify-content: space-between;">
<img src="./images/267.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-一个复古茶包">
<img src="./images/267-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-一个复古茶包">
</div>

**提示词：**
```
A single vintage tea bag lying on a clean white background, hand-painted with an intricate illustration resembling a book cover. The tea bag has delicate aged paper texture, soft warm lighting, and realistic details. On the painted design, leave a clear blank space labeled [BOOK] for the book title. Cinematic, high-resolution, vertical format 9:16.
```

**中文提示词：**
```
一个复古茶包孤零零地放在干净的白色背景上，上面手绘着类似书籍封面的复杂图案。这个茶包有着细腻的陈旧纸张质感，搭配柔和温暖的光线，细节逼真。在手绘图案上，留出一块清晰的空白区域，并标注为【BOOK】，用于填写书名。整体呈现电影般的质感，高分辨率，采用9:16的竖版格式。
```

<a id="prompt-266"></a>
## 案例 266：树上挂着产品 (来源 [@TheRelianceAI](https://x.com/TheRelianceAI/status/1956047431117770925))

<div style="display: flex; justify-content: space-between;">
<img src="./images/266.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-树上挂着产品">
<img src="./images/266-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-树上挂着产品">
</div>

**提示词：**
```
A hyper-realistic photograph of a tree in a scenic meadow, with a sturdy, detailed bark trunk and lush green leaves, where instead of fruits, the branches naturally bear [PRODUCT], seamlessly integrated into the foliage, with realistic textures, natural lighting, soft shadows, subtle imperfections, shot at eye level with a shallow depth of field, ultra-detailed, 8k
```

**中文提示词：**
```
一张超写实的照片，画面中是一片风景优美的草地上的一棵树。树干坚固，树皮纹理清晰，树叶郁郁葱葱、绿意盎然。树枝上长的不是果实，而是自然悬挂着[产品]，它们与树叶无缝融合，纹理逼真。照片采用自然光线，搭配柔和的阴影，带有细微的瑕疵，以平视角度拍摄，景深较浅，细节极致丰富，分辨率为8k。
```

<a id="prompt-265"></a>
## 案例 265：品牌杂志 (来源 [@TheRelianceAI](https://x.com/TheRelianceAI/status/1957095226813649166))

<div style="display: flex; justify-content: space-between;">
<img src="./images/265.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-品牌杂志">
<img src="./images/265-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-品牌杂志">
</div>

**提示词：**
```
A hyper-realistic editorial concept for a collaboration between [BRAND] and [MAGAZINE BRAND]. Square 1:1 composition, shot in a sleek Parisian interior with marble floors and tall windows, golden afternoon light illuminating the scene. A single model in a couture gown poses gracefully beside a realistically sized [BRAND] perfume bottle with the [BRAND] logo clearly visible placed on a marble pedestal. Ultra-refined textures, cinematic realism, Vogue-style photography.
```

**中文提示词：**
```
一个超写实的编辑概念，用于[品牌]与[杂志品牌]的合作。1:1的正方形构图，在时尚的巴黎室内拍摄，室内设有大理石地板和高大的窗户，金色的午后阳光照亮整个场景。一位身着高级定制礼服的模特优雅地摆着姿势，身旁是一个尺寸逼真的[品牌]香水瓶，瓶身上清晰可见[品牌]的标志，香水瓶放置在大理石基座上。超精细的纹理，电影般的写实感，《 Vogue》风格的摄影。
```

<a id="prompt-264"></a>
## 案例 264：纸制玩具版本 (来源 [@TechieBySA](https://x.com/TechieBySA/status/1961411111879594453))

<div style="display: flex; justify-content: space-between;">
<img src="./images/264.png" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-纸制玩具版本">
</div>

**提示词：**
```
Ultra-detailed render of a [CHARACTER NAME] paper toy version in box form (papertoy) made from matte folded cardboard and cut with visible paper texture, clean edges and neat folds. Cubic head and body, square extremities, simplified facial features, flat printed colors and subtle shading for greater depth. The clothing and accessories faithfully imitate the appearance of the reference image in a minimalist geometric papercraft style, maintaining compact proportions and chibi style. Neutral studio lighting, soft shadows, smooth background, photorealistic product photography, 4K, no text or logos. 1080x1080 dimension.
```

**中文提示词：**
```
超细节渲染的[角色名称]纸制玩具版本，呈盒子形状（纸制玩具），由哑光折叠纸板制成，带有可见的纸张纹理，边缘干净，折叠整齐。头部和身体为立方体，四肢为方形，面部特征简化，采用平面印刷色彩和微妙阴影以增强深度。服装和配饰以极简几何纸艺风格忠实地模仿参考图的外观，保持紧凑比例和Q版风格。中性工作室灯光，柔和阴影，平滑背景，逼真的产品摄影效果，4K分辨率，无文字或标志。尺寸为1080x1080。
```

<a id="prompt-263"></a>
## 案例 263：低多边形马赛克风格 (来源 [@fy360593](https://x.com/fy360593/status/1945118291703284152))

<div style="display: flex; justify-content: space-between;">
<img src="./images/263.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-低多边形马赛克风格">
<img src="./images/263-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-低多边形马赛克风格">
</div>

**提示词：**
```
Transform this image into a refined low-poly mosaic style. Preserve the original structure and recognizable details, especially facial features and contours. Use small, high-density polygons to maintain clarity and identity while creating a crystalline, faceted look. Keep the original color palette for a harmonious and natural aesthetic. Avoid altering or adding new elements.
```

**中文提示词：**
```
将这张图片转换为精致的低多边形马赛克风格。保留原始结构和可识别的细节，尤其是面部特征和轮廓。使用小而密集的多边形，在保持清晰度和辨识度的同时，营造出水晶般的多面效果。保留原始色调，以获得和谐自然的美感。避免修改或添加新元素。
```

<a id="prompt-262"></a>
## 案例 262：街头顽童（Gorillaz）风格插画 (来源 [@azed_ai](https://x.com/azed_ai/status/1942586412920103180))

<div style="display: flex; justify-content: space-between;">
<img src="./images/262.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-街头顽童（Gorillaz）风格插画">
<img src="./images/262-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-街头顽童（Gorillaz）风格插画">
</div>

**提示词：**
```
Restyle this image into a gritty Gorillaz-style illustration, bold thick black outlines, sharp angular edges, flat expressive lighting, stylized high-contrast shadows, dirty distressed surface textures, muted color palette: washed-out teals, olive greens, rusty reds, mustard yellows, dusty browns, raw grungy urban atmosphere, comic book flatness mixed with painterly grit, hand-drawn finish with faded gradients, graphic novel aesthetic
with a rebellious, animated tone, dark stylish tone, full of attitude.
```

**中文提示词：**
```
将这张图片重新设计成粗粝的街头顽童（Gorillaz）风格插画，采用粗重的黑色轮廓线、锐利的棱角、扁平化的富有表现力的光线、风格化的高对比度阴影、粗糙破旧的表面纹理；色彩搭配柔和暗淡：褪色的蓝绿色、橄榄绿、锈红色、芥末黄、土褐色；营造出原始粗粝的都市氛围，融合漫画的扁平化与绘画的颗粒感，带有褪色渐变效果的手绘质感，呈现出漫画小说的美学风格，整体基调叛逆、生动且时尚暗黑，充满个性。
```

<a id="prompt-261"></a>
## 案例 261：城市糖果传奇的风格 (来源 [@miilesus](https://x.com/miilesus/status/1939690110418833592))

<div style="display: flex; justify-content: space-between;">
<img src="./images/261.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-城市糖果传奇的风格">
<img src="./images/261-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-城市糖果传奇的风格">
</div>

**提示词：**
```
A colorful, playful 2D map of [city name], in the style of Candy Crush Saga, featuring the city’s iconic landmarks as candy-inspired buildings, cute gumdrop trees, licorice bridges, pastel roads, and glossy water elements, floating clouds, vibrant cartoon style, top-down view, kid-friendly game aesthetics, horizontal layout
```

**中文提示词：**
```
一幅色彩丰富、充满童趣的[城市名称]2D地图，采用《糖果传奇》的风格，将城市的标志性地标设计成糖果风格的建筑，还有可爱的软糖树、甘草桥、柔和色调的道路、富有光泽的水域元素、漂浮的云朵，整体为鲜艳的卡通风格，采用俯视视角，具有适合儿童的游戏美学，为横向布局。
```

<a id="prompt-260"></a>
## 案例 260：20世纪20年代亚瑟·拉克姆风格的童话插画 (来源 [@vkuoo](https://x.com/vkuoo/status/1929708611208728874))

<div style="display: flex; justify-content: space-between;">
<img src="./images/260.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-20世纪20年代亚瑟·拉克姆风格的童话插画">
<img src="./images/260-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-20世纪20年代亚瑟·拉克姆风格的童话插画">
</div>

**提示词：**
```
Transform this image into a 1920s fairy tale illustration in the style of Arthur Rackham. Use muted watercolor tones and intricate ink linework. Fill the scene with whimsical forest creatures, twisted tree branches, and hidden magical objects. The overall tone should be mysterious, enchanting, and slightly eerie. Add handwritten calligraphy-style captions and riddles.
```

**中文提示词：**
```
将这张图片转换成20世纪20年代亚瑟·拉克姆风格的童话插画。采用柔和的水彩色调和精致的墨水线条。场景中要充满奇幻的森林生物、扭曲的树枝和隐藏的魔法物品。整体基调应神秘、迷人且略带诡异。添加手写书法风格的说明文字和谜语。
```


<a id="prompt-259"></a>
## 案例 259：20世纪30年代弗莱舍工作室风格的动画 (来源 [@vkuoo](https://x.com/vkuoo/status/1930065671083438244))

<div style="display: flex; justify-content: space-between;">
<img src="./images/259.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-20世纪30年代弗莱舍工作室风格的动画">
<img src="./images/259-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-20世纪30年代弗莱舍工作室风格的动画">
</div>

**提示词：**
```
Transform this image into a 1930s animation storyboard in the style of Fleischer Studios. Use greyscale with expressive inky shading and rubber-hose limbs. Surround the scene with anthropomorphic objects, bouncy motion lines, and slapstick action. The overall tone should be jazzy, lively, and playful. Add hand-lettered sound effects and quirky dialogue signs.
```

**中文提示词：**
```
将这张图片转换成20世纪30年代弗莱舍工作室风格的动画分镜。采用灰度色调，搭配富有表现力的墨色阴影和“橡胶管”式肢体线条。场景中要加入拟人化的物体、富有弹性的运动线和闹剧式的动作。整体基调应充满爵士感、活力与趣味。添加手写风格的音效文字和古怪的对话标牌。
```


<a id="prompt-258"></a>
## 案例 258：20世纪50年代的海报 (来源 [@vkuoo](https://x.com/vkuoo/status/1930564137526137166))

<div style="display: flex; justify-content: space-between;">
<img src="./images/258.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-20世纪50年代的海报">
<img src="./images/258-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-20世纪50年代的海报">
</div>

**提示词：**
```
Transform this image into a 1950s poster in the style of mid-century modern graphic designers. Use flat, geometric color blocks with strong typographic elements.  The overall tone should be optimistic, nostalgic, and promotional. Add bold location labels and promotional slogans.
```

**中文提示词：**
```
将这张图片转换成20世纪50年代的海报，风格参考中世纪现代平面设计师的作品。采用扁平的几何色块，搭配醒目的排版元素。整体基调应乐观、怀旧且具有宣传性。添加醒目的地点标签和宣传标语。
```


<a id="prompt-257"></a>
## 案例 257：透明蜂窝状变形 (来源 [@miilesus](https://x.com/miilesus/status/1930266127961059739))

<div style="display: flex; justify-content: space-between;">
<img src="./images/257.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-透明蜂窝状变形">
<img src="./images/257-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-透明蜂窝状变形">
</div>

**提示词：**
```
{
  "object": "OBJECT_NAME",
  "style": "Transparent Honeycomb Transformation",
  "description": "Transform the object into a structure made entirely of crystallized golden honey with high transparency. The surface should be ultra-glossy, semi-liquid, and light-reflective, with defined yet see-through hexagonal honeycomb patterns. Parts of the object should allow light to pass through, revealing inner layers and structure. Include gentle honey drips for realism.",
  "material": {
    "primary": "Crystal-clear amber honey",
    "secondary": "Translucent honeycomb cells"
  },
  "texture": {
    "surface": "Ultra glossy and semi-liquid",
    "pattern": "See-through hexagonal honeycomb",
    "drips": true
  },
  "effects": {
    "translucency": "highly translucent",
    "internal_glow": "Soft warm light from within",
    "emblem": "Delicate bee icon subtly embedded in the structure"
  },
  "presentation": {
    "background": "Clean white or soft gradient",
    "lighting": "Backlit with soft diffusion to enhance translucency",
    "floating": true,
    "format": "Square"
  }
}
```

**中文提示词：**
```
{
  "物体": "OBJECT_NAME",
  "风格": "透明蜂窝状变形",
  "描述": "将该物体转变为由完全结晶的金色蜂蜜制成的结构，具有高度透明度。表面应呈现超 glossy 质感、半液态状态和反光效果，带有清晰可辨且透明的六边形蜂窝图案。物体的部分区域应允许光线穿透，以展现内部层次和结构。为增强真实感，需加入自然垂落的蜂蜜滴。",
  "材质": {
    "主要材质": "清澈透明的琥珀色蜂蜜",
    "次要材质": "半透明的蜂窝单元"
  },
  "纹理": {
    "表面": "超 glossy 且呈半液态",
    "图案": "透明的六边形蜂窝",
    "滴落效果": true
  },
  "特效": {
    "半透明性": "高度半透明",
    "内部光晕": "源自内部的柔和暖光",
    "标志": "精致的蜜蜂图标巧妙嵌入结构中"
  },
  "呈现方式": {
    "背景": "纯净白色或柔和渐变",
    "光线": "背光搭配柔和漫射效果，以增强半透明感",
    "悬浮效果": true,
    "格式": "正方形"
  }
}
```


<a id="prompt-256"></a>
## 案例 256：漂浮玻璃霓虹3D (来源 [@egeberkina](https://x.com/egeberkina/status/1940054985418375269))

<div style="display: flex; justify-content: space-between;">
<img src="./images/256.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-漂浮玻璃霓虹3D">
</div>

**提示词：**
```
retexture the image attached based on the JSON below:

{
  "style_name": "Floating Glassy Neon 3D",
  "retexture_mode": "shape_lock",
  "object_analysis": {
    "preserve_silhouette": true,
    "geometry_sensitive_mapping": true,
    "detail_retention": "maintain contours, volumes, and layering"
  },
  "material_properties": {
    "base_material": "translucent neon glass-gel",
    "surface_finish": "semi-gloss with soft glow edges",
    "transparency": "high, with soft light refraction",
    "refraction": "gentle bend with subtle halo on curves",
    "embedded_effects": "internal light scatter and edge neon glow",
    "color_blend": {
      "primary": ["aqua", "electric blue", "neon violet"],
      "gradient_direction": "top-left to bottom-right",
      "transition_smoothness": "very smooth"
    }
  },
  "lighting": {
    "type": "softbox HDRI",
    "intensity": "soft and bright",
    "source_direction": "overhead and slightly front",
    "highlight_behavior": "gentle bloom with glass sparkle"
  },
  "shadow_behavior": {
    "type": "floating contact shadow",
    "appearance": "extremely soft, blurred ellipse",
    "opacity": 0.07,
    "distance_below_object": "moderate",
    "color": "neutral gray"
  },
  "background": {
    "type": "solid color",
    "color": "#ffffff",
    "glow_effect": "none",
    "gradient": "none"
  },
  "rendering": {
    "depth_of_field": "subtle with slight vignette",
    "focus_point": "center of floating object",
    "ambient_occlusion": "minimal to preserve light feel",
    "render_engine": "3D stylized with light diffusion and high specular detail",
    "camera_angle": "slightly above object, frontal",
    "resolution": "very high for product branding"
  },
  "special_effects": {
    "floating_behavior": true,
    "visual_weightlessness": true,
    "shadow_softness": "maximum"
  }
}
```

**中文提示词：**
```
根据以下JSON对附加图片进行重新纹理处理：

{
  "风格名称": "漂浮玻璃霓虹3D",
  "重纹理模式": "形状锁定",
  "对象分析": {
    "保留轮廓": true,
    "几何敏感映射": true,
    "细节保留": "维持轮廓、体积和层次感"
  },
  "材质属性": {
    "基础材质": "半透明霓虹玻璃胶",
    "表面处理": "半光泽，边缘带有柔和光晕",
    "透明度": "高，带有柔和的光折射",
    "折射效果": "轻微弯曲，曲线处有微妙光晕",
    "内置效果": "内部光散射和边缘霓虹发光",
    "色彩混合": {
      "主色": ["水绿色", "电蓝色", "霓虹紫"],
      "渐变方向": "左上角至右下角",
      "过渡平滑度": "非常平滑"
    }
  },
  "光照": {
    "类型": "柔光箱HDRI",
    "强度": "柔和明亮",
    "光源方向": " overhead 且略微偏前",
    "高光表现": "柔和光晕，带有玻璃闪光"
  },
  "阴影表现": {
    "类型": "漂浮接触阴影",
    "外观": "极其柔和、模糊的椭圆形",
    "不透明度": 0.07,
    "物体下方距离": "适中",
    "颜色": "中性灰"
  },
  "背景": {
    "类型": "纯色",
    "颜色": "#ffffff",
    "发光效果": "无",
    "渐变": "无"
  },
  "渲染": {
    "景深": "轻微，带有轻微渐晕",
    "焦点": "漂浮物体的中心",
    "环境光遮蔽": "最小化以保持明亮感",
    "渲染引擎": "3D风格化，带有光扩散和高镜面细节",
    "相机角度": "略高于物体，正面视角",
    "分辨率": "极高，适用于产品品牌推广"
  },
  "特殊效果": {
    "漂浮效果": true,
    "视觉失重感": true,
    "阴影柔和度": "最大"
  }
}
```

<a id="prompt-255"></a>
## 案例 255：头部的几何肖像 (来源 [@TechieBySA](https://x.com/TechieBySA/status/1954831239996694902))

<div style="display: flex; justify-content: space-between;">
<img src="./images/255.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-头部的几何肖像">
<img src="./images/255-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-头部的几何肖像">
</div>

**提示词：**
```
Design a geometric portrait of a [ANIMAL] head in the style of contemporary paper craft collage. Use multiple overlapping paper textures and shadow effects to build dimensional depth. Focus on botanical-inspired color palettes with matte finish aesthetics. The composition should feature bold, angular cuts that form the animal’s distinctive characteristics while maintaining facial symmetry. Set against a minimalist backdrop with subtle gradient. The final piece should evoke the craftsmanship of museum-quality paper installations. Square format, 1080x1080 pixels.
```

**中文提示词：**
```
设计一幅[动物]头部的几何肖像，采用当代纸艺拼贴风格。运用多种重叠的纸张纹理和阴影效果来构建立体深度。聚焦于植物灵感的色彩搭配，呈现哑光质感美学。构图应采用大胆的棱角切割，既塑造出该动物的独特特征，又保持面部对称性。背景为简约风格，带有微妙的渐变效果。最终作品需展现出博物馆级纸艺装置的精湛工艺。尺寸为正方形，1080x1080像素。
```


<a id="prompt-254"></a>
## 案例 254：磨砂泡泡 3D 图标 (来源 [@Anima_Labs](https://x.com/Anima_Labs/status/1953762725965799627))

<div style="display: flex; justify-content: space-between;">
<img src="./images/254.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-磨砂泡泡 3D 图标">
<img src="./images/254-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-磨砂泡泡 3D 图标">
</div>

**提示词：**
```
{
"style_name": "Frosted Bubble 3D Icons",
"render_mode": "3d_semi_transparent_detailed",
"icon_subject": "{{icon_ PlayStation controller}}",
"object_analysis": {
"preserve_silhouette": true,
"geometry_sensitive_mapping": true,
"detail_retention": "smooth rounded edges, subtle internal reflections"
},
"material_properties": {
"base_material": [
"frosted translucent plastic",
"semi-transparent matte acrylic"
],
"internal_elements": "floating colorful spheres, visible through the outer shell",
"surface_finish": "frosted, diffused matte texture with light translucency",
"texture_behavior": "no external color tint, transparency reveals inner objects",
"branding_elements": "none"
},
"color_palette": {
"primary": ["#FFFFFF", "#F5F5F5"],
"accents": ["#FF69B4", "#FFA500", "#6A5ACD", "#00CED1", "#FFD700"],
"contrast": "very high"
},
"lighting": {
"type": "soft ambient + rim lighting",
"intensity": "high",
"shadows": "soft glow under the object",
"highlights": "faint edge glow and top soft reflection"
},
"rendering": {
"style": "modern 3D icon with internal color elements",
"background": "pure black",
"camera_angle": "isometric 3/4 view",
"depth_of_field": "none, all details in focus"
},
"style_notes": [
"black background increases bubble color visibility",
"frosted transparency should glow subtly against black",
"perfect for high-contrast, collectible-style icons"
]
}
```

**中文提示词：**
```
{
"风格名称": "磨砂泡泡3D图标",
"渲染模式": "3d_semi_transparent_detailed（3D半透明精细）",
"图标主题": "{{图标_PlayStation手柄}}",
"对象分析": {
"保留轮廓": true,
"几何敏感映射": true,
"细节保留": "平滑的圆角边缘，细微的内部反射"
},
"材质属性": {
"基础材质": [
"磨砂半透明塑料",
"半透明哑光亚克力"
],
"内部元素": "漂浮的彩色球体，可透过外壳看到",
"表面处理": "磨砂、漫射哑光质感，带有轻微透光性",
"纹理表现": "无外部色彩 tint，透明度可展现内部物体",
"品牌元素": "无"
},
"色彩搭配": {
"主色": ["#FFFFFF", "#F5F5F5"],
"强调色": ["#FF69B4", "#FFA500", "#6A5ACD", "#00CED1", "#FFD700"],
"对比度": "极高"
},
"光照": {
"类型": "柔和环境光+轮廓光",
"强度": "高",
"阴影": "物体下方柔和光晕",
"高光": "微弱的边缘发光和顶部柔和反射"
},
"渲染": {
"风格": "带有内部彩色元素的现代3D图标",
"背景": "纯黑色",
"相机角度": "等距3/4视图",
"景深": "无，所有细节均清晰对焦"
},
"风格说明": [
"黑色背景提升泡泡色彩的可见度",
"磨砂透明度在黑色背景下应呈现微妙的发光效果",
"非常适合高对比度、收藏品风格的图标"
]
}
```


<a id="prompt-253"></a>
## 案例 253：亚克力钥匙扣 (来源 [@TechieBySA](https://x.com/TechieBySA/status/1954931461309546821))

<div style="display: flex; justify-content: space-between;">
<img src="./images/253.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-亚克力钥匙扣">
<img src="./images/253-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-亚克力钥匙扣">
</div>

**提示词：**
```
Create a photorealistic square image (1080x1080) showing a custom acrylic keychain version of the [LOGO] logo hanging from the zipper of a dark-colored backpack (e.g. black or grey). The logo must retain its original shape, color, and proportions without any alteration. The keychain should have a clear glossy acrylic layer, clipped with a silver metal ring and clasp. Use soft daylight or diffused lighting to avoid yellow tones. Set the background in a modern outdoor setting, but keep it blurred to maintain focus on the logo keychain.
```

**中文提示词：**
```
创建一张逼真的方形图片（1080x1080 像素），展示一个定制的 [LOGO] 标志亚克力钥匙扣，它挂在一个深色背包（如黑色或灰色）的拉链上。该标志必须保持其原始形状、颜色和比例，不得有任何改动。钥匙扣应有一层透明的光泽亚克力，配有银色金属环和扣具。使用柔和的日光或漫射光，避免黄色调。背景设置为现代户外环境，但需模糊处理，以将焦点保持在标志钥匙扣上。
```


<a id="prompt-252"></a>
## 案例 252：怪诞又梦幻的超现实插画 (来源 [@fy360593](https://x.com/fy360593/status/1955265393188286632))

<div style="display: flex; justify-content: space-between;">
<img src="./images/252.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-怪诞又梦幻的超现实插画">
<img src="./images/252-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-怪诞又梦幻的超现实插画">
</div>

**提示词：**
```
Transform the uploaded image into a surreal illustration with a whimsical, dream‑like vibe.
• Color palette: muted tones (soft greens, browns, greys) with occasional gentle pops of green.
• Lighting: soft, diffused, almost ethereal light that blends gradients and subtle highlights.
• Texture & medium feel: oil‑painting‑like brushstrokes, faint watercolor washes, or loose hand‑drawn linework, with a slight grainy texture.
• Mood & composition: exaggerated, expressive features (e.g., elongated faces or emotive eyes) characteristic of cartoonish or Muppet‑style illustrations, but applied in a surreal, slightly fantastical context.
• Overall aesthetic: blend realistic attention to detail with a touch of surreal whimsy—think serene, slightly uncanny atmosphere.
```

**中文提示词：**
```
将上传的图片转换为一幅超现实插画，营造出怪诞又梦幻的氛围。
色彩搭配：采用柔和色调（浅绿、棕色、灰色），偶尔点缀一抹淡雅的绿色。
光线效果：柔和、弥漫的近乎空灵的光线，融合渐变色与细微的高光。
质感与媒介感：类似油画的笔触、淡淡的水彩晕染或松散的手绘线条，带有轻微的颗粒质感。
氛围与构图：具有夸张、富有表现力的特征（如拉长的脸型或饱含情感的眼睛），这是卡通或提线木偶风格插画的典型特点，但要将其应用于超现实、略带奇幻色彩的场景中。
整体美学：将对细节的真实刻画与一丝超现实的怪诞感相融合 —— 营造出一种宁静又略带诡异的氛围。
```

<a id="prompt-251"></a>
## 案例 251：超细节盒状纸艺玩具 (来源 [@Arminn_Ai](https://x.com/Arminn_Ai/status/1954985717609730175))

<div style="display: flex; justify-content: space-between;">
<img src="./images/251.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-超细节盒状纸艺玩具">
<img src="./images/251-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-超细节盒状纸艺玩具">
</div>

**提示词：**
```
1×1 square, ultra-detailed render of a box-shaped papertoy version of [CHARACTER NAME]. Made from folded and cut matte cardstock with visible paper texture, crisp edges, and clean folds. Cubic head and body, blocky limbs, simplified facial features, flat printed colors, and subtle shading for depth. Clothing and accessories faithfully mimic [CHARACTER NAME]’s iconic look in a minimal geometric papercraft style, keeping proportions compact and chibi-like. Neutral studio lighting, soft shadows, plain background, photorealistic product photography, 4K, no text or logos.
```

**中文提示词：**
```
1×1大小的正方形，超细节渲染的[角色名称]盒状纸艺玩具版本。由折叠和裁剪的哑光卡纸制成，具有可见的纸张纹理、清晰的边缘和整齐的折痕。立方体头部和身体，块状四肢，简化的面部特征，平印色彩，以及用于体现深度的微妙阴影。服装和配饰以简约的几何纸艺风格忠实还原[角色名称]的标志性外观，保持紧凑的比例和Q版风格。中性工作室灯光，柔和阴影，简洁背景，逼真的产品摄影效果，4K分辨率，无文字或标志。
```

<a id="prompt-250"></a>
## 案例 250：被优雅水漩涡环绕的品牌产品 (来源 [@Morph_VGart](https://x.com/Morph_VGart/status/1933966476492353807))

<div style="display: flex; justify-content: space-between;">
<img src="./images/250.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-被优雅水漩涡环绕的品牌产品">
<img src="./images/250-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-被优雅水漩涡环绕的品牌产品">
</div>

**提示词：**
```
Create square image of studio-lit product photography of a [Product] suspended in mid-air, lots of thick dynamic water swirls surrounding it in slow-motion arcs, crystal-clear droplets glistening with light refraction, high-gloss finish, minimal backdrop, cinematic lighting with soft shadows and highlights, shot on a pure matching gradient background, ultra-realistic detail, commercial photography style, 85mm lens depth of field.
```

**中文提示词：**
```
创建一个方形图像，是工作室照明的产品摄影，一个[产品]悬浮在空中，周围有许多厚重的动态水漩涡以慢动作弧线环绕，晶莹剔透的液滴折射着光线，高光泽度，简约背景，电影般的照明，柔和的阴影和高光，在纯色匹配渐变背景上拍摄，超逼真的细节，商业摄影风格，85mm 镜头景深。
```

<a id="prompt-249"></a>
## 案例 249：路牌图片 (来源 [@diegocabezas01](https://x.com/diegocabezas01/status/1950693677023535318))

<div style="display: flex; justify-content: space-between;">
<img src="./images/249.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-路牌图片">
<img src="./images/249-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-路牌图片">
</div>

**提示词：**
```
Image of a billboard with the text: “Image of a billboard with the text:”
```

**中文提示词：**
```
路牌图片，上面写着：“路牌图片，上面写着：”
```

<a id="prompt-248"></a>
## 案例 248：一张铅笔素描 (来源 [@CharaspowerAI](https://x.com/CharaspowerAI/status/1895481600592269400))

<div style="display: flex; justify-content: space-between;">
<img src="./images/248.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-一张铅笔素描">
<img src="./images/248-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-一张铅笔素描">
</div>

**提示词：**
```
A pencil drawing of [Your character], with detailed lines and shading on white paper, capturing the energy and strength in his muscular body [with element effects] around  the character, in a dynamic pose,   tattoo design on paper, manga art style, dark background, high contrast, strong shadows, light and shadow effects, black ink drawing,  dynamic pose
```

**中文提示词：**
```
一张铅笔素描，描绘了 [你的角色]，在白纸上用细致的线条和阴影，捕捉了他肌肉身体中的能量和力量 [带有元素效果] 围绕着角色，动态姿势，纸上的纹身设计，漫画艺术风格，深色背景，高对比度，强烈的阴影，光影效果，黑色墨水绘画，动态姿势
```

<a id="prompt-247"></a>
## 案例 247：90年代美国卡通片定格动画风格插画 (来源 [@cuchocapilla](https://x.com/cuchocapilla/status/1934280060292284492))

<div style="display: flex; justify-content: space-between;">
<img src="./images/247.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-90年代美国卡通片定格动画风格插画">
<img src="./images/247-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-90年代美国卡通片定格动画风格插画">
</div>

**提示词：**
```
Transform this image into a 90s American cartoon cel-style illustration. Use thick black outlines, flat bold colors, and sharp cel shading with hard shadows. Emphasize exaggerated facial expressions and stylized, geometric character shapes. The background should be flat or minimal to keep the focus on the character. The whole image should feel like a frame from a Saturday morning cartoon.
```

**中文提示词：**
```
将这张图片转化为 90 年代美国卡通片定格动画风格插画。使用粗黑轮廓线、平面化鲜明的颜色，以及锐利的定格动画阴影效果和硬阴影。强调夸张的面部表情和风格化的几何角色形状。背景应为平面或极简，以突出角色。整张图片应感觉像是从周六早间卡通片中截取的一帧。
```

<a id="prompt-246"></a>
## 案例 246：色彩缤纷的手工雕塑 (来源 [@Deshraj4x](https://x.com/Deshraj4x/status/1938670486285885772))

<div style="display: flex; justify-content: space-between;">
<img src="./images/246.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-色彩缤纷的手工雕塑">
</div>

**提示词：**
```
A colorful handcrafted sculpture of [insert subject], made from semi-transparent ice blocks in custom shapes. Accents like icing, candy, yarn, or fruit skin enhance facial features, texture, or accessories. Placed on a ceramic plate over a leaf or decorative mat, with a clean, softly lit studio or natural tabletop background. Lighting highlights the glossy ice texture, blending food art, toy design, and photography into a playful, artistic composition.
```

**中文提示词：**
```
一个色彩缤纷的手工雕塑，由[插入主题]制成，使用半透明的冰块，形状定制。装饰如糖霜、糖果、毛线或水果皮增强了面部特征、纹理或配饰。放置在陶瓷盘上，盘上覆盖着叶子或装饰垫，背景是干净、柔和照明的摄影棚或自然桌面。光线突出了冰块的光泽质感，将食品艺术、玩具设计和摄影融合成一种俏皮、艺术性的构图。
```

<a id="prompt-245"></a>
## 案例 245：Kiro卡通幽灵 (来源 [@松果先森](https://x.com/songguoxiansen/status/1945032571114402108))

<div style="display: flex; justify-content: space-between;">
<img src="./images/245.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-Kiro卡通幽灵">
</div>

**提示词：**
```
A cute cartoon ghost is the absolute main subject of the picture. It has a pure white body with a smooth and rounded contour, and two simple black oval eyes, with no extra features. This ghost is floating quietly in the very center of the picture. The background is a pure, bright purple, creating a simple, modern, and friendly atmosphere. The composition is a centered close-up, and the aspect ratio is 1:1 square. There is no text in the entire image. The image style is typical flat design and vector art, minimalist, much like an app icon or a logo, characterized by clean lines and solid color blocks, without any gradients or textural details. The image quality required is high-resolution with clean, sharp edges. The overall feeling it gives is one of a cute, simple, and modern piece of digital art.
```

**中文提示词：**
```
一个可爱的卡通鬼魂是图片的绝对主体。它拥有纯白色的身体，轮廓平滑圆润，两只简单的黑色椭圆形眼睛，没有任何额外特征。这个鬼魂安静地漂浮在图片的正中央。背景是纯亮的紫色，营造出简洁、现代和友好的氛围。构图是居中的特写，宽高比为 1:1 的正方形。整个图像中没有文字。图像风格典型的扁平化设计和矢量艺术，极简主义，类似于应用图标或标志，以干净的线条和实色块为特点，没有任何渐变或纹理细节。要求的图像质量是高分辨率，边缘清晰锐利。它给人的整体感觉是一幅可爱、简洁、现代的数字艺术作品。
```

<a id="prompt-244"></a>
## 案例 244：转换马赛克风格照片 (来源 [@fy360593](https://x.com/fy360593/status/1945118291703284152))

<div style="display: flex; justify-content: space-between;">
<img src="./images/244.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-xxxx">
<img src="./images/244-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-xxxx">
</div>

**提示词：**
```
Transform this image into a refined low-poly mosaic style. Preserve the original structure and recognizable details, especially facial features and contours. Use small, high-density polygons to maintain clarity and identity while creating a crystalline, faceted look. Keep the original color palette for a harmonious and natural aesthetic. Avoid altering or adding new elements.
```

**中文提示词：**
```
将此图像转换为精致的低多边形马赛克风格。保留原始结构和可识别的细节，特别是面部特征和轮廓。使用小而高密度的多边形，以保持清晰度和身份，同时创造水晶般、多面体的外观。保留原始调色板，以实现和谐自然的美学。避免更改或添加新元素。
```

<a id="prompt-243"></a>
## 案例 243：卡通照片转换 (来源 [@fy360593](https://x.com/fy360593/status/1945395833123561930))

<div style="display: flex; justify-content: space-between;">
<img src="./images/243.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-卡通照片转换">
<img src="./images/243-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-卡通照片转换">
</div>

**提示词：**
```
Transform the character into a digital, half-body cartoon-style portrait. Use a playful, vector-friendly style with clean solid lines, rounded face, oversized googly eyes, and minimal facial details. Show the character from chest up, including shoulders and upper torso. Apply smooth gradient fills to both the character and background for a colorful, soft look. Square format.
```

**中文提示词：**
```
将角色转化为数字化的半身卡通风格肖像。使用适合矢量的俏皮风格，线条干净利落，圆润的脸庞，超大号的玻璃眼球，以及极简的面部细节。展示角色胸部以上的部分，包括肩膀和上半身。对角色和背景都应用平滑的渐变填充，营造色彩丰富、柔和的视觉效果。方形格式。
```

<a id="prompt-242"></a>
## 案例 242：有趣的块状 3D 世界 (来源 [@egeberkina](https://x.com/egeberkina/status/1948690449293869081))

<div style="display: flex; justify-content: space-between;">
<img src="./images/242.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-有趣的块状 3D 世界">
<img src="./images/242-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-有趣的块状 3D 世界">
</div>

**提示词：**
```
Retexture the image attached based on the JSON below
{
  "style_name": "Playful Chunky 3D Aesthetic",
  "retexture_mode": "stylized_3d_overlay",
  "object_analysis": {
    "preserve_silhouette": true,
    "geometry_sensitive_mapping": true,
    "detail_retention": "moderate — focus on key forms and proportions"
  },
  "material_properties": {
    "base_material": ["soft matte plastic", "rubbery polymer"],
    "surface_details": [
      "rounded edges and inflated volumes",
      "smooth, toy-like finish",
      "minimal seam lines"
    ]
  },
  "lighting": {
    "type": "studio diffused light",
    "intensity": "medium",
    "shadows": "soft base shadows",
    "highlight_behavior": "gentle gloss on curves and raised surfaces"
  },
  "color_palette": {
    "dominant_colors": ["#f6f6f6", "#3a3a3a", "#f05423"],
    "accent_colors": ["#ff875d", "#b0b0b0", "#f3f3f3"]
  },
  "background": {
    "color": "#f9f9f9",
    "type": "solid",
    "texture": "none"
  },
  "style_tags": [
    "3D cartoon realism",
    "UI icon pack aesthetic",
    "inflated minimalism",
    "soft tech look",
    "playful volume modeling"
  ]
}
```

**中文提示词：**
```
根据以下 JSON 对附加的图像进行重新纹理化
{
  "style_name": "Playful Chunky 3D Aesthetic",
  "retexture_mode": "stylized_3d_overlay",
"对象分析": {
"保留轮廓": true,
"几何敏感映射": true,
"细节保留": "中等 — 侧重于关键形态和比例"
  },
"材料属性": {
    "基础材料": ["柔软磨砂塑料", "弹性聚合物"],
    "表面细节": [
"圆润的边缘和膨胀的体积",
"光滑、玩具般的表面",
"极少的接缝线"
    ]
  },
"lighting": {
    "type": "工作室漫射光",
    "intensity": "中等",
"阴影": "柔和的基础阴影",
    "高光行为": "曲线和凸起表面的柔和光泽"
  },
  "配色方案": {
"主色调": [" #f6f6f6 ", " #3a3a3a ", " #f05423 "],
    "强调色": [" #ff875d ", " #b0b0b0 ", " #f3f3f3 "]
  },
  "背景": {
"color": " #f9f9f9 ",
    "type": "solid",
    "texture": "none"
  },
"风格标签": []
"3D 卡通写实风格"
"UI 图标包美学"
"膨胀极简主义"
"柔和科技感",
"俏皮体积建模"
  ]
}
```

<a id="prompt-241"></a>
## 案例 241：9格Q版风格贴纸 (来源 [@松果先森](https://x.com/songguoxiansen/status/1950726378342801853))

<div style="display: flex; justify-content: space-between;">
<img src="./images/241.png" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-9格Q版风格贴纸">
</div>

**提示词：**
```
Create a 3D kawaii 10-16 canvas featuring nine chibi-style stickers in various outfits, poses, and expressions. Use the uploaded attachment image. Each sticker has a white border and includes a speech bubble with regular use phrases. Set on a soft white-to-pastel blue gradient background for a fun, positive vibe, perfect for WhatsApp app use.
```

**中文提示词：**
```
创建一幅尺寸为 10-16 的 3D 可爱风格画布，其中包含 9 个 Q 版风格贴纸。这些贴纸要采用不同的服装、姿势和表情，使用已经上传的附件图片。每个贴纸都要有白色边框，且包含一个带有日常用语的 speech 气泡。背景设置为柔和的白到淡蓝色渐变，营造出有趣、积极的氛围，非常适合在 WhatsApp 应用中使用。
```

<a id="prompt-240"></a>
## 案例 240：定制的枕头 (来源 [@TechieBySA](https://x.com/TechieBySA/status/1944487528704418041))

<div style="display: flex; justify-content: space-between;">
<img src="./images/240.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-定制的枕头">
<img src="./images/240-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-定制的枕头">
</div>

**提示词：**
```
Create a high-resolution 3D render of the [BRAND] logo designed as an inflatable, puffy object. The logo should appear soft, rounded, and air-filled – like a plush balloon or blow-up toy. Use a smooth, matte texture with subtle fabric creases and stitching to emphasize the inflatable look. Position the logo at a 45-degree angle to highlight depth and realism. Place the final result on a couch in a stylish living room with furniture and decor that matches the iconic colors of the [BRAND] logo. Output dimension: 1080x1080. 
```

**中文提示词：**
```
创建一个高分辨率的 3D 渲染图，将[BRAND]标志设计成一个充气、蓬松的物体。标志应看起来柔软、圆润、充气——像一个毛绒气球或充气玩具。使用光滑的哑光纹理，带有细微的布料褶皱和缝线，以强调充气效果。将标志以 45 度角摆放，以突出深度和真实感。将最终结果放置在风格时尚的客厅沙发上，家具和装饰与[BRAND]标志的标志性颜色相匹配。输出尺寸：1080x1080。
```


<a id="prompt-239"></a>
## 案例 239：沙滩胶囊城市 (来源 [@TechieBySA](https://x.com/TechieBySA/status/1944386743865622718))

<div style="display: flex; justify-content: space-between;">
<img src="./images/239.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-沙滩胶囊城市">
<img src="./images/239-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-沙滩胶囊城市">
</div>

**提示词：**
```
A vibrant, hyper-realistic miniature of [CITY] inside a transparent capsule lying on a sandy beach. The capsule is half [COLOR] (matching [COUNTRY]’s flag) with [CITY] written in white text on the colored section. Inside the capsule: iconic landmarks of [CITY], beautiful water canals or streets, small detailed boats or cars, sunny bright lighting, cinematic depth of field, dreamy atmosphere, ocean waves in the background.
```

**中文提示词：**
```
一个充满活力的、超写实的[CITY]微缩模型，放置在一个透明胶囊内，躺在沙滩上。胶囊一半是[COLOR]色（与[COUNTRY]的国旗相匹配），彩色部分上用白色文字写着[CITY]。胶囊内部：[CITY]的标志性地标、美丽的运河或街道、小巧精致的船只或汽车、阳光明媚的光线、电影般的景深、梦幻般的氛围、背景中的海浪。
```

<a id="prompt-238"></a>
## 案例 238：用花朵美化你的产品 (来源 [@Kerroudjm](https://x.com/Kerroudjm/status/1944730614323671129))

<div style="display: flex; justify-content: space-between;">
<img src="./images/238.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-用花朵美化你的产品">
<img src="./images/238-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-用花朵美化你的产品">
</div>

**提示词：**
```
A high-end editorial photo of (PRODUCT NAME OR IMAGE) placed on a white marble pedestal, resting on champagne-colored silk. It is surrounded by pastel flowers whose type and color naturally harmonize with the product’s primary colors (COLOR PALETTE) — complementing and enhancing its tones. Soft natural light from the upper left. 3D realism, luxury product photography, shallow depth of field, 1:1 format.  
```

**中文提示词：**
```
(产品名称或图片)放置在白色大理石底座上，休息在香槟色丝绸上，的高端编辑照片。它被淡色花朵环绕，其类型和颜色自然与产品的主要颜色（调色板）协调——补充并增强其色调。来自左上方的柔和自然光。3D 现实主义，奢华产品摄影，浅景深，1:1 格式。
```


<a id="prompt-237"></a>
## 案例 237：电影镜头拍摄 (来源 [@CharaspowerAI](https://x.com/CharaspowerAI/status/1944796547587125663))

<div style="display: flex; justify-content: space-between;">
<img src="./images/237.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-电影镜头拍摄">
<img src="./images/237-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-电影镜头拍摄">
</div>

**提示词：**
```
Cinematic shot of [detailed character description], shot from [camera angle], [lighting type], [color palette], shot at close range, 35mm film grain, wide angle lens, f2.0 bokeh, shallow depth of field.
```

**中文提示词：**
```
电影镜头拍摄[详细角色描述]，从[相机角度]拍摄，[灯光类型]，[色彩搭配]，近距离拍摄，35mm 胶片颗粒，广角镜头，f2.0 浅景深，浅景深。
```


<a id="prompt-236"></a>
## 案例 236：直升机品牌广告 (来源 [@TechieBySA](https://x.com/TechieBySA/status/1944724068982211044))

<div style="display: flex; justify-content: space-between;">
<img src="./images/236.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-直升机品牌广告">
<img src="./images/236-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-直升机品牌广告">
</div>

**提示词：**
```
Create a hyper-realistic, square 1:1 image featuring a small helicopter flying through a bright blue sky with fluffy white clouds and a subtle lens flare. The helicopter is painted in the signature colors and graphics of [BRAND]. It is carrying a giant product from [BRAND] hanging below. The composition has the look and feel of a clean, playful (or premium, futuristic) advertisement. At the bottom, include the [BRAND] logo and a small slogan like [BRAND SLOGAN] in a stylish font. 1080x1080 dimension.  
```

**中文提示词：**
```
创作一张超写实的 1:1 方形图像，展现一架小型直升机在明亮的蓝天中飞行，周围有蓬松的白云和微妙的镜头眩光。直升机涂装着[BRAND]的标志性颜色和图案。它下方悬挂着一个来自[BRAND]的巨大产品。整个构图具有干净、俏皮（或高端、未来感）的广告风格。在底部，包含[BRAND]的标志和一句简短的风格化标语，如[BRAND SLOGAN]。尺寸为 1080x1080。
```


<a id="prompt-235"></a>
## 案例 235：讽刺版的你 (来源 [@B_4AI](https://x.com/B_4AI/status/1944678797128708369))

<div style="display: flex; justify-content: space-between;">
<img src="./images/235.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-讽刺版的你">
<img src="./images/235-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-讽刺版的你">
</div>

**提示词：**
```
Based on your understanding of my personality and past interactions, create a humorous and satirical image that teases me in a playful way. The image must have comedic features, using exaggerated expressions or surreal visual metaphors. Artistic style: cartoon or caricature with high contrast and expressive details. The goal is to amuse, not insult. Ensure the satire is clever and mindful.
```

**中文提示词：**
```
根据您对我的个性和过去互动的理解，创建一个幽默、讽刺的图像，以俏皮的方式嘲笑我。图像必须具有喜剧特征，使用夸张的表情或超现实的视觉隐喻。艺术风格：具有高对比度和富有表现力的细节的卡通或漫画。目标是笑，而不是侮辱。确保讽刺是聪明和有意识的。
```


<a id="prompt-234"></a>
## 案例 234：产品成为霓虹灯下的梦想 (来源 [@B_4AI](https://x.com/B_4AI/status/1944334293297246692))

<div style="display: flex; justify-content: space-between;">
<img src="./images/234.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-xxxxxxxx">
<img src="./images/234-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-xxxxxxxx">
</div>

**提示词：**
```
a surreal-realistic digital artwork of a product from the brand [Brand name]. The product should be glowing with neon outlines, stylized like a high-contrast 3D render. Place it in a dreamlike environment inspired by the brand’s identity, color scheme, and culture. Use soft shadows, deep blacks, and intense lighting for dramatic effect. 
```

**中文提示词：**
```
[Brand name] 品牌商品的超现实主义写实数字艺术作品。产品应该闪耀着霓虹灯轮廓，像高对比度的3D渲染一样风格化。将其放置在受品牌身份、配色方案和文化启发的梦幻般的环境中。使用柔和的阴影、深黑色和强烈的光照来获得戏剧性的效果。
```


<a id="prompt-233"></a>
## 案例 233：超现实鸟类幻想 (来源 [@B_4AI](https://x.com/B_4AI/status/1944700655249068043))

<div style="display: flex; justify-content: space-between;">
<img src="./images/233.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-超现实鸟类幻想">
<img src="./images/233-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-超现实鸟类幻想">
</div>

**提示词：**
```
A highly detailed and surreal depiction of a mythical bird creature. It has the elegant, colorful body of a butterfly, with vibrant symmetrical wing patterns. Its head is that of a majestic elephant, complete with large ears, a long curling trunk, and ivory tusks, giving it a powerful and ancient aura. A long, spotted giraffe neck connects the body and the head, rising high with grace. The wings are enormous eagle wings, fully extended with dramatic feathers in motion. Its tail is an iridescent peacock tail, fanned out in full display like royal plumage. The creature stands in an enchanted misty forest, bathed in ethereal light and surrounded by glowing particles. Ultra-realistic, cinematic lighting, fantasy atmosphere, hyper-detailed concept art
```

**中文提示词：**
```
对神话鸟类生物的高度详细和超现实的描绘。它拥有优雅、多彩的蝴蝶身体，带有充满活力、对称的翅膀图案。它的头是一头雄伟的大象，长着大耳朵、长长的卷曲的鼻子和象牙，赋予它强大而古老的光环。长长的斑点长颈鹿脖子连接身体和头部，优雅地高高耸立。翅膀是巨大的鹰翅膀，完全伸展，羽毛在运动中戏剧性。它的尾巴是一条彩虹色的孔雀尾巴，像皇家羽毛一样呈扇形展开。这个生物站在一片迷人的迷雾森林中，沐浴在空灵的光芒中，周围环绕着发光的粒子。超逼真的电影般的照明、奇幻的氛围、超详细的概念艺术
```


<a id="prompt-232"></a>
## 案例 232：胶囊从透明的药瓶中倾倒 (来源 [@fy360593](https://x.com/fy360593/status/1944782534128419179))

<div style="display: flex; justify-content: space-between;">
<img src="./images/232.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-胶囊从透明的药瓶中倾倒">
<img src="./images/232-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-胶囊从透明的药瓶中倾倒">
</div>

**提示词：**
```
Hyper-realistic poster, 1080x1080. Small glossy/glass capsules spilling from a transparent medicine bottle onto a wet surface. Each capsule features [white]/[red] plastic and transparent glass, with [KFC] logo and a floating 3D icon inside. Strong reflections, studio lighting, water droplets, soft elegant background, DSLR photo realism.
```

**中文提示词：**
```
超写实的海报，1080x1080。小型的光亮/玻璃胶囊从透明的药瓶中倾倒在湿润的表面上。每个胶囊都带有[白色]/[红色]塑料和透明玻璃，内有[KFC]标志和一个悬浮的 3D 图标。强烈的反光，工作室灯光，水滴，柔和优雅的背景，DSLR 照片真实性。
```

<a id="prompt-231"></a>
## 案例 231：形状为生日气球文字 (来源 [@Anima_Labs](https://x.com/Anima_Labs/status/1945050362152427924))

<div style="display: flex; justify-content: space-between;">
<img src="./images/231.png" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-形状为生日气球文字">
</div>

**提示词：**
```
Create a hyper-realistic 3D rendering of balloon letters forming the word [WOW]. Each letter should look like a shiny, inflatable mylar balloon with a bold printed pattern. Use a mix of textures such as [checkered print, color grids, polka dots, or glossy metallic black]. The balloons should be semi-reflective with realistic air volume, seams, wrinkles, and pressure points. Give each letter a distinct, playful surface design but keep the overall look cohesive. Use a soft pastel background, like [Orange color], to contrast the balloon textures. Lighting should create crisp reflections and soft shadows. The rendering must be photorealistic, fun, and vibrant — like a high-end visual for a creative pop-art birthday installation or fashion campaign.
```

**中文提示词：**
```
创建一个超逼真的 3D 渲染效果，将气球字母组成单词 [WOW]。每个字母看起来都像是一个闪亮的充气镀铝气球，带有大胆印刷的图案。使用多种纹理，例如 [格子印刷、彩色网格、波点或光泽金属黑]。气球应该是半反射的，具有真实的空气体积、接缝、皱纹和压力点。给每个字母一个独特、有趣的表面设计，但保持整体外观协调一致。使用柔和的粉彩色背景，例如 [橙色]，以对比气球的纹理。光线应产生清晰的反射和柔和的阴影。渲染效果必须是照片级的逼真、有趣且充满活力——就像创意波普艺术生日装置或时尚活动的高端视觉效果。
```

<a id="prompt-230"></a>
## 案例 230：可爱的卡通灵魂 (来源 [@松果先森](https://x.com/songguoxiansen/status/1945032571114402108))

<div style="display: flex; justify-content: space-between;">
<img src="./images/230.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-可爱的卡通灵魂">
<img src="./images/230-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-可爱的卡通灵魂">
</div>

**提示词：**
```
A cute cartoon ghost is the absolute main subject of the picture. It has a pure white body with a smooth and rounded contour, and two simple black oval eyes, with no extra features. This ghost is floating quietly in the very center of the picture. The background is a pure, bright purple, creating a simple, modern, and friendly atmosphere. The composition is a centered close-up, and the aspect ratio is 1:1 square. There is no text in the entire image. The image style is typical flat design and vector art, minimalist, much like an app icon or a logo, characterized by clean lines and solid color blocks, without any gradients or textural details. The image quality required is high-resolution with clean, sharp edges. The overall feeling it gives is one of a cute, simple, and modern piece of digital art.
```

**中文提示词：**
```
一个可爱的卡通幽灵是画面的绝对主体，它拥有纯白色的、轮廓圆润流畅的身体，以及两只简单的黑色椭圆形眼睛，没有任何多余的特征。这个幽灵安静地漂浮着，位于整个画面的正中央。画面背景是纯粹的亮紫色，营造出一种简洁、现代且友好的氛围。构图方式为居中特写，图片比例为1:1的正方形。整个画面没有任何文字。这幅图像是典型的扁平化设计（Flat design）和矢量艺术风格，极简主义，非常像一个App图标或logo，特点是线条干净利落，颜色是纯色块填充，无任何渐变或纹理细节。图像质量要求高分辨率，边缘清晰锐利，整体给人一种可爱、简洁、现代化的数字艺术感受。
```


<a id="prompt-229"></a>
## 案例 229：品牌快餐胶囊 (来源 [@TechieBySA](https://x.com/TechieBySA/status/1944462797666123872))

<div style="display: flex; justify-content: space-between;">
<img src="./images/229.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-品牌快餐胶囊">
</div>

**提示词：**
```
Create a hyper-realistic, stylish poster [1080x1080] aspect ratio featuring a horizontal tablet-capsule hovering above a surface covered in condensation and water droplets, with its shadow cast on the wet ground. One side of the capsule is transparent glass, while the other is glossy [BRAND COLORS] plastic, displaying the [BRAND] logo and name. Seamlessly floating inside the glass portion of the capsule is a photorealistic 3D model of the [BRAND LOGO OR ICON], perfectly centered and suspended in zero gravity. The glass and plastic surfaces showcase strong reflections, refractions, and environmental distortions. The background is a softly blurred, elegant light-toned setting. Use a dynamic perspective with a stylish camera angle, professional studio lighting, and ultra-high detail to make the image look like a DSLR-captured photograph with impeccable realism.

```

**中文提示词：**
```
创建一个超逼真、时尚的海报[1080x1080]宽高比，展示一个水平平板胶囊悬浮在布满水汽和液滴的表面上，其影子投射在湿润的地面上。胶囊一侧是透明玻璃，另一侧是光泽[品牌颜色]塑料，显示[品牌]标志和名称。玻璃部分无缝漂浮着一张逼真的 3D 模型[品牌标志或图标]，完美居中并悬浮在零重力中。玻璃和塑料表面展现出强烈的反射、折射和环境扭曲。背景是柔和模糊、优雅浅色调的设置。使用动态视角和时尚的相机角度，结合专业工作室灯光和超高清细节，使图像看起来像是一张由单反相机拍摄的真实照片，具有无懈可击的真实感。
```


<a id="prompt-228"></a>
## 案例 228：日本搞笑漫画风格插画 (来源 [@fy360593](https://x.com/fy360593/status/1944708178266259689))

<div style="display: flex; justify-content: space-between;">
<img src="./images/228.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-日本搞笑漫画风格插画">
<img src="./images/228-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-日本搞笑漫画风格插画">
</div>

**提示词：**
```
Transform this image into a Japanese gag manga style illustration. Use a high-contrast black-and-white color palette with bold linework and screentone (halftone) shading. Characters should have exaggerated facial expressions, cartoonish proportions (big head, small body), and comedic intensity. Include dynamic action lines or radiating background effects. The overall aesthetic should mimic retro manga from the 80s and 90s with humorous and intense emotion.
```

**中文提示词：**
```
将这张图片转化为日本搞笑漫画风格插画。使用高对比度的黑白色彩搭配，粗犷的线条和网点（半色调）阴影。角色应有夸张的面部表情，卡通化的比例（大头小身），以及喜剧张力。包含动态动作线条或放射状背景效果。整体美学应模仿 80 年代和 90 年代的复古漫画，充满幽默和强烈的情感。
```


<a id="prompt-227"></a>
## 案例 227：糖果形状物品 (来源 [@TheRelianceAI](https://x.com/TheRelianceAI/status/1944695498025173261))

<div style="display: flex; justify-content: space-between;">
<img src="./images/227.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-糖果形状物品">
<img src="./images/227-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-糖果形状物品">
</div>

**提示词：**
```
A glossy candy-shaped perfume bottle resting on an open book, soft morning light, delicate shadows, dreamy bokeh background with iridescent cellophane wrapping. The candy design is inspired by [YOUR STYLE]
```

**中文提示词：**
```
一个闪亮的糖果形状的香水瓶静置在一本打开的书上，柔和的晨光，细腻的阴影，梦幻的背景虚化效果，带有彩虹色透明膜包装。糖果设计灵感来源于[你的风格]
```


<a id="prompt-226"></a>
## 案例 226：电影场景 (来源 [@Dd41Giant](https://x.com/Dd41Giant/status/1944402963855769744))

<div style="display: flex; justify-content: space-between;">
<img src="./images/226.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-电影场景">
<img src="./images/226-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-电影场景">
</div>

**提示词：**
```
Close-up. Overhead shot from an extremely high vantage point, extremely low grain with iso100 film shadows on a Lomo LC-A. Realistic depth of field. Artistic composition. Overall bluish tones. Beautiful light and shadows. The black floor with the projected image of the blue sky that fills the screen. A very beautiful small-faced Japanese film actress with wet showy hair in a black dress shirt sitting cross-legged on the floor. She is wearing a long red skirt. Shiny black hair. Long eyelashes. Bright skin. Beautiful shining eyes. A smiling face. On the floor next to the actress is a white model of Saturn. The picture looks like a scene from a movie.
```

**中文提示词：**
```
特写。从极高视角拍摄的上视图，使用 Lomo LC-A 相机拍摄，ISO100 胶片，颗粒感极低，阴影真实。艺术构图。整体偏蓝色调。光影美丽。黑色地板上投射着充满屏幕的蓝色天空图像。一位非常美丽的日本小脸女演员，穿着黑色衬衫，盘腿坐在地板上，头发湿漉漉地显眼，穿着长红色裙子。闪亮的黑发。长长的睫毛。明亮肌肤。美丽的闪亮眼睛。微笑的面容。女演员旁边的地板上有一个白色的土星模型。这张照片看起来像电影中的一个场景。
```


<a id="prompt-225"></a>
## 案例 225：时尚的胶囊海报 (来源 [@TechieBySA](https://x.com/TechieBySA/status/1944435018203296063))

<div style="display: flex; justify-content: space-between;">
<img src="./images/225.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-时尚的胶囊海报">
</div>

**提示词：**
```
Create a hyper-realistic, stylish poster [1080x1080] aspect ratio featuring a horizontal tablet-capsule hovering above a surface covered in condensation and water droplets, with its shadow cast on the wet ground. One side of the capsule is transparent glass, while the other is glossy [COLOR/DESIGN] plastic, displaying the [BRAND] logo and name. Seamlessly floating inside the glass portion of the capsule is a photorealistic 3D model of the [LOGO], perfectly centered and suspended in zero gravity. The glass and plastic surfaces showcase strong reflections, refractions, and environmental distortions. The background is a softly blurred, elegant light-toned setting. Use a dynamic perspective with a stylish camera angle, professional studio lighting, and ultra-high detail to make the image look like a DSLR-captured photograph with impeccable realism.
```

**中文提示词：**
```
创作一张超逼真、时尚的海报[1080x1080]宽高比，展示一个水平放置的平板胶囊悬浮在布满水汽和水滴的表面上，其影子投射在湿润的地面上。胶囊的一面是透明玻璃，另一面是光泽塑料[颜色/设计]，显示[品牌]标志和名称。在胶囊的玻璃部分中，一个逼真的 3D 模型[标志]无缝漂浮，完美居中并悬浮在零重力中。玻璃和塑料表面展现出强烈的反射、折射和环境扭曲。背景是一个柔和模糊、优雅浅色调的设置。使用动态视角和时尚的相机角度，结合专业工作室灯光和超高清细节，使图像看起来像是一张由单反相机拍摄的真实照片，具有无懈可击的真实感。
```


<a id="prompt-224"></a>
## 案例 224：舒适的周末从这里开始 (来源 [@egeberkina](https://x.com/egeberkina/status/1944368117116796955))

<div style="display: flex; justify-content: space-between;">
<img src="./images/224.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-舒适的周末从这里开始">
<img src="./images/224-2.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-舒适的周末从这里开始">
</div>

**提示词：**
```
retexture the image attached based on the json below:
{
  "style_name": "Soft Minimal 3D Plastic",
  "retexture_mode": "shape_lock",
  "object_analysis": {
    "preserve_silhouette": true,
    "geometry_sensitive_mapping": true,
    "detail_retention": "flatten complex details into simplified geometry blocks"
  },
  "material_properties": {
    "base_material": [
      "smooth matte plastic",
      "metallic edge trim with satin finish",
      "semi-reflective black screen surface"
    ],
    "surface_details": [
      "subtle color gradient",
      "rounded bevels and corners",
      "soft transition between surfaces"
    ]
  },
  "lighting": {
    "type": "soft gradient ambient light",
    "shadows": "minimal, soft-edged shadows",
    "highlights": "diffused, low-intensity reflections"
  },
  "background": {
    "color": "pastel gradient (blue to cream)",
    "texture": "smooth and untextured",
    "elements": "clean background with no added geometry"
  },
  "rendering": {
    "style": "isometric 3D render",
    "resolution": "high, with slight bloom",
    "focus": "central object, no depth blur"
  },
  "color_palette": {
    "primary": ["cool grey", "steel blue", "soft charcoal"],
    "accents": ["light lavender", "pastel yellow"]
  }
}
```

**中文提示词：**
```
根据以下 JSON 重新纹理附加的图像：
{
"style_name": "柔和极简 3D 塑料风格",
  "retexture_mode": "形状锁定",
  "object_analysis": {
    "preserve_silhouette": true,
"geometry_sensitive_mapping": true,
    "detail_retention": "将复杂的细节简化为简化的几何块"
  },
  "material_properties": {
"base_material": [
"光滑磨砂塑料"，
"金属边缘饰条，缎面处理"，
"半反射黑色屏幕表面"
],
"表面细节": [
"微妙的颜色渐变"，
"圆润的斜角和边角"，
"表面之间的柔和过渡"
    ]
  },
"lighting": {
"类型": "柔和渐变环境光",
    "阴影": "极少，边缘柔和的阴影",
    "高光": "弥散，低强度的反射"
  },
"背景": {
    "颜色": "柔和渐变（蓝色到奶油色）",
    "纹理": "光滑无纹理",
    "元素": "干净背景，无添加几何图形"
  },
"渲染": {
"风格": "等距 3D 渲染",
"分辨率": "高，略带轻微泛光"
"focus": "中心对象，无深度模糊"
  },
  "color_palette": {
    "primary": ["冷灰色", "钢蓝色", "柔和的炭黑色"],
"accents": ["浅薰衣草色", "淡黄色"]
  }
}
```


<a id="prompt-223"></a>
## 案例 223：惊人的外骨骼图像 (来源 [@azed_ai](https://x.com/azed_ai/status/1944067498187665507))

<div style="display: flex; justify-content: space-between;">
<img src="./images/223.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-惊人的外骨骼图像">
<img src="./images/223-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-惊人的外骨骼图像">
</div>

**提示词：**
```
a futuristic 3D-rendered [object] made of translucent [color] inner structure encased in a smooth white exoskeleton with organic holes and flowing biomorphic patterns, floating in a minimal soft gray background, high contrast lighting, hyperrealistic materials, octane render, modern digital sculpture
```

**中文提示词：**
```
一个未来派的 3D 渲染[物体]，具有半透明的内部结构，被光滑的白色外骨骼包裹，外骨骼上有有机的孔洞和流动的仿生图案，悬浮在极简的浅灰色背景中，高对比度光照，超写实材质，Octane 渲染，现代数字雕塑
```


<a id="prompt-222"></a>
## 案例 222：宝石渲染风格 (来源 [@alban_gz](https://x.com/alban_gz/status/1944033327767236869))

<div style="display: flex; justify-content: space-between;">
<img src="./images/222.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-宝石渲染风格">
</div>

**提示词：**
```
Apply the parameters of the JSON provided to [insert image]

{
  "name": "Gemstone Render",
  "object": {
    "type": "auto",
    "detected_color": "auto",
    "form": "realistic, natural form preserved",
    "material": "crystal or faceted gemstone glass",
    "surface": "precision-cut facets, sharp reflections",
    "transparency": "high clarity with light refraction",
    "internal_features": "color depth, internal shimmer, and light dispersion"
  },
  "color_and_light": {
    "primary_color": "{detected_color}",
    "highlight_effects": "specular highlights, gemstone brilliance, caustics",
    "lighting_setup": "studio lighting with white or soft background",
    "metallic_accents": {
      "enabled": true,
      "material": "gold or chrome",
      "application": "rim, stem, or edge detailing"
    }
  },
  "style": {
    "artistic_style": [
      "photorealistic 3D render",
      "Gemstone Render Style",
      "luxury object visualization"
    ],
    "design_language": [
      "faceted precision modeling",
      "jewelry-like rendering",
      "optical depth and brilliance"
    ]
  },
  "technical_details": {
    "render_engine": [
      "Blender with Cycles",
      "Cinema 4D + Redshift/Octane"
    ],
    "rendering_techniques": [
      "physically-based rendering (PBR)",
      "ray tracing",
      "global illumination"
    ],
    "resolution": "ultra high-res (4K–8K)",
    "post_processing": [
      "subtle glow",
      "enhanced reflections",
    "color-preserving contrast boost"
    ]
  },
  "prompt_template": "A 3D-rendered image of a {object} made of {detected_color} crystal, with intricate gemstone-like facets. It sparkles with internal reflections and sits on a clean studio background, blending realism with luxury design."
}
```

**中文提示词：**
```
将提供的 JSON 参数应用于[插入图片]

{
  "名称": "宝石渲染",
  "物体": {
    "类型": "自动",
    "检测到的颜色": "自动",
    "形态": "逼真、自然形态得以保留",
    "材质": "水晶或多面宝石玻璃",
    "表面": "精密切割的刻面、清晰的反光",
    "透明度": "高清晰度，带有光线折射",
    "内部特征": "色彩深度、内部光泽和光线色散"
  },
  "颜色与光线": {
    "主色调": "{detected_color}",
    "高光效果": "镜面高光、宝石光泽、焦散效果",
    "照明设置": "工作室照明，搭配白色或柔和背景",
    "金属装饰": {
      "启用": true,
      "材质": "黄金或铬合金",
      "应用位置": "边缘、柄部或侧边细节"
    }
  },
  "风格": {
    "艺术风格": [
      "照片级写实3D渲染",
      "宝石渲染风格",
      "奢华物体可视化"
    ],
    "设计语言": [
      "多面精密建模",
      "珠宝式渲染",
      "光学深度与光泽"
    ]
  },
  "技术细节": {
    "渲染引擎": [
      "Blender搭配Cycles",
      "Cinema 4D + Redshift/Octane"
    ],
    "渲染技术": [
      "基于物理的渲染（PBR）",
      "光线追踪",
      "全局光照"
    ],
    "分辨率": "超高分辨率（4K–8K）",
    "后期处理": [
      "柔和光晕",
      "增强的反光",
      "保持色彩的对比度提升"
    ]
  },
  "提示模板": "一张{物体}的3D渲染图像，由{detected_color}水晶制成，带有复杂的宝石般刻面。它内部反光闪耀，置于干净的工作室背景上，融合了写实感与奢华设计。"
}
```


<a id="prompt-221"></a>
## 案例 221：钻石镶嵌风格 (来源 [@alban_gz](https://x.com/alban_gz/status/1944405761439756343))

<div style="display: flex; justify-content: space-between;">
<img src="./images/221.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-钻石镶嵌风格">
<img src="./images/221-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-钻石镶嵌风格">
</div>

**提示词：**
```
Recreate this image using the parameters of the JSON provided.
{
  "style_name": "Diamond-Encrusted Glamour",
  "description": "Applies a hyper-realistic diamond-encrusted style to any object, logo, or shape. The surface of the subject is entirely covered with sparkling gemstones that reflect light with intense brilliance, creating a luxurious, eye-catching, and surreal look.",
  "surface_texture": {
    "material": "diamond-crystal",
    "coating": "fully encrusted with multi-faceted diamonds",
    "sparkle_intensity": "maximum",
    "reflection_type": "specular and highly refractive",
    "detail_density": "ultra-fine, micro-gem coverage with no gaps",
    "light_refraction": "strong rainbow dispersion through facets"
  },
  "lighting": {
    "light_source": "hard directional light",
    "highlight_effects": "lens flares, sparkle flares on gem edges",
    "shadow_type": "soft-edged, low-opacity shadows for contrast",
    "specularity": "very high",
    "reflection_sources": "ambient and direct highlights across the gem facets"
  },
  "background": {
    "type": "minimalist solid color",
    "color": "#B0C4DE",
    "texture": "smooth matte",
    "contrast_with_subject": "high contrast to enhance sparkle",
    "depth": "subtle shadow under the object for floating effect"
  },
  "color_palette": {
    "primary": "transparent white (diamond base)",
    "secondary": "prismatic reflections (rainbow light dispersion)",
    "accent": "metallic shimmer on edges (optional: gold or silver undertones)"
  },
  "camera": {
    "angle": "slight top-down perspective",
    "depth_of_field": "shallow (sharp focus on object, blurred background)",
    "lens_effects": ["macro focus", "sparkle highlights", "light bloom"]
  },
  "style_keywords": [
    "glamorous",
    "luxury",
    "crystal-covered",
    "bling",
    "hyper-detailed",
    "sparkling",
    "futuristic",
    "eye-catching",
    "surreal realism",
    "fashion-inspired"
  ],
  "applicability": {
    "usable_on": ["logos", "icons", "food items", "everyday objects", "fashion accessories", "typography"],
    "visual_requirements": ["well-defined silhouette", "clean shapes for gem placement"],
    "scalability": "best results on medium to large subjects for detailed sparkle"
  }
}
```

**中文提示词：**
```
使用提供的 JSON 参数重新创建此图像。

{
"style_name": "钻石镶嵌奢华风格",
  "description": "将超逼真的钻石镶嵌风格应用于任何物体、标志或形状。主体的表面完全覆盖着闪闪发光的宝石，这些宝石以强烈的亮度反射光线，营造出奢华、引人注目和超现实的效果。",
  "surface_texture": {
    "material": "钻石水晶",
"涂层": "完全镶嵌有多面钻石",
"闪耀强度": "最大",
"反射类型": "镜面和高折射率",
"细节密度": "超精细，微宝石覆盖，无间隙"
"light_refraction": "通过切面产生强烈的彩虹色散"
  },
  "lighting": {
    "light_source": "硬直射光源",
"高光效果": "镜头眩光，宝石边缘的闪光眩光",
    "阴影类型": "柔和边缘，低不透明度的阴影以形成对比",
    "光泽度": "非常高",
    "反射源": "宝石切面的环境光和直接高光"
  },
"background": {
    "type": "极简纯色",
    "color": " #B0C4DE ",
"纹理": "光滑磨砂质感",
"与主体对比度": "高对比度以增强闪耀效果",
"深度": "物体下方微妙阴影以产生悬浮效果"
  },
"color_palette": {
    "primary": "透明白色（钻石基底）",
    "secondary": "棱镜反射（彩虹光散）",
    "accent": "边缘金属光泽（可选：金色或银色底色）"
  },
"camera": {
    "angle": "略微俯视角度",
    "depth_of_field": "浅景深（物体清晰，背景模糊）",
"镜头效果": ["微距对焦", "闪烁高光", "光晕"]
  },
  "风格关键词": [
    "迷人",
"奢侈",
"水晶覆盖的",
"闪亮",
"超精细的",
"闪闪发光的",
"未来感的",
"引人注目的",
"超现实现实主义",
"受时尚启发的"
  ],
  "适用性": {
    "可用于": ["标志", "图标", "食品项目", "日常用品", "时尚配饰", "字体"],
"视觉要求": ["轮廓清晰", "宝石放置的形状干净"],
    "可扩展性": "在中等至大型对象上获得最佳效果，以展现细节闪烁"
  }
}
```

<a id="prompt-220"></a>
## 案例 220：3D店铺渲染图 (来源 [@TechieBySA](https://x.com/TechieBySA/status/1943242512820273451))

<div style="display: flex; justify-content: space-between;">
<img src="./images/220.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-3D店铺渲染图">
</div>

**提示词：**
```
Ultra-realistic 3D render of a cute, miniature [BRAND NAME] storefront building. Designed using the brand’s signature style and color palette. Features a clean, modern exterior with large glass windows and a glowing 3D [BRAND NAME] logo sign on the front. Includes subtle branded props inside the store. Background matches the brand’s identity — clean, relevant, and atmospheric. Slight isometric angle, warm lighting, soft shadows, and centered composition. 
```

**中文提示词：**
```
逼真的 3D 渲染图，展示了一个可爱、迷你版的[品牌名称]店铺建筑。采用品牌的标志性风格和色彩搭配设计。外部设计简洁现代，配有大型玻璃窗，正面有一个发光的 3D[品牌名称]标志。店内包含细微的品牌道具。背景与品牌身份相匹配——干净、相关且富有氛围。略微的等距角度，温暖的照明，柔和的阴影，居中构图。
```

<a id="prompt-219"></a>
## 案例 219：冬日国家 (来源 [@TheRelianceAI](https://x.com/TheRelianceAI/status/1942870693625897385))

<div style="display: flex; justify-content: space-between;">
<img src="./images/219.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-冬日国家">
<img src="./images/219-2.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-冬日国家">
</div>

**提示词：**
```
A super detailed, realistic snow globe containing the essence of [Country Name]. Inside the globe: miniature snowy landscapes, iconic landmarks, cultural symbols, and natural elements representing [Country Name], rendered with extreme realism and rich textures. Delicate falling snow creates a magical, atmospheric effect inside the globe. The background is clean and softly lit to focus entirely on the globe. The image is 1:1 aspect ratio. At the bottom of the image, the text “[Country Name]” is clearly written in an elegant serif font
```

**中文提示词：**
```
一个超级精细、逼真的雪球，包含着[国家名称]的精髓。球内：微型的雪景、标志性建筑、文化符号以及代表[国家名称]的自然元素，以极致的逼真感和丰富的纹理呈现。细腻的飘落雪花在球内营造出神奇的、充满氛围的效果。背景干净且柔和照明，完全聚焦于雪球。图像为 1:1 的宽高比。图像底部，用优雅的衬线字体清晰地书写着“[国家名称]”
```

<a id="prompt-218"></a>
## 案例 218：超现实的黑白彩色页面 (来源 [@gnrlyxyz](https://x.com/gnrlyxyz/status/1942942055740678318))

<div style="display: flex; justify-content: space-between;">
<img src="./images/218.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-超现实的黑白彩色页面">
</div>

**提示词：**
```
Create a psychedelic black and white coloring page featuring melting [SUBJECT] in the center, surrounded by large, playful shapes and smooth flowing patterns. The background includes whimsical and surreal elements such as sunflowers with eyes, melting eyeballs, melting hearts, melting mushrooms, clouds, and stars. Use bold, clean outlines and fully enclosed shapes to create distinct sections for easy coloring. Avoid excessive fine detail or clutter. Keep the composition open, spacious, and fun. Square aspect ratio with a white background. No text or color.
```

**中文提示词：**
```
创建一个超现实的黑白彩色页面，中心是融化的[主题]，周围有大型、有趣的形状和流畅的图案。背景包括诸如带眼睛的向日葵、融化的眼球、融化的心形、融化的蘑菇、云朵和星星等奇幻和超现实元素。使用粗犷、干净的轮廓和完全封闭的形状来创建易于上色的不同区域。避免过多的精细细节或杂乱。保持构图开放、宽敞和有趣。方形长宽比，白色背景。无文字或颜色。
```

<a id="prompt-217"></a>
## 案例 217：卡通现代风格插画 (来源 [@Artedeingenio](https://x.com/Artedeingenio/status/1942867064378573293))

<div style="display: flex; justify-content: space-between;">
<img src="./images/217.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-卡通现代风格插画">
<img src="./images/217-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-卡通现代风格插画">
</div>

**提示词：**
```
Transform this image into a Cartoon Modern Style illustration, inspired by classic UPA animation like Mr. Magoo and The Jetsons.
Redesign the character using flat, geometric shapes: ovals, rectangles, simple curves and angles. Avoid realistic proportions — the design should be stylized and abstract.
Use a limited color palette, preferably soft pastels or bold contrasts (e.g. mint green, salmon, sky blue, mustard yellow), with flat tones and no gradients.
Simplify facial features and body structure to be iconic and minimalist — large heads, small limbs, expressive poses, but with minimal detail.
The background should be minimal or symbolic, using basic shapes or abstract scenery (floating stairs, blocky furniture, stylized trees or stars).
The final image should look like a frame from a 1950s or 1960s modernist cartoon — playful, graphic, and highly stylized.
```

**中文提示词：**
```
将这张图片转换为卡通现代风格插画，灵感来源于经典的 UPA 动画，如《摩根先生》和《太空家庭》。
使用扁平的几何形状重新设计角色：椭圆形、矩形、简单的曲线和角度。避免真实比例——设计应该是风格化的和抽象的。
使用有限的调色板，最好是柔和的粉彩色或鲜明的对比色（例如薄荷绿、三文鱼色、天空蓝、芥末黄），使用扁平色调且没有渐变。
简化面部特征和身体结构，使其具有标志性且极简——大头、小四肢、富有表现力的姿势，但细节极少。
背景应极简或象征性，使用基本形状或抽象场景（漂浮的楼梯、积木家具、风格化的树木或星星）。
最终图像应像 1950 年代或 1960 年代现代主义卡通的一帧——活泼、图形化且高度风格化。
```

<a id="prompt-216"></a>
## 案例 216：穿越梦境迷宫 (来源 [@B_4AI](https://x.com/B_4AI/status/1942850557548388499))

<div style="display: flex; justify-content: space-between;">
<img src="./images/216.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-穿越梦境迷宫">
<img src="./images/216-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-穿越梦境迷宫">
</div>

**提示词：**
```
[Character] sprinting past dream elements, Storybook illustration, Maze of floating doors, clocks, and whispers, Lantern glow and ambient sparkle trails, [Color1] and [Color2], Whimsical and fast-paced, Follow-cam style with trailing POV
```

**中文提示词：**
```
[角色] 冲过梦境元素，故事书插画风格，漂浮的门、时钟和低语组成的迷宫，灯笼光芒和周围闪烁的轨迹，[颜色 1]和[颜色 2]，奇幻且节奏快速，跟随镜头风格，带有轨迹的 POV 视角
```

<a id="prompt-215"></a>
## 案例 215：Gorillaz风格 (来源 [@azed_ai](https://x.com/azed_ai/status/1942586412920103180))

<div style="display: flex; justify-content: space-between;">
<img src="./images/215.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-Gorillaz风格">
<img src="./images/215-2.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-Gorillaz风格">
</div>

**提示词：**
```
Restyle this image into a gritty Gorillaz-style illustration, bold thick black outlines, sharp angular edges, flat expressive lighting, stylized high-contrast shadows, dirty distressed surface textures, muted color palette: washed-out teals, olive greens, rusty reds, mustard yellows, dusty browns, raw grungy urban atmosphere, comic book flatness mixed with painterly grit, hand-drawn finish with faded gradients, graphic novel aesthetic
with a rebellious, animated tone, dark stylish tone, full of attitude.
```

**中文提示词：**
```
将这张图片改造成硬朗的 Gorillaz 风格插画，粗犷的黑色轮廓线，尖锐的角边，平面化的表现性光照，风格化的高对比度阴影，脏污的磨损表面纹理，柔和的调色板：褪色的蓝绿色，橄榄绿，锈红色，芥末黄，尘土棕，原始的粗糙都市氛围，漫画书平面感与绘画性粗糙的混合，手绘效果带有褪色渐变，漫画小说美学带有叛逆、动画化的风格，暗黑时尚的调调，充满态度。
```

<a id="prompt-214"></a>
## 案例 214：部分咬掉的糕点 (来源 [@umesh_ai](https://x.com/umesh_ai/status/1942635640816034224))

<div style="display: flex; justify-content: space-between;">
<img src="./images/214.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-部分咬掉的糕点">
<img src="./images/214-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-部分咬掉的糕点">
</div>

**提示词：**
```
A high-resolution, studio-lit macro photograph of a pastry shaped like a [SUBJECT], with a partial bite taken out, placed on a neutral matte surface with visible crumbs and soft shadows, highlighting texture and detail
```

**中文提示词：**
```
一张高分辨率的、影棚照明的微距照片，展示一个形状像[主题]的糕点，部分咬掉，放在一个中性哑光表面上，有明显的面包屑和柔和的阴影，突出质感和细节
```

<a id="prompt-213"></a>
## 案例 213：3D蓬松的物体 (来源 [@TechieBySA](https://x.com/TechieBySA/status/1942882098567618686))

<div style="display: flex; justify-content: space-between;">
<img src="./images/213.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-3D蓬松的物体">
</div>

**提示词：**
```
Transform the [BRAND NAME] logo into a hyper-realistic, 3D fluffy object. Keep the original shape and exact brand colors. Cover the entire surface in soft, detailed fur with a realistic hair texture. Use cinematic lighting to create subtle backlighting and soft shadows, making the logo appear tactile and surreal. Place the logo in the center of a clean black background, floating gently with a modern, stylish look. The style should feel cozy, playful, and visually striking. Render in ultra-high 4K resolution with photorealistic quality. 
```

**中文提示词：**
```
将[品牌名称]标志转化为超逼真、3D 蓬松的物体。保持原始形状和品牌的确切颜色。用柔软、细节丰富的毛皮覆盖整个表面，具有逼真的毛发纹理。使用电影感光效创造微妙的后光和柔和的阴影，使标志看起来有触感和超现实。将标志放在干净黑色背景的中心，轻轻漂浮，具有现代时尚感。风格应感觉温馨、俏皮、视觉上引人注目。以超高清 4K 分辨率渲染，具有照片级真实质量。
```

<a id="prompt-212"></a>
## 案例 212：品牌在悬浮平台上 (来源 [@TheRelianceAI](https://x.com/TheRelianceAI/status/1942981383820845445))

<div style="display: flex; justify-content: space-between;">
<img src="./images/212.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-品牌在悬浮平台上">
<img src="./images/212-2.png" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-品牌在悬浮平台上">
</div>

**提示词：**
```
A highly detailed cinematic advertisement scene featuring [TYPE OF ALCOHOL, BRAND], standing on a surreal floating platform that visually embodies its spirit. The platform is made of materials that represent the drink’s essence (e.g. sparkling crystals for champagne, rich dark wood for whiskey, frosted ice for vodka), with dramatic reflections and melting details dripping into a calm reflective water surface. A matching glass is filled with the drink, featuring artistic textures (ice, gems, swirling liquid). Soft, colorful sunset sky with dramatic clouds in the background, high-end luxury aesthetic, photorealistic, macro details, dreamy glow, premium product photography.
```

**中文提示词：**
```
一个高度细致的影视广告场景，展示[酒类类型，品牌]，站在一个体现其精神的超现实悬浮平台上。平台由代表饮品本质的材料制成（例如香槟的闪亮水晶、威士忌的浓郁深色木材、伏特加的冰霜），戏剧性的倒影和融化的细节滴入平静的反射水面。一个匹配的玻璃杯装满了饮品，具有艺术纹理（冰块、宝石、旋转的液体）。柔和的彩色日落天空背景中有戏剧性的云朵，高端奢华美学，照片级真实感，宏观细节，梦幻般的光芒，高端产品摄影。
```

<a id="prompt-211"></a>
## 案例 211：灯泡中的城市 (来源 [@TechieBySA](https://x.com/TechieBySA/status/1942976425281114576))

<div style="display: flex; justify-content: space-between;">
<img src="./images/211.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-灯泡中的城市">
<img src="./images/211-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-灯泡中的城市">
</div>

**提示词：**
```
Create a hyper-realistic, stylish poster featuring a light bulb lying on wet urban asphalt. Inside the bulb, place a miniature version of [CITY] with its iconic landmarks. A sleek white 3D text of the city name ‘[CITY]’ should stand prominently in front of the bulb. The background is a softly blurred cityscape with neon lights reflecting on the bulb’s glass and the wet pavement. Add volumetric moonlight for depth and atmosphere. The image should look like a high-quality DSLR photograph with sharp details, cinematic lighting, and a moody, futuristic vibe. 
```

**中文提示词：**
```
创作一张超逼真、时尚的海报，展示一个躺在湿漉漉的城市柏油路面上的灯泡。在灯泡内部放置一个[CITY]的微缩版，并包含其标志性地标。在灯泡前方，应突出显示一个光滑的白色 3D 文字，写着城市名称‘[CITY]’。背景是柔和模糊的城市景观，霓虹灯光在灯泡的玻璃和湿滑的路面上映射。添加体积光以增强深度和氛围。图像应看起来像一张高质量的数码单反相机照片，具有清晰的细节、电影般的灯光和忧郁的未来感。
```

<a id="prompt-210"></a>
## 案例 210：90年代风格的摔跤人物 (来源 [@CharaspowerAI](https://x.com/CharaspowerAI/status/1934287289154228450))

<div style="display: flex; justify-content: space-between;">
<img src="./images/210.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-90年代风格的摔跤人物">
<img src="./images/210-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-90年代风格的摔跤人物">
</div>

**提示词：**
```
Product photography, a 1990's style WWF Wrestling Figurine package with the figurine wrestler in the package being [your character]. The figure features bright colors, a detailed character design,  white background with professional studio lighting.
```

**中文提示词：**
```
产品摄影，一个 90 年代风格的 WWF 摔角人偶包装，包装中的人偶是[你的角色]。人偶色彩鲜艳，角色设计精细，背景为白色，配有专业工作室灯光。
```

<a id="prompt-209"></a>
## 案例 209：吃掉你的文字 (来源 [@aziz4ai](https://x.com/aziz4ai/status/1935749368876867967))

<div style="display: flex; justify-content: space-between;">
<img src="./images/209.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-吃掉你的文字">
<img src="./images/209-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-吃掉你的文字">
</div>

**提示词：**
```
Create the word “[WORD]” made entirely from its real texture and styled using the identity of the most iconic brand associated with it.

The word should:
• Visually reflect the material (e.g. honey, chocolate, soda, candy).
• Use the brand’s signature colors and typography.
• Include the brand logo beneath the word.
• Add a short slogan (3–4 words) matching the product’s vibe.
• Be centered in a minimal background inspired by the product (e.g. breakfast table, soda splash, cookie tray).

• Dimensions: 1:1
• Style: clean, bold, product-focused
• Render: ultra-HD, HDR, 8K
```

**中文提示词：**
```
创建由其真实质感完全构成，并使用与其最具有标志性的品牌相联系的标识进行风格的“[单词]”。

该单词应：
• 视觉上反映材料（例如蜂蜜、巧克力、汽水、糖果）。
• 使用该品牌的标志性颜色和字体。
• 在文字下方包含品牌标志。
• 添加一个与产品氛围相符的简短口号（3-4 个字）。
• 居中放置在受产品启发的简约背景中（例如：早餐桌、汽水飞溅、饼干托盘）。

• 尺寸：1:1
• 风格：简洁、醒目、以产品为中心
• 渲染：超高清、HDR、8K
```

<a id="prompt-208"></a>
## 案例 208：逼真的产品照片 (来源 [@azed_ai](https://x.com/azed_ai/status/1934250327693476182))

<div style="display: flex; justify-content: space-between;">
<img src="./images/208.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-逼真的产品照片">
<img src="./images/208-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-逼真的产品照片">
</div>

**提示词：**
```
A realistic product photo of a [brand name] [bottle or jar] sculpted entirely from fresh [ingredient name], arranged perfectly to form the shape of the original packaging, including a detailed and accurate label on the front. The background is a clean, soft light gray with a natural wooden surface. Studio lighting, soft shadows, 1:1 square composition, professional product photography style, ultra-detailed textures, vibrant and glossy finish
```

**中文提示词：**
```
一个逼真的产品照片，展示一个[品牌名称][瓶子或罐子]，完全由新鲜[原料名称]雕刻而成，完美排列形成原始包装的形状，包括前面详细且准确的标签。背景是干净柔和的浅灰色，带有自然木质表面。工作室灯光，柔和阴影，1:1 方形构图，专业产品摄影风格，超精细纹理，生动有光泽的表面。
```

<a id="prompt-207"></a>
## 案例 207：超现实的高冲击力的图像 (来源 [@azed_ai](https://x.com/azed_ai/status/1925576114803749307))

<div style="display: flex; justify-content: space-between;">
<img src="./images/207.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-超现实的高冲击力的图像">
<img src="./images/207-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-超现实的高冲击力的图像">
</div>

**提示词：**
```
Create a hyperrealistic, high-impact image of a [subject] suspended mid-air, captured at the peak of an explosive moment. Surround it with dynamic [particles/splashes/fragments] that enhance motion and energy. macro-level detail, bold rim lighting, and a vibrant [background color] to emphasize form, texture, and contrast, cinematic, modern, and visually striking. perfect for premium product campaigns.
```

**中文提示词：**
```
创建一个超现实的、高冲击力的图像，展示一个[主题]在空中悬停，捕捉到爆炸性时刻的巅峰。用动态的[粒子/飞溅/碎片]围绕它，增强运动感和能量。宏观细节，大胆的边缘照明，以及充满活力的[背景颜色]，以强调形状、质感和对比度，电影般的、现代的、视觉上引人注目。非常适合高端产品活动。
```

<a id="prompt-206"></a>
## 案例 206：工业内部品牌广告 (来源 [@aziz4ai](https://x.com/aziz4ai/status/1933698466577866902))

<div style="display: flex; justify-content: space-between;">
<img src="./images/206.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-工业内部品牌广告">
<img src="./images/206-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-工业内部品牌广告">
</div>

**提示词：**
```
Create a hyperrealistic, surreal 1:1 advertisement for [Brand Name].
Transform the product into a miniature industrial factory or laboratory from the inside.
Reveal detailed internal systems: pipes, workers, glowing fluids, steam, and machines — all functioning to reflect the product’s core purpose (energy, beauty, flavor, etc).
Keep the outer product branding realistic and sharp.
Set the background minimal and cinematic.
Add the brand logo at the top, and a short, powerful slogan at the bottom.
Style: studio-grade lighting, high contrast, photorealistic textures.
```

**中文提示词：**
```
创建一个超现实、1:1 比例的品牌广告。
将产品内部转化为微型工厂或实验室。
展示详细的内部系统：管道、工人、发光的液体、蒸汽和机器——所有这些都运作起来，反映产品的核心功能（能量、美丽、风味等）。
保持外层产品的品牌标识真实锐利。
将背景设置得简约且电影感十足。
在顶部添加品牌标志，底部添加一句简短有力的口号。
风格：影棚级灯光，高对比度，照片级真实纹理。
```

<a id="prompt-205"></a>
## 案例 205：以动物为灵感的品牌 (来源 [@Kerroudjm](https://x.com/Kerroudjm/status/1935037246182408301))

<div style="display: flex; justify-content: space-between;">
<img src="./images/205.png" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-以动物为灵感的品牌">
</div>

**提示词：**
```
A high-quality studio photograph of a [BRAND + OBJECT] fully covered in ultra-realistic [ANIMAL] texture (e.g., fur, feathers, skin, or scales), placed against a soft neutral background. The object’s original shape, key design elements, and brand identity remain clearly visible beneath the animal’s organic surface. Integrate the official logo of the brand prominently into the composition. Automatically generate a compelling and brand-appropriate slogan that draws symbolic inspiration from the animal’s qualities and matches the tone of a premium advertising campaign. The image must feature clean composition, soft shadows, minimalist styling, professional lighting, and highly detailed textures—each hair, scale, or wrinkle should be visible in sharp detail. Format 1:1.
```

**中文提示词：**
```
一张高品质的影棚照片，展示一个[品牌+物品]完全覆盖着超逼真的[动物]纹理（例如毛发、羽毛、皮肤或鳞片），放置在柔和的中性背景前。物品的原始形状、关键设计元素和品牌标识在动物的自然表面下依然清晰可见。将品牌的官方标志显著地融入构图。自动生成一个引人入胜且符合品牌调性的口号，从动物的品质中汲取象征性灵感，匹配高端广告活动的基调。图像必须具备整洁的构图、柔和的阴影、极简风格、专业的灯光和高度精细的纹理——每一根毛发、鳞片或皱纹都应在锐利的细节中清晰可见。格式 1:1。
```

<a id="prompt-204"></a>
## 案例 204：黑客帝国的绿色代码 (来源 [@umesh_ai](https://x.com/umesh_ai/status/1920343010975551554))

<div style="display: flex; justify-content: space-between;">
<img src="./images/204.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-黑客帝国的绿色代码">
<img src="./images/204-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-黑客帝国的绿色代码">
</div>

**提示词：**
```
Transform this image into a digital Matrix-style scene. The background and subject should be composed of cascading neon green code on a black backdrop, similar to the iconic Matrix digital rain. Use glowing green symbols (Japanese katakana, numbers, and Latin letters), with some motion blur and depth. Add subtle lighting effects to simulate screen glow and enhance the cyberpunk, high-tech atmosphere
```

**中文提示词：**
```
将这张图像转化为数字《黑客帝国》风格场景。背景和主题应由倾泻而下的霓虹绿色代码组成，在黑色背景下，类似于标志性的《黑客帝国》数字雨。使用发光的绿色符号（日语假名、数字和拉丁字母），带有一些运动模糊和深度。添加微妙的光照效果来模拟屏幕辉光，增强赛博朋克、高科技氛围
```

<a id="prompt-203"></a>
## 案例 203：3D表情符号头部 (来源 [@TechieBySA](https://x.com/TechieBySA/status/1942928111244394788))

<div style="display: flex; justify-content: space-between;">
<img src="./images/203.jpeg" style="width: 98%;" alt="Awesome GPT4o/GPT-4o Image Prompts-3D表情符号头部">
</div>

**提示词：**
```
Generate a hyper-realistic 3D render of a [EMOJI🐱] as a floating animal head with plush toy aesthetics. The design should emphasize ultra-soft, long fur, playful cuteness, and a childlike charm. Use a straight-on camera angle with soft, diffused lighting to create a warm and inviting glow. Keep the background pure white for a clean, modern look. The color palette should be vibrant yet soothing, enhancing the toy-like appeal. Style: Ultra-detailed, whimsical, and hyper-cute, blending realism with a soft, plush texture for maximum visual impact.
```

**中文提示词：**
```
生成一个超逼真的 3D 渲染效果，将[表情符号 🐱 ]设计成一个漂浮的动物头部，具有毛绒玩具的美学风格。设计应强调超柔软的长毛、俏皮可爱和童真魅力。使用正面直视的相机角度，搭配柔和的漫射光线，营造出温暖诱人的光泽。保持背景纯白色，以呈现干净现代的外观。色彩搭配应鲜明而舒缓，增强玩具般的吸引力。风格：超精细、奇幻、超可爱，将现实主义与柔软的毛绒质感相结合，以达到最大的视觉冲击力。
```

<a id="prompt-202"></a>
## 案例 202：创建半透明图标 (来源 [@azed_ai](https://x.com/azed_ai/status/1942945882548437243))

<div style="display: flex; justify-content: space-between;">
<img src="./images/202.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-创建半透明图标">
<img src="./images/202-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-创建半透明图标">
</div>

**提示词：**
```
Create a 3D-rendered icon of [Subject] in a dreamy, translucent, glass-like plastic material with soft pink and purple hues. glossy, smooth, rounded edges, glowing highlights, and soft shimmer or sparkle effects. UI, floating against a clean white background with soft shadows and natural lighting, elegant, and modern.
```

**中文提示词：**
```
创建一个以[主题]为原型的 3D 渲染图标，采用梦幻般的、半透明的、类似玻璃的塑料材质，带有柔和的粉红色和紫色色调。表面光亮、边缘圆润、高光闪烁，并带有柔和的闪烁或闪光效果。UI 设计，悬浮在干净的白色背景上，带有柔和的阴影和自然光照，优雅且现代。
```

<a id="prompt-201"></a>
## 案例 201：纸上的小卡通角色 (来源 [@jimmj1010](https://x.com/jimmj1010/status/1943040595213324313))

<div style="display: flex; justify-content: space-between;">
<img src="./images/201.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-纸上的小卡通角色">
<img src="./images/201-2.jpeg" style="width: 48%;" alt="Awesome GPT4o/GPT-4o Image Prompts-纸上的小卡通角色">
</div>

**提示词：**
```
 Imagine you’re a tiny cartoon character who has come to life on a piece of paper! Draw yourself running away from a giant pencil that’s trying to erase you. Add colorful pencils, a desk, and maybe some flying eraser bits for extra excitement. Use your wildest imagination to make it look like you’re bursting out of the page!
```

**中文提示词：**
```
想象你是一个在纸上活过来的小卡通角色！画自己从一只试图擦掉你的巨大铅笔逃跑。添加彩色铅笔、书桌，也许还有一些飞行的橡皮屑以增加乐趣。用你最狂野的想象力让它看起来像是从页面上爆发出来！
```
