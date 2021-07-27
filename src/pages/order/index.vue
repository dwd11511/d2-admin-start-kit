<template>
  <d2-container type='ghost'>
    <el-card>
      <d2-crud
        :columns="columns"
        :data="data"
        :pagination="pagination"
        :rowHandle="rowHandle"
        @row-remove="handleRowRemove"/>
    </el-card>
  </d2-container>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          title: '工单ID',
          key: 'id',
          sortable: true
        },
        {
          title: '创建日期',
          key: 'create_time'
        },
        {
          title: '用户邮箱',
          key: 'email'
        },
        {
          title: '反馈内容',
          key: 'content'
        },
        {
          title: '是否解决',
          key: 'is_complete',
          filters: [
            { text: '已完成', value: true },
            { text: '未完成', value: false }
          ],
          filterMethod (value, row) {
            return row.is_complete === value
          },
          filterPlacement: 'bottom-end'
        }
      ],
      data: [
        {
          id: '加载中',
          email: '加载中',
          create_time: '加载中',
          content: '加载中',
          is_complete: '加载中'
        }
      ],
      pagination: {
        currentPage: 1,
        pageSize: 15,
        total: 0
      },
      rowHandle: {
        remove: {
          text: '已完成',
          icon: 'el-icon-delete',
          size: 'small',
          fixed: 'right',
          confirm: true,
          show: true,
          disabled (index, row) {
            if (!row.is_complete) {
              return false
            }
            return true
          }
        }
      }
    }
  },
  mounted () {
    this.UpdateUser()
  },
  methods: {
    handleRowRemove ({ index, row }, done) {
      this.$axios.post(process.env.VUE_APP_API + 'orders/' + row.id)
      setTimeout(
        this.UpdateUser,
        500
      )
    },
    UpdateUser () {
      this.$axios.get(process.env.VUE_APP_API + 'orders').then(response => { this.data = response.data.data })
    }
  }
}
</script>

<style>
  el-card {
    width: 45%;
    float: left;
    min-width:300px;
    margin: 3px;
    border-radius: 10px;
  }
</style>
