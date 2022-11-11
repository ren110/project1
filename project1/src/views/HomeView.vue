<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="menuCss el-menu-vertical-demo"
          :default-active="activeIndex"
          :router="true"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <location />
              </el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="/about">item one</el-menu-item>
              <el-menu-item index="/carousel">carousel</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="/tableview">表格</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="/carousel">
              <template #title>carousel</template>
              <el-menu-item index="tableview">表格</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="/carousel">
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="/tableview" disabled>
            <el-icon>
              <document />
            </el-icon>
            <span>表格</span>
          </el-menu-item>
          <el-menu-item index="/carousel">
            <el-icon>
              <setting />
            </el-icon>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      activeIndex:"/carousel"
    };
  },
  mounted () {
    this.activeIndex =this.$route.path
  },
  //   watch: {
  //     activeIndex(newValue){
  //       console.log(newValue,'newValue')
  //             if(newValue != this.$route.path){
  //                     this.activeIndex = this.$route.path;
  //             }
  //     }
  // },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
