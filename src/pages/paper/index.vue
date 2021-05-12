<template>
  <d2-container type='ghost'>
    <div class='d2-pt d2-pb'>
      <el-card shadow='never' class='d2-card' style='width: 800px; float: left' >
        <ve-histogram :data='line.chartData' :settings='line.settings'></ve-histogram>
      </el-card>
      <el-card shadow='never' class='d2-card' style='width: 800px; float: left' >
        <d2-crud
          :columns='table.columns'
          :data='table.data'
          :options='table.options'/>
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
            key: 'website',
            filters: [
              { text: 'a', value: 'a' },
              { text: 'b', value: 'b' }
            ],
            filterMethod (value, row) {
              return row.tag === value
            },
            filterPlacement: 'bottom-end'
          },
          {
            title: '数量',
            key: 'number',
            sortable: true
          }
        ],
        data: [
          {
            date: '2016-05-02',
            website: 'a',
            number: 23
          },
          {
            date: '2016-05-02',
            website: 'b',
            number: 23
          },
          {
            date: '2016-05-01',
            website: 'a',
            number: 12
          },
          {
            date: '2016-05-01',
            website: 'b',
            number: 12
          }
        ],
        options: {
          defaultSort: {
            prop: 'date',
            order: 'descending'
          }
        }
      },
      line: {
        chartData: {
          columns: ['日期', '报告总量', '新增报告'],
          rows: [
            { 日期: '1/1', 新增报告: 10, 报告总量: 1000 },
            { 日期: '1/2', 新增报告: 20, 报告总量: 1020 },
            { 日期: '1/3', 新增报告: 40, 报告总量: 1060 },
            { 日期: '1/4', 新增报告: 80, 报告总量: 1140 },
            { 日期: '1/5', 新增报告: 40, 报告总量: 1180 },
            { 日期: '1/6', 新增报告: 20, 报告总量: 1200 }
          ]
        },
        settings: {
          stack: { 数量: ['新增报告', '报告总量'] },
          showLine: ['报告总量']
        }
      }
    }
  }
}
</script>
