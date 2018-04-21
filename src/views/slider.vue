<template>
    <div>
        <Slider v-model="value4" :step="10"></Slider>
        <Slider v-model="value5" :step="10" range></Slider>
        <Slider v-model="value6" :step="10" show-stops></Slider>
        <Slider v-model="value7" :step="10" show-stops range>
        </Slider><Slider v-model="value8" show-input></Slider>

    </div>
</template>
<script>
    export default {
        data () {
            return {
                value4: 30,
                value5: [20, 50],
                value6: 30,
                value7: [20, 50],
                value8: 25
            };
        }
    };
</script>
