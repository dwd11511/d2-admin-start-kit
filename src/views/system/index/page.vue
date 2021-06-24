<template>
  <d2-container type='ghost'>
    <div class='d2-pt d2-pb'>
      <el-card shadow='never' class='d2-card top'>
          <h4>总报告</h4>
          <div class="number">{{ paper }}</div>
      </el-card>
      <el-card shadow='never' class='d2-card top'>
          <h4>总签名</h4>
          <div class="number">{{ sign }}</div>
      </el-card>
      <el-card shadow='never' class='d2-card bottom newdata' >
          <h4>新增数据</h4>
          <ve-histogram :data='bar.data' :settings='bar.settings' :extend='bar.extend' height='500%'></ve-histogram>
      </el-card>
    </div>
  </d2-container>
</template>

<script>
export default {
  data () {
    return {
      paper: '加载中',
      sign: '加载中',
      bar: {
        data: {
          columns: ['日期', '新增报告', '新增签名', '比例'],
          rows: [
            { 日期: '加载中', 新增报告: 0, 新增签名: 0, 比例: 0 }
          ]
        },
        settings: {
          dimension: ['日期'],
          axisSite: { right: ['比例'] },
          yAxisType: ['KMB', 'percent'],
          yAxisName: ['数值', '比率']
          // stack: { 数量: ['比例', '新增报告', '新增签名'] }
        },
        extend: {
          series: {
            barWidth: '25%',
            barGap: '-10%',
            label: { show: true, position: 'top' }
          }
        }
      }
    }
  },
  mounted () {
    this.updateInfo()
  },
  methods: {
    updateInfo () {
      this.$axios.get(process.env.VUE_APP_API + 'sum_report_num').then(response => { this.paper = response.data.data })
      this.$axios.get(process.env.VUE_APP_API + 'sum_sign_num').then(response => { this.sign = response.data.data })
      this.$axios.get(process.env.VUE_APP_API + 'last_7days_report_sign_num').then(response => { this.bar.data.rows = response.data.data })
    }
  }
}
</script>

<style lang='css' scoped>
  .d2-card {
    margin: 3px;
    border-radius: 10px;
    float: left;
    min-width:300px；
  }
  .top {
    width: 48%;
  }
  .bottom {
    width: 40%;
  }
  .number {
    font-size: 4em;
    text-align: center;
    background: linear-gradient(45deg, rgb(30, 224, 214) 0%, rgb(43, 231, 159) 33.3%, rgb(70, 173, 56) 66.6%, rgb(39, 207, 185) 33.3%);
    background-clip: text; /*截取背景区域为文字*/
    color: transparent;
    background-size: 300% 100%; /*扩大背景区域*/
    animation: number 2s infinite linear;
  }
  @keyframes number{
    0%  { background-position: 0 0;}
    100% { background-position: -150% 0;}
  }
  h4 {
    text-align: center;
  }
  .flow {
    display: none;
  }
  .newdata {
    width: 97%;
  }
</style>
