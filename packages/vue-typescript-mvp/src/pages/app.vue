<template>
  <div class="container">
    <ul class="row list">
      <li class="item" v-for="(item, index) in items" :key="'item-' + index">{{ item.name }}</li>
    </ul>

    <div class="row">
      <button type="button" @click="handleAddItem">Add Item</button>
      <button type="button" @click="handleAddItemAsync">Add Item Async</button>
    </div>
  </div>
</template>

<style>
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { IAppView } from "../mvp/view/base-view";

import { IAppPresenter } from "../mvp/presenter/base-presenter";
import AppPresenterImpl from "../mvp/presenter/impl/app-presenter-impl";

import AppItem from "../mvp/bean/app-item";

@Component({
  props: {}
})
export default class App extends Vue implements IAppView {
  presenter: IAppPresenter;
  items: AppItem[] = [];

  constructor() {
    super();
    this.presenter = new AppPresenterImpl(this);
  }

  handleAddItem(e: MouseEvent) {
    this.presenter.loadData();
  }

  handleAddItemAsync(e: MouseEvent) {
    this.presenter.loadDataAsync(2000);
  }

  addItem(item: AppItem): void {
    this.items.push(item);
  }

  alter(msg: string): void {
    alert(msg);
  }

  mounted() {
    this.presenter.initData();
  }
}
</script>