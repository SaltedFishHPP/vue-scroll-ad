<template>
    <div class="scroll-show-contain">
        <ul class="title-ad" :class="[{anim:animate==true}]">
          <li class="title-li" v-for="(item, index) in list" :key="'ad'+index">
            <div v-if="item.list">
                <span
                    v-for="(subItem, subIndex) in item.list"
                    :key="'sub'+ subIndex"
                    class="ad-list"
                    :style="'border-color:' + inhoverColor"
                    >
                    <a
                        class="ad-details"
                        @mouseover="mouseOver(subItem)" 
                        @mouseleave="mouseLeave(subItem)"
                        :style="subItem.isActive?adHoverColor:adinHoverColor"
                        :href="subItem.link"
                        target="_blank"
                        :class="hasLine?'has-line':'has-no-line'">
                        {{subItem.content}}
                    </a>
                </span>
            </div>
            <a
                v-else
                class="ad-list"
                :class="hasLine?'has-line':'has-no-line'"
                @mouseover="mouseOver(item)" 
                @mouseleave="mouseLeave(item)" 
                :style="item.isActive?adHoverColor:adinHoverColor"
                :href="item.link"
                target="_blank">
                <span class="ad-details">{{item.content}}</span>
            </a>
          </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'vue-scroll-ad',
    props:{
        dataList:{
            default: ()=>[]
        },
        hoverColor:{
            default:'#fff',
            type: String
        },
        inhoverColor:{
            default:'#b4a078',
            type: String
        },
        height:{
            default:'10px',
            type: String
        },
        hasLine:{
            default:false,
            type: Boolean
        },
        hasBorder:{
            default:false,
            type: Boolean
        },
        speed:{
            default:5000,
            type: Number
        },
        valueList:{
            default: 'list'
        },
        valueContent:{
            default: 'content'
        },
        valueLink:{
            default: 'link'
        }
    },
    data(){
        return{
            animate: false,
            list: [],
            adHoverColor: 'color: '+this.hoverColor,
            adinHoverColor: 'color: '+this.inhoverColor,
            scrollInterval: null,
        }
    },
    created() {
        this.list = this.dataList
        // 替换数组名
        this.changeData()
        if(this.list && this.list.length == 1){
            this.list = this.list.concat(this.list)
        }
        this.scroll()
    },
    methods: {
        changeData(){
            this.list.map(res=>{
                if(res[this.valueList]){
                    if(this.valueList != 'list'){
                        res.list = res[this.valueList]
                        delete res[this.valueList]
                        res.list.map(subRes=>{
                            if(this.valueContent != 'content'){
                                subRes.content = subRes[this.valueContent]
                                delete subRes[this.valueContent]
                            }
                            if(this.valueLink != 'link'){
                                subRes.link = subRes[this.valueLink]
                                delete subRes[this.valueLink]
                            }
                        })
                    }
                } else{
                    if(this.valueContent != 'content'){
                        res.content = res[this.valueContent]
                        delete res[this.valueContent]
                    }
                    if(this.valueLink != 'link'){
                        res.link = res[this.valueLink]
                        delete res[this.valueLink]
                    }
                }
            })            
        },
        mouseOver(item){
            this.$set(item, 'isActive', 'true')
        },
        mouseLeave(item){
            item.isActive = false
        },
        scroll() {
            clearTimeout(this.scrollInterval);
            this.scrollInterval = setTimeout(() => {
                this.animate = true;
                setTimeout(() => {
                    this.list.push(this.list[0]);
                    this.list.shift(0);
                    this.animate = false;
                },this.speed/2);
                this.scroll();
            }, this.speed);
        }
    }
    
}
</script>
<style lang="less">
.scroll-show-contain{
    height: 36px;
    overflow: hidden;
    .title-ad {
        overflow: hidden;
        list-style: none;
        margin-top: 0px;
        height: 100%;
        width: 100%;
        .title-li{
            line-height: 36px;
            .ad-list {
                text-decoration: none;
                border-left: 1px solid #000;
                margin-right: 5px;
                padding-left: 7px;
                padding-right: 0;
                &:first-child{
                    border-left: none;
                    padding-left: 0;
                }
                .ad-details{
                    cursor: pointer;
                }
            }
            .has-line{
                text-decoration: underline;
            }
            .has-no-line{
                text-decoration: none;
            }
        }
    }
    .anim {
        transition: all 1s;
        margin-top: -36px;
        height: 72px;
    }

}

</style>
