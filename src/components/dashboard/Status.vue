<template>
<div class="status">
    <div v-if="processingMails">
        <div>Processing Mails</div>
        <material-linear-progress :progress="$store.state.progress"/>
    </div>
    <div v-else-if="syncing">Syncing</div>
    <material-button v-else-if="gapiLoaded && !authed" outlined @click="link">Link Google Account</material-button>
    <material-button v-else-if="requestMatch" outlined @click="match">Manually Match</material-button>
    <div v-else-if="gapiLoaded && $store.getters.empty">Please refresh to get nominations</div>
    <div v-else-if="!gapiLoaded && $store.getters.empty">Loading Google API</div>
    <div v-else>
        Latest: XXX
    </div>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import { service } from '@/service';
import { State } from '@/store';

import MaterialButton from '@/components/material/Button.vue';
import MaterialLinearProgress from '@/components/material/LinearProgress.vue';

@Options({
    components: {
        MaterialButton,
        MaterialLinearProgress
    },
})
export default class Status extends Vue {

    get gapiLoaded() {
        return this.$store.state.gapiLoaded;
    }

    get authed() {
        return this.$store.state.gapiAuthed;
    }

    get idle() {
        return this.$store.state.status === State.Status.idle;
    }

    get processingMails() {
        return this.$store.state.status === State.Status.processingMails;
    }

    get syncing() {
        return this.$store.state.status === State.Status.syncing;
    }

    get requestMatch() {
        return this.$store.state.status === State.Status.requestMatch;
    }

    link() {
        service.signIn();
    }

    match() {
        this.$router.push({ path: '/match' });
    }
}
</script>