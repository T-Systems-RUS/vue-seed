<i18n src="./Header.yml"></i18n>

<template>
  <div class="header">
    <div class="header-bar brand-bar">
      <div class="container">
        <div class="header-bar-inner inner">
          <img src="./assets/deutsche-telekom-logo.svg">
          <strong class="is-pulled-right title is-6 is-uppercase is-marginless">
            {{ $t('life') }}
          </strong>
        </div>
      </div>
    </div>
    <div class="header-bar nav-bar">
      <div class="container">
        <div class="header-bar-inner">
          <div class="title is-5 is-uppercase is-marginless login-left">
            <span class="is-hidden-mobile">{{ $t('project') }}</span>
            <span class="is-hidden-tablet is-hidden-desktop">{{ $t('projectShort') }}</span>
          </div>
          <div class="control is-pulled-right">
            <div class="select">
              <select
                class="is-primary"
                v-model="language">
                <option value="en">EN</option>
                <option value="de">DE</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {CHANGE_LANGUAGE} from '../store/modules/language/mutation-types';

  export default Vue.extend({
    computed: {
      language: {
        get(): string {
          return this.$store.state.language.locale;
        },
        set(value: string) {
          this.$store.commit(CHANGE_LANGUAGE, value);
        }
      }
    }
  });
</script>

<style lang="scss" scoped>
  @import '../styles/variables';
  @import '~bulma/sass/utilities/mixins';

  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;

    .header-bar {
      background-color: $white;
      padding: $header-bar-padding;
      height: $header-bar-height;

      .header-icon {
        width: $building-unit * 2;
        height: $building-unit * 2;
      }

      strong {
        font-size: $small-font-size;
        font-weight: $font-weight-ultra;
        padding-top: $building-unit / 2;
        position: relative;
      }

      &.brand-bar {
        background-color: $magenta;
        color: $white;

        strong {
          color: $white;
        }
      }

      &.nav-bar {
        border-bottom: 1px solid $gray-220;
      }
    }

    .header-bar-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .header-icon-container {
        display: flex;
        justify-content: space-around;
        align-items: center;

        img {
          margin-right: 10px;
        }
      }

      .login-left {
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
</style>
