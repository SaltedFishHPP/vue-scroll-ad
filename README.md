# vue-scroll-ad

> Ad scrolling plugin for VUE 基于vue的广告滚动插件

##### 效果图
![效果图](https://raw.githubusercontent.com/SaltedFishHPP/vue-scroll-ad/master/effect.gif "效果图")
##### Build Setup 使用步骤

``` 
#安装
npm install --save vue-scroll-ad

#使用
main.js中
import scrollAd from 'vue-scroll-ad'
Vue.use(scrollAd)

html中
<scroll-ad :dataList  | 数据  |="adList"></scroll-ad>
```

##### 配置
|  props  |  describe  |  type  |  default  |
| ------------ | ------------ | ------------ | ------------ |
|  dataList  |  数据  |  Array  |  []  |
|  inhoverColor  |  显示的颜色  |  String  |  #b4a078  |
|  hoverColor  |  鼠标悬浮时的颜色  |  String  |  #fff  |
|  height  |  高度  |  String  |  10px  |
|  hasLine  |  是否有下划线  |  Boolean  | false  |
|  hasBorder  |  横向多数据是否有分割线  |  Boolean  |  false  |
|  speed  |  速度  |  Number  |  5000  |
|  valueList  |  横线显示的子数据参数名  |  String  |  list  |
|  valueContent  |  显示的内容的参数名  |  String  |  content  |
|  valueLink  | 跳转的链接的参数名  |  String  |  link  |

##### 使用示例
###### 单列有下划线
 ```
<scroll-show class="ad"
 	:dataList="adList"
 	hover-color="#b4a078"
 	inhover-color="#000"
 	:hasLine="true"
></scroll-show>
 
adList: [
	{ content: "广告内容1", link: "xxx.com" },
	{ content: "广告内容2", link: "xxx.com" },
	{ content: "广告内容3", link: "xxx.com" },
	{ content: "广告内容4", link: "xxx.com" },
	{ content: "广告内容5", link: "xxx.com" },
	{ content: "广告内容6", link: "xxx.com" }
],
```
list的格式如果是: [{ content: "xxx", link: "xxx.com" }],则不需要传valueContent和valueLink，否则需要制定内容和链接的自定义参数名
 
######  多列无下划线
```
<scroll-show class="ad"
 	:dataList="adList2"
 	:speed="3000"
 	hover-color="#b4a078"
 	inhover-color="#969696"
 	value-list="subList"
 	value-content="adContent"
 	value-link="adLink"
></scroll-show>
 
adList2: [
 	{
		subList: [ 
			{ adContent: "第1条广告的第1条内容", adLink: "xxx.com" },
			{ adContent: "第1条广告的第2条内容", adLink: "xxx.com" },
			{ adContent: "第1条广告的第3条内容", adLink: "xxx.com" },
			{ adContent: "第1条广告的第4条内容", adLink: "xxx.com" }
		]
	},
	{
		subList: [
			{ adContent: "第2条广告的第1条内容", adLink: "xxx.com" },
			{ adContent: "第2条广告的第2条内容", adLink: "xxx.com" },
			{ adContent: "第2条广告的第3条内容", adLink: "xxx.com" },
			{ adContent: "第2条广告的第4条内容", adLink: "xxxx.com" }
		]
	},
	{
		subList: [
			{ adContent: "第3条广告的第1条内容", adLink: "xxx.com" },
			{ adContent: "第3条广告的第2条内容", adLink: "xxx.com" },
			{ adContent: "第3条广告的第3条内容", adLink: "xxx.com" },
			{ adContent: "第3条广告的第4条内容", adLink: "xxx.com" }
		]
	}
],
```
多列展示需要list数据中还有subList数据，默认的sub参数名为list，如果不一致，则需要传value-list=""进行自定义命名
 
 

GitHub地址(https://github.com/SaltedFishHPP/vue-scroll-ad).
