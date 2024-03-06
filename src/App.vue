<template>
    <div class="app">
        <dinert-time-player ref="timePlayerRef" :current-time="currentTime"
            @animate-before="animateBefore"
            @animate-after="animateAfter"
        />
        <div class="button">
            <button type="button" @click="$refs.timePlayerRef.startPlay()">开始播放</button>
            <button type="button" @click="$refs.timePlayerRef.stopPlay()">停止播放</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Home',
    data() {
        return {
            currentTime: new Date(),
        }
    },
    methods: {
        animateBefore(config) {
            console.log(config, 'animateBefore')
        },
        animateAfter(config) {
            console.log(config, 'animateAfter')
        }
    }
}
</script>

<style lang="scss" scoped>

.app {
    margin-top: 80px;
}

.button {
    margin: 20px auto;
    text-align: center;

    button {
        margin-left: 20px;
    }
}
</style>
