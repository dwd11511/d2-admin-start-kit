<template>
  <d2-container type='full'>
    <div class="A">
          <el-card class="pie">
            <h4 style="margin-left: 40%;">报告使用率</h4>
            <ve-pie :data='chartData'></ve-pie>
          </el-card>
          <el-card class="numTable">
            <d2-crud
              :columns="columns"
              :data="data"
              :options="options"/>
          </el-card>
    </div>
    <div class="A">
          <el-card class="pie">
            <h4 style="margin-left: 40%;">报告使用率</h4>
            <ve-pie :data='chartData'></ve-pie>
          </el-card>
          <el-card class="numTable">
            <d2-crud
              :columns="columns"
              :data="data"
              :options="options"/>
          </el-card>
    </div>
  </d2-container>
</template>
<script>

export default {
  data () {
    return {
      columns: [
        {
          title: '日期',
          key: 'date',
          sortable: true
        },
        {
          title: '姓名',
          key: 'name'
        }
      ],
      data: [
        {
          date: '2016-05-02',
          name: '王小虎'
        },
        {
          date: '2016-05-04',
          name: '王小虎'
        },
        {
          date: '2016-05-01',
          name: '王小虎'
        },
        {
          date: '2016-05-03',
          name: '王小虎'
        }
      ],
      options: {
        defaultSort: {
          prop: 'date',
          order: 'descending'
        }
      },
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { 日期: '1/1', 访问用户: 1393 },
          { 日期: '1/2', 访问用户: 3530 },
          { 日期: '1/3', 访问用户: 2923 },
          { 日期: '1/4', 访问用户: 1723 },
          { 日期: '1/5', 访问用户: 3792 },
          { 日期: '1/6', 访问用户: 4593 }
        ]
      }
    }
  }
}
</script>

<style scoped>
  .A {
    display: table-row;
  }
  .A .pie {
    width: 60%;
    float: left;
    min-width:300px;
  }
  .A .numTable {
    width: 30%;
  }
</style>
