<template>
    <div class="content">
        <router-view />
    </div>

    <div class="docker">
        <!-- BEM CSS命名规范 -->
        <div
            class="docker__item"
            v-for="(item, index) in dockerList"
            :key="item.iconName"
            :class="{'docker__item--active': index === 0}"
            @click="switchTabs(item.path)"
        >
            <span
                class="docker__item__icon iconfont"
                :class="item.iconName"
            ></span>
            <span class="docker__item__title">{{item.text}}</span>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
    setup () {
        const dockerList = [
            { iconName: 'icon-shouye', text: '首页', path: '/home' },
            { iconName: 'icon-gouwuche', text: '购物车', path: '/cart' },
            { iconName: 'icon-wodedingdan', text: '订单', path: '/order' },
            { iconName: 'icon-wodejuhuasuan', text: '我的', path: '/user' }
        ]

        const router = useRouter()
        const switchTabs = (path) => {
            router.push(path)
        }

        return { dockerList, switchTabs }
    }
}
</script>

<style lang="scss" scoped>
.content {
    background-color: #1fa4fc;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0.5rem;
    overflow: hidden;
}

.docker {
    display: flex;
    position: absolute;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    width: 100%;
    height: 0.5rem;
    padding: 0 0.18rem;
    border-top: 0.01rem solid #f1f1f1;
    &__item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &--active {
            color: #1fa4fc;
        }
        &__icon {
            font-size: 0.2rem;
            margin: 0.07rem 0 0.02rem 0;
        }
        &__title {
            // 浏览器能够显示的最小字体为12px，如何设置10px字体？
            font-size: 0.2rem;
            transform: scale(0.5, 0.5);
            transform-origin: top; /* 等同于top center */
        }
    }
}
</style>
