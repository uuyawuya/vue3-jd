<template>
    <div class="docker">
        <!-- BEM CSS命名规范 -->
        <div class="docker__item docker__item--active">
            <span class="docker__item__icon iconfont icon-shouye"></span>
            <span class="docker__item__title">首页</span>
        </div>
        <div class="docker__item">
            <span class="docker__item__icon iconfont icon-gouwuche"></span>
            <span class="docker__item__title">购物车</span>
        </div>
        <div class="docker__item">
            <span class="docker__item__icon iconfont icon-wodedingdan"></span>
            <span class="docker__item__title">订单</span>
        </div>
        <div class="docker__item">
            <span class="docker__item__icon iconfont icon-wodejuhuasuan"></span>
            <span class="docker__item__title">我的</span>
        </div>
    </div>
</template>

<style lang="scss">
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
