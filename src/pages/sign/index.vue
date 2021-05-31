<template>
  <d2-container type='ghost'>
    <el-card class="pie">
      <h4>签名种类</h4>
      <ve-pie :data='type.data' :settings='type.setting' height='600%'></ve-pie>
    </el-card>
    <el-card class="pie">
      <h4>可用签名</h4>
      <ve-pie :data='avalible.data' :settings='avalible.setting' height='600%'></ve-pie>
    </el-card>
  </d2-container>
</template>
<script>

export default {
  data () {
    return {
      avalible: {
        data: {
          columns: ['type', 'num'],
          rows: [
            { type: '接口错误', num: '1' }
          ]
        },
        setting: {
          radius: 150,
          offsetY: 350
        }
      },
      type: {
        data: {
          columns: ['type', 'num'],
          rows: [
            { type: '接口错误', num: '1' }
          ]
        },
        setting: {
          radius: 150,
          offsetY: 350
        }
      }
    }
  },
  mounted () {
    this.$axios.get(process.env.VUE_APP_API + 'group_vlun_type').then(response => { this.type.data.rows = response.data.data })
    this.$axios.get(process.env.VUE_APP_API + 'avalible_report').then(response => { this.avalible.data.rows = response.data.data })
  }
}
</script>

<style>
  .pie {
    width: 48%;
    float: left;
    min-width:300px;
    margin: 3px;
    border-radius: 10px;
  }
  h4 {
    text-align: center;
  }
</style>
