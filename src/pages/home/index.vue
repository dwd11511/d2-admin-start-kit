<template>
  <d2-container type='ghost'>
    <div class='d2-pt d2-pb'>
      <el-card shadow='never' class='d2-card' style='width: 30%; float: left; min-width:300px' >
          <h4 style='margin-left: 40%'>总报告</h4>
          <ve-pie :data='pie.data' :settings='pie.settings'></ve-pie>
      </el-card>
      <el-card shadow='never' class='d2-card' style='width: 30%; float: left; min-width:300px' >
          <h4 style='margin-left: 40%'>总签名</h4>
          <ve-pie :data='pie.data' :settings='pie.settings'></ve-pie>
      </el-card>
      <el-card shadow='never' class='d2-card' style='width: 30%; float: left; min-width:300px' >
          <h4 style='margin-left: 40%'>总流量</h4>
          <ve-pie :data='pie.data' :settings='pie.settings'></ve-pie>
      </el-card>
      <el-card shadow='never' class='d2-card' style='width: 92%; float: left; min-width:900px' >
          <ve-bar :data='bar.data' :settings='bar.settings'>
          </ve-bar>
      </el-card>
    </div>
  </d2-container>
</template>
<script>

export default {
  data () {
    return {
      pie: {
        data: {
          columns: ['日期', '访问用户'],
          rows: [
            { 日期: '1/1', 访问用户: 1393 },
            { 日期: '1/2', 访问用户: 3530 },
            { 日期: '1/3', 访问用户: 2923 },
            { 日期: '1/4', 访问用户: 1723 },
            { 日期: '1/5', 访问用户: 3792 },
            { 日期: '1/6', 访问用户: 4593 }
          ]
        },
        settings: {
        }
      },
      bar: {
        data: {
          columns: ['日期', '报告', '签名'],
          rows: [
            { 日期: '1/1', 报告: 1393, 签名: 1093 },
            { 日期: '1/2', 报告: 3530, 签名: 3230 },
            { 日期: '1/3', 报告: 2923, 签名: 2623 },
            { 日期: '1/4', 报告: 1723, 签名: 1423 },
            { 日期: '1/5', 报告: 3792, 签名: 3492 },
            { 日期: '1/6', 报告: 4593, 签名: 4293 }
          ]
        },
        settings: {
          stack: { 用户: ['报告', '签名'] }
        }
      }
    }
  }
}
</script>
