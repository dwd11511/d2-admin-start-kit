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
          title: 'ID',
          key: 'id',
          sortable: true
        },
        {
          title: '用户名',
          key: 'name'
        },
        {
          title: '启用状态',
          key: 'active',
          filters: [
            { text: '启用', value: '启用' },
            { text: '禁用', value: '禁用' }
          ],
          filterMethod (value, row) {
            return row.active === value
          },
          filterPlacement: 'bottom-end'
        }
      ],
      data: [
        {
          id: '接口错误',
          name: '接口错误',
          active: '接口错误'
        }
      ],
      pagination: {
        currentPage: 1,
        pageSize: 15,
        total: 0
      },
      rowHandle: {
        remove: {
          icon: 'el-icon-delete',
          size: 'small',
          fixed: 'right',
          confirm: true,
          show: true,
          disabled (index, row) {
            if (row.active === '启用') {
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
      this.$axios.post(process.env.VUE_APP_API + 'ban/' + row.id)
      setTimeout(
        this.UpdateUser,
        500
      )
    },
    UpdateUser () {
      this.$axios.get(process.env.VUE_APP_API + 'users').then(response => { this.data = response.data.data })
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
