<template>
<div class="status-selector">
    <material-form-field>
        <material-radio inputId="status-selector-pending" inputName="status-selector" v-model="pending"/>
        <label for="status-selector-pending">{{ pendingLabel }}</label>
    </material-form-field>
    <material-form-field>
        <material-radio inputId="status-selector-accepted" inputName="status-selector" v-model="accepted"/>
        <label for="status-selector-accepted">{{ acceptedLabel }}</label>
    </material-form-field>
    <material-form-field>
        <material-radio inputId="status-selector-rejected" inputName="status-selector" v-model="rejected"/>
        <label for="status-selector-rejected">{{ rejectedLabel }}</label>
    </material-form-field>
</div>
</template>

<script lang="ts">
import { Vue, Model, Options } from 'vue-property-decorator';

import { umi } from '@/service/umi';

import MaterialFormField from '@/components/material/FormField.vue';
import MaterialRadio from '@/components/material/Radio.vue';

@Options({
    components: {
        MaterialFormField,
        MaterialRadio
    }
})
export default class StatusSelector extends Vue {

    @Model('modelValue', { type: Number, default: umi.StatusCode.Pending }) readonly value!: umi.StatusCode;

    get pendingLabel(): string { return umi.status.get(umi.StatusCode.Pending)!.title; }
    get pending(): boolean { return this.value === umi.StatusCode.Pending; }
    set pending(value: boolean) { if (value) this.$emit('update:modelValue', umi.StatusCode.Pending); }

    get acceptedLabel(): string { return umi.status.get(umi.StatusCode.Accepted)!.title; }
    get accepted(): boolean { return this.value === umi.StatusCode.Accepted; }
    set accepted(value: boolean) { if (value) this.$emit('update:modelValue', umi.StatusCode.Accepted); }

    get rejectedLabel(): string { return umi.status.get(umi.StatusCode.Rejected)!.title; }
    get rejected(): boolean { return this.value === umi.StatusCode.Rejected; }
    set rejected(value: boolean) { if (value) this.$emit('update:modelValue', umi.StatusCode.Rejected); }
}
</script>

<style lang="scss">
.status-selector {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
}
</style>