import _ from 'lodash'
export default {
  data() {
    return {
      page: 1,
      pageSize: 7,
      pageCount: 0,
      allItems: [],
      items: []
    }
  },
  methods: {
    setupPagination (allItems) {
      this.allItems = _.chunk(allItems, this.pageSize)
      this.pageCount = _.size(this.allItems)
      this.items = this.allItems[this.page - 1] || this.allItems[0]
    },
    pageChangeHandler(page) {
      this.items = this.allItems[page - 1] || this.allItems[0]
    },
    mixinOptions(pageSize) {
      this.pageSize = pageSize
    }
  }
}