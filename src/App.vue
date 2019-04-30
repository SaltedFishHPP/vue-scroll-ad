<template>
    <div class="ad-list">
        <p>单列有下划线</p>
        <scroll-show class="ad"
            :dataList="adList"
            hover-color="#b4a078"
            inhover-color="#000"
            :hasLine="true"
        ></scroll-show>
        <p>多列无下划线</p>
        <scroll-show class="ad"
            :dataList="adList2"
            :speed="3000"
            hover-color="#b4a078"
            inhover-color="#969696"
            value-list="subList"
            value-content="adContent"
            value-link="adLink"
        ></scroll-show>
    </div>
</template>
<script>
import ScrollShow from '../src/myPlugin/scrollAd/scroll-ad';

export default {
    components:{
        'scroll-show': ScrollShow
    },
    data(){
        return{
            adList2: [
                {
                    subList: [
                        { adContent: "第1条广告的第1条内容", adLink: "https://www.baidu.com" },
                        { adContent: "第1条广告的第2条内容", adLink: "https://www.baidu.com" },
                        { adContent: "第1条广告的第3条内容", adLink: "https://www.baidu.com" },
                        { adContent: "第1条广告的第4条内容", adLink: "https://www.baidu.com" },
                    ]
                },
                {
                    subList: [
                        { adContent: "第2条广告的第1条内容", adLink: "https://www.baidu.com" },
                        { adContent: "第2条广告的第2条内容", adLink: "https://www.baidu.com" },
                        { adContent: "第2条广告的第3条内容", adLink: "https://www.baidu.com" },
                        { adContent: "第2条广告的第4条内容", adLink: "https://www.baidu.com" },
                    ]
                },
                {
                    subList: [
                        { adContent: "第3条广告的第1条内容", adLink: "https://www.baidu.com" },
                        { adContent: "第3条广告的第2条内容", adLink: "https://www.baidu.com" },
                        { adContent: "第3条广告的第3条内容", adLink: "https://www.baidu.com" },
                        { adContent: "第3条广告的第4条内容", adLink: "https://www.baidu.com" },
                    ]
                }
            ],
            adList: [
                { content: "广告内容1", link: "https://www.baidu.com" },
                { content: "广告内容2", link: "https://www.baidu.com" },
                { content: "广告内容3", link: "https://www.baidu.com" },
                { content: "广告内容4", link: "https://www.baidu.com" },
                { content: "广告内容5", link: "https://www.baidu.com" },
                { content: "广告内容6", link: "https://www.baidu.com" }
            ],
        }
    }
    
}
</script>
<style lang="less">
.ad-list{
    margin-top: 5px;
    font-size: 14px;
      .ad{
          display: inline-block;
          white-space: nowrap;
          margin-right: 5px;
          font-size: 12px;
      }
}

</style>
