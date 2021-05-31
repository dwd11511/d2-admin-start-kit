<template>
  <d2-container type='ghost'>
    <div class='d2-pt d2-pb'>
      <el-card shadow='never' class='line' >
        <ve-histogram height='600%' :data='line.chartData' :settings='line.settings' :extend='line.extend'></ve-histogram>
      </el-card>
      <el-card shadow='never' class='table' >
        <d2-crud
          :columns='table.columns'
          :data='table.data'
          :options='table.options'
          :pagination='table.pagination'/>
      </el-card>
    </div>
  </d2-container>
</template>

<script>
export default {
  data () {
    return {
      table: {
        columns: [
          {
            title: '日期',
            key: 'date',
            sortable: true
          },
          {
            title: '网站',
            key: 'website'
          },
          {
            title: '数量',
            key: 'number',
            sortable: true
          }
        ],
        data: [
          {
            date: '接口错误',
            website: '接口错误',
            number: 0
          }
        ],
        options: {
          defaultSort: {
            prop: 'date',
            order: 'descending',
            height: '500'
          }
        },
        pagination: {
          currentPage: 1,
          pageSize: 10,
          total: 0
        }
      },
      line: {
        chartData: {
          columns: ['日期', '报告总量', '新增报告'],
          rows: [
            { 日期: '接口错误', 新增报告: 0, 报告总量: 0 }
          ]
        },
        settings: {
          stack: { 数量: ['新增报告', '报告总量'] },
          showLine: ['报告总量']
        },
        extend: {
          series: {
            barWidth: 40,
            label: { show: true, position: 'top' }
          }
        }
      }
    }
  },
  mounted () {
    this.$axios.get(process.env.VUE_APP_API + 'last_7days_report_until_sum').then(response => { this.line.chartData.rows = response.data.data })
    this.$axios.get(process.env.VUE_APP_API + 'last_7days_report_source').then(response => { this.table.data = response.data.data })
  }
}
</script>

<style>
  .line {
    width: 50%;
    min-width: 500px;
    float: left;
    margin: 3px;
    border-radius: 10px;
 }
 .table {
   width: 46%;
   min-width: 300px;
   float: left;
   margin: 3px;
   border-radius: 10px;
 }
</style>
